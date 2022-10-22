---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/monstrosity
- monster/environment/arctic
aliases: ["Winter Wolf"]
statblock: true
"name": "Winter Wolf"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "7"
- !!int "12"
- !!int "8"
"speed": "walk 50 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "5"
"damage_immunities": "cold"
"senses": "passive Perception 15"
"languages": "Common, Giant, Winter Wolf"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolf has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolf has advantage on an attack roll against a creature if at least\
    \ one of the wolf's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy\
    \ terrain."
  "name": "Snow Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage. If the target is a creature, it must succeed on a DC 14\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature\
    \ in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Cold Breath (Recharge 5-6)"
"source":
- "MM"
- "SKT"
- "TftYP"
- "ToA"
- "IDRotF"
name: Winter Wolf
image: "[[Winter Wolf.png]]"
---

# Winter Wolf

```statblock
"name": "Winter Wolf"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "7"
- !!int "12"
- !!int "8"
"speed": "walk 50 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "5"
"damage_immunities": "cold"
"senses": "passive Perception 15"
"languages": "Common, Giant, Winter Wolf"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolf has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolf has advantage on an attack roll against a creature if at least\
    \ one of the wolf's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy\
    \ terrain."
  "name": "Snow Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage. If the target is a creature, it must succeed on a DC 14\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature\
    \ in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Cold Breath (Recharge 5-6)"
"source":
- "MM"
- "SKT"
- "TftYP"
- "ToA"
- "IDRotF"
"image": "[[Winter Wolf.png]]"
```
^statblock

*Source: Monster Manual p. 340, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Icewind Dale: Rime of the Frostmaiden*

## Description

The arctic-dwelling winter wolf is as large as a dire wolf but has snow-white fur and pale blue eyes. Frost giants use these evil creatures as guards and hunting companions, putting the wolves' deadly breath weapon to use against their foes. Winter wolves communicate with one another using growls and barks, but they speak Common and Giant well enough to follow simple conversations.

## Environment

arctic