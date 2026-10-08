# MicroFreak quantization and MIDI behavior

Research for ticket `.scratch/keymage/issues/01-microfreak-quantization-and-midi.md`. Firmware target is 5.x. The local manual is `microfreak_manual_5_0_1_EN.md` (cited as "manual L<line>").

Confidence levels used below:

- **Confirmed**: a first-party source (the manual) or a hardware-tested primary source says it plainly.
- **Inferred**: follows from confirmed facts but nobody states it.
- **Unknown**: no source found. An **Assumption** line says what the app should do.

Honest summary of the search. The manual is the only first-party source with scale detail. Arturia publishes no MIDI implementation chart for the MicroFreak beyond the CC table in the manual's Appendix D. Reddit, Gearspace and the Arturia support site blocked automated fetches (403 or domain refused). The Arturia forum search returned nothing. Elektronauts search worked but turned up only two weak hits (see the MIDI in section). Real answers on snap direction for wide gaps and on MIDI in need a person with a MicroFreak to test, and I list a short test plan at the end.

---

## 1. Snap direction

### 1a. Which direction do out-of-scale keys snap?

**Answer: down, for single-semitone gaps. Confidence: confirmed for C major black keys, with one internal contradiction in the manual.**

- Manual L6482-6486: "The first black key which normally plays C# now plays 'C'. All 'black' keys are stripped of their normal pitch and have been lower a semitone to fit in the C major scale." In C major every out-of-scale key sits one semitone above an in-scale key, so this says "down" and is equally consistent with "nearest, ties go down".
- **Contradiction.** The arpeggio section (manual L4306-4310) says that with C major, an arpeggio holding E and Eb "will play the E twice". Down-snapping would turn Eb into D, not E. Up-snapping would give E. That sentence may be loose wording by the manual's author (the arp case also involves transposition), or the arp/sequencer path may round differently from the keyboard path. I rate the L6482 keyboard text higher because it describes the keyboard directly and names specific keys, while L4306 is an offhand example.
- Manual L6150 also says "it is impossible to play notes outside of that scale", which fits any snap rule.

**Assumption for the app:** snap **down** to the nearest in-scale note at or below the pressed pitch. Put the rule behind one function (`snapPitchClass(scale, root, pc)`) so it is a one-line change if hardware testing says otherwise. Label the "snapped key" tooltip so it does not claim more than "plays X on a MicroFreak" for cases outside the manual's evidence.

### 1b. Gaps of 2 or more semitones (Pentatonic, Blues): where do F and F# go in C pentatonic?

**Answer: always down to the nearest in-scale note, even across multi-semitone gaps. Confidence: confirmed by hardware test (see `.scratch/keymage/issues/09-hardware-quantization-check.md`).**

Hardware test on C Pentatonic found the real scale to be `C Eb F G Bb` (see section 2 correction below), and the snap behavior confirmed "always down" over "nearest, ties down": pressing A (pc 9) produces G (pc 7, two semitones down) rather than the pitch-closer Bb (pc 10, one semitone up). The "nearest, ties down" rule would have predicted Bb here, and was ruled out.

| Rule | F | F# | A# | B |
|---|---|---|---|---|
| Always down (continuation of L6482) | E | E | A | A |
| Always up | G | G | C | C |
| Nearest, ties down | E | G | A | C |

