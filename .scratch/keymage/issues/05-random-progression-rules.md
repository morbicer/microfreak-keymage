# Random progression rules

Type: grilling
Status: resolved
Blocked by: 01, 02

## Question

What rules does the random progression generator follow? That covers length, which scales it supports, start and end chords, allowed transitions, Chord length variety, and how much randomness the learner controls. And how does the app explain why it picked what it picked?

## Answer

Decided with the user in a grilling session. It builds on [docs/research/music-theory.md](../../../docs/research/music-theory.md) sections 4–5.

- **Scales:** only the five 7-note scales. It uses the research transition, start and end weights per scale (Harmonic minor derived from Minor as described there), labelled "heuristic" in code. For Pentatonic, Blues and Off, Generate is disabled, with a caption saying why.
- **Hard rules from the research:** no repeated chord back-to-back, no diminished or augmented chord at the start or end, never end on vii°/ii°, and bias the penultimate chord toward a cadence (V, IV, ii or the scale's equivalent).
- **Controls:** Length (4 or 8 chords), Ending ("finished" ends on I/i, "loops" ends on V/v/VII/bVII per scale), Chord type (triads or 7ths). Every chord gets the current default Chord length and is editable per chord afterward. No locks or single-slot re-roll.
- **Explanation:** each chord carries a Chord function tag and color (Home / Building / Tension). Each transition gets a one-line reason. Presets use the same tags and reasons.
- **Later improvement, not blocking:** replace the heuristic weights with real Hooktheory Trends numbers.
