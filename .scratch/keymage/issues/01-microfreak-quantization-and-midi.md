# MicroFreak quantization and MIDI behavior

Type: research
Status: resolved
Blocked by:

## Question

How does MicroFreak firmware 5.x actually quantize, and what does it do over MIDI?

- Which direction do out-of-scale keys snap (down, up, nearest)? What happens across gaps of 2 or more semitones in Pentatonic and Blues (in C pentatonic, where do F and F# go)?
- What are the real note sets for Minor and Harmonic minor? The manual lists Minor as `C D Eb F G A Bb B` and Harmonic minor as `C D E F G Ab B`, and both look like typos.
- Are incoming MIDI notes quantized by the hardware's Scale setting, or only the physical keys?
- Can Scale or Root be set over MIDI (CC, NRPN, SysEx)? What's the default MIDI channel?
- Does the MicroFreak send MIDI out from its keys pre- or post-quantization? This matters for MIDI in.

Output goes to `docs/research/microfreak-behavior.md`, with sources (manual page, Arturia forum/FAQ, MIDI implementation chart) and a confidence level per answer.

## Answer

Full findings are in [docs/research/microfreak-behavior.md](../../../docs/research/microfreak-behavior.md).

- **Snap direction.** Down for 1-semitone gaps. The manual says black keys are "lowered a semitone", but its arpeggio example implies Eb→E, which contradicts that. Gaps of 2+ semitones (Pentatonic/Blues) are unknown. Working assumption: always snap down, behind one swappable `snapPitchClass` function. Ticket 09 verifies this on the hardware.
- **Note sets.** The manual's Minor and Harmonic minor lists are typos. Use standard sets: Minor `0 2 3 5 7 8 10`, Harmonic minor `0 2 3 5 7 8 11`. The manual's Blues list has 9 notes and its text says 6. Working assumption: minor blues `0 3 5 6 7 10`, verified by ticket 09.
- **MIDI in to the MicroFreak.** Probably quantized by the hardware (inferred). The app doesn't depend on it.
- **Scale/Root over MIDI.** No CC and no NRPN. An undocumented SysEx (op 0x42, codes 0x45/0x46, from kmorrill/freakout) works on fw 5.0.0.36. Not used in v1. The hardware-sync reminder stays.
- **Channels.** MIDI out defaults to channel 1. The input default is unclear, so assume All.
- **MIDI out from the keys.** Unknown whether it's pre- or post-quantization, probably pre. This matters only for the last-phase MIDI in feature, and ticket 09 checks it.
