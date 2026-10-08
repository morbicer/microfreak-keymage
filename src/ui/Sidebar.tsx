import {
  chooseDegree,
  chordType,
  currentChord,
  defaultLength,
  generateProgression,
  genEnding,
  genLength,
  genType,
  hasDegrees,
  loadedPresetId,
  loadPreset,
  loop,
  midiPortId,
  output,
  playing,
  previewDegree,
  progression,
  root,
  scale,
  selectedSlot,
  setRoot,
  setScale,
  setSlotLength,
  tempo,
  volume,
} from '../state/store';
import { connectMidi, midiPorts, midiStatus, previewChord, startPlayback, stopPlayback } from '../state/player';
import { numeral } from '../theory/chords';
import { noteName, sharpName } from '../theory/names';
import { PRESETS } from '../theory/presets';
import { SCALE_IDS, SCALES, scalePitchClasses } from '../theory/scales';
import type { ChordLength, ChordType, OutputKind, ScaleId } from '../theory/types';
import { Topic } from './Topic';

const CHORD_TYPES: { id: ChordType; label: string }[] = [
  { id: 'triad', label: 'Triad' },
  { id: 'seventh', label: '7th' },
  { id: 'sus2', label: 'sus2' },
  { id: 'sus4', label: 'sus4' },
];

const LENGTHS: { value: ChordLength; label: string }[] = [
  { value: 1, label: '1 beat' },
  { value: 2, label: '2 beats' },
  { value: 4, label: '1 bar' },
  { value: 8, label: '2 bars' },
  { value: 16, label: '4 bars' },
];

const MIDI_STATUS_TEXT: Record<string, string> = {
  idle: 'Not connected.',
  unsupported: 'This browser has no Web MIDI. Try Chrome.',
  denied: 'MIDI access was blocked. Allow it in the browser and press Connect again.',
  ready: 'Connected.',
};

function Scales() {
  return (
    <section class="section" aria-labelledby="h-scale">
      <h2 id="h-scale">Scale &amp; Root</h2>
      <div class="row">
        <Topic topic="scale" class="field">
          <label class="field" for="scale-select">Scale</label>
          <select
            id="scale-select"
            data-testid="scale-select"
            value={scale.value}
            onChange={(e) => setScale(e.currentTarget.value as ScaleId)}
          >
            {SCALE_IDS.map((id) => (
              <option key={id} value={id}>{SCALES[id].label}</option>
            ))}
          </select>
        </Topic>
        <Topic topic="root" class="field">
          <label class="field" for="root-select">Root</label>
          <select
            id="root-select"
            data-testid="root-select"
            value={root.value}
            onChange={(e) => setRoot(Number(e.currentTarget.value))}
          >
            {Array.from({ length: 12 }, (_, pc) => (
              <option key={pc} value={pc}>{sharpName(pc)}</option>
            ))}
          </select>
        </Topic>
      </div>
    </section>
  );
}

/** Sounds the chord on the Keyboard view, so the Chord buttons can be heard as well as seen. */
function previewCurrent(): void {
  const chord = currentChord.value;
  if (chord) previewChord(chord.midi);
}

