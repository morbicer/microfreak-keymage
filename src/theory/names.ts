import { SCALES } from './scales';
import type { PitchClass, ScaleId } from './types';

const SHARP_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const;
const LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'] as const;
const LETTER_PC = [0, 2, 4, 5, 7, 9, 11] as const;

const mod12 = (n: number): number => ((n % 12) + 12) % 12;

/** The MicroFreak's own (sharp-only) name for a pitch class. */
export function sharpName(pc: PitchClass): string {
  return SHARP_NAMES[mod12(pc)] as string;
}

function accidental(acc: number): string {
  return acc >= 0 ? '#'.repeat(acc) : 'b'.repeat(-acc);
}

/** Spells a 7-note scale from one root letter; returns pc -> name and the accidental count. */
function spellFrom(scale: ScaleId, rootLetter: number, root: PitchClass) {
  const names = new Map<number, string>();
  let cost = 0;
  SCALES[scale].offsets.forEach((offset, i) => {
    const letter = (rootLetter + i) % 7;
    const pc = mod12(root + offset);
    const acc = mod12(pc - (LETTER_PC[letter] as number) + 6) - 6;
    cost += Math.abs(acc);
    names.set(pc, (LETTERS[letter] as string) + accidental(acc));
  });
  return { names, cost };
}

/**
 * Theory-correct spelling of a pitch class in this Scale and Root, with no bracket.
 * Letters run in order through the 7-note Scales (Bb in F major); the root spelling with
 * fewer accidentals wins, sharps on a tie. Off, Blues, Pentatonic and pitch classes outside
 * the Scale use the sharp name.
 */
export function spellName(scale: ScaleId, root: PitchClass, pc: PitchClass): string {
  const p = mod12(pc);
  if (SCALES[scale].offsets.length !== 7) return sharpName(p);
  const r = mod12(root);
  // Candidate letters for the root: the natural one, or the sharp-side letter first, then the flat-side.
  const candidates: number[] = [];
  LETTER_PC.forEach((lp, letter) => {
    if (mod12(r - lp + 6) - 6 === 0) candidates.push(letter);
  });
  LETTER_PC.forEach((lp, letter) => {
    if (mod12(r - lp + 6) - 6 === 1) candidates.push(letter);
  });
  LETTER_PC.forEach((lp, letter) => {
    if (mod12(r - lp + 6) - 6 === -1) candidates.push(letter);
  });
  let best: ReturnType<typeof spellFrom> | null = null;
  for (const letter of candidates) {
    const s = spellFrom(scale, letter, r);
    if (!best || s.cost < best.cost) best = s;
  }
  return best?.names.get(p) ?? sharpName(p);
}

/** Note name for the current Scale and Root: "Bb (A#)" when the sharp-only name differs. */
export function noteName(scale: ScaleId, root: PitchClass, pc: PitchClass): string {
  const spelled = spellName(scale, root, pc);
  const sharp = sharpName(pc);
  return spelled === sharp ? spelled : `${spelled} (${sharp})`;
}
