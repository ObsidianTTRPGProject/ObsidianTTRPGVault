---
cssclass: json5e-monster
tags:
- compendium/src/oow
- monster/size/medium
- monster/type/humanoid/dwarf
- monster/environment/urban
aliases: ["Dagdra Deepforge"]
statblock: true
"name": "Dagdra Deepforge"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "13"
"skillsaves":
  "Medicine": !!int "7"
  "Religion": !!int "5"
  "Persuasion": !!int "3"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "any two languages, Dwarvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dagdra is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell\
    \ save DC 13, +5 to hit with spell attacks). Dagdra has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md), [sacred\
    \ flame](/compendium/spells/sacred-flame.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [guiding bolt](/compendium/spells/guiding-bolt.md), [sanctuary](/compendium/spells/sanctuary.md)\n\
    \n2nd level (3 2nd-level slots): [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (2\
    \ 3rd-level slots): [dispel magic](/compendium/spells/dispel-magic.md), [spirit\
    \ guardians](/compendium/spells/spirit-guardians.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Dagdra can expend a spell slot to cause its melee weapon\
    \ attacks to magically deal an extra 10 (3d6) radiant damage to a target on a\
    \ hit. This benefit lasts until the end of the turn. If Dagdra expends a spell\
    \ slot of 2nd level or higher, the extra damage increases by 1d6 for each level\
    \ above 1st."
  "name": "Divine Eminence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dagdra has advantage on saving throws against poison, and has resistance\
    \ against poison damage."
  "name": "Dwarven Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage."
  "name": "Mace"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As an action, Dagdra draws a spell scroll from her [documancy satchel](/compendium/items/documancy-satchel-ai.md).\
    \ The scroll contains a spell of up to 3rd level of Dagdra's choice. Only Dagdra\
    \ can use the scroll, which vanishes after 1 minute."
  "name": "Scroll Service (1/Day)"
"source":
- "OoW"
name: Dagdra Deepforge
image: "[[Dagdra Deepforge.png]]"
---

# Dagdra Deepforge

```statblock
"name": "Dagdra Deepforge"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "13"
"skillsaves":
  "Medicine": !!int "7"
  "Religion": !!int "5"
  "Persuasion": !!int "3"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "any two languages, Dwarvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dagdra is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell\
    \ save DC 13, +5 to hit with spell attacks). Dagdra has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md), [sacred\
    \ flame](/compendium/spells/sacred-flame.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [guiding bolt](/compendium/spells/guiding-bolt.md), [sanctuary](/compendium/spells/sanctuary.md)\n\
    \n2nd level (3 2nd-level slots): [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (2\
    \ 3rd-level slots): [dispel magic](/compendium/spells/dispel-magic.md), [spirit\
    \ guardians](/compendium/spells/spirit-guardians.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Dagdra can expend a spell slot to cause its melee weapon\
    \ attacks to magically deal an extra 10 (3d6) radiant damage to a target on a\
    \ hit. This benefit lasts until the end of the turn. If Dagdra expends a spell\
    \ slot of 2nd level or higher, the extra damage increases by 1d6 for each level\
    \ above 1st."
  "name": "Divine Eminence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dagdra has advantage on saving throws against poison, and has resistance\
    \ against poison damage."
  "name": "Dwarven Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage."
  "name": "Mace"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As an action, Dagdra draws a spell scroll from her [documancy satchel](/compendium/items/documancy-satchel-ai.md).\
    \ The scroll contains a spell of up to 3rd level of Dagdra's choice. Only Dagdra\
    \ can use the scroll, which vanishes after 1 minute."
  "name": "Scroll Service (1/Day)"
"source":
- "OoW"
"image": "[[Dagdra Deepforge.png]]"
```
^statblock

*Source: The Orrery of the Wanderer p. 145*

## Description

Priests bring the teachings of their gods to the common folk. They are the spiritual leaders of temples and shrines and often hold positions of influence in their communities. Evil priests might work openly under a tyrant, or they might be the leaders of religious sects hidden in the shadows of good society, overseeing depraved rites. A priest typically has one or more acolytes to help with religious ceremonies and other sacred duties.

## Environment

urban