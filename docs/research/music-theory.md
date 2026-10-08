# Music theory for the Keymage app

Research for ticket 02. It covers what the app needs to teach and encode, and where to send a beginner for more. Terms follow `CONTEXT.md` (Scale, Root, Degree chord, Free chord, Progression, Chord length).

## How much of this is sourced, and how much is judgment

Read this first, because it affects how far you can trust the generator rules.

- Chord construction, scale chords, cadences, blues form and the progression list come from the cited pages.
- **The transition weights in section 5 are my own design.** I wanted Hooktheory's chord-to-chord statistics (the Trends tool) and could not get them. The Trends page loads its data with JavaScript and the fetcher only saw "Loading chord data...". What I could read is Hooktheory's popular-progressions page, which gives tab counts per progression. The weights are tuned to agree with those counts and with the function theory in Wikipedia's *Diatonic function* article. They are heuristics, not measured probabilities.
- If you want real numbers, open [Hooktheory Trends](https://www.hooktheory.com/trends) in a browser, pick C major (and C minor), click each chord, and read the "next chord" percentages. Replacing the weights in section 5 with those is a one-hour job and would be a clear upgrade.
- Open Music Theory and musictheory.net blocked or returned empty pages for my fetcher. I list them as sources because they are well known, but I did not read them in this pass. Marked "not read" below.

## 1. How chords are built

A chord is notes stacked on a root. Count in **semitones** (one key step on the keyboard, black keys included). Everything below is written from the root (0).

### Triads (3 notes, stacked thirds)

A third is 3 semitones (minor third) or 4 semitones (major third).

| Chord | Semitones | Stack | In C | Sound |
|---|---|---|---|---|
| Major | 0 4 7 | major 3rd + minor 3rd | C E G | bright, settled |
| Minor | 0 3 7 | minor 3rd + major 3rd | C Eb G | darker, sad |
| Diminished | 0 3 6 | minor 3rd + minor 3rd | C Eb Gb | tense, wants to move |
| Augmented | 0 4 8 | major 3rd + major 3rd | C E G# | dreamy, unstable |

### Seventh chords (4 notes)

Add one more third on top. This is the maximum the MicroFreak plays (four notes), so sevenths are the ceiling of the app. Ninths, elevenths and thirteenths need five or more notes and are out of scope.

| Chord | Symbol | Semitones | In C |
|---|---|---|---|
| Major 7th | Cmaj7 | 0 4 7 11 | C E G B |
| Dominant 7th | C7 | 0 4 7 10 | C E G Bb |
| Minor 7th | Cm7 | 0 3 7 10 | C Eb G Bb |
| Half-diminished | Cm7b5 | 0 3 6 10 | C Eb Gb Bb |
| Diminished 7th | Cdim7 | 0 3 6 9 | C Eb Gb A (Bbb) |
| Minor-major 7th | CmMaj7 | 0 3 7 11 | C Eb G B |
| Augmented major 7th | Cmaj7#5 | 0 4 8 11 | C E G# B |

Interval spellings (major/perfect/minor 3rd, 5th, 7th) match the table in Wikipedia's [Seventh chord](https://en.wikipedia.org/wiki/Seventh_chord). The semitone numbers are just those intervals counted out.

Which ones show up on scale steps: in major, maj7 on I and IV, m7 on ii, iii and vi, the dominant 7th on V only, and m7b5 on vii. The other four (dim7, mMaj7, aug maj7, plus the harmonic-minor ones in section 2) appear mainly in harmonic minor.

### Suspended chords and other 3-4 note options

A sus chord swaps the third for a neighbouring note. That removes the major/minor flavour, so it sounds open and unresolved. Source: Wikipedia, [Suspended chord](https://en.wikipedia.org/wiki/Suspended_chord).

| Chord | Semitones | In C |
|---|---|---|
| sus2 | 0 2 7 | C D G |
| sus4 | 0 5 7 | C F G |
| 7sus4 | 0 5 7 10 | C F G Bb |

The Wikipedia page spells out sus2 and sus4. It does not spell out 7sus4; I added the minor seventh to sus4 myself.

Two more four-note chords are worth offering as Free chord names, though I did not source them from a page: **add9** (0 2 4 7, C D E G) and **6** (0 4 7 9, C E G A). Recognition (naming held keys) should also handle power chords (0 7, two notes) since the ticket allows two-note chords.

### The recipe to teach

1. Pick a scale and a step.
2. Take that note, skip one scale note, take the next, skip one, take the next. That is the triad.
3. Skip one more and take one more for the seventh.

This works because the scale decides the thirds for you. It is why Degree chords vary in quality (section 2).

## 2. Degree chords for the five seven-note scales

Built in C. To transpose, shift every note by the Root's semitone offset. Scale spellings (semitones from root): Major 0 2 4 5 7 9 11. Natural minor 0 2 3 5 7 8 10. Harmonic minor 0 2 3 5 7 8 11. Dorian 0 2 3 5 7 9 10. Mixolydian 0 2 4 5 7 9 10.

Numeral convention: uppercase means a major triad, lowercase means minor, `°` diminished, `+` augmented. I use the natural-minor and mode numerals relative to the root (so `bVII` in Mixolydian is written `bVII`; in Minor it is just `VII` because the flat is already part of the scale).

Chord qualities for major and for harmonic minor match the standard patterns on Wikipedia's [Harmonic minor scale](https://en.wikipedia.org/wiki/Harmonic_minor_scale) page and musictheory.net's lesson (I could only retrieve a summary for the latter). Natural minor, Dorian and Mixolydian rows I derived by stacking thirds on the scale notes and checked against the [Mixolydian mode](https://en.wikipedia.org/wiki/Mixolydian_mode) Wikipedia chord table (G Mixolydian: G, Am, B°, C, Dm, Em, F).

### Major (C D E F G A B)

| Step | Numeral | Triad | Triad notes | 7th chord | 7th notes |
|---|---|---|---|---|---|
| 1 | I | C major | C E G | Cmaj7 | C E G B |
| 2 | ii | D minor | D F A | Dm7 | D F A C |
| 3 | iii | E minor | E G B | Em7 | E G B D |
| 4 | IV | F major | F A C | Fmaj7 | F A C E |
| 5 | V | G major | G B D | G7 | G B D F |
| 6 | vi | A minor | A C E | Am7 | A C E G |
| 7 | vii° | B dim | B D F | Bm7b5 | B D F A |

### Minor, natural (C D Eb F G Ab Bb)

| Step | Numeral | Triad | Triad notes | 7th chord | 7th notes |
|---|---|---|---|---|---|
| 1 | i | C minor | C Eb G | Cm7 | C Eb G Bb |
| 2 | ii° | D dim | D F Ab | Dm7b5 | D F Ab C |
| 3 | III | Eb major | Eb G Bb | Ebmaj7 | Eb G Bb D |
| 4 | iv | F minor | F Ab C | Fm7 | F Ab C Eb |
| 5 | v | G minor | G Bb D | Gm7 | G Bb D F |
| 6 | VI | Ab major | Ab C Eb | Abmaj7 | Ab C Eb G |
| 7 | VII | Bb major | Bb D F | Bb7 | Bb D F Ab |

### Harmonic minor (C D Eb F G Ab B)

| Step | Numeral | Triad | Triad notes | 7th chord | 7th notes |
|---|---|---|---|---|---|
| 1 | i | C minor | C Eb G | CmMaj7 | C Eb G B |
| 2 | ii° | D dim | D F Ab | Dm7b5 | D F Ab C |
| 3 | III+ | Eb aug | Eb G B | Ebmaj7#5 | Eb G B D |
| 4 | iv | F minor | F Ab C | Fm7 | F Ab C Eb |
| 5 | V | G major | G B D | G7 | G B D F |
| 6 | VI | Ab major | Ab C Eb | Abmaj7 | Ab C Eb G |
| 7 | vii° | B dim | B D F | Bdim7 | B D F Ab |

The raised seventh (B) is the whole point. It gives a major V and a leading tone that pulls up a semitone to the root. Wikipedia says harmonic minor is mainly used over the V7 chord, not over the i chord ([Harmonic minor scale](https://en.wikipedia.org/wiki/Harmonic_minor_scale)). The augmented III+ and the minor-major i sound strange to untrained ears; flag them as "colour chords" in the UI.

### Dorian (C D Eb F G A Bb)

| Step | Numeral | Triad | Triad notes | 7th chord | 7th notes |
|---|---|---|---|---|---|
| 1 | i | C minor | C Eb G | Cm7 | C Eb G Bb |
| 2 | ii | D minor | D F A | Dm7 | D F A C |
| 3 | III | Eb major | Eb G Bb | Ebmaj7 | Eb G Bb D |
| 4 | IV | F major | F A C | F7 | F A C Eb |
| 5 | v | G minor | G Bb D | Gm7 | G Bb D F |
| 6 | vi° | A dim | A C Eb | Am7b5 | A C Eb G |
| 7 | VII | Bb major | Bb D F | Bbmaj7 | Bb D F A |

Dorian is natural minor with a raised sixth. That makes IV major, which is the signature sound ([Dorian mode](https://en.wikipedia.org/wiki/Dorian_mode): "natural minor but with a major sixth"; the article cites i-III-VII-IV in "Mad World").

### Mixolydian (C D E F G A Bb)

| Step | Numeral | Triad | Triad notes | 7th chord | 7th notes |
|---|---|---|---|---|---|
| 1 | I | C major | C E G | C7 | C E G Bb |
| 2 | ii | D minor | D F A | Dm7 | D F A C |
| 3 | iii° | E dim | E G Bb | Em7b5 | E G Bb D |
| 4 | IV | F major | F A C | Fmaj7 | F A C E |
| 5 | v | G minor | G Bb D | Gm7 | G Bb D F |
| 6 | vi | A minor | A C E | Am7 | A C E G |
| 7 | bVII | Bb major | Bb D F | Bbmaj7 | Bb D F A |

Mixolydian is major with a flat seventh. Note the V chord is minor, so there is no strong dominant. The flat seven is a subtonic, not a leading tone ([Mixolydian mode](https://en.wikipedia.org/wiki/Mixolydian_mode)).

### Blues, Pentatonic, Off

No Degree chords. Blues is 0 3 5 6 7 10 (minor pentatonic plus the flat five; [Blues scale](https://en.wikipedia.org/wiki/Blues_scale)). Pentatonic on the MicroFreak is, I assume, the 5-note major or minor pentatonic; the ticket doesn't say which and I did not check the manual here. Whichever, chords on those scales are Free chords only.

### Two implementation traps

- **Quantization snaps out-of-scale chord tones.** A 12-bar blues in the usual dominant 7ths (C7, F7, G7) uses notes that are not in C Major or C Mixolydian. F7 has Eb; G7 in Mixolydian is not diatonic (the diatonic V is minor). If the app plays a Progression through the MicroFreak with a Scale on, those notes will snap. Decide whether a Progression is told the Scale is "Off" for playback, or whether presets are confined to Degree chords.
- **Harmonic minor III+ and sevenths** produce chords like CmMaj7 that the chord-namer must name correctly. Include them in the recognition table.

## 3. Common progressions

Counts are Hooktheory TheoryTab "tabs" (how many songs in its 81,104-song database use the pattern), from the [Popular chord progressions](https://www.hooktheory.com/theorytab/common-chord-progressions) page. Other entries come from Wikipedia's [Chord progression](https://en.wikipedia.org/wiki/Chord_progression) article. The "In C" column is for convenience.

| # | Name | Scale | Numerals | In C (or C minor) | Where you have heard it | Source |
|---|---|---|---|---|---|---|
| 1 | The pop progression | Major | I-V-vi-IV | C G Am F | Hooktheory's top entry, 1,385 tabs. Nickelback "What Are You Waiting For", SR-71 "Right Now" | Hooktheory |
| 2 | 50s / doo-wop | Major | I-vi-IV-V | C Am F G | "Blue Moon", "Heart and Soul"; also Bieber "Baby" (542 tabs) | Wikipedia, Hooktheory |
| 3 | Sad pop loop | Major | vi-V-IV-V | Am G F G | Dire Straits "Romeo and Juliet", Florence "Shake It Out" (377 tabs) | Hooktheory |
| 4 | Three-chord rock | Major | I-IV-V (-I) | C F G C | The Troggs "Wild Thing"; much rock, folk, punk | Wikipedia |
| 5 | I-V-IV-V | Major | I-V-IV-V | C G F G | One Direction "One Thing", Roxy Music "Avalon" (376 tabs) | Hooktheory |
| 6 | Pachelbel / canon | Major | I-V-vi-iii-IV-I-IV-V | C G Am Em F C F G | Pachelbel's Canon; Pet Shop Boys "Go West" uses I-V-vi-iii (200 tabs) | Wikipedia, Hooktheory |
| 7 | ii-V-I | Major | ii-V-I | Dm G C | The standard jazz cadence ("turnaround" with I-vi-ii-V) | Wikipedia |
| 8 | Circle of fifths | Major | vi-ii-V-I | Am Dm G C | Jazz standards, classical sequences; Benward and Saker call fifths motion the strongest of all | Wikipedia |
| 9 | 12-bar blues | Mixolydian or Free | I-I-I-I / IV-IV-I-I / V-IV-I-V (or I) | C C C C / F F C C / G F C C | Chuck Berry, Little Richard; quick-change variant puts IV in bar 2 | Wikipedia [Twelve-bar blues](https://en.wikipedia.org/wiki/Twelve-bar_blues) |
| 10 | Rock backdoor | Mixolydian | I-bVII-IV (-I) | C Bb F C | "Sweet Home Alabama", "Sweet Child o' Mine", "Norwegian Wood" (listed as Mixolydian examples) | Wikipedia [Mixolydian mode](https://en.wikipedia.org/wiki/Mixolydian_mode) |
| 11 | Minor descent | Minor | i-bVII-bVI-bVII | Cm Bb Ab Bb | Wikipedia lists it as a minor pattern. Used constantly in rock and film music | Wikipedia (list) |
| 12 | Andalusian cadence | Minor / Harmonic minor | i-VII-VI-V | Cm Bb Ab G | Flamenco and rock. In A minor: Am G F E. The V is major, so it fits Harmonic minor, not natural Minor | Wikipedia |
| 13 | Minor epic | Minor | i-VI-III-VII | Cm Ab Eb Bb | Hugely common in modern pop and soundtracks. I could not source it; treat as widely observed | uncited |
| 14 | Dorian vamp | Dorian | i-IV (alternating) | Cm F | "Oye Como Va", "Scarborough Fair" (modal), "So What" (jazz) | Wikipedia [Dorian mode](https://en.wikipedia.org/wiki/Dorian_mode) |
| 15 | Dorian pop | Dorian | i-III-VII-IV | Cm Eb Bb F | Tears for Fears "Mad World" (as cited in the Dorian article) | Wikipedia |
| 16 | Minor blues | Minor | i7 / iv7 / bVI7-V7 | Cm7 / Fm7 / Ab7-G7 | Coltrane "Equinox". The bVI7 and V7 here are not all diatonic | Wikipedia (Twelve-bar blues) |

Entries 9, 12 and 16 contain notes outside some scales (see the traps in section 2). Entry 13 is the only one I could not back with a page. Hooktheory also lists the cadential patterns IV-I6-V, I-V6-vi (932 tabs) and V7/IV-IV (644 tabs) but these use inversions or secondary dominants and the app has neither.

## 4. Functional harmony in plain words

Every Degree chord does one of three jobs. The three-way split is standard; see Wikipedia's [Diatonic function](https://en.wikipedia.org/wiki/Diatonic_function), which describes motion as tonic to pre-dominant to dominant and back to tonic.

- **Tonic (home, rest).** The chord the tune feels like it lives on. I and its relative vi (in minor: i and III, sometimes VI).
- **Predominant (leaving home, building).** Prepares the dominant. IV and ii (in minor: iv, VI, ii°).
- **Dominant (tension, wants to go home).** V, and vii° as a weaker substitute (in minor: V or vii° only in harmonic minor; natural minor has VII as a soft stand-in).

Basic model: **Tonic -> Predominant -> Dominant -> Tonic.** Going backwards (V -> IV) is allowed in pop, just less formal. Hooktheory's I-V-IV-V (376 tabs) and vi-V-IV-V (377 tabs) are both common.

Wikipedia also says iii is ambiguous (tonic substitute or dominant substitute), and in minor VI is "equally plausible" as predominant or tonic. For a random generator, give iii a low weight and a neutral role.

### Cadences (phrase endings)

From Wikipedia [Cadence](https://en.wikipedia.org/wiki/Cadence):

| Cadence | Motion | Feel |
|---|---|---|
| Authentic | V (or V7) -> I | Full stop. The strongest close |
| Plagal ("Amen") | IV -> I | Gentle close. Minor iv -> I is firmer |
| Half | anything -> V | Open, a comma. Calls for more |
| Deceptive | V -> vi (VI in minor) | Surprise; looks like a close, isn't |

For looping progressions (most beginners will let it loop), ending on V makes the loop feel like it wants to restart, which is useful. Ending on I feels finished.

### Generator rules (concrete)

These are rules a generator can use right away.

**Start and end**
- Start on step 1 (I or i) most of the time. A start on vi (major) is a fair alternative. Hooktheory's vi-V-IV-V has 377 tabs.
- Length 4 is the default (every top Hooktheory pattern is 4 chords or less; the 12-bar blues is the exception).
- End either on I (finished) or on V (loops). If the generator picks an ending chord, bias the second-to-last toward V, IV or ii so the close is a cadence.
- Never end on vii° (major) or ii° (minor). It sounds broken.

**Avoid**
- Same chord twice in a row, unless the length is meant to be extended (use Chord length instead).
- Diminished and augmented triads as start or end chords. Use them as one-beat passing chords at most.
- iii in Major and III+ in Harmonic minor, except as a rare passing chord.
- Reaching V from vi in the minor key unless using the harmonic-minor V (natural minor v is soft).

**Prefer**
- Motion down a fifth (or up a fourth), i.e. circle moves: vi -> ii -> V -> I. Wikipedia calls it the most common and strongest type, per Benward and Saker.
- Smooth connection: choose chords that share at least one note with the previous one.

## 5. Transition weights (heuristic, not measured)

Higher is more likely. 0 means never. The row is the current chord; pick the next chord with probability proportional to its weight. Rows sum to arbitrary totals; just normalise.

### Major

| From \ To | I | ii | iii | IV | V | vi | vii° |
|---|---|---|---|---|---|---|---|
| I | 0 | 2 | 1 | 4 | 4 | 4 | 0.5 |
| ii | 1 | 0 | 0.5 | 1 | 5 | 1 | 1 |
| iii | 1 | 1 | 0 | 3 | 1 | 4 | 0 |
| IV | 3 | 2 | 0.5 | 0 | 4 | 1 | 0.5 |
| V | 5 | 0 | 0.5 | 1.5 | 0 | 3 | 0 |
| vi | 1 | 3 | 1 | 4 | 3 | 0 | 0 |
| vii° | 5 | 0 | 2 | 0 | 0 | 1 | 0 |

Start weights: I 70, vi 15, IV 10, ii 3, V 2. End weights: I 70, V 25, vi 5.

How these line up with the data: I -> V and I -> vi and I -> IV are the first moves in Hooktheory's top four patterns (I-V-vi-IV, I-vi-IV-V, I-V-IV-V, I-IV-vi-V). V -> vi is the deceptive cadence. V -> IV is there because of I-V-IV-V and vi-V-IV-V. ii -> V is the circle move. These are consistent with the tab counts, but I did not measure them.

### Minor (natural: i ii° III iv v VI VII)

| From \ To | i | ii° | III | iv | v | VI | VII |
|---|---|---|---|---|---|---|---|
| i | 0 | 0.5 | 3 | 3 | 2 | 4 | 3 |
| ii° | 2 | 0 | 0 | 1 | 4 | 0 | 1 |
| III | 2 | 0 | 0 | 3 | 1 | 3 | 4 |
| iv | 4 | 1 | 1 | 0 | 2 | 2 | 3 |
| v | 5 | 0 | 1 | 1 | 0 | 3 | 1 |
| VI | 2 | 0 | 2 | 3 | 2 | 0 | 5 |
| VII | 5 | 0 | 4 | 1 | 0 | 2 | 0 |

Start: i 80, III 10, VI 10. End: i 75, VII 10, v 10, VI 5. Natural minor has no real dominant, so VII -> i ("backdoor") is the main closing move, and VI -> VII -> i is the classic rock descent.

### Harmonic minor

Use the Minor table, then make three changes. Swap the soft v for the real **V** (weights: V -> i = 6, V -> VI = 3). Swap the VII row and column for **vii°** and cut its weights to a third (it replaces V as a rare tension chord, vii° -> i = 5). Set **III+** to weight 0.3 everywhere. Strong cadence: iv or ii° -> V -> i. This is the only minor scale where the authentic cadence is available.

### Dorian (i ii III IV v vi° VII)

| From \ To | i | ii | III | IV | v | vi° | VII |
|---|---|---|---|---|---|---|---|
| i | 0 | 2 | 2 | 5 | 1 | 0 | 3 |
| ii | 3 | 0 | 2 | 2 | 1 | 0 | 1 |
| III | 2 | 0 | 0 | 3 | 1 | 0 | 4 |
| IV | 5 | 2 | 1 | 0 | 1 | 0 | 3 |
| v | 4 | 0 | 1 | 2 | 0 | 0 | 2 |
| vi° | 2 | 0 | 0 | 1 | 0 | 0 | 1 |
| VII | 4 | 0 | 2 | 4 | 0 | 0 | 0 |

Start: i 85, IV 10, VII 5. End: i 85, IV 10, VII 5. The signature moves are i <-> IV and VII -> IV (from the Dorian article's i-III-VII-IV and the Oye Como Va, So What vamps). There is no leading tone, so do not try to build a V -> I close.

### Mixolydian (I ii iii° IV v vi bVII)

| From \ To | I | ii | iii° | IV | v | vi | bVII |
|---|---|---|---|---|---|---|---|
| I | 0 | 1 | 0 | 4 | 1 | 2 | 5 |
| ii | 3 | 0 | 0 | 3 | 2 | 1 | 1 |
| iii° | 3 | 0 | 0 | 1 | 0 | 2 | 0 |
| IV | 4 | 1 | 0 | 0 | 1 | 1 | 4 |
| v | 4 | 1 | 0 | 3 | 0 | 1 | 2 |
| vi | 2 | 1 | 0 | 3 | 1 | 0 | 2 |
| bVII | 4 | 1 | 0 | 5 | 0 | 0 | 0 |

Start: I 85, IV 10, bVII 5. End: I 80, bVII 10, IV 10. The signature motion is I -> bVII -> IV -> I and bVII -> IV -> I (Wikipedia: "I-bVII-IV" is the V-IV-I turnaround spelled modally, with a citation-needed tag; Hooktheory counts bVII-IV-I as "a mixolydian cadence" at 109 tabs, and bVII -> I at 580).

### Blues and Pentatonic

No functional rules. Offer the 12-bar blues as a fixed template (I-I-I-I / IV-IV-I-I / V-IV-I-V) in the Free chord layer. Write it in numerals and let the user pick a Root. The quick-change and minor-blues variants are in section 3.

## 6. Beginner sources

Marked read (I fetched it and used it) or not read (I know it exists but my fetch returned nothing useful; check it yourself before linking). I did not verify any YouTube channels in this pass; I list only ones I know exist.

| Source | Link | Use it for | Status |
|---|---|---|---|
| Hooktheory, Popular chord progressions | https://www.hooktheory.com/theorytab/common-chord-progressions | Tab counts per progression with songs. Best "what do people actually play" page | read |
| Hooktheory Trends | https://www.hooktheory.com/trends | Click a chord, see which chords follow it, with percentages. The data I could not get | page read, data did not load |
| Wikipedia, Chord progression | https://en.wikipedia.org/wiki/Chord_progression | I-IV-V, ii-V-I, 12-bar blues, circle of fifths, Andalusian | read |
| Wikipedia, Diatonic function | https://en.wikipedia.org/wiki/Diatonic_function | Tonic, subdominant, dominant grouping, minor-key quirks. Dense, not beginner friendly | read |
| Wikipedia, Cadence | https://en.wikipedia.org/wiki/Cadence | Authentic, plagal, half, deceptive | read (first 100k chars) |
| Wikipedia, Seventh chord | https://en.wikipedia.org/wiki/Seventh_chord | Seventh chord qualities table | read |
| Wikipedia, Suspended chord | https://en.wikipedia.org/wiki/Suspended_chord | sus2, sus4, 7sus4 with song examples | read |
| Wikipedia, Dorian mode / Mixolydian mode | https://en.wikipedia.org/wiki/Dorian_mode , https://en.wikipedia.org/wiki/Mixolydian_mode | Chords and characteristic progressions of each mode, with songs | read |
| Wikipedia, Harmonic minor scale | https://en.wikipedia.org/wiki/Harmonic_minor_scale | Chord on each step, role of V and vii° | read |
| Wikipedia, Twelve-bar blues | https://en.wikipedia.org/wiki/Twelve-bar_blues | Standard, quick-change and minor blues layouts | read |
| Wikipedia, Blues scale | https://en.wikipedia.org/wiki/Blues_scale | Blues scale in semitones | read |
| musictheory.net lessons | https://www.musictheory.net/lessons | Free interactive lessons on intervals, triads, sevenths. The gentlest start for a no-theory reader | not read (page content came back empty) |
| Open Music Theory | https://viva.pressbooks.pub/openmusictheory/ | Free textbook; chapters on harmonic function and cadences. College level, but clear | not read (403) |
| Hooktheory YouTube channel | https://www.youtube.com/@hooktheory | Short explainers that go with the Trends data | not verified |
| The Axis of Awesome, "4 Chords" | search YouTube for the title | A comic demonstration that I-V-vi-IV runs through dozens of hits. Good hook for the first lesson | not verified |

If the app links out, link the Wikipedia pages and Hooktheory pages above. Those I read and they will not move soon. Hold the two "not read" ones until someone has opened them.

## 7. What I'd do with this

- Keep Degree chords to the two tables in section 2: triad and seventh. That already covers the ticket and the four-note limit.
- Ship the weights in section 5 as a first pass, and label them "heuristic" in the code. Swap in Hooktheory Trends numbers when someone has ten minutes with a browser.
- Decide the Quantization question (section 2, traps) before building the blues preset. It is the one place where the theory and the hardware disagree.
