import { resolveChord } from './chords';
import { chordFunction } from './functions';
import { SCALES } from './scales';
import type { ChordFunction, ChordLength, ChordType, PitchClass, ProgressionSlot, ScaleId } from './types';

export interface PresetDegree {
  degree: number;
  type: ChordType;
  length: ChordLength;
  fn: ChordFunction;
  reason: string;
}

export interface Preset {
  id: string;
  name: string;
  /** Picking the preset sets this Scale and keeps the current Root. */
  scale: ScaleId;
  degrees: PresetDegree[];
  caption: string;
}

/** Build a preset from [degree, reason] pairs. One bar (4 beats) per chord unless told otherwise. */
function preset(
  id: string,
  name: string,
  scale: ScaleId,
  caption: string,
  chords: [degree: number, reason: string][],
  length: ChordLength = 4,
): Preset {
  return {
    id,
    name,
    scale,
    caption,
    degrees: chords.map(([degree, reason]) => ({
      degree,
      type: 'triad',
      length,
      fn: chordFunction(scale, degree),
      reason,
    })),
  };
}

const HOME_START = 'Starts at home.';

export const PRESETS: Preset[] = [
  preset('pop', 'The pop progression', 'major', 'I-V-vi-IV. The most used four-chord loop in pop.', [
    [0, HOME_START],
    [4, 'Jumps to the dominant for a bright lift.'],
    [5, 'Drops to the relative minor for a softer mood.'],
    [3, 'Building again, which pulls back to the start of the loop.'],
  ]),
  preset('doo-wop', '50s / doo-wop', 'major', 'I-vi-IV-V. "Blue Moon", "Heart and Soul".', [
    [0, HOME_START],
    [5, 'Steps down to the relative minor.'],
    [3, 'Building toward the dominant.'],
    [4, 'Tension that wants to go back home.'],
  ]),
  preset('sad-pop', 'Sad pop loop', 'major', 'vi-V-IV-V. Starts on the minor chord, so it feels wistful.', [
    [5, 'Starts on the relative minor, not home.'],
    [4, 'Steps down to the dominant.'],
    [3, 'Keeps stepping down into building.'],
    [4, 'Back to tension, so the loop restarts.'],
  ]),
  preset('three-chord-rock', 'Three-chord rock', 'major', 'I-IV-V-I. The backbone of rock, folk and punk.', [
    [0, HOME_START],
    [3, 'Leaves home and starts building.'],
    [4, 'Building turns into tension.'],
    [0, 'Tension resolves home. Full stop.'],
  ]),
  preset('i-v-iv-v', 'I-V-IV-V', 'major', 'I-V-IV-V. Like the pop loop, but it ends on tension.', [
    [0, HOME_START],
    [4, 'Jumps to the dominant.'],
    [3, 'Steps back to building.'],
    [4, 'Tension again, so the loop restarts.'],
  ]),
  preset('canon', 'Pachelbel / canon', 'major', 'I-V-vi-iii-IV-I-IV-V. Pachelbel\'s Canon, eight chords.', [
    [0, HOME_START],
    [4, 'Up to the dominant.'],
    [5, 'Down to the relative minor.'],
    [2, 'A soft tonic stand-in.'],
    [3, 'Building.'],
    [0, 'Back home for a moment.'],
    [3, 'Building again.'],
    [4, 'Tension, ready to loop back.'],
  ]),
  preset('ii-v-i', 'ii-V-I', 'major', 'The standard jazz cadence.', [
    [1, 'Starts by building.'],
    [4, 'Building turns into tension.'],
    [0, 'Tension resolves home.'],
  ]),
  preset('circle', 'Circle of fifths', 'major', 'vi-ii-V-I. Each chord falls a fifth, the strongest motion in harmony.', [
    [5, 'Starts on the relative minor.'],
    [1, 'Falls a fifth into building.'],
    [4, 'Falls a fifth into tension.'],
    [0, 'Falls a fifth home.'],
  ]),
  preset(
    '12-bar-blues',
    '12-bar blues',
    'major',
    'Shown here as triads in Major. Real blues uses 7th chords, and those need Scale Off.',
    [
      [0, HOME_START],
      [0, 'Stays at home.'],
      [0, 'Stays at home.'],
      [0, 'Stays at home.'],
      [3, 'Moves to the IV, the first change.'],
      [3, 'Stays on IV.'],
      [0, 'Back home.'],
      [0, 'Stays at home.'],
      [4, 'Tension builds at the turnaround.'],
      [3, 'Steps back to IV.'],
      [0, 'Back home.'],
      [4, 'Ends on tension so the 12 bars loop.'],
    ],
  ),
  preset('rock-backdoor', 'Rock backdoor', 'mixolydian', 'I-bVII-IV-I. "Sweet Home Alabama".', [
    [0, HOME_START],
    [6, 'The flat seven. No leading tone, so it is a soft push.'],
    [3, 'Building.'],
    [0, 'Back home.'],
  ]),
  preset('minor-descent', 'Minor descent', 'minor', 'i-VII-VI-VII. A rock and film-score staple.', [
    [0, HOME_START],
    [6, 'Steps down to VII.'],
    [5, 'Steps down again to VI.'],
    [6, 'Climbs back to VII, which leads home.'],
  ]),
  preset('minor-epic', 'Minor epic', 'minor', 'i-VI-III-VII. Big in modern pop and soundtracks.', [
    [0, HOME_START],
    [5, 'Up to the bright VI.'],
    [2, 'The relative major, a lift.'],
    [6, 'VII leads back to i.'],
  ]),
  preset('dorian-vamp', 'Dorian vamp', 'dorian', 'i-IV, back and forth. "Oye Como Va", "So What".', [
    [0, HOME_START],
    [3, 'The major IV is the Dorian sound.'],
    [0, 'Back home.'],
    [3, 'And again.'],
  ]),
  preset('dorian-pop', 'Dorian pop', 'dorian', 'i-III-VII-IV. "Mad World".', [
    [0, HOME_START],
    [2, 'Up to the relative major.'],
    [6, 'Down a step to VII.'],
    [3, 'The major IV, the Dorian signature.'],
  ]),
];

export function presetToSlots(p: Preset): ProgressionSlot[] {
  return p.degrees.map((d) => ({
    source: { kind: 'degree', degree: d.degree, type: d.type },
    length: d.length,
    fn: d.fn,
    reason: d.reason,
  }));
}

/**
 * Scale change with a progression loaded. Between 7-note scales, degree slots keep their degrees
 * ("same steps, new scale") and get the new scale's function. Into Pentatonic/Blues/Off, each
 * degree slot is frozen to a free chord at the OLD scale's notes; Quantization then snaps them.
 */
export function rederiveForScale(
  slots: ProgressionSlot[],
  oldScale: ScaleId,
  root: PitchClass,
  newScale: ScaleId,
): ProgressionSlot[] {
  const keepDegrees = SCALES[newScale].hasDegrees;
  return slots.map((slot) => {
    const src = slot.source;
    if (src.kind === 'free') return { ...slot, source: { kind: 'free', midi: [...src.midi] } };
    if (!keepDegrees) {
      return { source: { kind: 'free', midi: resolveChord(src, oldScale, root).midi }, length: slot.length };
    }
    const fn = chordFunction(newScale, src.degree);
    const next: ProgressionSlot = { source: { ...src }, length: slot.length, fn };
    if (slot.reason && slot.fn === fn) next.reason = slot.reason;
    return next;
  });
}
