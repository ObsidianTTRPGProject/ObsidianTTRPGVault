---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/medium
- monster/type/humanoid/tiefling
aliases: ["Vanifer"]
statblock: true
"name": "Vanifer"
"size": "Medium"
"type": "humanoid"
"subtype": "tiefling"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "11"
- !!int "16"
- !!int "17"
- !!int "12"
- !!int "13"
- !!int "19"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "8"
  "Performance": !!int "8"
  "Arcana": !!int "5"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Ignan, Infernal"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vanifer is a 10th-level spellcaster. Her spellcasting ability is Charisma\
    \ (spell save DC 16, +8 to hit with spell attacks). Vanifer knows the following\
    \ sorcerer spells:\n\nCantrips (at will): [chill touch](/compendium/spells/chill-touch.md),\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [friends](/compendium/spells/friends.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md),\
    \ [produce flame](/compendium/spells/produce-flame.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [burning hands](/compendium/spells/burning-hands.md),\
    \ [chromatic orb](/compendium/spells/chromatic-orb.md), [hellish rebuke](/compendium/spells/hellish-rebuke.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [darkness](/compendium/spells/darkness.md), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [misty step](/compendium/spells/misty-step.md), [scorching ray](/compendium/spells/scorching-ray.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fireball](/compendium/spells/fireball.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md)\n\
    \n4th level (3 4th-level slots): [wall of fire](/compendium/spells/wall-of-fire.md)\n\
    \n5th level (2 5th-level slots): [dominate person](/compendium/spells/dominate-person.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Vanifer drops to 0 hit points, her body is consumed in a flash of\
    \ fire and smoke. Anything she was wearing or carrying is left behind among ashes."
  "name": "Funeral Pyre"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Vanifer fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vanifer makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d4 + 5) piercing damage plus 7 (2d6) fire damage."
  "name": "Tinderstrike"
"source":
- "PotA"
name: Vanifer
image: "[[Vanifer.png]]"
---

# Vanifer

```statblock
"name": "Vanifer"
"size": "Medium"
"type": "humanoid"
"subtype": "tiefling"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "11"
- !!int "16"
- !!int "17"
- !!int "12"
- !!int "13"
- !!int "19"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "8"
  "Performance": !!int "8"
  "Arcana": !!int "5"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Ignan, Infernal"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vanifer is a 10th-level spellcaster. Her spellcasting ability is Charisma\
    \ (spell save DC 16, +8 to hit with spell attacks). Vanifer knows the following\
    \ sorcerer spells:\n\nCantrips (at will): [chill touch](/compendium/spells/chill-touch.md),\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [friends](/compendium/spells/friends.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md),\
    \ [produce flame](/compendium/spells/produce-flame.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [burning hands](/compendium/spells/burning-hands.md),\
    \ [chromatic orb](/compendium/spells/chromatic-orb.md), [hellish rebuke](/compendium/spells/hellish-rebuke.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [darkness](/compendium/spells/darkness.md), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [misty step](/compendium/spells/misty-step.md), [scorching ray](/compendium/spells/scorching-ray.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fireball](/compendium/spells/fireball.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md)\n\
    \n4th level (3 4th-level slots): [wall of fire](/compendium/spells/wall-of-fire.md)\n\
    \n5th level (2 5th-level slots): [dominate person](/compendium/spells/dominate-person.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Vanifer drops to 0 hit points, her body is consumed in a flash of\
    \ fire and smoke. Anything she was wearing or carrying is left behind among ashes."
  "name": "Funeral Pyre"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Vanifer fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vanifer makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d4 + 5) piercing damage plus 7 (2d6) fire damage."
  "name": "Tinderstrike"
"source":
- "PotA"
"image": "[[Vanifer.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 203*

## Description

Vanifer's rough childhood has hardened her heart against others. The world is a corrupt, painful place, she thinks, and deserving of a fiery end. For years, she was a dancer and concubine in a pasha's court in Calimshan. Later, she took up the mantle of prophet when she found Tinderstrike, and the same ruthless ambition and practiced manipulation that enabled her to escape a life of servitude serves her well as the head of a growing cult.

For Vanifer, battle is best observed at a distance. She prefers to hurl destructive magic from afar. Those who challenge Vanifer in melee learn a painful lesson, as she and Tinderstrike make a formidable pair.

In the Fire Node

When enemies threaten the Temple of Eternal Flame, Vanifer withdraws to the Weeping Colossus, the fire node. Within this node, Vanifer gains one additional use of her Legendary Resistance trait.