/** Shared vocabulary. See /CONTEXT.md. Pitch classes are 0-11 (C=0). MIDI notes are 0-127. */

export type ScaleId =
  | 'off'
  | 'major'
  | 'minor'
  | 'harmonicMinor'
  | 'dorian'
  | 'mixolydian'
  | 'blues'
  | 'pentatonic';

export type PitchClass = number;
export type Midi = number;

export interface ScaleDef {
  id: ScaleId;
  label: string;
  /** Semitone offsets from the Root, ascending, starting at 0. */
  offsets: readonly number[];
  /** True for the five 7-note scales, which have Degree chords and a generator. */
  hasDegrees: boolean;
  /** True when hardware behavior was not confirmed (Blues). */
  unverified?: boolean;
}

export type ChordType = 'triad' | 'seventh' | 'sus2' | 'sus4';
export type ChordFunction = 'home' | 'building' | 'tension';

/** Beats. 1 bar = 4 beats, so the allowed values are 1, 2, 4 (beats) and 4, 8, 16 (1, 2, 4 bars). */
export type ChordLength = 1 | 2 | 4 | 8 | 16;

/** A Chord as the app plays it: root position, 2-4 notes, ascending. */
export interface Chord {
  /** MIDI notes after Quantization (what is shown, played and sent). */
  midi: Midi[];
  /** The notes before Quantization. Differs from `midi` only for Free chords with Snapped keys. */
  requested: Midi[];
}

/** A progression slot is stored as intent (degree or free keys) so a Scale change can re-derive it. */
export type SlotSource =
  | { kind: 'degree'; degree: number; type: ChordType } // degree 0-6 (I..vii)
  | { kind: 'free'; midi: Midi[] };

export interface ProgressionSlot {
  source: SlotSource;
  length: ChordLength;
  /** Set by presets and the generator. */
  fn?: ChordFunction;
  /** One-line reason this chord follows the previous one. */
  reason?: string;
}

export type OutputKind = 'builtin' | 'midi';
