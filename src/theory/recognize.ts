/**
 * Chord recognition: names the notes held down, whether clicked or sent over MIDI in.
 *
 * Rules:
 * - Needs 2 to 4 distinct pitch classes (octave doubles collapse). Anything else returns null.
 * - 2 pitch classes get an interval name measured up from the lowest note, so compound intervals
 *   reduce ("Perfect fifth: C - G" for C3 and G4). All 11 intervals are named.
 * - 3 or 4 pitch classes are matched against the chord shape table in chords.ts (SHAPES), trying
 *   every held pitch class as the root. Unknown shapes return null.
 * - If the lowest note can be the root, that name wins and is returned alone (C6 beats Am7/C
 *   when C is the bass). Otherwise it is an inversion, named with a slash bass ("C/E").
 * - When an inversion fits several roots, every name is returned joined with " or "
 *   ("Am7/E or C6/E", in held-note order).
 * - Spelling comes from spellName, so it follows the Scale and Root (Bb in F major).
 */
import { SHAPES, mod12 } from './chords';
import { spellName } from './names';
import type { Midi, PitchClass, ScaleId } from './types';

const INTERVALS = [
  '',
  'Minor second',
  'Major second',
  'Minor third',
  'Major third',
  'Perfect fourth',
  'Tritone',
  'Perfect fifth',
  'Minor sixth',
  'Major sixth',
  'Minor seventh',
  'Major seventh',
] as const;

export function recognize(midi: Midi[], scale: ScaleId, root: PitchClass): string | null {
  const notes = [...new Set(midi)].sort((a, b) => a - b);
  const pcs = new Set(notes.map(mod12));
  if (pcs.size < 2 || pcs.size > 4) return null;

  const name = (pc: number) => spellName(scale, root, pc);
  const bass = mod12(notes[0] as Midi);

  if (pcs.size === 2) {
    const upper = [...pcs].find((pc) => pc !== bass) as number;
    return `${INTERVALS[mod12(upper - bass)]}: ${name(bass)} - ${name(upper)}`;
  }

  const matches: { pc: number; suffix: string }[] = [];
  for (const candidate of pcs) {
    const rel = new Set([...pcs].map((pc) => mod12(pc - candidate)));
    const shape = SHAPES.find((s) => s.intervals.length === rel.size && s.intervals.every((i) => rel.has(i)));
    if (shape) matches.push({ pc: candidate, suffix: shape.suffix });
  }
  const atBass = matches.find((m) => m.pc === bass);
  if (atBass) return `${name(bass)}${atBass.suffix}`;
  if (matches.length === 0) return null;
  return matches.map((m) => `${name(m.pc)}${m.suffix}/${name(bass)}`).join(' or ');
}
