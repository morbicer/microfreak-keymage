/**
 * MIDI in: tracks the notes currently held on a controller.
 * Reuses the MidiAccess that player.connectMidi obtained (see midiAccess in player.ts).
 */
import { effect, signal } from '@preact/signals';
import { onNote, onPortsChanged } from '../midi';
import type { MidiAccessLike } from '../midi';
import type { Midi } from '../theory/types';
import { midiAccess, midiStatus } from './player';

export type MidiInStatus = 'off' | 'listening';

const FIRST = 48;
const LAST = 72;
const MAX_HELD = 4;

/** Raw notes held on MIDI in, oldest first, at most the 4 most recent. */
export const heldInput = signal<Midi[]>([]);
export const midiInStatus = signal<MidiInStatus>('off');

/** Folds a note into the keyboard's 48-72 range by octave, for display. */
export function foldToKeyboard(note: Midi): Midi {
  let n = note;
  while (n < FIRST) n += 12;
  while (n > LAST) n -= 12;
  return n;
}

let stop: (() => void) | null = null;

/** Starts listening on every input. Returns a function that stops it and clears held notes. */
export function startMidiIn(access: MidiAccessLike): () => void {
  stop?.();
  let unNote: (() => void) | null = null;
  const subscribe = () => {
    unNote?.();
    unNote = onNote(access, (e) => {
      const rest = heldInput.value.filter((m) => m !== e.note);
      heldInput.value = e.on ? [...rest, e.note].slice(-MAX_HELD) : rest;
    });
  };
  subscribe();
  // onPortsChanged owns access.onstatechange, so keep the handler the player installed.
  const prev = access.onstatechange;
  const unPorts = onPortsChanged(access, () => {
    prev?.(null);
    subscribe();
  });
  midiInStatus.value = 'listening';
  const dispose = () => {
    unNote?.();
    unPorts();
    access.onstatechange = prev;
    heldInput.value = [];
    midiInStatus.value = 'off';
    if (stop === dispose) stop = null;
  };
  stop = dispose;
  return dispose;
}

// Start as soon as the player has connected MIDI.
effect(() => {
  const access = midiAccess.value;
  if (midiStatus.value === 'ready' && access) startMidiIn(access);
});
