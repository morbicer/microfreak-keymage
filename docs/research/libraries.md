# Libraries and build tooling

Research for ticket 03. Date of check: 2026-10-08. Versions come from `npm view`. Bundle sizes are my own measurements: esbuild 0.2x, `--bundle --minify --format=esm`, tree-shaken, gzip -9, built in a scratch dir outside the repo. Treat them as order-of-magnitude numbers.

## Summary of recommendations

| Area | Pick | Why in one line |
|---|---|---|
| Theory | `tonal` 6.5.0, imported by named module (`@tonaljs/*` or tree-shaken `tonal`) | Does everything asked. About 22 to 26 KB min, 8 to 9 KB gzip. |
| Audio | Raw Web Audio plus a 40-line look-ahead scheduler | Tone.js adds about 240 KB min (61 KB gzip) to play a polyphonic beep. |
| MIDI | Raw `navigator.requestMIDIAccess` behind one small wrapper | WebMidi.js is 82 KB min and buys nothing this app needs. |
| Single file | `vite` 8.x + `vite-plugin-singlefile` 2.3.3 | Inlines JS and CSS. SVG must go through the template or `?raw`. |
| Framework | Preact 11 (with hooks) if you want a framework, otherwise plain TS | 4.6 KB gzip vs React's 69 KB. Lit is the other credible option. |
| Tests | Vitest 5 for logic, Playwright against the built `file://` HTML | Both work. See the caveats at the end. |

## 1. Theory: tonal

Source: <https://github.com/tonaljs/tonal>, <https://tonaljs.github.io/tonal/docs>. Latest `tonal` 6.5.0, MIT, published 2026-09-28, so it is actively maintained. The umbrella package depends on about 23 granular packages (`@tonaljs/scale` 4.13.5, `chord` 6.2.0, `key` 4.11.3, `mode` 4.9.3, `note` 4.12.2, `progression`, `roman-numeral`, `voicing`, and others).

I ran each of the needed features in Node against tonal 6.5.0.

- **Scales.** `Scale.get('C# dorian').notes` gives `C# D# E F# G# A# B`. `Scale.get('Db harmonic minor').notes` gives `Db Eb Fb Gb Ab Bbb C`. `Scale.names()` returns 92 scale types.
- **Enharmonic spelling.** Spelling follows the tonic, as theory says it should. `F# major` ends on `E#`. `Gb major` ends on `Cb ... F`. Nothing special is needed for flat vs sharp keys, because the tonic string decides. `Note.enharmonic('C#')` gives `Db`. `Note.simplify('B#3')` gives `C4`. `Note.fromMidi(61)` gives `Db4`, and `Note.fromMidiSharps(61)` gives `C#4`. So pick the MIDI-to-name function by the key's accidental preference.
- **Degree chords (diatonic triads and sevenths).** `Key.majorKey('Eb').triads` gives `Eb Fm Gm Ab Bb Cm Ddim`. `.chords` gives `Ebmaj7 Fm7 Gm7 Abmaj7 Bb7 Cm7 Dm7b5`. `Key.minorKey('A').natural.chords` works. `Mode.triads('dorian','D')` and `Mode.seventhChords('dorian','D')` cover every mode, which is useful for a scale-and-chord teaching tool. `Progression.fromRomanNumerals('C', ['IMaj7','IIm7','V7'])` gives `CMaj7 Dm7 G7`.
- **Chord detection.** `Chord.detect(['C4','E4','G4'])` returns `['CM', 'Em#5/C']`. `Chord.detect(['D','F','A','C'])` returns `['Dm7', 'F6/D']`. Results are ranked, root-position first, and include slash-chord interpretations. Pass `{ assumePerfectFifth: true }` for shell voicings (it returned `G7` for `G B D F`). Octave numbers are accepted and ignored. This is the right tool for the "what chord is this" feature.
- **Gotcha.** `Chord.notes('Dm7', '3')` returned empty strings in my test. The second argument is an octave-aware tonic, so check the signature before relying on it. Use `Chord.get('Dm7').notes` or `Chord.getChord(type, tonic)`.

