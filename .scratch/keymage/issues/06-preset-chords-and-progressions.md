# Preset chords and progressions

Type: grilling
Status: resolved
Blocked by: 02

## Question

Which preset progressions ship, and with what names, scales and Chord lengths? How do presets behave when the learner switches to a Scale they don't fit (say a major-key preset under Blues)?

## Answer

Decided with the user in a grilling session. It builds on [docs/research/music-theory.md](../../../docs/research/music-theory.md) section 3.

- **Chord presets** are the Degree chord buttons plus a Chord type toggle: Triad / 7th / sus2 / sus4. Sus chords are built from scale steps (1-2-5, 1-4-5), so they stay in key. There's no shape palette. In Off/Pentatonic/Blues you build Free chords by clicking keys only.
- **Progression presets:** 14 of the research's 16. Minor blues and the Andalusian cadence are dropped because they need notes from more than one MicroFreak scale. 12-bar blues ships as triads in Major, and its caption says real blues uses 7ths, which need Scale Off. Picking a preset sets its intended Scale and keeps the current Root.
- **Scale change with a progression loaded:** progressions are stored as degrees. Switching to another 7-note scale re-derives the chords on the same degrees, captioned "same steps, new scale". Switching to Pentatonic/Blues/Off freezes the current notes as Free chords, and Quantization then snaps them (Off: no snapping).
