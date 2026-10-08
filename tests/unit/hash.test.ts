// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { decodeState, encodeState, startHashSync } from '../../src/state/hash';
import * as store from '../../src/state/store';
import type { ProgressionSlot } from '../../src/theory/types';

function reset() {
  store.scale.value = 'major';
  store.root.value = 0;
  store.chordType.value = 'triad';
  store.progression.value = [];
  store.selectedSlot.value = null;
  store.defaultLength.value = 4;
  store.tempo.value = 100;
  store.loop.value = true;
  store.output.value = 'builtin';
  store.genLength.value = 4;
  store.genEnding.value = 'finished';
  store.genType.value = 'triad';
}

beforeEach(reset);

describe('hash round trip', () => {
  it('round-trips every field including free slots', () => {
    const slots: ProgressionSlot[] = [
      { source: { kind: 'degree', degree: 0, type: 'triad' }, length: 4 },
      { source: { kind: 'degree', degree: 3, type: 'seventh' }, length: 16 },
      { source: { kind: 'degree', degree: 6, type: 'sus4' }, length: 1 },
      { source: { kind: 'free', midi: [48, 52, 55] }, length: 2 },
      { source: { kind: 'free', midi: [36, 40, 43, 127] }, length: 8 },
    ];
    store.scale.value = 'dorian';
    store.root.value = 7;
    store.chordType.value = 'sus2';
    store.progression.value = slots;
    store.tempo.value = 133;
    store.loop.value = false;
    store.defaultLength.value = 8;
    store.output.value = 'midi';
    store.genLength.value = 8;
    store.genEnding.value = 'loops';
    store.genType.value = 'seventh';
    const hash = encodeState();
    expect(hash).toContain('p=d0.triad.4,d3.seventh.16');
    expect(hash).toContain('f48-52-55.2');

    reset();
    decodeState(hash);
    expect(store.scale.value).toBe('dorian');
    expect(store.root.value).toBe(7);
    expect(store.chordType.value).toBe('sus2');
    expect(store.progression.value).toEqual(slots);
    expect(store.tempo.value).toBe(133);
    expect(store.loop.value).toBe(false);
    expect(store.defaultLength.value).toBe(8);
    expect(store.output.value).toBe('midi');
    expect(store.genLength.value).toBe(8);
    expect(store.genEnding.value).toBe('loops');
    expect(store.genType.value).toBe('seventh');
    expect(encodeState()).toBe(hash);
  });

  it('round-trips the default state with no p param', () => {
    const hash = encodeState();
    expect(hash).not.toContain('&p=');
    decodeState(hash);
    expect(encodeState()).toBe(hash);
  });

  it('accepts a hash without the leading #', () => {
    decodeState('s=minor&r=2');
    expect(store.scale.value).toBe('minor');
    expect(store.root.value).toBe(2);
  });
});

describe('hash robustness', () => {
  it.each(['', '#', '#%%%', 'garbage', '#=&=&&', '#p=,,,', '#s[]=x&p=%E0%A4%A'])('never throws on %j', (h) => {
    expect(() => decodeState(h)).not.toThrow();
    expect(store.scale.value).toBe('major');
    expect(store.progression.value).toEqual([]);
  });

  it('does not throw on non-string input', () => {
    expect(() => decodeState(undefined as unknown as string)).not.toThrow();
    expect(() => decodeState(null as unknown as string)).not.toThrow();
  });

  it('falls back to defaults per field for out-of-range or unknown values', () => {
    store.root.value = 5;
    store.tempo.value = 120;
    decodeState('#s=lydian&r=12&t=ninth&bpm=200&loop=maybe&len=3&out=usb&gl=6&ge=x&gt=y');
    expect(store.scale.value).toBe('major');
    expect(store.root.value).toBe(0);
    expect(store.chordType.value).toBe('triad');
    expect(store.tempo.value).toBe(100);
    expect(store.loop.value).toBe(true);
    expect(store.defaultLength.value).toBe(4);
    expect(store.output.value).toBe('builtin');
    expect(store.genLength.value).toBe(4);
    expect(store.genEnding.value).toBe('finished');
    expect(store.genType.value).toBe('triad');
  });

  it('checks the tempo and root bounds', () => {
    decodeState('#bpm=60&r=11');
    expect([store.tempo.value, store.root.value]).toEqual([60, 11]);
    decodeState('#bpm=160&r=0');
    expect(store.tempo.value).toBe(160);
    decodeState('#bpm=59');
    expect(store.tempo.value).toBe(100);
    decodeState('#bpm=161');
    expect(store.tempo.value).toBe(100);
    decodeState('#bpm=-80&r=-1');
    expect(store.tempo.value).toBe(100);
    expect(store.root.value).toBe(0);
    decodeState('#bpm=99.5');
    expect(store.tempo.value).toBe(100);
  });

  it('keeps valid partial input and resets the rest', () => {
    store.tempo.value = 140;
    decodeState('#s=blues&r=3');
    expect(store.scale.value).toBe('blues');
    expect(store.root.value).toBe(3);
    expect(store.tempo.value).toBe(100);
  });

  it('drops invalid slots and keeps valid ones', () => {
    decodeState(
      '#p=d0.triad.4,d7.triad.4,d1.ninth.4,d2.triad.3,x9,f60.4,f60-64-67-71-72.4,f60-64-200.4,f48-52-55.2,d,,f60-64.1',
    );
    expect(store.progression.value.map((s) => s.source)).toEqual([
      { kind: 'degree', degree: 0, type: 'triad' },
      { kind: 'free', midi: [48, 52, 55] },
      { kind: 'free', midi: [60, 64] },
    ]);
  });

  it('caps the progression at 16 slots', () => {
    decodeState('#p=' + Array(20).fill('d0.triad.4').join(','));
    expect(store.progression.value).toHaveLength(16);
  });

  it('clears selectedSlot when it points past the decoded progression', () => {
    store.selectedSlot.value = 3;
    decodeState('#p=d0.triad.4');
    expect(store.selectedSlot.value).toBeNull();
  });
});

describe('startHashSync', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    history.replaceState(null, '', '#');
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('applies location.hash on start', () => {
    history.replaceState(null, '', '#s=minor&bpm=80&p=d0.triad.4');
    const stop = startHashSync();
    expect(store.scale.value).toBe('minor');
    expect(store.tempo.value).toBe(80);
    expect(store.progression.value).toHaveLength(1);
    stop();
  });

  it('keeps the store when the hash is empty', () => {
    store.tempo.value = 90;
    const stop = startHashSync();
    expect(store.tempo.value).toBe(90);
    stop();
  });

  it('writes the hash after a debounce and stops after dispose', () => {
    const stop = startHashSync();
    store.tempo.value = 77;
    expect(location.hash).not.toContain('bpm=77');
    vi.advanceTimersByTime(500);
    expect(location.hash).toContain('bpm=77');
    stop();
    store.tempo.value = 66;
    vi.advanceTimersByTime(500);
    expect(location.hash).toContain('bpm=77');
  });

  it('reacts to hashchange', () => {
    const stop = startHashSync();
    history.replaceState(null, '', '#r=9');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    expect(store.root.value).toBe(9);
    stop();
  });
});
