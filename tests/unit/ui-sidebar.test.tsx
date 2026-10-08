// @vitest-environment jsdom
import { render } from 'preact';
import { signal } from '@preact/signals';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('../../src/state/player', () => ({
  midiPorts: signal([]),
  midiStatus: signal('idle'),
  connectMidi: vi.fn(async () => {}),
  startPlayback: vi.fn(),
  stopPlayback: vi.fn(),
  previewChord: vi.fn(),
}));

import { previewChord } from '../../src/state/player';
import * as store from '../../src/state/store';
import { Lesson } from '../../src/ui/Lesson';
import { Sidebar } from '../../src/ui/Sidebar';
import { Strip } from '../../src/ui/Strip';

let host: HTMLElement;
const $ = <T extends HTMLElement>(id: string) => host.querySelector(`[data-testid="${id}"]`) as T;
const change = (el: HTMLSelectElement, value: string) => {
  el.value = value;
  el.dispatchEvent(new Event('change', { bubbles: true }));
};
const flush = () => new Promise((r) => setTimeout(r, 0));

beforeEach(() => {
  store.scale.value = 'major';
  store.root.value = 0;
  store.progression.value = [];
  store.selectedSlot.value = null;
  store.heldKeys.value = [];
  store.previewDegree.value = null;
  store.lessonTopic.value = 'keyboard';
  host = document.createElement('div');
  document.body.append(host);
});
afterEach(() => {
  render(null, host);
  host.remove();
});

describe('Sidebar', () => {
  it('changing the scale select updates state', async () => {
    render(<Sidebar />, host);
    change($('scale-select'), 'dorian');
    expect(store.scale.value).toBe('dorian');
  });

  it('disables Generate for Pentatonic and swaps degree buttons for an explanation', async () => {
    render(<Sidebar />, host);
    expect($<HTMLButtonElement>('generate').disabled).toBe(false);
    expect($('degree-0')).not.toBeNull();
    change($('scale-select'), 'pentatonic');
    await flush();
    expect($<HTMLButtonElement>('generate').disabled).toBe(true);
    expect($('degree-0')).toBeNull();
  });

  it('picking a preset sets its scale and keeps the Root', async () => {
    render(<Sidebar />, host);
    store.root.value = 2;
    change($('preset-select'), 'minor-epic');
    expect(store.scale.value).toBe('minor');
    expect(store.root.value).toBe(2);
    expect(store.progression.value.length).toBeGreaterThan(0);
  });

  it('chord buttons call chooseDegree', async () => {
    render(<Sidebar />, host);
    $('degree-4').click();
    expect(store.previewDegree.value).toBe(4);
    expect(previewChord).toHaveBeenLastCalledWith([55, 59, 62]); // G major triad
  });

  it('changing the Chord type re-sounds the previewed step', async () => {
    render(<Sidebar />, host);
    $('degree-0').click();
    $('chord-type-seventh').click();
    expect(previewChord).toHaveBeenLastCalledWith([48, 52, 55, 59]);
    store.chordType.value = 'triad';
  });

  it('focusin and mouseenter on a section change the lesson topic', async () => {
    render(<Sidebar />, host);
    $('tempo').dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    expect(store.lessonTopic.value).toBe('play');
    $('output-select').dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    expect(store.lessonTopic.value).toBe('output');
    store.lessonTopic.value = 'keyboard';
    $('root-select').closest('div')!.dispatchEvent(new MouseEvent('mouseenter'));
    expect(store.lessonTopic.value).toBe('root');
  });

  it('shows the hardware sync reminder only for MIDI out', async () => {
    render(<Sidebar />, host);
    expect(host.textContent).not.toContain('Set your MicroFreak');
    change($('output-select'), 'midi');
    await flush();
    expect(host.textContent).toContain('Set your MicroFreak to Scale Major / Root C');
    store.output.value = 'builtin';
  });
});

describe('Strip and Lesson', () => {
  it('adds, selects and removes slots', async () => {
    render(<Strip />, host);
    store.chooseDegree(4);
    await flush();
    $('add-slot').click();
    await flush();
    expect(store.progression.value).toHaveLength(1);
    expect($('strip-slot-0')).not.toBeNull();
    $('slot-remove-0').click();
    expect(store.progression.value).toHaveLength(0);
  });

  it('lesson appends the chord description for keyboard topic', async () => {
    render(<Lesson />, host);
    store.chooseDegree(4);
    await flush();
    expect($('lesson').textContent).toContain('G = V, built on step 5 of C Major: G - B - D. Role: Tension');
    store.lessonTopic.value = 'output';
    await flush();
    expect($('lesson').textContent).not.toContain('built on step');
  });
});
