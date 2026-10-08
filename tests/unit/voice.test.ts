import { describe, expect, it } from 'vitest';
import { createVoice } from '../../src/audio/voice';

type Log = string[];

function param(name: string, log: Log) {
  return {
    value: 0,
    setValueAtTime: (v: number, t: number) => log.push(`${name}.set(${v},${t})`),
    linearRampToValueAtTime: (v: number, t: number) => log.push(`${name}.ramp(${v},${t})`),
    setTargetAtTime: (v: number, t: number, tc: number) => log.push(`${name}.target(${v},${t},${tc})`),
    cancelScheduledValues: (t: number) => log.push(`${name}.cancel(${t})`),
  };
}

function fakeCtx() {
  const log: Log = [];
  const oscs: any[] = [];
  const gains: any[] = [];
  const filters: any[] = [];
  const node = (extra: object) => ({ connect: (n: unknown) => log.push('connect'), disconnect: () => {}, ...extra });
  const ctx = {
    currentTime: 1,
    destination: { id: 'dest' },
    createGain: () => {
      const g: any = node({ gain: param(`gain${gains.length}`, log) });
      gains.push(g);
      return g;
    },
    createOscillator: () => {
      const o: any = node({
        type: '',
        frequency: { value: 0 },
        started: undefined as number | undefined,
        stopped: undefined as number | undefined,
        start(t: number) { o.started = t; },
        stop(t: number) { o.stopped = t; },
        onended: null,
      });
      oscs.push(o);
      return o;
    },
    createBiquadFilter: () => {
      const f: any = node({ type: '', frequency: { value: 0 } });
      filters.push(f);
      return f;
    },
  };
  return { ctx: ctx as unknown as AudioContext, log, oscs, gains, filters };
}

describe('voice', () => {
  it('builds saw -> lowpass -> envelope gain with a soft attack at the given time', () => {
    const { ctx, oscs, gains, filters, log } = fakeCtx();
    createVoice(ctx).noteOn(69, 2);
    expect(oscs[0].type).toBe('sawtooth');
    expect(oscs[0].frequency.value).toBeCloseTo(440, 6);
    expect(oscs[0].started).toBe(2);
    expect(filters[0].type).toBe('lowpass');
    expect(gains).toHaveLength(2); // master + envelope
    expect(log).toContain('gain1.set(0,2)');
    const ramp = log.find((l) => l.startsWith('gain1.ramp'))!;
    expect(Number(ramp.match(/,(.+)\)/)![1])).toBeGreaterThan(2);
  });

  it('releases over about 300 ms and stops the oscillator after the tail', () => {
    const { ctx, oscs, log } = fakeCtx();
    const v = createVoice(ctx);
    v.noteOn(60, 2);
    v.noteOff(60, 3);
    expect(log).toContain('gain1.target(0,3,0.075)'); // 4 * tau = 300 ms
    expect(oscs[0].stopped).toBeGreaterThanOrEqual(3.3);
    expect(oscs[0].stopped).toBeLessThanOrEqual(3.6);
  });

  it('is polyphonic: notes get their own oscillators and release independently', () => {
    const { ctx, oscs } = fakeCtx();
    const v = createVoice(ctx);
    v.noteOn(60, 1);
    v.noteOn(64, 1);
    v.noteOn(67, 1);
    v.noteOff(64, 2);
    expect(oscs).toHaveLength(3);
    expect(oscs[0].stopped).toBeUndefined();
    expect(oscs[1].stopped).toBeGreaterThan(2);
    expect(oscs[2].stopped).toBeUndefined();
  });

  it('retriggering a held note releases the old one', () => {
    const { ctx, oscs } = fakeCtx();
    const v = createVoice(ctx);
    v.noteOn(60, 1);
    v.noteOn(60, 2);
    expect(oscs).toHaveLength(2);
    expect(oscs[0].stopped).toBeGreaterThan(2);
  });

  it('noteOff at or before the start time cancels the note without sounding it', () => {
    const { ctx, oscs } = fakeCtx();
    const v = createVoice(ctx);
    v.noteOn(60, 5);
    v.noteOff(60, 4);
    expect(oscs[0].stopped).toBe(5);
  });

  it('allOff releases everything now', () => {
    const { ctx, oscs } = fakeCtx();
    const v = createVoice(ctx);
    v.noteOn(60, 0);
    v.noteOn(64, 0);
    v.allOff();
    expect(oscs.every((o) => o.stopped > 1)).toBe(true);
  });

  it('setVolume drives the master gain and clamps to 0-1', () => {
    const { ctx, log } = fakeCtx();
    const v = createVoice(ctx);
    v.setVolume(0.4);
    v.setVolume(5);
    expect(log).toContain('gain0.target(0.4,1,0.01)');
    expect(log).toContain('gain0.target(1,1,0.01)');
  });

  it('cleans up nodes when an oscillator ends', () => {
    const { ctx, oscs } = fakeCtx();
    const v = createVoice(ctx);
    v.noteOn(60, 0);
    oscs[0].onended();
    v.noteOff(60, 1); // no-op, no throw
    v.allOff();
    expect(oscs[0].stopped).toBeUndefined();
  });
});
