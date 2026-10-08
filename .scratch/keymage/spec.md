# MicroFreak Keymage: implementation spec

Read `/CONTEXT.md` first, then issues 04-07 and 09 in `.scratch/keymage/issues/`. Theory facts are in `docs/research/`. Issue 09 (hardware test) overrides the older research text: Pentatonic is minor pentatonic, snapping always goes down, MIDI out from the hardware is pre-quantization, Blues is unverified.

Foundation already in place (do not rewrite): `src/theory/types.ts`, `src/theory/scales.ts` (`SCALES`, `snapPitchClass`, `snapMidi`, `isSnapped`, `scalePitchClasses`), Vite/Vitest/TS config.

## Gate for every task

`npm run typecheck && npm test && npm run build` pass. New logic has Vitest tests in `tests/unit/`. UI work has a Playwright spec in `tests/e2e/` against the built `dist/index.html` over `file://`. tonal was dropped (its npm package has missing entry files); theory is hand-rolled. Only `src/ui/` imports preact (`@preact/signals` is allowed in `src/state/`). No network requests. System fonts only.

## Decisions made while writing this spec

- MIDI out sends the **snapped** notes (what the Built-in voice plays), so the hardware's own Quantization is a no-op and both sounds match.
- The Keyboard view is MIDI 48-72 (C3-C5). Chords play in root position with the root in 48-59.
- Tempo 60-160 BPM, 4/4, loop on by default. `ChordLength` is in beats (1, 2, 4, 8, 16).
- Blues uses the standard set 0 3 5 6 7 10 and shows a "not verified on hardware" note.

## Module contracts

### `src/theory/` (framework-free; only place tonal is imported)

- `chords.ts`
  - `degreeChord(scale: ScaleId, root: PitchClass, degree: number, type: ChordType): Midi[]` — root position, ascending, 3-4 notes, lowest note in 48-59. Triad = steps 1-3-5, seventh = 1-3-5-7, sus2 = 1-2-5, sus4 = 1-4-5 (scale steps). Only for `hasDegrees` scales; throws otherwise.
  - `resolveChord(source: SlotSource, scale, root): Chord` — degree sources call `degreeChord`; free sources keep `requested` and set `midi` to the snapped notes (deduplicated, ascending, max 4).
  - `numeral(scale, degree, type): string` — "I", "ii", "vii°", "V7"... (case = quality).
  - `chordName(chord: Chord, scale, root): string` — theory-correct name using Note names ("Bb", "Dm7"). Uses tonal.
- `names.ts`
  - `noteName(scale, root, pc): string` — theory-correct spelling for the Scale and Root, then the MicroFreak sharp name in brackets when they differ: `"Bb (A#)"`. Sharp-only names for Off/Blues/Pentatonic and for roots that spell naturally with sharps.
  - `sharpName(pc): string`.
- `generator.ts`
  - `generate(opts: { scale; root; length: 4 | 8; ending: 'finished' | 'loops'; type: 'triad' | 'seventh'; chordLength: ChordLength; rng?: () => number }): ProgressionSlot[]` — rules from issue 05; each slot has `fn` and `reason`. Throws for scales without degrees. `rng` is injectable for tests.
- `presets.ts`
  - `PRESETS: Preset[]` — the 14 progression presets from issue 06, with `{ id, name, scale, degrees: {degree, type, length, fn, reason}[], caption }`.
  - `presetToSlots(preset): ProgressionSlot[]`.
  - `rederiveForScale(slots, newScale): ProgressionSlot[]` — degree slots stay as degrees for 7-note scales; for Pentatonic/Blues/Off it freezes each slot to a `free` source at the old scale's notes (needs old scale and root: signature `(slots, oldScale, root, newScale)`).
- `functions.ts`: `chordFunction(scale, degree): ChordFunction` and `FUNCTION_LABEL`.
- Last phase: `recognize.ts` — `recognize(midi: Midi[], scale, root): string | null`.

### `src/audio/`

