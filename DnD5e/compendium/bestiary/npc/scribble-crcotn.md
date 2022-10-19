---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/medium
- monster/type/humanoid/kenku
aliases: ["Scribble"]
statblock: true
"name": "Scribble"
"size": "Medium"
"type": "humanoid"
"subtype": "kenku"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "10"
- !!int "12"
- !!int "12"
- !!int "16"
- !!int "12"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Intelligence": !!int "5"
"skillsaves":
  "Investigation": !!int "5"
  "History": !!int "5"
  "Arcana": !!int "5"
"senses": "passive Perception 11"
"languages": "Common plus one other language, Auran"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Scribble casts one of the following spells, using Intelligence as the spellcasting\
    \ ability:\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md)\n\n1/day each: [comprehend\
    \ languages](/compendium/spells/comprehend-languages.md), [identify](/compendium/spells/identify.md)\
    \ (as an action), [mage armor](/compendium/spells/mage-armor.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Scribble can mimic any sounds it has heard, including voices. A creature\
    \ that hears the sounds can tell they are imitations with a successful DC 14 Wisdom\
    \ ([Insight](/rules/skills.md#Insight)) check."
  "name": "Mimicry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 30 ft.,\
    \ one target. Hit: 14 (2d10 + 3) lightning damage. If the target is a creature,\
    \ it can't take reactions until the start of its next turn."
  "name": "Arcane Shock"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Scribble adds 2 to its AC against one attack that would hit it. To do so,\
    \ Scribble must be able to see the attacker and have a free hand."
  "name": "Glyph of Shielding"
"source":
- "CRCotN"
name: Scribble
image: "[[Scribble.png]]"
---

# Scribble

```statblock
"name": "Scribble"
"size": "Medium"
"type": "humanoid"
"subtype": "kenku"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "10"
- !!int "12"
- !!int "12"
- !!int "16"
- !!int "12"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Intelligence": !!int "5"
"skillsaves":
  "Investigation": !!int "5"
  "History": !!int "5"
  "Arcana": !!int "5"
"senses": "passive Perception 11"
"languages": "Common plus one other language, Auran"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Scribble casts one of the following spells, using Intelligence as the spellcasting\
    \ ability:\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md)\n\n1/day each: [comprehend\
    \ languages](/compendium/spells/comprehend-languages.md), [identify](/compendium/spells/identify.md)\
    \ (as an action), [mage armor](/compendium/spells/mage-armor.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Scribble can mimic any sounds it has heard, including voices. A creature\
    \ that hears the sounds can tell they are imitations with a successful DC 14 Wisdom\
    \ ([Insight](/rules/skills.md#Insight)) check."
  "name": "Mimicry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 30 ft.,\
    \ one target. Hit: 14 (2d10 + 3) lightning damage. If the target is a creature,\
    \ it can't take reactions until the start of its next turn."
  "name": "Arcane Shock"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Scribble adds 2 to its AC against one attack that would hit it. To do so,\
    \ Scribble must be able to see the attacker and have a free hand."
  "name": "Glyph of Shielding"
"source":
- "CRCotN"
"image": "[[Scribble.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 206*