function ChordSection() {
  const degrees = hasDegrees.value;
  return (
    <Topic topic="chord">
      <section class="section" aria-labelledby="h-chord">
        <h2 id="h-chord">Chord</h2>
        {degrees ? (
          <>
            <div class="degrees" role="group" aria-label="Scale step">
              {scalePitchClasses(scale.value, root.value).map((pc, d) => (
                <button
                  key={d}
                  type="button"
                  data-testid={`degree-${d}`}
                  aria-pressed={previewDegree.value === d}
                  onClick={() => {
                    chooseDegree(d);
                    previewCurrent();
                  }}
                >
                  <span>{numeral(scale.value, d, chordType.value)}</span>
                  <small>{noteName(scale.value, root.value, pc)}</small>
                </button>
              ))}
            </div>
            <div class="seg" role="group" aria-label="Chord type">
              {CHORD_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  data-testid={`chord-type-${t.id}`}
                  aria-pressed={chordType.value === t.id}
                  onClick={() => {
                    chordType.value = t.id;
                    if (previewDegree.value !== null) previewCurrent();
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p class="note">
            {SCALES[scale.value].label} has no steps to stack chords on. Build Free chords by clicking keys on the
            keyboard instead.
          </p>
        )}
      </section>
    </Topic>
  );
}

function ProgressionSection() {
  const sel = selectedSlot.value;
  const slot = sel !== null ? progression.value[sel] : undefined;
  const degrees = hasDegrees.value;
  return (
    <section class="section" aria-labelledby="h-prog">
      <h2 id="h-prog">Progression</h2>
      <Topic topic="progression" class="field">
        <label for="preset-select">Preset</label>
        <select
          id="preset-select"
          data-testid="preset-select"
          value={loadedPresetId.value ?? ''}
          onChange={(e) => e.currentTarget.value && loadPreset(e.currentTarget.value)}
        >
          <option value="">Pick a preset...</option>
          {PRESETS.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
      </Topic>
      <Topic topic="generator">
        <div class="row">
          <div class="field">
            <label for="gen-length">Length</label>
            <select
              id="gen-length"
              data-testid="gen-length"
              value={genLength.value}
              onChange={(e) => (genLength.value = Number(e.currentTarget.value) as 4 | 8)}
            >
              <option value={4}>4 chords</option>
              <option value={8}>8 chords</option>
            </select>
          </div>
          <div class="field">
            <label for="gen-ending">Ending</label>
            <select
              id="gen-ending"
              data-testid="gen-ending"
              value={genEnding.value}
              onChange={(e) => (genEnding.value = e.currentTarget.value as 'finished' | 'loops')}
            >
              <option value="finished">Finished</option>
              <option value="loops">Loops</option>
            </select>
          </div>
          <div class="field">
            <label for="gen-type">Chord type</label>
            <select
              id="gen-type"
              data-testid="gen-type"
              value={genType.value}
              onChange={(e) => (genType.value = e.currentTarget.value as 'triad' | 'seventh')}
            >
              <option value="triad">Triad</option>
              <option value="seventh">7th</option>
            </select>
          </div>
        </div>
        <button type="button" data-testid="generate" disabled={!degrees} onClick={() => generateProgression()}>
          Generate
        </button>
        {!degrees && (
          <p class="note">The generator needs a 7-note scale. Pick Major, Minor, Harmonic minor, Dorian or Mixolydian.</p>
        )}
      </Topic>
      <Topic topic="play">
        <div class="row">
          <div class="field">
            <label for="slot-length">Selected chord length</label>
            <select
              id="slot-length"
              data-testid="slot-length"
              disabled={!slot}
              value={slot?.length ?? ''}
              onChange={(e) => sel !== null && setSlotLength(sel, Number(e.currentTarget.value) as ChordLength)}
            >
              {!slot && <option value="">None selected</option>}
              {LENGTHS.map((l) => (
                <option key={l.value} value={l.value}>{l.label}</option>
              ))}
            </select>
          </div>
          <div class="field">
            <label for="default-length">Default length</label>
            <select
              id="default-length"
              data-testid="default-length"
              value={defaultLength.value}
              onChange={(e) => (defaultLength.value = Number(e.currentTarget.value) as ChordLength)}
            >
              {LENGTHS.map((l) => (
                <option key={l.value} value={l.value}>{l.label}</option>
              ))}
            </select>
          </div>
        </div>
      </Topic>
    </section>
  );
}

function PlaySection() {
  return (
    <Topic topic="play">
      <section class="section" aria-labelledby="h-play">
        <h2 id="h-play">Play</h2>
        <button
          type="button"
          class="play-btn"
          data-testid="play"
          onClick={() => (playing.value ? stopPlayback() : startPlayback())}
        >
          {playing.value ? 'Stop' : 'Play'}
        </button>
        <div class="field">
          <label for="tempo">Tempo: {tempo.value} BPM</label>
          <input
            id="tempo"
            data-testid="tempo"
            type="range"
            min={60}
            max={160}
            step={1}
            value={tempo.value}
            onInput={(e) => (tempo.value = Number(e.currentTarget.value))}
          />
        </div>
        <label class="field inline" for="loop">
          <input
            id="loop"
            data-testid="loop"
            type="checkbox"
            checked={loop.value}
            onChange={(e) => (loop.value = e.currentTarget.checked)}
          />
          Loop
        </label>
      </section>
    </Topic>
  );
}

function OutputSection() {
  const midi = output.value === 'midi';
  const ports = midiPorts.value;
  return (
    <Topic topic="output">
      <section class="section" aria-labelledby="h-output">
        <h2 id="h-output">Output</h2>
        <div class="field">
          <label for="output-select">Sound</label>
          <select
            id="output-select"
            data-testid="output-select"
            value={output.value}
            onChange={(e) => (output.value = e.currentTarget.value as OutputKind)}
          >
            <option value="builtin">Built-in voice</option>
            <option value="midi">MIDI out</option>
          </select>
        </div>
        {midi && (
          <>
            <div class="row">
              <div class="field">
                <label for="midi-port">MIDI port</label>
                <select
                  id="midi-port"
                  data-testid="midi-port"
                  value={midiPortId.value ?? ''}
                  onChange={(e) => (midiPortId.value = e.currentTarget.value || null)}
                >
                  <option value="">{ports.length ? 'Pick a port...' : 'No ports found'}</option>
                  {ports.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
              <button type="button" data-testid="midi-connect" onClick={() => void connectMidi()}>
                Connect
              </button>
            </div>
            <p class="note" role="status">{MIDI_STATUS_TEXT[midiStatus.value]}</p>
            <p class="note warn">
              Set your MicroFreak to Scale {SCALES[scale.value].label} / Root {sharpName(root.value)}.
            </p>
            <p class="note">MIDI out sends the quantized notes, the same ones the built-in voice plays.</p>
          </>
        )}
        <div class="field">
          <label for="volume">Volume</label>
          <input
            id="volume"
            data-testid="volume"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume.value}
            onInput={(e) => (volume.value = Number(e.currentTarget.value))}
          />
        </div>
      </section>
    </Topic>
  );
}

export function Sidebar() {
  return (
    <aside class="sidebar" aria-label="Controls">
      <h1><b>MicroFreak</b> Keymage</h1>
      <Scales />
      <ChordSection />
      <ProgressionSection />
      <PlaySection />
      <OutputSection />
    </aside>
  );
}
