import type { Midi } from '../theory/types';
import type { Sink } from './scheduler';
import type { Voice } from './voice';

/** Minimal output port. A Web MIDI `MIDIOutput` satisfies it. */
export interface MidiSendPort {
  send(bytes: number[], atMs?: number): void;
}

const VELOCITY = 100;

export function voiceSink(voice: Voice): Sink {
  return {
    noteOn: (midi, whenSec) => voice.noteOn(midi, whenSec),
    noteOff: (midi, whenSec) => voice.noteOff(midi, whenSec),
  };
}

/**
 * `nowOffsetMs` is `performance.now() - audioClockSec * 1000`, captured by the caller.
 * Pass a function to re-capture it on every send. `channel` is 0-based.
 */
export function midiSink(
  getPort: () => MidiSendPort | null,
  channel: number,
  nowOffsetMs: number | (() => number),
): Sink {
  const toMs = (whenSec: number): number =>
    whenSec * 1000 + (typeof nowOffsetMs === 'function' ? nowOffsetMs() : nowOffsetMs);
  const send = (status: number, midi: Midi, vel: number, whenSec: number): void => {
    getPort()?.send([status | channel, midi, vel], toMs(whenSec));
  };
  return {
    noteOn: (midi, whenSec) => send(0x90, midi, VELOCITY, whenSec),
    noteOff: (midi, whenSec) => send(0x80, midi, 0, whenSec),
  };
}
