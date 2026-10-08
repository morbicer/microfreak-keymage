import { describe, expect, it } from 'vitest';
import { SCALES, isSnapped, snapMidi, snapPitchClass, scalePitchClasses } from '../../src/theory/scales';

describe('scales', () => {
  it('Pentatonic at C is minor pentatonic with the hardware-confirmed map', () => {
    const map = [0, 0, 0, 3, 3, 5, 5, 7, 7, 7, 10, 10];
    for (let pc = 0; pc < 12; pc++) expect(snapPitchClass('pentatonic', 0, pc)).toBe(map[pc]);
  });

  it('Major at C snaps black keys down a semitone', () => {
    expect([1, 3, 6, 8, 10].map((pc) => snapPitchClass('major', 0, pc))).toEqual([0, 2, 5, 7, 9]);
  });

  it('Minor snaps E, A, B down; Harmonic minor keeps B', () => {
    expect([4, 9, 11].map((pc) => snapPitchClass('minor', 0, pc))).toEqual([3, 8, 10]);
    expect(snapPitchClass('harmonicMinor', 0, 11)).toBe(11);
  });

  it('transposes with Root: D Minor snaps F# to F', () => {
    expect(snapPitchClass('minor', 2, 6)).toBe(5);
  });

  it('snapping wraps across the octave boundary', () => {
    // B major (root 11): pc 0 (C) is out and snaps to B (11).
    expect(snapPitchClass('major', 11, 0)).toBe(11);
  });

  it('Off never snaps', () => {
    for (let pc = 0; pc < 12; pc++) expect(snapPitchClass('off', 5, pc)).toBe(pc);
  });

  it('snapMidi keeps the octave and isSnapped flags changes', () => {
    expect(snapMidi('major', 0, 61)).toBe(60);
    expect(snapMidi('pentatonic', 0, 69)).toBe(67);
    expect(isSnapped('major', 0, 61)).toBe(true);
    expect(isSnapped('major', 0, 62)).toBe(false);
  });

  it('only the five 7-note scales have degrees', () => {
    const ids = Object.values(SCALES).filter((s) => s.hasDegrees).map((s) => s.id);
    expect(ids).toEqual(['major', 'minor', 'harmonicMinor', 'dorian', 'mixolydian']);
    expect(scalePitchClasses('major', 7)).toEqual([7, 9, 11, 0, 2, 4, 6]);
  });
});
