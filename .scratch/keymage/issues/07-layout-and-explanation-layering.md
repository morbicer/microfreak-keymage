# Layout and explanation layering

Type: prototype
Status: resolved
Blocked by:

## Question

Where do the Keyboard view, Scale/Root selectors, chord builder, progression controls, transport, Clip view, MIDI picker and explain panel sit? How do one-line captions and the on-demand explain panel coexist without clutter? Answer this with a rough HTML mockup the user reacts to.

## Answer

The user picked **Variant B: Sidebar + live lesson** out of three prototyped layouts. The prototype is on branch `prototype/layout` (`prototypes/layout-prototype.html`, open it by double-clicking). Variant A was an instrument panel with **?** drawers, and C was guided tabs.

The layout:
- **Left sidebar, fixed at about 300 px.** Every control lives here, stacked in this order: Scale & Root, Chord (degree buttons + Chord type toggle), Progression (preset select, generator Length/Ending/Generate, Chord length of the selected slot), Play (play/stop, tempo, loop), Output (sound select plus the hardware-sync reminder when MIDI is on).
- **Main area, top to bottom:** the current chord name with its numeral, the Keyboard view, the progression strip (slots with Chord function color bars and a reason between slots, × to remove, ＋ to add), the Clip view (scrolls sideways), and the **Lesson panel**.
- **Explanation layering:** there are no **?** buttons and no captions in the sidebar. The Lesson panel always shows the long explanation for whatever section you last hovered (every section and main-area block has a topic). For the keyboard, chord and progression topics it adds the current chord's description ("G = V, built on step 5 of C Major: G – B – D. Role: Tension"). Its default topic is Keyboard.
- **The implementation should add** focus (keyboard tabbing) as a trigger for the Lesson panel alongside hover. Hover doesn't exist for keyboard users.
- **The prototype's draft explanation copy** (the `EX` table in the file) is the starting text. Wording gets refined in the spec.
- **Visual language kept from the prototype:** dark panel, MicroFreak orange accent, snapped keys greyed with italic labels, an orange tick under the scale Root, chord tones in light orange with the root in solid orange, Home/Building/Tension in green/yellow/red. All of it comes from CSS variables.