(This table used the manual's — incorrect — major pentatonic set `C D E G A`; see section 2 for the corrected set and full confirmed map.)

---

## 2. Real note sets for Minor, Harmonic minor, and Pentatonic

**Answer: the manual's Minor and Harmonic minor lists are typos; use the standard theory sets (confirmed by hardware test). The manual's Pentatonic list is also wrong — the real scale is minor pentatonic, not major pentatonic (confirmed by hardware test). Confidence: confirmed, see `.scratch/keymage/issues/09-hardware-quantization-check.md`.**

Hardware test results:

- **Minor**: E, A, B all snap down a semitone (E→Eb, A→Ab, B→Bb), confirming `C D Eb F G Ab Bb` and that white keys snap too, not just black ones.
- **Harmonic minor**: B is unsnapped (in-scale), confirming `C D Eb F G Ab B` and that the manual's list (which has E instead of Eb) is a typo.
- **Pentatonic**: the manual's `C D E G A` (major pentatonic) is wrong. The real scale is `C Eb F G Bb` (**minor** pentatonic). Full confirmed pitch-class map at Root C: C→C, C#→C, D→C, D#/Eb→Eb (in scale), E→Eb, F→F (in scale), F#→F, G→G (in scale), G#→G, A→G, A#/Bb→Bb (in scale), B→Bb.
- **Blues**: still unresolved. Hardware readings for G and A were inconsistent with each other (see the issue file) — needs a retest with a reliable pitch reference (DAW recording, not ear/tuner-over-chat) before trusting a corrected table.
- Root independence confirmed: Minor at Root D snaps F#→F, matching the "intelligent transpose" claim (manual L6519-6520).

The manual's list (manual L6462-6472):

| Scale | Manual says | Problem |
|---|---|---|
| Minor | `C D Eb F G A Bb B` | 8 notes, contains both A and Bb and B. That is not natural minor (C D Eb F G Ab Bb) and not any single 7-note mode. Looks like Dorian plus a stray B |
| Harmonic minor | `C D E F G Ab B` | E natural should be Eb. Seven notes with the wrong third |
| Dorian | `C D Eb F G A Bb` | Correct |
| Mixolydian | `C D E F G A Bb` | Correct |
| Blues | `C D Eb F G Gb Ab A Bb`, written `C, D, Eb, F, Gb, G, Ab, A, Bb` | 9 notes. Contradicts the manual's own text "a 6-note scale" (manual L6418-6420) |
| Pentatonic | `C D E G A` | Correct (major pentatonic) |

Corroboration for treating these as typos: manual L6418-6420 says "Most scales use only 8 notes, except Pentatonic which uses 5 and the blues scale which is 6-note", so the manual itself counts 8 (7 plus the octave), and the Minor and Harmonic lists above do not even fit its own counting well.

**Assumption for the app (semitones from Root):**

| Scale | Semitone offsets | C-rooted notes |
|---|---|---|
| Off | 0-11 | all 12 |
| Major | 0 2 4 5 7 9 11 | C D E F G A B |
| Minor (natural) | 0 2 3 5 7 8 10 | C D Eb F G Ab Bb |
| Harmonic minor | 0 2 3 5 7 8 11 | C D Eb F G Ab B |
| Dorian | 0 2 3 5 7 9 10 | C D Eb F G A Bb |
| Mixolydian | 0 2 4 5 7 9 10 | C D E F G A Bb |
| Blues (minor blues, 6 notes) | 0 3 5 6 7 10 | C Eb F Gb G Bb |
| Pentatonic (major, per manual) | 0 2 4 7 9 | C D E G A |

Two open risks. The Blues list may really be minor pentatonic plus the blue note (as above) or major pentatonic plus b3, since the manual says "5 notes from the major or minor pentatonic scales plus one chromatic note". Minor pentatonic plus b5 is the common reading, so I chose it. Also, the real firmware could have the odd Minor set baked in. A hardware test (play all 25 keys per scale and record pitches) would settle all of this in about ten minutes.

The "Harmonic minor has the manual's typo" note is worth a line in the app's teaching copy ("the printed manual lists this scale differently, we show standard theory").

---

## 3. Are incoming MIDI notes quantized by the Scale setting?

**Answer: yes. Confidence: confirmed by hardware test (`.scratch/keymage/issues/09-hardware-quantization-check.md`) — sending C# from a computer with Scale = C Major plays as C, same as pressing the key.**

Evidence:

- Manual L6150 and L6117-area wording: Scale "is a global setting" and applies to "everything you play on MicroFreak keyboard, every sequence, every arpeggio" (manual L6411-6412 region of 15.1). MIDI in is not mentioned either way.
- Sequences and arpeggios are stored as raw notes and re-quantized when you change Scale on the fly (manual L6493-6495: "You'll hear your arpeggio or sequence change scale on the fly"). That means quantization happens late, in or just before the voice engine, not at the keyboard scanner. Anything that reaches the note engine, including MIDI in, would pass through it. This is reasoning, not a quote.
- Elektronauts, topic 151185 post 9 ("Anybody here using OT+Microfreak?"): a user says the MicroFreak "is great with the OT's midi sequencer, since both can quantize by root note and Maj/Min" and suggests setting both to the same key. Anecdotal and does not say MIDI in is quantized. Source: https://www.elektronauts.com/search.json?q=microfreak%20quantize%20midi (search result, topic 151185).
- The Elektronauts firmware 2.0.3 release note (topic 76132 post 1090) says only "Scale quantization: In Utility settings".

**Assumption for the app:** treat MIDI in as quantized by the hardware, since that matches how the whole scale feature is described, but the app never needs to know. The app's MIDI in only lights up keys on the Keyboard view from notes sent by an external controller, and it shows what that controller sent. Do not claim in the UI that the MicroFreak will snap those notes. Add a "verify on hardware" item (see test plan).

---

## 4. Can Scale or Root be set over MIDI? Default MIDI channel?

### 4a. CC

**Answer: no. Confidence: confirmed.** Manual Appendix D (L8335-8456) lists the default CC numbers: Spice 2, Glide 5, Osc Type 9, Wave 10, Timbre 12, Shape 13, Filter Cutoff 23, Cycling Env Amount 24, Filter Amount 26, Cycling Env Hold 28, Envelope Sustain 29, Keyboard Hold 64, Filter Resonance 83, Arp/Seq rate free 91 and sync 92 (listed as 141 in the manual's column, which looks misaligned), LFO rate free 93 and sync 94, Cycling Env Rise 102 and Fall 103, Attack 105, Decay 106. No Scale or Root. (Manual L6937 says "20 different CC# codes"; the table has 22 entries. Not our problem.)

Also, manual L7055 mentions CC 10, 12 and 13 select oscillator type, timbre, shape. Nothing about scale.

### 4b. NRPN

**Answer: no evidence it exists. Confidence: unknown (nothing in the manual or any source mentions NRPN for the MicroFreak).** Assumption: not available.

### 4c. SysEx

**Answer: yes, but via an undocumented proprietary message. Confidence: confirmed by hardware testing in a third-party reverse-engineering project, not by Arturia.**

Source: `kmorrill/freakout`, files `docs/microfreak-firmware-notes.md`, `docs/microfreak-sysex.md`, `src/minifreak_patch/microfreak_midi.py`, `src/minifreak_patch/microfreak_global_specs.py` (https://github.com/kmorrill/freakout). The author tested on firmware `5.0.0.36`.

- Frame: `F0 00 20 6B 07 01 SS LL OP [payload] F7` (`00 20 6B` is Arturia's manufacturer ID). `SS` is a sequence byte and `LL` the payload length.
- Operation `0x42` writes a global setting with payload `[code, value]`, no acknowledgement. Operation `0x43` reads one with payload `[code]`.
- Global setting codes: `keyboard.scale = 0x45`, `keyboard.root_note = 0x46`.
- Hardware proof: `42 46 01` changed Root from 0 to 1, `43 46` read back `1`, and the restore worked. Scale write was not separately exercised in the notes, but it uses the same dictionary.
- Value domains: Scale 0..7 in the order Off, Major, Minor, HarmoMinor, Dorian, Mixolydian, Blues, Pentatonic. Root is the 12 notes C..B in order (0 = C). The author says the domains come from Arturia's device description file audited against the firmware.

This is useful context but out of scope for the first version. Web MIDI SysEx also needs the user to grant a special permission, which is a poor fit for a teaching tool. **Assumption for the app:** the user sets Scale and Root on the synth by hand. The app tells them which Utility menu to use (Utility > Misc > Scale for global, Utility > Preset > Scale for per-preset, same for Root; manual L6420-6430 region, L6522-6526). Do not build SysEx control now. Note that a preset can carry its own Scale and Root, which is a good teaching point: saved presets override the global setting.

### 4d. Default MIDI channel

**Answer: output channel 1, input channel unclear. Confidence: confirmed for output (with a manual contradiction), unknown for input.**

- Manual L6872-6873 (tutorial 1): "By default, it is set to channel 1." (Utility > MIDI > Output Chan).
- Manual L6838-6840 (17.5): "By default, it will transmit on all channels". This contradicts the line above and also the MIDI Control Center description (manual L6027: Output Channel "1-16", no All option). In freakout's spec `midi.channel_out` also has only 16 values (0..15), no "All". So the "all channels" sentence is wrong, and output defaults to 1.
- Input channel options are All, 1-16, None (manual L6025; freakout `midi.channel_in` values 0..15, 126 = None, 127 = All). The manual does not state the input default.

**Assumption for the app:** MIDI out should default to channel 1 and expose a channel picker, and MIDI in should accept any channel by default. Tell users to check Utility > MIDI > Input Chan if the synth ignores the app.

---

## 5. Does the MicroFreak send MIDI out from its keys pre- or post-quantization?

**Answer: pre-quantization (raw key pitch). Confidence: confirmed by hardware test (`.scratch/keymage/issues/09-hardware-quantization-check.md`) — pressing C#3 with Scale = C Major sounds like C3, but the MIDI monitor shows the raw C#3 note number going out.**

- Manual L6027-6040: Local Control Off means "all the panel controls and the keyboard are transmitted over MIDI, but they're disconnected from the MicroFreak". Merge setting defines how keyboard data merges into the MIDI stream. No sentence about scale.
- Arp/Seq MIDI out: "The arpeggiator/sequencer can send MIDI notes to trigger other instruments" (manual L6040-6042). Again no mention of scale.
- Inference: since sequences are stored raw and re-quantized live (see 3), quantization most likely sits in the voice path. The MIDI output tap is most likely upstream of it, which gives raw key pitches. But I can't rule out that the firmware quantizes before the MIDI tap for the keyboard. Treat as a coin flip leaning raw.

**Assumption for the app:** the app's MIDI in treats every received note as the pitch the controller sent (pre-quantization) and displays that key as pressed. If the user wants to see what the synth would play, the app computes the snap itself using its own snap map (section 1). Do not rely on MicroFreak MIDI out reflecting the Scale setting. Make this explicit in the UI copy for MIDI in ("shows the key you pressed, not necessarily the note the synth plays").

---

## Other facts the app can use (confirmed)

- Eight Scales: Off, Major, Minor, Harmonic minor, Dorian, Mixolydian, Blues, Pentatonic (manual L5815; freakout spec agrees on the same order and wire values 0..7).
- Roots are the 12 sharp-named notes C, C#, D, D#, E, F, F#, G, G#, A, A#, B (manual L5821).
- Scale and Root exist twice. Utility > Misc is global. Utility > Preset is per preset (manual L6420-6430, L6522-6526).
- Changing Root transposes with the scale's interval structure intact (manual L6519-6520 "intelligent transpose").
- Paraphonic Chord Mode records the interval structure of a chord you play and replays that structure from each key, "with the interval structure of the current scale" (manual L6545-6575). The manual says it produces "scale quantized arpeggios", which suggests that a chord shape built on one key gets its out-of-scale notes snapped per the same rule. The exact rule is not documented. Four-voice paraphonic limit is confirmed (manual L719).
- Arpeggio under Scale can duplicate notes (ratcheting) because two different keys snap to the same note (manual L4306-4310). Good teaching material and also evidence that snapping is many-to-one.

## Suggested hardware test plan (about 15 minutes with a MicroFreak)

1. For each of the 8 Scales with Root C, play all 25 keys and note the pitch each key makes (a tuner or an external DAW with MIDI out is not needed, a keyboard-tracking synth tuner app works). This settles sections 1a, 1b and 2 in one pass.
2. Repeat Pentatonic and Blues with Root F# to check that the rule is relative to Root, not absolute.
3. Connect a computer, send MIDI notes of every pitch class to the MicroFreak with Scale = Major, and listen. This settles section 3.
4. Record MicroFreak MIDI out into a DAW with Scale = Major and press C#. If the DAW sees C# the key output is pre-quantization, if it sees C it is post. This settles section 5.
5. Check Utility > MIDI > Input Chan default after a factory reset.

## Sources

- Local manual: `/Users/marek.saktor/_pokusy/microfreak-keymage/microfreak_manual_5_0_1_EN.md`, chapters 15 (Using Scales, L6405+), 16 (Paraphonic Chord Mode, L6540+), 17.5 (MIDI channels, L6823+), Utility menu (L5811, L6150), MIDI Control Center (L6015+), Appendix D (L8335+). Arturia download: https://www.arturia.com/api/download/products/microfreak/manual/microfreak_Manual_5_0_1_EN.pdf
- Arturia product page (firmware 5.0.0.2084; v2.0 added "Chord mode, Scale quantization"): https://www.arturia.com/products/hardware-synths/microfreak/resources
- Elektronauts, "Arturia MicroFreak" firmware 2.0.3 notes (topic 76132, post 1090) and "Anybody here using OT+Microfreak?" (topic 151185, post 9): https://www.elektronauts.com/
- Third-party reverse engineering of the SysEx protocol (hardware-tested on FW 5.0.0.36): https://github.com/kmorrill/freakout
- Not reachable from the research environment: Reddit (blocked), Gearspace (403), Arturia support site (403), Arturia forum search (empty).
