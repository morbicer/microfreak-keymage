/**
 * Controller that wires the store to the audio engine and Web MIDI.
 *
 * Restart policy: while playing, a change to the progression, scale, root or tempo stops the run and
 * starts it again from beat 0 with the new state. The scheduler reads bpm once per start, so this is
 * the simplest way to stay consistent. Loop, output and port changes apply on the next start.
 *
 * Every browser API lives behind `createPlayer`'s deps or inside a function, so the module imports in node.
 */
import { effect, signal, untracked } from '@preact/signals';
import type { Signal } from '@preact/signals';
import { voiceSink, midiSink } from '../audio/sinks';
import { createScheduler } from '../audio/scheduler';
import type { PlayEvent, Scheduler, Sink } from '../audio/scheduler';
import { createVoice } from '../audio/voice';
import type { Voice } from '../audio/voice';
import type { Midi } from '../theory/types';
import { allNotesOff, listPorts, onPortsChanged, requestAccess } from '../midi';
import type { MidiAccessLike, MidiOutputLike, MidiPortInfo } from '../midi';
import { loop, midiPortId, output, playheadBeat, playing, progression, root, scale, slotChords, tempo, totalBeats, volume } from './store';

export type MidiStatus = 'idle' | 'unsupported' | 'denied' | 'ready';

/** The slice of AudioContext the player needs. */
export interface AudioContextLike {
  readonly currentTime: number;
  readonly state?: string;
  resume(): Promise<void>;
}

export interface PlayerDeps {
  createContext(): AudioContextLike;
  createVoice(ctx: AudioContextLike): Voice;
  scheduler: Scheduler;
  requestMidi(): Promise<MidiAccessLike>;
  /** performance.now(), ms. */
  nowMs(): number;
  setTimer(fn: () => void, ms: number): unknown;
  clearTimer(handle: unknown): void;
}

export interface Player {
  midiPorts: Signal<MidiPortInfo[]>;
  midiStatus: Signal<MidiStatus>;
  playError: Signal<string | null>;
  /** The MidiAccess obtained by connectMidi, shared with MIDI in. */
  midiAccess: Signal<MidiAccessLike | null>;
  connectMidi(): Promise<void>;
  startPlayback(): void;
  stopPlayback(): void;
  /** Sound one chord for a beat, so the learner can hear it. Does nothing while a run is playing. */
  previewChord(midi: Midi[]): void;
}

const MIDI_CHANNEL = 0; // MIDI ch 1

