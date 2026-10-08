import { computed } from '@preact/signals';
import {
  chordType,
  hasDegrees,
  heldKeys,
  previewDegree,
  progression,
  activeSlot,
} from '../state/store';
import type { SlotSource } from '../theory/types';

/** The source behind store.currentChord (same priority order). */
export const currentSource = computed<SlotSource | null>(() => {
  const sel = activeSlot.value;
  const slot = sel !== null ? progression.value[sel] : undefined;
  if (slot) return slot.source;
  if (heldKeys.value.length > 0) return { kind: 'free', midi: heldKeys.value };
  const d = previewDegree.value;
  if (d !== null && hasDegrees.value) return { kind: 'degree', degree: d, type: chordType.value };
  return null;
});
