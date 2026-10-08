import { describe, expect, it } from 'vitest';
import { chordName, degreeChord, numeral, resolveChord } from '../../src/theory/chords';
import { SCALE_IDS, SCALES, snapMidi } from '../../src/theory/scales';
import type { ChordType } from '../../src/theory/types';

const TYPES: ChordType[] = ['triad', 'seventh', 'sus2', 'sus4'];
const DEGREE_SCALES = SCALE_IDS.filter((s) => SCALES[s].hasDegrees);

describe('degreeChord', () => {
  it('builds C major triads', () => {
    expect(degreeChord('major', 0, 0, 'triad')).toEqual([48, 52, 55]);
    expect(degreeChord('major', 0, 1, 'triad')).toEqual([50, 53, 57]);
    expect(degreeChord('major', 0, 4, 'triad')).toEqual([55, 59, 62]);
  });
  it('builds sevenths, sus2 and sus4 from scale steps', () => {
    expect(degreeChord('major', 0, 4, 'seventh')).toEqual([55, 59, 62, 65]);
    expect(degreeChord('major', 0, 0, 'sus2')).toEqual([48, 50, 55]);
    expect(degreeChord('major', 0, 0, 'sus4')).toEqual([48, 53, 55]);
  });
  it('fits vii at C major (root B3 = 59)', () => {
    expect(degreeChord('major', 0, 6, 'triad')).toEqual([59, 62, 65]);
    expect(degreeChord('major', 0, 6, 'seventh')).toEqual([59, 62, 65, 69]);
  });
  it('keeps the lowest note in 48-59, ascending, 3-4 notes, for every scale, root, degree and type', () => {
    for (const scale of DEGREE_SCALES) {
      for (let root = 0; root < 12; root++) {
        for (let degree = 0; degree < 7; degree++) {
          for (const type of TYPES) {
            const c = degreeChord(scale, root, degree, type);
            expect(c[0]).toBeGreaterThanOrEqual(48);
            expect(c[0]).toBeLessThanOrEqual(59);
            expect(c.length).toBe(type === 'seventh' ? 4 : 3);
            expect(c).toEqual([...c].sort((a, b) => a - b));
            expect(new Set(c).size).toBe(c.length);
          }
        }
      }
    }
  });
  it('stays inside the Scale', () => {
    for (const scale of DEGREE_SCALES) {
      for (let degree = 0; degree < 7; degree++) {
        for (const m of degreeChord(scale, 7, degree, 'seventh')) expect(snapMidi(scale, 7, m)).toBe(m);
      }
    }
  });
  it('throws for scales without degrees and for bad degrees', () => {
    for (const s of ['off', 'blues', 'pentatonic'] as const) {
      expect(() => degreeChord(s, 0, 0, 'triad')).toThrow();
    }
    expect(() => degreeChord('major', 0, 7, 'triad')).toThrow();
    expect(() => degreeChord('major', 0, -1, 'triad')).toThrow();
  });
});

describe('numeral', () => {
  it('names major triads', () => {
    expect([0, 1, 2, 3, 4, 5, 6].map((d) => numeral('major', d, 'triad'))).toEqual([
      'I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°',
    ]);
  });
  it('names major sevenths', () => {
    expect(numeral('major', 0, 'seventh')).toBe('Imaj7');
    expect(numeral('major', 1, 'seventh')).toBe('ii7');
    expect(numeral('major', 4, 'seventh')).toBe('V7');
    expect(numeral('major', 6, 'seventh')).toBe('viiø7');
  });
  it('names minor triads', () => {
    expect([0, 1, 2, 3, 4, 5, 6].map((d) => numeral('minor', d, 'triad'))).toEqual([
      'i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII',
    ]);
  });
  it('handles harmonic minor, Dorian and Mixolydian colour chords', () => {
    expect(numeral('harmonicMinor', 2, 'triad')).toBe('III+');
    expect(numeral('harmonicMinor', 4, 'triad')).toBe('V');
    expect(numeral('harmonicMinor', 6, 'seventh')).toBe('vii°7');
    expect(numeral('harmonicMinor', 0, 'seventh')).toBe('imaj7');
    expect(numeral('dorian', 3, 'triad')).toBe('IV');
    expect(numeral('mixolydian', 2, 'triad')).toBe('iii°');
    expect(numeral('mixolydian', 6, 'triad')).toBe('bVII');
  });
  it('marks sus chords', () => {
    expect(numeral('major', 0, 'sus2')).toBe('Isus2');
    expect(numeral('major', 4, 'sus4')).toBe('Vsus4');
  });
  it('throws without degrees', () => {
    expect(() => numeral('blues', 0, 'triad')).toThrow();
  });
});

