import { chordName, numeral } from '../theory/chords';
import { FUNCTION_LABEL, chordFunction } from '../theory/functions';
import { noteName } from '../theory/names';
import { SCALES } from '../theory/scales';
import type { Chord, PitchClass, ScaleId, SlotSource } from '../theory/types';

export interface Lesson {
  title: string;
  paragraphs: string[];
}

export const LESSONS: Record<string, Lesson> = {
  scale: {
    title: 'Scale',
    paragraphs: [
      'A scale is a short list of notes picked from the 12 on the keyboard. The MicroFreak has eight settings under Utility > Preset > Scale: Off, Major, Minor, Harmonic minor, Dorian, Mixolydian, Blues and Pentatonic.',
      'With a scale on, every key you press plays a note from that scale. You cannot hit a wrong note. Off means all 12 notes.',
      'Pentatonic on the MicroFreak is the minor pentatonic (5 notes). The printed manual lists some of the scales wrongly, so this app follows what the hardware actually plays. Blues uses the usual 6-note blues set, but I have not checked it on a real MicroFreak.',
    ],
  },
  root: {
    title: 'Root',
    paragraphs: [
      'The Root is the note the scale starts on. Changing it slides the whole scale up or down and keeps its shape. C major and D major have the same mood, D is just higher.',
      'On the MicroFreak it is Utility > Preset > Root. The small orange tick on the keyboard marks it.',
    ],
  },
  quantization: {
    title: 'Quantization',
    paragraphs: [
      'Quantization is the MicroFreak snapping each key you press to a note in the scale. A key whose own note is not in the scale plays the scale note just below it.',
      'On the keyboard those snapped keys are greyed out with their label in italics, and the label shows the note they really play.',
    ],
  },
  keyboard: {
    title: 'Keyboard',
    paragraphs: [
      'This is your MicroFreak keyboard, 25 keys from C to C. Each key shows the note it plays with the current Scale and Root.',
      'Orange keys are the current chord. The solid orange key is the chord root. Greyed keys are snapped and play the note written on them instead of their own. Click keys to build your own chord, up to 4 notes, which is as many as the MicroFreak can play at once.',
    ],
  },
  chord: {
    title: 'Chord',
    paragraphs: [
      'A chord is 2 to 4 notes played together. To build one from a scale, pick a step, skip a note, take the next, skip one, take the next. That is a triad.',
      'The step decides if it sounds bright or dark. Capital numerals (I, IV, V) are major and brighter. Lowercase (ii, vi) are minor and darker. A small circle (vii°) is diminished and tense.',
      '7th adds a fourth note on top. sus2 and sus4 swap the middle note for its neighbour, which sounds open instead of happy or sad.',
      'Pentatonic, Blues and Off have no steps to build on, so you make chords there by clicking keys.',
    ],
  },
  progression: {
    title: 'Progression',
    paragraphs: [
      'A progression is chords in a row. Click one to select it, and the keyboard shows its notes.',
      'Chords do one of three jobs. Home (green) feels settled. Building (yellow) moves away from home. Tension (red) wants to go back. Many songs go Home, Building, Tension, Home. The small text between chords says why one follows the other.',
    ],
  },
  generator: {
    title: 'Generate',
    paragraphs: [
      'Generate makes a random progression that follows common songwriting habits. It starts at home and avoids repeating the same chord twice in a row.',
      'Finished ends back at home, so it sounds done. Loops ends on tension, so it pulls you back to the start when it repeats. It works for the five 7-note scales only.',
    ],
  },
  play: {
    title: 'Play',
    paragraphs: [
      'Play runs the progression once, or over and over with Loop on. Tempo is in beats per minute. Chord length is counted in beats, and 4 beats make one bar.',
      'A longer chord makes the progression feel slower and calmer at the same tempo.',
    ],
  },
  output: {
    title: 'Output',
    paragraphs: [
      'Built-in voice plays through your computer speakers. MIDI out sends the notes to a connected synth such as the MicroFreak. It needs a browser with Web MIDI, like Chrome.',
      'MIDI out sends the quantized notes, the same ones the built-in voice plays. If your MicroFreak is set to the same Scale and Root, its own Quantization changes nothing and both sound the same.',
    ],
  },
  clip: {
    title: 'Clip',
    paragraphs: [
      'The clip shows the progression like a MIDI clip in Ableton. Time runs left to right and pitch runs bottom to top. Every bar is one note. The line that moves during playback is the playhead. You cannot edit it here.',
    ],
  },
};

export function lessonFor(topic: string): Lesson {
  return LESSONS[topic] ?? (LESSONS.keyboard as Lesson);
}

/** Topics that append the current chord's description. */
export const CHORD_TOPICS = new Set(['keyboard', 'chord', 'progression']);

const mod12 = (n: number): number => ((n % 12) + 12) % 12;

/** "G = V, built on step 5 of C Major: G - B - D. Role: Tension" */
export function describeChord(
  source: SlotSource | null,
  chord: Chord | null,
  scale: ScaleId,
  root: PitchClass,
): string {
  if (!chord || chord.midi.length === 0) {
    return 'No chord yet. Pick a step in the Chord section or click keys on the keyboard.';
  }
  const notes = chord.midi.map((m) => noteName(scale, root, mod12(m))).join(' - ');
  const name = chordName(chord, scale, root);
  if (source?.kind === 'degree') {
    const num = numeral(scale, source.degree, source.type);
    const role = FUNCTION_LABEL[chordFunction(scale, source.degree)];
    const where = `${noteName(scale, root, root)} ${SCALES[scale].label}`;
    return `${name} = ${num}, built on step ${source.degree + 1} of ${where}: ${notes}. Role: ${role}`;
  }
  const snapped = chord.requested.some((m, i) => m !== chord.midi[i]);
  const tail = snapped ? ' Some keys were snapped to the scale.' : '';
  return `${name}: ${notes}. You picked these keys yourself, so there is no step or role.${tail}`;
}
