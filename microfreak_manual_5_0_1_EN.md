USER MANUAL

_MICROFREAK

Special Thanks

DIRECTION

Frédéric BRUN

Kévin MOLCARD

ENGINEERING

Olivier DELHOMME (Project

Aurore BAUD

Yannick DANNEL

Lab

Manager)

Jérôme BLANC (Vocoder

Edition Project Manager)

Kévin ARCAS

Thomas AUBERT

DESIGN

Timothée BEHETY

Lionel FERRAGUT

Antoine MOREAU

Robert BOCQUIER

Valentin FOARE

Noise Engineering

Claire BOUVET

Nadine LANTHEAUME

Luc WALRAWENS

Hugo CARACALLA

Samuel LIMIER

Thierry CHATELAIN

Frédéric MESLIN / Fred's

Sébastien ROCHARD

Glen DARCEY

Morgan PERRIER

(Product Manager)

DesignBox

Jonas SELLAMI

SOUND DESIGN

Jean-Baptiste ARTHUS

Maxime DANGLES

Menno HOOMANS &

Victor MORELLO

Maxime AUDFRAY

Ken FLUX PIERCE

Bastiaan BARTH (Solidtrax)

Bernhard SIEFERT (Nhar)

Clément BASTIAT

Eliott FORIN (Foreign

Tom LECLERC

Ed TEN EYCK

Jean-Michel BLANCHET

Joey BLUSH

Sequences)

Romain MAGNAN

Simon GALLIFET

Thibault MOREL

Boris BUNNIK (Conforce)

Tom HALL

(Seroplexx)

QUALITY ASSURANCE

Arnaud BARBIER

Florian MARIN

Nicolas NAUDIN

Roger SCHUMANN

Thomas BARBIER

Germain MARZIN

Benjamin RENARD

BETA TESTING

Bastiaan BARTH (Solidtrax)

Chuck CAPSIS

Boele GERKES

Gustavo LIMA

Gert BRAAKMAN

Jeffrey M CECIL

Kirke GODFREY

Terry MARSDEN

Gustavo BRAVETTI

Marco CORREIA

Tom HALL

Bastien MAURILLE

Andrew CAPON

Ken FLUX PIERCE

Are LEISTAD

Jeff STONELEY

MANUAL

Gert BRAAKMAN (author)

Ángel DOMÍNGUEZ

Charlotte METAIS

Jack VAN

Stephen FORTNER

Minoru KOIKE

Jose RENDON

Jimmy MICHON

Randall LEE

Holger STEINBRINK

Special thanks to Mutable Instruments for providing the Plaits code under MIT license.

Special thanks to Noise Engineering for providing the code for the BASS, SAWX and HARM
Oscilators.

© ARTURIA SA – 2023 – All rights reserved.
26 avenue Jean Kuntzmann
38330 Montbonnot-Saint-Martin
FRANCE
www.arturia.com

Information contained in this manual is subject to change without notice and does not
represent a commitment on the part of Arturia. The software described in this manual is
provided under the terms of a license agreement or non-disclosure agreement. The software
license agreement specifies the terms and conditions for its lawful use. No part of this
manual may be reproduced or transmitted in any form or by any purpose other than
purchaser’s personal use, without the express written permission of ARTURIA S.A.

All other products,
registered trademarks of their respective owners.

logos or company names quoted in this manual are trademarks or

Product version: 5.0.0

Revision date: 6 July 2023

Thank you for purchasing MicroFreak!

This manual covers the features and operation of Arturia’s MicroFreak, the powerful but
affordable hybrid desktop synth in our extensive family of instruments.

Be sure to register your product as soon as possible! When you purchased MicroFreak you
were sent a serial number and an unlock code by e-mail. These are required during the
online registration process.

Special Messages

Specifications Subject to Change:

The information contained in this manual is believed to be correct at the time of printing.
However, Arturia reserves the right to change or modify any of the specifications without
notice or obligation to update the hardware that has been purchased.

IMPORTANT:

The instrument, when used in combination with an amplifier, headphones or speakers,
may be able to produce sound levels that could cause permanent hearing loss. DO NOT
operate for long periods of time at a high level or at a level that is uncomfortable, or
a level that exceeds prevailing safety standards for hearing exposure. Always follow the
basic precautions listed below to avoid the possibility of serious injury or even death from
electrical shock, damages, fire or other risks. If you encounter any hearing loss or ringing
in the ears, consult an audiologist immediately. It is also a good idea to have your ears and
hearing checked annually.

Introduction

Congratulations on your purchase of MicroFreak, heir apparent to the role of coolest tiny
desktop synth on the planet.

Arturia has a passion for excellence, and MicroFreak is no exception. Listen to the sounds;
tweak a few controls; skim through the features, or dive as deep as you like; you will never
reach the bottom of it. We are confident that MicroFreak will prove to be an invaluable
companion as you sail the waters of your imagination.

Be sure to visit the Arturia website for information about all of our other great hardware
and software instruments. They have become indispensable, inspiring tools for musicians
around the world.

Musically yours,

The Arturia team

Table Of Contents

1. Welcome and Introduction.................................................................................................................................... 3
1.1. A fascinating adventure ..................................................................................................................................................... 4
1.2. New in firmware (FW) 5.0.0 ......................................................................................................................................... 4
1.3. About reading manuals..................................................................................................................................................... 4
2. Installation....................................................................................................................................................................... 5
2.1. Usage Precautions................................................................................................................................................................ 5
2.2. Warning ...................................................................................................................................................................................... 5
2.3. Notice............................................................................................................................................................................................ 5
2.4. Precautions include, but are not limited to, the following: ........................................................................ 6
2.5. Register your Instrument................................................................................................................................................ 6
2.6. Connecting the MicroFreak to the World .............................................................................................................. 7
2.7. Get the Latest Firmware................................................................................................................................................... 8
3. MicroFreak Overview................................................................................................................................................ 9
3.1. Front panel overview .......................................................................................................................................................... 9
3.2. Rear Panel Overview ....................................................................................................................................................... 19
3.3. Signal Flow ............................................................................................................................................................................ 22
4. The MicroFreak Presets......................................................................................................................................... 23
4.1. Loading Presets................................................................................................................................................................... 23
4.2. Saving Presets..................................................................................................................................................................... 24
4.3. Tweaking the Preset Configurations .................................................................................................................... 25
4.4. Panel .......................................................................................................................................................................................... 28
4.5. Understanding Digitally-Controlled Analog ..................................................................................................... 29
5. Making Connections............................................................................................................................................... 30
5.1. Control Signals .................................................................................................................................................................... 30
5.2. The Matrix and its encoder .......................................................................................................................................... 31
5.3. Freaky ideas ......................................................................................................................................................................... 35
6. The Digital Oscillator ............................................................................................................................................... 36
6.1. The oscillator as a sound generator ...................................................................................................................... 36
6.2. The Parameter Controls................................................................................................................................................ 37
6.3. Oscillator types: An Overview ................................................................................................................................... 38
7. The Filter: sound in close-up.............................................................................................................................. 53
7.1. Modifying sound.................................................................................................................................................................. 53
7.2. Animating sound................................................................................................................................................................ 55
8. The LFO............................................................................................................................................................................ 57
8.1. LFO Shape ............................................................................................................................................................................... 57
8.2. LFO Rate .................................................................................................................................................................................. 58
8.3. Freaky Tips and Tricks ................................................................................................................................................... 59
9. The Envelope Generator ...................................................................................................................................... 60
9.1. What does an Envelope Generator do? ............................................................................................................. 60
9.2. Gates and Triggers .......................................................................................................................................................... 60
9.3. Envelope stages................................................................................................................................................................... 61
9.4. Filter amount ......................................................................................................................................................................... 61
9.5. The Amp Mod button....................................................................................................................................................... 62
9.6. The Cycling Envelope Generator............................................................................................................................. 62
9.7. Freaky Cycling Envelope Suggestions................................................................................................................. 65
10. The Keyboard Section ......................................................................................................................................... 66
10.1. Another look at Gates and Triggers..................................................................................................................... 67
10.2. Keyboard responsiveness......................................................................................................................................... 67
10.3. Glide......................................................................................................................................................................................... 68
10.4. Octave Buttons ................................................................................................................................................................. 70
10.5. Tutorial: Modulating LFO speed ............................................................................................................................. 70
11. Using the Icon Strip ................................................................................................................................................. 71
11.1. The Key Hold Button........................................................................................................................................................... 71
11.2. Sequencer and Arpeggiator........................................................................................................................................ 72
11.3. The Touch strip .................................................................................................................................................................... 72
12. The Arpeggiator........................................................................................................................................................ 75
12.1. Using Patterns...................................................................................................................................................................... 76
12.2. Gates and Triggers revisited ..................................................................................................................................... 76
12.3. Arpeggio Rate...................................................................................................................................................................... 77
12.4. Making it Swing ................................................................................................................................................................. 78

12.5. Arpeggio Range ................................................................................................................................................................. 78
12.6. Transferring an arpeggio to the Sequencer.................................................................................................... 79
12.7. Arpeggiator fun ................................................................................................................................................................ 80
13. The Sequencer ........................................................................................................................................................... 81
13.1. Using the Sequencer ...................................................................................................................................................... 82
13.2. The Modulation Tracks .................................................................................................................................................. 87
13.3. Fun with Sequences ....................................................................................................................................................... 91
14. MicroFreak Configuration .................................................................................................................................. 93
14.1. Utility & MIDI Control Center..................................................................................................................................... 94
14.2. MIDI Control Center....................................................................................................................................................... 99
15. Using Scales ............................................................................................................................................................... 111
15.1. Scale settings...................................................................................................................................................................... 112
15.2. The Scale Root .................................................................................................................................................................. 113
16. Paraphonic Chord Mode.................................................................................................................................... 114
16.1. Unison...................................................................................................................................................................................... 114
16.2. Adjusting the default Unison settings................................................................................................................ 115
16.3. Unison Spread as a modulation target............................................................................................................ 115
17. Connecting external gear.................................................................................................................................. 116
17.1. CV/GATE FUNCTIONS..................................................................................................................................................... 117
17.2. Clock sources/destinations ....................................................................................................................................... 119
17.3. Controlling External and Modular gear ............................................................................................................. 119
17.4. About Local Control ..................................................................................................................................................... 120
17.5. About MIDI channels.................................................................................................................................................. 120
17.6. Tutorial 1: Using MIDI to control the MINI V VST synth ......................................................................... 121
17.7. Tutorial 2: Using MIDI to control Modules on VCVRACK........................................................................ 121
17.8. Using MIDI CC# codes for control...................................................................................................................... 122
17.9. Tutorial 3: sending CC# codes from the MicroFreak .............................................................................. 123
17.10. MIDI CC# values: an overview........................................................................................................................... 124
18. Appendix A: Speech Oscillator: internal and external control.................................................. 125
19. Appendix B: The MicroFreak Vocoder ...................................................................................................... 128
19.1. An Introduction to Vocoding.................................................................................................................................... 128
19.2. How does Vocoder work?........................................................................................................................................ 129
19.3. Connect the microphone ........................................................................................................................................... 131
19.4. (Or) Connect a headset microphone................................................................................................................ 132
19.5. Select a Vocoder Preset............................................................................................................................................. 132
19.6. Play & Sing ......................................................................................................................................................................... 132
19.7. Vocoder Configuration................................................................................................................................................ 133
19.8. Global Vocoder settings............................................................................................................................................. 134
19.9. MicroFreak Vocoder Package content ............................................................................................................. 138
20. Appendix C: Cheat Sheet ................................................................................................................................ 139
21. Appendix D: CC# Values..................................................................................................................................... 141
21.1. What are CC# values?................................................................................................................................................. 141
22. Declaration of Conformity.............................................................................................................................. 143
22.1. FCC.......................................................................................................................................................................................... 143
22.2. CANADA............................................................................................................................................................................... 143
22.3. CE ............................................................................................................................................................................................ 143
22.4. UKCA ..................................................................................................................................................................................... 143
22.5. ROHS..................................................................................................................................................................................... 143
22.6. WEEE..................................................................................................................................................................................... 144
23. Software License Agreement....................................................................................................................... 145

1. WELCOME AND INTRODUCTION

Congratulations on your purchase of the Arturia MicroFreak!

The MicroFreak is a compact, versatile, semi-modular synthesizer with many unique
features that will spark your imagination and creativity in a new way. It enables you to
experiment with modular sound construction without the hassle of patch cords.

The MicroFreak comes in two versions: the standard MicroFreak and the MicroFreak Vocoder
Edition with a white casing and a gooseneck microphone. For specific information about the
Vocoder edition please refer to Chapter 19 [p.128].

The core of MicroFreak is an advanced digital oscillator with newly developed control
options.

The classic Analog Filter guarantees a warm sound. Together they offer the best of two
worlds: digital and analog.

In addition to a standard envelope, a cycling envelope provides you with modulation options
only found on high-end modular systems.

Arturia is known for deep modulation options, and MicroFreak no exception. Its versatile
matrix patchboard offers options similar to the matrix of its elder brother, the MatrixBrute.
The Matrix allows you to take control and route modulation sources to a great number of
destinations.

Another unique feature of the MicroFreak is an expressive touch capacitor keyboard that
responds to your finger pressure. Couple this with the paraphonic playing option, an
arpeggiator, and assignable matrix destinations, and you will understand why the
MicroFreak will soon be your favorite performance synthesizer.

Your MicroFreak is a USB MIDI Class Compliant device. What does that mean and why is it
important? It means you can connect it to any other MIDI Class Compliant device without
having to install drivers. When connecting to an iPad you will need and camera connection
cable or a USB to lightning cable to make the connection. Arturia has a great line of iPad
synthesizers such as the iMini, the iSem, the iProphet and the iSpark. It's worth checking
them out.

Last but not least: the MicroFreak features two paraphonic sequencers, each with four
modulation tracks. Paraphonic means that they can record and play back up to four voices,
sharing the same filter, simultaneously.

Be sure to visit the Arturia website and check for the latest firmware, download the MIDI
Control Center, and check out the tutorials and FAQs. Get ready to explore synthesis in new
ways.

Musically yours, The Arturia team.

3

Arturia - User Manual MicroFreak - Welcome and Introduction

1.1. A fascinating adventure

As soon as you start experimenting with the MicroFreak, you'll be faced with many
questions: How do I make connections, what does the Filter do, what is an Envelope
Generator?

The answers to these questions come slowly: by reading forums online, comparing user
experiences and most importantly, by diving in.

Whatever you do, take the time to get to know the MicroFreak inside out. It will help you to
avoid a situation where you sit in front of your system tweaking knobs randomly, without
understanding what's happening, but hoping that something magical will happen. This is a
certain recipe for losing interest very fast.

To sustain the fascination you feel, learn the functions of the MicroFreak one by one and test
your knowledge continuously. It's the only way to experience the reward that comes with
being able to create the sounds as you imagine them.

1.2. New in firmware (FW) 5.0.0

The Arturia team worked on a lot of new features and content for the FW 5.0.0 of your
MicroFreak, including:

• 4 sample-based oscillators [p.38]: Sample, Scan Grains, Cloud Grains, and Hit

Grains

• a Samples tab [p.107] in the MIDI Control Center

• a new preset bank, and 52 factory samples

 The new presets and samples are available in the latest version of the MIDI Control Center.

•

the expansion of the preset slots up to 512

• an optimized Utility menu [p.94]

1.3. About reading manuals

Reading manuals can be much more than familiarizing yourself with an instrument. Yes, it
is excellent for learning, but it serves another purpose that is much less understood: creating
the base for inspiration.

Inspiration can flourish when you have many little pieces of knowledge online. Having many
pieces of information available enables you to interconnect and crosslink them; it widens the
scope of your creativity. It helps to look at the current state of your knowledge as something
that needs to be maintained and expanded. Reading a manual, again and again, causes a
shift in what you absorb from it. You are building a living model of the instrument in your
brain.

Reading a manual the first time helps you to get acquainted with the parameters of an
instrument; what does a knob do and how does it affect the sound or other parameters of
the instrument? Second and third readings give you a better understanding of the structure
of an instrument/plugin. Beyond that, reading becomes a source of creative input that
inspires you to think of new ways to use the instrument.

Arturia - User Manual MicroFreak - Welcome and Introduction

4

2. INSTALLATION

2.1. Usage Precautions

The MicroFreak uses an external power adapter. Do not use any power supply or adapter
other than the one provided by Arturia. Arturia accepts no responsibility for damage caused
by use of an unauthorized power supply.

The MicroFreak has a touch capacitive keyboard. It can be used with a power bank, but for
it to be fully functional the MicroFreak must be properly grounded. It's why we recommend
that you use the three pin wall plug provided by Arturia.

