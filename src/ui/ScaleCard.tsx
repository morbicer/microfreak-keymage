import { root, scale } from '../state/store';
import { SCALES, scalePitchClasses } from '../theory/scales';
import { noteName } from '../theory/names';

/** A narrow card listing the notes of the current Scale, starting from the Root. */
export function ScaleCard() {
  const s = scale.value;
  const r = root.value;
  const def = SCALES[s];
  const pcs = scalePitchClasses(s, r);
  return (
    <div class="scale-card" data-testid="scale-card">
      <span class="scale-card-title">
        {noteName(s, r, r)} {def.label}
      </span>
      <ol class="scale-card-notes">
        {pcs.map((pc, i) => (
          <li key={pc} class={i === 0 ? 'is-root' : undefined} data-testid={`scale-note-${i}`}>
            {noteName(s, r, pc)}
          </li>
        ))}
      </ol>
    </div>
  );
}
