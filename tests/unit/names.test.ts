import { describe, expect, it } from 'vitest';
import { noteName, sharpName } from '../../src/theory/names';
import { SCALE_IDS } from '../../src/theory/scales';

describe('sharpName', () => {
  it('names all 12 pitch classes with sharps and wraps', () => {
    expect([...Array(12).keys()].map(sharpName).join(' ')).toBe('C C# D D# E F F# G G# A A# B');
    expect(sharpName(13)).toBe('C#');
    expect(sharpName(-1)).toBe('B');
  });
});

describe('noteName', () => {
  it('adds the sharp name in brackets when spellings differ', () => {
    expect(noteName('major', 5, 10)).toBe('Bb (A#)');
    expect(noteName('major', 5, 5)).toBe('F');
  });
  it('uses plain sharps when the key spells with sharps', () => {
    expect(noteName('major', 7, 6)).toBe('F#');
    expect(noteName('major', 2, 1)).toBe('C#');
  });
  it('spells flat keys with flats', () => {
    expect(noteName('major', 3, 8)).toBe('Ab (G#)');
    expect(noteName('minor', 0, 3)).toBe('Eb (D#)');
  });
  it('uses sharp names only for Off, Blues and Pentatonic', () => {
    for (const scale of ['off', 'blues', 'pentatonic'] as const) {
      for (let pc = 0; pc < 12; pc++) expect(noteName(scale, 5, pc)).toBe(sharpName(pc));
    }
  });
  it('falls back to the sharp name for pitch classes outside a 7-note Scale', () => {
    expect(noteName('major', 0, 1)).toBe('C#');
  });
  it('never throws and always starts with a letter for every Scale and Root', () => {
    for (const scale of SCALE_IDS) {
      for (let root = 0; root < 12; root++) {
        for (let pc = 0; pc < 12; pc++) expect(noteName(scale, root, pc)).toMatch(/^[A-G]/);
      }
    }
  });
  it('gives each scale degree its own letter in 7-note Scales', () => {
    for (let root = 0; root < 12; root++) {
      const letters = [0, 2, 4, 5, 7, 9, 11].map((o) => noteName('major', root, root + o)[0]);
      expect(new Set(letters).size).toBe(7);
    }
  });
});
