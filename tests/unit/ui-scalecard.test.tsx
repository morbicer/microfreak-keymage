// @vitest-environment jsdom
import { render } from 'preact';
import { beforeEach, expect, it } from 'vitest';
import { ScaleCard } from '../../src/ui/ScaleCard';
import * as s from '../../src/state/store';

const notes = (el: Element) => [...el.querySelectorAll('li')].map((li) => li.textContent);

beforeEach(() => {
  s.scale.value = 'major';
  s.root.value = 0;
});

it('lists the Scale notes from the Root with theory spelling', () => {
  const el = document.createElement('div');
  s.scale.value = 'major';
  s.root.value = 5;
  render(<ScaleCard />, el);
  expect(notes(el)).toEqual(['F', 'G', 'A', 'Bb (A#)', 'C', 'D', 'E']);
  expect(el.querySelector('.is-root')?.textContent).toBe('F');
});

it('shows 5 notes for Pentatonic and all 12 for Off', () => {
  const el = document.createElement('div');
  s.scale.value = 'pentatonic';
  render(<ScaleCard />, el);
  expect(notes(el)).toEqual(['C', 'D#', 'F', 'G', 'A#']);
  s.scale.value = 'off';
  render(<ScaleCard />, el);
  expect(notes(el)).toHaveLength(12);
});