Use the included adapters (1/8" TRS jack to 5-pin DIN, grey) to connect your external MIDI
devices to the MicroFreak.

When the product has Electrostatic discharges interference, the headset port may have no
sound output, and the keypad may malfunction. You need to restart the device to recover.

Prolonged RF (radio frequency) interference may interfere with the functioning of the
keypad. Restart the device to recover.

2.2. Warning

Do not place this product in a place or position where one might walk on, trip over, or
roll anything over power cords or connecting cables. The use of an extension cord is not
recommended. However if you must use one, make sure that the cord has the ability to
handle the maximum current needed by this product. Please consult a local electrician for
more information on your power requirements. This product should be used only with the
components supplied or recommended by Arturia. When used with any components, please
observe all safety markings and instructions that accompany the accessory products.

2.3. Notice

The manufacturer’s warranty does not cover service charges incurred due to a lack of
knowledge relating to how a function or feature works (when the unit is operating as
designed); reading the manual
is the owner's responsibility. Please study this manual
carefully and consult your dealer before requesting service.

5

Arturia - User Manual MicroFreak - Installation

2.4. Precautions include, but are not limited to, the
following:

• Read and understand all the instructions.

• Always follow the instructions on the instrument.

• Before cleaning the instrument, always remove the electrical plug from the
outlet, as well as the USB cable. When cleaning, use a soft and dry cloth. Do not
use gasoline, alcohol, acetone, turpentine or any other organic solutions; do not
use liquid cleaner, spray or cloth that’s too wet.

• Do not use the instrument near water or moisture, such as a bathtub, sink,
swimming pool or similar place. Do not place the instrument in an unstable
position where it might accidentally fall over.

• Do not place heavy objects on the instrument. Do not block openings or vents of
the instrument; these locations are used for ventilation to prevent the instrument
from overheating. Do not place the instrument near a heat vent or any place of
poor air circulation.

• Use only the provided AC adapter, as specified by Arturia.

• Make sure the line voltage in your location matches the input voltage specified

on the AC power adapter.

• Do not open and insert anything into the instrument, as this could cause a fire or

electrical shock.

• Do not spill any kind of liquid onto the instrument.

•

In the event of a malfunction, always take the instrument to a qualified service
center. You will invalidate your warranty if you open and remove the cover, and
improper testing may cause electrical shock or other malfunctions.

• Do not use the instrument when thunder and lightning are present.

• Do not expose the instrument to hot sunlight.

• Do not use the instrument when there is a gas leak nearby.

• Arturia is not responsible for any damage or data loss caused by improper

operations to the instrument.

• Arturia recommends the use of shielded and less than 3 meters long cables for

Audio, and ferrite equipped CV/Gate cables.

2.5. Register your Instrument

Registering your instrument establishes your legal ownership, which entitles you to access
the Arturia Technical Support service, and to be informed of updates. Additionally, you
can subscribe to the Arturia newsletter to be informed of Arturia-related news as well
as promotional offers. Connect to your Arturia account, go to the section “My Registered
Products”, and add the MicroFreak synthesizer by entering its serial number, as printed on
the sticker located under the machine.

Arturia - User Manual MicroFreak - Installation

6

2.6. Connecting the MicroFreak to the World

Always power-off all audio gear before making any connections. Failing to do so may
damage your speakers,
the MicroFreak synthesizer, or other audio equipment. After
completing all connections, set all levels to zero. Power-on the various devices, with audio
amplifier or monitoring system last, then raise the volumes to a comfortable listening level.

Here is an overview of the MicroFreak synthesizer’s connectors:

Purpose

Audio output

Headphones

Connector type

6.35 mm (1/4'') TS or symmetrised TRS output

3.5 mm (1/8") TRS jack (signal is mono)

MIDI input & output

1/8" TRS jack (see note below)

USB

Power

Standard USB type B

DC input: internal 2.1 mm, external 5.5 mm

 Please use the included adapter (1/8" TRS jack to 5-pin DIN, grey) to connect your external MIDI

devices to the MicroFreak

7

Arturia - User Manual MicroFreak - Installation

2.7. Get the Latest Firmware

MicroFreak's latest firmware adds many useful and fun new features that we've listed in the
New in firmware (FW) 5.0.0 section [p.4]. To get the full MicroFreak experience, ensure you
have the latest firmware version.

1. Navigate in your browser to the Arturia Downloads and Manuals page.

2. In the sidebar, find MIDI Control Center. Download and install the latest version for

macOS or Windows.

3. In the same sidebar, find MicroFreak and download the latest firmware.

4. With your MicroFreak connected via USB and powered on, launch MIDI Control Center.

5. Select “MicroFreak” from the DEVICE menu in the upper left corner.

6. Below this is a button that says “Firmware Revision.” Click it to bring up the following

dialogue:

7. Click “Upgrade” to bring up an OS-level dialogue. Locate and select the firmware file you

downloaded.

 Do not turn knobs on the MicroFreak, power it off, or disconnect the USB cable while the firmware

update is in progress.

Arturia - User Manual MicroFreak - Installation

8

3. MICROFREAK OVERVIEW

You're probably anxious to start exploring your MicroFreak, so in this chapter, we'll guide you
through the front panel and explain what the knobs on the front panel do. If you are new to
synthesis, it may help to read the chapters about the Digital Oscillator [p.36], the Filter [p.53]
and the Envelope Generator [p.60]. These are the basic building blocks of synthesis.

3.1. Front panel overview

The first thing you'll notice about the MicroFreak is how small and compact it is.

3.1.1. Top Row

Top Row

3.1.1.1. The Matrix

The matrix

The Modulation Matrix is an electronic patchbay that routes MicroFreak modulation sources
to modulation destinations. When turning the white matrix modulation knob, the connection
indicator LED moves to different patch points. Once you've reached the last point on the last
row, then the LED cycles back to the first point of the matrix, which makes it easier to jump
to your destination point.

Think of this as a grid of patch cords, each with an attenuator that allows for positive or
negative modulation. Every parameter that it would make sense to modulate - pretty much
anything with a knob - can be a destination.

• The modulation sources are in rows 1 to 5, and destinations are in columns 1 to 7.

• Destinations 1 to 4 are hardwired, and destinations 5, 6, and 7 are freely

assignable.

Next to the matrix, you see the Matrix encoder, which enables you to select a connection
point and when clicked, set the modulation amount for a connection.

9

Arturia - User Manual MicroFreak - MicroFreak Overview

3.1.1.2. Paraphonic

The MicroFreak is a paraphonic four-voice synthesizer. You can trigger the voices
independently when this knob is lit. Their sound will be similar as they all share the same
analog filter. The amplitude (volume) of each voice can be different on the MicroFreak,
which is not possible on most paraphonic synthesizers. You might call the MicroFreak
invisible VCA
paraphony a form of extended paraphony. The MicroFreak has internal,
envelopes that shape the volume of the individual voices together with the Main Envelope.
These internal voice envelopes also are available on the matrix when you choose a
polyphonic destination, such as the Oscillator parameters.

Some of the sources in the MicroFreak are capable of generating signals polyphonically:
the Main Envelope, Pressure, the Keyboard, and the Arpeggiator. When you apply these
polyphonic sources to polyphonic destinations such as the Oscillator parameters (Type,
Wave, Timbre and Shape) each voice receives its own modulation.

Selecting paraphonic
mode

3.1.1.3. Panel Select

Panel mode is the mode to use if you are looking to get 1:1 feedback of parameters and the
sound you are editing. After loading a preset, what you’ll hear is the sound of the preset as
is was stored in memory along with its knob positions. These knob positions will differ from
the current knob positions on the panel.

The purpose of the Panel button is to make certain that the sound you hear matches the
current knob positions on the panel. When you press it, the current knob positions will
be applied to the preset. You can now continue to edit the preset knowing that the knob
positions match with the sound you hear.

Panel Select

Arturia - User Manual MicroFreak - MicroFreak Overview

10

3.1.1.4. The Display and the Preset encoder

The Preset manager

The low-power OLED display is a constant source of information. It will display valuable
information about the knobs you turn and the buttons you push.

The Preset Encoder next to the display enables you to browse through the MicroFreak
presets. It will display the name of the preset and its category.

FW 5.0.0 comes with a bank of 64 new presets that can be loaded from the MCC. The
number of slots in MicroFreak increased from 384 to 512 to accomodate those new factory
presets and your own.

When empty, a preset's default name is "Init", and its default category is "Bass".

 By default the Factory settings are protected against overwrite. To change this go to Utility>Misc>Mem

Protect and select one of the three available options.

3.1.1.5. Save

Saving your work every now and then helps to keep you mentally sane.

Saving Presets

The "Save" button allows you to do so. It involves several steps that we've outlined in the
Presets chapter [p.24].

 You can't save when you're in Utility mode. First deactivate Utility and then proceed with saving your

Preset.

11

Arturia - User Manual MicroFreak - MicroFreak Overview

3.1.1.6. Utility

Access to the Utility
settings

In Utility you change the Global settings of your MicroFreak and some settings specific for
each preset: the Preset Volume, the Bend Range, Pressure mode, and many other settings.

3.1.1.7. Master Volume

The Master volume sets the Global volume of your MicroFreak. If you need one preset to
be louder than another you can set its relative volume in Utility: select Utility>Preset>Preset
volume.

The Volume knob

Master Volume affects both the line level and the headphone level of your MicroFreak.

Arturia - User Manual MicroFreak - MicroFreak Overview

12

3.1.2. Middle Row

Middle row of the MicroFreak

3.1.2.1. Keyboard glide

Glide is a musical tool that enables you to make gradual pitch changes. When you go from
one key to the next on the keyboard, the pitch changes are abrupt. Glide smoothens the
transition. This knob enables you to set a glide amount.

The Glide knob

The value you select with the Glide knob sets the time for the pitch to glide from one note/
pitch to another. With this knob fully counter-clockwise, there is no glide, and the pitch
transitions are instant. Turning this knob clockwise increases the glide effect. For a more
detailed explanation of Glide refer to chapter 10 [p.68].

3.1.2.2. Digital oscillator

The Digital Oscillator is the heart of the MicroFreak. It's a digital circuit that generates the
core sound of this instrument.

The Digital Oscillator

The other parts of the MicroFreak - the Analog Filter, the Envelopes, and the LFO - exist only
to shape/mangle/wobble the sound of Digital Oscillator. The Type, Wave, Timbre, and Shape
knobs enable you to control the actual parameters of the Digital Oscillator [p.36] itself.

13

Arturia - User Manual MicroFreak - MicroFreak Overview

3.1.2.3. Analog filter

The Analog Filter enables you to emphasize or suppress the harmonics contained in the
sound of the Digital Oscillator. Simply put, the filter changes the timbre of the oscillator.

The Analog Filter

The Analog Filter [p.53] is like a magnifying glass that reveals everything that is present in
the sound of the Digital Oscillator. Or to use a better analogy; it is a searchlight that moves
over the waveform generated by the Digital Oscillator, dynamically revealing its harmonic
content. It can sweep over the sound with a broad beam or with a very focused, narrow
beam. The focus of this beam is called Resonance. The point where the filtering becomes
effective is called the cutoff point.

The are three types of filters in the MicroFreak: a Low Pass Filter (LPF), a Band Pass Filter
(BPF), and a High Pass Filter (HPF). The Low Pass Filter attenuates (weakens) or removes
frequencies above the cutoff frequency. The Band Pass Filter attenuates (weakens) or
removes frequencies above and below the cutoff frequency. The High Pass Filter attenuates
(weakens) or removes frequencies below the cutoff frequency.

3.1.2.4. Cycling Envelope

The Cycling Envelope Generator is an excellent tool for generating complex modulation
signals. An envelope is often used to control the loudness of a sound, but it can be used
for many other purposes. The Cycling Envelope is a general purpose envelope, the output of
which you can use to modulate all destinations on the Matrix.

The Cycling Envelope Generator

Unlike a standard envelope that cycles through its stages only once, the Cycling Envelope
[p.62] can retrigger itself after the last stage has finished.

Arturia - User Manual MicroFreak - MicroFreak Overview

14

3.1.3. Bottom Row

Bottom row of the MicroFreak

3.1.3.1. Octave select

Octave select

Enables you to select the active octave range for the keyboard.

3.1.3.2. Shift

The shift button

Holding Shift allows you to change a number of functions, some are printed in blue on the
panel, others are more hidden. For a complete overview please refer to Appendix C: Cheat
sheet [p.139].

• Toggle between Arp / Seq (activates either the Arpeggiator or the Sequencer)

• Set a swing rate

• Control the shape of the Attack stage of the Cycling Envelope

• Control the shape of the Fall stage of the Cycling Envelope

In addition you can use Shift to transpose sequences, reload them or copy an Arpeggio to a
sequence. Please refer to chapter 12 [p.75] and chapter 13 [p.81] for details.

15

Arturia - User Manual MicroFreak - MicroFreak Overview

3.1.3.3. ARP/Seq (Arpeggiator/Sequencer)

The Arpeggiator generates notes based on the keys you have pressed and plays them back
according to the settings of the Pattern buttons and the Oct ❙ Mod range button.

The Arpeggiator and the Sequencers

The Sequencer [p.81] and the Arpeggiator [p.75] share several features. We will focus on those
features in later chapters.

Arp | Seq lets you toggle between the Arpeggiator or the Sequencer.

Oct | Mod sets the range for the Arpeggiator. When the Sequencer is active, it enables you to
select one of four sequencer modulation tracks.

The Rate knob sets the BPM (speed). When you press it, the Sync LED will light up to indicate
that Sync is activated. The Rate knob modifies the Time Division, based on the previously set
BPM (1/4th, 1/8th, ...)

Arturia - User Manual MicroFreak - MicroFreak Overview

16

3.1.3.4. LFO

An LFO is a low-frequency oscillator that can produce various waveforms at sub-audio
frequencies (0.05Hz up to 100Hz). The MicroFreak provides one LFO with six waveforms.

The LFO

You select a waveform with the Shape button: sine, triangle, rising sawtooth, square, random
stepped (also referred to as sample & hold), and random gliding (or smoothed random).

• Sine rises and falls between its minimum and maximum values

• Triangle rises and falls in more of a linear way between its minimum and

maximum values

• Sawtooth rises linearly to its maximum value and then drops suddenly to its

minimum value

• Square rises and falls suddenly between its minimum and maximum values

• Random stepped rises and falls suddenly between values that are generated at

random

• Random gliding rises and falls gradually between values that are generated at

random

The Rate control knob doubles as a Sync switch. When you press it, the Sync LED will light
up to indicate that LFO Sync is activated. In synced mode the LFO rate is slaved to the
Sequencer/Arpeggiator tempo clock (Seq). In unsynced mode the LFO rate depends solely
on the Rate knob setting.

3.1.3.5. The General Envelope Generator

The Envelope Generator is one of the basic building blocks of MicroFreak. It enables you
to shape the overall loudness of a tone or the timbre of a sound. It's a sound sculpting
tool. It can be patched to all destinations on the Matrix, including the destinations you
create yourself. The first three knobs - Attack, Decay/Release, and Sustain - affect the Filter
by default. The last knob, Filter Amt, enables you to set the amount by which the Filter
will be affected by the Envelope. Their functions are described extensively in the Envelope
Generator [p.60] chapter.

The Envelope Generator

When the Amp Mod switch is active, the Envelope will also affect the loudness of the VCA
and thus shape the overall loudness of the MicroFreak.

17

Arturia - User Manual MicroFreak - MicroFreak Overview

3.1.3.6. Keyboard section

The keyboard section consists of the keyboard and an Icon Strip with access to the
Arpeggiator and Sequencer controls, and a touch strip with a Bend icon and two Spice and
Dice icons that enable you to create variations on the Sequencer and Arpeggiator patterns.

The keyboard of the MicroFreak is touch capacitive and has 25 keys. When played the keys
generate gate, a pitch, and pressure. It covers a two-octave range, which can be extended
using the Octave Down/Up buttons.

 There's a setting in Utility [p.93] that allows you to select whether the keyboard generates pressure

or velocity.

The Keyboard

Depending on the settings in Utility or the MIDI Control Center, the keyboard provides either
aftertouch or velocity control. It can also be used as a fully polyphonic MIDI controller for
other devices via the USB and MIDI out connectors on the rear panel.

3.1.3.7. The Icon strip

Right above the keyboard, you'll see a strip with eight mysterious-looking icons.

Using these icons, you can access the most
its
Arpeggiator, Pattern Generator, Sequencer, and the three live controls: Spice, Dice, and Bend.

intriguing parts of the MicroFreak;

The icon strip

The Spice and Dice icons enable you to create variations on the sequencer and arpeggio
pattern. You can only hear their effect when a sequencer or the arpeggiator is active.

Dice acts on the gates and triggers of the currently playing arpeggio or sequence.

Spice & Dice

Spice sets the amount of variety. For detailed info about the Icon strip refer to the Keyboard
[p.66] chapter. How to use the Arpeggiator and the Sequencer is explained in chapters 12
[p.75] and 13 [p.81].

Arturia - User Manual MicroFreak - MicroFreak Overview

18

3.2. Rear Panel Overview

Rear Panel Overview

3.2.1. Audio outputs

The headphone output is a standard 3.5 mm (1/8-inch) TS or TRS jack. The output of the
MicroFreak is monaural. Connecting stereo headphones will merely provide the identical
sound on the left and right sides (i.e., mono).

Audio output

The headphone output will also accept
the custom microphone that comes with the
MicroFreak Vocoder Edition [p.128]. You can also use it as an audio input on a standard
MicroFreak by using a device with a TRRS plug, such as a gaming headset with integrated
mic.

 ! To remove the microphone from the MicroFreak, pull it out at a straight angle from the headphone

output to avoid damage. Remove the microphone before storing or transporting the MicroFreak.

For more details on the above, see Connecting external sources [p.135] in Chapter 19.

The Line output is a 6.35 mm (1/4-inch) TRS jack. Its output is monaural. Use this output to
connect to your amplifier or mixer. Line out is symmetrical/balanced type output. This is a
symmetrised TRS jack, connecting a TRS jack will improve the signal-to-noise ratio.

19

Arturia - User Manual MicroFreak - MicroFreak Overview

3.2.2. Pitch/Gate/Pressure outputs

These are typically used together to send electrical signals to an external device such as
Arturia’s powerhouse monophonic analog synthesizers (MatrixBrute, MiniBrute/SE, and the
MicroBrute) or a Eurorack modular system.

CV, Gate and Pressure
outputs

The CV output sends a control voltage you can use to control external oscillators. Gate can
trigger external devices. Pressure generates either a pressure voltage or a velocity voltage
depending on the settings in Utility [p.93]: Utility>Preset>Press mode.

3.2.3. Clock input/output

You can use Clock input/output to sync the MicroFreak to external synthesizers or modular
systems.

Clock input and output

 ♪: The use of a TRS jack provides both clock and start signals. A TS jack provides only clock signals.

3.2.4. MIDI input/output

MIDI input and output

Use the included MIDI adapters (1/8" TRS jack to 5-pin DIN, gray) to send and receive
controller data and MIDI data to/from external MIDI-compatible devices.

Arturia - User Manual MicroFreak - MicroFreak Overview

20

3.2.5. USB/DC IN

This connector provides the power and data connections to a computer. It can also be used
with a standard USB mobile phone charger (5V, 500mA), allowing you to use your controller
presets and sequences even without a computer present.

The USB connector

The USB port is also used to connect the MicroFreak to Arturia's MIDI Control Center. This
software enables you to configure various settings, update the firmware of the MicroFreak
and to manage your presets.

3.2.6. Power switch

If you want to turn the unit off without disconnecting the USB cable, use this recessed
switch. The power switch toggles between OFF and USB power / DC power. When both are
connected, DC is used. If you plug in DC power the MicroFreak will reset.

The On/Off switch

 The power requirements of the MicroFreak are so low that you can power it with the same power

bank you use to recharge your phone or tablet when you're in a place without power outlets.

21

Arturia - User Manual MicroFreak - MicroFreak Overview

3.2.7. Power Connector

The power connector connects the MicroFreak to the mains outlet. Please only use the Power
Supply provided by Arturia.

The power connector

It was designed specifically to provide the ground needed for the capacitive keyboard to
operate properly.

3.3. Signal Flow

Working with the MicroFreak becomes a lot easier when you understand how signals flow
in the machine.

The Digital Oscillator generates a waveform, which is then sent to the Filter and an analog
VCA. The main Envelope is hardwired (a fixed connection) with the VCA. When you press
the "Amp Mod" button the main envelope controls the internal analog VCA. When off, the
keyboard Gate signal controls the VCA.

The signal flow of the MicroFreak

In Paraphonic mode with Amp Mod ON the envelope is duplicated several times depending
on the number of voices you have specified in Utility. These envelopes control a number of
internal digital VCAs that only become active in Paraphonic mode.

The main envelope is also hardwired to control the Filter cutoff frequency by means of
the Filter Amount knob. As soon as you turn the Filter Amount knob you'll notice that the
"envelope to filter" connection point on the Matrix lights up.

Arturia - User Manual MicroFreak - MicroFreak Overview

22

4. THE MICROFREAK PRESETS

We at Arturia invite to create your own presets. There are so many fantastic sounding
synths these days with an overwhelming number of presets that it is easy to get lost in
an endless search for the magic sound. In the end, the best sound preset is the one you
create yourself, because only you know what sort of sound you're after. And as a bonus,
you teach yourself the skills you need to create sounds that match your sonic ideal. So....let's
get started!

4.1. Loading Presets

Turn the Preset encoder to load a preset. To get started you can select one of the 128 factory
presets. However, you may want to keep those intact if you have limited experience with the
MicroFreak or with music synthesis in general. In that case, select one of the presets in the
range 129 to 512 to save your sounds.

The Preset encoder

 Presets in the range 129-512 are template presets, you can use them as a starting point to create

specific categories of sounds. If you have created a particularly interesting preset you can also save as

a template to be used for further exploration.

You can now tweak the preset to give it your flavor. If you like what you hear, remember to
save it.

 Warning!: If you turn the encoder to load another preset, you'll lose the changes you made to the

original Preset. So use the encoder with care: by default, switching presets clears any modifications

done on the previously loaded preset, without a warning message. If you don't like this behavior, you

can change a setting in Utility called "Click to Load". With that setting ON you can scroll through presets

without losing the modifications of the preset you are currently working on. It's only when you click the

encoder that the new preset will load and your modifications saved. Press Utility>Global>Controls>Click

to Load to change this setting.

There's a nifty trick that enables you to reset the content of the current sound quickly: press
the preset encoder quickly three times in a row. This will reset the current sound to its initial
empty state. This is also an excellent way to clear existing presets.

 Please note that this doesn't change the preset, unless you proceed with a "Save" action.

23

Arturia - User Manual MicroFreak - The MicroFreak Presets

4.2. Saving Presets

You probably know what it is like to ruin a brilliant patch with one wrong decision and to
discover that you can't go back to that moment because you forgot to save your patch.
That's why we've put the Save button right next to the browsing encoder. Press the Save
button to enter "save" mode. Once in save mode, you can:

•

save your preset to the current slot or to a different location

• modify preset category

•

rename your preset

 At this stage you can still change you mind about saving the preset. When you press "Save" once

more, the Save process will be aborted and the screen will flash the message "Save Cancelled". If you

just want to save the changes you made to preset in the current location long press "save" to store your

changes. The display will respond with "Preset saved"

If you want to save it to a different location turn the encoder to select a location and press
the encoder to select the new location. The display will respond with "Click to save": you can
now select a category by turning the Encoder. You can change the category to any of the
eleven available types: bass, brass, keys, lead, organ, pad, percussion, sequence, sfx, strings
and template.

Click once more after selecting the Category and dial in a name for the preset. The Save
button will now blink to indicate that you're in the final stage of the save process.

Turning the encoder will guide you through the alphabet, first in Upper case then in Lower
case and finally through the numbers 0 to 9. To enter a space turn the encoder all the way
to the left.

 To edit a character in an existing name push+turn the preset encoder. To quickly scroll through the

characters options hold [shift] and turn the encoder.

Click to make a letter selection final; this brings you to the next field in the name where you
can repeat your selection until you have a complete preset name. Now press "Save" to save
the preset with its new name.

When you save your patch to a preset location, everything related to that preset gets saved:

•

•

•

the position of the knobs

sequences and the modulation tracks

the configuration changes you made in Utility that are specific for this preset
(Utility>Preset)

Clever use of the "save" option is important if you want to create a song structure; save
several presets that make up the song, assign them to consecutive slots in the MIDI Control
Center, and load the newly sorted presets back into the MicroFreak.

The "Template" category is intended as an in between category where you can store
particularly interesting presets that you want
to explore further. By storing them as
"template" you create a reminder to yourself. You can then use the template as a starting
point and save variations of the preset in other slots.

On startup the MicroFreak will load the most recently saved preset.

Arturia - User Manual MicroFreak - The MicroFreak Presets

24

 The Chord settings and the last used chord will be saved with the preset. Spice & Dice settings are

not saved with a preset.

 If you see a message saying "Memory protect is on", select Utility>Misc>Mem Protect and set it to

OFF.

4.3. Tweaking the Preset Configurations

In Utility, you'll find settings that you can use to change the standard configuration of the
current preset. These settings are saved with the preset. That means that each preset can be
made to behave uniquely; one preset can be paraphonic, respond to pressure, and have a
sequence length of five; another sequence can be monophonic and have a sequence length
of 32.

 The two sequences that are part of each preset will always have the same length.

Changing these settings can make all
the difference. For example, you've created a
sequence and used one of the modulation tracks to add a varying amount of glide to some
of the steps. By changing some of the Utility>Preset settings, you can explore alternative
options:

• What difference does it make when I change the Glide setting from Time to

Rate? Utility > Preset > Glide Mode

• Does Resetting the Envelope make the sequence snappier? Utility > Preset >

Envelope reset

• Will changing the sequence smooth settings create a different mood? Utility >

Preset > Seq (1-4) smooth

25

Arturia - User Manual MicroFreak - The MicroFreak Presets

The following parameters are saved with the Preset:

 The last two columns show whether the parameter can be edited in Utility and/or the MIDI Control

Center.

With x = available, and 0 = not available.

Category

Parameter

Description

Utility

MCC

Voice

Bend Range [0

… 24]

Glide

[Time,

Rate]

mode

Sync,

Unison Spread

[0.001-12.000]

Unison

Count

[2-4]

From zero to two octaves

Defines whether the Glide knob introduces a time-based ,

a time synced or a rate-based glide effect

Defines amount of spread between the four voices

X

X

X

Defines number of voices that will be part of unison mode

X

0

0

0

0

Category

Parameter

Description

Utility

MCC

Modulations

Envelope Legato

[OFF, ON]

Envelope

Snap

[OFF, ON]

Envelope resets on keyboard trigger

Creates a sharper decay on the Envelope

LFO retrig [OFF,

Retrigger mode: retrig off, retrig when receiving

ON, Legato]

keyboard trigger, no trig when playing legato

Press

mode

[Aftertouch,

Velocity]

Selects Pressure mode

Key/Arp

Mode

Generates a new random value for each key pressed

[Linear, Random]

when Random is selected

Velo Amp Mod [0

… 10]

Determines how velocity will affect volume output

X

X

X

X

X

X

0

0

0

0

0

0

Category

Parameter

Description

Utility

MCC

Preset Volume

Preset Volume [-12 to +12]

Relative preset volume

X

0

Arturia - User Manual MicroFreak - The MicroFreak Presets

26

Category

Parameter

Description

Utility

MCC

Scale

Scale

Scale

select:

global,

off, major, minor,

harmominor,

dorian,mixolydian, blues, penta

Root Note

Root select: C, C#, D, D#, E, F, F#, G, G#, A, A#, B

X

X

0

0

Category

Parameter

Description

Utility

MCC

Seq/Arp

Seq Length [4 … 64]

Sets sequence length

Default gate length [5 …

Default

length is 45. Sets default sequencer/

85]

arpeggio gate

Seq 1 smooth [OFF, ON]

Sets sequence smoothing for sequencer MOD

track 1

Seq 2 smooth [OFF,

Sets sequence smoothing for sequencer MOD

ON]

track 2

Seq 3 smooth [OFF,

Sets sequence smoothing for sequencer MOD

ON]

track 3

Seq 4 smooth [OFF,

Sets sequence smoothing for sequencer MOD

ON]

track 4

X

X

X

X

X

X

0

0

0

0

0

0

Category

Parameter

Description

Utility

MCC

Vocoder

Vocoder Hiss Mode [Off,

Determines if the hiss is heard or not when

Switched, Pass]

using the vocoder

Vocoder Hiss Volume [-20 to

Sets the volume of the hiss when using the

0]

vocoder

X

X

0

0

27

Arturia - User Manual MicroFreak - The MicroFreak Presets

4.4. Panel

The purpose of the Panel button is to be certain that the sound you hear matches the current
knob positions on the panel. When you press it, the current knob positions will be applied to
the preset. You’ll now hear the preset as it sounds with the current knob positions and can
continue to edit the preset knowing that the knob positions match with the sound you hear.

After loading a preset, what you’ll hear is the sound of the preset as is was stored in
memory along with its knob positions. These knob positions will differ from the current knob
positions on the panel. This can be confusing because the current positions of the knobs do
not correspond to what you hear. In performance circumstances this is fine because you
have no immediate need to change the sound.

If you do want to edit the preset there are two things you can do:

You can tweak knobs individually; each knob you move becomes part of the preset until
eventually, all knob positions have a one-on-one relation with the sound you hear. Or, you
can press the Panel button to copy all knob positions to reinitialize the preset with the current
knob positions.

To give an example of updating a single knob:

You’ve loaded a preset with a slow attack, but want to change the attack to make it snappier.
As soon as you turn the attack knob its position becomes part of the current preset.

How this will happen depends on the Knob catch setting in Utility>browsing>knob catch.
These settings determine how the stored preset value of this knob is going to match its panel
position, it can jump, hook to the current position or gradually match the Panel position.

The second, much faster way is to press the Panel button once. This will copy the current
knob positions to the preset. The preset will now suddenly sound different, but all knob
positions now have a one-on-one relationship with the sound you’re hearing.

You can only use the Panel button once: after you’ve loaded a preset. Once you press it, it
does its magic, matches knobs and Panel settings and then has no further use until you load
another preset and want to repeat its magic.

The Panel button

Arturia - User Manual MicroFreak - The MicroFreak Presets

28

4.5. Understanding Digitally-Controlled Analog

Unlike analog synths, every module in the MicroFreak is controlled digitally, even its analog
filter. It's the best of both worlds: the warmth and hands-on control of real analog, with the
ability to save and recall patches and settings.

Because of that, the instrument's knobs and sliders aren't controlling voltages directly; they
are knobs that instruct the digital circuitry how to manage the analog voltages and the
parameters of the digital modules. A consequence of this is that the knob positions you see
on the panel don't necessarily reflect the actual settings after you load a Preset sound.

The MIDI Control Center software, therefore, offers three methods to match the physical
knob position with the digital value it represents: in Hook mode, you must sweep the knob
until it catches its actual position before it has any effect. Jump mode means the voltage
jumps to the knob position as soon as you move it, and Scaled mode scales the range of the
knob based on the stored value and the physical distance to either extreme.

Summary: The knobs and sliders don't necessarily reflect the underlying settings. There are
some different behavior settings in the MIDI Control Center, but in the default mode, you
must sweep the knob past its actual setting to "hook" it. The Panel button mentioned above
will bypass the current preset and give you a sound based on the actual positions of the
knobs and sliders.

 ♪ Freaky idea: To create a song structure, save several presets that make up the song, assign them to

consecutive slots in the MIDI Control Center, and load the newly sorted presets back into the MicroFreak.

29

Arturia - User Manual MicroFreak - The MicroFreak Presets

5. MAKING CONNECTIONS

5.1. Control Signals

The Matrix is the place where you connect the control signals from the various modules
on the MicroFreak together. Control signals differ from audio signals in that they are much
slower and are uniquely suited for control.

The MicroFreak Matrix

Control signals are slowly moving waves, usually in the range from zero to 100 Hz, that
can be used to modulate the digital oscillator, the analog filter, and other destinations in the
MicroFreak. When you apply a control signal you can decide to only use a certain amount
of it; using the Matrix encoder you can dial-in any amount from -100% to +100%.

A number of modules on the MicroFreak are dedicated to generating Control signals. Each
does that in a specific manner:

• The LFO creates slow, regular waves. When you connect an LFO to an oscillator
you will hear the pitch of the oscillator going up and down. The LFO is capable
of generating frequencies up to 100 Hz.

• An envelope creates a single wave that peaks and then gradually diminishes and
dies. When you connect an envelope to the pitch input of the oscillator, you will
hear a sudden rise in pitch followed by a slow descent. The Cycling Envelope can
be set to repeat. In this mode it becomes a second LFO, capable of generating
complex modulation signals.

A special case is a gate signal. A Gate is a signal rising at Note On, and falling at Note Off.
It is useful to start an envelope. The keyboard of the MicroFreak generates gate signals that
start the envelope of the MicroFreak.

To summarize:

There are three kinds of Control Signals: triggers, gates and waves.

• Triggers are very short signal spikes. They are used to start an envelope

generator, an LFO, or a sequencer. Clocks generate triggers…

• A gate is somewhat longer: its purpose is to keep something going, like the hold
stage of an envelope generator. Keyboards generate a gate when you press and
hold a key.

• A waveform is a signal that can have any duration; it usually cycles from high
to low and vice versa. On the MicroFreak the LFO and the two envelopes create
slow waveforms.

Control signals are to a MicroFreak sound designer/performer what color and line are to a
painter.

Arturia - User Manual MicroFreak - Making Connections

30

As you become more knowledgeable about the MicroFreak you will be able to create and
route more and more complex control signals. Your ability to create complex control signals
is what makes you unique as an analog performer/composer. MicroFreak will offer you
plenty of opportunities to create a personal style.

Note for advanced users: On an analog synthesizer or modular system all modulation
is done using Control Voltages. In mostly digital synthesizers such as the MicroFreak all
modulation is done using digital signals that mimic the behavior of analog Control Voltages.
In this manual we therefore use the term Control Signal when discussing modulation. If
your background is in the analog world you're welcome to substitute "Voltage" for "Signal"
whenever you read it.

5.2. The Matrix and its encoder

The Matrix is the place where you link all these signals together.

Classic synthesizers are great, but many have a major drawback: a fixed signal flow. As
a rule, sounds are generated by an Oscillator, then continue to a Filter where it can be
shaped further, and at the end of the chain there is a VCA, a voltage controlled amplifier
that amplifies the sound. The MicroFreak is no exception here, but there is one major
difference: The Matrix enables you to break the standard connections and create new ones
that override these connections.

The thing that makes a synthesizer flexible is the ability to route the modulation signals
(Triggers, Gates, LFO Waves, and Envelopes) to the modules that shape the sound (the
Digital Oscillator and the Filter).

The Matrix is the main switchboard where you make and break these connections. It is the
key to unlocking the timbral secrets of the MicroFreak. Mastering the Matrix will help you to
create sounds that fit your musical taste.

The Matrix consists of two parts: the switchboard and the encoder. You use the encoder to
select and create connections and to set the amount of modulation that will flow through
the connection link.

The Matrix and its Encoder

To select a point on the Matrix where you connect a source to a destination, turn the encoder
until you are at the right position and press the encoder. You can scroll forward or backward;
at the end of the Matrix it cycles back to the beginning.

At any moment the Matrix gives you feedback about the connections you have made:

• LED OFF = no routing is made OR the amount is set at 0

• LED ON = routing is made between the two objects

• LED blinking = you have selected a routing and are editing its modulation

strength

31

Arturia - User Manual MicroFreak - Making Connections

The display is a second source of information: when turning the encoder to select a point,
the display will show information about the connection you can make at that point and the
current level of modulation intensity.

When you press the encoder you switch to edit mode. Now you can set the amount of
modulation, and the colors of the display will invert: from white on black to black on white.
Also, all LEDs on the Matrix will turn off and only the LED of the connection you are editing
will be lit. When changing the modulation amount you'll hear its effect immediately.

In addition to being a place where you route signals, the Matrix also serves as a mixer. You
could for example control the pitch of the oscillator with the Key/Arp source and with the
LFO. The two modulations are added together. If you select rectangle as the LFO waveform,
your sequence will transpose up and down with the Rate you've set for the LFO.

Setting any modulation routing to a zero value will disable the LED and the Matrix will show
it as not connected.

To clear a Matrix point and reset its modulation intensity to zero, hold and press the encoder
for a minimum of 0.5 second.

To summarize:

1. To create a routing, turn the encoder.

2. To select a point:

◦ Press the encoder
◦ This will change the screen to show MATRIX AMOUNT
◦ The amount value in the screen will highlight
◦ Turn the encoder to set a positive or negative modulation amount.

3. To disable a routing and reset its modulation amount:

◦ Turn the encoder to select the routing you want to clear
◦ Press and hold the Matrix encoder for a minimum of 0.5 seconds or

set the value to zero manually.

5.2.1. Sources and Destinations

The Matrix has 35 patch points. When you activate a point on the matrix you connect a
source with a destination. The five sources are on the left and the seven destinations are in
the top row.

The sources are:

Source

Description

CycEnv

Output of the Cycling Envelope Generator

ENV

LFO

Output of the Envelope Generator

Output of the Low-Frequency Oscillator

PRESSURE

Pressure output (either pressure or velocity depending on the setting in Utility)

KEY / ARP

The combined output of the keyboard, arpeggiator and sequencer

The first four destinations are Pitch, Wave, Timbre, and Cutoff.

Pitch, Wave, and Timbre are modulators that enable you to modify the sound of the Digital
Oscillator, the basic sound source of MicroFreak. Cutoff modulates the cutoff frequency of
the Filter. Sound generated by the Digital Oscillator will pass through the Analog Filter, which
enables you to remove or emphasize certain frequencies within the sound. More on that in
The Filter chapter [p.53].

Arturia - User Manual MicroFreak - Making Connections

32

5.2.2. Assigning destinations

The final three destinations (Assign1, Assign2 and Assign3) are a special case; we've left
it to you to define destinations for them. This option is one of the things that makes the
MicroFreak unique. We introduced this feature on the MatrixBrute, the older brother of the
MicroFreak. We've since then learned how powerful this feature is.

The fixed destinations on the Matrix can only cover a small number of possible destinations
on the MicroFreak. With the assignable destinations you can turn (almost) every knob on the
MicroFreak into a destination for modulation control.

 The exceptions are: Master Volume and the Preset Encoder. It is also not possible to assign SHIFT +

Knob parameters such as Cycling Envelope shapes. Neither can you assign control buttons (Shift, Amp

MOD LFO Shape) or Icon buttons (Spice, Dice, etc.)

An example:

You want to modulate the Shape of an oscillator with the LFO. Wave and Timbre are already
fixed destinations on the Matrix; Shape is not. To add Shape as a destination select the LFO-
Assign1 crossing on the Matrix using the encoder. The LED will blink on that position. Now
press the encoder to enter edit mode. Hold the Assign1 button (located above the Assign1
text) and turn the shape knob. The Screen will now confirm that you have set the destination
to parameter 3 of the oscillator, which happens to be Shape. You can now set the modulation
amount. Press the encoder once more to leave edit mode.

A nifty alternative lets you assign all destinations in a column simultaneously:

• hold one of the Assign buttons (Assign 1-3)

• move the knob you want to assign

All points in the Matrix column you selected are now assigned to the knob you moved. You
can now proceed to set amounts for each of the sources in this column.

Possible modulation destinations:

Parameter

Glide

Description

modulates Glide amount

Oscillator Type

modulates oscillator type

Sample

modulates the sample slot index

Oscillator Wave

modulates the wave of the currently selected oscillator

Oscillator Timbre

modulates the timbre of the currently selected oscillator

Oscillator Shape

modulates the shape of the currently selected oscillator

Filter Cutoff

modulates the cutoff frequency of the Filter

Filter Resonance

modulates the bandwidth of the Filter

Envelope ATTACK

modulates the attack stage of the Standard envelope

Envelope DECAY

modulates the decay stage of the Standard envelope

Envelope SUSTAIN

modulates the sustain stage of the Standard envelope

Envelope FILTER AMOUNT

modulates the amount of signal send from Envelope to AMP

33

Arturia - User Manual MicroFreak - Making Connections

Parameter

LFO RATE

Description

modulates LFO rate

Arp&Seq RATE

modulates Arp&Seq RATE

CYCLING Envelope RISE

modulates the rise stage of the Cycling Envelope

CYCLING Envelope FALL

modulates the fall stage of the Cycling Envelope

CYCLING Envelope HOLD

modulates the hold stage of the Cycling Envelope

CYCLING Envelope AMOUNT

amount of CycEnv send to the Matrix

Matrix Modulation Amount

Sets the modulation amount of a Matrix point

 Starting from FW 5.0.0 of the MicroFreak, you can assign Sample. To do so, enter the Sample select

menu [p.50], press one of the three Assign button, and turn the Type knob. The screen below should be

displayed.

Matrix Modulation Amount deserves a bit more explanation:

Once you've setup a modulation point in the Matrix you can modulate the intensity of
the modulation happening at the point with another source. Yes, you're modulating a
modulation!

An example: you've setup the LFO to modulate the frequency of the oscillator. In other words
you've created vibrato. How do you modulate the intensity of this vibrato?

• Use the encoder to move to the intersection point CycEnv>Assign1 on the Matrix

• Press and hold the Assign1 button. The display will

invite you to move to a

destination point you want to modulate

• Move to the LFO>Pitch point where you already created the vibrato modulation

◦ Press the encoder. The destination is now fixed. Move back to the
Pitch>Assign1 point and press the encoder. The values you enter now
will cause the Cycling Envelope to modulate vibrato depth. Select
whatever freaky setting suits you. Experiment with changing the
settings of the Cycling Envelope.

 In paraphonic mode all voices will be assigned simultaneously as a destination.

To clear all routings on the Matrix and make a fresh start hold [Shift] and press the Matrix
encoder.

To summarize:

• The Matrix is where you route sources to destinations. It's also the place where

you mix several sources together to control one common destination.

• The encoder is bipolar; you can set up positive or negative modulation and set

modulation strength.

Arturia - User Manual MicroFreak - Making Connections

34

5.3. Freaky ideas

It's mostly not good practice to modulate a destination at full force. The right amount of
modulation adds subtleness and expression to your patches. If you get this right, the Matrix
is a treasure trove of unusual finds. Some ideas below:

Change pitch scope:

Without making any connections on the Matrix the keyboard or a sequence will already
modulate the pitch of the oscillator with 1v per octave. If you take a sequence and add
that already existing modulation on the Matrix (route Key/Arp to Pitch), you can drastically
change the pitch scope of the sequence. Steps that were one semitone in the original
sequence will now be 2 or even four semitones. When you apply negative modulation, the
step distance will shrink to microtonal proportions.

Summing modulation signals:

Both envelopes: the Standard Envelope and the Cycling Envelope are sources for modulation
in the Matrix. You take advantage of that by mixing their output to control the same
destination. Why would you do that? By mixing the control voltages, you create a complex
envelope that can control the filter or arpeggio rate in unexpected ways.

Another summing idea:

When you sum two modulations to control one destination the result will usually be
unexpected and surprising, like when you mix the Cycling Envelope and the LFO that you
are using to modulate the Filter Cutoff frequency. You're using the Matrix as a modulation
mixer in this type of patch.

Modulating the Digital Oscillator:

This will probably become one of the most used techniques on the MicroFreak: modulate
Wave, Timbre and Shape of the Digital Oscillator with the (unsynced) LFO and Cycling
Envelope. By letting them control different aspects of the Digital Oscillator with different
speeds you can create ever-changing timbre patterns that never repeat.

Regular automatic transpositions:

For automatic transpositions of a sequence modulate Pitch with the Random wave of the
LFO, or with a slow-moving square wave if you need more regular automatic transpositions.
The square-wave technique will also work with a sequence.

Modulating Modulation:

As mentioned before you can modulate the amount of modulation of a connection point on
the Matrix with the Sequencer modulation tracks. You assign a matrix point by holding any
assign button, then move the matrix encoder. The moment you release the assign button,
the matrix point will be set as a destination. Again the LFO and Cycling Envelope are ideal
means to modulate these points.

Modulating Cycling Envelope Rise and Fall times:

You can use the LFO output on the Matrix to control the speed of the LFO or the Cycling
Envelope to control its own rise or fall times or amount.

Circular routings:

One more before you get dizzy: It's easy to make circular routings using the Matrix: for
example, let the LFO modulate the Rise or Fall time of the Cycling Envelope and then let the
Cycling Envelope control its own level.

The EMS Synthi was famous for this kind of circular routings, mostly because this technique
enables you to create sounds that are unique and difficult to replicate.

35

Arturia - User Manual MicroFreak - Making Connections

6. THE DIGITAL OSCILLATOR

The Digital Oscillator is the very heart of the MicroFreak. It's the digital circuit that generates
the core sound of this instrument. The other parts of the MicroFreak - the Analog Filter,
the Envelopes, and the LFO - exist only to shape/mangle/wobble the sound of the Digital
Oscillator.

Oscillators come in two flavors; analog and digital. Digital oscillators have advantages over
analog oscillators: they are capable of generating a much broader palette of waveforms
and are more flexible and stable than their analog counterparts. Analog filters, on the other
hand, have something special to them.

The MicroFreak offers you the best of both worlds: a digital oscillator and an analog filter.

The Oscillator in the MicroFreak is unique in that it can emulate many different synthesis
models. In the history of electronic music, many gifted sound engineers developed unique
ways of generating sounds. Voltage Controlled Oscillators, the pitch of which could be
controlled with an external voltage, FM oscillators that created timbres by modulating two
or more oscillators, Harmonic oscillators use combinations of harmonics to create complex
timbres. You'll find many of these Oscillator models in the MicroFreak, and we hope you'll
have as much fun with them as the engineers who designed them.

At Arturia, we are fans of Mutable Instruments. They permitted us to implement some of
their open-source Oscillator designs in the MicroFreak, for which we are very grateful as
they add a lot to the sonic potential of the MicroFreak.

The BASS, SAWX and HARM have been developed by Noise Engineering. The oscillators are
special versions of the oscillators included in Noise Engineering's Virt Iter Oscillator Platform.
The Virt Iter comes with these same three oscillator models but can be flashed with other
models.

 The explanation of the parameters below is intended for advanced users. The best way to

understand what the parameters do is to tweak the knobs and use your ears to experience the

sonic results. The knowledge you gain in this way is usually more valuable than understanding the

mathematical function of a parameter.

6.1. The oscillator as a sound generator

When you hear a sound, you hear air vibrating against the eardrum of your ear. As humans,
we can hear frequencies in the range of 20 to 20,000 Hz. As you age your ability to hear
high frequencies will gradually diminish. At 65 you'll probably hear only frequencies up to
6000 Hz. But that is enough to be able to enjoy timbral variations in music.

The ear can perceive sound around 50 Hz as bass (think huge organ pipes), but around
30 Hz it's difficult for the ear to hear a sound as a pitch; it's perceived as a low rumble.
In electronic music,
low-frequency sounds are often used as voltage or control signals
to modulate another module. An LFO is an oscillator specifically designed to generate
frequencies in this range. The LFO in the MicroFreak can generate signals in the range from
0.1Hz to 100Hz. Please refer to the LFO chapter [p.57] for details.

 Modulation is not limited to this range; some audio oscillator models in the MicroFreak use a second

oscillator to modulate their own frequency.

Arturia - User Manual MicroFreak - The Digital Oscillator

36

The Digital Oscillator

The Digital Oscillator can play notes in the range from C-2 to G8. Although the MicroFreak
keyboard spans only two octaves, you can shift the range it plays up and down.

Freaky idea: Applying a (very) small dose of randomness to the pitch of the digital oscillator
will make someone who listens to your track sit up and pay attention.

6.2. The Parameter Controls

The parameter controls help to make the Digital Oscillator come alive in different ways.

Type: Type enables you to select an oscillator model. Each type has a specific character. A
unique feature of the MicroFreak is that you can change the oscillator type with modulation.
If you modulate the oscillator type with the LFO, it will change from one model to another
very quickly, creating bizarre changes in timbre. Type can also be modulated with the
Envelopes, the LFO, Keyboard pressure, the Sequencer and the Arpeggiator.

 Oscillator type can be modulated in single voice mode and in Paraphonic mode. In Paraphonic

mode all voices will change to the same Type unlike Wave, Timbre and Shape modulations that are on

a per-voice basis.

When changing the Oscillator Type, you'll see a graphic representation of that Type and its
current values in the display.

For each Oscillator Type, we selected three parameters that you can use to modify the basic
sound: Wave, Timbre, and Shape. What these parameters do will depend very much on
the oscillator type, but looking at the display will help you understand what the knobs do:
turn a parameter knob, and the display will tell you what is being changed. In the overview
below we refer to the display names. We'll list the oscillator types, with their screen name in
parentheses.

What makes it musically exciting is that you can select each of these parameters as a
modulation destination in the Matrix. Animating the parameters using the Matrix will make
your sounds come alive in unexpected and fascinating ways.

37

Arturia - User Manual MicroFreak - The Digital Oscillator

6.2.1. Knob Tracking Speed

You can adjust the tracking speed of the Wave, Timbre, and Shape knobs. There are two
options: Slow (the default) and Fast. Press the Utility Button and navigate to Browsing > Osc
Knob Speed. When the MicroFreak is connected to Arturia’s MIDI Control Center software,
you can also find this setting under the Device Tab [p.99].

Holding Shift while turning the Wave, Timbre, or Shape knob causes the knob to operate in
the opposite mode from which it’s set; when in Slow mode, hold Shift to get fast increments,
and vice-versa.

Slow is a useful speed for sound design because it allows you to make precise edits. If you
want to twist those knobs during a performance and make musical statements, you’ll find
Fast more to your liking.

In both Slow and Fast modes, the knobs also dynamically accelerate based on how quickly
you turn them.

6.3. Oscillator types: An Overview

6.3.1. Basic Waves Oscillator (BasicWaves)

Classic Waveforms
Oscillator Model

Description: Every sound consists of a series of harmonics. The first harmonic is the
fundamental. The fundamental determines the pitch you hear. The second harmonic is twice
as high in pitch, the third three times, and so on. If you're a guitar player it's easy to create
harmonics; if you put the finger on the exact middle of the string, you'll hear the second
harmonic. If you divide the string into three parts, you'll hear the third harmonic. The second
and up harmonics determine the timbre of the sound. The 2nd, 4th, 6th, 8th, etc., are even
harmonics. The odd harmonics (3rd, 5th, 7th, 9th, etc.) sometimes add a more dissonant
timbre to a wave.

Triangle and square waves contains only odd harmonics; a sawtooth contains odd and even
harmonics. Because a sawtooth contains odd and even harmonics, it is an ideal wave to
emulate bowed string instruments. When a bow moves over the string, the string will stick
to the bow periodically and then slip to the next position on the bow. This is what creates a
sawtooth-like wave.

The basic waveforms that were developed in the early days of synthesis: sine, the triangle,
square, and the sawtooth, proved very useful for sound synthesis because they each have
a specific mix of even and odd harmonics. The sine wave is the simplest wave: it has no
harmonics, only a fundamental. In a Triangle wave odd and even harmonics are distributed
evenly. A square wave is all odd harmonics, and to some ears it sounds more musical than
a sawtooth, which contains all harmonics.

This oscillator emulates two of these basic waveforms: the square and the sawtooth.

Morph: Continuous morph from a square to a sawtooth to two sawtooths. Acts on Waveform
symmetry.

Arturia - User Manual MicroFreak - The Digital Oscillator

38

Sym: Morphs between square (pulse width), or phasing between the two copies of a
sawtooth wave. There is no effect when Wave is at 50 (sawtooth).

Sub: Adds a sine wave sub-oscillator.

Tip: If you need a sine wave you can use the filter to remove all harmonics from the wave
— and as an alternative, set resonance on the Filter to maximum. The Filter will then self-
oscillate and produce a pure sine wave.

6.3.2. Superwave Oscillator (SuperWave)

The Superwave Oscillator
Model

Description: This is a digital waveform animator that creates copies of a waveform and
detunes them. Detuning them creates a very fat,
lush sound. Unlike more traditional
waveform animators that multiply a sawtooth wave, this model allows you to select from
four different waveforms.

Wave: Selection of the waveform to be multiplied: Saw, Square, Triangle and Sinus

Detune: Sets the detuning amount.

Volume: Sets the amplitude of the detuned waves.

6.3.3. Wavetable oscillator (Wavetable)

The Wavetable Oscillator
Model

Description: In the early '80s advances in computer technology made it possible to scan
through waveforms stored in memory. A waveform consists of short snippets called
samples. 256 samples form a cycle of the wave. Each wave table stores 32 cycles. When
you move the Timbre knob, you move through these cycles.

Once you have a waveform stored in memory, you can do things with it that are not possible
with an analog oscillator. For example, you can change its pitch by changing the speed with
which you read the waveform from memory.

Table: The Wave knob enables you to select a wave from the 16 waves stored in the table.

Position: Allows you to browse the 32 cycles.

Chorus: Activates a chorus, which adds a chorus effect to the wavetable.

39

Arturia - User Manual MicroFreak - The Digital Oscillator

 Tip: To hear the real sonic power of this oscillator, modulate the wave parameter with the LFO or the

Cycling Envelope. This modulation technique is called wavesequencing.

6.3.4. Harmonic OSC (Harmo)

Harmonic Oscillator
Model

Description: Harmonic oscillators recreate sound by creating and summing harmonics.
By varying the amplitude of the individual harmonics, the timbre changes. The Harmonic
Oscillator is unique in that is does not only sum up to eight harmonics but sums complete
waveforms. This results in more complex sounds than possible with traditional harmonic
oscillators.

Content: When turning the wave knob you morph through different tables of harmonic
amplitudes and switch between these. Higher values provide tones with richer harmonic
content.

Sculpting: When turning the timbre knob you morph between a sine and a triangle wave.
A harmonic derived from a sine wave will sound different from a harmonic built from a
triangle wave.

Chorus: Adds chorus to the oscillator sound, making it wider.

Arturia - User Manual MicroFreak - The Digital Oscillator

40

6.3.5. KarplusStrong (KarplusStr)

Karplus Oscillator Model

Description: Karplus-Strong is the name of the sound synthesis method developed by
Kevin Karplus and Alex Strong at Stanford University. They discovered that you could
create a realistic sounding drum and plucked string sounds by looping a short noise burst
through a filtered delay. Nowadays we refer to their method as physical modeling. In
physical modeling you recreate the physical characteristics of an instrument using digital
techniques; the bow position of a string instrument, the force you use to hit an instrument,
and the diffusion and damping factor of the materials the instrument made of.

In physical modeling, an exciter creates vibrations in a resonator. The exciter can either be
a bow or a strike. The resonator can emulate many different instrument shapes.

Bow: Set the amount of Bow that is applied on top of the strike. It results in a continuous
tone, whereas the Strike alone creates a decaying tone.

Position: This controls where and how hard the resonator is struck; it has no effect on the
bowed part of the sound.

Decay: Sets the amount of resonance by controlling the decay of the resonator.

The oscillator models listed below have been developed by Mutable Instruments. They
permitted us to implement some of their open source Oscillator designs in the MicroFreak,
for which are very grateful as they add a lot to its sonic potential.

These models feature waveforms that were introduced in 2018 with the Plaits Module of
Mutable Instruments. Plaits is one of the most popular oscillator modules in the Eurorack
world.

In the descriptions below we describe the functions of the Oscillator models in a basic
way. For in-depth info about Plaits and its waveforms, please refer to https://mutable-
instruments.net/modules/plaits/manual/.

 The names of the knobs on the MicroFreak will differ from the names used in the Plaits oscillator

documentation.

MicroFreak name

Wave

Timbre

Shape

Plaits name

Harmonics

Timbre

Morph

41

Arturia - User Manual MicroFreak - The Digital Oscillator

6.3.6. Virtual Analog (V.Analog)

Virtual Analog Model

Description: An emulation of the classic synthesis waveforms triangle, sawtooth and square
wave.

Detune: Sets the detuning between the two waves.

Shape: Morphs through a variable square, from narrow pulse to full square to hard sync
formants.

Wave: Morphs through a variable saw, from triangle to saw with an increasingly wide notch.

Freaky tip: Detune sets a detuning amount between the oscillators. If you combine this with
keyboard/arpeggio modulation you'll hear interesting scale variations happening. On the
Matrix create the routing: Key/Arp>Wave.

6.3.7. Waveshaping oscillator (Waveshaper)

Waveshaper Oscillator
Model

Description: This Oscillator model is a combination of a waveshaper and a wavefolder. A
waveshaper acts on the rise and the fall stage of a wave. It can make the rise time of
a triangle wave steeper, turning that triangle into a falling Saw wave. It can also change
the curve of the rise and fall stages. Each of these changes will affect the number and the
amplitude of the harmonics that the Oscillator produces. More harmonics means a richer
(sometimes sharper) sound. The original model was based on a feature found in the Serge
waveshaper.

A wavefolder folds a wave back on itself. Usually, when you boost the amplitude of a digital
waveform it will start clipping; the top of the waveform will be cut off. A wavefolder prevents
this from happening by folding the wave.

Wave: Sets the waveshaper waveform.

Amount: Sets wavefolder amount.

Asym: Sets waveform asymmetry.

Arturia - User Manual MicroFreak - The Digital Oscillator

42

6.3.8. Two operator FM (Two Op.FM)

Two operator Oscillator
Model

Description: FM synthesis has its origins in the work of Dr John Chowning at Stanford
University in the late 1960s. The first FM synthesiser was a mainframe computer! Think of a
room full of refrigerators, and you'll have an idea of what that was like.

Dr Chowning's theory was that an entire range of acoustic instrument emulations would
be possible by modulating a waveform with others that are tuned to the harmonic series.
He discovered that deviations from the harmonic series (i.e.,
inharmonic relationships)
resulted in bell-like tones and other intricate sounds. Many of the timbres that came easily
to FM synthesis had proven difficult for the reigning generation of analog synthesizers to
reproduce.

This model, despite being a simple implementation of FM, is still capable of creating a wide
range of sounds. It consists of two sine-wave oscillators, each modulating the phase of the
other.

Ratio: Sets the frequency ratio between the oscillators.

Amount: Sets the modulation index.

Shape: Sets a feedback amount, in the form of operator 2 modulating its own phase.

6.3.9. Granular formant oscillator (Formant)

Granular formant
Oscillator Model

Description: Granular synthesis is a synthesis method developed fairly recently. It's a
technique whereby a wave is chopped in tiny pieces called "particles", which are then
rearranged, multiplied and added in multiple ways. In this model,
the particles are
rearranged into formants and filtered waveforms.

Interval: Sets the frequency ratio between formants one and two.

Formant: Sets the formant frequency.

Shape: Sets formant width and shape. This controls the shape of the window by which a
sum of two synchronized sine oscillators is multiplied.

43

Arturia - User Manual MicroFreak - The Digital Oscillator

6.3.10. Chords (Chords)

Chords Oscillator Model

Description: In Chords mode, the Digital Oscillator is transformed into a four-voice oscillator
capable of playing chords. The fun thing is that it's possible to modulate the chord.

Chords add emotion to music. A single melodic line can evoke many emotions, but when
you add chord notes from the scale of the melody to that melodic line, the emotion will
become much stronger. When you add notes from the major scale the melody sounds
forceful and happy; add notes from the minor scale, and that same melodic line will
suddenly sound sad. At least, that might be your response if you were born in a culture
dominated by western music. In other cultures, your response to major and minor scales
may be different.

The first note of a chord is the Root. The third note in a scale determines the feel of a chord;
if it is three half-steps removed from the root, the chord is a minor chord. Four half-steps
removed from the root makes it a major chord. When you add more voices to a chord, you
are essentially fine-tuning and shaping the minor and major feel further.

 If you want to know more about this fascinating subject, search for music theory on a search engine

or YouTube.

Paraphony deactivates in this mode; the last key pressed is the root note, and only one
chord can be playing.

Knob functions:

Type: Chord selection

• Octave

• 5th

•

sus4

• m(inor)

• m(inor)7

• m(inor)9

• m(inor)11

• 6th and 9th added

• M(ajor)9

• M(ajor)7

• M(ajor)

Inv/Transp: Changes the inversion and the frequency range of the chord. The chord stays
the same, but the pitches are combined differently when you move the Timbre knob or
modulate it externally.

To have an idea how this works, hold down a C major chord: C/E/G. Turn the timbre knob
to the right. At position ten you will hear the first inversion. Continue to turn the knob to hear
other inversions.

Arturia - User Manual MicroFreak - The Digital Oscillator

44

Waveform: Sets the waveform. The first half of the knob goes through a selection of "string-
machine like" raw waveforms (different combinations of the organ and string “drawbars”);
the second half of the knob scans a small wavetable containing 16 waveforms.

Freaky tip: Instant gratification! Modulate chord selection (the Wave knob) with the random
pattern wave of the LFO. It's the next-to-last LFO wave option. On the Matrix select
LFO>Wave and set modulation strength anywhere between 50 and 100.

6.3.11. Vowel and speech synthesis (Speech)

Vowel and speech
synthesis Oscillator Model

Description: In the late '70s Texas Instruments began to research speech synthesis. With the
results of their research, Texas Instruments created Speak & Spell, the very first talking toy.
It soon became clear that synthesising the human voice was not easy. We create speech
by cleverly using the throat and tongue to form vowels and consonants. A vowel is a sound
that you produce with an unrestricted sound flow like Aaah, Uuuh and Iiiiii. Consonants are
all other sounds that delimit and shape vowels.

Type: The wave knob will first scan through formants (from 0 to around 100), then through
libraries of colors, numbers, letters, and words.

Timbre: The timbre knob will act on the speech itself. It shifts the formants up or down.

Word: The shape knob will scan through subsets of words; the contents of the subset will
depend on the library that was selected with wave knob.

Some examples :

• Set the wave knob to maximum

• Set the timbre knob to 40

• Set the shape knob at 30

Now play a middle C, and you’ll hear the word “Filter.” To add to the fun press the
"Paraphonic" button to play the word filter with four voices!

Another example:

• Set the wave knob to 60

• Set the timbre knob to 46

• Set the shape knob at 17

Now play a middle C, and you’ll hear the word “One.”

To create a singing count song:

• activate Arpeggio mode by pressing Arp|Seq

• assign oscillator shape parameter to the LFO (press Assign1 and turn the Shape

control)

set the modulation amount to about 80

select the triangle wave on the LFO and set LFO speed to about 80Hz

•

•

There's your song!

45

Arturia - User Manual MicroFreak - The Digital Oscillator

6.3.12. Modal Resonator (Modal)

Modal Resonator
Oscillator Model

Description: A modal resonator imitates how sound is amplified in the things that surround
us. Everything (without exception) responds with a complex sound consisting of many
harmonics (subpitches) when you hit it. Usually, that response is so soft that we don't hear
it; the sound is soft because the energy of your hit is absorbed/dampened by the material
of the object you hit. But some objects, such as the kettle in which you're boiling water
or the pipes of a central heating unit, will respond really well. Musical instruments have
been designed to respond in a (usually) pleasing way to being struck or, in the case of a
stringed instrument, playing them with a bow. The shape of an instrument determines which
harmonics you will hear. Its shape will amplify certain harmonics and dampen others. This
technique can imitate many instrument bodies, from woodwinds to strings to drums.

Real world instruments like a violin or a drum you play with a bow, a drumstick, or with
your breath in the case of a woodwind instrument. The modal resonator needs a signal,
an exciter, to make it come alive. It mimics the behavior of real world instruments. The
extraordinary thing about the Modal Resonator is that it can change the shape it mimics on
the fly when you turn a knob or modulate it externally with the LFO, the Envelope, or one of
the other sources on the Matrix. It changes its internal harmonic structure.

Another important quality of a modal resonator is that it enables you to control the damping
of the generated sound. How we hear an object that is hit will very much depend on the
damping qualities of the material from which it was built. Drummers know all about this,
and often use their hand to muffle the sound of their drum. Guitarists know how to dampen
the sound of strings with the palm of their hand.

Here again, the extraordinary thing about the Modal Resonator is that it can mimic the
damping characteristics of an instrument on the fly when you turn a knob or modulate it
with a Matrix source.

Inharm: amount of inharmonicity, or material selection.

Timbre: excitation brightness and dust density.

Decay: damping, decay time (energy absorption).

 Freaky idea: The MicroFreak is paraphonic. When you arpeggiate or sequence chords and modulate

the damping simultaneously, you can selectively dampen certain steps in your sequence/arpeggio.

Arturia - User Manual MicroFreak - The Digital Oscillator

46

6.3.13. Noise Oscillator (Noise)

Noise Oscillator Model

Description: This oscillator provides a mix between a noise source and a sine/triangle/
sawtooth oscillator. Noise Particles are tiny noise fragments that originate when noise is
sampled down.

Wave: Noise source selection: from particle noise to white noise to metallic noise. When
you turn the wave knob from counter-clock-wise to clockwise the resulting wave will morph
between particle noise, white noise and metallic noise.

Timbre: The Timbre knob applies sample rate reduction to the noise, and serves a pitch
control for the square waves present in metallic noise.

Shape: When you turn the Shape knob from '0' to '100' the resulting wave will crossfade
between noise only at 0%, noise + sine wave at 33%, noise + triangle wave at 66% and noise
+ square wave at 100%.

6.3.14. BASS Oscillator (Bass)

BASS Oscillator Model

Description: The BASS model is a quadrature oscillator with two inputs, a Sine and a Cosine
oscillator. The Sine oscillator is fed into a balanced modulator and the resulting wave
is mixed with the modulated Cosine Oscillator. The Saturate, Fold and Noise parameters
enable you to control this modulation model in various ways.

Saturate: Sets the saturation of the Cosine oscillator

Fold: Two-stage asymmetric fold. Folding a wave produces additional harmonics. In a wave
folding process parts of the wave that fall outside certain boundaries are folded back onto
the wave itself. Wavefolding was pioneered by Don Buchla in the early seventies.

Noise: Set level of noise. Noise is used to phase modulate the two oscillators (in opposite
phase) and is added between fold stages.

47

Arturia - User Manual MicroFreak - The Digital Oscillator

6.3.15. SAWX Oscillator (Sawx)

SAWX Oscillator Model

Description: SAWX is an oscillator model that creates sonic variations by manipulating
a sawtooth wave. It (among others) enables you to extend the harmonic content of the
standard sawtooth by modulating the phase of a sawtooth with subsampled white noise.
The resulting wave is then enhanced with chorus, which effectively adds time-shifted copies
of the sawtooth.

Saw Mod: Set the gain of a modulus stage

Shape: Sets Chorus amount

Noise: Sets the amount of phase modulation by sub-sampled white noise.

6.3.16. HARM Oscillator (Harm)

HARM Oscillator Model

Description: The HARM oscillator model creates a waveform by adding harmonics/partials
to a fundamental frequency.

Spread: Set the relation of partials. At zero the relation between the partials is unison, at
max, it is an octave. The mid positions interpolate linearly in frequency.

Rectification: Adjustable rectification of the individual partials. Sort of like a half fold.

Noise: Amount of phase-modulated noise and master clip level.

Arturia - User Manual MicroFreak - The Digital Oscillator

48

6.3.17. User Wavetable Oscillator (WaveUser)

User Wavetable Oscillator
Model

Description: The WaveUser oscillator model works much like the Wavetable Oscillator, with
the important addition that you can load your own wavetables using the MIDI Control
Center [p.99] software. In addition, the Shape knob controls bit depth instead of a chorus as
on the factory Wavetable oscillator.

The MicroFreak can load a Bank of user Wavetables at a time. A Bank contains 16 Tables. In
turn, each Table contains 32 cycles. Each cycle is 256 samples in duration. A factory Bank
of Wavetables is provided, which will auto-load if no user Wavetables are present.

Table: The Wave knob enables you to select a wave from the 16 waves stored in the table.

Position: The Timbre knob allows you to browse through the 32 cycles.

Bitdepth: The Shape knob changes the bit depth of the wave so you can create a classic
digital lo-fi character.

Further instructions on loading your own Wavetables from MIDI Control Center are found in
the Wavetables Tab [p.103] section of Chapter 14.

49

Arturia - User Manual MicroFreak - The Digital Oscillator

6.3.18. Sample

Sample Oscillator Model

Description: The Sample oscillator model works much like the WaveUser Oscillator, in the
sense that you can load your own samples using the MIDI Control Center [p.99] software. In
your MicroFreak, you can then store 128 samples for a total of 210 seconds.

Once on the Sample oscillator, to browse through your samples on your MicroFreak, click
and hold on the Shift button, and turn the Type knob. The sample select menu will let you
browse through the 128 sample slots of the unit. To get out of the Sample select menu, click
and hold on the Shift button, and turn the Type knob.

 When tweaking parameters of the Sample oscillator, you can check the MicroFreak screen to know

if you're still in the Sample select menu. If | Smp is displayed on top, it means you're still browsing

samples.

Start: The Wave knob enables you to select the starting point of the sample, with 0 being
the beginning of the sample audio, and 100 being the end.

Length: The Timbre knob allows you to set the length of the sample, with values ranging
from -100 to 100. When choosing negative values, it makes the sample play backwards.

 With Start at 100, and Length at -100, the sample plays backwards from the end of the sample, all

the way down to the start.

Loop: Once you've set your Start point and your End point (using Length), Loop point acts as
a crossfade between the Start and End positions.

 With Loop at 100, the part of the sample being looped is the very end of it, and the loop is very short.

Arturia - User Manual MicroFreak - The Digital Oscillator

50

6.3.19. Scan grains

Description: The Scan grains sample-playing oscillator plays back short slices (grains) of the
loaded sample, with a volume envelope apllied to each grain to ensure a smooth sound. It
scans through the sample, playing it from start to finish at a user-definable speed.

Scan: The Wave knob sets the speed at which the sample is scanned. It moves the grain
start position.

Density: The Timbre knob defines how often a grain is generated.

Chaos: The Shape knob adds some randomness by changing values for density, size, pitch,
and other parameters.

Browsing samples and tweaking parameters work in the same way as in the Sample
oscillator model [p.50].

6.3.20. Cloud grains

Description: The Cloud grains sample-playing oscillator lets you control the Start point of the
sample being played, with great control of grain generation.

Starts: The Wave knob controls the grain start position.

Density: The Timbre knob defines how often a grain is generated.

Chaos: The Shape knob adds some randomness by changing values for density, size, pitch,
and other parameters.

Browsing samples and tweaking parameters work in the same way as in the Sample
oscillator model [p.50].

51

Arturia - User Manual MicroFreak - The Digital Oscillator

6.3.21. Hit grains

Description: The Hit grains sample-playing oscillator is a third granular engine with a sharp
volume envelope. It's been designed for percussive granular patches.

Start: The Wave knob controls the grain start position.

Density: The Timbre knob defines how often a grain is generated.

Shape: The Shape knob sets the size of the grain, and the envelope parameter.

Browsing samples and tweaking parameters work in the same way as in the Sample
oscillator model [p.50].

6.3.22. Vocoder Oscillator (Vocoder)

Vocoder Oscillator Model

Description: This oscillator is designed to act as the carrier for the Vocoder. Its waves have
rich overtones. You select this waveform with the Wave encoder.

Wave: At the zero position, or knob turned all the way counter-clockwise, it generates a
Sawtooth waveform. At around 11% the sawtooth changes to a pulse width waveform with
a duty cycle of 50%. When you turn the knob further clockwise the pulse width of the
waveform will change until at knob position 90% you reach a duty cycle of 99%. From
position 91% to 100% (full clockwise) it generates Noise.

Timbre: The Timbre knob changes the frequency range of the analysis/resynthesis process.
The formants that make up your voice have several frequency peaks. The peaks of a 'U'
vowel are generally around 330 and 1260 Hz, it will vary with gender and culture. When
recreating the sound the synthesis filters in that frequency range will recreate the loudness
contour of the input signal. Other vowels will trigger other filter combinations. To increase
the effectiveness of this triggering process the MicroFreak vocoder allows you to specify a
range between frequencies to which it will respond. Because there are fewer frequencies
the vocoder has to monitor its response time and frequency output will improve.

Shape: The Shape knob sets the bandwidth of the individual vocoder filters. Higher settings
produce a narrower filter frequency response. The filters of the Vocoder are Bandpass filters,
that will emphasize certain frequencies of the wave you send to it. Narrowing the bandwidth
of the Vocoder’s filters will result in more pronounced harmonics.

 You cannot modulate Oscillator type when the vocoder oscillator is active.

Arturia - User Manual MicroFreak - The Digital Oscillator

52

7. THE FILTER: SOUND IN CLOSE-UP

A filter enables you to have a look at sound, at any sound in detail. It's not an overstatement
to say that nearly every track you hear in the media has been filtered in some way or
another. Frequencies were removed or boosted, instruments suppressed in a mix, frequency
ranges made more prevalent to capture your attention. A filter can emphasize or suppress
the harmonics contained in a sound. In doing so, it changes its timbre. Traditionally filters
are used in combination with oscillators. The MicroFreak filter can emphasize or suppress
the harmonics of the Digital Oscillator.

The Analogue Filter

The Analog Filter is like a magnifying glass that reveals everything that is present in the
sound of the Digital Oscillator. Or to use a better analogy: it is a searchlight that moves
over the waveform generated by the Digital Oscillator dynamically, revealing its harmonic
content. It can sweep over a sound with a broad beam or with a very focused, narrow
beam; this is referred to as Q or resonance.

Any sound consists of sine wave frequencies, each with different
loudness. These
frequencies are usually not random but appear as "families"; they have a common ground:
the fundamental
frequency creates related
frequencies called harmonics. Some of these frequencies are even, some are odd. The mix
of odd and even harmonics largely determines the characteristic of the sound. A filter is a
circuit that allows frequencies/harmonics to resonate in specific ways. It will favor certain
frequencies and be hostile to others.

frequency. The vibrating fundamental

7.1. Modifying sound

There are three types of Filter in the MicroFreak: a Low Pass Filter (LPF), a Band Pass Filter
(BPF), and a High Pass Filter (HPF). The Low Pass Filter attenuates (weakens) or removes
frequencies above the cutoff frequency. The Band Pass Filter attenuates frequencies above
and below the cutoff point. The High Pass Filter attenuates (weakens) or removes
frequencies below the cutoff frequency.

The Type button enables you to switch between the three filter types.

An open filter, with the cutoff frequency set to maximum, will allow all frequencies to pass
through. When you lower the cutoff frequency in Low Pass mode the high frequencies will
start to disappear; frequencies that lie above the cutoff frequency are attenuated. Lower it
further, and the midrange will disappear. Close it completely, and only silence remains. In
a Highpass filter this works in the opposite way: with Cutoff to maximum all frequencies
will be removed. Lower the cutoff point and frequencies that lie above the cutoff frequency
will pass through. In Bandpass mode the frequencies in the proximity of the cutoff point are
audible. Resonance sets the width of the audible frequency range.

53

Arturia - User Manual MicroFreak - The Filter: sound in close-up

7.1.1. Low Pass Filter

A Low Pass Filter removes frequencies from a sound source. It is the primary component in
subtractive synthesis and widely used in every contemporary music style. What gives the
Low Pass Filter its unique qualities is that it focuses on the harmonics around a cutoff point.
Modulating the cutoff frequency of a filter varies the timbre of sound over time. It can be
considered to be a sophisticated equalizer that selectively reduces the high frequencies of a
sound.

 For the technically inclined: the MicroFreak filter has a 12dB roll-off. This means that it is somewhat

less obtrusive than its 24dB cousin, which has a much steeper slope. The 12dB filter will do more

justice to the oscillators of the MicroFreak, which have rich and complex harmonics (grains, wavetables/

shapers, FM, etc.)

7.1.2. Band Pass Filter

The Band Pass Filter is like a narrow beam that allow only a small range of frequencies to
pass through the Filter. With the resonance knob you set the width of the frequency range
that is allowed to pass through. With the resonance knob completely counter-clockwise
all frequencies are allowed to pass through. Turn it slowly to the right and the range of
frequencies allowed to pass will become smaller. In the clockwise position the filter will start
to self oscillate, and can be used as a sine wave oscillator. In that position it will block all
sound from the Digital Oscillator.

7.1.3. High Pass Filter

The High Pass Filter works in the opposite way of the Low Pass Filter. It removes frequencies
below the cutoff point. When you raise the cutoff frequency the low frequencies will start to
disappear; frequencies that lie below the cutoff frequency will be attenuated. Raise it further
and the midrange will disappear, leaving only the highest harmonics of the Digital Oscillator.

The High Pass Filter is somehow less popular than its cousin, the Low Pass Filter. Maybe this
is because its effect is not as notable or spectacular as that of the Low Pass Filter, and yet it
can be used to great effect for accenting certain beats in an arpeggio or a bass loop.

A popular application of the High Pass Filter is to clean up the sound in a mix. Say you've
programmed a solo sound on your MicroFreak and while mixing it with a bass sound from
another synth you notice that the low end of your sound interferes with the bass. You could
then use the High Pass Filter to remove some low end from your solo sound to make it stand
out in the mix.

Let's have a look at the controls that are at your disposal:

• Cutoff frequency

• Resonance

Arturia - User Manual MicroFreak - The Filter: sound in close-up

54

7.1.4. Cutoff frequency

The cutoff frequency is the point where the actual filtering takes place. Early users of filters
discovered that they could alter the sonic properties of a filter by feeding the output of the
filter back into itself. Creating such a feedback loop results in a resonance peak around the
cutoff frequency. In the MicroFreak filter, you control this effect with the resonance knob.
The amount of resonance can be controlled manually, or by the LFO or the Envelopes. To
achieve this, you have to assign it to your favorite control in the Matrix.

Filters differ in how they remove frequencies above the cutoff point. It is possible to design
a filter that will reduce the frequencies above the cutoff frequency in a very drastic way; if
the cutoff point is at 500 Hz, it will make a frequency of 501 Hz inaudible. The result of such
filtering is very unmusical. Instead, filters are designed to dampen frequencies gradually.

In the above example, it would mean that the 501 Hz frequency is still audible but somewhat
reduced in amplitude. A frequency of 550 Hz will probably also be audible but will be
even more reduced in amplitude. This is referred to as the roll-off of a filter. Some filters
have a steep roll-off, others a more gradual roll-off. The number of its poles determines the
steepness of filter's roll-off; four-pole filters have a roll-off that is much steeper than two-
pole filters. The MicroFreak filter has a roll-off of 12dB per octave.

The Cutoff knob enables you to control the filter cutoff point manually. In its fully counter-
clockwise position, the frequency cutoff point is approximately 30Hz. As you rotate the
knob clockwise the frequency cutoff point will increase until, in its fully clockwise position, it
exceeds 15kHz.

7.1.5. Resonance or Q

A second setting to complement the cutoff frequency: Resonance. It is sometimes called
“Emphasis” or “Q” – for Quality of filtering.

Resonance

The Resonance knob increases the amount of resonance; it amplifies frequencies close to
the cutoff frequency. When you add resonance by turning the resonance knob clockwise
the filter becomes increasingly selective, the sound begins to “ring” and will severely color
any signal passing through it. As stated above, in its extreme position the Filter will go into
self-oscillation.

7.2. Animating sound

As seen above a lowpass filter modifies sound by removing frequencies above the cutoff
point. Doing this manually is not very effective, although it helps in getting a grasp of what
is happening. What turns the filter into a compelling musical tool is changing the cutoff
point and its resonance dynamically. In the MicroFreak you do this by using an LFO, an
Arpeggiator, or an Envelope to control the cutoff frequency and resonance of the filter.
Please refer to the LFO [p.57], Arpeggiator [p.75] and Envelope [p.60] chapters for more
details.

55

Arturia - User Manual MicroFreak - The Filter: sound in close-up

7.2.1. Cutoff Modulation

Varying the cutoff point, the point where the filter starts removing frequencies from the
sound spectrum, changes the timbre of the sound. The most effective and musically
pleasing way to modulate the cutoff frequency is using an envelope generator. The
MicroFreak is "hardwired" to do this. Right next to the sustain control of the main envelope
you'll see a knob named Filter Amt (Amount). That's where you determine how much the
envelope will modulate the cutoff frequency of the Filter.

 You'll notice that when you change the setting of the Filter Amount knob, the corresponding point on

the Matrix will light up. As an alternative, you can also fine-tune the filter amount on the Matrix.

7.2.2. Emphasis/Resonance Modulation

With the Resonance knob, you set the width of the band with which the filter attenuates the
incoming signal. By increasing the emphasis amount, you will focus the filter and force it to
pass only frequencies in the vicinity of the frequency cutoff point. It boosts the frequencies
near the cutoff point of the filter.

 ♪ Freaky idea: A sequencer modulation track can be a useful tool to modulate the filter cutoff point

for interesting stepped harmonic effects. In step mode you can assign a different modulation amount

to each step of the sequence.

Arturia - User Manual MicroFreak - The Filter: sound in close-up

56

8. THE LFO

An LFO (short for Low-Frequency Oscillator) can produce various waveforms at sub-audio
level. These waveforms can then be used to modulate other parts of the MicroFreak.

For example:

•

•

•

•

the pitch of the Oscillator

the cutoff frequency of the Filter

the emphasis of the Filter

the stages of an Envelope

A well-known application of LFO modulation is the filter sweep; the LFO waveform is used
to move/animate the cutoff point of a Low Pass Filter.

The MicroFreak LFO

This is a good moment to understand what the other LFO waves do. Try switching to the
Triangle wave and the rising Saw wave; you'll hear how the sweep changes shape. The
Rectangle wave will cycle between a low and a high state, so it's not very useful for learning
about overtones. It can have its uses if you want to toggle an oscillator between two pitches.
Depending on the modulation amount you set on the Matrix it will make the pitch jump two
or four steps on the scale or, if you increase the amount of modulation even further, a full
octave.

8.1. LFO Shape

The Shape button allows you to choose one of six different waveforms: sine, triangle, rising
sawtooth, rectangle (square), random (sample & hold) and random gliding (or smoothed
random).

 The square wave has a 50% duty cycle, which is tech-talk for saying that it is on (high) for 50% of

the time.

The last two LFO waves are a special case. The Random wave does what its name implies: it
creates random modulations. You've probably heard this sound a thousand times before. In
early Sci-fi movies, this was that standard sound to accompany a futuristic computer with
many blinking lights. If you have an overwhelming urge to hear this, select the Random
wave on the LFO, set LFO speed to about 4.00 Hz and move the selection point on the Matrix
to the LFO>Pitch crossing. Press the Matrix knob and set the modulation amount to about
30. There it is!

57

Arturia - User Manual MicroFreak - The LFO

The last wave of the LFO is a slewed random wave. Whereas in the first Random wave
the pitch changes abruptly from one pitch to another, here the changes are more gradual.
Again, to understand what this wave does it's a good idea to have it control the pitch of the
oscillator. It will probably result in an ugly wavering sound, but as a learning tool, nothing
beats it. This technique is a useful in-between step for any modulation you want to apply. It
enables you to fine-tune the modulation amount before applying it to a modulation target.

 On the MicroFreak all modulations on the Matrix are bipolar, which means that it can go negative

and positive and thus control the modulation target in the positive range and the negative range. It is

a feature that gives you more sound design options. Many synths (especially the older ones) will only

allow you to modulate a target in the positive direction. There's a downside to this: if you modulate a

target, for example the Analog Filter with a slow-moving negative-going value, it's entirely possible that

for a while you'll hear nothing.

8.2. LFO Rate

The Rate knob sets the speed of the LFO (0.06Hz up to 100Hz).

By default, the LFO is not synced to the clock of the MicroFreak and will not follow changes
in speed of the MicroFreak clock. By pressing the Rate encoder of the LFO you enable LFO
sync.

If Sync is "off" the values in the OLED window will be displayed in Hz.

When set to Sync, the LFO will sync proportionally to the clock of the MicroFreak or your
DAW in a one-to-one relationship. When Sync is on, and the LFO is linked to the currently
active clock, the values are displayed as division values: ranging from 8/1 all the way up to
1/32, with in-between values of 4/1, 2/1, 1/1, 1/2, 1/2t, 1/4, 1/4t, 1/8, 1/8t, 1/16 and 1/16t.

What's the meaning of these mysterious numbers? They indicate how the LFO will sync to
an external clock. The clock could either be the internal clock of the MicroFreak, the clock of
your DAW, or an external MIDI source. The most common way to count time is 24PPQ, 24
pulses per quarter note. 4PPQ is the smallest counting unit (2PPQ for Korg). It determines
the maximum resolution of the Sequencer. When the LFO is set to 8/1, which is its slowest
rate, a cycle of the LFO completes in 8 pulses, which is 1/4 of a quarter note. With each step
up the LFO speed doubles, except when the rate is 1/2t, 1/4t and 1/8t where the LFO syncs in
triplet mode. When set to 1/4 one LFO period equals a quarter note.

Understanding this will help you to match the speed of the LFO to the MicroFreak Sequencer
or the tempo of your DAW or other external source.

In synced mode these settings enable you to create complex rhythms, where the LFO
responds to an external rhythm in multiples or divisions of an external clock.

 ♪: MicroFreak displays the sync ratio in the display.

If necessary, you can uncouple the LFO from the MicroFreak tempo by disabling sync. In
unsynced mode, the LFO ranges from 0.06Hz to 100Hz.

Arturia - User Manual MicroFreak - The LFO

58

8.2.1. LFO retriggering

There are situations where you would like to retrigger the LFO every time you press a key
on the keyboard or the arpeggiator/sequencer generates a gate signal. As an example: you
want to create a preset in which the LFO adds a little "bump" pitch rise every time you play
a key. You can accomplish this by activating LFO retrigger mode in Utility. Go to Utility and
change: Utility>Preset>LFO Retrig and set it to ON.

8.3. Freaky Tips and Tricks

• Try using the LFO to modulate both the filter cutoff and the envelope attack /
decay times. Modulating the filter cutoff is simple; it's a standard connection on
the Matrix. To modulate the envelope attack and decay times you'll have to assign
them explicitly on the Matrix. Please refer to the Chapter about the Matrix [p.31]
for details.

• When you mix in some randomness with the filter cutoff it will add a fuzzy effect
to the sound. Applying randomness to the decay or sustain stage of one of the
Envelopes will add some variety to any rhythmic pulse.

You can use this trick to revive anything that sounds stale.

• Another useful trick is to use the sine or the sawtooth wave of the LFO to control
the level of an envelope. If you then play an arpeggio, this will result in cyclic
crescendos and diminuendos. Even more interesting is to control the rise and
fall times of the Cycling Envelope with a very slow LFO and apply the resulting
envelope to other destinations.

• The rising Sawtooth can be useful to modulate the decay time of the Standard or
Cycling envelopes. It will add realism to drum or bell-like sounds. Remember that
you can change the shape of the envelope attack and fall stage of the Cycling
Envelope dynamically from linear to exponential. More about this in the Envelope
[p.60] chapter.

• An easy way to animate a sequence or arpeggio is the add a tiny bit of
pitch modulation each time a note starts. You could do this the simple way by
activating sync on the LFO. Next, select the random wave and apply it to the pitch
of the oscillator on the Matrix. Carefully adjust the modulation amount. To make
sure that the modulation only happens in the first phase of the attack, modulate
the modulation knob of the matrix with a very short envelope of the Cycling
Envelope set to ENV in such a way that the LFO modulation is silent after the
initial attack.

• When you assign Glide amount as a destination to be modulated by the LFO on
the Matrix, one trick is to use the LFO to turn glide on and off (set its amount
to zero). In synced mode, you can make the LFO activate Glide every other
sequencer step or every fourth step.

59

Arturia - User Manual MicroFreak - The LFO

9. THE ENVELOPE GENERATOR

The Envelope Generator is one of the basic building blocks of MicroFreak. It enables you to
shape the overall loudness or the timbre of a sound.

The Envelope Generator

It's a sound-sculpting tool. It can be patched to all destinations on the Matrix, including the
destinations you create yourself.

9.1. What does an Envelope Generator do?

Traditional instruments have a particular envelope (and timbre) that make it possible to
recognize them immediately. An organ attains full volume instantly, remains high for as
long as a key is depressed, and decays very quickly. A piano has a slower attack and a
longer decay. A string section will reach full volume gradually, and the volume mostly fades
gradually as well.

In Electronic Music envelope generators are also used to modulate the frequency content
of sound. The most famous example, one you've probably heard a thousand times before
without realizing what it was, is the Filter sweep.

If you want to hear this on the MicroFreak:

• on the filter set the Cutoff to minimum and Resonance to maximum

•

set Amp Mod on the Envelope to ON

• on the Envelope set attack to 1.7s, decay to 7.7s, sustain to 90%, and filter amount

to 70

You should now hear the filter sweep the overtones of the oscillator. The effect is more
pronounced if you try this with an oscillator model that is rich in harmonics (overtones).
What's happening is that the filter dynamically selects a narrow harmonic band on the
oscillator. Try some oscillator models and notice the vast difference in the way the filter
affects these models.

With the MicroFreak you can go beyond these traditional envelopes and develop new ways
to sculpt the timbre and amplitude (volume) of a sound.

9.2. Gates and Triggers

By itself, an envelope generator does nothing; it needs a trigger or a gate to get started.

It is essential to understand that gates and triggers are two different things. A trigger is
a very short pulse that can be used to sync modules to each other, or in the case of the
MicroFreak, to start the LFO or the Envelopes. A gate is usually longer: anywhere from a few
milliseconds to a few seconds.

Arturia - User Manual MicroFreak - The Envelope Generator

60

With the MicroFreak the keyboard is the primary source of gates. When your finger touches
the keyboard and you hold it there for a moment, you generate a gate. The gate starts the
envelope cycle and the first stage, the Attack, begins. The envelope then continues to the
Decay/Release stage and the Sustain stage. It will remain in the Sustain stage for as long
as your finger touches the keyboard. Lift your finger, and the level will decrease to zero. The
speed of this decrease depends on the setting of the Decay/Release knob.

9.3. Envelope stages

The Envelope Generator of MicroFreak has three stages: Attack, Decay/Release and Sustain.
Technically speaking it
is an ADS envelope because the Sustain stage can be held
indefinitely when the Envelope Generator is used in conjunction with the keyboard.

9.3.1. Attack

In the attack stage of the envelope cycle, the sound rises from its minimum to its maximum,
either slow or fast depending on the position of the Attack knob. Attack sets the time, from
0 ms to 10 seconds, the envelope takes to reach its initial level.

9.3.2. Decay/Release

Decay/Release adjusts the time, again from 0ms to 13 seconds, that it takes the voltage to
go from its attack level to the sustain level after the attack stage is completed.

9.3.3. Sustain

The sustain stage starts when the Decay/Release stage has ended. Sustain is the level at
which the signal settles after it decays. This level is usually lower than the initial level (hence
"decay"); however, it can also be the same - in which case the Decay setting does not affect
the envelope. Set it to a low level if you're programming percussive sounds.

9.4. Filter amount

The Standard Envelope can control both the filter cutoff frequency and the amplitude. When
the Amp button is unlit, the envelope will control the filter cutoff frequency.

When the Amp Mod button is lit, the envelope will control both the volume and the filter
cutoff of your preset.

Filter Amount adjusts the level of control the envelope will send to the filter to control its
frequency.

Filter Amount is an excellent modulation destination if you want to dampen your sound
gradually. The easiest way to achieve this is to control the Filter Amt with the LFO. The LFO
wave you select will determine how the cutoff frequency will be affected.

 Filter amount is a bipolar control.

61

Arturia - User Manual MicroFreak - The Envelope Generator

9.5. The Amp Mod button

As stated above the keyboard and the sequencer generate gates that control the volume of
the internal VCA (Voltage Controlled Amplifier) directly. It's a rather crude effect. Finger on
keyboard> sound on, finger off keyboard> sound off. When you enable the Amp|Mod button
(it's lit) you activate the Envelope generator, which will then use these gates to create much
more pronounced envelopes. The output of the Envelope generator (whether lit or unlit) is
sent directly to the filter to control its cutoff frequency. You set the amount of this control
with the Filter Amt knob. In addition, its output is available in the Matrix to control other
modules of the MicroFreak.

9.6. The Cycling Envelope Generator

The Cycling Envelope Generator is a great tool for generating complex modulation signals.
Unlike a standard envelope that cycles through its stages only once, the cycling envelope
can retrigger itself after the last stage has finished. The Cycling Envelope then becomes a
complex LFO capable of creating wave shapes that cannot be generated with a standard
LFO.

The Cycling Envelope Generator

Another unique feature of this Envelope generator is that you can change the shape of the
Rise and Fall stages and thus create a multitude of different Envelope shapes. Since the rise/
fall and hold levels can be modulated, the envelope shape can change in real time. More
about this in the next paragraph.

9.6.1. The stages of the Cycling Envelope

The Cycling Envelope has three stages:

• The Rise stage controls the time that the envelope will take to reach its maximum
volume once you have pressed a key on the keyboard (or trigger the envelope
using the Arp/Seq).

•

In the Fall/Shape stage, you set the time that the envelope will take to diminish
to zero.

• The Hold/Sustain stage is part of the Fall/Shape stage, it sets the level of the hold

stage.

Arturia - User Manual MicroFreak - The Envelope Generator

62

The Mode button enables you to select one of three modes: Env (standard envelope mode),
Run, and Loop.

•

•

•

In Standard Envelope mode, the envelope will cycle once through its stages and
stop at the end of the Fall stage.

In Run mode, the envelope (now an LFO) is free running. It resets when the
MicroFreak receives a MIDI start command.

In Loop mode, the envelope (now an LFO) resets when a trigger is detected from
either the keyboard, the sequencer or the arpeggiator. It syncs to the external
trigger.

In Run and Loop modes the envelope will retrigger itself when the end of the Fall time is
reached.

In standard mode, the envelope starts when it receives a gate from the keyboard or an
external source. The Rise stage is the attack stage. The Sustain stage will remain high as
long you press a key on the keyboard. When you let go of the key, the gate ends, and the
envelope will continue to the Fall stage.

In Run and Loop modes, the Rise stage is the attack stage and Hold will keep the level of the
Cycling Envelope high for the duration you've set with the Hold knob. When the Hold period
ends the envelope will continue to the Fall stage.

 To get a feel for the effect of changes you make to the stages of the envelope, connect it to the pitch

of the Digital Oscillator.

• Move the selection point on the Matrix to the CycEnv->Pitch point.

• Press the encoder and set the modulation level to about 20.

• On the Cycling Envelope Generator set Rise to about 200 ms, hold to 0, fall to

0ms and amount to 50%.

You'll hear the pitch go up and then slowly fall to its starting point. This setup also illustrates
the effect of the Amount knob. Decrease Amount and the pitch rise will less noticeable.

 Tip: Try modulating the pitch of the Digital Oscillator with the Cycling Envelope in loop mode. If you

select very low values for Rise, Fall and Hold, the Cycling Envelope will cycle at a very high rate and will

function as a complex LFO. By changing the Rise, Fall and Hold time you can change the waveshape of

this "LFO".

In Run mode the pitch of the oscillator will change continuously.

To hear the effect in Loop mode, the Cycling Envelope must be triggered externally by the
keyboard or the Arpeggiator/Sequencer. To hear its effect activate the Arpeggiator, set the
speed of the Arpeggiator to about 55 bpm, and press a chord. You'll hear how the Cycling
Envelope retriggers every time the Arpeggiator moves to the next step.

63

Arturia - User Manual MicroFreak - The Envelope Generator

9.6.2. About Changing Shapes

As we've mentioned before; a unique feature of this envelope is that it is possible to
modulate the shape of the Rise and Fall stages. To make changes to these stages hold the
Shift button and turn the Rise or Fall button. Turning it to the left will make the shape more
logarithmic, turning the encoder to the right will make the shape more exponential. There's
a dead zone in the middle where the shape is linear. The info screen will display "LINEAR"
when you're in that zone.

Velocity curves

 In case you're not familiar with the terms logarithmic, linear, and exponential, they are terms that

describe the curve of a line. A curve is said to be exponential when it is slow to rise and picks up speed

when nearing its endpoint. A logarithmic curve is the opposite of this, eager to rise and slow to finish. A

linear line is a straight line from beginning to end. When applied to an envelope these slopes will give

the envelope a particular character: an exponential rise and a logarithmic fall will create the impression

of a somewhat sluggish envelope. If you reverse these stages and combine a logarithmic rise with an

exponential fall, the envelope will seem to start more aggressively and will seem reluctant to end the

Fall stage.

9.6.3. Using the Legato options

Legato is the name for the most common keyboard playing technique. It's when you put
your fingers down on the keyboard one by one, connecting each new note to the previous
one without a break. It is the opposite of staccato playing where you lift your finger(s) from
keyboard before pressing a new key.

A setting in Utility enables you to define how the Envelope and the Cycling Envelope will
behave when you play legato. When set to OFF the envelopes will restart every time you
add a note to the first key you hold down. When set to ON only the first key you press will
start the Envelope; the second and next key presses will use the contour of this first Envelope.
This applies to playing in monophonic mode only.

Arturia - User Manual MicroFreak - The Envelope Generator

64

9.7. Freaky Cycling Envelope Suggestions

The real magic starts when you bring the Rise, Hold and Fall knobs under voltage control.
You can use the Matrix to modulate these knobs with an LFO or with pressure. Pressure
especially will give you a lot of control over the Rise and Fall stages of the envelope.

 Keep in mind that using the Matrix encoder you can make both positive-going and negative-going

voltages. If, for example, you apply a negative-going voltage to the Fall stage, the Fall stage becomes

shorter when you apply more pressure.

The Amount knob enables you to control the impact the Cycling Envelope will have on
the modules that are its target. Especially when modulating the analog filter with the
Cycling Envelope, it's crucial to send just the right amount of voltage/control. Sending too
much or too little control to a destination can mean the difference between an average or
fantastic sound. Knobs like the Amount knob that reduce the strength of a signal are called
Attenuators. Attenuators play an essential role in the fine-tuning of a volume or a timbre.

The Matrix makes it possible to create very complex dynamic envelopes. An intriguing option
is to use the Cycling Envelope to control stages of the Main Envelope. Controlling the Attack
will change the attack slope. Controlling the Decay will vary the length of the envelope. You
can take this a lot further by creating modulation chains in the Matrix.

Other patch ideas:

• The LFO set to a slow sine wave controls the Rise time of the Cycling Envelope

(assign link in Matrix)
The Cycling Envelope controls the sustain of the Main Envelope (create a link in
Matrix)

• The LFO set to a chaotic, random wave controls the Amount of the Cycling

Envelope (assign link in Matrix)
The Cycling Envelope controls the decay/release or sustain time of the Main
Envelope (assign link in Matrix).

65

Arturia - User Manual MicroFreak - The Envelope Generator

10. THE KEYBOARD SECTION

One of the first capacitive keyboards was introduced with the EMS Synthi AKS. Don Buchla
developed another type of capacitive keyboard, and in 1972 he introduced the Buchla
Easel with such a keyboard. Buchla infused it with much of the knowledge he had about
making controllers: it was solid; the keys did not move but were touch sensitive, and could
produce accurate and reproducible pressure output, tactile feedback and voltage controlled
portamento. The capacitive keyboard became the hallmark of the Easel. But again, very
few people could afford to buy one. Now, many decades later, the Arturia MicroFreak
reintroduces the capacitive keyboard.

The MicroFreak has a touch capacitive keyboard of 25 keys. On closer inspection, you'll
see hundreds of copper-colored little dots on the surface of the keyboard. These dots will
register your touch as aftertouch or as velocity. Which of the two it will be is up you to
decide. You can adjust this setting in the Utility > Preset > Press menu.

The Touch Capacitive Keyboard

A capacitive keyboard creates a sense of connectedness with the instrument
that a
standard keyboard cannot. When you put your finger on the keyboard, that finger becomes
part of the electrical circuit of the keyboard. By changing the surface area of your finger
that is in contact with the keyboard, you change the internal resistance of the keyboard. It
will conduct more or less electricity depending on the position of your finger. To generate a
pressure voltage, you place your finger on a key and then gradually put more of the skin
of your finger on the key. With just your finger surface you can get to about 30% of the full
pressure range, and adding more finger pressure with get you to a 100% value. Using the
capacitive keyboard helps to define the MicroFreak as a performance instrument.

A key in
close-up

 If the skin on your fingers is very dry the keyboard may not respond as expected. A simple test

is to lick your fingers! If the response improves you could research more permanent solutions such

as staying hydrated, buying a skin moisturizer, etc. But of course, never put liquids of any sort on the

MicroFreak.

Arturia - User Manual MicroFreak - The Keyboard Section

66

When touched the keys will generate a gate, a pitch control
"voltage" and a pressure
control "voltage". These voltages are available in the Matrix and can be used to modulate
any destination in the top row of the Matrix. They are also available at the back of the
MicroFreak, where you can use them to control a modular system or an external synthesizer
with voltage inputs.

Tip: It's a good idea to clean this keyboard now and then with a soft, damp cloth. Try not to
use abrasives as this might damage the keyboard. A dirty keyboard may lead to unexpected
musical results. If that's what you're after you can ignore this advice.

10.1. Another look at Gates and Triggers

In the Envelope chapter [p.60] we touched briefly on the subject of gates and triggers. These
also play an important role when you play the keyboard. In the MicroFreak the keyboard is
the primary source of gates.

When your finger touches the keyboard and you hold it there for a moment, you generate
a gate. The gate ends when you lift your finger. When the Amp | Mod button next to the
Envelope is off, the internal Amp will "listen" to what happens on the keyboard; when it
detects your finger it will go high in a rather abrupt way. It is an ON/OFF thing, but there are
ways to tweak that responsiveness that bring the unique character of this keyboard to light.

10.2. Keyboard responsiveness

There are a number of ways to fine-tune the responsiveness of the keyboard. First, there's
the option to change the keyboard setting from aftertouch to velocity as we mentioned
above. To change from Aftertouch to Velocity or vice-versa, go to Utility>Preset>Press Mode
and select either Aftertouch or Velocity. Changing this setting will result in a different
dynamic response.

The second option is to go to Utility>Preset>Velo Amp Mod. With Velo Amp Mod you set how
velocity with affect the volume of the patch. The range is from 0 to 10.

 ♪ Freaky tip: A great way to experiment with keyboard/volume effects is to assign the envelope

sustain knob in the Matrix as a modulation target, with Press as the source.

Because our hearing is much more sensitive to pitch changes than to volume changes, it's a
good idea to use pitch when making adjustments to keyboard responsiveness.

Here’s how you go about this. Select an empty preset and in the Matrix, assign pressure to
pitch with the maximum amount. Now place your finger at a 90° angle on one note’s upper
side. Then, lower your finger in such a way that more and more flesh of your finger touches
the key. When you cover more surface a higher pressure value will be sent, and the pitch
will rise.

If you keep your finger at 90° and start to do a hard press from there, as you would do
in standard “aftertouch” fashion, you’ll never reach the max pressure value, because of the
touch plate keyboard design.

 ♪ Freaky tip: Parameters such as Velocity, Aftertouch, and Velo Amp Mode are saved with a preset.

This means you can store a different setting with each preset. If you need to change keyboard volume

responsiveness in the middle of a set, you could create two presets with an identical sound but with the

first set to Velo Amp Modulation set to 5 and the second with Velo Amp Mod set to 10.

67

Arturia - User Manual MicroFreak - The Keyboard Section

10.2.1. Using Keyboard Responsiveness

The subtle instability of a capacitive touch keyboard makes timbre and pitch interesting
modulation targets. Modulating the rise- and fall times of the Cycling Envelope can also
produce impressive results.

The Assign buttons on the Matrix open up a particularly fascinating range of targets. How
about:

• modulating the Oscillator type with pressure

• modulating a combination of Wave, Timbre and Shape with pressure. When
carefully applied you can achieve very abrupt and dynamic timbre changes
using this modulation trick.

• modulating Glide with pressure or velocity

• modulating attack and decay times of the envelopes. This is probably the most

"natural" way to use pressure for modulation.

There's another thing worth knowing:

You can use Keyboard Pressure or Velocity to control your modular setup. There's a setting
in Utility that you can use to specify the output voltage generated by the keyboard: go to
Utility>CV/Gate>Pressure Range. The selectable range is 0V to 10V. The keyboard voltage is
available at the back of the MicroFreak at the Pressure output. You could use it to open up
an external filter, modulate the speed of a sequencer, modify the damping of a resonator or
whatever else is at your disposal.

 Not all Eurorack modules are able to handle 10V input; some will clip the voltage when it rises above

a certain maximum.

10.3. Glide

The Glide knob is technically speaking also part of the keyboard controls so we'll discuss it
here.

Glide is a musical tool that enables you to make gradual pitch changes. When you go from
one key to the next on the keyboard, the pitch changes will be abrupt. Glide smoothens this
transition. The amount of glide you set with the Glide knob sets the time for the pitch to glide
from one note/pitch to another. The glide time is variable from "off" to about 10 seconds.

The Glide knob

You'll find glide everywhere in music: in the vocal phrases of Indian music, or the complex
and refined string bending techniques of a sitar player. In Western music, this form of
phrasing is called Melisma.

Arturia - User Manual MicroFreak - The Keyboard Section

68

 The Glide setting in Utility enables you to define whether the Glide knob introduces a time-based , a

time synced or a rate-based glide effect. A time-based glide generates a glide that is fixed. A rate-based

glide generates a glide that is relative to the rate set with the Arp/Seq rate.

When set to Time Glide can vary from zero to 10 seconds as explained above. In Synced
mode you can select how glide will sync, with sync values being: 1/32T, 1/32, 1/16T, 1/16, 1/8T,
1/8, 1/4T, 1/4, 1/2T, 1/2 and 1/1.

In Rate mode you set how fast Glide will rise or fall within an octave: at 0 MS, the change
will be immediate, at 10 Ms the change will be more gradual.

A nice trick is to modulate the amount of glide with keyboard pressure. Define Glide as
a modulation target in the Matrix and pressure as the source. By carefully adjusting the
amount of modulation with the matrix attenuator you can optimize the glide effect.

Experiment with selecting various LFO waveforms as the modulation source. Each LFO
waveform will have a different effect on the intensity and slope of the glide. Setting the LFO
to Sync will ensure that each note has a different glide shape applied to it. Increasing or
decreasing the LFO rate will cause the LFO to sync to varying rates of the internal clock. This
will also affect the speed of the glide effect.

 Tip: Glide is also a good target to modulate with the modulation tracks of the sequencer:

• Turn on the Sequencer (Shift + Arp | Seq).

• Select sequencer A or B.

• Press Record and step-record a melody. At the end of your sequence,

the sequencer will turn off recording automatically.

• Now press Record again and move the glide knob wherever you want

a glide effect to appear in the sequence.

69

Arturia - User Manual MicroFreak - The Keyboard Section

10.4. Octave Buttons

Using the OCTAVE buttons you can transpose the output of the keyboard up or down by
octaves.

The Octave buttons

To be exact, the range is three octaves up and three octaves down. We've included a little
nicety, that you might not notice with knowing to look for it: the rhythm with which the
Octave buttons blink increases when you move further from the zero octave point. So at
-3 and +3 octaves it flashes at maximum speed. Knowing this can help you to remember
where you are (pitch-wise) on a poorly-lit stage. The keyboard itself is two octaves but the
whole pitch range is eight octaves, which should facilitate all but the most extreme musical
adventures.

 Octave shift is saved with the preset.

10.5. Tutorial: Modulating LFO speed

A creative use of the keyboard is to control the rate of the LFO with a pressure voltage. The
keyboard registers how much of your finger is in contact with the keyboard; more contact
will result in more pressure voltage, and vice versa.

To achieve this with the MicroFreak, define one of the Assignable destinations on the Matrix
to the LFO Rate and connect the pressure output of the keyboard to this newly created patch
point.

Arturia - User Manual MicroFreak - The Keyboard Section

70

11. USING THE ICON STRIP

Just above the keyboard, you'll find an area with function icons and a touch strip.

The icon strip

The function icons on the left allow you to control the workings of the Arpeggiator [p.75] and
the Sequencer [p.81]. We'll cover those in other chapters. In the remainder of this chapter,
we'll discuss the Hold button and the icons on the right side of the Icon strip: Spice, Dice, and
Bend. Lastly, we'll talk about the touch strip and how it can be used to spice up your sound.

11.1. The Key Hold Button

The Key Hold button will lock a key or a chord, enabling you to tweak the buttons on the
MicroFreak with both hands.

 The HOLD state is not saved with the preset.

The Hold Icon

Pressing it once activates Key Hold. Whatever keys you hold down on the keyboard will
remain active, even after you lift your fingers. When Key Hold is active in paraphonic mode,
additional notes you play will be added to the keys/chord currently playing.

In Arp mode, pressing Hold enables you to press some keys and have the arpeggiated notes
play until either Arp mode is turned off or the Key Hold button is disabled. Playing new keys
will turn off currently playing notes and replace them with the new notes you play.

 Hold does not work with external MIDI. If you need to hold external MIDI note(s), send the

MicroFreak a Sustain message.

In Sequencer mode, Hold has several functions.

The alternative functions
of the Hold Icon

71

Arturia - User Manual MicroFreak - Using the Icon Strip

•

•

In Step-record mode, it adds a tie or silence.

In Real-time recording mode, it clears the content in real time.

• Used in combination with the Seq Mod or A or B button it becomes a “Clear Seq

Mod” or “Clear Sequence” button.

• When the sequencer is disabled, it resumes its regular Key Hold function.

 Tip: In addition to creating exciting arpeggios, Key Hold is a great tool when building a generative,

self-evolving patch. A self-evolving preset is one that continually changes timbre or pitch in an

automated way without the use of a sequencer: for example, by modulating pitch with several sources

simultaneously, such as the LFO and the Cycling Envelope. If the LFO and Cycling Envelope each have

an independent Rate, the resulting pitch will never be the same.

11.2. Sequencer and Arpeggiator

Next to the Hold icon you'll see four buttons: Up ❙ A, Order ❙ B, Random ❙ 0, and Pattern ❙ >.
These offer extensive Arpeggiator and Sequencer functionality.

Arpeggio and Sequencer control Icons

We've devoted separate chapters to these buttons to do them justice. Please refer to the
Arpeggiator [p.75] and the Sequencer [p.81] chapters for more details.

11.3. The Touch strip

There are three functions on the touch strip. By pressing the corresponding icon, you select
either Spice & Dice or Bend.

Spice & Dice and Bend

11.3.1. Spice & Dice

Spice and Dice are inseparable twins. You can't use one without the other.

You can have a lot of fun with Spice and Dice without understanding how they work.

Dice acts on the gates and triggers of the currently playing Arpeggio or Sequence. It
randomizes all aspects of these targets and changes the distance between two triggers. It
also shortens or lengthens gates or leaves them out.

Arturia - User Manual MicroFreak - Using the Icon Strip

72

You change these values by clicking on the icon and touching the touch strip. You can do
this dynamically by tapping various positions on the touch strip.

How do you apply them?

First of all, to enjoy the variations of Spice and Dice the Arpeggiator or the Sequencer must
be active. Then, with Dice and the touch strip, you set the amount of randomness that will
be applied to the currently playing Arpeggio or Sequence. Zero on the touch strip equals no
effect; maximum on the touch strip equals maximum randomness.

You'll hear nothing yet; you need to add Spice to make the Dice setting take effect. To add
spice click on the Spice icon and slide your finger to the right on the touch strip. The more
Spice you add, the more result you'll hear when you go back to "throwing" the Dice. Here
again, you can apply the effect dynamically by tapping different places on the touch strip.
You can also do this the other way around: set an amount of Spice, then select Dice and
"roll" it by tapping on the touch strip. Repeatedly tapping on different positions will change
the kind of variation applied to the triggers but with the constant intensity that you set with
Spice.

Spice&Dice also (in a very subtle way) randomize octaves, velocity and the release time of
the AMP envelope. The behaviour is similar as the effect it has on gates. Spice is a deviation
from the "normal" value of the parameters. Dice updates the random value per-step.

In short: Spice and Dice are to triggers and gates what Pattern does to pitches. Where
pattern randomizes the pitches of your chord, Spice and Dice will randomize its gates and
triggers. Together they can change a sequence or an arpeggio beyond recognition.

 For the more technically-inclined readers we'll add a more in-depth explanation:

Spice and Dice change the Status of a Sequence or Arpeggio. We'll use a sequence to
illustrate this. All steps in a sequence have a gate length. The default length of these gates
will depend on what you have set in Utility>Preset>Default gate length.

The default gate length is 45%, which is about in the middle between 5% and 85%. A step
with a length of 0 is silent; a step with a length of 100 is a tie (i.e., it will proceed to the next
step without a noticeable pause). Anything in between has a gate length percentage. We call
this string of gate lengths the Status. In a new sequence, all steps will have the default gate
length.

Increasing Spice will introduce a deviation from the default gate length. At maximum Spice,
the gate lengths correspond to what is currently defined in the Status. In between, the gate
lengths linearly morph from the default gate length to the current Status value.

When Dice is active (the icon is lit) pressing the touch strip will modify the Status. Every time
your finger touches the strip a new value (bipolar) is added to the gate length of each step.
Because the value is bipolar some gates will become shorter and some longer. The actual
change introduced will depend on where you touch the strip. Pressing close to the left side
will apply a slight modification to each step. Touching the strip close to the right side will
completely reshuffle the Status.

When releasing the finger, the last gate length sequence that was heard (which was a sum
of Status and the Dice effect) now becomes the new Status, which will - in turn - be modified
when you roll the Dice again.

73

Arturia - User Manual MicroFreak - Using the Icon Strip

 Spice and Dice settings are not saved with a preset; they are intended to spice up your live playing.

What they generate is unique and can never be repeated. Unless of course....you remember to record

your playing into a DAW.

11.3.2. Bend

Bending is a technique where you bend the pitch of a note up-or downward. Press the Bend
icon to enable Bend.

The Bend Strip

The Bend strip is where you perform your pitch bending tricks. The middle of the strip is
the neutral point; if you touch the strip there nothing will happen. If you move your finger to
the right or left, you will hear the pitch go up and down. So far it's not much different from
bending with a wheel. Unlike with a wheel, you can place your finger directly on another
point of the strip. The pitch will then jump instantly to that pitch.

Another thing that makes the MicroFreak unique is that you can specify how the Bend
strip will react to your touch. When in standard mode (which is the default) the bend strip
will behave as described above. In relative mode it does not matter where you touch the
strip, your movement will be added or subtracted from the current pitch. To activate relative
mode, navigate to Utility > Misc > Relative bend and set it to ON.

 ♪ Freaky tip: On the strip you'll see six W-like zig-zag figures tilted 90 degrees. They will help you to

create more accurate pitch bends.

By default the bend range is set to 24 chromatic steps: 12 from the center to the left and 12
from the center to the right. In the Utility menu you can set the range to other distances,
with a maximum of 48 steps (= four octaves). Select Utility > Preset > Bend range to change
the default range.

Tapping the strip enables you to alternate between two pitches quickly. It's a playing
technique only possible on bend strips. It makes a pitch bend wheel look primitive. When
you lift your finger the pitch will drift back to the neutral point in the middle. Another
advantage of the strip is that is ideal for applying natural sounding vibrato to a pitch by
wiggling your finger on the strip.

 ♪ Freaky tip: Musical traditions other than western music have a much richer tradition when it comes

to pitch bending. Try listening to some Indian music. Maybe you'll come to appreciate the complex and

very musical pitch bending techniques used by singers and performers on instruments like the sarod

and the sitar.

Arturia - User Manual MicroFreak - Using the Icon Strip

74

12. THE ARPEGGIATOR

An Arpeggiator breaks up a chord into individual notes: play a chord on the keyboard, and
the arpeggiator will play them back one by one.

To activate the Arpeggiator press the Arp ❙ Seq button. It lights up in white to show it's active
in Arpeggio mode. The button acts as a toggle switch; when you press it a second time you
turn the Arpeggiator off.

The Arpeggiator

A fun way to start the Arpeggiator is to press and hold a chord after pressing the Hold icon.
When you now activate the Arpeggiator, it will kick in and arpeggiate that chord.

Just above the keyboard you'll find four icons; Up, Order, Random, and Pattern. These are
used to select how the Arpeggiator will play the chord you're playing on the keyboard.

The Arpeggiator pattern icons

• Up will play the notes of your chord from left to right or bottom to top, depending
on your point of view. The order in which you press the keys does not matter.
The arpeggiator will always play the individual notes from left to right.

• Order will play the notes of your chord in the exact order you played them. You
can use this to good effect by repeatedly playing the same chord but changing
the order in which your fingers touch the keyboard.

• Random will play the notes of your chord in random order.

75

Arturia - User Manual MicroFreak - The Arpeggiator

12.1. Using Patterns

Click Pattern to put the Arpeggiator in a semi-random mode. Keys you press in a legato
fashion on the keyboard are used by the Pattern algorithm to generate arpeggio patterns.
Each time you press a key the MicroFreak will generate a new pattern. It's a bit like having
a third sequencer.

You have some control over the patterns that are generated:

• The pattern algorithm picks notes within the available octaves as defined by the

Oct | Mod button; press this button a few times to select the arpeggio range.

• The lowest note you play on the keyboard will appear twice as often in the
sequence as the second and higher notes of the chord you play. In other words,
the root note of the chord is emphasized.

• The length of the arpeggio generated by the Pattern algorithm can be set in the
preset utility parameters: Utility>Preset>Seq length. The length you set here will
also define the length of the Sequencer and the Spice & Dice mode. The default
length is 16. The minimum length is 4, the maximum length 64.

When you find a particularly interesting pattern, press the Hold button and refrain from
touching the keyboard; if you were to touch the keyboard again the Pattern algorithm would
create a new Pattern, replacing your current pattern. You also have the option to turn your
pattern into a sequence; refer to the paragraph below for details.

Pressing the Hold button while the arpeggio is playing will allow you to lift your fingers from
the keyboard. The arpeggio will continue, and you'll have an extra hand to tweak knobs.
Deactivate Hold to clear the pattern.

12.1.1. Creating Pattern Variations

It easy to create variations on a pattern; just add or remove a finger. Every time you do this
a new random pattern will be generated.

 You can't save these patterns with the Preset. They are a performance feature. Once you lift your

fingers from the keyboard the pattern is gone forever.

12.2. Gates and Triggers revisited

Each time you press a key you generate a gate. The gate stays high for as long as you
hold the keys. The Arpeggiator and the Sequencer generate gates. For you to hear this the
Amp|Mod button next to the Envelope generator must be OFF. If it were on, the gates of the
Arpeggiator/Sequencer would trigger the Envelope, which would then take over and instruct
the internal amplifier how to amplify the sound.

In its OFF position the Arpeggiator/Sequencer creates the gates. You can set the length of
these gates in Utility: Utility>Preset>Default gate length. To hear the effect of setting the gate
length, turn the Amp | Mod button off, hold down a chord, and tweak the gate length setting
in Utility.

Arturia - User Manual MicroFreak - The Arpeggiator

76

12.3. Arpeggio Rate

The Rate knob determines the speed of your arpeggios. When the Sync LED is "Off", Rate
changes are displayed as BPM (Beats Per Minute). The default rate is 120.0 bpm. In this
mode the Arpeggiator will operate independently from the internal clock or an external clock
source.

The Arpeggiator and the Rate knob

When Sync is "ON", the Arpeggiator will sync to the internal clock, and the Rate values are
shown as divisions from this clock. While moving the Rate knob keep an eye on the OLED
display: it will display the tempo value in tempo divisions. The Division Rate tells you how the
arpeggiator is currently synced to the clock. For example, if it reads 1/2 (one over two), it will
play a note with a length of two beats. If the display reads 1/4 the Arpeggiator plays quarter
notes (four notes per measure). It's useful to remember this, because this way of syncing is
the same for an arpeggio and the sequences. The available time divisions are listed below:

•

•

•

•

•

•

•

•

•

•

•

1 whole note

1/2 note

1/2 note triplet

1/4 note

1/4 note triplet

1/8 note

1/8 note triplet

1/16 note

1/16 note triplet

1/32 note

1/32 note triplet

 1/4 corresponds to a standard metronome tick.

77

Arturia - User Manual MicroFreak - The Arpeggiator

12.3.1. Using Sync

Of all the skills you can master in music, mastering sync is one of the most important. Sync
is what happens when two or more units (effects, oscillators, filters, voices) synchronize
their rhythms to each other. Sync is also how we humans link to the flow of music. If
you want to capture the attention of your listeners you have to understand how to make
captivating sync patterns.

The MicroFreak can sync to your DAW or external synth in different ways: its Rate dial
allows you to sync proportionally; at double speed, at half-speed, or somewhere in between.
The MicroFreak has three modules that can be synced: the LFO, the Arpeggiator and the
Sequencer. In synced mode, you can use them to create accents or rhythmic shifts.

12.4. Making it Swing

Hold SHIFT and turn the Rate encoder to set a Swing amount. If you've listened to music
before (it's unlikely you haven't) you have heard swing. It's when musicians play just before
or after the beat. This is often used in Jazz and South American music. It awakens an
emotion of freedom, of not being forced into a fixed rhythm. It is particularly effective when
you mix "straight" notes with "swung" notes. To activate Swing, hold the blue SHIFT button
and press Rate. The swing range goes from 50% - 75%. By default, it is 50%.

12.5. Arpeggio Range

By default the Arpeggiator will play the notes you hold down and stay within the limits of
an octave. The Oct ❙ Mod button will extend the notes beyond that range. By changing the
octave range, the Arpeggiator will also play notes in the octaves above the chord you play.
Press the Oct ❙ Mod button to change the Range.

The Arpeggiator and range

Octave range settings:

•

•

•

•

"1" only notes held down on the keyboard are played

"2" held down notes plus the same notes repeated one octave above.

"3" held down notes plus the same notes repeated two octaves above.

"4" held down notes plus the same notes repeated three octaves above.

Arturia - User Manual MicroFreak - The Arpeggiator

78

The Arpeggiator has another freaky feature that becomes apparent when you press the
Octave Up or Down button (to the left of the Shift button) while playing an arpeggio. On most
arpeggiators pressing the octave down or up button will transpose all currently held notes in
the arpeggio an octave down or up. The MicroFreak Arpeggiator will keep the pitch of your
arpeggio intact. If you change the octave down or up the new notes you play will be added
to the arpeggio in the new octave range.

And yes, you can transpose an arpeggio while it's playing: play an arpeggio, press hold. Now
press shift and use the keyboard to transpose your arpeggio. The display will show how far
up or down you are transposing.

When scale mode is active this can have a peculiar affect on your arpeggio, notes that
would normally be in your arpeggio will be forced in the current scale causing duplicate
notes. If for example you've set the scale to C major and you play an arpeggio with an E and
an Eb in it, which is foreign to the C major scale. The arpeggio will play the E twice. Which
causes a ratcheting effect.

Tip: Keep Utility>Preset>Scale open while tweaking transposition and scale of your arpeggio.

12.6. Transferring an arpeggio to the Sequencer

Arpeggios are great for discovering melodic grooves that work. The MicroFreak has a nifty
feature that enables you to transfer an Arpeggio pattern to a sequencer. It works like this:

• Press the Arp | Seq button to activate the arpeggiator.

• Experiment until you find an arpeggio you like. (this works in Paraphonic mode

too!)

• Press Hold and experiment with Spice&Dice settings.

• Press Shift + Up|A or Order|B to transfer the Arpeggio to one of the two sequence

patterns. The Arpeggio will now play in the sequencer.

It's good to know that the arpeggio you transfer will be extended to the current length of the
sequencer pattern, so if your arpeggio is three notes long and you transfer it to a sequencer
pattern that is eight notes long, the result will be an eight-note sequencer pattern.

Two extraordinary things will happen:

• Spice & Dice effects you have added to the arpeggio are transferred to the
sequence as well. It is the only way to get these effects in a sequence. Because
when you are recording in sequence mode Spice&Dice are automatically
disabled.

•

If your arpeggio contains chords you made while in Chord mode these chords
will be transferred to the sequence as well!

79

Arturia - User Manual MicroFreak - The Arpeggiator

12.7. Arpeggiator fun

It's possible to use the arpeggiator as a modulation source. However, the effect will be
subtle; you'll have to set the modulation amount reasonably high for the modulation to have
an impact. It will help to extend the range of the arpeggiation before applying its modulation
to destinations on the matrix. Combining it to modulate two destinations will work even
better. An example:

• Set oscillator type to Waveshaper

• Activate the envelope generator by pressing Amp | Mod

• Set Attack to 0 ms, Decay to 100 ms, Sustain to 30% and Filter Amt to max

•

In the Key|Arp row on the Matrix link Assign1 to glide with modulation amount to
about 0.2

• Set glide to anywhere between 1/32 and 1/16

• Link Assign2 to the envelope attack with mod amount 10

• Press the Pattern icon to create a new arpeggio pattern every time you lift a

finger from the keyboard.

To make your pattern even more interesting, press the Spice icon and set the amount of
Spice with the touch strip. Then press the Dice icon and touch the touch strip to roll the Dice.
This will apply a varying amount of glide to the arpeggio and slow down the attack when
the arpeggiator is in the top octaves.

Freaky tip: An (external) delay is an arpeggiator's best friend.

12.7.1. Spicing up your Arpeggios

Use the Bend strip to change the pitch of your arpeggio.

 If you need strong pitch variation you might want to change the default bend range in Utility

(Utility>Preset>Bend range). If you set it to 12, you can control the pitch of your arpeggio within an octave

range by tapping on the Bend strip. For this to work Relative Bend must be OFF. You can check this in

Utility>Misc>Relative bend>OFF.

 ♪ Freaky idea: One of the most overlooked applications of an arpeggiator is merely playing one

note instead of a chord. When you set the Arpeggio to medium speed, you can create rhythms by

rhythmically lifting and replacing your finger on the keyboard. You can take this idea further to create

Hoketus. Hoketus is the name for a technique where you repeat one note over and over and never

change its pitch, but you do change all the other parameters of the note: its timbre (LFO -> Filter Cutoff),

the Attack, Sustain, and Decay stages of the note and its volume (keyboard pressure).

 ♪ Another Freaky idea: You can also change the pitch using a tiny amount of pitch modulation

from an LFO or the Cycling Envelope generator. You then emulate a monochord, a medieval instrument

which has 30 or more strings all tuned to the same pitch but with now and then a string tuned one pitch

above or below the base pitch.

Arturia - User Manual MicroFreak - The Arpeggiator

80

13. THE SEQUENCER

The sequencer of the MicroFreak is like a hidden gem. At first look you may not even notice
it is there, but once you've discovered what it can do it becomes indispensable for creating
sound on the MicroFreak.

The Sequencer of the MicroFreak is paraphonic. Paraphonic means that it can record and
play back up to four voices, sharing the same filter, simultaneously. For more info about
Paraphony [p.10] refer to the MicroFreak overview.

The Sequencer is a fascinating musical tool. It records the pitch of the note you play, the
force with which you play it (velocity) and the duration of a note. You can play back what
you've recorded with variable speeds.

If that was all the sequencer could do it would be nothing more then a glorified piano
roll
that plays melodies on demand. What makes the Sequencer on the MicroFreak
extraordinary is that it can also record movements (events) of up to four knobs. This feature
has been implemented in many DAWs and now also in the MicroFreak. More about the
modulation recording tracks [p.87] later.

The sequencer of the MicroFreak allows you to record two patterns: A and B. In play mode
you can alternate between these two patterns by pressing the A or B button. These patterns
can be 4 to 64 steps long. You can set this length in the Utility > Preset > Seq length menu.
Once you've set the length, both Sequencers and their modulation tracks will share it. You
cannot have a Pattern A with 16 steps and a Pattern B with 12 steps.

The Arpeggio and Sequencer Section

To activate the sequencer, Hold SHIFT and press the Arp ❙ Seq button.

The Shift button

The Sequencer allows you to record in "step" time; one step at a time and in Real time. More
about this later. Recording in step time has the advantage that you can fine-tune everything
related to each step - its pitch and velocity and four other parameters - before continuing to
the next step.

When the sequencer is being used as a modulation source and routed in the Matrix, each
step can send pitch and velocity to a destination.

81

Arturia - User Manual MicroFreak - The Sequencer

13.1. Using the Sequencer

If you look carefully at the Icon strip, you'll see text printed at the bottom of each icon
divided by a vertical stripe: Up | A, Order | B, Random | 0, and Pattern | >.

Which function is activated depends on the state of the Arp | Seq button above it. When the
Arp | Seq button is lit in white, the first five icons are linked to the Arpeggiator; the active
functions are "Hold", "Order", "Random" and "Pattern".

But when you activate the Sequencer by holding Shift + Seq, the icon button functions
change to Tie/Rest, Sequence A, Sequence B, Stop, and Start.

The Sequencer controls

The Sequencer controls:
Stop and Start

The Tie/Rest icon

Icon

Function

Tie / Rest

Use during step recording to extend gate time of a note or enter a silent step

A , B

Select one of the two sequencers

O

>

Turns on step recording when seq is stopped

Toggles between Play and Stop, stops step recording

O and >

Press play and then press Record to activate realtime recording

An alternative way to start real-time recording is to press the O button (Rec) while the
sequencer is playing.

 In "Play" mode the MicroFreak will send MIDI clocks and analog clock signals that you can use to

sync an external sequencer. When you toggle between Play and Stop the MicroFreak will send MIDI

start and stop signals that will start/stop external sequencers.

Arturia - User Manual MicroFreak - The Sequencer

82

Many presets in the MicroFreak have sequence patterns embedded in them; some of those
patterns will be paraphonic and others will use only one voice. When in Paraphonic mode
all voices in the sequence will play back; with Paraphony "OFF" only the lowest note of a
step will be played.

Notes you play on the keyboard will always have a higher priority than the notes the
sequencer plays. If you hold down two keys on the keyboard while in Paraphonic 4-voice
mode, the sequencer will only have two voices available to play back a recorded sequence.
In that case, the sequence will play back the lowest two notes in the sequence.

 There is only one pitch CV output at the rear of the MicroFreak. When you play back a sequence

pattern a step's lowest note will be transmitted. When playing the keyboard the last note you play will

be transmitted.

If you play chords on the MicroFreak, either with the keyboard or using the sequencer,
everything will be transmitted via MIDI including aftertouch and velocity. The four note
paraphonic limitation does not apply here: if you play a ten note chords all of that data will
be transmitted over MIDI. Notes arriving at the MIDI In port have the same priority as notes
you play on the keyboard. If in paraphonic mode there are voices left the sequencer will use
them. It has the lowest priority.

13.1.1. Selecting and playing a sequence pattern

In a new preset the sequence will be empty. If you load a factory preset or a preset
you created before, sequences patterns A and B will sometimes contain sequencer data.
Pressing the A or B button will load the corresponding sequence pattern from RAM. Hitting
one of the A or B buttons will show “Sequence X Loaded” on the display.

You can play sequence pattern A and B alternatingly. When "play" is active, you can switch
from pattern A to B by pressing the A or B icon. The two pattern will always have the
same length inside one preset. You cannot play two sequences patterns simultaneously. The
sequence patterns you record become part of the preset you record them in.

If you want to undo the most recent recording of a sequence pattern, hold Shift and press
the icon of the sequence you want to reset to its previous state (A or B). The MicroFreak will
then load the most recently saved sequence pattern from memory and erase the existing
one. To erase a sequence pattern, hold the Sequencer A or B button and press Hold. Both
buttons will start blinking. When blinking stops, the sequence pattern is erased.

 When performing, it is good to know that you can erase/reload pattern A while pattern B is playing

and vice versa.

Once you've recorded a sequence pattern there is no need to press play in order to hear
them; just press a key on the keyboard and the currently active pattern will start playing.

A sequence can store both notes and modulation data. More about this later.

83

Arturia - User Manual MicroFreak - The Sequencer

13.1.2. The Sequencer and the keyboard

The Sequencer and the keyboard can work together in exciting ways. When a sequence is
playing in Monophonic mode and you press a key on the keyboard, the sequence will pause
and resume as soon as it detects that you are no longer holding down keys. This allows for
some innovative playing techniques like a dialogue between you playing the keyboard and
the sequence that is playing. By playing keys and lifting your fingers rhythmically, you can
augment the playing sequence in interesting ways. In Paraphonic mode the sequence does
not pause; it will continue to play and accompany your keyboard playing.

The Sequencer can also play Unison [p.114] voices, as well as trigger chords when
MicroFreak is in Chord Mode [p.114]. The priority for voice allocation is that notes played on
the keyboard are first in line, then incoming MIDI notes, then notes played by the Sequencer.

13.1.3. Recording a sequence

In a sequence pattern you record:

• A length (shared between both sequences)

• Notes, Velocities for each step + Tie or Silence status

• Up to four parameters that you record in the Modulation tracks

 Gate length is saved in the sequence. You set a Global gate length for each preset in Utility. This

enables you to create several identical presets with different gate lengths.

13.1.3.1. Step-time recording a sequence

Make certain Play is turned off and press Record to enter step-recording. The Record button
will light up. Hold one or more notes.

You can change your mind about which notes you want to record in this step. In Mono
and Paraphonic mode, the first four notes you hold before releasing all notes are stored
in the step. The notes that you play are stored in the step. Once all notes are released the
sequencer moves to the next step.

 The previous content of a step in the sequence will be overwritten when you record new information

in a step.

To create a silent step press the Tie/Rest icon. The sequencer will then advance to the next
step without recording note data.

To hold a note or a chord over several steps, hold the note/chord and press the Tie/Rest
icon. The sequencer will advance to the next step and record the note(s) you hold in the step
before advancing to the next step. You can repeat this as often as you want.

An example: Hold a chord in Paraphonic Mode and press Tie. The current step is tied and the
sequencer will jump to the next step where the same notes are copied. when releasing the
chord, the sequencer will advance one more step. In single-voice mode, "hold note, tap Tie"
creates a 2-step note. Lifting you finger will advance the sequencer to the next step.

Arturia - User Manual MicroFreak - The Sequencer

84

Keep an eye on the display; it will tell you which step you are currently recording and which
notes are being recorded into this step. When you arrive at the last step of the sequence
MicroFreak will automatically switch to Play mode.

When in step recording mode (Rec ON, play OFF) the sequencer is also monitoring the
incoming MIDI data stream. If there is a START/PLAY signal in the stream (a Play button is
pressed on an external sequencer or MIDI start command initiated in a DAW) the sequencer
will go into real-time recording mode.

13.1.3.2. Editing a sequence

Once you have entered the desired notes you can fine-tune the sequence, either by
changing the notes you've stored in a step or by adding modulation to a step:

•

select the sequence you want to edit (A or B)

• make certain that "play" is turned off and press record

•

turn the Rate/Swing encoder to "scrub" through the sequence.

The MicroFreak will play back all data stored in a step including modulation events you have
stored in the modulation tracks [p.87]. When you reach the end of the sequence, it cycles
back to the beginning.

If there is a step on which you want to change the stored data, select it with the encoder
and hold new notes to replace the ones that were previously stored in the step.

To erase the content stored in a step press the "Hold" icon; this inserts a rest in that step.

 When in step mode the active sequencer can also record notes and velocities you play on an

external keyboard into the MIDI In port.

 When in step mode, turning [Shift]+[Rate/Swing] allows you to change the length of the sequence on

the fly.

13.1.3.3. Real-time recording a sequence

Real-time recording is similar to recording on a loop pedal. In step recording, only the
Record icon is lit up. To record in real time, activate "play" and then press Record. When
the Record icon starts blinking the track is ready and waiting for you to play notes or knob
movements into it.

85

Arturia - User Manual MicroFreak - The Sequencer

 When recording, notes will run continuously and record whatever you play replacing what you have

recorded in the previous loop. When recording modulation the sequencer will run one cycle and then

punch out (stop recording).

Real-time recording is very much a fun feature: you cannot make complicated edits, but
some editing is possible:

•

•

If during recording you press a note,
content.

it will overwrite the current recorded

If you want to erase notes or modulation events in the sequence, press Hold
when recording is active at the moment these notes or events occur. They will be
replaced by silence, and you can fill them in during the next record cycle.

If your MicroFreak is connected to a computer running a DAW (a software sequencer) you
could prepare a complex sequence in the DAW, set the MicroFreak to Real-time recording
and press play on the DAW. It will take some experimentation to get this right, but it can be
done. At this point the Modulation tracks are still empty, so you can enhance the sequence
by recording knob movements on the modulation tracks.

Tip: When recording in real time the number of steps in a sequence becomes important;
more steps mean that you can record in a higher "resolution". You set the number of steps
in Utility > Preset > Seq length. Choosing a low recording rate helps to insert notes and
modulations with more precision.

 You can mix step-time recording with real-time recording. To do so, start recording a sequence in

step-time mode by pressing the recording icon. If at a certain step you want to switch to real-time

recording press the play icon, the remainder of the sequence will now be recorded in real-time. It's a

one-way thing, you can not switch from real-time back to step-time.

13.1.3.4. Copying a sequence

To copy a sequence from A to B or from B to A, first press the source sequence hold it and
press the destination sequence. It's a good idea to practice this first with sequences that are
non-critical for your musical career (;-).

Say you want to copy sequence A to sequence B:

• Hold the icon of sequence A

• Press the icon of sequence B to complete the copy.

Keep an eye on the display it should confirm that you've made the copy correctly. To copy
Sequence B to A first hold B then press A.

Tip: Copying sequences can be a source of creative delight. You've created a sequence A
with some control tracks. Copy A to B and record some control tracks with other forms of
control. When now during a performance or a recording session you switch between A and
B, the melodic part of the sequence remains the same but the timbral part gives it a different
flavour.

Arturia - User Manual MicroFreak - The Sequencer

86

13.1.3.5. Using the Arpeggiator to create sequences

There is an alternative way to create sequences: create an arpeggio and transfer that
arpeggio to a sequence. You'll find details about how to do that in the Arpeggio chapter. The
advantage of creating sequences this way is that the Spice&Dice oddities you have added
to your arpeggio will be copied to the sequence as well! It's the only way to get Spice&Dice
effects in a sequence. In standard sequence recording mode Spice&Dice are disabled.

13.2. The Modulation Tracks

Without a doubt, the most exciting feature of the Sequencer are its four modulation tracks.
A sequence pattern record notes (the pitch of a note) and velocities (the strength with which
you hit the key); modulation tracks record knob positions.

In Step-recording mode the modulation tracks enable you to take snapshots of knobs and
record these snapshots along with a sequencer step. Recording on a modulation track is a
two-step process: first, you record a sequence in the standard track, and when done you fill
the modulation tracks.

 When recording in Step mode, pressure data isn't saved with the Preset since it can't be recorded in

Step-recording mode or edited.

There are as many modulation steps as there are sequencer steps. In a track you can store
the states of only one specific knob. As there are four tracks you can store the values of four
knobs, up to 64 values for each knob.

 The actual number of values you can store depends on the length of the sequence. You can store 16

values in a 16 step sequence and 64 in a 64 step sequence.

 Note and Modulation recording can happen simultaneously; hold the notes and turn the knobs.

13.2.1. Step-time recording of modulation

To record modulation in step time:

• Select the sequence into which you want to record events.

• Make certain "play" is off and turn on step recording by pushing the record

button.

• Turn the Sequencer Rate knob until you are on the first step of the sequence, or

select another step in the sequence if that's where you want to add events.

87

Arturia - User Manual MicroFreak - The Sequencer

• Now turn a knob you want to record. While turning the knob nothing will be
recorded, but you can monitor what is happening in the display. The MicroFreak
will show you the step you are adding modulation to, the active modulation slot,
the parameter and its modulation amount. Once you've found a knob position
that you want to record, let go of the knob. MicroFreak will take a snapshot of the
knob and store it with the step.

• Turn the Sequence Rate knob to the next step and move the same knob to
another position you want to record. Continue to do this until you've filled every
step with a snapshot.

 When you try to record the activity of a fifth knob the display will flash a message saying "Memory

full".

If you touch a knob when in step recording mode, that button will automatically be assigned
to the first available modulation track. When starting with a new sequence that will be
modulation track one. Touch another knob, and it will be assigned to the next available
modulation track. You may have guessed by now that there are two ways to fill modulation
tracks: you can fill a track and then continue to the next track taking snapshots of another
knob, or you fill a step and record four knob positions simultaneously and then continue to
the next step until all steps are full. Both methods have their pros and cons.

The Rate knob

By turning the Rate knob, you can step through the sequence and edit the modulation tracks.
The note stored in a step will trigger/sound when you pass over a step, and the modulation
stored with that step will be performed. This helps to remember where you are and what
you've created so far. If necessary, you can change the modulation stored in a step by
turning the corresponding knob. You can also press the Oct | Mod button to navigate through
active modulation tracks.

Arturia - User Manual MicroFreak - The Sequencer

88

You can record events from:

Knob

Oscillator Type

Function

modulates the type of the currently selected oscillator

Oscillator Type (w/ Sample selection enabled)

modulates the sample selection within the sequencer

Oscillator Wave

Oscillator Timbre

Oscillator Shape

Filter Cutoff

Filter Resonance

Envelope Attack

Envelope Decay

Envelope Sustain

modulates the wave of the currently selected oscillator

modulates the timbre of the currently selected oscillator

modulates the shape of the currently selected oscillator

modulates the cutoff frequency of the filter

modulates the bandwidth of the filter

modulates the attack stage of the Standard envelope

modulates the decay stage of the Standard envelope

modulates the sustain stage of the Standard envelope

Envelope Filter Amt

modulates the amount of signal sent from Envelope to Amp

LFO Rate

modulates LFO rate

Cycling Envelope Rise

modulates the rise stage of the Cycling Envelope

Cycling Envelope Fall

modulates the fall stage of the Cycling Envelope

Cycling Envelope Hold

modulates the hold stage of the Cycling Envelope

Cycling Envelope Amt

amount of CycEnv sent to the Matrix

Matrix Modulation Amt

Sets the modulation amount of a Matrix point

Glide

Glide amount

 It is not possible to assign SHIFT + Knob parameters such as the Shape of the Cycling Envelope

stages. Neither can you assign control buttons (Shift, Amp | Mod LFO Mode) or icon buttons (Spice, Dice,

etc.)

To clear the modulation in a track, press the Oct | Mod button several times until the light of
the track you want to erase blinks. Then hold Oct | Mod button and press the Hold icon.

 A quick way to clear all modulation tracks is to hold the Oct | Mod button and press the Hold icon

repeatedly.

89

Arturia - User Manual MicroFreak - The Sequencer

13.2.2. Real-time recording of modulation

Modulation recording in real time is similar to recording in step mode. The only difference is
that both Play and Record need to be active. Recording will occur from the first step where a
movement was recorded. It will then make one full loop and stop just before the step where
you started the modulation recording. Once the loop finishes, the Record button turns off
and real-time recording ends.

Erasing a modulation track is the same as in step-recording mode:

• Press and hold Oct | Mod

• Press “Hold” (no need to hold it)

• Current modulation track is erased

• Keep Oct | Mod held and press “Hold” to erase the next modulation track. Press

Hold repeatedly if you want to clear all modulation tracks.

 It is possible to record knob movements from external controllers in the Sequencers and to Record

knob movements of the MicroFreak on external devices such a DAW.

For an overview of knobs/parameters that can be recorded in a modulation track refer to
the table in the step-time recording paragraph above.

13.2.3. Smoothing

Smoothing (also called "slew") makes modulation transitions less abrupt. It is the same
effect that you achieve by applying Glide to pitches: pitch changes will become more
gradual when you move from one pitch to another.

Smoothing does the same for modulation. You can apply it to each of the four modulation
tracks in Utility: select Utility>Preset>Seq (X) smooth. By substituting X with one, two, three or
four you apply the smoothing effect to one of the modulation tracks.

Smoothing works in both Step mode and Real-time mode but the setting with which a blank
sequence starts will be different:

• A new Seq Mod track that is created using step-recording is set to Smooth Off by

default.

• A new Seq Mod track that is created using the real-time recording is set to

Smooth On by default.

 Overwriting on an existing track does not change the Smooth setting.

Arturia - User Manual MicroFreak - The Sequencer

90

13.3. Fun with Sequences

To make a sequence come alive, it's good practice to add rests and ties to it. You have
64 sequencer steps at your disposal, so there is plenty of space to insert them. A 32-step
sequence with rests and ties played at double speed will sound a lot more interesting than
a 16-step sequence with all steps filled and played at normal speed.

13.3.1. A hidden feature

There's a hidden feature in the sequencer modulation tracks. The Modulation tracks of
Sequencer A and B share modulation consequences, and you can take advantage of that.

Say you've created a modulation track for sequencer A, which plays an eight-step sequence
that changes the oscillator type on the first and the 4th step. If you switch to sequencer B in
the sixth step, you'll hear that it plays with the oscillator type that was selected in sequence
A on step four. If you change from A to B on the third step of A, B will play with the oscillator
type set in the first step of A.

 ♪ Freaky idea: If you need more sequences that use the same sound, copy a preset and record

new sequences into this second preset. By switching from the first to the second preset, you now have

access to four sequences with eight modulation tracks. Repeat as needed.

 Most of the tips below can be applied to both the Arpeggiator and the Sequencer.

 Tip: The Matrix is both a routing system and a signal mixer, and you can make good use of that for

creating memorable sequences and arpeggios.

91

Arturia - User Manual MicroFreak - The Sequencer

13.3.2. First experiment: mixing pitches

By default, the Sequencer will modulate the pitch of the oscillator; no need to use the Matrix
for that. The fun starts when you also connect the LFO to the pitch input. The two control
signals now share the same input to the oscillator and will be summed. If you select a
rectangle wave on the LFO and dial-in a fairly slow LFO speed, the pitch of the sequence
will jump up and down.

Here again,
it will make a big difference how you use the Matrix encoder to set the
modulation amount of the matrix points. Adding a small modulation amount will cause the
pitch of the sequence to drop further when the LFO wave is low, or higher when the LFO
wave is high.

Variation:

The effect will become even more interesting when you simultaneously assign the LFO to
the filter cutoff amount. When you set the mod amount to maximum, the LFO will close the
filter completely, and there will be no sound. Parts of your sequence will suddenly be silent.
Selecting different LFO waveforms and modulation amounts will create different silencing
effects.

The Random wave of the LFO is a very versatile modulation source. When you apply it
to the pitch of the oscillator while a sequence is running, the sequence will be transposed
randomly and at unexpected moments when you vary the speed of the LFO. Applying more
modulation will make the pitch stream of the sequence more extreme. Applying negative
modulation (anything below zero is negative) will invert the pitch modulation.

13.3.3. Second experiment: Hoketus

Hoketus is an ancient technique. It's when you restrict yourself to using only one pitch in
a running sequence, but change everything else: timbre, attack, decay, pressure, rhythm.
The MicroFreak can lift this technique to new heights because it has modulation options that
composers and performers in ancient times could only dream of.

• Create a 16-step sequence where each step has the same pitch. You can insert

ties and rests randomly to make the sequence more interesting.

• Set the sequencer to step mode by pressing the record icon.

• Turn a knob of your choice to record a modulation. Repeat this with other knobs

if you want to apply multiple modulations.

• Use the Rate knob to advance to the next step and repeat this process until the

end of the sequence.

The result should be a one-pitch sequence with all parameters changing continuously.

A variation of this technique is to emulate a Monochord. A Monochord is a medieval
instrument with 12 or more strings, mostly tuned to the same pitch, with 4 or 5 strings
detuned one or two semitones below or above the central pitch. This works best with one or
two modulation tracks. Let your ear be the judge!

Arturia - User Manual MicroFreak - The Sequencer

92

14. MICROFREAK CONFIGURATION

The MicroFreak has many settings that you may want to adjust, and please don't hesitate
to do so. It's not like the temperature setting on a fridge that you set once and then forget
about it. Changes in these settings can make all the difference. The right settings will help
you to develop a personal synthesis style.

Access to the
configuration setting in
Utility

For example, you've created a sequence and used one of the modulation tracks to add a
varying amount of glide to some of the steps. By changing some of the Utility settings you
can explore alternative options:

What difference does it make when I change the Glide setting from Time to Rate? Try
changing the settings at Utility > Preset >Glide Mode.

Does resetting the envelope make the sequence snappier? Try changing the settings at
Utility > Preset > Envelope legato.

Will changing the sequence smooth settings create a different mood? Change the settings
at Utility > Preset > Seq (1-4) smooth.

The Settings under Utility > Preset are saved with your preset. Each Preset can have its own
Volume, Bend Range, Pressure, etc. All other settings are Global; if you set "A" reference to
A=441 Hz, then all of your presets will use that tuning standard. That's a good thing.

You can change these settings on the MicroFreak in Utility or on your computer in the MIDI
Control Center (MCC). In Utility on the MicroFreak, you can adjust settings specifically for a
preset. These settings are not available in the MCC. We've listed the differences below. For a
more detailed description of the settings skip to the MIDI Control Center section.

93

Arturia - User Manual MicroFreak - MicroFreak Configuration

14.1. Utility & MIDI Control Center

The utility menu is split in two categories, reflected in the two sections below.

Both are constituted of tables indicating when a parameter is available or not, with:

• X = available,

• 0 = not available.

14.1.1. Preset

Category

Parameter

Description

Utility

MCC

Voice

Bend Range [0

… 24]

Glide

[Time,

Rate]

mode

Sync,

Unison Spread

[0.001-12.000]

Unison

Count

[2-4]

From zero to two octaves

Defines whether the Glide knob introduces a time-based ,

a time synced or a rate-based glide effect

Defines amount of spread between the four voices

X

X

X

Defines number of voices that will be part of unison mode

X

0

0

0

0

Category

Parameter

Description

Utility

MCC

Modulations

Envelope Legato

[OFF, ON]

Envelope

Snap

[OFF, ON]

Envelope resets on keyboard trigger

Creates a sharper decay on the Envelope

LFO retrig [OFF,

Retrigger mode: retrig off, retrig when receiving

ON, Legato]

keyboard trigger, no trig when playing legato

Press

mode

[Aftertouch,

Velocity]

Selects Pressure mode

Key/Arp

Mode

Generates a new random value for each key pressed

[Linear, Random]

when Random is selected

Velo Amp Mod [0

… 10]

Determines how velocity will affect volume output

X

X

X

X

X

X

0

0

0

0

0

0

Category

Parameter

Description

Utility

MCC

Preset Volume

Preset Volume [-12 to +12]

Relative preset volume

X

0

Arturia - User Manual MicroFreak - MicroFreak Configuration

94

Category

Parameter

Description

Utility

MCC

Scale

Scale

Scale

select:

global,

off, major, minor,

harmominor,

dorian,mixolydian, blues, penta

Root Note

Root select: C, C#, D, D#, E, F, F#, G, G#, A, A#, B

X

X

0

0

Category

Parameter

Description

Utility

MCC

Seq/Arp

Seq Length [4 to 64]

Sets sequence length

Default gate length [10

Default

length is 50. Sets default sequencer/

to 90]

arpeggio gate

Seq 1 smooth [OFF, ON]

Sets sequence smoothing for sequencer MOD

track 1

Seq 2 smooth [OFF, ON]

Sets sequence smoothing for sequencer MOD

track 2

Seq 3 smooth [OFF, ON]

Sets sequence smoothing for sequencer MOD

track 3

Seq 4 smooth [OFF, ON]

Sets sequence smoothing for sequencer MOD

track 4

X

X

X

X

X

X

0

0

0

0

0

0

Category

Parameter

Description

Utility

MCC

Vocoder

Vocoder Hiss Mode [Off,

Determines if the hiss is heard or not when

Switched, Pass]

using the vocoder

Vocoder Hiss Volume [-20 to

Sets the volume of the hiss when using the

0]

vocoder

X

X

0

0

95

Arturia - User Manual MicroFreak - MicroFreak Configuration

14.1.2. Global

Category

Parameter

Description

Utility

MCC

MIDI

Input chan [All, 1 … 16,

Sets the default channel on which the MicroFreak

None]

receives MIDI

Output chan [1 … 16]

Output

dest

[None,

USB, MIDI, BOTH]

Sets the default channel on which the MicroFreak

transmits MIDI

Defines how MIDI data is transmitted

Local [Off, On]

Turn local editing of parameters (knobs) on or off;

default is "on"

Arp/Seq MIDI out [Off,

On]

Defines whether Arp/Seq is transmitted over MIDI

Thru [Off, On]

When "On", MIDI In data is echoed to the MIDI Out.

Knob send CCs [Off,

Defines whether knobs send CC data. CC data

On]

enables you to control external synths.

Merge

[USB+KBD,

Defines how keyboard data is merged in the MIDI

MIDI+KBD, BOTH+KBD]

stream

X

X

X

X

X

X

X

X

X

X

X

X

X

X

X

X

Category

Parameter

Description

Utility

MCC

Sync

Source [Int, USB,

MIDI, Clock, Auto]

Clock [One step,

2PPQ,

24PPQ,

48PPQ]

defines the tempo source of the MicroFreak

allows you to adjust the Tempo setting to other PPQ

standards

Global Tempo [Off,

When set to "On" the tempo settings of a preset are

On]

ignored. Tempo remains at the most recent set tempo.

X

X

X

X

X

X

Category

Parameter

Description

Utility

MCC

CV/Gate

Pitch format [1V/

Defines the voltage level the MicroFreak will output at the

Oct, Hz/V,

1.2V/

CV out. 1V/Oct (eurorack and others), Hz/V or 1.2V/Oct

x

Oct]

(Buchla)

Gate format

[S-

Trig, V-Trig 5V, V-

Trig 12V]

Defines the gate voltage level the MicroFreak will output

at the gate out

Pressure

range

Sets the pressure voltage range the MicroFreak will

[1V … 10V]

output at the Press out

0V reference [C-1

Refers to which note will output zero volts when pitch

… G8]

format is set to 1V/Oct or 1.2V/Oct

1V reference [C-1

Refers to which note will output one volt when pitch

… G8]

format is set to Hz/V

x

x

x

x

x

x

x

x

x

Arturia - User Manual MicroFreak - MicroFreak Configuration

96

Category

Parameter

Description

Utility

MCC

Controls

Knob

catch

[Jump, Hook,

Scaled]

Click to load

[Off, On]

Osc

Knob

Speed

[Slow,

Fast]

Different methods to match the physical knob position with

the digital value it represents

x

Sets whether scrolling through presets loads them

immediately or whether an additional click is needed to

x

load them

Sets whether the Wave, Timbre, and Shape knobs in the

Digital Oscillator section change values slowly or quickly

KBD sensitivity

Sets the response level of the keyboard for both Pressure

[10% … 100%]

and Velocity

Aftertouch

curve [Lin, Log,

Sets the keyboard response curve for Aftertouch

Exp]

Velocity curve

[Lin Log, Exp]

Relative Bend

[Off, On]

Sets the keyboard response curve for Velocity

Start bend at point where you touch the Bendstrip

x

x

x

x

x

x

x

x

x

x

x

x

Category

Parameter

Description

Utility

MCC

Global

Scale

Scale

Scale select: off, major, minor, harmominor, dorian,mixolydian,

blues, penta, off

Root Note

Root select: C, C#, D, D#, E, F, F#, G, G#, A, A#, B

x

x

x

x

Category

Parameter

Description

Utility

MCC

Master

tuning

Cent offset

[-50 … 50]

A

Reference

[427.47-

453.89Hz]

Deviation from global tuning in Cents

x

The western tuning standard sets "A" at 440 Hz. This setting

(which is basically the same as changing Cent offset) retunes

x

A to another pitch.

x

x

97

Arturia - User Manual MicroFreak - MicroFreak Configuration

Category

Parameter

Description

Utility

MCC

Mic

Setting

Mic Gain [-12 dB to 59dB,

Sets the gain of the microphone when using the

Auto Gain]

vocoder

Noise Gate [Off, -30dB

Sets the threshold at which the signal passes

to -90dB]

through

Mic Detection [OFF, ON]

Uses active sensing to detect the presence of a

microphone when ON

X

X

X

X

X

X

Category

Parameter

Description

Utility

MCC

Misc

Mem

protect

[Off/

Factory

only/ On]

Oct

LED

Blink [Off,

On]

Reset

setting

"Off" enables you to overwrite all presets. If set to "Factory only"

you cannot overwrite factory presets. If "On" your presets are

X

also protected against accidental overwrites.

Sets whether Octave Shift buttons, when active, blink or glow

steadily

Resets your MicroFreak to the original Factory settings, erases

X

X

[Cancel,

changes you made in Utility and erases your presets

Yes]

X

X

X

Arturia - User Manual MicroFreak - MicroFreak Configuration

98

14.2. MIDI Control Center

The MIDI Control Center is an application that you download from the Arturia site to your
computer. There are versions for both macOS and Windows systems.

With the MIDI Control Center you can:

• move presets from the MicroFreak to your computer or from your computer to

the MicroFreak

• change settings on the MicroFreak

The MIDI Control Center manual has general descriptions of the features that are common
to all Arturia products. In the section below we will only refer to settings specific to the
MicroFreak.

14.2.1. Device Tab

A plethora of MIDI and configuration settings for the MicroFreak are found in MIDI Control
Center’s Device tab. Again, download the latest version of
the software from
www.arturia.com.

Left column of MicroFreak Device Tab in
MIDI Control Center

99

Arturia - User Manual MicroFreak - MicroFreak Configuration

MIDI Input Channel - All, 1-16, none. MicroFreak sends and receives on one 16-channel MIDI
port.

MIDI Output Channel - 1-16. Choose one of the 16 MIDI channels as the transmit channel.

MIDI Output Destination - The choices are Off, USB, MIDI, or MIDI + USB. Defines how MIDI
data is transmitted. USB has the advantage of connecting directly to a Mac or PC without a
MIDI interface, but you can run MIDI cables over longer distances.

Local control - Local off means all the panel controls and the keyboard are transmitted over
MIDI, but they're disconnected from the MicroFreak. This is convenient if you're working with
a DAW; you'll hear the keyboard and controls on the MicroFreak when its track is selected,
and MIDI is being sent back to trigger it, but you won't hear it when DAW tracks assigned
to other instruments are selected. You can then play other instruments from the MicroFreak
without it playing along. Also, the MicroFreak can be playing back MIDI you've recorded
while you play other instruments from its keyboard and controls.

Arp/Seq MIDI out (On/Off) - The arpeggiator/sequencer can send MIDI notes to trigger
other instruments or to be recorded in a DAW.

MIDI through - When "on", incoming MIDI data echoes to the MIDI Out port.

Knob sends CCs (ON, Off) - Defines whether knobs send CC data. CC data enables you to
control external synths.

MIDI Merge (USB+KBD, MIDI+KBD, BOTH+KBD) - Defines how keyboard data merges in the
MIDI stream.

MIDI clock source (USB, MIDI, Sync) - The USB port is the MicroFreak's built-in MIDI
interface, which you connect to a Mac or PC; MIDI is the 5-pin DIN MIDI In.

Sync Clock In/Out settings - Use the Sync port to interface with pre-MIDI devices, such as
old Korg and Roland drum machines. The following types are supported: One step, 2PPQ,
24PPQ, 48PPQ.

Global Tempo - When set to "On" the tempo settings of a preset are ignored. Tempo remains
at the most recent set tempo.

CV pitch format (1V/Oct, Hz/V, 1.2V/Oct) - Defines the voltage level the MicroFreak will output
at the CV out. 1v/Oct (Eurorack and others), Hz/V, or 1.2V/Oct (Buchla).

CV Gate format (S-Trig, V-Trig 5V, V-Trig 12V) - Defines the gate voltage level the MicroFreak
will output at the Gate out.

CV Press range Pressure range [1V … 10V] - Sets the pressure voltage range the MicroFreak
will output at the Pressure out.

CV 0V reference 0V reference [C-1 … G8] - refers to which note will output zero volt when
pitch format is set to 0V/Oct.

CV 1V reference - 1V reference [C-1 … G8] - refers to which note will output one volt when
pitch format is set to Hz/V.

Arturia - User Manual MicroFreak - MicroFreak Configuration

100

Right column of MicroFreak Device Tab in
MIDI Control Center

Knob Catch - Because the knobs are 360-degree encoders, they don't necessarily reflect
their underlying settings. There are three choices for how they behave when sending MIDI.

• Jump means a knob sends the value of its physical position as soon as you move
it, regardless of its stored setting. If the stored setting is 12, the knob happens to
be at 3, and you move it to 4, the parameter will jump instantly from a value of
12 to a value of 4.

• Hook waits until you move a knob past its current setting to "catch" (hook) it

before sending anything.

• Scaled increases or decreases the actual setting regardless of the knob position.
So if the actual value is 12 and you move the knob from 3 to 4, the actual value
will go to 13. Scaled allows you to increment or decrement the knob value. The
drawback is if the knob is at a high or low extreme, you obviously cannot move
it further. In this case, you need to turn the knob, and the value will have to go
either negative or positive first. This is the default mode.

Click to load Preset (Off, On) - Sets whether scrolling through presets loads them
immediately or whether an additional click is needed to load them.

Osc Knob Speed (Slow, Fast) — Adjusts the speed with which the Wave, Timbre, and Shape
knobs in the Digital Oscillator section change parameters. Slow speed is precise for fine
edits; Fast is better for making dramatic sweeps in live performance.

Oct LED Blink (Off, On) - When turned off, active octave shift buttons will glow steadily
instead of blinking.

Master Tuning - Sets deviation from global tuning in Cents.

Memory protection (Off, Factory only, All] - “Off” enables you to overwrite all presets. If set
to “Factory only” you cannot overwrite factory presets. If set to “All” your presets are also
protected against accidental overwrites.

101

Arturia - User Manual MicroFreak - MicroFreak Configuration

Keyboard sensitivity (10% to 100%) - Sets the response level of the keyboard for both
Pressure and Velocity.

Aftertouch curve - Lets you adjust the keyboard aftertouch curve. There are three options
Lin (linear), Log (logarithmic) and Exp (exponential). Please refer to the next entry, velocity
curve for an explanation of what these terms mean.

Velocity curve - This lets you adjust the keyboard response to your playing style and
preference.

Velocity curve settings

• Linear (the default) has an even response across the dynamic range

• Log requires the least amount of force to play louder notes, but it's harder to

control the dynamics at lower levels

• Exponential is less jumpy at lower dynamic levels, but it takes more force to

reach high dynamic levels.

Relative Bend (Off, On) - When set to Off, the Bend Strip bends the pitch (according to its
set range) up or down in relation to its actual physical center, which is zero bend. When
On, wherever you first place your finger on the Bend Strip becomes zero and you can bend
from there. The On setting is good for dive-bomb effects.

Scale - When Off, the MicroFreak keyboard plays the 12-note chromatic scale. When one of
7 scales is selected, it is impossible to play notes outside of that scale. See Using Scales [p.111]
for more detailed info.

Root Note - Sets the root note (key) for the Scale parameter.

Mic Gain, Noise Gate, Mic Detection - These three parameters are for use with the 3.5mm
TRRS input and Vocoder Oscillator, and correspond to Utility settings detailed in Chapter 19,
specifically the section on Vocoder Configuration [p.133].

Arturia - User Manual MicroFreak - MicroFreak Configuration

102

14.2.2. Wavetables Tab

The Wavetables Tab is displayed whenever MIDI Control Center detects a connected
MicroFreak. This allows for loading your own Wavetables for use with the User Wavetable
[p.49] oscillator type. It does not affect other oscillator types, including the factory Wavetable
Oscillator.

Tab for loading user Wavetables

There are two major sections. The left pane shows Banks and Wavetables that reside on
your computer. The right pane shows the Wavetables currently inside the MicroFreak.

Below this is an information section with fields for the Wavetable and Bank names that
correspond to the currently selected Wavetable (either on your computer or in the
MicroFreak) as well as a 3D animation of the Wavetable.

You can click and type in either of these fields to rename the Bank or Wavetable.

 ! Bank and Wavetable names can be a maximum of 21 characters in length.

14.2.2.1. Wavetable Management

Using the buttons across the top, you can move wavetables between your computer and
MicroFreak and otherwise manage them.

New Bank: Creates a new bank on the computer, which will appear in the left column of
the Computer section and initially be empty. You can mix and match Wavetables from other
Banks by dragging a wavetable and then hovering over the bank name. You will also be
prompted to enter a name for the new Bank, like so:

103

Arturia - User Manual MicroFreak - MicroFreak Configuration

Del Bank: Deletes a Bank after showing a confirmation pop-up box. Factory Banks cannot
be deleted.

Import: Imports either a single Wavetable or an entire bank. Clicking Import shows a pop-
up with three options:

• ReplaceWavetable (.mfw): Replaces the currently selected Wavetable with a file

of your choosing in MicroFreak Wavetable (MFW) format.

• Replace Wavetable (.wav/.aiff): Replaces the currently selected Wavetable with

an audio file of your choosing in WAV or AIFF format.

• Import New Bank: Imports a new Bank of your choosing, which will show up in

the left column of the Computer section. The file extension is .MFWB.

MicroFreak works some magic when you import Wavetables. Its Wavetables each have 32
cycles (individual waveforms), and each cycle is 2,048 samples long. When you import a
WAV or AIFF file, MicroFreak resamples it and converts it to an MFW file the MicroFreak can
use. Here is what happens during that process:

• MicroFreak counts every set of 2,048 samples as a cycle.

• The first and last cycles of the source file remain unchanged, and become cycles

1 and 32.

•

•

If the source has more than 8 cycles, MicroFreak builds a continuous Wavetable
with all the cycles evenly spread out, with linear crossfading between them. This
means the resulting Wavetable will represent the original content from beginning
to end — MicroFreak does not simply stop resampling when it hits the end of 8
cycles.

If the source has fewer than 8 cycles, MicroFreak uses a custom algorithm to
spread them across all the slots. This ensures that the Wave knob will reach all
the cycles as you turn it to scroll through the Wavetable.

Musically, all this means that you don’t have to perform editing surgery to make audio files
work as MicroFreak Wavetables. You certainly can if you want, but you can also just grab
files you think offer creative possibilities and let MicroFreak take care of the rest.

Export: Exports a single Wavetable or the currently selected bank as an MFW or MFWB file,
respectively.

Arturia - User Manual MicroFreak - MicroFreak Configuration

104

In either case, an OS-level “save” dialogue box pops up to ask for a location.

Delete: Deletes a single Wavetable, with confirmation pop-up. This will replace the table with
an init wavetable, which morphs between simple waveforms.

Send to MicroFreak: Once you have imported, dragged, dropped, and organized a Bank
of Wavetables to your liking on the Computer side, this button pipes the Bank into the
MicroFreak’s memory for use by the User Wavetable oscillator type.

 ! This overwrites all Wavetables in the MicroFreak. Once you see the progress bar shown above, do

not turn knobs on the MicroFreak until the data transfer is complete.

Recall to Computer: This button recalls the Wavetables currently loaded into the MicroFreak
and creates a new Bank in the left column of the Computer section. The name of the Bank
will initially be a date and time reference, but you can rename this in the Bank Name field
at the bottom of the window.

105

Arturia - User Manual MicroFreak - MicroFreak Configuration

14.2.2.2. More on Dragging and Dropping

You can drag and drop individual Wavetables between the computer and MicroFreak in
either direction. Shift-click or Command-click to select and drag a group of wavetables.

Drag a Wavetable name, and the destination slot will highlight in blue when you hover over
it. Releasing the mouse button will overwrite that location with the Wavetable you dragged.

Similarly, you can drag within a bank (in either the Computer or MicroFreak sections) to
reorder Wavetables. As mentioned, you can also move Wavetables between Banks on the
Computer side by first grabbing the Wavetable name, then hovering it over the destination
Bank and releasing the mouse button.

What’s more, you can drag a WAV or AIFF file from an OS-level file browser window into
either the Computer or MicroFreak sections of MIDI Control Center. Again, use Shift-click or
Command-click to drag multiple files.

Arturia - User Manual MicroFreak - MicroFreak Configuration

106

14.2.3. Samples Tab

The Samples Tab is displayed whenever MIDI Control Center detects a connected
MicroFreak with the latest firmware. This allows for loading your own samples for use with
the Sample [p.50] oscillator type. It does not affect other oscillator types, except for Scan
Grains, Cloud Grains, and Hit Grains.

Tab for loading user samples

There are two major sections. The left pane shows Banks and Samples that reside on your
computer. The right pane shows the Samples currently inside the MicroFreak.

Below this is an information section with fields for the Sample and Bank names that
correspond to the currently selected Sample (either on your computer or in the MicroFreak),
as well as its length (in seconds), the memory that all the samples take (in seconds), and
the memory that's left for additional samples (in seconds).

You can click and type in either of these fields to rename the Bank or Sample.

 Bank and Sample names can be a maximum of 21 characters in length.

14.2.3.1. Sample Management

107

Arturia - User Manual MicroFreak - MicroFreak Configuration

Using the buttons across the top, you can move samples from your computer to the
MicroFreak.

New Bank: Creates a new bank on the computer, which will appear in the left column of the
Computer section and initially be empty. You can mix and match Samples from other Banks
by dragging a sample and then hovering over the bank name. You will also be prompted to
enter a name for the new Bank, like so:

Del Bank: Deletes a Bank after showing a confirmation pop-up box. Factory Banks cannot
be deleted.

Import: Imports either a single Sample or an entire bank. Clicking Import shows a pop-up
with three options:

• Replace Sample (.mfsz): Replaces the currently selected Sample with a file of

your choosing in MicroFreak Sample (MFSZ) format.

• Replace Sample (.wav/.aiff): Replaces the currently selected Sample with an

audio file of your choosing in WAV or AIFF format.

• Import New Bank: Imports a new Bank of your choosing, which will show up in

the left column of the Computer section. The file extension is .MFSBZ.

 Your MicroFreak will store the imported samples as 16-bit, 32kHz, mono samples.

 Make sure that your sample fits in the 24-second timeframe, because anything over 24 seconds will

get cut out.

Export: Exports a single Sample or the currently selected bank as an MFSZ or MFSBZ file,
respectively.

Arturia - User Manual MicroFreak - MicroFreak Configuration

108

In either case, an OS-level “save” dialogue box pops up to ask for a location.

Delete: Deletes a single Sample, with confirmation pop-up. This will replace the sample with
an init sample.

Send to MicroFreak: Once you have imported, dragged, dropped, and organized a Bank of
Samples to your liking on the Computer side, this button pipes the Bank into the MicroFreak’s
memory for use by the Sample, Scan Grains, Cloud Grains, and Hit Grains oscillator types.

 This overwrites samples in the MicroFreak. Once you see the progress bar shown above, do not turn

knobs on the MicroFreak until the data transfer is complete.

109

Arturia - User Manual MicroFreak - MicroFreak Configuration

14.2.3.2. More on Dragging and Dropping

You can drag and drop individual Samples between the computer and MicroFreak in either
direction.

Drag a Sample name, and the destination slot will highlight in blue when you hover over it.
Releasing the mouse button will overwrite that location with the Sample you dragged.

Similarly, you can drag within a bank (in either the Computer or MicroFreak sections)
to reorder Samples. As mentioned, you can also move Samples between Banks on the
Computer side by first grabbing the Sample name, then hovering it over the destination
Bank and releasing the mouse button.

 Use Shift-click or Command-click to drag multiple files.

14.2.3.3. Deleting samples

Deleting samples from the MIDI Control Center and from your MicroFreak is very easy. You
can either use the two Delete buttons at the top of the Samples tab, or use the Delete key
from your keyboard.

 Please note that Factory samples cannot be deleted.

Arturia - User Manual MicroFreak - MicroFreak Configuration

110

15. USING SCALES

Scales express emotion in music. A single melodic line can evoke many emotions, but when
you add chord notes from the scale of the melody to that melodic line, the feeling will
become much stronger. When you add notes from the major scale, the melody sounds
forceful and happy; add notes from the minor scale, and that same melodic line will
suddenly seem sad. At least, that might be your response if you were born in a culture
dominated by western music. In other cultures, your response to major and minor scales
may be different.

A standard (chromatic) scale consist of twelve notes: C-C#-D-D#-E-F-F#-G-G#-A-A#-B. Every
scale is a selection of these twelve notes.

Most scales use only 8 notes, except for the Pentatonic scale which uses only 5 notes and
the blues scale which is a 6-note scale that contains 5 notes from the major or minor
pentatonic scales plus one chromatic note.

The most and widely used scale in western music is the C major or C IONIAN scale: play
the white keys on the piano and what you hear is the C major scale. Of the twelve notes of
the chromatic scale C major uses: C D E F G A B (C). Leaving out certain notes creates gaps.
Some of these gaps, or in musical terms intervals, are whole tone gaps, some halve tone
gaps. The distance from C to D is a whole tone, from E to F halve tone.

For C major this results in a specific series of intervals; tone, tone, semitone, tone, tone and
semitone.

If you play the white keys on the keyboard starting at D you get a different series of
intervals; tone, semitone, tone, tone, semitone, tone.

When you now start on C and play a scale using this new series of intervals you play a
Dorian scale.

When playing a C major scale starting on the fifth step, it's a Mixolydian scale.

111

Arturia - User Manual MicroFreak - Using Scales

Creating Scales in this way is an age-old trick. Scales created this way are referred to as
church modes, forgotten for centuries but rediscovered by jazz musicians in the sixties. They
are now widely used in western music.

15.1. Scale settings

The Scale option in Utility enables you to select one of eight scales. If you select a scale
in Utility>Misc>Scale everything you play on MicroFreak keyboard, every sequence, every
arpeggio will play in that scale; it's a global setting. If, on the other hand, you select a scale
in Utility>Preset>Scale you only change the scale for that specific preset.

 You can use this feature to your advantage by saving the same preset several times with different

Scale or Root note settings.

The Scale option works as a filter. It selects eight notes from the chromatic scale. For every
scale, it's a different set of notes. In technical terms, it quantizes the chromatic scale (C, Db,
D, Eb, E, F, Gb, G, Ab, A, Bb, B) to either the:

• Major scale (C, D, E, F, G, A, B)

• Minor scale (C, D, Eb, F, G, A, Bb, B)

• Harmonic Minor scale (C, D, E, F, G, Ab, B)

• Dorian scale (C, D, Eb, F, G, A, Bb)

• Mixolydian scale (C, D, E, F, G, A, Bb)

• Blues scale (C, D, Eb, F, Gb, G, Ab, A, Bb)

• Pentatonic scale (C D E G A)

To hear (and see) the effect of selecting a scale switch on your MicroFreak, if it isn't on
already (do you ever turn it off?) and select a preset with a fairly simple sound; the "keys 2"
template preset nr 131 is ideal for this purpose.

Now press Utility>Preset>Scale. Pressing the preset select knob enables you to select a scale.

Select "major scale". When you now play the "white" keys you'll hear the major scale. The odd
thing is that the "black" keys also play the major scale. The first black key which normally
plays C# now plays "C". All "black" keys are stripped of their normal pitch and have been
lower a semitone to fit in the C major scale. Whatever chord you play on the keyboard, it
will always be a major chord!

Let's explore these scales. Press the Arpeggio button and, starting from "C", hold down
the first, third, and fifth steps of the scale; you're playing a C major chord. While in the
Utility>Preset>Scale menu turn the encoder to select other scales; you'll hear the third step
changing when you select the minor scale, the Dorian scale or the Blues scale.

 A nifty trick is to start an arpeggio or sequence in a certain scale, then select Utility>Misc>Scale and

cycle through the scale options. You'll hear your arpeggio or sequence change scale on the fly.

Arturia - User Manual MicroFreak - Using Scales

112

15.2. The Scale Root

Starting a scale on a different note will drastically change the mood of that scale. If we do
not start the C major scale on the 'C' but on the 'D"'instead it will sound different because the
intervals are now heard in a different order.

In C major starting on 'C', it was: T-T-ST-T-T-T-T-ST.

When you take this interval string and start on 'D', making 'D' the Root note of the scale you
get D, E, F#, G, A, B, C#, D

It's an age-old trick that was discovered and widely used in church music, rediscovered in
the 80ties and 90ties of the previous century when the world opened up to other cultures.
Jazz and other western musicians discovered the richness of Medieval church music, Indian
Ragas and oriental Makams, all using scales that went far beyond the simple western Major
and Minor scales.

Changing the Root note is a form of intelligent transpose, intelligent because the interval
structure of the scale remains intact. This, as opposed to 'dumb' transpose that adds a halve
or a whole tone to every step of the scale.

The Root option in Utility enables you to select the Root note of the current scale. If you select
a Root in Utility>Misc>Root everything you play on MicroFreak keyboard, every sequence,
every arpeggio will play with a different Root note; it's a global setting. If, on the other hand,
you select another Root for the current scale in Utility>Preset>Root you only change the Root
of the scale for that specific preset.

 If you want to know more about the fascinating subject, search "music theory" on a search engine

or YouTube.

113

Arturia - User Manual MicroFreak - Using Scales

16. PARAPHONIC CHORD MODE

Paraphonic Chord Mode lets you experiment with chord transpositions in new ways. It's a
unique new MicroFreak feature.

To Initiate Paraphonic Chord Mode:

• Press the Paraphonic button; it will blink to tell you that you're in Paraphonic

mode

• Hold down the Paraphonic button and play a chord

• Lift your fingers from the keyboard

• Let go of the Paraphonic button. It should stay on and blink slowly. This confirms

that you are in Paraphonic mode.

• When you now play a key on the keyboard, you hear the chord you entered
in the second step played with the interval structure of the current scale. If you
played a minor chord in the second step, you'll hear a minor chord wherever you
play a note on the keyboard.

Chords are derived from scales. The most common chords consist of the first the third, the
fifth and the seventh step of a scale. The first note of a chord is the Root. The third note in a
scale determines the feel of a chord; if it is three half-steps removed from the root, the chord
is minor. Four half-steps removed from the root makes it a major chord. When you add
more notes to a chord, you are essentially fine-tuning and shaping the minor and major feel
further. When you initiate Paraphonic Chord mode and play some notes on the keyboard
the MicroFreak will analyze the interval structure of the chord you play. When next you play
a note on the keyboard it will reconstruct that interval structure. If it was a minor seventh
chord Paraphonic Chord Mode will create a minor seventh chord starting from the key you
press.

It's a feature that gives new meaning to the word arpeggio. Paraphonic chord mode enables
you to create blindingly fast and intricate polyphonic scale quantized arpeggios.

End Paraphonic Chord Mode by pressing the Paraphonic button once more.

16.1. Unison

The MicroFreak has four oscillators. In standard Paraphonic mode, you can play them as
chords on the keyboard. Holding 'Shift ' and pressing the Paraphonic button will initiate
unison mode. The Paraphonic button will blink to show Unison mode is active. You can now
let go of the 'Shift' button (but keep the Paraphony button depressed) and turn the 'Preset'
encoder to set the amount of oscillator detune (unison spread) .

In unison mode, all four oscillators will play together but tuned slightly apart thus generating
a very fat sound.

 Press 'Hold' to have two hands available.

The display will show the amount of spread in increments from 0.001 to 12.000 (an octave).

To disable Unison mode press the Paraphony button.

Arturia - User Manual MicroFreak - Paraphonic Chord Mode

114

16.2. Adjusting the default Unison settings

By default, all four voices of the MicroFreak will be used in Unison mode. To change this go
to Utility>Preset>Unison count and change the number of voices assigned to Unison mode.
By assigning three voices, one voice remains available to play the keyboard in duo-phonic
mode.

Change

To
Utility>Preset>Unison>Spread and adjust the value you find there.

default

spread

voice

the

the

of

in

unison mode

go

to

16.3. Unison Spread as a modulation target

You can modulate Unison spread on the Matrix with fascinating results. Simply hold an
assign button and push the paraphony button.

Let's try and modulate the spread of the four oscillators with the cycling envelope.

When set to 'ENV', the Cycling envelope will modulate Unison spread each time you press
a key or each time the arpeggiator/sequencer generate triggers by going to the next step.
To create this effect: - select a preset (if you haven't done so already) - hold Shift and press
Paraphony - Select matrix crossing cycling Env/Assign2 - Press the matrix encoder to set a
modulation amount. - Set modulation amount to '90' - Set the Cycling env to 'env' - Set rise
time to 2.5 sec - Set fall to 150 msec - Set hold/sus to 0 msec. Now experiment with the
intensity of the modulation by turning the amount knob

 Tip: Modulating unison mode is rather spectacular when applied to Vocoder presets.

Unison is available for all oscillator models in the MicroFreak.

115

Arturia - User Manual MicroFreak - Paraphonic Chord Mode

17. CONNECTING EXTERNAL GEAR

The MicroFreak offers many ways to connect with other types of equipment, from vintage
to modern. You'll find all of these connections at the back of the MicroFreak.

MicroFreak Rear Panel

Below are examples of potential setups:

...with a computer

MicroFreak-Computer connection

The MicroFreak is a USB class-compliant controller, so at its most basic level, it can be
connected to any computer with a USB port and used as an input device for various
applications. You'll need to make this kind of connection to interact with the MIDI Control
Center. The MIDI Control Center software allows you to define a wide variety of settings on
the MicroFreak.

However, the MicroFreak is so powerful on its own that there may be times when you want
to use it without a computer attached! In this case, you can use a standard USB mobile
phone charger or a power bank to power the unit and connect everything else as shown in
the following diagrams.

MicroFreak with power bank

Warning: The MicroFreak has a touch-capacitive keyboard. For it to be fully functional the
MicroFreak must be properly grounded. It's why we recommend that you use the three-pin
wall plug provided by Arturia.

Many devices only have MIDI ports (no CV/Gate connectors, no USB). MicroFreak can send
them notes, as well as control them from its front panel using CC commands.

Arturia - User Manual MicroFreak - Connecting external gear

116

 Use the included adapters (1/8" TRS jack to 5-pin DIN, gray) to connect your external MIDI devices

to the MicroFreak.

And of course, MicroFreak can send and receive MIDI data using the USB port of your
computer.

MIDI to Modular

17.1. CV/GATE FUNCTIONS

The MicroFreak provides direct access to some of the best music technology the world
has produced in the last six decades: USB, MIDI, Clock and CV/Gate out connectors are all
present on its rear panel in a space not much larger than a pencil. In this section, we’ll focus
on the features of the MicroFreak CV/Gate circuitry.

17.1.1. Control voltages: Pitch, Gate and Pressure

When Sequence A or Sequence B are selected, or when you play notes on the keyboard,
the notes are translated immediately into Control Voltage (CV) and Gate signals and sent to
the connectors on the back panel. When you play the keyboard in Paraphonic mode while
a sequence is playing, the notes you play on the keyboard have priority.

CV Gate outputs

Three independent voltages are sent for each note: Pitch, Gate and Pressure. The pressure
voltage can either be velocity or pressure depending on what you have selected in the Utility
section or the MIDI Control Center.

Some analog synthesizers have unusual
implementations that are not fully compatible
with the MicroFreak CV/Gate signals. Please refer to their specifications before making a
purchase so you can be sure the two devices will work together well.

We’ve designed the MicroFreak to be as flexible as possible, though: the MIDI Control Center
[p.93] allows you to configure the response of the CV/Gate jacks in a number of ways. By
default, the transmitted Pitch voltage is compatible with the 1v per octave standard, which
means that if you play an octave on the keyboard, a synth or a connected Eurorack module
will also play an octave. Some synths use the Hz/V standard or the 1.2 V per octave standard,
to play those you have to change the corresponding setting in Utility>CV/Gate>Pitch Format
or in the MIDI Control Center.

117

Arturia - User Manual MicroFreak - Connecting external gear

CV Gate setting in the MIDI Control Center

Gate signals can also have different output ranges (S-Trig, V-Trig 5V, V-Trig 10V). These too
can be changed in Utility>CV/Gate>Gate Format or in the MIDI Control Center.

The Keyboard sensitivity parameter allows you to adjust the CV pressure range. This can be
important when using the keyboard CV output to match that of an external modular synth.

By default the control voltages that appear at the output adhere to the 1v per octave
standard. It's a standard defined in the early days of electronic music history. It simply
means that it needs one Volt to make an oscillator rise one octave in pitch. This is the most
commonly used standard. Please refer to the documentation of your external gear if you
cannot get external oscillators to track properly. Changing the Volt/Octave setting may bring
the solution.

Arturia - User Manual MicroFreak - Connecting external gear

118

The Pitch control voltage (CV Pitch Format) can be set to:

•

1 Volt/octave (0-10V)

• Hertz per Volt (needed for systems where a change of 1 volt results in a change in
pitch of a fixed number of hertz (cycles per second), rather than a fixed musical
interval).

•

1.2 Volt/octave (a Buchla specific standard)

CV setting in the MIDI Control Center

17.2. Clock sources/destinations

The Clock input and output can synchronize with older clock types such as 24 pulses per
quarter note (24 ppq), 48 ppq, 2 ppq, or even a single pulse per step.

17.3. Controlling External and Modular gear

In the past decade, Arturia spearheaded the revival of the analog synthesizer with some
very advanced products such as the MicroBrute,
the MiniBrute, and the magnificent
MatrixBrute.

During that same decade, many musicians embraced the Eurorack standard. Not surprising:
what makes the Eurorack environment so accessible is that it enables you to create a unique
individual sound. Whether it's EDM or complex Ambient music, you'll find Eurorack modules
to match your music style. Arturia has recently created a high-quality Eurorack case: the
RackBrute.

With each new product generation, Arturia added interface options that made it easier to
connect its product range to a modular rack. The MicroFreak is no exception; it features
Pitch, Velocity and Pressure outputs you can use to control external Eurorack modules.

Another way to control eurorack modules and external synths is by using MIDI. When
controlling a synth this is easy, just hook up the MicroFreak and the External using a MIDI
cable and off you go. Controlling Eurorack modules using MIDI is also possible. For this to
work, you need a module that translates the MIDI signals from the MicroFreak MIDI out port
to Pitch and Gate signals. It's a bit more involved but doable.

You can also use MIDI to control parameters such a filters and envelope generators on
external synthesizers. For this to work the synth you want to control must have MIDI input.

119

Arturia - User Manual MicroFreak - Connecting external gear

17.4. About Local Control

The MicroFreak generates sound when you press a key on the keyboard. By default
keyboard and sound engine are connected. This mode is known as Local ON. There are
situations where you do not want them connected, for example when you control the
MicroFreak externally via MIDI. When turned OFF the keyboard will only transmit its gates to
the MIDI out, the gates will have no effect on the sound engine. The MicroFreak will appear
to be dead.

 Tip: If you have a dead MicroFreak on your hands check whether you haven't inadvertently turned

OFF local control.

In OFF mode the MicroFreak is ideally suited to be used as sound source for external
sequencers. Local OFF mode prevents double triggering, this happens when an external
sequencer receives notes from the MicroFreak keyboard and then sends them back to the
MicroFreak sound engine. This is a phenomenon known as MIDI echo.

17.5. About MIDI channels

One of the things that makes MIDI popular with musicians is that you can have one central
synth or MIDI controller and use it to control several other synths. Soon after the initial first
test with MIDI in the early 80ties, it became clear that an important problem needed to
be solved. What if you want to send a sequence from synth A to synth B and you wanted
to send another different sequence from synth A to synth C? The solution to this problem
proved simple: make use of channels. You can then send the first sequence from synth A
to B on channel 1 and the second sequence from synth A to C on channel 2. Ever since the
MIDI standard has 16 channels, usually enough to cover your connection needs.

The MicroFreak have two different MIDI settings, it can transmit MIDI on all 16 channels
simultaneously or you can select a specific channel to transmit your data on. By default, it
will transmit on all channels, but if you're playing notes or a sequence on your MicroFreak
that must be received by a certain synth or drum machine only (for drum machines that
is usually channel 10) you'll have to match this channel on the MicroFreak. You change this
setting either in the Utility menu of the MicroFreak (Utility>MIDI>Output Chan>10) or in the
MIDI control center.

The other way around it works the same way: when you use a controller like the Arturia
BeatStep Pro and you want the MicroFreak to receive only data transmitted by the BeatStep
pro on the second MIDI channel you'll have set the MicroFreak to receive MIDI on channel 2
only. (Utility>MIDI>Input Chan>2)

17.5.1. MIDI and CV/Gate signals: DAW configuration

You can of course also use a DAW to playback MIDI tracks on the MicroFreak. To make this
possible the MIDI channel of the desired track of the DAW must match the MIDI channel
of the MicroFreak. The Utility settings that enable you to do this are quite flexible; you can
have the MicroFreak play the information it receives on MIDI channel 1 and send the things
you play on the MicroFreak keyboard to the DAW on MIDI channel 2. This too is set in
Utility>Midi>Input chan and Utility>Midi>Output chan.

Arturia - User Manual MicroFreak - Connecting external gear

120

17.6. Tutorial 1: Using MIDI to control the MINI V VST
synth

In this tutorial, we will use the MicroFreak to control the Filter frequency of the Arturia MINI
V VST. Although this example features the MINI V it can be used to learn how to control any
knob on any VST from the V series that you want to receive MIDI on channel 4.

First, make certain that the MicroFreak and the MINI V VST receive and transmit on
the same MIDI channel. On the MicroFreak you set
in
Utility>MIDI>Output Chan. By default, it is set to channel 1. Set it to transmit on channel 4. In
the V series, all VSTs are set to receive MIDI on all channels click in the bottom right to set
the MIDI channel to 4.

the MIDI transmit channel

• Connect the USB out on the MicroFreak to the USB in on your computer. Load

either a standalone or a DAW-based VST version of the MINI V.

• Open the Arturia System menu in the top left and select Audio MIDI settings.

Under MIDI devices, select the Arturia MicroFreak.

• Next click on the MIDI symbol in the top right of the Main Menu. The knobs on the

MINI V will now colour RED or purple.

• Click on the Cutoff Frequency knob in the Filter section. Wiggle the Filter knob on
the MicroFreak. The Cutoff Frequency knob of the MINI V should now respond to
your knob movements.

17.7. Tutorial 2: Using MIDI to control Modules on
VCVRACK

Another option is to control MIDI-enabled software on your computer. In the example below,
we'll use the arpeggiator of the MicroFreak to control an oscillator on VCVRACK a free virtual
Modular system you can download from https://vcvrack.com

• Connect the USB output on your MicroFreak to a USB port on your computer.

• Open VCVRACK. It will open a demo which is perfect for our example.

•

In the first position, you see a MIDI-CV module. We'll use this module to get
Note values from the MicroFreak and use those to control the pitch of VCVRACK
oscillator and the Velocity values to control the ADSR.

• Click on "computer keyboard" in the MIDI-CV module and change the value to
"Core MIDI". Click on "no device" and change it to "Arturia MicroFreak". We've
now set up the MIDI-CV module to receive pitch in velocity values from the
MicroFreak.

• Now click in the Audio-8 module on "no device" and select the output of your

system.

121

Arturia - User Manual MicroFreak - Connecting external gear

When pressing a key on the MicroFreak you should now hear sound from VCVRACK.
Congratulations you can now use the MicroFreak keyboard, the arpeggiator and sequencer
to control Oscillator(s) and Envelope generator(s) in VCVRACK

17.8. Using MIDI CC# codes for control

The MicroFreak encoders transmit CC# data via MIDI when you turn them. MIDI CC# codes
allow you to control parameters on external synths and modular systems. CC# control
codes differ from note related MIDI messages. They are small strings of numbers that
are specifically designed to control parameters on an external MIDI device, on a Modular
hardware system or a Software Modular system such as VCV Rack.

CC# codes are the MIDI equivalent of turning knobs; turn the Filter knob on the MicroFreak
and its cutoff point will change. Send CC# 23 codes to the MicroFreak and it will have the
same effect: sending CC# 23 with a value of 0 closes the Filter completely, sending CC#
23 with a value of 127 opens it fully. All in all, there are 20 different CC# codes available to
control parameters on the MicroFreak.

MIDI CC# codes have existed for over 40 years and despite their enormous potential
they are not widely used. Please refer to the end of this chapter for an overview of CC#
parameters and the MicroFreak.

CC# codes make it possible to control parameters of the plugins you use with your DAW!
All plugins of the Arturia System V series have a MIDI learn feature that enables you to link
knobs on the MicroFreak to knobs on the plugin. Imagine the new sonic options you have
when using the filter knobs on the MicroFreak to control the filter on the CZ V the DX7 V and
the Buchla Easel V simultaneously.

Please refer to the documentation that comes with your DAW and the V collection for info
on how to do this.

 If no CC# commands are sent check the corresponding setting in Utility (Utility>Midi>knob send

CC#s) or the MCC.

In the examples following next, we will use CC# codes to control modules in VCVRACK.

Arturia - User Manual MicroFreak - Connecting external gear

122

17.9. Tutorial 3: sending CC# codes from the MicroFreak

As seen in the first tutorial it also works the other way around, when you turn a knob on the
MicroFreak it will transmit a CC# code. If you know the CC# of a dial, a slider or switch on
the MicroFreak you can use that CC# to control any external parameter.

In this third tutorial, we'll link the Cyclic Envelope of the MicroFreak to the Envelope in the
demo patch of VCVRACK. This tutorial assumes you have things patched as at the end of
Tutorial two: the MicroFreak controls VCO-1 and the ADSR on VCVRACK.

•

•

In VCVRACK, click somewhere in empty space in the rack. The "module select"
window will open. Type "midi" in the search window and select the MIDI-CC
module

In the MIDI CC module, click where it says "no device" and select "Arturia
MicroFreak" from the drop-down menu.

• You now have 16 CC# controllers numbered from 0 to 15 available to link
parameters from the MicroFreak to a parameter on VCVRACK. Below the
connection field, you'll see 16 patch points that relate to the entries in the
connection field.

• Click on the "0", the first entry in the connection field, the zero will turn into a

dash.

• Move the Rise knob of the Cyclic Envelope on the MicroFreak, the MIDI-CC
module will now display "5" in the first field, this happens to be the CC# number
of the Rise parameter on the MicroFreak

• Repeat these steps for Fall (second field), Hold (third fields) and Amount (fourth
filed) knobs. The CC# values of these envelope stages will now appear in the
connection point

Now connect:

•

•

•

the first patch point on the MIDI-CC module to the CV input of the Attack of the
ADSR,

the second patch point to the CV input of the Decay of the ADSR

the third patch point to the CV input of the sustain

• and the fourth patch point to the CV input of the Release of the ADSR.

123

Arturia - User Manual MicroFreak - Connecting external gear

That's it: you have linked the Cyclic Envelope Generator to the VCVRACK ADSR. Whatever
changes you make on the Cyclic Envelope Generator will be mirrored on VCVRACK. To hear
the effect, press the ARP button the MicroFreak, play a chord and wriggle the knobs of the
cyclic envelope.

You may have guessed that the MIDI-CC module of VCVRACK is a very useful tool to figure
out what CC# codes sends. Just click on one of the 16 fields and move a knob on the
MicroFreak. If that knob can send CC# codes its CC# number will be displayed by the MIDI-
CC module.

This works both ways, you can use the output of VCRACK, a sequencer or any other
module on your Modular system to control parameters on your MicroFreak. To control the
MicroFreak from your Modular system you need a module such as the BEFACO VCMC to
translate the analogue signals of your Modular system to MIDI CC# format.

 As with Note and Velocity values, CC# codes operate in the range 0-127.

17.10. MIDI CC# values: an overview

Please refer to Appendix D for an overview of the MicroFreak CC# codes.

Arturia - User Manual MicroFreak - Connecting external gear

124

18. APPENDIX A: SPEECH OSCILLATOR: INTERNAL AND
EXTERNAL CONTROL

The Speech Oscillator can generate 6 categories of sound. First select a category with the
Wave encoder, then select a a word from this category with the Shape encoder. To fine-tune
the timbre of a selected word use the time encoder.

Categories and Shapes can also be selected externally from your DAW or from a controller
capable of sending CC codes. Sending CC 10 plus a value to the MicroFreak selects a
category, CC 13 plus a value a subcategory and CC12 allows you to control the timbre of the
selected word.

Wave: category

vowels, range of formants

colours

numbers

letters and phonetics

phonetic

synth terms

Timbre: formant

low formant

mid formant good clarity

high formant

Shape: vowels

a..e..i..o..u..y

Shape: colours

red

orange

yellow

green

blue

indigo

violet

Wave

0,0 - 42,4

42,5

54,6

66,9

78,8

90,9

Timbre

0,0

50,0

100,0

Shape

0,0 - 100,0

0,0

15,0

29,0

43,0

58,0

72,0

86,0

CC 10

0 - 53

54

70

85

101

116

CC 12

0

64

127

CC 13

0 - 127

0

19

37

54

73

91

109

125

Arturia - User Manual MicroFreak - Appendix A: Speech Oscillator: internal and external control

Shape: numbers

zero

one

two

three

four

five

six

seven

eight

nine

ten

Shape: letters and phonetics

a alpha

b bravo

c charlie

d delta

e echo

f foxtrot

g golf

h hotel

i india

j juliet

k kilo

l lima

m mike

n november

o oscar

p papa

q quebec

r romeo

s sierra

0,0

10,0

19,0

28,0

37,0

46,0

55,0

64,0

73,0

82,0

91,0

0

13

25

36

47

59

70

82

93

105

116

0,0

4,0

8,0

12,0

16,0

20,0

24,0

27,0

31,0

35,0

39,0

43,0

47,0

50,0

54,0

58,0

62,0

66,0

70,0

0

5

10

15

20

25

30

35

40

44

49

54

59

64

69

74

79

84

88

Arturia - User Manual MicroFreak - Appendix A: Speech Oscillator: internal and external control

126

Shape: letters and phonetics

t tango

u uniform

v victor

w whisky

x xray

y yankee

z zulu

Synth terms:

analog

circuit

clock

control

digital

electronic

filter

frequency

generator

instrument

knob

machine

modular

modulator

operator

oscillator

patch

sequencer

synthesizer

vca

voltage

waveform

74,0

77,0

81,0

85,0

89,0

93,0

97,0

93

98

103

108

113

118

123

0

6

12

18

24

29

35

41

47

52

58

64

70

76

81

87

93

99

104

110

116

122

0,0

5,0

10,0

14,0

19,0

23,0

28,0

32,0

37,0

41,0

46,0

50,0

55,0

60,0

64,0

69,0

73,0

78,0

82,0

87,0

91,0

96,0

127

Arturia - User Manual MicroFreak - Appendix A: Speech Oscillator: internal and external control

19. APPENDIX B: THE MICROFREAK VOCODER

19.1. An Introduction to Vocoding

You might be surprised to learn how "old" vocoders are. The first vocoder was patented in
1939 by Bell labs. It was intended to speed up telephone connections. It took forty years
before the first vocoders with a musical application appeared. In the seventies it quickly
gained popularity because of its robotic sounding qualities. Kraftwerk was one of the first
groups to use it in their song "Autobahn". They weren't the only ones; Wendy Carlos, Air,
Daft Punk, Alan Parsons, Coldplay, and the Red Hot Chili Peppers also started using it. Laurie
Anderson had a surprise hit in Europe with “O Superman”. The way these artists used the
vocoder varied widely: Stevie Wonder used it for accompanying side vocals in "Love having
you around". He surrounded his solo voice with augmented vocoder versions of his voice.

For a while, the vocoder sank into obscurity only to be revived by Imogen Heap, the
multitalented British vocalist who created what is probably the most intriguing vocoder
song: "Hide and Seek". The vocoder is now a mainstream instrument, a standard part of
video games and movies. What is it that makes the vocoder such a fascinating musical
instrument? The answer is simple; it is capable of transferring the unique individual qualities
of your voice to the analog and digital music realm.

Your speech is incredibly complex. You can make a vast range of sounds; sharp vowels like
"i" and ''è", round vowels such as "a" and "o". Plopping consonants that start and stop, such
as ”ch", "b" and 'k". It's a miracle you ever managed to learn how to speak. The language
you learned as a child creates a preference in your vocal tract for certain vowels and
consonants. Raised in China, your formants will differ from a French or German child. A
French child will habitually use its vocal tract in a very specific way. When you begin
to learn another language you bring all these vocal habits along, they're very difficult to
unlearn. This explains why native speakers can spot a ‘foreigner' from miles away; the
formants sound 'funny’, not quite right.

In vocoding vowels play an important role. In the late 19th century scientists asked
themselves the question what it is that makes the 'è' sound different from an 'a'. They
came up with the term "formant" to explain this. In a similar way as Oscillator waveforms,
that have peaks in certain frequency ranges, vowels too have peaks that give them their
characteristic sound. A vowel formant usually has 1 to 3 peaks (called F1, F2, F3). There's a
fun page with audio examples of vowels on Wikipedia that you can check out if you want
to learn more about this subject.

Why is all this important? To answer that question we'll have to explain a bit about how
Vocoders work.

If you've ever blown or sung into a tube you'll hear that a tube amplifies certain frequencies,
long tubes will catch low frequencies, short tubes the higher ones. Filters are the electronic
equivalents of tubes. The filter-bands in a vocoder are tuned in such a way that they will
catch the formants of your voice and apply these formants to another sound. Translated
in vocoder speak: the formant(s) in a modulator are applied to a carrier. To put it more
simply: the characteristic formants of your voice are applied to a wave you feed into the
vocoder. A vocoder needs two elements: an input called the modulator (usually your voice)
that supplies the formants and a carrier wave to which these formants are applied. To put it
even more simply; you talk to a wave and the wave will start to sound like you.

Well....almost......

There's a lot more happening when you speak. The loudness of your voice will vary over
time. A word you speak will rise from silence, go through many variations of loudness ,
reach its peak and return to silence. Again, how this happens it's a very personal thing.
Voice recognition uses this loudness pattern and formant information to create a unique
voiceprint. The loudness envelope of your voice is infinitely more complex than the loudness
contour of the envelope on your MicroFreak or any other synth.

Arturia - User Manual MicroFreak - Appendix B: The MicroFreak Vocoder

128

19.2. How does Vocoder work?

You've probably experimented with the filter on the MicroFreak already; if you set it to
BPF (Bandpass mode) it will emphasize certain frequencies of the wave you send to it.
Imagine sending a wave to 16 bandpass filters simultaneously. That is what happens in the
MicroFreak vocoder; the vocoder analyzes incoming sounds using a large number of tuned
bandpass filters.

To mimic your voice accurately the MicroFreak vocoder has to track the loudness of your
voice. It does so using an array of envelope followers. The envelope followers generate a
voltage that is proportional to the loudness of your voice. These voltages are then used to
open the bandpass filters and again at the end of the vocoder chain to recreate your specific
loudness pattern.

When you speak the peaks in the formant will vary over time, they are rarely constant. Each
formant peak has an individual loudness pattern; the 330 Hz peak will emerge first and
then the 1260 Hz follows suit. For the MicroFreak Vocoder to recreate this it must be able to
respond to the volume of each frequency peak individually; it has an envelope follower for
every filter band!

19.2.1. Resolution

Classic vocoders had a limited number (10 or so) of frequency bands and sounded a bit
'mushy'. Modern vocoders often have a higher resolution, the MicroFreak has a resolution of
16 bands and can, therefore, recreate your voice with much better accuracy.

19.2.2. The Perfect Modulator: your voice

Getting the best result takes some experimenting; it’s a process of carefully combining the
right modulator source with the right carrier.

You might think that the vast range of sounds your voice is capable of making makes it an
ideal modulator as input for a vocoder. That is only partly true. Vocoders need to be ‘pushed’
to perform well, it helps to articulate very clearly even to such extent that to your ears it
sounds overdone. Clear articulation helps to open up the filters of the vocoder.

The Filter banks of a vocoder are not happy with plosives (the popped sounds in letters
like ‘p’, ’t’ and ‘b’) and sibilants (in letters such as ’s’, ‘ch’ and ‘z’). They confuse the filters.
Preferably they should be filtered out. The Vocoder has a high pass filter that does just that.

Most vocoders allow you to add a bit of artificial high end to the modulator sound to help
open up the filters. The MicroFreak Vocoder Edition has a hiss function to do just that. More
about this later.

129

Arturia - User Manual MicroFreak - Appendix B: The MicroFreak Vocoder

19.2.3. The Vocoder Oscillator

The perfect carrier is a wave with rich overtones. The Vocoder Oscillator produces three
waveforms that work particularly well as the carrier for the vocoder. You select this
waveform with the Wave encoder.

The Digital Oscillator

At the zero position, or knob turned all the way counter-clockwise, it generates a Sawtooth
waveform. At around 11% the sawtooth changes to a pulse width waveform with a duty cycle
of 50%. When you turn the knob further clockwise the pulse width of the waveform will
change until at knob position 90% you reach a duty cycle of 97%. From position 91% to 100%
(full clockwise) it generates Noise.

Similar to the standard oscillator types, the Vocoder Oscillator can be controlled with the
Timbre and the Shape encoders.

 The vocoder oscillator is special in more than one way; you cannot modulate Oscillator type when

the vocoder oscillator is active.

19.2.3.1. Timbre Encoder

The Timbre knob changes the frequency range of the analysis/resynthesis process.
Selecting the right response range is vital to get the best results from your vocoder. Why?

The formants that make up your voice have several frequency peaks. The peaks of a 'U'
vowel are generally around 330 and 1260 Hz, it will vary with gender and culture. When
recreating the sound the synthesis filters in that frequency range will recreate the loudness
contour of the input signal. Other vowels will trigger other filter combinations. To increase
the effectiveness of this triggering process the MicroFreak vocoder allows you to specify a
range between frequencies to which it will respond. Because there are fewer frequencies
the vocoder has to monitor its response time and frequency output will improve.

Arturia - User Manual MicroFreak - Appendix B: The MicroFreak Vocoder

130

Selecting the frequency range to which the vocoder responds also helps to tune it to male
and female voices. Or, when using an instrument as a modulator, to match the vocoder to
the frequency range of that instrument.

Understanding this will make you a true vocoder virtuoso.

19.2.3.2. Shape Encoder

The Shape knob sets the bandwidth of each filter. Higher settings produce a narrower filter
frequency response. As explained earlier, the filters of the Vocoder are Bandpass filters, that
will emphasize certain frequencies of the wave you send to it. Narrowing the bandwidth of
the Vocoder’s filters will result in more pronounced harmonics.

19.3. Connect the microphone

Insert the microphone unit into the headphones input. Take care to align the black plastic
gooseneck adapter with the edges of the MicroFreak case and press gently but firmly to
attach it to the MicroFreak. If you use headphones to monitor the output signal plug them
into the headphones output at the microphone base.

 The input follows the CTIA, AHJ standard and has four segments; Tip = audio left; ring 1 = audio right;

ring 2 = ground; and sleeve = microphone.

 ! To remove the microphone from the MicroFreak, pull it out at a straight angle from the headphone

output to avoid damage. Remove the microphone before storing or transporting the MicroFreak.

131

Arturia - User Manual MicroFreak - Appendix B: The MicroFreak Vocoder

19.4. (Or) Connect a headset microphone

Insert the 3.5mm TRRS jack of your headset microphone into the MicroFreak headphone
jack.

 We highly recommend using headphones when using the vocoder; if you play the vocoder output

through speakers, the vocoder microphone will pick-up this sound and mix it with your voice input,

creating a feedback loop.

19.5. Select a Vocoder Preset

The standard MicroFreak comes with several template presets to help you get started with
creating certain types of sounds. They start at preset 129 with the Square Poly template. The
MicroFreak Vocoder Limited edition 16 new Vocoder presets in memory locations 304-320.
The presets will help you to get the best possible vocoding results. Select and load a preset
by turning the Preset knob.

When you load a vocoder preset you'll see a tiny 3 step VU meter that responds to the
volume of your voice.

Alternately load an INIT preset, turn the Type knob in the DIGITAL OSCILLATOR section
clockwise and select the Vocoder type.

• Click the encoder

• Turn the encoder and select the vocoder category

• Click the encoder and optionally select a name for you preset

• Click save to save your preset.

19.6. Play & Sing

Once you have set the microphone up, you can start playing the keyboard. When you press
a key and speak or sing into the microphone you'll hear how your voice is resynthesized
with the Vocoder Oscillator. For many people their first experience with a vocoder is
somewhat confusing, because they expect the pitch of vocoder to rise when they sing a
higher pitch. It doesn't! The pitch of the vocoder rises and falls with the keys you press on
the keyboard. The vocoder does not listen to the pitch you sing, it's only interested in the
volume and the timbre of your voice and acts on them.

While playing the keyboard, you can experiment with adjusting the DIGITAL OSCILLATOR
Wave, Timbre and Shape controls. Turn on Paraphonic mode to vocode chords by playing
two or more keys while singing into the microphone.

Arturia - User Manual MicroFreak - Appendix B: The MicroFreak Vocoder

132

19.7. Vocoder Configuration

The Vocoder has settings that you may want to adjust, and please don't hesitate to do so.
It's not like the temperature setting on a fridge that you set once and then forget about it.
Changes in these settings can make all the difference for the result you'll obtain with it.

Below an overview of the Utility settings that are specific for the Vocoder.

Mic Settings

Mic Gain

-12 dB to -59dB, Auto Gain (default)

Noise Gate

Off, -30dB to -90 dB (default -70 dB)

Mic Detection

Off, On (default)

The Utility menu has several options that enable you to fine-tune how the Vocoder responds
to your voice. The above settings are global; they affect how the vocoder responds to your
voice. When you change them it will affect every vocoder preset you create or have created.
More about them later...

The Settings under Utility>Preset are saved with your preset. Each Preset can have its
Volume, Bend Range, Pressure, and Vocoder configuration.

You can change the global Vocoder settings on the MicroFreak in Utility or on your computer
in the MIDI Control Center (MCC).

19.7.1. Preset related Vocoder settings

Two menu items are preset related:

• Vocoder Hiss mode

• Vocoder Hiss Volume

You'll find them in Utility>Preset>Vocoder Hiss Mode and Utility>Preset>Vocoder Hiss Vol.

To understand what they do, we'll have to go back in history, to the first generation of
vocoders. Some of these vocoders had an option that allowed to mix-in an amount of
"hiss"; high-frequency noise with the modulator signal to make the vocoder output more
pronounced in the high-frequency range. The Vocoder output would then be a mix of "Buzz"
signal, in the lower (vowel) frequency range and "Hiss" in the higher frequency range. It
would help to make speech input more intelligible.

The MicroFreak Vocoder Edition also has this option. The Utility>Preset>Hiss Mode menu item
has three options: "Off"/ "Switched" / "Pass"

When set to 'Off" you will only hear the lower ('buzz') frequency range which is used by
vowels.

In the 'Switched' position you will hear the sound of the Vocoder Oscillator with noise ('hiss')
mixed in. There is a buzz/hiss mode detector that monitors the voice channel and sorts
apart buzz (aka "voiced") sections from hiss (aka "unvoiced") sections. Roughly speaking
buzz sounds are vowels while hiss sounds are consonants. In switched mode, during a
hiss period, the carrier oscillator is replaced by a white noise generator. It's called switched
because the output is gate-switched, meaning that there is only output when a modulator is
detected. The output is proportional to the level of modulator input.

In 'Pass' mode you'll hear the vocoded synth signal plus everything from the modulator over
5k. In simpler terms, you will hear your voice, that is the part of your voice that is over 5K
mixed in with the vocoder signal; your voice will bleed through.

133

Arturia - User Manual MicroFreak - Appendix B: The MicroFreak Vocoder

The second option: Utility>Preset>Hiss Volume enables you to set the level of 'Hiss' mixed in
with the modulator signal (your voice) and also affects the white noise replacement level
for switched mode. The mixed-in value ranges from -20db to + 0db.

19.8. Global Vocoder settings

To make the most of your vocoder is good to fine-tune it to your voice and the microphone
type you use. Whether you use the Vocoder Edition Microphone or another type of
microphone, understanding and tweaking some of the Utility settings can improve the
Vocoder's output.

The most important parameter is Utility>Mic Settings. In this menu, you set the initial gain of
the microphone, noise gate level and Microphone detection.

Let's first have a look at setting levels in Utility>Mic Settings>Mic Gain. By default, this is set
to Auto-gain which is the optimal setting for average use of the Vocoder Edition Microphone.
When using a Lavalier type microphone or using an external signal as the carrier, you may
have to change this setting. 'Mic Gain' enables you to set a gain level ranging from -12db to
+59db

19.8.1. Setting microphone levels

As explained in the introduction; when a Vocoder preset is selected you can monitor the
input level of your mic with the small VU animation in the OLED screen. It has three level
indicators; low, mid and 'Skull'. The ideal level is Mid, the level to avoid is 'Skull'. It's called
'Skull' for a reason; at this level, the Vocoder output will be distorted. If you like living on the
edge you'll love this level.

19.8.2. What is gain?

The output of microphones is usually very low, ranging from -30dB to -70dB. You usually
need to apply some form of amplification to be able to use the microphone. The internal
preamp of the MicroFreak can amplify your microphone signal anywhere from -12dB to
+59dB. If you apply a minus setting you will reduce the microphone output signal, applying
positive setting amplifies the microphone output

19.8.3. How do you set gain?

It's not easy to answer the question of how much gain you should apply. It will depend on
the volume of your voice and the distance between your mouth and the microphone.

The best way to tackle this is to set the output level of the master volume of your MicroFreak
to 50%. Try some other (non vocoder) presets to set the volume of the MicroFreak to an
average level. Then select the vocoder Oscillator, press Utility and scroll down to Mic settings.
Press the preset encoder to enter this submenu. Select Mic gain and again press the encoder
to display the current value.

By default, Mic Gain is set to auto. This means the MicroFreak makes an educated guess as
to what the right volume is. Turning the Encoder to the left enables you to set other levels.
Which is what we are going to do next:

Hold down a key and sing or speak into the microphone and adjust the gain level until
the vocoder output is at the right level and does not distort. To play more than one note
simultaneously press the Paraphonic button and adjust the gain until you have a clean
undistorted vocoder output signal. If you speak or sing with lots of dynamics in voice, it best
to stay on the safe side and choose your gain levels conservative.

Arturia - User Manual MicroFreak - Appendix B: The MicroFreak Vocoder

134

19.8.3.1. Noise Gate

It is rarely completely silent in your studio. There is maybe an old fan in the corner or a
faulty display of a vintage synth with a soft whine. Audio engineers call this the noise floor.
They have funny names for many things, but they're ok once you get to know them better.

When the vocoder becomes active, we'll have to amplify the microphone signal many times,
but we do not want to amplify the noise of the fan. By setting the noise parameter you tell
the MicroFreak to ignore sounds below a certain threshold; your voice is ok to record but the
fan must be ignored.

At the minimum setting, the Noise Gate is Off. The Default setting is -70dB. You can set the
input levels from -30db to -98db.

19.8.3.2. Mic detection

When 'ON', the MicroFreak will use active sensing to detect the presence of a microphone. It
is the default setting.

•

•

If enabled, checks for the presence of a microphone each time a Vocoder preset
is loaded or Vocoder Oscillator is selected as oscillator type.

If a microphone is not detected when in Auto Detect mode the vocoder will
display a warning message “warning! mic needed” and the mic will be disabled
until the next preset is loaded and the filterbank of the Vocoder will be bypassed.
You'll hear only the raw unprocessed sound of the Vocoder Oscillator.

 Remember to always save a preset as a 'vocoder type' preset before editing it. This will give you the

benefit of active monitoring of microphone levels while making changes to your preset.

19.8.3.3. Connecting external sources

In the previous section, we've discussed setting gain levels when using the vocoder
microphone. What if you want to use an external source as a modulator?

It may come as a surprise but you can use any audio source as modulator: a guitar, a
drum machine, a mobile phone, an iPad or the output from a Eurorack system. You'll have
to adjust the output level of your source to the input level of the MicroFreak. The output level
of external sources will almost always be too high.

As explained in a previous section; microphone levels are extremely low usually in the range
-60 dBU to -40 dBU, a guitar output level is on average in the -20 dBU range, phones and
tablets are -7.78 dBU and Eurorack is approximately +13 dBU.

To connect any of these devices you'll have to find an adapter, a headphone splitter, that
enables you to connect your device to the 1/8 inch (3.5mm) TRRS connector format of the
microphone/headphone input of the MicroFreak.

135

Arturia - User Manual MicroFreak - Appendix B: The MicroFreak Vocoder

Headphone/Microphone Splitter

 The input follows the CTIA, AHJ standard and has four segments; Tip = audio left; ring 1 = audio right;

ring 2 = ground; and sleeve = microphone.

You can now connect the device you want to use as modulator to the mic branch of the
splitter. See connecting the device below.

 It is not a good idea to directly connect a eurorack module to the splitter. Eurorack signals are

very hot and could easily overload or even damage the MicroFreak. Instead, take the signal from the

headphone output of a eurorack (sub)mixer that has a headphone output or line level outputs and

connect this output to the mic branch of the splitter.

Connecting the device

Before connecting any of these devices:

• Turn off the MicroFreak.

• Gently remove the Gooseneck microphone.

• Before connecting the external device turn the level on this device all the way

down. This is necessary to avoid clipping.

• Plug the splitter into the headphone input of the MicroFreak.

• Plug the signal cable from your device (line level or phone/tablet level) into the

female mic branch of the splitter.

• Turn on the MicroFreak.

Arturia - User Manual MicroFreak - Appendix B: The MicroFreak Vocoder

136

We'll have to change two settings on the MicroFreak:

• Go to Utility-Mic>Mic Detection and turn Mic detection off.

• Select Utility-Mic>Mic Gain and set it to an initial value -12DB.

Next, we have fine-tune the external modulator level:

• Select a vocoder preset.

• Hold a key on the MicroFreak play a note.

• Select Utility-Mic>Mic Gain and slowly turn up the gain level.

If you don't hear anything slowly turn up the gain level on your device until the vocoder
responds.

19.8.4. MIDI Control Center

The MIDI Control Center is an application that you download from the Arturia site to your
computer. There are versions for both macOS and Windows systems.

With the MIDI Control Center you can:

• move presets from the MicroFreak to your computer or from your computer to

the MicroFreak

• change settings on the MicroFreak

The MIDI Control Center manual has general descriptions of the features that are common
to all Arturia products. In the section below we will only refer to settings specific to the
Vocoder.

19.8.4.1. MIDI Control Center settings

The global Vocoder settings in the MIDI Control Center are identical to the ones in the Utility
menu and can also be set there.

You can download the MIDI Control Center software from www.arturia.com.

137

Arturia - User Manual MicroFreak - Appendix B: The MicroFreak Vocoder

19.9. MicroFreak Vocoder Package content

• White MicroFreak casing, with new center strip graphic (image of a swan).

• The Gooseneck Microphone adapter/splitter with an electret type microphone
with an additional headphone output that replaces the original headphones
output.

• A leaflet with a description of the microphone base and the gooseneck.

 It is possible to use headset microphones often bundled with mobile phones for the microphone

input, or clip-on Lavalier microphones as long as they conform to the CTIA, AHJ standard (see TRRS

connection above)

Arturia - User Manual MicroFreak - Appendix B: The MicroFreak Vocoder

138

20. APPENDIX C: CHEAT SHEET

Category

Key combination

Function

Preset

Shift + Preset Encoder

Quick select of “A”, “a”, "0 and “.” character ranges

Long press on Save

Quick save

Press Preset Encoder three times

Resets the current Preset to Init state

Category

Key combination

Function

Oscillator

Shift + Wave encoder

fast) of its setting in Utility > Browsing > Osc Knob

Encoder changes values at opposite speed (slow or

Shift + Timbre encoder

Shift + Shape encoder

Speed

As above

As above

Shift + Type (when Sample/Scan

Grains/Cloud Grains/ Hit Grains is

Lets you browse and select samples

selected)

Category

Key combination

Function

Matrix

Matrix Encoder

Keep depressed for 0.5 second to reset modulation amount

Assign1 + any knob

Assign2 + any knob

Assign3 + any knob

Creates a routing between the assign1 column and the selected

knob

Creates a routing between the assign2 column and the selected

knob

Creates a routing between the assign3 column and the selected

knob

AssignX +matrix point

Creates a routing between the assignX column with the selected

matrix point

Shift + Matrix encoder long

press

Reset all modulation

Category

Key combination

Function

Seq | Arp

Shift + Arp | Seq

Toggle between Arpeggiator and Sequencer

139

Arturia - User Manual MicroFreak - Appendix C: Cheat Sheet

Category

Key combination

Function

Arpeggiator

Shift

+

Note

on

Transpose Arpeggio (note: In Arp Hold mode, lasts until new Arp is

keyboard

played.)

Shift + Up | A

Transfer current Arpeggio to sequencer A

Shift + Order | B

Transfer current Arpeggio to sequencer B

Category

Key

combination

Function

Sequencer

(Record must be

off)

Up | A + Hold

(hold

for

1

Clear sequence A

second)

Order | B + Hold

(hold

for

1

Clear sequence B

second)

Oct | Mod + Hold

Erase current Modulation track

Oct | Mod + Hold

Hold Oct \ | Mod and press the "Hold” icon to erase the next modulation

track. Press Hold repeatedly if you want to clear all modulation tracks.

Shift + Key

Transpose sequence

Shift + A/B

Reload pattern A/B as it was previously saved in the memory

Sequencer

(Step

record

mode active)

Shift

+

Rate

encoder

Change sequence length

Category

Swing

Key combination

Function

Shift + Swing

Set Swing rate

Category

Key combination

Function

Cycling Envelope

Shift + Rise

Set Attack shape of Cycling Envelope

Shift + Fall

Set Decay shape of Cycling Envelope

Arturia - User Manual MicroFreak - Appendix C: Cheat Sheet

140

21. APPENDIX D: CC# VALUES

21.1. What are CC# values?

When you draw notes in the MIDI editor of your DAW, you create MIDI data. With each note
you add, you create a note-on message, a gate message, a note-off message and a velocity
value, etc., all associated with a particular MIDI note number. The velocity value imitates
how hard a key is struck on a MIDI keyboard. When you connect an external synth such
as the Arturia MicroFreak to your DAW and press 'play', the DAW starts sending a stream
of digital MIDI messages to the synth. The MicroFreak interprets these messages and plays
your DAW sequence the way you intended it to sound. Note number and velocity values (like
most values in MIDI) are in the range 0-127.

There's another kind of MIDI data that allows you to control parameters on the MicroFreak.
These Control Change (CC) messages are different from, and independent of, the note-
related MIDI messages. They are referred to as CC# messages: strings of numerical
data that are specifically designed to control parameters on an external MIDI-compatible
hardware or software device; for example, a hardware synth, a Eurorack modular system
or a software modular system such as VCV Rack.

MIDI CC# messages have existed for over 40 years and, despite their enormous potential,
they are not widely used.

When you turn a knob on the MicroFreak a CC# message will be transmitted. The reverse is
also true, when you send a CC# value to the MicroFreak it will respond as if you had turned
a knob. The default CC numbers are:

Parameter

Spice

Glide

Oscillator Type

Oscillator Wave

Oscillator Timbre

Oscillator Shape

Filter Cutoff

Cycling Env Amount

Filter Amount

Cycling Env Hold

Envelope Sustain

Keyboard Hold (toggle)

Filter Resonance

ARP/SEQ rate (free)

ARP/SEQ rate (sync)

CC number

2

5

9

10

12

13

23

24

26

28

29

64

83

91

92

141

Arturia - User Manual MicroFreak - Appendix D: CC# Values

Parameter

LFO rate (free)

LFO rate (sync)

Cycling env rise

Cycling env fall

Envelope Attack

Envelope Decay

CC number

93

94

102

103

105

106

Arturia - User Manual MicroFreak - Appendix D: CC# Values

142

22. DECLARATION OF CONFORMITY

22.1. FCC

WARNING: DO NOT MODIFY THE UNIT!

Any modifications or other changes to this unit not approved by the party responsible for
compliance could void the user’s authority to operate this equipment.

This device complies with Part 15 of the FCC Rules. Operation is subject to the following
two conditions: (1) This device may not cause harmful interference, and (2) This device
must accept any interference received, including interference that may cause undesired
operation.

Responsible Party in USA: Zedra, 185 Alewife Brook Parkway, #210, Cambridge, MA 02138,
United States T: +1 857 285 5953

Trade Name: ARTURIA, Model Number: MicroFreak

interference in a residential

Note: This equipment has been tested and found to comply with the limits for a Class B
digital device, pursuant to part 15 of the FCC Rules. These limits are designed to provide
reasonable protection against harmful
installation. This
equipment generates, uses, and can radiate radio frequency energy and, if not installed
and used in accordance with the instructions, may cause harmful interference to radio
communications. However, there is no guarantee that interference will not occur in a
particular installation. If this equipment does cause harmful
interference to radio or
television reception, which can be determined by turning the equipment off and on, the user
is encouraged to try to correct the interference by one or more of the following measures: •
Reorient or relocate the receiving antenna. • Increase the separation between the equipment
and receiver. • Connect the equipment into an outlet on a circuit different from that to which
the receiver is connected. • Consult the dealer or an experienced radio/TV technician for
help.

22.2. CANADA

This class B digital apparatus meets complies with Canadian ICES-003.

Cet appareil numérique de la classe B est conforme à la norme NMB-003 du Canada

22.3. CE

This device has been tested and found to comply with the limits of the European Council
Directive on the approximation of the laws of the member states relating to Electromagnetic
Compatibility according to 2014/30/EU, and Low Voltage Directive 2014/35/EU.

22.4. UKCA

This device has been tested and complies with the essential requirements of
Electromagnetic Compatibility Regulations 2016.

the

22.5. ROHS

This device has been produced with lead free solder and fulfills the requirements of the
ROHS directive 2011/65/EU.

143

Arturia - User Manual MicroFreak - Declaration of Conformity

22.6. WEEE

This symbol indicates that the electrical and electronic equipment should not be disposed of
as general household waste at its end-of-life. Instead, the products should be handed over
to the applicable collection points for the recycling of electrical and electronic equipment for
proper treatment, recovery, and recycling in accordance with your national legislation and
the Directive 2012/19/EU (WEEE – Directive on Waste Electrical and Electronic Equipment).
For more information about collection points and recycling of these products, please contact
your local municipal office, your household waste disposal service, or the shop where you
purchased the product.

Arturia - User Manual MicroFreak - Declaration of Conformity

144

23. SOFTWARE LICENSE AGREEMENT

In consideration of payment of the Licensee fee, which is a portion of the price you paid,
Arturia, as Licensor, grants to you (hereinafter termed “Licensee”) a nonexclusive right to
use this copy of the SOFTWARE.

All intellectual property rights in the software belong to Arturia SA (hereinafter: “Arturia”).
Arturia permits you only to copy, download, install and use the software in accordance with
the terms and conditions of this Agreement.

The product contains product activation for protection against unlawful copying. The OEM
software can be used only following registration.

Internet access is required for the activation process. The terms and conditions for use of the
software by you, the end-user, appear below. By installing the software on your computer
you agree to these terms and conditions. Please read the following text carefully in its
entirety. If you do not approve these terms and conditions, you must not install this software.
In this event give the product back to where you have purchased it (including all written
material, the complete undamaged packing as well as the enclosed hardware) immediately
but at the latest within 30 days in return for a refund of the purchase price.

1. Software Ownership Arturia shall retain full and complete title to the SOFTWARE recorded
on the enclosed disks and all subsequent copies of the SOFTWARE, regardless of the media
or form on or in which the original disks or copies may exist. The License is not a sale of the
original SOFTWARE.

2. Grant of License Arturia grants you a non-exclusive license for the use of the software
according to the terms and conditions of this Agreement. You may not lease, loan or sub-
license the software.
The use of the software within a network is illegal where there is the possibility of a
contemporaneous multiple use of the program.
You are entitled to prepare a backup copy of the software which will not be used for
purposes other than storage purposes.
You shall have no further right or interest to use the software other than the limited rights as
specified in this Agreement. Arturia reserves all rights not expressly granted.

3. Activation of the Software Arturia may use a compulsory activation of the software and
a compulsory registration of the OEM software for license control to protect the software
against unlawful copying. If you do not accept the terms and conditions of this Agreement,
the software will not work.
In such a case the product including the software may only be returned within 30 days
following acquisition of the product. Upon return a claim according to § 11 shall not apply.

4. Support, Upgrades and Updates after Product Registration You can only receive support,
upgrades and updates following the personal product registration. Support is provided only
for the current version and for the previous version during one year after publication of the
new version. Arturia can modify and partly or completely adjust the nature of the support
(hotline, forum on the website etc.), upgrades and updates at any time.
The product registration is possible during the activation process or at any time later through
the Internet. In such a process you are asked to agree to the storage and use of your
personal data (name, address, contact, email-address, and license data) for the purposes
specified above. Arturia may also forward these data to engaged third parties, in particular
distributors, for support purposes and for the verification of the upgrade or update right.

5. No Unbundling The software usually contains a variety of different files which in its
configuration ensure the complete functionality of the software. The software may be used
as one product only. It is not required that you use or install all components of the software.
You must not arrange components of the software in a new way and develop a modified
version of the software or a new product as a result. The configuration of the software may
not be modified for the purpose of distribution, assignment or resale.

145

Arturia - User Manual MicroFreak - Software License Agreement

6. Assignment of Rights You may assign all your rights to use the software to another
person subject to the conditions that (a) you assign to this other person (i) this Agreement
and (ii) the software or hardware provided with the software, packed or preinstalled
thereon,
including all copies, upgrades, updates, backup copies and previous versions,
which granted a right to an update or upgrade on this software, (b) you do not retain
upgrades, updates, backup copies und previous versions of this software and (c) the
recipient accepts the terms and conditions of this Agreement as well as other regulations
pursuant to which you acquired a valid software license.
A return of the product due to a failure to accept the terms and conditions of this Agreement,
e.g. the product activation, shall not be possible following the assignment of rights.

7. Upgrades and Updates You must have a valid license for the previous or more inferior
version of the software in order to be allowed to use an upgrade or update for the software.
Upon transferring this previous or more inferior version of the software to third parties the
right to use the upgrade or update of the software shall expire.
The acquisition of an upgrade or update does not in itself confer any right to use the
software.
The right of support for the previous or inferior version of the software expires upon the
installation of an upgrade or update.

8. Limited Warranty Arturia warrants that the disks on which the software is furnished is
free from defects in materials and workmanship under normal use for a period of thirty (30)
days from the date of purchase. Your receipt shall be evidence of the date of purchase. Any
implied warranties on the software are limited to thirty (30) days from the date of purchase.
Some states do not allow limitations on duration of an implied warranty, so the above
limitation may not apply to you. All programs and accompanying materials are provided “as
is” without warranty of any kind. The complete risk as to the quality and performance of the
programs is with you. Should the program prove defective, you assume the entire cost of all
necessary servicing, repair or correction.

9. Remedies Arturia's entire liability and your exclusive remedy shall be at Arturia's option
either (a) return of the purchase price or (b) replacement of the disk that does not meet the
Limited Warranty and which is returned to Arturia with a copy of your receipt. This limited
Warranty is void if failure of the software has resulted from accident, abuse, modification,
or misapplication. Any replacement software will be warranted for the remainder of the
original warranty period or thirty (30) days, whichever is longer.

10. No other Warranties The above warranties are in lieu of all other warranties, expressed
or implied, including but not limited to, the implied warranties of merchantability and fitness
for a particular purpose. No oral or written information or advice given by Arturia, its dealers,
distributors, agents or employees shall create a warranty or in any way increase the scope
of this limited warranty.

11. No Liability for Consequential Damages Neither Arturia nor anyone else involved in
the creation, production, or delivery of this product shall be liable for any direct, indirect,
consequential, or incidental damages arising out of the use of, or inability to use this product
(including without limitation, damages for loss of business profits, business interruption, loss
of business information and the like) even if Arturia was previously advised of the possibility
of such damages. Some states do not allow limitations on the length of an implied warranty
or the exclusion or limitation of incidental or consequential damages, so the above limitation
or exclusions may not apply to you. This warranty gives you specific legal rights, and you
may also have other rights which vary from state to state.

Arturia - User Manual MicroFreak - Software License Agreement

146


