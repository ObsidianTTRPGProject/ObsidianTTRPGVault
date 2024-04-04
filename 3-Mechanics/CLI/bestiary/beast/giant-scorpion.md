---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Giant Scorpion"]
---
# [Giant Scorpion](3-Mechanics\CLI\bestiary\beast/giant-scorpion.md)
*Source: Monster Manual p. 327. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Giant Scorpion"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"stats":
- !!int "15"
- !!int "13"
- !!int "15"
- !!int "1"
- !!int "9"
- !!int "3"
"speed": "40 ft."
"senses": "blindsight 60 ft., passive Perception 9"
"languages": ""
"cr": "3"
"actions":
- "desc": "The scorpion makes three attacks: two with its claws and one with its sting."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 2|text(6) (1d8 + 2) bludgeoning damage, and the target\
    \ is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) (escape DC 12).\
    \ The scorpion has two claws, each of which can grapple only one target."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one creature.\
    \ Hit: dice:1d10 + 2|text(7) (1d10 + 2) piercing damage, and the target\
    \ must make a DC 12 Constitution saving throw, taking dice:4d10|text(22) (4d10)\
    \ poison damage on a failed save, or half as much damage on a successful one."
  "name": "Sting"
"source":
- "MM"
- "TftYP"
- "ToA"
- "BGDIA"
- "EGW"
- "CM"
- "JttRC"
- "DSotDQ"
- "PSA"
"image": "/3-Mechanics/CLI/bestiary/beast/token/giant-scorpion.webp"
```
^statblock

## Environment

desert