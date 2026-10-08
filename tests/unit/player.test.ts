import { beforeEach, describe, expect, it } from 'vitest';
import { createPlayer } from '../../src/state/player';
import type { PlayerDeps } from '../../src/state/player';
import type { PlayEvent, Scheduler, Sink } from '../../src/audio/scheduler';
import type { MidiAccessLike, MidiOutputLike } from '../../src/midi';
import * as store from '../../src/state/store';

function setup(opts: { ports?: MidiOutputLike[]; midiError?: string } = {}) {
  const started: { events: PlayEvent[]; opts: { bpm: number; loop: boolean; totalBeats: number }; sinks: Sink[] }[] = [];
  let stops = 0;
  let beatCb: ((b: number) => void) | null = null;
  const scheduler: Scheduler = {
    start: (events, o, sinks) => started.push({ events, opts: o, sinks }),
    stop: () => void stops++,
    onBeat: (cb) => {
      beatCb = cb;
      return () => {
        beatCb = null;
      };
    },
  };
  const timers: { fn: () => void; ms: number }[] = [];
  const volumes: number[] = [];
  let allOffs = 0;
  const outputs = opts.ports ?? [];
  const access: MidiAccessLike = {
    outputs: { values: () => outputs },
    inputs: { values: () => [] },
    onstatechange: null,
  };
  const deps: PlayerDeps = {
    createContext: () => ({ currentTime: 1, state: 'running', resume: async () => {} }),
    createVoice: () => ({
      noteOn() {},
      noteOff() {},
      allOff: () => void allOffs++,
      setVolume: (v) => void volumes.push(v),
    }),
    scheduler,
    requestMidi: async () => {
      if (opts.midiError) throw new Error(opts.midiError);
      return access;
    },
    nowMs: () => 5000,
    setTimer: (fn, ms) => timers.push({ fn, ms }),
    clearTimer: () => {},
  };
  return {
    player: createPlayer(deps),
    started,
    timers,
    volumes,
    access,
    beat: (b: number) => beatCb?.(b),
    stops: () => stops,
    allOffs: () => allOffs,
  };
}

const port = (id: string, sent: number[][] = []): MidiOutputLike => ({
  id,
  name: id,
  send: (d) => void sent.push(d),
});

beforeEach(() => {
  store.setScale('major');
  store.root.value = 0;
  store.progression.value = [
    { source: { kind: 'degree', degree: 0, type: 'triad' }, length: 4 },
    { source: { kind: 'degree', degree: 4, type: 'triad' }, length: 2 },
    { source: { kind: 'free', midi: [60, 64] }, length: 1 },
  ];
  store.output.value = 'builtin';
  store.midiPortId.value = null;
  store.loop.value = true;
  store.tempo.value = 120;
  store.playing.value = false;
});

describe('startPlayback', () => {
  it('builds events from slot lengths and snapped chord notes', () => {
    const t = setup();
    t.player.startPlayback();
    const run = t.started[0]!;
    expect(run.events.map((e) => [e.beat, e.lengthBeats])).toEqual([
      [0, 4],
      [4, 2],
      [6, 1],
    ]);
    expect(run.events.map((e) => e.midi)).toEqual(store.slotChords.value.map((c) => c.midi));
    expect(run.opts).toEqual({ bpm: 120, loop: true, totalBeats: 7 });
    expect(store.playing.value).toBe(true);
    t.player.stopPlayback();
  });

  it('uses the voice sink for builtin and sends nothing to MIDI', () => {
    const sent: number[][] = [];
    const t = setup({ ports: [port('a', sent)] });
    t.player.startPlayback();
    t.started[0]!.sinks[0]!.noteOn(60, 2);
    expect(sent).toEqual([]);
    expect(t.started[0]!.sinks).toHaveLength(1);
    t.player.stopPlayback();
  });

  it('uses the midi sink on channel 1 with an audio-clock offset', async () => {
    const sent: number[][] = [];
    const t = setup({ ports: [port('a', sent)] });
    await t.player.connectMidi();
    store.output.value = 'midi';
    t.player.startPlayback();
    t.started[0]!.sinks[0]!.noteOn(60, 2);
    expect(sent).toEqual([[0x90, 60, 100]]);
    t.player.stopPlayback();
  });

  it('sets playError and does not play when midi has no port', () => {
    const t = setup();
    store.output.value = 'midi';
    t.player.startPlayback();
    expect(t.started).toHaveLength(0);
    expect(t.player.playError.value).toMatch(/MIDI/);
    expect(store.playing.value).toBe(false);
  });

  it('restarts when tempo changes while playing', () => {
    const t = setup();
    t.player.startPlayback();
    store.tempo.value = 90;
    expect(t.started).toHaveLength(2);
    expect(t.started[1]!.opts.bpm).toBe(90);
    t.player.stopPlayback();
    store.tempo.value = 70;
    expect(t.started).toHaveLength(2);
  });

  it('forwards volume changes once the voice exists', () => {
    const t = setup();
    t.player.startPlayback();
    store.volume.value = 0.3;
    expect(t.volumes.at(-1)).toBe(0.3);
    t.player.stopPlayback();
  });
});

describe('stopPlayback', () => {
  it('stops the scheduler, releases voices and flips playing', () => {
    const t = setup();
    t.player.startPlayback();
    t.beat(3);
    expect(store.playheadBeat.value).toBe(3);
    t.player.stopPlayback();
    expect(t.stops()).toBeGreaterThan(0);
    expect(t.allOffs()).toBeGreaterThan(0);
    expect(store.playing.value).toBe(false);
    expect(store.playheadBeat.value).toBe(0);
  });

  it('sends all-notes-off to the MIDI port', async () => {
    const sent: number[][] = [];
    const t = setup({ ports: [port('a', sent)] });
    await t.player.connectMidi();
    store.output.value = 'midi';
    t.player.startPlayback();
    t.player.stopPlayback();
    expect(sent).toContainEqual([0xb0, 123, 0]);
  });

  it('a non-looping run ends after the last beat rings out', () => {
    const t = setup();
    store.loop.value = false;
    t.player.startPlayback();
    t.beat(6);
    expect(t.timers).toHaveLength(1);
    expect(t.timers[0]!.ms).toBe(500);
    expect(store.playing.value).toBe(true);
    t.timers[0]!.fn();
    expect(store.playing.value).toBe(false);
  });
});

describe('connectMidi', () => {
  it('fills ports and selects the first one', async () => {
    const t = setup({ ports: [port('a'), port('b')] });
    await t.player.connectMidi();
    expect(t.player.midiStatus.value).toBe('ready');
    expect(t.player.midiPorts.value.map((p) => p.id)).toEqual(['a', 'b']);
    expect(store.midiPortId.value).toBe('a');
  });

  it('keeps a still-present selection and reselects when it vanishes', async () => {
    const outputs = [port('a'), port('b')];
    const t = setup({ ports: outputs });
    store.midiPortId.value = 'b';
    await t.player.connectMidi();
    expect(store.midiPortId.value).toBe('b');
    outputs.pop();
    t.access.onstatechange?.({});
    expect(t.player.midiPorts.value.map((p) => p.id)).toEqual(['a']);
    expect(store.midiPortId.value).toBe('a');
  });

  it('reports unsupported and denied', async () => {
    const u = setup({ midiError: 'Web MIDI is not supported in this browser.' });
    await u.player.connectMidi();
    expect(u.player.midiStatus.value).toBe('unsupported');
    const d = setup({ midiError: 'MIDI access was denied or blocked by the browser.' });
    await d.player.connectMidi();
    expect(d.player.midiStatus.value).toBe('denied');
  });
});
