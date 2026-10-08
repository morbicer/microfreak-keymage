import { chordFunction } from './functions';
import { SCALES } from './scales';
import type { ChordFunction, ChordLength, ChordType, ProgressionSlot, ScaleId } from './types';

type SevenNoteScale = 'major' | 'minor' | 'harmonicMinor' | 'dorian' | 'mixolydian';

export interface GenerateOptions {
  scale: ScaleId;
  root: number;
  length: 4 | 8;
  ending: 'finished' | 'loops';
  type: 'triad' | 'seventh';
  chordLength: ChordLength;
  rng?: () => number;
}

// All weights below are heuristic (docs/research/music-theory.md section 5), not measured.
// Rows are the current degree 0-6, columns the next degree.
const MAJOR: number[][] = [
  [0, 2, 1, 4, 4, 4, 0.5],
  [1, 0, 0.5, 1, 5, 1, 1],
  [1, 1, 0, 3, 1, 4, 0],
  [3, 2, 0.5, 0, 4, 1, 0.5],
  [5, 0, 0.5, 1.5, 0, 3, 0],
  [1, 3, 1, 4, 3, 0, 0],
  [5, 0, 2, 0, 0, 1, 0],
];
const MINOR: number[][] = [
  [0, 0.5, 3, 3, 2, 4, 3],
  [2, 0, 0, 1, 4, 0, 1],
  [2, 0, 0, 3, 1, 3, 4],
  [4, 1, 1, 0, 2, 2, 3],
  [5, 0, 1, 1, 0, 3, 1],
  [2, 0, 2, 3, 2, 0, 5],
  [5, 0, 4, 1, 0, 2, 0],
];
const DORIAN: number[][] = [
  [0, 2, 2, 5, 1, 0, 3],
  [3, 0, 2, 2, 1, 0, 1],
  [2, 0, 0, 3, 1, 0, 4],
  [5, 2, 1, 0, 1, 0, 3],
  [4, 0, 1, 2, 0, 0, 2],
  [2, 0, 0, 1, 0, 0, 1],
  [4, 0, 2, 4, 0, 0, 0],
];
const MIXOLYDIAN: number[][] = [
  [0, 1, 0, 4, 1, 2, 5],
  [3, 0, 0, 3, 2, 1, 1],
  [3, 0, 0, 1, 0, 2, 0],
  [4, 1, 0, 0, 1, 1, 4],
  [4, 1, 0, 3, 0, 1, 2],
  [2, 1, 0, 3, 1, 0, 2],
  [4, 1, 0, 5, 0, 0, 0],
];

/** Harmonic minor = Minor with a real V, vii° as a rare chord and III+ nearly banned (research section 5). */
function deriveHarmonicMinor(): number[][] {
  const t = MINOR.map((row) => [...row]);
  t[4]![0] = 6;
  t[4]![5] = 3;
  t[6] = MINOR[6]!.map((w) => w / 3);
  t[6]![0] = 5;
  for (let from = 0; from < 7; from++) {
    if (from !== 6) t[from]![6] = MINOR[from]![6]! / 3;
    if (from !== 2) t[from]![2] = 0.3;
  }
  return t;
}

const TRANSITIONS: Record<SevenNoteScale, number[][]> = {
  major: MAJOR,
  minor: MINOR,
  harmonicMinor: deriveHarmonicMinor(),
  dorian: DORIAN,
  mixolydian: MIXOLYDIAN,
};

const START: Record<SevenNoteScale, Record<number, number>> = {
  major: { 0: 70, 5: 15, 3: 10, 1: 3, 4: 2 },
  minor: { 0: 80, 2: 10, 5: 10 },
  harmonicMinor: { 0: 80, 2: 10, 5: 10 }, // III+ is dropped below by the dim/aug rule
  dorian: { 0: 85, 3: 10, 6: 5 },
  mixolydian: { 0: 85, 3: 10, 6: 5 },
};

/** 'loops' endings: V/v/VII/bVII per scale, weighted by how natural they sound. */
const LOOP_END: Record<SevenNoteScale, Record<number, number>> = {
  major: { 4: 1 },
  minor: { 4: 1, 6: 1 },
  harmonicMinor: { 4: 1 },
  dorian: { 6: 5, 4: 2 },
  mixolydian: { 6: 10, 4: 3 },
};

