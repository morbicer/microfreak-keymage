import { describe, expect, it } from 'vitest';
import { recognize } from '../../src/theory/recognize';

const r = (m: number[], scale: Parameters<typeof recognize>[1] = 'off', root = 0) => recognize(m, scale, root);

describe('recognize', () => {
  it('needs 2 to 4 distinct pitch classes', () => {
    expect(r([])).toBeNull();
    expect(r([60])).toBeNull();
    expect(r([60, 72])).toBeNull();
    expect(r([60, 62, 64, 65, 67])).toBeNull();
  });

  it('names all 11 intervals and reduces compound ones', () => {
    const names = [
      'Minor second', 'Major second', 'Minor third', 'Major third', 'Perfect fourth', 'Tritone',
      'Perfect fifth', 'Minor sixth', 'Major sixth', 'Minor seventh', 'Major seventh',
    ];
    names.forEach((n, i) => expect(r([60, 61 + i])?.startsWith(`${n}: C - `)).toBe(true));
    expect(r([60, 67])).toBe('Perfect fifth: C - G');
    expect(r([60, 64])).toBe('Major third: C - E');
    expect(r([48, 79])).toBe('Perfect fifth: C - G');
  });

  it('names root-position chords', () => {
    expect(r([60, 64, 67])).toBe('C');
    expect(r([60, 63, 67])).toBe('Cm');
    expect(r([67, 71, 74, 77])).toBe('G7');
    expect(r([60, 64, 67, 71])).toBe('Cmaj7');
  });

  it('names inversions as slash chords', () => {
    expect(r([64, 67, 72])).toBe('C/E');
    expect(r([67, 72, 76])).toBe('C/G');
  });

  it('prefers the lowest note as root for C6 versus Am7', () => {
    expect(r([60, 64, 67, 69])).toBe('C6');
    expect(r([57, 60, 64, 67])).toBe('Am7');
  });

  it('joins both names when an inversion is ambiguous', () => {
    expect(r([64, 67, 69, 72])).toBe('Am7/E or C6/E');
  });

  it('returns null for unknown shapes', () => {
    expect(r([60, 61, 62])).toBeNull();
  });

  it('spells for the Scale and Root', () => {
    expect(r([65, 69, 72], 'major', 5)).toBe('F');
    expect(r([58, 62, 65], 'major', 5)).toBe('Bb');
    expect(r([58, 62, 65], 'off', 0)).toBe('A#');
    expect(r([58, 62], 'major', 5)).toBe('Major third: Bb - D');
  });
});
