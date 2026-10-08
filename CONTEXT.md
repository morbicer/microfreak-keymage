# MicroFreak Keymage

A teaching tool that shows, on a picture of the MicroFreak's 25-key keyboard, how the synth's Scale and Root settings shape the notes you play and the chords you can build. It's written for MicroFreak owners who know no music theory.

## Language

### Scales

**Scale**:
One of the MicroFreak's eight Scale settings: Off, Major, Minor, Harmonic minor, Dorian, Mixolydian, Blues, Pentatonic. "Off" means the full 12-note chromatic set.
_Avoid_: Mode (except when explaining where Dorian and Mixolydian come from), key

**Root**:
The note a Scale starts on, one of the 12 chromatic notes C through B.
_Avoid_: Key, tonic (fine in explanations, not as the name of the control)

**Quantization**:
The MicroFreak's behavior of snapping every pressed key to a note in the current Scale, so an out-of-scale key plays a nearby scale note instead of its own pitch.
_Avoid_: Filtering, highlighting, scale lock

**Snapped key**:
A key whose chromatic pitch isn't in the current Scale and which therefore plays a different note under Quantization.
_Avoid_: Wrong key, disabled key

### Chords

**Chord**:
Between two and four notes sounding together. Four is the MicroFreak's paraphonic voice limit.
_Avoid_: Voicing (that is one arrangement of a chord), stack

**Degree chord**:
A Chord built by stacking every other note of the Scale on one of its steps (I, ii, iii…). Only the 7-note Scales have Degree chords.
_Avoid_: Diatonic chord (fine in explanations), preset chord

**Free chord**:
A Chord the learner builds by clicking keys on the Keyboard view.
_Avoid_: Custom chord

**Chord recognition**:
Naming the Chord formed by whichever keys are held, whether they were clicked or arrived over MIDI in.

**Progression**:
An ordered sequence of Chords, each held for its own Chord length.
_Avoid_: Sequence (that's the MicroFreak's step sequencer), pattern

**Chord length**:
How long one Chord in a Progression lasts, measured in beats or bars.
_Avoid_: Note length, gate, duration

### Views

**Keyboard view**:
The SVG picture of the MicroFreak's 25 keys (C to C, two octaves), showing note names and the current Chord.

**Clip view**:
A read-only, Ableton-style piano roll of the current Progression, with a playhead during playback.
_Avoid_: Piano roll editor, sequencer

### Output

**Built-in voice**:
The app's own synth, which plays through the computer's speakers.
_Avoid_: Web MIDI sound, internal synth

**MIDI out**:
Sending the Progression's notes to an external MIDI device such as the MicroFreak.

**MIDI in**:
Receiving notes from a connected keyboard so they light up the Keyboard view.

### Notes

**Note name**:
A note's theory-correct spelling for the current Scale and Root (Bb in F major), followed by the MicroFreak's sharp-only name in brackets when the two differ: "Bb (A#)".
_Avoid_: Label, pitch class (fine in code)
