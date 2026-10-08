import { SCALES, snapMidi } from './scales';
import { spellName } from './names';
import type { Chord, ChordType, Midi, PitchClass, ScaleId, SlotSource } from './types';

const mod12 = (n: number): number => ((n % 12) + 12) % 12;

/** Scale steps stacked on the degree for each Chord type. */
const STEPS: Record<ChordType, readonly number[]> = {
  triad: [0, 2, 4],
  seventh: [0, 2, 4, 6],
  sus2: [0, 1, 4],
  sus4: [0, 3, 4],
};

function requireDegrees(scale: ScaleId, degree: number): readonly number[] {
  const def = SCALES[scale];
  if (!def.hasDegrees) throw new Error(`Scale "${scale}" has no Degree chords`);
  if (!Number.isInteger(degree) || degree < 0 || degree > 6) throw new Error(`Invalid degree ${degree}`);
  return def.offsets;
}

/** Semitones above the degree's own note for a scale step offset (may wrap into the next octave). */
function stepSemitones(offsets: readonly number[], degree: number, step: number): number {
  const i = degree + step;
  return (offsets[i % 7] as number) + 12 * Math.floor(i / 7) - (offsets[degree] as number);
}

/** Root-position Degree chord, ascending, lowest note in 48-59. */
export function degreeChord(scale: ScaleId, root: PitchClass, degree: number, type: ChordType): Midi[] {
  const offsets = requireDegrees(scale, degree);
  const lowest = 48 + mod12(root + (offsets[degree] as number));
  return STEPS[type].map((step) => lowest + stepSemitones(offsets, degree, step));
}

export function resolveChord(source: SlotSource, scale: ScaleId, root: PitchClass): Chord {
  if (source.kind === 'degree') {
    const midi = degreeChord(scale, root, source.degree, source.type);
    return { midi, requested: [...midi] };
  }
  const snapped = source.midi.map((m) => snapMidi(scale, root, m));
  const midi = [...new Set(snapped)].sort((a, b) => a - b).slice(0, 4);
  return { midi, requested: [...source.midi] };
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'] as const;

/** Roman numeral for a Degree chord. Case shows quality; ° dim, + aug, ø half-diminished 7th. */
export function numeral(scale: ScaleId, degree: number, type: ChordType): string {
  const offsets = requireDegrees(scale, degree);
  const interval = (step: number) => mod12(stepSemitones(offsets, degree, step));
  const flat = scale === 'mixolydian' && degree === 6 ? 'b' : '';
  const upper = flat + ROMAN[degree];
  const lower = flat + (ROMAN[degree] as string).toLowerCase();
  if (type === 'sus2' || type === 'sus4') return `${upper}${type}`;

  const third = interval(2);
  const fifth = interval(4);
  const dim = third === 3 && fifth === 6;
  const aug = third === 4 && fifth === 8;
  const minor = third === 3;
  const base = dim ? `${lower}°` : aug ? `${upper}+` : minor ? lower : upper;
  if (type === 'triad') return base;

  const seventh = interval(6);
  if (dim) return `${lower}${seventh === 10 ? 'ø7' : '°7'}`;
  return `${base}${seventh === 11 ? 'maj7' : '7'}`;
}

/** Chord shapes as semitones above the root, with their name suffix. */
const SHAPES: readonly { intervals: readonly number[]; suffix: string }[] = [
  { intervals: [0, 4, 7], suffix: '' },
  { intervals: [0, 3, 7], suffix: 'm' },
  { intervals: [0, 3, 6], suffix: 'dim' },
  { intervals: [0, 4, 8], suffix: 'aug' },
  { intervals: [0, 2, 7], suffix: 'sus2' },
  { intervals: [0, 5, 7], suffix: 'sus4' },
  { intervals: [0, 4, 7, 11], suffix: 'maj7' },
  { intervals: [0, 3, 7, 10], suffix: 'm7' },
  { intervals: [0, 4, 7, 10], suffix: '7' },
  { intervals: [0, 3, 6, 10], suffix: 'm7b5' },
  { intervals: [0, 3, 6, 9], suffix: 'dim7' },
  { intervals: [0, 3, 7, 11], suffix: 'mMaj7' },
  { intervals: [0, 4, 8, 11], suffix: 'maj7#5' },
  { intervals: [0, 4, 8, 10], suffix: '7#5' },
  { intervals: [0, 4, 7, 9], suffix: '6' },
  { intervals: [0, 7], suffix: '5' },
];

/**
 * Theory-correct chord name ("C", "Dm", "G7", "Bdim", "Csus2"), spelled for the Scale and Root.
 * A chord in an inversion is named from the best-fitting root with a slash bass ("C/E").
 * Shapes outside the table fall back to the note names. Hand-rolled because the installed
 * tonal 6.5.0 package.json points at files that don't exist (see the T2 report).
 */
export function chordName(chord: Chord, scale: ScaleId, root: PitchClass): string {
  const notes = [...new Set(chord.midi)].sort((a, b) => a - b);
  if (notes.length === 0) return '';
  const name = (m: Midi) => spellName(scale, root, m);
  const bass = notes[0] as Midi;
  if (notes.length === 1) return name(bass);

  for (const candidate of notes) {
    const pcs = new Set(notes.map((m) => mod12(m - candidate)));
    const shape = SHAPES.find((s) => s.intervals.length === pcs.size && s.intervals.every((i) => pcs.has(i)));
    if (shape) {
      const slash = candidate === bass ? '' : `/${name(bass)}`;
      return `${name(candidate)}${shape.suffix}${slash}`;
    }
  }
  return notes.map(name).join(' ');
}