**Size.** Importing five modules (`Chord, Scale, Key, Note, Mode`) from `tonal`: 30.9 KB min, 10.9 KB gzip. Importing only the granular `@tonaljs/{chord,scale,key,note,mode}` functions: 21.5 KB min, 7.5 KB gzip. `Chord` alone via `tonal`: 25.8 KB min, 9.3 KB gzip. The data dictionaries (chord and scale tables) are most of the weight. This is negligible next to everything else in the page.

**Alternatives.** `teoria` 2.5.0 was last published 2022-06-27 and is effectively dead. `@tonaljs/*` is the only maintained, typed option. Hand-rolling is possible for scales and diatonic chords (about 100 lines) but enharmonic spelling and chord detection are exactly where hand-rolled code breaks.

**Recommendation.** Use tonal. Import named modules, not `import * as Tonal`. Wrap it in one `theory/` module so the UI never imports tonal directly. That keeps the swap cost low and the unit tests simple.

## 2. Audio: Tone.js vs raw Web Audio

Sources: Tone.js <https://tonejs.github.io/>, <https://github.com/Tonejs/Tone.js>. Chrome autoplay policy <https://developer.chrome.com/blog/autoplay#web-audio>. Scheduling <https://web.dev/articles/audio-scheduling>.

**Tone.js 15.1.22**, MIT, published 2026-10-04 (maintained). npm unpackedSize 5.4 MB, 886 files. Bundled and tree-shaken, `import { Synth }` costs 237 KB min, 61 KB gzip. `PolySynth + Synth + getTransport + start` costs 241 KB min, 62 KB gzip. `import * as Tone` costs 349 KB min, 83 KB gzip. It has `PolySynth`, `Transport` with a BPM-aware scheduler, and `Tone.start()` to resume the context after a gesture. Tone is plain browser JS and works from `file://` as long as it is bundled (no workers or fetches are needed for synths and the Transport). I did not test every Tone feature on `file://`.

**Raw Web Audio** needs three pieces for this app.

1. A voice. An `OscillatorNode` (saw or triangle) into a `GainNode` with an attack/release envelope via `gain.setTargetAtTime` or `linearRampToValueAtTime`, optionally through a `BiquadFilterNode`. Polyphony is one voice object per note, created on note-on and disposed after release. About 40 lines.
2. A scheduler. The look-ahead pattern from web.dev: a `setInterval` of about 25 ms schedules every event inside `currentTime + 0.1 s` with exact `AudioContext` times. The article warns that `setTimeout` alone drifts "tens of milliseconds or more", which is why the look-ahead pattern exists. For chord progression playback (a handful of events per bar) this is about 40 more lines, and tempo changes work naturally because the next-note time is recomputed per tick.
3. Resume on gesture. Since Chrome 71 an `AudioContext` created before user activation starts `suspended`. Fix: create it on the first click (for example the Play button) or call `ctx.resume()` in a click handler. Tone does the same thing through `Tone.start()`. Both need the same user gesture, so Tone gives no advantage here. In my headless Chrome 154 test on a `file://` page, `new AudioContext()` reported `running` with no gesture, but headless relaxes autoplay, so don't read that as a guarantee for headed Chrome. Always handle the `suspended` state.

The same clock can stamp MIDI: `output.send(bytes, performance.now() + delayMs)` takes a DOMHighResTimeStamp, so audio and MIDI can share one scheduler and one look-ahead loop. With Tone you would still need to convert Tone's time to the `performance.now()` base yourself.

**Recommendation.** Raw Web Audio. The app needs one polyphonic voice and a progression player, not a DAW. Tone costs about 60 KB gzip in a file the user opens from disk, plus an abstraction layer that does not help with MIDI-out timing. Reconsider Tone only if the product grows into effects chains, a sampler, or swing/humanize on a full sequencer. Keep the scheduler as a pure module taking a clock function so Vitest can drive it with a fake clock.

