# Tech stack, file structure and test strategy

Type: grilling
Status: resolved
Blocked by: 03

## Question

What stack, folder layout, CSS-variable theming approach and test strategy will the app use? Which libraries from the research do we adopt? What should the Built-in voice sound like (waveform, envelope)? The test strategy has to give implementing agents verification criteria they can check by themselves (unit tests for theory logic, a headless browser for UI).

## Answer

Decided with the user in a grilling session. It builds on [docs/research/libraries.md](../../../docs/research/libraries.md).

- **Stack:** Preact 11 + TypeScript + Vite + vite-plugin-singlefile (`base: './'`), tonal (named-module imports), and raw Web Audio and raw Web MIDI (the MIDI request is triggered by a button, with no sysex). `npm run build` produces one `dist/index.html`. Use system fonts only and leave `public/` empty.
- **Layout:**
  - `src/theory/`: scales, quantization (`snapPitchClass`), Degree chords, generator, presets. Framework-free, and the only code that imports tonal.
  - `src/audio/`: Built-in voice plus a look-ahead scheduler with an injected clock. The same scheduler stamps MIDI sends.
  - `src/midi/`: `listPorts`, `sendNoteOn/Off(port, ch, note, vel, atMs)`, `onNote`, `onPortsChanged`.
  - `src/state/`: a `@preact/signals` store plus URL-hash sync.
  - `src/ui/`: components. This is the only folder that imports Preact.
  - `src/styles/tokens.css`: every color, spacing, radius and font size as a CSS variable, plus per-component CSS files.
  - `tests/unit` (Vitest) and `tests/e2e` (Playwright against the built `file://` file). Vitest excludes `tests/e2e`.
- **Verification standard:** every task passes `npm run typecheck && npm test && npm run build`. Each task adds its own unit tests or Playwright spec. The built file must load from `file://` with zero network requests. CI uses a fake MIDI object injected with `addInitScript`, and real hardware gets a manual checklist.
- **Built-in voice:** a saw through a low-pass filter, soft attack, about 300 ms release, polyphonic, with a volume slider. The AudioContext is created or resumed on the first user gesture.
- **Octave and voicing:** the Keyboard view is MIDI 48–72 (C3–C5). Chords play in root position with the root in the lower octave (C3–B3), so every chord up to a vii7 fits. There are no inversions.
