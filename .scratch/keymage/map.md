# Wayfinder map: MicroFreak Keymage

Label: wayfinder:map

## Destination

A spec plus a phased set of markdown task files, each with verification criteria, that implementing agents can pick up and build the MicroFreak scales & chords teaching app from. The map ends when nothing is left to decide.

## Notes

- Domain is music theory plus the Arturia MicroFreak's Scale/Root/Quantization behavior. Vocabulary lives in `/CONTEXT.md`, so read it before any ticket.
- Hardware reference is `/microfreak_manual_5_0_1_EN.md`, chapters 15 (Using Scales) and 16 (Paraphonic Chord Mode). The manual's Minor and Harmonic minor note lists contain typos, so don't trust them.
- Keyboard reference image is `/Screenshot 2026-10-08 at 17.18.57.png`. It shows 25 keys, C to C.
- Research tickets run on Sonnet subagents and write to `docs/research/<name>.md` (no research branches).
- Grilling tickets call the `grilling` and `domain-modeling` skills.
- Chrome-first. Safari gets the Built-in voice only.

Decisions taken while charting:
- The app copies MicroFreak Quantization. A Snapped key plays and displays the scale note it snaps to, and a hint shows the original key.
- Scales are the MicroFreak 8 only (Off, Major, Minor, Harmonic minor, Dorian, Mixolydian, Blues, Pentatonic). Root is any of the 12 notes.
- Chords have at most 4 notes.
- Chord building uses Degree chords (7-note scales only) plus Free chords by clicking keys. Pentatonic, Blues and Off get Free chords only, with an explanation of why.
- Note names use correct theory spelling, with the MicroFreak sharp name in brackets.
- Sound comes from a Web Audio Built-in voice and/or Web MIDI out. Playback is block chords only.
- Timing is 4/4, tempo 60–160 BPM, loop on by default. Chord length is 1, 2 or 4 beats or 1, 2 or 4 bars.
- The Clip view is read-only with a playhead.
- The audience is MicroFreak owners who know no theory.
- A hardware-sync reminder ("set your MicroFreak to Scale X / Root Y") sits next to the MIDI out picker.
- State lives in the URL hash.
- MIDI in plus Chord recognition is the last, nice-to-have phase.

## Decisions so far

- [MicroFreak quantization and MIDI behavior](issues/01-microfreak-quantization-and-midi.md): snap down for 1-semitone gaps, wide gaps unknown, standard Minor/Harmonic minor sets, Scale/Root not settable by CC (only undocumented SysEx), out on ch 1. Hardware check follows.
- [npm libraries](issues/03-npm-libraries.md): leaning tonal + raw Web Audio + raw Web MIDI + Preact + Vite singlefile, with Vitest/Playwright. Web MIDI works from file:// with a prompt.
- [Music theory for beginners](issues/02-music-theory-for-beginners.md): theory doc written, with Degree chord tables, 16 progressions and heuristic transition weights. Pentatonic is major. Blues 7ths clash with Quantization.
- [Tech stack, file structure and test strategy](issues/04-tech-stack-file-structure-tests.md): Preact + TS + Vite singlefile, tonal, raw Web Audio/MIDI. theory/audio/midi/state/ui split, CSS tokens. typecheck+test+build gate, Playwright on file://. Saw+LPF voice, C3–C5, root position.
- [Random progression rules](issues/05-random-progression-rules.md): 7-note scales only, heuristic weights, Length 4/8, Ending finished/loops, triads/7ths. Chords tagged Home/Building/Tension with a reason per transition.
- [Preset chords and progressions](issues/06-preset-chords-and-progressions.md): Degree buttons + Triad/7th/sus2/sus4 toggle, 14 progression presets (12-bar blues as triads). Scale change re-derives by degree, or freezes for Pentatonic/Blues/Off.
- [Layout and explanation layering](issues/07-layout-and-explanation-layering.md): Variant B. Controls in a left sidebar, keyboard → strip → clip → Lesson panel in main. The Lesson panel follows hover/focus. Prototype on branch `prototype/layout`.

## Not yet specified

- **Explanation copy.** The final wording for each Lesson panel topic. The prototype's `EX` table is the draft. Settle it inside the spec.
- **Clip view details.** How the Clip view marks chord boundaries and names (degree numeral, chord name), and whether it shows Snapped keys differently.
- **Chord recognition rules.** How inversions, ambiguous note sets (C6 vs Am7) and 2-note intervals get named.

## Out of scope

- Editable Clip view (drag or resize notes).
- Arpeggiated playback. The MicroFreak's own arpeggiator covers it.
- Web MIDI on Safari.
- localStorage persistence.
- Scales the MicroFreak doesn't have (Lydian, Phrygian, Locrian, melodic minor…).
- Chords of more than 4 notes.
- A root + quality chord picker.
- Chord inversions and voice leading. Chords play in root position.
- Locking chords or re-rolling single slots in the generator.
- Minor blues and Andalusian cadence presets (they need notes from two scales).
