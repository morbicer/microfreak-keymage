import { describe, expect, it } from 'vitest';
import { LOOKAHEAD_SEC, RELEASE_GAP_SEC, START_LEAD_SEC, TICK_MS, createScheduler } from '../../src/audio/scheduler';
import type { PlayEvent, Sink } from '../../src/audio/scheduler';

type Call = { kind: 'on' | 'off'; midi: number; at: number };

function setup() {
  let t = 0;
  let pending: { fn: () => void; due: number; h: number } | null = null;
  let nextHandle = 1;
  const calls: Call[] = [];
  const sink: Sink = {
    noteOn: (midi, at) => calls.push({ kind: 'on', midi, at }),
    noteOff: (midi, at) => calls.push({ kind: 'off', midi, at }),
  };
  const sched = createScheduler<number>({
    now: () => t,
    setTimer: (fn, ms) => {
      pending = { fn, due: t + ms / 1000, h: nextHandle++ };
      return pending.h;
    },
    clearTimer: (h) => {
      if (pending?.h === h) pending = null;
    },
  });
  /** Advance the fake clock, firing the timer at each tick. */
  function advance(sec: number) {
    const end = t + sec;
    while (pending && pending.due <= end + 1e-9) {
      const p = pending;
      pending = null;
      t = p.due;
      p.fn();
    }
    t = end;
  }
  return { sched, sink, calls, advance, setNow: (v: number) => (t = v), now: () => t, hasTimer: () => pending !== null };
}

const prog: PlayEvent[] = [
  { beat: 0, lengthBeats: 4, midi: [48, 52, 55] },
  { beat: 4, lengthBeats: 4, midi: [53, 57, 60] },
];
const opts = { bpm: 120, loop: false, totalBeats: 8 };
const ons = (c: Call[]) => c.filter((x) => x.kind === 'on');
const offs = (c: Call[]) => c.filter((x) => x.kind === 'off');

