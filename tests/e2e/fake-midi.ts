/** JS source for Playwright `page.addInitScript`. Installs a fake Web MIDI API. */
export const FAKE_MIDI_INIT_SCRIPT = `
(() => {
  window.__midiSent = [];
  const output = {
    id: 'fake-out',
    name: 'Fake MicroFreak',
    type: 'output',
    send(bytes, at) {
      window.__midiSent.push({ bytes: Array.from(bytes), at });
    },
  };
  const input = { id: 'fake-in', name: 'Fake Keyboard', type: 'input', onmidimessage: null };
  const access = {
    outputs: new Map([[output.id, output]]),
    inputs: new Map([[input.id, input]]),
    onstatechange: null,
    sysexEnabled: false,
  };
  window.__midiEmit = (bytes) => {
    if (input.onmidimessage) input.onmidimessage({ data: Uint8Array.from(bytes) });
  };
  navigator.requestMIDIAccess = () => Promise.resolve(access);
})();
`;
