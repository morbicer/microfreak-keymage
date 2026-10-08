# Hardware quantization check

Type: task
Status: resolved (blues scale note set left inconclusive, see below)
Blocked by:

## Question

The docs can't settle how the MicroFreak snaps, so check it on the hardware. Follow the test plan at the end of `docs/research/microfreak-behavior.md`. With a MIDI monitor attached (e.g. Chrome at https://www.onlinemusictools.com/webmiditest/ or MIDI Monitor on macOS):

1. Scale Major, Root C. Press C#, D#, F#, G#, A#. What note sounds, and which note number goes out over MIDI?
2. Scale Pentatonic, Root C. Press F, F#, A#, B. What sounds?
3. Scale Blues, Root C. Play all 12 keys and write down the note set you hear.
4. Scale Minor and Harmonic minor, Root C. Which keys snap?
5. Send the MicroFreak a C# from the computer while it's set to C Major. Does it play C# or C?

Record the results here. This is HITL, so the user plays the keys.

## Results (tested on hardware, 2026-10-08)

1. **Scale Major, Root C.** C#, D#, F#, G#, A# all snap **down** a semitone when heard (C#→C, D#→D, F#→F, G#→G, A#→A). But the MIDI note number sent out is the **raw, unsnapped** pitch (e.g. pressing C#3 sounds like C3 but sends C#3 over MIDI). Confirms manual L6482 snap-down behavior and settles research doc section 5: **MIDI out is pre-quantization.**

2. **Scale Pentatonic, Root C.** The manual's note list (C D E G A, major pentatonic) is **wrong**. The real scale is **C Eb F G Bb (minor pentatonic)**. Evidence: F and F# both sound identical and unsnapped-F (F is in-scale); A snaps down to G rather than up to the closer Bb, confirming the "always down to nearest in-scale note" rule even across multi-semitone gaps (research doc section 1b — "always down" hypothesis confirmed, not "nearest/ties-down"). Full pitch-class map: C→C, C#→C, D→C, D#/Eb→Eb (in scale), E→Eb, F→F (in scale), F#→F, G→G (in scale), G#→G, A→G, A#/Bb→Bb (in scale), B→Bb.

3. **Scale Blues, Root C.** Inconclusive. Tuner-based readings for G and A were inconsistent with each other and with the down-snap pattern that held everywhere else (G itself snapped to F#, but A appeared to snap to G — which can't both be true if G isn't a landable scale tone). Readings for D (→C) and G# (→F#/Gb) were consistent with a 5-6 note blues set excluding D and G. Needs a retest with a more reliable pitch reference (e.g. recording into a DAW and reading exact note names, rather than a phone tuner relayed through chat) before updating the research doc's Blues table.

4. **Scale Minor and Harmonic minor, Root C.**
   - Minor: E, A, B all snap down a semitone (E→Eb, A→Ab, B→Bb), confirming the standard natural-minor set (C D Eb F G Ab Bb) over the manual's garbled list — and confirming *white* keys snap too, not just black ones.
   - Harmonic minor: B is **unsnapped** (in-scale), unlike regular Minor where B snaps to Bb. Confirms the standard harmonic-minor set (C D Eb F G Ab B) and that the manual's harmonic-minor list (which has E instead of Eb) is a typo.
   - Root independence: switching to Root D, Minor, F# snaps down to F — confirming the scale transposes with Root rather than staying anchored to C.

5. **Incoming MIDI from computer, Scale C Major.** Sending C# (and other out-of-scale sharps) from the computer results in the synth playing the **snapped** note (C# sounds like C). Confirms research doc section 3: **incoming MIDI is quantized by the Scale setting**, same as the keyboard.
