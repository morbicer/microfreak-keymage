import { playheadBeat, playing, progression, selectedSlot, selectSlot, slotChords, lessonTopic, root, scale, totalBeats } from '../state/store';
import { chordName, numeral } from '../theory/chords';
import { isSnapped, snapMidi } from '../theory/scales';
import '../styles/clip.css';

const PX_PER_BEAT = 40;
const ROW_H = 12;
const LABEL_H = 24;
const MARGIN = 2;
const MIN_ROWS = 12;
const BLACK_PCS = new Set([1, 3, 6, 8, 10]);

export function Clip() {
  const sc = scale.value;
  const rt = root.value;
  const slots = progression.value;
  const chords = slotChords.value;
  const sel = selectedSlot.value;
  const beats = totalBeats.value;

  const topic = {
    onMouseEnter: () => (lessonTopic.value = 'clip'),
    onFocusIn: () => (lessonTopic.value = 'clip'),
  };

  if (slots.length === 0) {
    return (
      <div class="clip empty" data-testid="clip" {...topic}>
        <p class="clip-empty">Add a chord to the progression to see it here.</p>
      </div>
    );
  }

  const all = chords.flatMap((c) => c.midi);
  let lo = Math.min(...all) - MARGIN;
  let hi = Math.max(...all) + MARGIN;
  while (hi - lo + 1 < MIN_ROWS) {
    hi += 1;
    if (hi - lo + 1 < MIN_ROWS) lo -= 1;
  }
  const rows = hi - lo + 1;
  const width = beats * PX_PER_BEAT;
  const height = LABEL_H + rows * ROW_H;
  const rowY = (midi: number) => LABEL_H + (hi - midi) * ROW_H;

  let start = 0;
  const cells = slots.map((slot, i) => {
    const chord = chords[i]!;
    const x = start * PX_PER_BEAT;
    const w = slot.length * PX_PER_BEAT;
    start += slot.length;
    const label =
      slot.source.kind === 'degree' ? numeral(sc, slot.source.degree, slot.source.type) : chordName(chord, sc, rt);
    const snappedPlayed =
      slot.source.kind === 'free'
        ? new Set(slot.source.midi.filter((m) => isSnapped(sc, rt, m)).map((m) => snapMidi(sc, rt, m)))
        : new Set<number>();
    const fn = slot.fn ?? 'free';
    const select = () => selectSlot(i);
    return (
      <g key={i} class={`slot fn-${fn}${sel === i ? ' selected' : ''}${w < 60 ? ' tight' : ''}`}>
        <rect class="slot-bg" x={x} y={LABEL_H} width={w} height={rows * ROW_H} />
        <line class="slot-line" x1={x} x2={x} y1={0} y2={height} />
        <g
          class="slot-label"
          role="button"
          tabindex={0}
          aria-label={`Select chord ${i + 1}, ${label}`}
          aria-pressed={sel === i}
          data-testid={`clip-slot-${i}`}
          data-fn={fn}
          onClick={select}
          onKeyDown={(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              select();
            }
          }}
        >
          <rect x={x + 1} y={1} width={w - 2} height={LABEL_H - 4} rx={3} />
          <text x={x + 6} y={LABEL_H - 9}>{label}</text>
        </g>
        {chord.midi.map((m) => (
          <rect
            key={m}
            class={`note${snappedPlayed.has(m) ? ' snapped' : ''}`}
            data-testid={`clip-note-${i}-${m}`}
            data-snapped={snappedPlayed.has(m)}
            x={x + 1}
            y={rowY(m) + 1}
            width={w - 2}
            height={ROW_H - 2}
            rx={2}
          />
        ))}
      </g>
    );
  });

  const rowLines = Array.from({ length: rows }, (_, k) => {
    const midi = hi - k;
    return (
      <rect
        key={midi}
        class={BLACK_PCS.has(midi % 12) ? 'row dark' : 'row'}
        x={0}
        y={rowY(midi)}
        width={width}
        height={ROW_H}
      />
    );
  });

  return (
    <div class="clip" data-testid="clip" {...topic}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} role="group" aria-label="Progression clip">
        {rowLines}
        {cells}
        <line class="slot-line" x1={width} x2={width} y1={0} y2={height} />
        {playing.value && (
          <line
            class="playhead"
            data-testid="clip-playhead"
            x1={playheadBeat.value * PX_PER_BEAT}
            x2={playheadBeat.value * PX_PER_BEAT}
            y1={0}
            y2={height}
          />
        )}
      </svg>
    </div>
  );
}