- `voice.ts`: `createVoice(ctx: AudioContext): Voice` where `Voice = { noteOn(midi, when): void; noteOff(midi, when): void; allOff(): void; setVolume(v: number): void }`. Saw into a low-pass, soft attack, ~300 ms release, polyphonic.
- `scheduler.ts`: `createScheduler(deps: { now(): number /* seconds, audio clock */; setTimer: (fn, ms) => handle; clearTimer; }): Scheduler`.
  `Scheduler = { start(events: PlayEvent[], opts: { bpm; loop; totalBeats }, sinks: Sink[]): void; stop(): void; onBeat(cb: (beat: number) => void): () => void }`.
  `PlayEvent = { beat: number; lengthBeats: number; midi: Midi[] }`. `Sink = { noteOn(midi, whenSec): void; noteOff(midi, whenSec): void }`. Look-ahead loop (25 ms tick, 100 ms window). All timing is testable with a fake clock.
- `sinks.ts`: `voiceSink(voice): Sink` and `midiSink(getPort, channel, nowOffsetMs): Sink`. The MIDI sink converts audio-clock seconds to `performance.now()` milliseconds.

### `src/midi/index.ts`

`requestAccess(): Promise<MidiAccessLike>`, `listPorts(access): { id; name }[]`, `sendNoteOn(port, ch, note, vel, atMs?)`, `sendNoteOff(...)`, `allNotesOff(port, ch)`, `onNote(access, cb: (e: { on: boolean; note: Midi; vel: number }) => void): () => void`, `onPortsChanged(access, cb): () => void`. No sysex. Channel is 0-based internally, shown as 1.

### `src/state/`

- `store.ts` (`@preact/signals`): `scale`, `root`, `chordType`, `progression` (`ProgressionSlot[]`), `selectedSlot` (`number | null`), `defaultLength` (`ChordLength`), `heldKeys` (`Midi[]`, Free chord being built), `tempo`, `loop`, `playing`, `playheadBeat`, `output` (`OutputKind`), `midiPortId`, `volume`, `lessonTopic`, `genLength`, `genEnding`, `genType`.
- Derived: `currentChord` (the selected slot's, or the held keys' or the degree preview's `Chord`), `slotChords` (resolved chords for the whole progression), `totalBeats`.
- Actions: `setScale(id)` (re-derives or freezes the progression via `rederiveForScale`), `setRoot`, `toggleKey(midi)` (Free chord, max 4), `chooseDegree(degree)`, `addSlot`, `removeSlot`, `setSlotLength`, `loadPreset(id)`, `generateProgression()`.
- `hash.ts`: `encodeState()`, `decodeState(hash)`, `startHashSync()`. The URL hash keeps scale, root, chord type, progression, tempo, loop, length, output. Round-trips; invalid input falls back to defaults.

### `src/ui/`

App shell (Variant B, see issue 07 and `prototypes/layout-prototype.html` on branch `prototype/layout`): fixed ~300 px left sidebar, main column with chord name, Keyboard view, progression strip, Clip view, Lesson panel. Hover **and focus** drive the Lesson panel topic. Colors, spacing and sizes are CSS variables from `src/styles/tokens.css`.

## Tasks and parallel groups

| # | Task | Depends on | Wave |
|---|------|-----------|------|
| T1 | Foundation (done) | - | 0 |
| T2 | theory: chords, names, functions | T1 | 1 |
| T3 | theory: generator, presets | T1, T2 interfaces | 1 (after T2 `degreeChord` exists; may stub) |
| T4 | audio: voice, scheduler, sinks | T1 | 1 |
| T5 | midi module | T1 | 1 |
| T6 | state: store, hash | T2, T3 | 2 |
| T7 | ui: Keyboard view + Clip view | T6 | 3 |
| T8 | ui: sidebar, strip, Lesson panel, App shell, tokens | T6 | 3 |
| T9 | integration + Playwright e2e | T7, T8, T4, T5 | 4 |
| T10 | MIDI in + Chord recognition (nice-to-have) | T9 | 5 |

Verification per task is the gate above plus the task's own tests.
