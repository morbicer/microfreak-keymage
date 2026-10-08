# npm libraries

Type: research
Status: resolved
Blocked by:

## Question

Which libraries and build tooling fit a Chrome-first teaching app that must also export as one self-contained HTML file?

- Theory: tonal (@tonaljs/*) and alternatives. Can they do scales, Degree chords, chord detection and enharmonic spelling? Bundle size?
- Audio: Tone.js vs raw Web Audio for a simple polyphonic Built-in voice with a transport and scheduling. Bundle size? Does it work fine from a `file://` page?
- MIDI: WebMidi.js vs the raw Web MIDI API. Any constraints on `file://` origins and permission prompts?
- Single-file build: vite-plugin-singlefile or alternatives. Do they inline everything (JS, CSS, SVG)?
- Framework: React vs Preact vs plain JS/web components for an app this size. What concrete benefit does each bring here?

Output goes to `docs/research/libraries.md`, with a recommendation per area and the reasons for it.

## Answer

Full findings are in [docs/research/libraries.md](../../../docs/research/libraries.md). These are recommendations, and ticket 04 decides.

- **Theory:** tonal 6.5 with per-module imports, about 8–11 KB gzip. It covers scales, spelling, Degree chords for all modes, and `Chord.detect`.
- **Audio:** raw Web Audio with a look-ahead scheduler. Tone.js adds about 62 KB gzip for nothing this app needs.
- **MIDI:** raw `requestMIDIAccess` behind a small wrapper. WebMidi.js isn't worth its 16 KB gzip.
- **Single file:** Vite + vite-plugin-singlefile 2.3.3. It inlines JS and CSS only, so SVG has to be generated in code or imported with `?raw`. Compatibility with Vite 8 is unconfirmed.
- **Framework:** Preact (4.6 KB gzip), with plain TS as the runner-up. React is 69 KB gzip. Lit's Shadow DOM fights global CSS variables.
- **Tests:** Vitest for logic, plus Playwright against the built `file://` HTML with a fake MIDI object injected.
- **`file://` + Web MIDI:** Chrome treats `file://` as a secure context, and `requestMIDIAccess` works but prompts for permission. Whether it remembers the grant across reloads is unverified (likely not).
