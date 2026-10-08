import { SCALES } from './scales';
import type { ChordFunction, ScaleId } from './types';

export const FUNCTION_LABEL: Record<ChordFunction, string> = {
  home: 'Home',
  building: 'Building',
  tension: 'Tension',
};

/**
 * Chord function per scale step (0-6), after docs/research/music-theory.md section 4.
 * iii (Major) is ambiguous in the research; it is filed under Home as a tonic substitute.
 */
const H: ChordFunction = 'home';
const B: ChordFunction = 'building';
const T: ChordFunction = 'tension';

const FUNCTIONS: Record<'major' | 'minor' | 'harmonicMinor' | 'dorian' | 'mixolydian', readonly ChordFunction[]> = {
  major: [H, B, H, B, T, H, T],
  minor: [H, B, H, B, T, B, T],
  harmonicMinor: [H, B, H, B, T, B, T],
  dorian: [H, B, H, B, T, B, T],
  mixolydian: [H, B, H, B, T, H, T],
};

export function chordFunction(scale: ScaleId, degree: number): ChordFunction {
  if (!SCALES[scale].hasDegrees) throw new Error(`Scale "${scale}" has no degree chords`);
  const fn = FUNCTIONS[scale as keyof typeof FUNCTIONS][degree];
  if (!fn) throw new Error(`Degree ${degree} is out of range`);
  return fn;
}
