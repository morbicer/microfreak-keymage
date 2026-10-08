import { beforeEach, describe, expect, it } from 'vitest';
import * as s from '../../src/state/store';
import { PRESETS } from '../../src/theory/presets';
import { resolveChord } from '../../src/theory/chords';
import type { ProgressionSlot } from '../../src/theory/types';

const deg = (degree: number, length: 1 | 2 | 4 | 8 | 16 = 4): ProgressionSlot => ({
  source: { kind: 'degree', degree, type: 'triad' },
  length,
});

beforeEach(() => {
  s.scale.value = 'major';
  s.root.value = 0;
  s.chordType.value = 'triad';
  s.progression.value = [];
  s.selectedSlot.value = null;
  s.defaultLength.value = 4;
  s.heldKeys.value = [];
  s.previewDegree.value = null;
  s.genLength.value = 4;
  s.genEnding.value = 'finished';
  s.genType.value = 'triad';
  s.loadedPresetId.value = null;
  s.scaleChangeNote.value = null;
});

describe('setScale', () => {
  it('re-derives degree slots between 7-note scales', () => {
    s.progression.value = [deg(0), deg(4)];
    s.setScale('minor');
    expect(s.scale.value).toBe('minor');
    expect(s.progression.value.map((p) => p.source)).toEqual([
      { kind: 'degree', degree: 0, type: 'triad' },
      { kind: 'degree', degree: 4, type: 'triad' },
    ]);
    expect(s.scaleChangeNote.value).toBe('Same steps, new scale.');
  });

  it('freezes degree slots to free chords on Pentatonic', () => {
    s.progression.value = [deg(0)];
    s.setScale('pentatonic');
    expect(s.progression.value[0]!.source).toEqual({ kind: 'free', midi: resolveChord(deg(0).source, 'major', 0).midi });
    expect(s.scaleChangeNote.value).toMatch(/no Degree chords/);
  });

  it('sets no note when the progression is empty, and ignores the same scale', () => {
    s.setScale('minor');
    expect(s.scaleChangeNote.value).toBeNull();
    s.scaleChangeNote.value = 'x';
    s.setScale('minor');
    expect(s.scaleChangeNote.value).toBe('x');
  });

  it('clears held keys and the degree preview', () => {
    s.heldKeys.value = [60, 64];
    s.previewDegree.value = 2;
    s.setScale('dorian');
    expect(s.heldKeys.value).toEqual([]);
    expect(s.previewDegree.value).toBeNull();
  });
});

describe('toggleKey', () => {
  it('keeps keys sorted and toggles off', () => {
    s.toggleKey(64);
    s.toggleKey(60);
    s.toggleKey(67);
    expect(s.heldKeys.value).toEqual([60, 64, 67]);
    s.toggleKey(64);
    expect(s.heldKeys.value).toEqual([60, 67]);
  });

  it('caps at 4 notes', () => {
    [60, 62, 64, 65, 67].forEach(s.toggleKey);
    expect(s.heldKeys.value).toEqual([60, 62, 64, 65]);
  });

  it('drops the degree preview and the slot selection', () => {
    s.previewDegree.value = 1;
    s.selectedSlot.value = 0;
    s.toggleKey(60);
    expect(s.previewDegree.value).toBeNull();
    expect(s.selectedSlot.value).toBeNull();
  });
});

describe('chooseDegree', () => {
  it('previews a degree and clears held keys', () => {
    s.heldKeys.value = [60];
    s.chooseDegree(3);
    expect(s.previewDegree.value).toBe(3);
    expect(s.heldKeys.value).toEqual([]);
  });

  it.each(['pentatonic', 'blues', 'off'] as const)('is ignored on %s', (id) => {
    s.scale.value = id;
    s.heldKeys.value = [60];
    s.chooseDegree(3);
    expect(s.previewDegree.value).toBeNull();
    expect(s.heldKeys.value).toEqual([60]);
  });
});

describe('addSlot', () => {
  it('adds the previewed degree with the chord type and default length', () => {
    s.chordType.value = 'seventh';
    s.defaultLength.value = 8;
    s.chooseDegree(4);
    s.addSlot();
    expect(s.progression.value).toEqual([{ source: { kind: 'degree', degree: 4, type: 'seventh' }, length: 8 }]);
    expect(s.selectedSlot.value).toBe(0);
    expect(s.previewDegree.value).toBeNull();
  });

  it('adds held keys as a free chord when there are at least 2', () => {
    s.toggleKey(67);
    s.toggleKey(60);
    s.addSlot();
    expect(s.progression.value[0]!.source).toEqual({ kind: 'free', midi: [60, 67] });
    expect(s.heldKeys.value).toEqual([]);
  });

  it('does nothing with one held key, or with nothing', () => {
    s.toggleKey(60);
    s.addSlot();
    expect(s.progression.value).toEqual([]);
    s.clearHeldKeys();
    s.addSlot();
    expect(s.progression.value).toEqual([]);
  });

  it('clears the loaded preset id', () => {
    s.loadPreset(PRESETS[0]!.id);
    s.chooseDegree(1);
    s.addSlot();
    expect(s.loadedPresetId.value).toBeNull();
  });
});

