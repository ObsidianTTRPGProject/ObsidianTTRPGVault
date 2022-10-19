---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/small-or-medium
- monster/type/humanoid/sorcerer
aliases: ["Prismari Apprentice"]
statblock: true
"name": "Prismari Apprentice"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "sorcerer"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "13"
- !!int "15"
"speed": "walk 35 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Performance": !!int "6"
  "Acrobatics": !!int "4"
"senses": "passive Perception 11"
"languages": "Common plus any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The apprentice casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 12):\n\
    \nAt will: [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day\
    \ each: [gust of wind](/compendium/spells/gust-of-wind.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [silent image](/compendium/spells/silent-image.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +4 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 10 (3d6) fire or cold damage (the apprentice's choice)."
  "name": "Elemental Strike"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The apprentice moves up to its speed, surrounding itself with elemental\
    \ magic as it moves. Until the end of its turn, the apprentice can move through\
    \ the space of other creatures. The first time the apprentice enters a creature's\
    \ space on a turn, that creature must succeed on a DC 12 Dexterity saving throw\
    \ or be knocked [prone](/rules/conditions.md#prone). If the apprentice ends its\
    \ turn in another creature's space, the apprentice takes 5 (1d10) force damage\
    \ and is pushed into the nearest unoccupied space."
  "name": "Surge of Artistry (Recharge 4-6)"
"source":
- "SCC"
name: Prismari Apprentice
image: "[[Prismari Apprentice.png]]"
---

# Prismari Apprentice

```statblock
"name": "Prismari Apprentice"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "sorcerer"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "13"
- !!int "15"
"speed": "walk 35 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Performance": !!int "6"
  "Acrobatics": !!int "4"
"senses": "passive Perception 11"
"languages": "Common plus any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The apprentice casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 12):\n\
    \nAt will: [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day\
    \ each: [gust of wind](/compendium/spells/gust-of-wind.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [silent image](/compendium/spells/silent-image.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +4 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 10 (3d6) fire or cold damage (the apprentice's choice)."
  "name": "Elemental Strike"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The apprentice moves up to its speed, surrounding itself with elemental\
    \ magic as it moves. Until the end of its turn, the apprentice can move through\
    \ the space of other creatures. The first time the apprentice enters a creature's\
    \ space on a turn, that creature must succeed on a DC 12 Dexterity saving throw\
    \ or be knocked [prone](/rules/conditions.md#prone). If the apprentice ends its\
    \ turn in another creature's space, the apprentice takes 5 (1d10) force damage\
    \ and is pushed into the nearest unoccupied space."
  "name": "Surge of Artistry (Recharge 4-6)"
"source":
- "SCC"
"image": "[[Prismari Apprentice.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 205*

## Description

The students of Prismari College—first as apprentices and then as pledgemages—see no distinction between magic and art. No two Prismari students have the same style of spellcasting; each wields the elemental magic taught by the college in a way that expresses their personality. In the hands of Prismari students, spells that conjure fire or bend water to one's will become vibrant and expressive showcases, thrumming with creative energy.

Harnessing the elemental forces of their magic requires precision and grace, and some students dedicate themselves to chasing the ideal of perfect control, hoping that by doing so, they can accurately express what is churning within their minds.

**Prismari Scholars.** The scholars of Prismari College believe that art is the truest form of spellcraft. They use magic to make splendid art, and they employ artistry to make their magic spectacular.