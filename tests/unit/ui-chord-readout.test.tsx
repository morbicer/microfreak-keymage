// @vitest-environment jsdom
import { render } from 'preact';
import { act } from 'preact/test-utils';
import { beforeEach, expect, it } from 'vitest';
import { ChordReadout } from '../../src/ui/ChordReadout';
import { Keyboard } from '../../src/ui/Keyboard';
import { heldInput } from '../../src/state/midiIn';
import { heldKeys, root, scale } from '../../src/state/store';

let host: HTMLElement;
const text = () => host.querySelector('[data-testid="chord-readout"]')!.textContent;

beforeEach(() => {
  scale.value = 'major';
  root.value = 0;
  heldKeys.value = [];
  heldInput.value = [];
  host = document.createElement('div');
  document.body.replaceChildren(host);
  render(
    <>
      <ChordReadout />
      <Keyboard />
    </>,
    host,
  );
});

it('names MIDI in notes first, then clicked keys', () => {
  act(() => {
    heldKeys.value = [60, 63, 67];
  });
  expect(text()).toBe('Cm');
  act(() => {
    heldInput.value = [60, 64, 67];
  });
  expect(text()).toBe('C');
});

it('lights MIDI in notes on the keyboard, folded into range', () => {
  act(() => {
    heldInput.value = [36, 88];
  });
  expect(host.querySelector('[data-testid="key-48"]')!.getAttribute('data-state')).toContain('midi-in');
  expect(host.querySelector('[data-testid="key-64"]')!.getAttribute('data-state')).toContain('midi-in');
});