/** Second-to-last chords that set up a close (V, IV, ii, or the scale's backdoor VII). */
const CADENCE_SETUP: Record<SevenNoteScale, readonly number[]> = {
  major: [4, 3, 1],
  minor: [6, 3, 4],
  harmonicMinor: [4, 3, 1],
  dorian: [6, 3, 4],
  mixolydian: [6, 3, 4],
};
const CADENCE_BOOST = 3;

/** True for diminished or augmented triads, found by stacking thirds on the scale steps. */
function isColourChord(scale: ScaleId, degree: number): boolean {
  const o = SCALES[scale].offsets;
  const up = (n: number) => o[(degree + n) % 7]! + (degree + n >= 7 ? 12 : 0);
  const fifth = up(4) - up(0);
  return fifth !== 7;
}

function pickWeighted(weights: number[], rng: () => number): number {
  const total = weights.reduce((a, b) => a + b, 0);
  let r = rng() * total;
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i]!;
    if (r < 0 && weights[i]! > 0) return i;
  }
  // Floating-point edge: take the last positive weight.
  for (let i = weights.length - 1; i >= 0; i--) if (weights[i]! > 0) return i;
  throw new Error('No candidate to pick');
}

function reasonFor(
  prev: { degree: number; fn: ChordFunction } | null,
  cur: { degree: number; fn: ChordFunction },
  isLast: boolean,
): string {
  if (!prev) return 'Starts on a chord that feels like home.';
  let r: string;
  if (prev.fn === 'home' && cur.fn === 'building') r = 'Leaves home and starts building.';
  else if (prev.fn === 'home' && cur.fn === 'tension') r = 'Jumps from home straight to tension.';
  else if (prev.fn === 'home') r = 'Stays near home with a related chord.';
  else if (prev.fn === 'building' && cur.fn === 'tension') r = 'Building turns into tension, the pull to go back.';
  else if (prev.fn === 'building' && cur.fn === 'home') r = 'Building settles back home.';
  else if (prev.fn === 'building') r = 'Keeps building on another chord.';
  else if (cur.fn === 'home') r = 'Tension resolves home.';
  else if (cur.fn === 'building') r = 'Backs off from tension into building.';
  else r = 'Keeps the tension going.';
  if (isLast) {
    r += cur.fn === 'home' ? ' Ends at home, so it feels finished.' : ' Ends open, so the loop wants to restart.';
  }
  return r;
}

export function generate(opts: GenerateOptions): ProgressionSlot[] {
  const { scale, length, ending, type, chordLength } = opts;
  if (!SCALES[scale].hasDegrees) throw new Error(`Scale "${scale}" has no degree chords, cannot generate`);
  const rng = opts.rng ?? Math.random;
  const key = scale as SevenNoteScale;
  const trans = TRANSITIONS[key];
  const ok = (d: number) => !isColourChord(scale, d);

  const weightsOf = (table: Record<number, number>): number[] =>
    Array.from({ length: 7 }, (_, d) => (ok(d) ? (table[d] ?? 0) : 0));

  const last = pickWeighted(weightsOf(ending === 'finished' ? { 0: 1 } : LOOP_END[key]), rng);
  const degrees: number[] = [pickWeighted(weightsOf(START[key]), rng)];

  for (let i = 1; i < length - 1; i++) {
    const prev = degrees[i - 1]!;
    const penultimate = i === length - 2;
    const w: number[] = trans[prev]!.map((x, d) => {
      if (d === prev) return 0;
      if (penultimate && d === last) return 0;
      if (penultimate && CADENCE_SETUP[key].includes(d)) return x * CADENCE_BOOST;
      return x;
    });
    // The table can be all zero for a row after exclusions; fall back to any other chord.
    if (!w.some((x) => x > 0)) {
      for (let d = 0; d < 7; d++) w[d] = d === prev || (penultimate && d === last) ? 0 : 1;
    }
    degrees.push(pickWeighted(w, rng));
  }
  degrees.push(last);

  const slotType: ChordType = type;
  return degrees.map((degree, i) => {
    const fn = chordFunction(scale, degree);
    const prev = i > 0 ? { degree: degrees[i - 1]!, fn: chordFunction(scale, degrees[i - 1]!) } : null;
    return {
      source: { kind: 'degree', degree, type: slotType },
      length: chordLength,
      fn,
      reason: reasonFor(prev, { degree, fn }, i === length - 1),
    };
  });
}
