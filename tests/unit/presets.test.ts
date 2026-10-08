import { describe, expect, it } from 'vitest';
import { chordFunction } from '../../src/theory/functions';
import { PRESETS, presetToSlots, rederiveForScale } from '../../src/theory/presets';
import { SCALES } from '../../src/theory/scales';
import { resolveChord } from '../../src/theory/chords';
import type { ProgressionSlot } from '../../src/theory/types';

describe('PRESETS', () => {
  it('has the 14 presets with unique ids and no minor blues or Andalusian cadence', () => {
    expect(PRESETS).toHaveLength(14);
    expect(new Set(PRESETS.map((p) => p.id)).size).toBe(14);
    expect(PRESETS.map((p) => p.id).join()).not.toMatch(/andalusian|minor-blues/);
  });

  it('only uses degrees valid for the preset scale, with matching fn and a reason', () => {
    for (const p of PRESETS) {
      expect(SCALES[p.scale].hasDegrees).toBe(true);
      expect(p.caption).toBeTruthy();
      for (const d of p.degrees) {
        expect(Number.isInteger(d.degree)).toBe(true);
        expect(d.degree).toBeGreaterThanOrEqual(0);
        expect(d.degree).toBeLessThanOrEqual(6);
        expect(d.fn).toBe(chordFunction(p.scale, d.degree));
        expect(d.reason).toBeTruthy();
      }
    }
  });

  it('sets each intended scale', () => {
    const by = (id: string) => PRESETS.find((p) => p.id === id)!;
    expect(by('pop').scale).toBe('major');
    expect(by('rock-backdoor').scale).toBe('mixolydian');
    expect(by('minor-descent').scale).toBe('minor');
    expect(by('dorian-vamp').scale).toBe('dorian');
  });

  it('ships 12-bar blues as 12 triads in Major with a 7ths caption', () => {
    const b = PRESETS.find((p) => p.id === '12-bar-blues')!;
    expect(b.scale).toBe('major');
    expect(b.degrees.map((d) => d.degree)).toEqual([0, 0, 0, 0, 3, 3, 0, 0, 4, 3, 0, 4]);
    expect(b.degrees.every((d) => d.type === 'triad')).toBe(true);
    expect(b.caption).toMatch(/7th/);
    expect(b.caption).toMatch(/Scale Off/);
  });

  it('pop progression is I V vi IV', () => {
    expect(PRESETS.find((p) => p.id === 'pop')!.degrees.map((d) => d.degree)).toEqual([0, 4, 5, 3]);
  });
});

describe('presetToSlots', () => {
  it('turns degrees into degree slots keeping length, fn and reason', () => {
    const p = PRESETS[0]!;
    const slots = presetToSlots(p);
    expect(slots).toHaveLength(p.degrees.length);
    slots.forEach((s, i) => {
      expect(s.source).toEqual({ kind: 'degree', degree: p.degrees[i]!.degree, type: p.degrees[i]!.type });
      expect(s.length).toBe(p.degrees[i]!.length);
      expect(s.fn).toBe(p.degrees[i]!.fn);
      expect(s.reason).toBe(p.degrees[i]!.reason);
    });
  });
});

describe('rederiveForScale', () => {
  const slots = presetToSlots(PRESETS.find((p) => p.id === 'pop')!);

  it('keeps degree slots between 7-note scales and refreshes fn', () => {
    const out = rederiveForScale(slots, 'major', 0, 'minor');
    expect(out.map((s) => s.source)).toEqual(slots.map((s) => s.source));
    expect(out.map((s) => s.length)).toEqual(slots.map((s) => s.length));
    expect(out.map((s) => s.fn)).toEqual([0, 4, 5, 3].map((d) => chordFunction('minor', d)));
  });

  it('does not mutate its input', () => {
    const copy = structuredClone(slots);
    rederiveForScale(slots, 'major', 0, 'pentatonic');
    expect(slots).toEqual(copy);
  });

  it('freezes degree slots to free chords at the old scale notes for Pentatonic, Blues and Off', () => {
    for (const to of ['pentatonic', 'blues', 'off'] as const) {
      const out = rederiveForScale(slots, 'major', 2, to);
      out.forEach((s, i) => {
        expect(s.source).toEqual({ kind: 'free', midi: resolveChord(slots[i]!.source, 'major', 2).midi });
        expect(s.length).toBe(slots[i]!.length);
        expect(s.fn).toBeUndefined();
      });
    }
  });

  it('leaves free slots alone', () => {
    const free: ProgressionSlot[] = [{ source: { kind: 'free', midi: [48, 52, 55] }, length: 2 }];
    expect(rederiveForScale(free, 'pentatonic', 0, 'major')).toEqual(free);
    expect(rederiveForScale(free, 'major', 0, 'blues')).toEqual(free);
  });
});