describe('scheduler', () => {
  it('schedules a 2-chord progression at 120 bpm with exact times', () => {
    const { sched, sink, calls, advance } = setup();
    sched.start(prog, opts, [sink]);
    advance(5);
    const t0 = START_LEAD_SEC;
    // 120 bpm = 0.5 s per beat, so a chord of 4 beats is 2 s
    expect(ons(calls).filter((c) => c.midi === 48)[0]!.at).toBeCloseTo(t0, 9);
    expect(ons(calls).filter((c) => c.midi === 53)[0]!.at).toBeCloseTo(t0 + 2, 9);
    expect(offs(calls).filter((c) => c.midi === 48)[0]!.at).toBeCloseTo(t0 + 2 - RELEASE_GAP_SEC, 9);
    expect(offs(calls).filter((c) => c.midi === 60)[0]!.at).toBeCloseTo(t0 + 4 - RELEASE_GAP_SEC, 9);
    expect(ons(calls)).toHaveLength(6);
    expect(offs(calls)).toHaveLength(6);
  });

  it('noteOff of chord 1 lands before the noteOn of chord 2', () => {
    const { sched, sink, calls, advance } = setup();
    sched.start(prog, opts, [sink]);
    advance(5);
    const off1 = offs(calls).find((c) => c.midi === 48)!.at;
    const on2 = ons(calls).find((c) => c.midi === 53)!.at;
    expect(off1).toBeLessThan(on2);
  });

  it('only schedules inside the look-ahead window', () => {
    const { sched, sink, calls, advance } = setup();
    sched.start(prog, opts, [sink]);
    expect(ons(calls)).toHaveLength(3); // chord 1 at 0.05 < 0.1
    advance(1.9);
    expect(ons(calls)).toHaveLength(3);
    advance(0.1 + TICK_MS / 1000); // now past 2.05 - 0.1
    expect(ons(calls)).toHaveLength(6);
    expect(LOOKAHEAD_SEC).toBe(0.1);
  });

  it('never schedules a note twice across ticks', () => {
    const { sched, sink, calls, advance } = setup();
    sched.start(prog, { ...opts, loop: true }, [sink]);
    advance(10);
    const keys = ons(calls).map((c) => `${c.midi}@${c.at.toFixed(6)}`);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('wraps when looping', () => {
    const { sched, sink, calls, advance } = setup();
    sched.start(prog, { ...opts, loop: true }, [sink]);
    advance(9);
    const t0 = START_LEAD_SEC;
    const second48 = ons(calls).filter((c) => c.midi === 48)[1]!;
    expect(second48.at).toBeCloseTo(t0 + 4, 9); // 8 beats * 0.5 s
    expect(ons(calls).filter((c) => c.midi === 53)[1]!.at).toBeCloseTo(t0 + 6, 9);
  });

  it('does not loop when loop is false, and stops ticking', () => {
    const { sched, sink, calls, advance, hasTimer } = setup();
    sched.start(prog, opts, [sink]);
    advance(10);
    expect(ons(calls)).toHaveLength(6);
    expect(hasTimer()).toBe(false);
  });

  it('stop() releases sounding notes on all sinks and cancels the timer', () => {
    const { sched, sink, calls, advance, hasTimer, now } = setup();
    const other: Call[] = [];
    const sink2: Sink = {
      noteOn: (midi, at) => other.push({ kind: 'on', midi, at }),
      noteOff: (midi, at) => other.push({ kind: 'off', midi, at }),
    };
    sched.start(prog, opts, [sink, sink2]);
    advance(1);
    const before = calls.length;
    sched.stop();
    const stopOffs = calls.slice(before);
    expect(stopOffs.map((c) => c.midi).sort()).toEqual([48, 52, 55]);
    expect(stopOffs.every((c) => c.kind === 'off' && c.at === now())).toBe(true);
    expect(other.filter((c) => c.kind === 'off' && c.at === now())).toHaveLength(3);
    expect(hasTimer()).toBe(false);
    advance(5);
    expect(ons(calls)).toHaveLength(3); // nothing more after stop
  });

  it('stop() releases queued-but-not-started notes at their start time', () => {
    const { sched, sink, calls, advance } = setup();
    sched.start(prog, opts, [sink]);
    advance(1.98); // chord 2 (starts 2.05) is queued
    const before = calls.length;
    sched.stop();
    const stopCalls = calls.slice(before).filter((c) => [53, 57, 60].includes(c.midi));
    expect(stopCalls).toHaveLength(3);
    expect(stopCalls.every((c) => c.at === START_LEAD_SEC + 2)).toBe(true);
  });

  it('applies a tempo change on the next start', () => {
    const { sched, sink, calls, advance } = setup();
    sched.start(prog, opts, [sink]);
    advance(5);
    sched.stop();
    calls.length = 0;
    const base = 5;
    sched.start(prog, { ...opts, bpm: 60 }, [sink]);
    advance(4);
    const on53 = ons(calls).find((c) => c.midi === 53)!;
    expect(on53.at).toBeCloseTo(base + START_LEAD_SEC + 4, 9); // 4 beats at 1 s
  });

  it('fires onBeat once per beat when the beat is due, wrapping in a loop', () => {
    const { sched, sink, advance } = setup();
    const beats: number[] = [];
    const off = sched.onBeat((b) => beats.push(b));
    sched.start(prog, { ...opts, loop: true }, [sink]);
    advance(0.04);
    expect(beats).toEqual([]);
    advance(0.02); // 0.06 > 0.05
    expect(beats).toEqual([0]);
    advance(4.6); // beats at 0.05, 0.55, ... 4.55 -> 10 beats
    expect(beats).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 0, 1]);
    off();
    advance(1);
    expect(beats).toHaveLength(10);
  });

  it('calling start twice does not leave the first run ticking', () => {
    const { sched, sink, calls, advance } = setup();
    sched.start(prog, { ...opts, loop: true }, [sink]);
    sched.start([{ beat: 0, lengthBeats: 1, midi: [60] }], { bpm: 120, loop: true, totalBeats: 1 }, [sink]);
    calls.length = 0;
    advance(2);
    expect(calls.every((c) => c.midi === 60)).toBe(true);
  });
});
