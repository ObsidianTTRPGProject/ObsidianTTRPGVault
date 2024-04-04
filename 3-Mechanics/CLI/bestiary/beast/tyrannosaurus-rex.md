---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Tyrannosaurus Rex"]
---
# [Tyrannosaurus Rex](3-Mechanics\CLI\bestiary\beast/tyrannosaurus-rex.md)
*Source: Monster Manual p. 80. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Tyrannosaurus Rex"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "13d12 + 52"
"stats":
- !!int "25"
- !!int "10"
- !!int "19"
- !!int "2"
- !!int "12"
- !!int "9"
"speed": "50 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "8"
"actions":
- "desc": "The tyrannosaurus makes two attacks: one with its bite and one with its\
    \ tail. It can't make both attacks against the same target."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 10 ft., one\
    \ target. Hit: dice:4d12 + 7|text(33) (4d12 + 7) piercing damage. If the\
    \ target is a Medium or smaller creature, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 17). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and the tyrannosaurus can't bite another target."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 10 ft., one\
    \ target. Hit: dice:3d8 + 7|text(20) (3d8 + 7) bludgeoning damage."
  "name": "Tail"
"source":
- "MM"
- "ToA"
- "EGW"
- "SatO"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/beast/token/tyrannosaurus-rex.webp"
```
^statblock

## Environment

grassland