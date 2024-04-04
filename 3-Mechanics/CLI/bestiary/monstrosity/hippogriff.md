---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Hippogriff"]
---
# [Hippogriff](3-Mechanics\CLI\bestiary\monstrosity/hippogriff.md)
*Source: Monster Manual p. 184. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Hippogriff"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "17"
- !!int "13"
- !!int "13"
- !!int "2"
- !!int "12"
- !!int "8"
"speed": "40 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": ""
"cr": "1"
"traits":
- "desc": "The hippogriff has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- "desc": "The hippogriff makes two attacks: one with its beak and one with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d10 + 3|text(8) (1d10 + 3) piercing damage."
  "name": "Beak"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 3|text(10) (2d6 + 3) slashing damage."
  "name": "Claws"
"source":
- "MM"
- "PotA"
- "SKT"
- "WDH"
- "ERLW"
- "EGW"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/hippogriff.webp"
```
^statblock

## Environment

mountain, grassland, hill