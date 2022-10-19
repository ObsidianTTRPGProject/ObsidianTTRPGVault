---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/druid
- monster/environment/forest
- monster/environment/mountain
- monster/environment/swamp
- monster/environment/underwater
aliases: ["Archdruid"]
statblock: true
"name": "Archdruid"
"size": "Medium"
"type": "humanoid"
"subtype": "druid"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "154"
"hit_dice": "28d8 + 28"
"stats":
- !!int "14"
- !!int "14"
- !!int "12"
- !!int "12"
- !!int "20"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
"skillsaves":
  "Medicine": !!int "9"
  "Nature": !!int "5"
  "Perception": !!int "9"
"senses": "passive Perception 19"
"languages": "Druidic plus any two languages"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archdruid casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 17):\n\nAt will: [beast sense](/compendium/spells/beast-sense.md),\
    \ [entangle](/compendium/spells/entangle.md), [speak with animals](/compendium/spells/speak-with-animals.md)\n\
    \n1/day each: [commune with nature](/compendium/spells/commune-with-nature.md)\
    \ (as an action), [mass cure wounds](/compendium/spells/mass-cure-wounds.md)\n\
    \n3/day each: [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [dominate beast](/compendium/spells/dominate-beast.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [tree stride](/compendium/spells/tree-stride.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archdruid makes three Staff or Wildfire attacks. It can replace one\
    \ attack with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage plus 21 (6d6) poison damage."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +9 to hit, range 120 ft., one target. Hit: 26 (6d6\
    \ + 5) fire damage, and the target is [blinded](/rules/conditions.md#blinded)\
    \ until the start of the druid's next turn."
  "name": "Wildfire"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archdruid magically transforms into a Beast or an Elemental with a\
    \ challenge rating of 6 or less and can remain in that form for up to 9 hours.\
    \ The archdruid can choose whether its equipment falls to the ground, melds with\
    \ its new form, or is worn by the new form. The archdruid reverts to its true\
    \ form if it dies or falls [unconscious](/rules/conditions.md#unconscious). The\
    \ archdruid can revert to its true form using a bonus action.\n\nWhile in a new\
    \ form, the archdruid's stat block is replaced by the stat block of that form,\
    \ except the archdruid keeps its current hit points, its hit point maximum, this\
    \ bonus action, its languages and ability to speak, and its Spellcasting action.\n\
    \nThe new form's attacks count as magical for the purpose of overcoming resistances\
    \ and immunity to nonmagical attacks."
  "name": "Change Shape (2/Day)"
"source":
- "MPMM"
- "VGM"
name: Archdruid
image: "[[Archdruid.png]]"
---

# Archdruid

```statblock
"name": "Archdruid"
"size": "Medium"
"type": "humanoid"
"subtype": "druid"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "154"
"hit_dice": "28d8 + 28"
"stats":
- !!int "14"
- !!int "14"
- !!int "12"
- !!int "12"
- !!int "20"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
"skillsaves":
  "Medicine": !!int "9"
  "Nature": !!int "5"
  "Perception": !!int "9"
"senses": "passive Perception 19"
"languages": "Druidic plus any two languages"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archdruid casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 17):\n\nAt will: [beast sense](/compendium/spells/beast-sense.md),\
    \ [entangle](/compendium/spells/entangle.md), [speak with animals](/compendium/spells/speak-with-animals.md)\n\
    \n1/day each: [commune with nature](/compendium/spells/commune-with-nature.md)\
    \ (as an action), [mass cure wounds](/compendium/spells/mass-cure-wounds.md)\n\
    \n3/day each: [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [dominate beast](/compendium/spells/dominate-beast.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [tree stride](/compendium/spells/tree-stride.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archdruid makes three Staff or Wildfire attacks. It can replace one\
    \ attack with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage plus 21 (6d6) poison damage."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +9 to hit, range 120 ft., one target. Hit: 26 (6d6\
    \ + 5) fire damage, and the target is [blinded](/rules/conditions.md#blinded)\
    \ until the start of the druid's next turn."
  "name": "Wildfire"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archdruid magically transforms into a Beast or an Elemental with a\
    \ challenge rating of 6 or less and can remain in that form for up to 9 hours.\
    \ The archdruid can choose whether its equipment falls to the ground, melds with\
    \ its new form, or is worn by the new form. The archdruid reverts to its true\
    \ form if it dies or falls [unconscious](/rules/conditions.md#unconscious). The\
    \ archdruid can revert to its true form using a bonus action.\n\nWhile in a new\
    \ form, the archdruid's stat block is replaced by the stat block of that form,\
    \ except the archdruid keeps its current hit points, its hit point maximum, this\
    \ bonus action, its languages and ability to speak, and its Spellcasting action.\n\
    \nThe new form's attacks count as magical for the purpose of overcoming resistances\
    \ and immunity to nonmagical attacks."
  "name": "Change Shape (2/Day)"
"source":
- "MPMM"
- "VGM"
"image": "[[Archdruid.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 48, Volo's Guide to Monsters p. 210*

## Description

Archdruids watch over the natural wonders of their domains. They seldom interact with folk away from their druid groves and shrines, unless there is a great threat to the natural order or to a nearby community. An archdruid typically has one or more pupils who are [druids](/compendium/bestiary/humanoid/druid.md), and the archdruid's lair is usually guarded by loyal Beasts and Fey creatures.

When an archdruid uses their Change Shape action, you may choose the creature they turn into, abiding by the action's restrictions. Or you may roll on the Archdruid Favored Shapes table to determine the form the archdruid adopts.

**Archdruid Favored Shapes**

| dice: d8 | Favored Shape |
|----------|---------------|
| 1 | [Air elemental](/compendium/bestiary/elemental/air-elemental.md) |
| 2 | [Earth elemental](/compendium/bestiary/elemental/earth-elemental.md) |
| 3 | [Fire elemental](/compendium/bestiary/elemental/fire-elemental.md) |
| 4 | [Giant crocodile](/compendium/bestiary/beast/giant-crocodile.md) |
| 5 | [Mammoth](/compendium/bestiary/beast/mammoth.md) |
| 6 | [Flail snail](/compendium/bestiary/elemental/flail-snail-mpmm.md) |
| 7 | [Triceratops](/compendium/bestiary/beast/triceratops.md) |
| 8 | [Water elemental](/compendium/bestiary/elemental/water-elemental.md) |
^archdruid-favored-shapes

## Environment

forest, mountain, swamp, underwater