describe('resolveChord', () => {
  it('resolves degree sources through degreeChord', () => {
    const c = resolveChord({ kind: 'degree', degree: 4, type: 'triad' }, 'major', 0);
    expect(c.midi).toEqual([55, 59, 62]);
    expect(c.requested).toEqual([55, 59, 62]);
  });
  it('snaps free chords with the Scale and keeps requested', () => {
    const c = resolveChord({ kind: 'free', midi: [64, 61, 67] }, 'major', 0);
    expect(c.midi).toEqual([60, 64, 67]);
    expect(c.requested).toEqual([64, 61, 67]);
  });
  it('dedupes notes that snap together', () => {
    const c = resolveChord({ kind: 'free', midi: [60, 61, 64] }, 'major', 0);
    expect(c.midi).toEqual([60, 64]);
  });
  it('sorts and caps at 4', () => {
    const c = resolveChord({ kind: 'free', midi: [72, 60, 64, 67, 62] }, 'off', 0);
    expect(c.midi).toEqual([60, 62, 64, 67]);
    expect(c.requested).toEqual([72, 60, 64, 67, 62]);
  });
});

describe('chordName', () => {
  const name = (scale: Parameters<typeof degreeChord>[0], root: number, degree: number, type: ChordType) =>
    chordName(resolveChord({ kind: 'degree', degree, type }, scale, root), scale, root);

  it('names C major degree chords', () => {
    expect([0, 1, 2, 3, 4, 5, 6].map((d) => name('major', 0, d, 'triad'))).toEqual([
      'C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim',
    ]);
    expect(name('major', 0, 0, 'seventh')).toBe('Cmaj7');
    expect(name('major', 0, 4, 'seventh')).toBe('G7');
    expect(name('major', 0, 1, 'seventh')).toBe('Dm7');
    expect(name('major', 0, 6, 'seventh')).toBe('Bm7b5');
    expect(name('major', 0, 0, 'sus2')).toBe('Csus2');
    expect(name('major', 0, 0, 'sus4')).toBe('Csus4');
  });
  it('spells for the key', () => {
    expect(name('major', 5, 3, 'triad')).toBe('Bb');
    expect(name('major', 5, 3, 'seventh')).toBe('Bbmaj7');
    expect(name('major', 7, 6, 'triad')).toBe('F#dim');
  });
  it('names harmonic minor colour chords', () => {
    expect(name('harmonicMinor', 0, 0, 'seventh')).toBe('CmMaj7');
    expect(name('harmonicMinor', 0, 2, 'triad')).toBe('Ebaug');
    expect(name('harmonicMinor', 0, 6, 'seventh')).toBe('Bdim7');
  });
  it('names inversions with a slash bass', () => {
    expect(chordName({ midi: [52, 55, 60], requested: [] }, 'major', 0)).toBe('C/E');
  });
  it('handles single notes, empty chords and unknown shapes', () => {
    expect(chordName({ midi: [60], requested: [] }, 'major', 0)).toBe('C');
    expect(chordName({ midi: [], requested: [] }, 'major', 0)).toBe('');
    expect(chordName({ midi: [60, 61, 62], requested: [] }, 'off', 0)).toBe('C C# D');
  });
  it('names every degree chord for every root without throwing', () => {
    for (const scale of DEGREE_SCALES) {
      for (let root = 0; root < 12; root++) {
        for (let d = 0; d < 7; d++) {
          for (const type of TYPES) expect(name(scale, root, d, type)).toMatch(/^[A-G]/);
        }
      }
    }
  });
});
