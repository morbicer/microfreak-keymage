import type { Midi, PitchClass, ScaleDef, ScaleId } from './types';

/**
 * The MicroFreak's eight Scales. Offsets follow the hardware test in
 * .scratch/keymage/issues/09 (not the manual's lists, which have typos):
 * Pentatonic is MINOR pentatonic. Blues is unverified (standard hexatonic blues).
 */
export const SCALES: Record<ScaleId, ScaleDef> = {
  off: { id: 'off', label: 'Off', offsets: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], hasDegrees: false },
  major: { id: 'major', label: 'Major', offsets: [0, 2, 4, 5, 7, 9, 11], hasDegrees: true },
  minor: { id: 'minor', label: 'Minor', offsets: [0, 2, 3, 5, 7, 8, 10], hasDegrees: true },
  harmonicMinor: { id: 'harmonicMinor', label: 'Harmonic minor', offsets: [0, 2, 3, 5, 7, 8, 11], hasDegrees: true },
  dorian: { id: 'dorian', label: 'Dorian', offsets: [0, 2, 3, 5, 7, 9, 10], hasDegrees: true },
  mixolydian: { id: 'mixolydian', label: 'Mixolydian', offsets: [0, 2, 4, 5, 7, 9, 10], hasDegrees: true },
  blues: { id: 'blues', label: 'Blues', offsets: [0, 3, 5, 6, 7, 10], hasDegrees: false, unverified: true },
  pentatonic: { id: 'pentatonic', label: 'Pentatonic', offsets: [0, 3, 5, 7, 10], hasDegrees: false },
};

export const SCALE_IDS = Object.keys(SCALES) as ScaleId[];

const mod12 = (n: number): number => ((n % 12) + 12) % 12;

/** Pitch classes in the Scale at this Root, ascending from the Root. */
export function scalePitchClasses(scale: ScaleId, root: PitchClass): PitchClass[] {
  return SCALES[scale].offsets.map((o) => mod12(root + o));
}

/**
 * MicroFreak Quantization: a pitch class outside the Scale snaps DOWN to the nearest
 * in-scale pitch class, however wide the gap (hardware-confirmed, issue 09).
 */
export function snapPitchClass(scale: ScaleId, root: PitchClass, pc: PitchClass): PitchClass {
  const inScale = new Set(scalePitchClasses(scale, root));
  let p = mod12(pc);
  while (!inScale.has(p)) p = mod12(p - 1);
  return p;
}

export function isSnapped(scale: ScaleId, root: PitchClass, midi: Midi): boolean {
  return snapPitchClass(scale, root, midi) !== mod12(midi);
}

/** The MIDI note that plays for a pressed key. */
export function snapMidi(scale: ScaleId, root: PitchClass, midi: Midi): Midi {
  return midi - (mod12(midi) - snapPitchClass(scale, root, midi) + 12) % 12;
}
