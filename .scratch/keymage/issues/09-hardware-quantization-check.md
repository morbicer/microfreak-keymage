# Hardware quantization check

Type: task
Status: open
Blocked by:

## Question

The docs can't settle how the MicroFreak snaps, so check it on the hardware. Follow the test plan at the end of `docs/research/microfreak-behavior.md`. With a MIDI monitor attached (e.g. Chrome at https://www.onlinemusictools.com/webmiditest/ or MIDI Monitor on macOS):

1. Scale Major, Root C. Press C#, D#, F#, G#, A#. What note sounds, and which note number goes out over MIDI?
2. Scale Pentatonic, Root C. Press F, F#, A#, B. What sounds?
3. Scale Blues, Root C. Play all 12 keys and write down the note set you hear.
4. Scale Minor and Harmonic minor, Root C. Which keys snap?
5. Send the MicroFreak a C# from the computer while it's set to C Major. Does it play C# or C?

Record the results here. This is HITL, so the user plays the keys.