describe('removeSlot', () => {
  beforeEach(() => {
    s.progression.value = [deg(0), deg(3), deg(4)];
  });

  it('shifts the selection down when an earlier slot is removed', () => {
    s.selectedSlot.value = 2;
    s.removeSlot(0);
    expect(s.selectedSlot.value).toBe(1);
  });

  it('clears the selection when the selected slot is removed', () => {
    s.selectedSlot.value = 1;
    s.removeSlot(1);
    expect(s.selectedSlot.value).toBeNull();
  });

  it('keeps the selection when a later slot is removed', () => {
    s.selectedSlot.value = 0;
    s.removeSlot(2);
    expect(s.selectedSlot.value).toBe(0);
    expect(s.progression.value).toHaveLength(2);
  });
});

describe('loadPreset', () => {
  it('sets the preset scale, keeps the root and records the id', () => {
    const p = PRESETS.find((x) => x.scale !== 'major') ?? PRESETS[0]!;
    s.root.value = 5;
    s.loadPreset(p.id);
    expect(s.scale.value).toBe(p.scale);
    expect(s.root.value).toBe(5);
    expect(s.progression.value).toHaveLength(p.degrees.length);
    expect(s.loadedPresetId.value).toBe(p.id);
    expect(s.selectedSlot.value).toBe(0);
  });

  it('ignores unknown ids', () => {
    s.loadPreset('nope');
    expect(s.progression.value).toEqual([]);
  });
});

describe('generateProgression', () => {
  const rng = () => 0.5;

  it('fills the progression using the injected rng', () => {
    s.genLength.value = 8;
    s.defaultLength.value = 2;
    s.generateProgression(rng);
    const a = s.progression.value;
    expect(a).toHaveLength(8);
    expect(a.every((x) => x.length === 2)).toBe(true);
    expect(s.selectedSlot.value).toBe(0);
    s.generateProgression(rng);
    expect(s.progression.value).toEqual(a);
  });

  it('ends at home when finished', () => {
    s.generateProgression(rng);
    expect(s.progression.value.at(-1)!.source).toMatchObject({ degree: 0 });
  });

  it.each(['pentatonic', 'blues', 'off'] as const)('refuses on %s', (id) => {
    s.scale.value = id;
    s.progression.value = [deg(0)];
    s.generateProgression(rng);
    expect(s.progression.value).toEqual([deg(0)]);
  });
});

describe('currentChord', () => {
  it('is null with nothing selected', () => {
    expect(s.currentChord.value).toBeNull();
  });

  it('shows a degree preview', () => {
    s.chooseDegree(4);
    expect(s.currentChord.value!.midi).toEqual(resolveChord({ kind: 'degree', degree: 4, type: 'triad' }, 'major', 0).midi);
  });

  it('prefers held keys over a degree preview', () => {
    s.previewDegree.value = 4;
    s.heldKeys.value = [60, 64];
    expect(s.currentChord.value!.requested).toEqual([60, 64]);
  });

  it('prefers the selected slot over held keys and preview', () => {
    s.progression.value = [deg(0), deg(3)];
    s.selectedSlot.value = 1;
    s.heldKeys.value = [60, 64];
    s.previewDegree.value = 4;
    expect(s.currentChord.value).toEqual(s.slotChords.value[1]);
  });

  it('falls through when selectedSlot is out of range', () => {
    s.selectedSlot.value = 5;
    s.heldKeys.value = [60, 64];
    expect(s.currentChord.value!.requested).toEqual([60, 64]);
  });
});

describe('totalBeats', () => {
  it('sums slot lengths', () => {
    expect(s.totalBeats.value).toBe(0);
    s.progression.value = [deg(0, 4), deg(1, 16), deg(2, 1)];
    expect(s.totalBeats.value).toBe(21);
  });
});

describe('slot cap', () => {
  it('refuses to add past MAX_SLOTS', () => {
    s.progression.value = Array.from({ length: s.MAX_SLOTS }, () => deg(0));
    s.chooseDegree(1);
    s.addSlot();
    expect(s.progression.value).toHaveLength(s.MAX_SLOTS);
  });
});
