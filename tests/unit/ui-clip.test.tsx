// @vitest-environment jsdom
import { render } from 'preact';
import { act } from 'preact/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import { Clip } from '../../src/ui/Clip';
import {
  heldKeys, lessonTopic, playheadBeat, playing, previewDegree, progression, root, scale, selectedSlot,
} from '../../src/state/store';

let host: HTMLElement;
const q = (id: string) => host.querySelector(`[data-testid="${id}"]`);

beforeEach(() => {
  scale.value = 'major';
  root.value = 0;
  heldKeys.value = [];
  previewDegree.value = null;
  selectedSlot.value = null;
  progression.value = [];
  playing.value = false;
  playheadBeat.value = 0;
  host = document.createElement('div');
  document.body.replaceChildren(host);
  render(<Clip />, host);
});

describe('Clip', () => {
  it('shows an empty state with no progression', () => {
    expect(q('clip')?.textContent).toMatch(/Add a chord/);
    expect(q('clip-slot-0')).toBeNull();
  });

  it('draws slots with labels, fn colors and notes', async () => {
    await act(() => {
      progression.value = [
        { source: { kind: 'degree', degree: 0, type: 'triad' }, length: 4, fn: 'home' },
        { source: { kind: 'degree', degree: 4, type: 'seventh' }, length: 8, fn: 'tension' },
        { source: { kind: 'free', midi: [48, 52, 55] }, length: 4 },
      ];
    });
    expect(q('clip-slot-0')?.textContent).toBe('I');
    expect(q('clip-slot-1')?.textContent).toBe('V7');
    expect(q('clip-slot-2')?.textContent).toBe('C');
    expect(q('clip-slot-0')?.getAttribute('data-fn')).toBe('home');
    expect(q('clip-slot-1')?.getAttribute('data-fn')).toBe('tension');
    expect(q('clip-slot-2')?.getAttribute('data-fn')).toBe('free');
    expect(host.querySelectorAll('.note')).toHaveLength(3 + 4 + 3);
    expect(host.querySelector('svg')?.getAttribute('width')).toBe(String(16 * 40));
  });

  it('dashes notes whose pressed key was Snapped', async () => {
    await act(() => {
      progression.value = [{ source: { kind: 'free', midi: [48, 49, 55] }, length: 4 }];
    });
    // 49 (C#) snaps to 48, which collapses into the existing C
    expect(host.querySelectorAll('.note.snapped').length).toBeGreaterThan(0);
    await act(() => {
      progression.value = [{ source: { kind: 'free', midi: [48, 53, 55] }, length: 4 }]; // F is in C major
    });
    expect(host.querySelectorAll('.note.snapped')).toHaveLength(0);
    await act(() => {
      progression.value = [{ source: { kind: 'free', midi: [48, 54, 55] }, length: 4 }]; // F# -> F
    });
    expect(q('clip-note-0-53')?.getAttribute('data-snapped')).toBe('true');
    expect(q('clip-note-0-55')?.getAttribute('data-snapped')).toBe('false');
  });

  it('selects a slot when its label is clicked', async () => {
    await act(() => {
      progression.value = [
        { source: { kind: 'degree', degree: 0, type: 'triad' }, length: 4 },
        { source: { kind: 'degree', degree: 3, type: 'triad' }, length: 4 },
      ];
    });
    await act(() => {
      q('clip-slot-1')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(selectedSlot.value).toBe(1);
  });

  it('shows the playhead only while playing', async () => {
    await act(() => {
      progression.value = [{ source: { kind: 'degree', degree: 0, type: 'triad' }, length: 4 }];
    });
    expect(q('clip-playhead')).toBeNull();
    await act(() => {
      playing.value = true;
      playheadBeat.value = 2;
    });
    expect(q('clip-playhead')?.getAttribute('x1')).toBe('80');
    await act(() => {
      playheadBeat.value = 3;
    });
    expect(q('clip-playhead')?.getAttribute('x1')).toBe('120');
  });

  it('sets the lesson topic on hover', async () => {
    lessonTopic.value = 'keyboard';
    await act(() => {
      q('clip')!.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    });
    // preact attaches mouseenter listeners directly; dispatch it explicitly
    await act(() => {
      q('clip')!.dispatchEvent(new MouseEvent('mouseenter'));
    });
    expect(lessonTopic.value).toBe('clip');
  });
});
