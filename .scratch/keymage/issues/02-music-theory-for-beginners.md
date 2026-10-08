# Music theory for beginners

Type: research
Status: resolved
Blocked by:

## Question

What theory does the app need to teach and encode, and which beginner sources explain it well?

- How chords are built (intervals, stacking thirds, triad and 7th qualities, sus chords), limited to chords of 4 notes or fewer.
- The Degree chords (triads and 7ths, with roman numerals and qualities) for each 7-note MicroFreak scale: Major, Minor (natural), Harmonic minor, Dorian, Mixolydian.
- The most common progressions, with names and genre examples (I–V–vi–IV, ii–V–I, i–bVII–bVI–bVII, 12-bar blues…).
- Functional-harmony rules a random generator could follow: tonic/predominant/dominant roles, common motions, cadences, start/end conventions, what to avoid.
- Good free sources for a no-theory beginner (sites, videos), so explanations can link out.

Output goes to `docs/research/music-theory.md`. This is the theory doc the user asked for, so write it to be readable by a human.

## Answer

Full findings are in [docs/research/music-theory.md](../../../docs/research/music-theory.md). This is the human-readable theory doc.

- It covers chord construction (triads, 7ths, sus, in semitones), Degree chord tables for Major, Minor, Harmonic minor, Dorian and Mixolydian, 16 common progressions with genres and songs, functional-harmony rules, cadences, and an annotated source list.
- **Generator weights are heuristic.** The per-scale transition table is tuned to Hooktheory progression counts and Wikipedia's *Diatonic function*, not to Hooktheory's chord-to-chord stats, which the agent couldn't fetch. Ticket 05 should treat them as a starting point.
- **Pentatonic:** the manual lists `C D E G A`, so it's **major** pentatonic. The research doc left this open, and the manual settles it.
- **Blues conflict:** 12-bar blues uses dominant 7ths (I7, IV7) whose b7s fall outside Major and Mixolydian, so Quantization would snap them. Ticket 06 must decide how the blues preset handles this.
- Open Music Theory and musictheory.net weren't readable by the agent. The YouTube links are unverified, and i–VI–III–VII has no source.
