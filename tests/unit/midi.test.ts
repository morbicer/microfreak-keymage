import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  allNotesOff,
  listInputs,
  listPorts,
  onNote,
  onPortsChanged,
  requestAccess,
  sendNoteOff,
  sendNoteOn,
  type MidiAccessLike,
  type MidiInputLike,
  type MidiOutputLike,
} from '../../src/midi';

function fakeOutput(id = 'o1', name = 'Out'): MidiOutputLike & { sent: { data: number[]; at?: number }[] } {
  const sent: { data: number[]; at?: number }[] = [];
  return { id, name, sent, send: (data, at) => void sent.push({ data: [...data], at }) };
}

function fakeInput(id = 'i1', name = 'In'): MidiInputLike {
  return { id, name, onmidimessage: null };
}

function fakeAccess(outputs: MidiOutputLike[], inputs: MidiInputLike[]): MidiAccessLike {
  return {
    outputs: new Map(outputs.map((o) => [o.id, o])),
    inputs: new Map(inputs.map((i) => [i.id, i])),
    onstatechange: null,
  };
}

const emit = (input: MidiInputLike, data: number[]) => input.onmidimessage?.({ data: Uint8Array.from(data) });

afterEach(() => vi.unstubAllGlobals());

describe('requestAccess', () => {
  it('rejects with a clear error when Web MIDI is unsupported', async () => {
    vi.stubGlobal('navigator', {});
    await expect(requestAccess()).rejects.toThrow(/not supported/i);
  });

  it('requests access without sysex', async () => {
    const access = fakeAccess([], []);
    const req = vi.fn().mockResolvedValue(access);
    vi.stubGlobal('navigator', { requestMIDIAccess: req });
    await expect(requestAccess()).resolves.toBe(access);
    expect(req).toHaveBeenCalledWith({ sysex: false });
  });

  it('rejects with a clear error when permission is denied', async () => {
    vi.stubGlobal('navigator', { requestMIDIAccess: () => Promise.reject(new DOMException('no', 'SecurityError')) });
    await expect(requestAccess()).rejects.toThrow(/denied|blocked|permission/i);
  });
});

describe('ports', () => {
  it('lists outputs and inputs as id and name', () => {
    const access = fakeAccess([fakeOutput('a', 'MicroFreak')], [fakeInput('b', 'Keys')]);
    expect(listPorts(access)).toEqual([{ id: 'a', name: 'MicroFreak' }]);
    expect(listInputs(access)).toEqual([{ id: 'b', name: 'Keys' }]);
  });

  it('falls back to a placeholder name', () => {
    const access = fakeAccess([{ id: 'x', name: null, send: () => {} }], []);
    expect(listPorts(access)).toEqual([{ id: 'x', name: 'MIDI output' }]);
  });
});

describe('sending', () => {
  it('sends note-on and note-off bytes on channel 1 (index 0)', () => {
    const out = fakeOutput();
    sendNoteOn(out, 0, 60, 100);
    sendNoteOff(out, 0, 60);
    expect(out.sent.map((s) => s.data)).toEqual([[0x90, 60, 100], [0x80, 60, 0]]);
  });

  it('sends on channel 16 (index 15)', () => {
    const out = fakeOutput();
    sendNoteOn(out, 15, 48, 90);
    sendNoteOff(out, 15, 48);
    expect(out.sent.map((s) => s.data)).toEqual([[0x9f, 48, 90], [0x8f, 48, 0]]);
  });

  it('clamps channel, note and velocity', () => {
    const out = fakeOutput();
    sendNoteOn(out, 99, 200, 500);
    sendNoteOn(out, -3, -1, -1);
    expect(out.sent.map((s) => s.data)).toEqual([[0x9f, 127, 127], [0x90, 0, 0]]);
  });

  it('passes the timestamp through', () => {
    const out = fakeOutput();
    sendNoteOn(out, 0, 60, 100, 1234.5);
    sendNoteOff(out, 0, 60, 2000);
    sendNoteOn(out, 0, 61, 100);
    expect(out.sent.map((s) => s.at)).toEqual([1234.5, 2000, undefined]);
  });

  it('allNotesOff sends CC123 then a note-off for every note', () => {
    const out = fakeOutput();
    allNotesOff(out, 2);
    expect(out.sent[0]?.data).toEqual([0xb2, 123, 0]);
    expect(out.sent).toHaveLength(129);
    expect(out.sent[1]?.data).toEqual([0x82, 0, 0]);
    expect(out.sent[128]?.data).toEqual([0x82, 127, 0]);
  });
});

describe('onNote', () => {
  it('reports note-on and note-off from every input', () => {
    const a = fakeInput('a');
    const b = fakeInput('b');
    const cb = vi.fn();
    onNote(fakeAccess([], [a, b]), cb);
    emit(a, [0x90, 60, 100]);
    emit(b, [0x81, 62, 64]);
    expect(cb.mock.calls).toEqual([
      [{ on: true, note: 60, vel: 100 }],
      [{ on: false, note: 62, vel: 64 }],
    ]);
  });

  it('treats note-on with velocity 0 as note-off', () => {
    const a = fakeInput();
    const cb = vi.fn();
    onNote(fakeAccess([], [a]), cb);
    emit(a, [0x9f, 60, 0]);
    expect(cb).toHaveBeenCalledWith({ on: false, note: 60, vel: 0 });
  });

  it('ignores other messages and empty data', () => {
    const a = fakeInput();
    const cb = vi.fn();
    onNote(fakeAccess([], [a]), cb);
    emit(a, [0xb0, 1, 64]);
    emit(a, [0xf8]);
    emit(a, [0xe0, 0, 64]);
    a.onmidimessage?.({ data: null });
    expect(cb).not.toHaveBeenCalled();
  });

  it('stops reporting after unsubscribe', () => {
    const a = fakeInput();
    const cb = vi.fn();
    const off = onNote(fakeAccess([], [a]), cb);
    off();
    emit(a, [0x90, 60, 100]);
    expect(cb).not.toHaveBeenCalled();
  });
});

describe('onPortsChanged', () => {
  it('fires on statechange and stops after unsubscribe', () => {
    const access = fakeAccess([], []);
    const cb = vi.fn();
    const off = onPortsChanged(access, cb);
    access.onstatechange?.({});
    expect(cb).toHaveBeenCalledTimes(1);
    off();
    expect(access.onstatechange).toBeNull();
  });
});