## 3. MIDI: WebMidi.js vs raw Web MIDI

Sources: Web MIDI spec <https://webaudio.github.io/web-midi-api/>, MDN <https://developer.mozilla.org/en-US/docs/Web/API/Navigator/requestMIDIAccess>, Chrome permission change <https://developer.chrome.com/blog/web-midi-permission-prompt>, Secure Contexts <https://w3c.github.io/webappsec-secure-contexts/> and <https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts>.

**WebMidi.js 3.3.1** (<https://github.com/djipco/webmidi>), Apache-2.0, published 2026-09-15, maintained by one author. Bundled `WebMidi` import: 81.6 KB min, 16.4 KB gzip. It gives `playNote()`, `sendControlChange()`, noteon listeners, channel objects, and enable/disable plumbing. It is a thin convenience layer, and it still calls `requestMIDIAccess` underneath, so it changes none of the `file://` and permission rules below.

**The raw API needed here is small.** `requestMIDIAccess()`, list `outputs` and `inputs`, `output.send([0x90|ch, note, vel])`, `input.onmidimessage` for note on/off, `access.onstatechange` for hot-plug. About 60 lines including parsing. Raw gives you the timestamp parameter on `send()` directly.

### Does Web MIDI work on `file://` in Chrome?

What the sources say:

- The spec marks `requestMIDIAccess` as `[SecureContext]`, and all MIDI interfaces are secure-context only.
- The Secure Contexts spec says "the user agent SHOULD treat `file` URLs as potentially trustworthy" (section 3.1, algorithm step 6: scheme `file` returns "Potentially Trustworthy"). MDN's table lists `file:///path/to/resource.html` as Secure. Browsers MAY opt out, but Chrome does not.
- Permissions Policy: feature `midi`, default allowlist `'self'`. A top-level page is fine. An iframe would need `allow="midi"`.
- Since Chrome 124 the whole API (not just SysEx) is behind a permission prompt, rolled out gradually. Refusal rejects the promise. The spec now names this `NotAllowedError` (older Chrome text says `SecurityError`). Catch both.
- Safari has no Web MIDI. Firefox gates it behind a prompt (and an add-on install in older versions). Chrome-first is the right call.

My own test (Playwright-core driving installed Google Chrome 154.0.8037.98, headless, page at `file:///tmp/.../p.html`):

- `window.isSecureContext === true`.
- `'requestMIDIAccess' in navigator === true`.
- `location.origin === 'file://'`.
- `navigator.permissions.query({name:'midi'})` returned `prompt`.
- `requestMIDIAccess()` rejected with `NotAllowedError: Permission to use Web MIDI API was not granted`. Headless auto-dismisses prompts, so this shows the prompt path is reached, not that the grant fails. Pre-granting `permissions:['midi']` through Playwright also rejected on `file://`. I could not tell whether that is a Playwright limitation for opaque `file://` origins or Chrome behaviour.

**Conclusion.** The API exists and is exposed on `file://` in Chrome, so the prompt appears. What I could not verify, and nobody documents authoritatively: whether Chrome remembers a grant for `file://` across reloads. Chrome keys permissions by origin and `file://` origins are not stable per file, so I expect a prompt on every page load. Assume that in the UX (a "Connect MIDI" button, one click per session) and test it by hand in headed Chrome before relying on it. Put a one-line note in the app: if the page is hosted over https the grant persists.

**Recommendation.** Raw Web MIDI behind a `midi/` module exposing a small interface (`listPorts`, `sendNoteOn/Off(port, ch, note, vel, atMs)`, `onNote(cb)`, `onPortsChanged(cb)`). Trigger the request from a button click, not on load. Do not request `sysex` (not needed, and it adds a second, scarier prompt). Handle `NotAllowedError`, `NotSupportedError`, and a missing `navigator.requestMIDIAccess` with specific messages. Skip WebMidi.js: it adds 16 KB gzip, a single-maintainer dependency, and nothing that the 60 lines above do not do.

## 4. Single-file build: vite-plugin-singlefile

Source: <https://github.com/richardtallent/vite-plugin-singlefile>. Version 2.3.3, MIT, published 2026-04-17. Vite is at 8.3.4 (published 2026-10-08). I did not confirm 2.3.3 against Vite 8 myself. The README names no supported Vite range, so pin versions and run the build in CI.

**What it inlines.** All JS and CSS go into the one `dist/index.html`. Options: `useRecommendedBuildConfig` (default true, forces the settings that make single-file output possible, such as inlining all assets and disabling code-split), `removeViteModuleLoader` (default false), `deleteInlinedFiles` (default true), `inlinePattern`, `overrideConfig`.

**Limitations from the README.**

- One HTML entry only (multi-entry is `wontfix`, issue #51).
- Files in `public/` are not inlined. They would break from a lone HTML file. Put nothing there.
- SVG is not inlined by the plugin. For the keyboard, render the SVG from code (the app builds it anyway), or import icons with `?raw` and inline the string.
- Sourcemaps are useless after inlining.
- Works on `file://`: localStorage, hash routing, relative files. Fails there: History-API routing (so hash state is correct), cookies, worklets.

**Gotchas I would check on day one.**

- Module scripts: Chrome loads inline `<script type="module">` from `file://` without trouble. External module scripts from `file://` hit CORS, which is why single-file matters. Verify by opening the built file with a double click.
- Do not use `new Worker(url)`, `fetch()` of local files, or AudioWorklet modules from a URL (worklets are listed as unsupported). A `Blob` URL worker or a plain `ScriptProcessor`-free design avoids all three. The raw-Web-Audio recommendation above fits.
- Fonts: use system fonts, or base64 inline them via CSS `url()` under the asset inline limit. External Google Fonts would fail offline.
- A literal `</script>` inside bundled strings can break inlining. tonal data is safe, but watch generated strings.

**Alternatives.** `vite-plugin-html-inline`-style packages are smaller and less used. A custom ~30-line post-build script (read `dist/`, replace `<script src>` and `<link>` with inline contents) is a legitimate fallback if the plugin lags behind Vite majors. Keep that as the escape hatch, not the first move.

**Recommendation.** Vite + `vite-plugin-singlefile`, with `base: './'`. Develop with the normal multi-file `src/` structure. `npm run build` outputs `dist/index.html`, and the export is that file.

## 5. Framework: React vs Preact vs plain JS vs Lit

Sizes measured by me, minified/gzip, with a trivial render call.

| Option | Version | min | gzip | Notes |
|---|---|---|---|---|
| React + ReactDOM | 19.3.0 | 222.7 KB | 68.9 KB | |
| Preact | 11.0.1 | 10.7 KB | 4.6 KB | `preact/hooks` adds about 1.5 KB. `@preact/signals` is optional. |
| Lit | 3.3.3 | 15.1 KB | 5.8 KB | Web components, BSD-3-Clause. |
| Plain TS | n/a | 0 | 0 | You write the DOM updates. |

**What the app actually has.** An SVG keyboard with highlight state, root/scale/mode pickers, a chord progression list with a playing-step highlight, a piano-roll clip view (read-only), MIDI port selectors, and a URL-hash state. That is one shared state object and perhaps 8 to 12 components. No routing, no forms to speak of, no async data.

**Concrete benefits.**

- **React.** Biggest ecosystem and the most familiar. Nothing here needs it. 69 KB gzip is about 8x the entire tonal dependency. The only argument is "the team already knows React".
- **Preact.** Same JSX and hooks mental model for 4.6 KB. Declarative rendering fits the real problem here, which is many derived views (keyboard highlights, chord labels, roll notes) of one state. Fully compatible with Vite (`@preact/preset-vite`). Version note: 11.0.1 is `latest`, `11.0.0-rc.2` was the prior tag and 8.5.3 sits on `legacy`. 11 is newly stable, so pin it and read its migration notes. React testing helpers work through `preact/compat` only if needed.
- **Lit.** Standards-based, no virtual DOM, nice encapsulation for the keyboard as a `<mk-keyboard>` element. Cost is Shadow DOM: your "plain CSS with CSS variables" requirement works (variables pierce shadow roots) but global stylesheets do not, so each component needs its own `static styles`. Decorators/TS config adds friction. Fine, but it makes plain-CSS theming harder than with Preact.
- **Plain TS.** Zero runtime, and for this size it is viable. The cost shows up in the progression list and clip view, where you hand-write keyed diffing or just re-render innerHTML and lose focus and transitions.

**Recommendation.** Preact 11 with hooks, and a tiny external store (a plain module with `subscribe` plus a `useSyncExternalStore`-style hook, or `@preact/signals` at about 1.3 KB). Reasons: declarative UI for a state-derived view, 4.6 KB, plain global CSS with variables works unchanged, JSX components give the multi-file structure the project wants. Keep theory, audio, MIDI, and URL-hash code as framework-free modules, so a change of framework later touches only `ui/`. If the team wants zero dependencies, plain TS is the runner-up, and I would pick it over React.

## 6. Test setup

- **Vitest 5.0.3** (MIT, published 2026-09-30). Runs on the Vite config, so no extra transform setup. Use it for `theory/` (tonal wrappers: spelling, detection, degree chords), the URL-hash serializer (round-trip), the audio scheduler (inject a fake clock, assert event times), and MIDI message encoding/parsing. Environment `node` is enough for all of these. Use `jsdom` or `happy-dom` only for component tests. Mock `navigator.requestMIDIAccess` with a plain object that has `outputs`/`inputs` Maps.
- **Playwright (`@playwright/test` 1.64.0**, Apache-2.0, published 2026-10-08). Run against the built single file with `page.goto('file://' + path.resolve('dist/index.html'))`. This is the test that actually protects the export promise: it catches a stray external script, a failing module load, or a `public/` asset. I confirmed in a scratch run that Playwright's `channel: 'chrome'` loads `file://` pages and exposes `isSecureContext === true`. Also run it against the Vite dev server for faster feedback if wanted.
- **Chrome-specific test limits.**
  - Real Web MIDI cannot be exercised in CI (no ports, and the prompt is auto-dismissed headless, and `permissions:['midi']` pre-grant did not succeed on `file://` in my run). Inject a fake MIDI access with `page.addInitScript` that overrides `navigator.requestMIDIAccess`, and assert on captured `send` calls.
  - Audio: assert the `AudioContext` state and scheduled-event logs through an injected clock rather than listening. Launch with `--autoplay-policy=no-user-gesture-required` only when deliberately testing playback paths, and also test the `suspended` then click path.
  - Keep one manual checklist item for headed Chrome with a real MicroFreak: permission prompt on `file://`, reload behaviour, send and receive.
- **Compatibility.** Vitest 5 and Playwright 1.64 are independent. Exclude `e2e/` from Vitest (`test.exclude`) so the two runners do not pick up each other's files. Add `npx playwright install chromium` in CI, or use `channel: 'chrome'` where Chrome is installed.

## Open items

1. Does Chrome persist a MIDI grant for `file://` across reloads? Not documented in anything I could fetch. Test by hand in headed Chrome.
2. `vite-plugin-singlefile` 2.3.3 vs Vite 8.3.x: README gives no compatibility range. Verify with a spike build.
3. Preact 11 is recent. Check its release notes for the hooks and `compat` changes before committing.
4. Tone.js behaviour on `file://` was not tested beyond reading. The recommendation to avoid it does not depend on that.