export function createPlayer(deps: PlayerDeps): Player {
  const midiPorts = signal<MidiPortInfo[]>([]);
  const midiStatus = signal<MidiStatus>('idle');
  const playError = signal<string | null>(null);
  const midiAccess = signal<MidiAccessLike | null>(null);

  let ctx: AudioContextLike | null = null;
  let voice: Voice | null = null;
  let access: MidiAccessLike | null = null;
  let unwatchPorts: (() => void) | null = null;
  let unBeat: (() => void) | null = null;
  let endTimer: unknown = null;
  let activePort: MidiOutputLike | null = null;
  let disposeWatch: (() => void) | null = null;

  const findPort = (id: string | null): MidiOutputLike | null => {
    if (!access || id === null) return null;
    for (const p of access.outputs.values()) if (p.id === id) return p;
    return null;
  };

  function refreshPorts(): void {
    if (!access) return;
    const ports = listPorts(access);
    midiPorts.value = ports;
    const sel = midiPortId.value;
    if (sel === null || !ports.some((p) => p.id === sel)) midiPortId.value = ports[0]?.id ?? null;
  }

  async function connectMidi(): Promise<void> {
    try {
      access = await deps.requestMidi();
    } catch (err) {
      const msg = err instanceof Error ? err.message : '';
      midiStatus.value = /not supported/i.test(msg) ? 'unsupported' : 'denied';
      return;
    }
    // A repeat Connect returns the same access object. Re-watching would wipe MIDI in's chained handler.
    if (midiAccess.value !== access) {
      unwatchPorts?.();
      unwatchPorts = onPortsChanged(access, refreshPorts);
      midiAccess.value = access;
    }
    midiStatus.value = 'ready';
    refreshPorts();
  }

  function buildEvents(): PlayEvent[] {
    const chords = slotChords.value;
    let beat = 0;
    return progression.value.map((slot, i) => {
      const ev: PlayEvent = { beat, lengthBeats: slot.length, midi: [...chords[i]!.midi] };
      beat += slot.length;
      return ev;
    });
  }

  function halt(): void {
    if (endTimer !== null) deps.clearTimer(endTimer);
    endTimer = null;
    unBeat?.();
    unBeat = null;
    deps.scheduler.stop();
    voice?.allOff();
    if (activePort) allNotesOff(activePort, MIDI_CHANNEL);
    activePort = null;
  }

  /** The sink for the current output, plus the MIDI port it uses. Sets playError when MIDI has no port. */
  function pickSink(audio: AudioContextLike, v: Voice): { sink: Sink; port: MidiOutputLike | null } | null {
    if (output.value !== 'midi') return { sink: voiceSink(v), port: null };
    const port = findPort(midiPortId.value);
    if (!port) {
      playError.value = 'No MIDI output selected. Connect MIDI and pick a port, or switch to the built-in sound.';
      return null;
    }
    return { sink: midiSink(() => port, MIDI_CHANNEL, () => deps.nowMs() - audio.currentTime * 1000), port };
  }

  function previewChord(notes: Midi[]): void {
    if (playing.value || notes.length === 0) return;
    if (!ctx) ctx = deps.createContext();
    if (ctx.state === 'suspended') void ctx.resume();
    if (!voice) {
      voice = deps.createVoice(ctx);
      voice.setVolume(volume.value);
    }
    const picked = pickSink(ctx, voice);
    if (!picked) return;
    playError.value = null;
    // A new preview replaces the previous one instead of stacking on it.
    voice.allOff();
    const on = ctx.currentTime + 0.02;
    const off = on + 60 / tempo.value;
    for (const n of notes) {
      picked.sink.noteOn(n, on);
      picked.sink.noteOff(n, off);
    }
  }

  function begin(): boolean {
    const events = buildEvents();
    if (events.length === 0) return false;

    if (!ctx) ctx = deps.createContext();
    if (ctx.state === 'suspended') void ctx.resume();
    const audio = ctx;
    if (!voice) {
      voice = deps.createVoice(audio);
      voice.setVolume(volume.value);
    }

    const picked = pickSink(audio, voice);
    if (!picked) return false;
    const sinks: Sink[] = [picked.sink];
    activePort = picked.port;
    playError.value = null;

    const bpm = tempo.value;
    const total = totalBeats.value;
    const looping = loop.value;
    playheadBeat.value = 0;
    unBeat = deps.scheduler.onBeat((beat) => {
      playheadBeat.value = beat;
      if (!looping && beat === total - 1 && endTimer === null) {
        // The last beat just became audible; end the run once it has rung out.
        endTimer = deps.setTimer(() => {
          endTimer = null;
          stopPlayback();
        }, (60 / bpm) * 1000);
      }
    });
    deps.scheduler.start(events, { bpm, loop: looping, totalBeats: total }, sinks);
    return true;
  }

  function startPlayback(): void {
    halt();
    disposeWatch?.();
    disposeWatch = null;
    if (!begin()) {
      playing.value = false;
      return;
    }
    playing.value = true;
    let first = true;
    disposeWatch = effect(() => {
      // Track what the restart policy depends on.
      slotChords.value;
      scale.value;
      root.value;
      tempo.value;
      if (first) {
        first = false;
        return;
      }
      untracked(() => {
        halt();
        if (!begin()) playing.value = false;
      });
    });
  }

  function stopPlayback(): void {
    disposeWatch?.();
    disposeWatch = null;
    halt();
    playing.value = false;
    playheadBeat.value = 0;
  }

  effect(() => {
    const v = volume.value;
    voice?.setVolume(v);
  });

  return { midiPorts, midiStatus, playError, midiAccess, connectMidi, startPlayback, stopPlayback, previewChord };
}

let shared: AudioContextLike | null = null;

const player = createPlayer({
  createContext: () => {
    shared = new AudioContext();
    return shared;
  },
  createVoice: (c) => createVoice(c as AudioContext),
  scheduler: createScheduler<ReturnType<typeof setTimeout>>({
    now: () => shared?.currentTime ?? 0,
    setTimer: (fn, ms) => setTimeout(fn, ms),
    clearTimer: (h) => clearTimeout(h),
  }),
  requestMidi: requestAccess,
  nowMs: () => performance.now(),
  setTimer: (fn, ms) => setTimeout(fn, ms),
  clearTimer: (h) => clearTimeout(h as ReturnType<typeof setTimeout>),
});

export const midiPorts = player.midiPorts;
export const midiStatus = player.midiStatus;
export const playError = player.playError;
export const midiAccess = player.midiAccess;
export const getMidiAccess = (): MidiAccessLike | null => player.midiAccess.value;
export const connectMidi = player.connectMidi;
export const startPlayback = player.startPlayback;
export const stopPlayback = player.stopPlayback;
export const previewChord = player.previewChord;
