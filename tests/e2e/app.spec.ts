import { expect, test } from '@playwright/test';
import { FAKE_MIDI_INIT_SCRIPT } from './fake-midi';
import { openApp, state } from './helpers';

test('loads from file:// with no network requests and no console errors', async ({ page }) => {
  const urls: string[] = [];
  const errors: string[] = [];
  page.on('request', (r) => urls.push(r.url()));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(String(e)));
  await openApp(page);
  expect(urls.length).toBeGreaterThan(0);
  for (const u of urls) expect(u).toMatch(/^(file|data):/);
  expect(errors).toEqual([]);
});

test('Major C: C# is snapped, D is not', async ({ page }) => {
  await openApp(page);
  expect(await state(page, 'key-61')).toContain('snapped');
  expect(await state(page, 'key-62')).not.toContain('snapped');
});

test('Pentatonic: A snaps and plays G; root change moves the snapping', async ({ page }) => {
  await openApp(page);
  await page.getByTestId('scale-select').selectOption('pentatonic');
  expect(await state(page, 'key-69')).toContain('snapped');
  await expect(page.getByTestId('key-69')).toHaveAttribute('aria-label', 'A, plays G');
  await expect(page.getByTestId('key-69')).toContainText('→ G');
  await page.getByTestId('root-select').selectOption('2');
  // D pentatonic minor: D F G A C. Now A (69) is in the scale, G# (68) is not.
  expect(await state(page, 'key-69')).not.toContain('snapped');
  expect(await state(page, 'key-68')).toContain('snapped');
});

test('presets fill the strip and clip', async ({ page }) => {
  await openApp(page);
  await page.getByTestId('preset-select').selectOption('12-bar-blues');
  await expect(page.getByTestId('strip-slot-11')).toBeVisible();
  await expect(page.getByTestId('clip-slot-11')).toBeVisible();
  await page.getByTestId('preset-select').selectOption('pop');
  await expect(page.getByTestId('strip-slot-3')).toBeVisible();
  await expect(page.getByTestId('strip-slot-4')).toHaveCount(0);
  await expect(page.getByTestId('strip-slot-0')).toContainText('C');
});

test('Generate makes 4 slots in Major and is disabled in Pentatonic', async ({ page }) => {
  await openApp(page);
  await page.getByTestId('generate').click();
  await expect(page.getByTestId('strip-slot-3')).toBeVisible();
  await expect(page.getByTestId('strip-slot-4')).toHaveCount(0);
  await page.getByTestId('scale-select').selectOption('pentatonic');
  await expect(page.getByTestId('generate')).toBeDisabled();
});

test('chord buttons preview, add-slot appends, remove works', async ({ page }) => {
  await openApp(page);
  await expect(page.getByTestId('add-slot')).toBeDisabled();
  await page.getByTestId('degree-4').click();
  await expect(page.getByTestId('chord-header')).toContainText('G');
  await page.getByTestId('add-slot').click();
  await page.getByTestId('degree-0').click();
  await page.getByTestId('add-slot').click();
  await expect(page.getByTestId('strip-slot-1')).toContainText('C');
  await expect(page.getByTestId('strip-slot-0')).toContainText('G');
  await page.getByTestId('slot-remove-0').click();
  await expect(page.getByTestId('strip-slot-1')).toHaveCount(0);
});

test('URL hash round trip', async ({ page }) => {
  await openApp(page);
  await page.getByTestId('scale-select').selectOption('minor');
  await page.getByTestId('root-select').selectOption('9');
  await page.getByTestId('preset-select').selectOption('minor-epic');
  await page.getByTestId('tempo').fill('120');
  await page.waitForFunction(() => location.hash.includes('bpm=120') && location.hash.includes('s=minor'));
  const hash = await page.evaluate(() => location.hash);
  const names = await page.locator('[data-testid^="strip-slot-"] .nm').allTextContents();
  await openApp(page, hash);
  await expect(page.getByTestId('scale-select')).toHaveValue('minor');
  await expect(page.getByTestId('root-select')).toHaveValue('9');
  await expect(page.getByTestId('tempo')).toHaveValue('120');
  expect(await page.locator('[data-testid^="strip-slot-"] .nm').allTextContents()).toEqual(names);
  expect(names.length).toBe(4);
});

test('Lesson panel follows hover and keyboard focus', async ({ page }) => {
  await openApp(page);
  const lesson = page.getByTestId('lesson');
  await expect(lesson).toHaveAttribute('data-topic', 'keyboard');
  await page.getByTestId('scale-select').hover();
  await expect(lesson).toHaveAttribute('data-topic', 'scale');
  await page.getByTestId('output-select').hover();
  await expect(lesson).toHaveAttribute('data-topic', 'output');
  await page.getByTestId('keyboard').hover();
  await expect(lesson).toHaveAttribute('data-topic', 'keyboard');
  await page.getByTestId('root-select').focus();
  await expect(lesson).toHaveAttribute('data-topic', 'root');
  await page.getByTestId('default-length').focus();
  await expect(lesson).toHaveAttribute('data-topic', 'play');
});

test('Play with MIDI out sends snapped chord notes and Stop sends note-offs', async ({ page }) => {
  await page.addInitScript(FAKE_MIDI_INIT_SCRIPT);
  await openApp(page);
  await page.getByTestId('preset-select').selectOption('pop');
  await page.getByTestId('output-select').selectOption('midi');
  await page.getByTestId('midi-connect').click();
  await expect(page.getByTestId('midi-port')).toHaveValue('fake-out');
  await page.getByTestId('play').click();
  await expect(page.getByTestId('play')).toHaveText('Stop');
  // First slot of pop in C major is C-E-G in the C3 octave: 48, 52, 55.
  await page.waitForFunction(() => {
    const on = (window as any).__midiSent.filter((m: any) => m.bytes[0] === 0x90).map((m: any) => m.bytes[1]);
    return [48, 52, 55].every((n) => on.includes(n));
  });
  await page.getByTestId('play').click();
  await expect(page.getByTestId('play')).toHaveText('Play');
  const sent: { bytes: number[] }[] = await page.evaluate(() => (window as any).__midiSent);
  const offs = sent.filter((m) => m.bytes[0] === 0x80).map((m) => m.bytes[1]);
  for (const n of [48, 52, 55]) expect(offs).toContain(n);
});

test('Built-in voice play toggles the playing state without errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  await openApp(page);
  await page.getByTestId('preset-select').selectOption('pop');
  await page.getByTestId('play').click();
  await expect(page.getByTestId('play')).toHaveText('Stop');
  await expect(page.getByTestId('clip-playhead')).toBeAttached();
  await page.waitForTimeout(400);
  await page.getByTestId('play').click();
  await expect(page.getByTestId('play')).toHaveText('Play');
  expect(errors).toEqual([]);
});
