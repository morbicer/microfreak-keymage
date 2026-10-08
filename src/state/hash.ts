import { batch, effect } from '@preact/signals';
import { SCALE_IDS } from '../theory/scales';
import type { ChordLength, ChordType, OutputKind, ProgressionSlot, ScaleId } from '../theory/types';
import {
  chordType,
  defaultLength,
  genEnding,
  genLength,
  genType,
  loop,
  output,
  progression,
  root,
  scale,
  selectedSlot,
  tempo,
} from './store';

const MAX_SLOTS = 16;
const MAX_FREE_NOTES = 4;
const LENGTHS: readonly ChordLength[] = [1, 2, 4, 8, 16];
const CHORD_TYPES: readonly ChordType[] = ['triad', 'seventh', 'sus2', 'sus4'];
const DEBOUNCE_MS = 250;

const DEFAULTS = {
  scale: 'major' as ScaleId,
  root: 0,
  chordType: 'triad' as ChordType,
  tempo: 100,
  loop: true,
  length: 4 as ChordLength,
  output: 'builtin' as OutputKind,
  genLength: 4 as 4 | 8,
  genEnding: 'finished' as 'finished' | 'loops',
  genType: 'triad' as 'triad' | 'seventh',
};

function int(s: string | null, min: number, max: number): number | null {
  if (s === null || !/^\d+$/.test(s)) return null;
  const n = Number(s);
  return n >= min && n <= max ? n : null;
}

function oneOf<T>(s: string | null, allowed: readonly T[]): T | null {
  return s !== null && (allowed as readonly string[]).includes(s) ? (s as T) : null;
}

function length(s: string | undefined): ChordLength | null {
  const n = int(s ?? null, 1, 16);
  return n !== null && (LENGTHS as readonly number[]).includes(n) ? (n as ChordLength) : null;
}

function encodeSlot(s: ProgressionSlot): string {
  return s.source.kind === 'degree'
    ? `d${s.source.degree}.${s.source.type}.${s.length}`
    : `f${s.source.midi.join('-')}.${s.length}`;
}

/** Returns null for a malformed slot, so the caller drops it. */
function decodeSlot(text: string): ProgressionSlot | null {
  const parts = text.slice(1).split('.');
  if (text[0] === 'd' && parts.length === 3) {
    const degree = int(parts[0]!, 0, 6);
    const type = oneOf(parts[1]!, CHORD_TYPES);
    const len = length(parts[2]);
    if (degree === null || type === null || len === null) return null;
    return { source: { kind: 'degree', degree, type }, length: len };
  }
  if (text[0] === 'f' && parts.length === 2) {
    const notes = parts[0]!.split('-').map((n) => int(n, 0, 127));
    const len = length(parts[1]);
    if (len === null || notes.length < 2 || notes.length > MAX_FREE_NOTES || notes.some((n) => n === null)) {
      return null;
    }
    return { source: { kind: 'free', midi: (notes as number[]).sort((a, b) => a - b) }, length: len };
  }
  return null;
}

/** Current state as a hash string (with the leading `#`). */
export function encodeState(): string {
  const p = new URLSearchParams();
  p.set('s', scale.value);
  p.set('r', String(root.value));
  p.set('t', chordType.value);
  p.set('bpm', String(tempo.value));
  p.set('loop', loop.value ? '1' : '0');
  p.set('len', String(defaultLength.value));
  p.set('out', output.value);
  p.set('gl', String(genLength.value));
  p.set('ge', genEnding.value);
  p.set('gt', genType.value);
  if (progression.value.length > 0) p.set('p', progression.value.map(encodeSlot).join(','));
  // Keep the commas readable; URLSearchParams would write %2C.
  return '#' + p.toString().replace(/%2C/g, ',');
}

/** Apply a hash to the store. Never throws. Each missing or invalid field falls back to its default. */
export function decodeState(hash: string): void {
  let p: URLSearchParams;
  try {
    p = new URLSearchParams(String(hash ?? '').replace(/^#/, ''));
  } catch {
    p = new URLSearchParams();
  }
  const slots: ProgressionSlot[] = [];
  for (const text of (p.get('p') ?? '').split(',').slice(0, MAX_SLOTS)) {
    const slot = decodeSlot(text);
    if (slot) slots.push(slot);
  }
  batch(() => {
    scale.value = oneOf(p.get('s'), SCALE_IDS) ?? DEFAULTS.scale;
    root.value = int(p.get('r'), 0, 11) ?? DEFAULTS.root;
    chordType.value = oneOf(p.get('t'), CHORD_TYPES) ?? DEFAULTS.chordType;
    tempo.value = int(p.get('bpm'), 60, 160) ?? DEFAULTS.tempo;
    const l = p.get('loop');
    loop.value = l === '1' ? true : l === '0' ? false : DEFAULTS.loop;
    defaultLength.value = length(p.get('len') ?? undefined) ?? DEFAULTS.length;
    output.value = oneOf(p.get('out'), ['builtin', 'midi'] as const) ?? DEFAULTS.output;
    genLength.value = oneOf(p.get('gl'), ['4', '8'] as const) === '8' ? 8 : DEFAULTS.genLength;
    genEnding.value = oneOf(p.get('ge'), ['finished', 'loops'] as const) ?? DEFAULTS.genEnding;
    genType.value = oneOf(p.get('gt'), ['triad', 'seventh'] as const) ?? DEFAULTS.genType;
    progression.value = slots;
    const sel = selectedSlot.value;
    if (sel !== null && sel >= slots.length) selectedSlot.value = null;
  });
}

/**
 * Apply `location.hash` (if any), then keep it in sync with the store. Writes use
 * `history.replaceState`, debounced. Returns a disposer.
 */
export function startHashSync(): () => void {
  if (typeof location === 'undefined' || typeof history === 'undefined') return () => {};
  if (location.hash.length > 1) decodeState(location.hash);

  let timer: ReturnType<typeof setTimeout> | undefined;
  const write = () => {
    timer = undefined;
    const next = encodeState();
    if (next !== location.hash) history.replaceState(null, '', next);
  };
  const stop = effect(() => {
    encodeState(); // subscribes to every synced signal
    if (timer !== undefined) clearTimeout(timer);
    timer = setTimeout(write, DEBOUNCE_MS);
  });
  const onHashChange = () => decodeState(location.hash);
  addEventListener('hashchange', onHashChange);

  return () => {
    stop();
    if (timer !== undefined) clearTimeout(timer);
    removeEventListener('hashchange', onHashChange);
  };
}
