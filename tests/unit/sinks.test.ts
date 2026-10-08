import { describe, expect, it, vi } from 'vitest';
import { midiSink, voiceSink } from '../../src/audio/sinks';

describe('voiceSink', () => {
  it('forwards noteOn/noteOff with audio-clock seconds', () => {
    const voice = { noteOn: vi.fn(), noteOff: vi.fn(), allOff: vi.fn(), setVolume: vi.fn() };
    const s = voiceSink(voice);
    s.noteOn(60, 1.5);
    s.noteOff(60, 2.5);
    expect(voice.noteOn).toHaveBeenCalledWith(60, 1.5);
    expect(voice.noteOff).toHaveBeenCalledWith(60, 2.5);
  });
});

describe('midiSink', () => {
  it('sends note on/off bytes on the channel with performance.now() ms timestamps', () => {
    const send = vi.fn();
    const s = midiSink(() => ({ send }), 2, 10_000);
    s.noteOn(60, 1.5);
    s.noteOff(60, 2.25);
    expect(send).toHaveBeenNthCalledWith(1, [0x92, 60, 100], 11_500);
    expect(send).toHaveBeenNthCalledWith(2, [0x82, 60, 0], 12_250);
  });

  it('accepts an offset function, re-read on every send', () => {
    const send = vi.fn();
    let off = 100;
    const s = midiSink(() => ({ send }), 0, () => off);
    s.noteOn(48, 1);
    off = 200;
    s.noteOn(48, 1);
    expect(send.mock.calls.map((c) => c[1])).toEqual([1100, 1200]);
  });

  it('does nothing without a port', () => {
    const s = midiSink(() => null, 0, 0);
    expect(() => s.noteOn(60, 1)).not.toThrow();
  });
});
