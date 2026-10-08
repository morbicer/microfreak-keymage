import { computed, signal } from '@preact/signals';
import { resolveChord } from '../theory/chords';
import { generate } from '../theory/generator';
import { PRESETS, presetToSlots, rederiveForScale } from '../theory/presets';
import { SCALES } from '../theory/scales';
import type {
  Chord,
  ChordLength,
  ChordType,
  Midi,
  OutputKind,
  PitchClass,
  ProgressionSlot,
  ScaleId,
} from '../theory/types';

export const MAX_CHORD_NOTES = 4;

export const scale = signal<ScaleId>('major');
export const root = signal<PitchClass>(0);
export const chordType = signal<ChordType>('triad');
export const progression = signal<ProgressionSlot[]>([]);
export const selectedSlot = signal<number | null>(null);
export const defaultLength = signal<ChordLength>(4);
/** Free chord being built by clicking keys. */
export const heldKeys = signal<Midi[]>([]);
/** Degree chord being previewed from the Chord buttons (0-6), if any. */
export const previewDegree = signal<number | null>(null);

export const tempo = signal(100); // 60-160
export const loop = signal(true);
export const playing = signal(false);
export const playheadBeat = signal(0);

export const output = signal<OutputKind>('builtin');
export const midiPortId = signal<string | null>(null);
export const volume = signal(0.7);

/** Topic of the Lesson panel (set by hover or focus). */
export const lessonTopic = signal<string>('keyboard');

export const genLength = signal<4 | 8>(4);
export const genEnding = signal<'finished' | 'loops'>('finished');
export const genType = signal<'triad' | 'seventh'>('triad');

/** Name of the loaded preset, for captions. Cleared when the progression is edited. */
export const loadedPresetId = signal<string | null>(null);
/** Set by setScale when a progression was re-derived or frozen. */
export const scaleChangeNote = signal<string | null>(null);

export const hasDegrees = computed(() => SCALES[scale.value].hasDegrees);

export const slotChords = computed<Chord[]>(() =>
  progression.value.map((s) => resolveChord(s.source, scale.value, root.value)),
);

export const totalBeats = computed(() => progression.value.reduce((n, s) => n + s.length, 0));

/** What the Keyboard view highlights: the selected slot, else the held keys, else a degree preview. */
export const currentChord = computed<Chord | null>(() => {
  const sel = selectedSlot.value;
  if (sel !== null && slotChords.value[sel]) return slotChords.value[sel]!;
  if (heldKeys.value.length > 0) return resolveChord({ kind: 'free', midi: heldKeys.value }, scale.value, root.value);
  const d = previewDegree.value;
  if (d !== null && hasDegrees.value) {
    return resolveChord({ kind: 'degree', degree: d, type: chordType.value }, scale.value, root.value);
  }
  return null;
});

const touch = () => {
  loadedPresetId.value = null;
  scaleChangeNote.value = null;
};

export function setScale(next: ScaleId): void {
  const prev = scale.value;
  if (prev === next) return;
  const hadSlots = progression.value.length > 0;
  progression.value = rederiveForScale(progression.value, prev, root.value, next);
  scale.value = next;
  heldKeys.value = [];
  previewDegree.value = null;
  scaleChangeNote.value = !hadSlots
    ? null
    : SCALES[next].hasDegrees
      ? 'Same steps, new scale.'
      : 'This scale has no Degree chords, so the notes were kept as Free chords. Quantization now snaps them.';
}

export function setRoot(next: PitchClass): void {
  root.value = ((next % 12) + 12) % 12;
}

/** Toggle a key into the Free chord being built (max 4). */
export function toggleKey(midi: Midi): void {
  const cur = heldKeys.value;
  previewDegree.value = null;
  selectedSlot.value = null;
  if (cur.includes(midi)) heldKeys.value = cur.filter((m) => m !== midi);
  else if (cur.length < MAX_CHORD_NOTES) heldKeys.value = [...cur, midi].sort((a, b) => a - b);
}

export function clearHeldKeys(): void {
  heldKeys.value = [];
}

/** Preview a Degree chord (a Chord button press). Does nothing for scales without degrees. */
export function chooseDegree(degree: number): void {
  if (!hasDegrees.value) return;
  heldKeys.value = [];
  selectedSlot.value = null;
  previewDegree.value = degree;
}

/** Append the previewed Degree chord, or the held Free chord, as a new slot. */
export function addSlot(): void {
  let source: ProgressionSlot['source'] | null = null;
  if (heldKeys.value.length >= 2) source = { kind: 'free', midi: heldKeys.value };
  else if (previewDegree.value !== null && hasDegrees.value) {
    source = { kind: 'degree', degree: previewDegree.value, type: chordType.value };
  }
  if (!source) return;
  touch();
  progression.value = [...progression.value, { source, length: defaultLength.value }];
  selectedSlot.value = progression.value.length - 1;
  heldKeys.value = [];
  previewDegree.value = null;
}

export function removeSlot(index: number): void {
  touch();
  progression.value = progression.value.filter((_, i) => i !== index);
  const sel = selectedSlot.value;
  if (sel !== null) selectedSlot.value = sel === index ? null : sel > index ? sel - 1 : sel;
}

export function selectSlot(index: number | null): void {
  heldKeys.value = [];
  previewDegree.value = null;
  selectedSlot.value = index;
}

export function setSlotLength(index: number, length: ChordLength): void {
  progression.value = progression.value.map((s, i) => (i === index ? { ...s, length } : s));
}

export function loadPreset(id: string): void {
  const preset = PRESETS.find((p) => p.id === id);
  if (!preset) return;
  scale.value = preset.scale;
  progression.value = presetToSlots(preset);
  selectedSlot.value = 0;
  heldKeys.value = [];
  previewDegree.value = null;
  scaleChangeNote.value = null;
  loadedPresetId.value = id;
}

export function generateProgression(rng?: () => number): void {
  if (!hasDegrees.value) return;
  progression.value = generate({
    scale: scale.value,
    root: root.value,
    length: genLength.value,
    ending: genEnding.value,
    type: genType.value,
    chordLength: defaultLength.value,
    rng,
  });
  selectedSlot.value = 0;
  heldKeys.value = [];
  previewDegree.value = null;
  loadedPresetId.value = null;
  scaleChangeNote.value = null;
}

