import { heldInput, foldToKeyboard } from '../state/midiIn';
import { currentChord, heldKeys, lessonTopic, root, scale, toggleKey } from '../state/store';
import { noteName } from '../theory/names';
import { isSnapped, snapMidi } from '../theory/scales';
import type { Midi } from '../theory/types';
import '../styles/keyboard.css';

const FIRST = 48;
const LAST = 72;
const WHITE_W = 40;
const WHITE_H = 160;
const BLACK_W = 24;
const BLACK_H = 100;
const BLACK_PCS = new Set([1, 3, 6, 8, 10]);

const isBlack = (midi: Midi) => BLACK_PCS.has(midi % 12);

/** Splits "Bb (A#)" into its theory name and the MicroFreak's sharp name. */
function splitName(name: string): { main: string; alt?: string } {
  const m = /^(\S+) \((\S+)\)$/.exec(name);
  return m ? { main: m[1]!, alt: m[2]! } : { main: name };
}

const MIDIS: Midi[] = Array.from({ length: LAST - FIRST + 1 }, (_, i) => FIRST + i);
const WHITES = MIDIS.filter((m) => !isBlack(m));
const WIDTH = WHITES.length * WHITE_W;

function keyX(midi: Midi): number {
  if (!isBlack(midi)) return WHITES.indexOf(midi) * WHITE_W;
  return (WHITES.indexOf(midi - 1) + 1) * WHITE_W - BLACK_W / 2;
}

export function Keyboard() {
  const sc = scale.value;
  const rt = root.value;
  const chord = currentChord.value;
  const held = heldKeys.value;
  const midiIn = new Set(heldInput.value.map(foldToKeyboard));
  const chordRoot = chord?.midi[0];

  const renderKey = (midi: Midi) => {
    const black = isBlack(midi);
    const snapped = isSnapped(sc, rt, midi);
    const played = snapMidi(sc, rt, midi);
    const own = noteName(sc, rt, midi % 12);
    const playedName = noteName(sc, rt, played % 12);
    const inChord = chord?.midi.includes(midi) ?? false;
    const isChordRoot = inChord && midi === chordRoot;
    const scaleRoot = midi % 12 === rt;
    const pressed = held.includes(midi);

    const state = [
      snapped && 'snapped',
      inChord && 'chord',
      isChordRoot && 'root',
      scaleRoot && 'scale-root',
      pressed && 'pressed',
      midiIn.has(midi) && 'midi-in',
    ]
      .filter(Boolean)
      .join(' ');

    const title = snapped
      ? `Requested ${own}, plays ${playedName} (Quantization snaps it down)`
      : own;
    const x = keyX(midi);
    const w = black ? BLACK_W : WHITE_W;
    const h = black ? BLACK_H : WHITE_H;
    const cx = x + w / 2;
    const toggle = () => toggleKey(midi);

    return (
      <g
        key={midi}
        class={`key ${black ? 'black' : 'white'}`}
        role="button"
        tabindex={0}
        aria-label={snapped ? `${own}, plays ${playedName}` : own}
        aria-pressed={pressed}
        data-testid={`key-${midi}`}
        data-state={state}
        onClick={toggle}
        onKeyDown={(e: KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <title>{title}</title>
        <rect class="key-body" x={x} y={0} width={w} height={h} rx={3} />
        {snapped ? (
          <>
            <text class="key-label snap" x={cx} y={black ? h - 28 : h - 34}>
              {`→ ${splitName(playedName).main}`}
            </text>
            <text class="key-hint" x={cx} y={black ? h - 14 : h - 18}>
              {`(${own})`}
            </text>
          </>
        ) : (
          <>
            <text class="key-label" x={cx} y={black ? h - 26 : h - 28}>
              {splitName(own).main}
            </text>
            {splitName(own).alt && (
              <text class="key-hint" x={cx} y={black ? h - 14 : h - 16}>
                {`(${splitName(own).alt})`}
              </text>
            )}
          </>
        )}
        {scaleRoot && (
          <rect class="key-tick" data-testid={`tick-${midi}`} x={cx - 8} y={h - 8} width={16} height={4} rx={1} />
        )}
      </g>
    );
  };

  return (
    <svg
      class="keyboard"
      data-testid="keyboard"
      viewBox={`0 0 ${WIDTH} ${WHITE_H}`}
      role="group"
      aria-label="MicroFreak keyboard, C to C"
      onMouseEnter={() => (lessonTopic.value = 'keyboard')}
      onFocusIn={() => (lessonTopic.value = 'keyboard')}
    >
      {MIDIS.filter((m) => !isBlack(m)).map(renderKey)}
      {MIDIS.filter(isBlack).map(renderKey)}
    </svg>
  );
}
