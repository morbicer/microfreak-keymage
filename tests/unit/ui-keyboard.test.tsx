// @vitest-environment jsdom
import { render } from 'preact';
import { act } from 'preact/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import { Keyboard } from '../../src/ui/Keyboard';
import { heldKeys, lessonTopic, previewDegree, progression, root, scale, selectedSlot } from '../../src/state/store';

let host: HTMLElement;
const key = (m: number) => host.querySelector(`[data-testid="key-${m}"]`) as SVGElement;
const states = (m: number) => (key(m).getAttribute('data-state') ?? '').split(' ').filter(Boolean);

beforeEach(() => {
  scale.value = 'major';
  root.value = 0;
  heldKeys.value = [];
  previewDegree.value = null;
  selectedSlot.value = null;
  progression.value = [];
  lessonTopic.value = 'minor-topic';
  host = document.createElement('div');
  document.body.replaceChildren(host);
  render(<Keyboard />, host);
});

describe('Keyboard', () => {
  it('renders 25 focusable buttons from C48 to C72', () => {
    const keys = host.querySelectorAll('[data-testid^="key-"]');
    expect(keys).toHaveLength(25);
    expect(key(48).getAttribute('role')).toBe('button');
    expect(key(72).getAttribute('tabindex')).toBe('0');
    expect(key(48).getAttribute('aria-label')).toBe('C');
  });

  it('snaps out-of-scale keys down in C major and ticks the Root', async () => {
    expect(states(49)).toContain('snapped'); // C#
    expect(key(49).textContent).toContain('plays C');
    expect(states(50)).not.toContain('snapped');
    expect(states(48)).toContain('scale-root');
    expect(states(60)).toContain('scale-root');
    expect(states(62)).not.toContain('scale-root');
  });

  it('moves snaps and tick with Root', async () => {
    await act(() => {
      root.value = 2; // D major: F and C are out
    });
    expect(states(53)).toContain('snapped');
    expect(states(54)).not.toContain('snapped');
    expect(states(50)).toContain('scale-root');
    expect(states(48)).not.toContain('scale-root');
  });

  it('snaps nothing with Scale off', async () => {
    await act(() => {
      scale.value = 'off';
    });
    for (let m = 48; m <= 72; m++) expect(states(m)).not.toContain('snapped');
  });

  it('toggles the pressed midi on click and on Enter/Space', async () => {
    await act(() => {
      key(49).dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(heldKeys.value).toEqual([49]);
    expect(states(49)).toContain('pressed');
    // snapped pressed key shows the snapped note as chord tone
    expect(states(48)).toContain('chord');
    expect(key(49).querySelector('title')?.textContent).toMatch(/Requested C#.*plays C/);

    await act(() => {
      key(49).dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    });
    expect(heldKeys.value).toEqual([]);
    await act(() => {
      key(52).dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));
    });
    expect(heldKeys.value).toEqual([52]);
  });

  it('marks chord tones and the chord root for a degree preview', async () => {
    await act(() => {
      previewDegree.value = 4; // G major triad: G B D
    });
    expect(states(55)).toEqual(expect.arrayContaining(['chord', 'root']));
    expect(states(59)).toContain('chord');
    expect(states(59)).not.toContain('root');
    expect(states(62)).toContain('chord');
    expect(states(60)).not.toContain('chord');
  });

  it('sets the lesson topic on hover and focus', async () => {
    const svg = host.querySelector('[data-testid="keyboard"]')!;
    await act(() => {
      svg.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    });
    lessonTopic.value = 'x';
    await act(() => {
      key(50).dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    });
    expect(lessonTopic.value).toBe('keyboard');
  });
});
