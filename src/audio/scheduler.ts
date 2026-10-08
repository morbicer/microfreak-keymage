import type { Midi } from '../theory/types';

export interface PlayEvent {
  beat: number;
  lengthBeats: number;
  midi: Midi[];
}

/** Times are audio-clock seconds. */
export interface Sink {
  noteOn(midi: Midi, whenSec: number): void;
  noteOff(midi: Midi, whenSec: number): void;
}

export interface Scheduler {
  start(events: PlayEvent[], opts: { bpm: number; loop: boolean; totalBeats: number }, sinks: Sink[]): void;
  stop(): void;
  /** Called when a beat becomes audible, with the beat position inside the progression. Returns an unsubscribe. */
  onBeat(cb: (beat: number) => void): () => void;
}

export interface SchedulerDeps<H = unknown> {
  /** Audio clock, seconds. */
  now(): number;
  setTimer(fn: () => void, ms: number): H;
  clearTimer(handle: H): void;
}

export const TICK_MS = 25;
export const LOOKAHEAD_SEC = 0.1;
/** Gap between the first beat and "now" so the first noteOn is never already in the past. */
export const START_LEAD_SEC = 0.05;
/** noteOff lands this much before the chord's end so a repeated note re-triggers cleanly. */
export const RELEASE_GAP_SEC = 0.02;

interface Sounding {
  midi: Midi;
  onSec: number;
  offSec: number;
}

export function createScheduler<H>(deps: SchedulerDeps<H>): Scheduler {
  const beatCbs = new Set<(beat: number) => void>();
  let timer: H | null = null;
  let sinks: Sink[] = [];
  let sounding: Sounding[] = [];
  let run = 0; // guards against ticks of a previous start()

  function clear(): void {
    if (timer !== null) deps.clearTimer(timer);
    timer = null;
  }

  function start(events: PlayEvent[], opts: { bpm: number; loop: boolean; totalBeats: number }, nextSinks: Sink[]): void {
    stop();
    const id = ++run;
    sinks = nextSinks;
    const spb = 60 / opts.bpm; // bpm is read once here, so a tempo change applies on the next start
    const total = opts.totalBeats;
    const t0 = deps.now() + START_LEAD_SEC;
    const sorted = [...events].sort((a, b) => a.beat - b.beat);

    let cycle = 0;
    let idx = 0;
    let eventsDone = sorted.length === 0;
    let nextBeat = 0; // absolute beat count for onBeat
    let beatsDone = total <= 0;

    function tick(): void {
      if (id !== run) return;
      const now = deps.now();
      const horizon = now + LOOKAHEAD_SEC;

      while (!eventsDone) {
        const ev = sorted[idx]!;
        const onSec = t0 + (cycle * total + ev.beat) * spb;
        if (onSec >= horizon) break;
        const endSec = t0 + (cycle * total + ev.beat + ev.lengthBeats) * spb;
        const offSec = Math.max(onSec, endSec - RELEASE_GAP_SEC);
        for (const m of ev.midi) {
          for (const s of sinks) {
            s.noteOn(m, onSec);
            s.noteOff(m, offSec);
          }
          sounding.push({ midi: m, onSec, offSec });
        }
        idx++;
        if (idx >= sorted.length) {
          idx = 0;
          cycle++;
          if (!opts.loop) eventsDone = true;
        }
      }

      sounding = sounding.filter((n) => n.offSec > now);

      while (!beatsDone && t0 + nextBeat * spb <= now) {
        const beat = nextBeat % total;
        nextBeat++;
        if (!opts.loop && nextBeat >= total) beatsDone = true;
        for (const cb of [...beatCbs]) cb(beat);
      }

      timer = eventsDone && beatsDone ? null : deps.setTimer(tick, TICK_MS);
    }

    tick();
  }

  function stop(): void {
    run++;
    clear();
    const now = deps.now();
    for (const n of sounding) {
      if (n.offSec <= now) continue;
      // A note whose noteOn is still queued is released at its start time, so it never sounds.
      const when = Math.max(now, n.onSec);
      for (const s of sinks) s.noteOff(n.midi, when);
    }
    sounding = [];
  }

  function onBeat(cb: (beat: number) => void): () => void {
    beatCbs.add(cb);
    return () => beatCbs.delete(cb);
  }

  return { start, stop, onBeat };
}
