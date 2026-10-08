import { heldInput } from '../state/midiIn';
import { heldKeys, root, scale } from '../state/store';
import { recognize } from '../theory/recognize';

const TIP =
  'Names the keys held on your controller, or clicked on the keyboard. It shows what the controller sent, not what the MicroFreak will play.';

export function ChordReadout() {
  const fromMidi = heldInput.value.length > 0;
  const notes = fromMidi ? heldInput.value : heldKeys.value;
  const name = notes.length > 0 ? recognize(notes, scale.value, root.value) : null;
  return (
    <p class="chord-readout" data-testid="chord-readout" title={TIP}>
      {name ??
        (notes.length > 0
          ? 'No chord name for these notes'
          : 'Hold 2 to 4 keys on your controller, or click keys, to see their name.')}
    </p>
  );
}
