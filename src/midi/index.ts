/** Web MIDI wrapper. No sysex. Channels are 0-based here (shown as 1-16 in the UI). */
import type { Midi } from '../theory/types';

export interface MidiOutputLike {
  id: string;
  name?: string | null;
  send(data: number[], timestamp?: number): void;
}

export interface MidiInputLike {
  id: string;
  name?: string | null;
  onmidimessage: ((e: { data: ArrayLike<number> | null }) => void) | null;
}

export interface MidiAccessLike {
  outputs: { values(): Iterable<MidiOutputLike> };
  inputs: { values(): Iterable<MidiInputLike> };
  onstatechange: ((e: unknown) => void) | null;
}

export interface MidiPortInfo {
  id: string;
  name: string;
}

export interface NoteEvent {
  on: boolean;
  note: Midi;
  vel: number;
}

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, Math.round(n)));

export async function requestAccess(): Promise<MidiAccessLike> {
  const nav = (typeof navigator === 'undefined' ? {} : navigator) as {
    requestMIDIAccess?: (opts: { sysex: boolean }) => Promise<MidiAccessLike>;
  };
  if (typeof nav.requestMIDIAccess !== 'function') {
    throw new Error('Web MIDI is not supported in this browser. Try Chrome, Edge or Opera.');
  }
  try {
    return await nav.requestMIDIAccess({ sysex: false });
  } catch (err) {
    const reason = err instanceof Error && err.message ? ` (${err.message})` : '';
    throw new Error(`MIDI access was denied or blocked by the browser${reason}.`);
  }
}

const describePorts = (ports: Iterable<{ id: string; name?: string | null }>, fallback: string): MidiPortInfo[] =>
  [...ports].map((p) => ({ id: p.id, name: p.name || fallback }));

export const listPorts = (access: MidiAccessLike): MidiPortInfo[] =>
  describePorts(access.outputs.values(), 'MIDI output');

export const listInputs = (access: MidiAccessLike): MidiPortInfo[] =>
  describePorts(access.inputs.values(), 'MIDI input');

function send(port: MidiOutputLike, status: number, ch: number, note: number, vel: number, atMs?: number) {
  const data = [status | clamp(ch, 0, 15), clamp(note, 0, 127), clamp(vel, 0, 127)];
  if (atMs === undefined) port.send(data);
  else port.send(data, atMs);
}

export const sendNoteOn = (port: MidiOutputLike, ch: number, note: Midi, vel: number, atMs?: number) =>
  send(port, 0x90, ch, note, vel, atMs);

export const sendNoteOff = (port: MidiOutputLike, ch: number, note: Midi, atMs?: number) =>
  send(port, 0x80, ch, note, 0, atMs);

/** CC123 (All Notes Off) plus an explicit note-off for every note, for synths that ignore CC123. */
export function allNotesOff(port: MidiOutputLike, ch: number): void {
  port.send([0xb0 | clamp(ch, 0, 15), 123, 0]);
  for (let n = 0; n < 128; n++) sendNoteOff(port, ch, n);
}

export function onNote(access: MidiAccessLike, cb: (e: NoteEvent) => void): () => void {
  const inputs = [...access.inputs.values()];
  for (const input of inputs) {
    input.onmidimessage = (e) => {
      const d = e.data;
      if (!d || d.length < 3) return;
      const kind = (d[0] ?? 0) & 0xf0;
      if (kind !== 0x90 && kind !== 0x80) return;
      const vel = d[2] ?? 0;
      cb({ on: kind === 0x90 && vel > 0, note: d[1] ?? 0, vel });
    };
  }
  return () => {
    for (const input of inputs) input.onmidimessage = null;
  };
}

export function onPortsChanged(access: MidiAccessLike, cb: () => void): () => void {
  access.onstatechange = () => cb();
  return () => {
    access.onstatechange = null;
  };
}
