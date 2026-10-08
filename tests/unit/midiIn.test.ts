import { beforeEach, describe, expect, it } from 'vitest';
import type { MidiAccessLike, MidiInputLike } from '../../src/midi';
import { foldToKeyboard, heldInput, midiInStatus, startMidiIn } from '../../src/state/midiIn';

function fake() {
  const mk = (id: string): MidiInputLike => ({ id, onmidimessage: null });
  let inputs = [mk('a')];
  let playerHandlerCalls = 0;
  const access: MidiAccessLike = {
    outputs: { values: () => [] },
    inputs: { values: () => inputs },
    onstatechange: () => void playerHandlerCalls++,
  };
  const send = (i: MidiInputLike, data: number[]) => i.onmidimessage?.({ data });
  return {
    access,
    get inputs() { return inputs; },
    addInput() { inputs = [...inputs, mk('b')]; },
    send,
    calls: () => playerHandlerCalls,
  };
}

beforeEach(() => {
  heldInput.value = [];
});

describe('startMidiIn', () => {
  it('tracks held notes and keeps the 4 most recent', () => {
    const f = fake();
    startMidiIn(f.access);
    expect(midiInStatus.value).toBe('listening');
    for (const n of [60, 64, 67, 71, 74]) f.send(f.inputs[0]!, [0x90, n, 90]);
    expect(heldInput.value).toEqual([64, 67, 71, 74]);
    f.send(f.inputs[0]!, [0x80, 67, 0]);
    f.send(f.inputs[0]!, [0x90, 71, 0]); // velocity 0 is a note-off
    expect(heldInput.value).toEqual([64, 74]);
  });

  it('re-subscribes on port changes and keeps the existing state handler', () => {
    const f = fake();
    startMidiIn(f.access);
    f.addInput();
    expect(f.inputs[1]!.onmidimessage).toBeNull();
    f.access.onstatechange?.({});
    expect(f.calls()).toBe(1);
    f.send(f.inputs[1]!, [0x90, 60, 80]);
    expect(heldInput.value).toEqual([60]);
  });

  it('stop clears notes and restores the handler', () => {
    const f = fake();
    const before = f.access.onstatechange;
    const stop = startMidiIn(f.access);
    f.send(f.inputs[0]!, [0x90, 60, 80]);
    stop();
    expect(heldInput.value).toEqual([]);
    expect(f.inputs[0]!.onmidimessage).toBeNull();
    expect(f.access.onstatechange).toBe(before);
    expect(midiInStatus.value).toBe('off');
  });
});

describe('foldToKeyboard', () => {
  it('folds by octave into 48-72', () => {
    expect(foldToKeyboard(36)).toBe(48);
    expect(foldToKeyboard(40)).toBe(52);
    expect(foldToKeyboard(84)).toBe(72);
    expect(foldToKeyboard(85)).toBe(61);
    expect(foldToKeyboard(60)).toBe(60);
  });
});
