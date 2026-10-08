import { computed } from '@preact/signals';
import {
  addSlot,
  currentChord,
  heldKeys,
  loadedPresetId,
  previewDegree,
  progression,
  removeSlot,
  root,
  scale,
  scaleChangeNote,
  activeSlot,
  selectSlot,
  slotChords,
} from '../state/store';
import { chordName, numeral } from '../theory/chords';
import { PRESETS } from '../theory/presets';
import { currentSource } from './current';
import { Topic } from './Topic';

export function ChordHeader() {
  const chord = currentChord.value;
  const src = currentSource.value;
  return (
    <Topic topic="chord" class="block">
      <div class="chord-header" data-testid="chord-header">
        {chord ? (
          <>
            <span class="name">{chordName(chord, scale.value, root.value)}</span>
            {src?.kind === 'degree' && <span class="numeral">{numeral(scale.value, src.degree, src.type)}</span>}
          </>
        ) : (
          <span class="hint">Pick a step or click keys to see a chord.</span>
        )}
      </div>
    </Topic>
  );
}

const canAdd = computed(() => heldKeys.value.length >= 2 || previewDegree.value !== null);

export function Strip() {
  const slots = progression.value;
  const chords = slotChords.value;
  const preset = PRESETS.find((p) => p.id === loadedPresetId.value);
  return (
    <Topic topic="progression" class="block">
      <div class="strip" role="list" aria-label="Progression">
        {slots.length === 0 && <span class="strip-empty">Empty. Pick a chord, then press add.</span>}
        {slots.map((slot, i) => {
          const chord = chords[i];
          const selected = activeSlot.value === i;
          const label = chord ? chordName(chord, scale.value, root.value) : '?';
          return (
            <div class="slot-wrap" role="listitem" key={i}>
              {i > 0 && slot.reason && <span class="reason">{slot.reason}</span>}
              <div class={`slot${selected ? ' selected' : ''}`}>
                <span class={`bar ${slot.fn ?? ''}`} aria-hidden="true" />
                <button
                  type="button"
                  class="pick"
                  data-testid={`strip-slot-${i}`}
                  aria-pressed={selected}
                  onClick={() => selectSlot(i)}
                >
                  <span class="nm">{label}</span>
                  {slot.source.kind === 'degree' && (
                    <span class="num">{numeral(scale.value, slot.source.degree, slot.source.type)}</span>
                  )}
                </button>
                <button
                  type="button"
                  class="remove"
                  data-testid={`slot-remove-${i}`}
                  aria-label={`Remove chord ${i + 1}`}
                  onClick={() => removeSlot(i)}
                >
                  ×
                </button>
              </div>
            </div>
          );
        })}
        <button
          type="button"
          data-testid="add-slot"
          aria-label="Add chord to progression"
          disabled={!canAdd.value}
          onClick={() => addSlot()}
        >
          ＋
        </button>
      </div>
      {preset && <p class="note">{preset.caption}</p>}
      {scaleChangeNote.value && <p class="note">{scaleChangeNote.value}</p>}
    </Topic>
  );
}
