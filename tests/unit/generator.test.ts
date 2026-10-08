import { describe, expect, it } from 'vitest';
import { chordFunction, FUNCTION_LABEL } from '../../src/theory/functions';
import { generate } from '../../src/theory/generator';
import { SCALES, SCALE_IDS } from '../../src/theory/scales';
import type { ScaleId } from '../../src/theory/types';

/** Small seeded PRNG (mulberry32) so every run is reproducible. */
function seeded(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const DEGREE_SCALES = SCALE_IDS.filter((s) => SCALES[s].hasDegrees);

/** Degrees whose triad is diminished or augmented, from the research tables. */
const COLOUR: Record<string, number[]> = {
  major: [6],
  minor: [1],
  harmonicMinor: [1, 2, 6],
  dorian: [5],
  mixolydian: [2],
};
const LOOP_ENDS: Record<string, number[]> = {
  major: [4],
  minor: [4, 6],
  harmonicMinor: [4],
  dorian: [4, 6],
  mixolydian: [4, 6],
};

const deg = (s: { source: { kind: string; degree?: number } }) => s.source.degree as number;

describe('chordFunction', () => {
  it('labels Major I/IV/V as home/building/tension', () => {
    expect(chordFunction('major', 0)).toBe('home');
    expect(chordFunction('major', 3)).toBe('building');
    expect(chordFunction('major', 4)).toBe('tension');
  });
  it('gives every degree of every 7-note scale a function', () => {
    for (const s of DEGREE_SCALES) for (let d = 0; d < 7; d++) expect(FUNCTION_LABEL[chordFunction(s, d)]).toBeTruthy();
  });
  it('throws for scales without degrees', () => {
    expect(() => chordFunction('blues', 0)).toThrow();
  });
  it('labels', () => {
    expect(FUNCTION_LABEL).toEqual({ home: 'Home', building: 'Building', tension: 'Tension' });
  });
});

describe('generate', () => {
  it('throws for scales without degrees', () => {
    for (const s of ['off', 'blues', 'pentatonic'] as ScaleId[]) {
      expect(() => generate({ scale: s, root: 0, length: 4, ending: 'finished', type: 'triad', chordLength: 4 })).toThrow();
    }
  });

  it('is deterministic for the same rng seed', () => {
    const o = { scale: 'major', root: 0, length: 8, ending: 'loops', type: 'seventh', chordLength: 2 } as const;
    expect(generate({ ...o, rng: seeded(7) })).toEqual(generate({ ...o, rng: seeded(7) }));
  });

  it('uses the given type and chord length, and works with Math.random by default', () => {
    const out = generate({ scale: 'dorian', root: 5, length: 4, ending: 'finished', type: 'seventh', chordLength: 8 });
    expect(out).toHaveLength(4);
    for (const s of out) {
      expect(s.length).toBe(8);
      expect(s.source).toMatchObject({ kind: 'degree', type: 'seventh' });
    }
  });

  for (const scale of DEGREE_SCALES) {
    for (const length of [4, 8] as const) {
      for (const ending of ['finished', 'loops'] as const) {
        it(`obeys the hard rules: ${scale}, ${length} chords, ${ending}`, () => {
          for (let seed = 1; seed <= 300; seed++) {
            const out = generate({ scale, root: seed % 12, length, ending, type: 'triad', chordLength: 4, rng: seeded(seed) });
            const ds = out.map(deg);
            expect(out).toHaveLength(length);
            for (let i = 0; i < ds.length; i++) {
              expect(ds[i]!).toBeGreaterThanOrEqual(0);
              expect(ds[i]!).toBeLessThanOrEqual(6);
              if (i > 0) expect(ds[i]!).not.toBe(ds[i - 1]!);
              expect(out[i]!.fn).toBe(chordFunction(scale, ds[i]!));
              expect(out[i]!.reason).toBeTruthy();
            }
            expect(COLOUR[scale]).not.toContain(ds[0]!);
            expect(COLOUR[scale]).not.toContain(ds[length - 1]!);
            if (ending === 'finished') expect(ds[length - 1]!).toBe(0);
            else expect(LOOP_ENDS[scale]).toContain(ds[length - 1]!);
          }
        });
      }
    }
  }

  it('biases the penultimate chord toward a cadence chord', () => {
    const cadence = [4, 3, 1];
    let hits = 0;
    const n = 500;
    for (let seed = 1; seed <= n; seed++) {
      const out = generate({ scale: 'major', root: 0, length: 4, ending: 'finished', type: 'triad', chordLength: 4, rng: seeded(seed) });
      if (cadence.includes(deg(out[2]!))) hits++;
    }
    expect(hits / n).toBeGreaterThan(0.75);
  });
});
