import type { Midi } from '../theory/types';

export interface Voice {
  noteOn(midi: Midi, when: number): void;
  noteOff(midi: Midi, when: number): void;
  allOff(): void;
  setVolume(v: number): void;
}

const PEAK = 0.18; // per note, leaves headroom for 4-note chords
const ATTACK_SEC = 0.03;
const RELEASE_TAU = 0.075; // ~98% down after 4 tau = 300 ms
const RELEASE_STOP_SEC = 0.4;
const CUTOFF_HZ = 1800;

interface Note {
  osc: OscillatorNode;
  env: GainNode;
  startAt: number;
  released: boolean;
}

export function createVoice(ctx: AudioContext): Voice {
  const master = ctx.createGain();
  master.gain.value = 0.7;
  master.connect(ctx.destination);
  const active = new Map<Midi, Note>();
  const all = new Set<Note>();

  function release(note: Note, when: number): void {
    if (note.released) return;
    note.released = true;
    if (when <= note.startAt) {
      note.osc.stop(note.startAt); // never sounded
      return;
    }
    note.env.gain.cancelScheduledValues(when);
    note.env.gain.setTargetAtTime(0, when, RELEASE_TAU);
    note.osc.stop(when + RELEASE_STOP_SEC);
  }

  function noteOn(midi: Midi, when: number): void {
    const prev = active.get(midi);
    if (prev) release(prev, when);

    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 440 * 2 ** ((midi - 69) / 12);
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = CUTOFF_HZ;
    const env = ctx.createGain();
    env.gain.setValueAtTime(0, when);
    env.gain.linearRampToValueAtTime(PEAK, when + ATTACK_SEC);
    osc.connect(filter);
    filter.connect(env);
    env.connect(master);

    const note: Note = { osc, env, startAt: when, released: false };
    osc.onended = () => {
      osc.disconnect();
      filter.disconnect();
      env.disconnect();
      all.delete(note);
      if (active.get(midi) === note) active.delete(midi);
    };
    active.set(midi, note);
    all.add(note);
    osc.start(when);
  }

  function noteOff(midi: Midi, when: number): void {
    const note = active.get(midi);
    if (!note) return;
    release(note, when);
    active.delete(midi);
  }

  function allOff(): void {
    const now = ctx.currentTime;
    for (const note of all) release(note, now);
    active.clear();
  }

  function setVolume(v: number): void {
    master.gain.setTargetAtTime(Math.min(1, Math.max(0, v)), ctx.currentTime, 0.01);
  }

  return { noteOn, noteOff, allOff, setVolume };
}
