---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Winter Wolf"]
---
# [Winter Wolf](3-Mechanics\CLI\bestiary\monstrosity/winter-wolf.md)
*Source: Monster Manual p. 340. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Winter Wolf"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "7"
- !!int "12"
- !!int "8"
"speed": "50 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "5"
"damage_immunities": "cold"
"senses": "passive Perception 15"
"languages": "Common, Giant, Winter Wolf"
"cr": "3"
"traits":
- "desc": "The wolf has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- "desc": "The wolf has advantage on an attack roll against a creature if at least\
    \ one of the wolf's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- "desc": "The wolf has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth))\
    \ checks made to hide in snowy terrain."
  "name": "Snow Camouflage"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) piercing damage. If the target is\
    \ a creature, it must succeed on a DC 14 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Bite"
- "desc": "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature\
    \ in that area must make a DC 12 Dexterity saving throw, taking dice:4d8|text(18)\
    \ (4d8) cold damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Cold Breath (Recharge 5-6)"
"source":
- "MM"
- "SKT"
- "TftYP"
- "ToA"
- "IDRotF"
- "KftGV"
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/winter-wolf.webp"
```
^statblock

## Environment

arctic