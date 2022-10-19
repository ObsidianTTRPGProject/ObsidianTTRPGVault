---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/small-or-medium
- monster/type/humanoid/sorcerer
aliases: ["Prismari Pledgemage"]
statblock: true
"name": "Prismari Pledgemage"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "sorcerer"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "10"
- !!int "15"
- !!int "13"
- !!int "12"
- !!int "14"
- !!int "17"
"speed": "walk 35 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Performance": !!int "7"
  "Acrobatics": !!int "4"
"senses": "passive Perception 12"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 13):\n\
    \nAt will: [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day\
    \ each: [mage armor](/compendium/spells/mage-armor.md), [water walk](/compendium/spells/water-walk.md)\n\
    \n2/day each: [gust of wind](/compendium/spells/gust-of-wind.md), [silent\
    \ image](/compendium/spells/silent-image.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the pledgemage is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the pledgemage instead takes no damage\
    \ if it succeeds on the saving throw and only half damage if it fails, provided\
    \ it isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Evasion"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage makes two Elemental Strike attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 12 (3d6 + 2) fire or cold damage (the pledgemage's choice)."
  "name": "Elemental Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage shines with elemental magic, targeting one creature it can\
    \ see within 60 feet of itself. The target must make a DC 13 Wisdom saving throw.\
    \ On a failed save, the target takes 28 (8d6) fire or cold damage (the pledgemage's\
    \ choice) and is [stunned](/rules/conditions.md#stunned) until the start of the\
    \ pledgemage's next turn. On a successful save, the target takes half as much\
    \ damage and isn't [stunned](/rules/conditions.md#stunned)."
  "name": "Showstopper (1/Day)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage moves up to its speed, surrounding itself with elemental\
    \ magic as it moves. Until the end of its turn, the pledgemage can move through\
    \ the space of other creatures. The first time the pledgemage enters a creature's\
    \ space on a turn, that creature must succeed on a DC 13 Dexterity saving throw\
    \ or be knocked [prone](/rules/conditions.md#prone). If the pledgemage ends its\
    \ turn in another creature's space, the pledgemage takes 5 (1d10) force damage\
    \ and is pushed into the nearest unoccupied space."
  "name": "Surge of Artistry (Recharge 4-6)"
"source":
- "SCC"
name: Prismari Pledgemage
image: "[[Prismari Pledgemage.png]]"
---

# Prismari Pledgemage

```statblock
"name": "Prismari Pledgemage"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "sorcerer"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "10"
- !!int "15"
- !!int "13"
- !!int "12"
- !!int "14"
- !!int "17"
"speed": "walk 35 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Performance": !!int "7"
  "Acrobatics": !!int "4"
"senses": "passive Perception 12"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 13):\n\
    \nAt will: [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day\
    \ each: [mage armor](/compendium/spells/mage-armor.md), [water walk](/compendium/spells/water-walk.md)\n\
    \n2/day each: [gust of wind](/compendium/spells/gust-of-wind.md), [silent\
    \ image](/compendium/spells/silent-image.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the pledgemage is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the pledgemage instead takes no damage\
    \ if it succeeds on the saving throw and only half damage if it fails, provided\
    \ it isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Evasion"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage makes two Elemental Strike attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 12 (3d6 + 2) fire or cold damage (the pledgemage's choice)."
  "name": "Elemental Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage shines with elemental magic, targeting one creature it can\
    \ see within 60 feet of itself. The target must make a DC 13 Wisdom saving throw.\
    \ On a failed save, the target takes 28 (8d6) fire or cold damage (the pledgemage's\
    \ choice) and is [stunned](/rules/conditions.md#stunned) until the start of the\
    \ pledgemage's next turn. On a successful save, the target takes half as much\
    \ damage and isn't [stunned](/rules/conditions.md#stunned)."
  "name": "Showstopper (1/Day)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage moves up to its speed, surrounding itself with elemental\
    \ magic as it moves. Until the end of its turn, the pledgemage can move through\
    \ the space of other creatures. The first time the pledgemage enters a creature's\
    \ space on a turn, that creature must succeed on a DC 13 Dexterity saving throw\
    \ or be knocked [prone](/rules/conditions.md#prone). If the pledgemage ends its\
    \ turn in another creature's space, the pledgemage takes 5 (1d10) force damage\
    \ and is pushed into the nearest unoccupied space."
  "name": "Surge of Artistry (Recharge 4-6)"
"source":
- "SCC"
"image": "[[Prismari Pledgemage.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 205*

## Description

The students of Prismari College—first as apprentices and then as pledgemages—see no distinction between magic and art. No two Prismari students have the same style of spellcasting; each wields the elemental magic taught by the college in a way that expresses their personality. In the hands of Prismari students, spells that conjure fire or bend water to one's will become vibrant and expressive showcases, thrumming with creative energy.

Harnessing the elemental forces of their magic requires precision and grace, and some students dedicate themselves to chasing the ideal of perfect control, hoping that by doing so, they can accurately express what is churning within their minds.

**Prismari Scholars.** The scholars of Prismari College believe that art is the truest form of spellcraft. They use magic to make splendid art, and they employ artistry to make their magic spectacular.