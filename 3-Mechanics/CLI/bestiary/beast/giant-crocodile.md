---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Giant Crocodile"]
---
# [Giant Crocodile](3-Mechanics\CLI\bestiary\beast/giant-crocodile.md)
*Source: Monster Manual p. 324. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Giant Crocodile"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "9d12 + 27"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "30 ft., swim 50 ft."
"skillsaves":
  "Stealth": !!int "5"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- "desc": "The crocodile can hold its breath for 30 minutes."
  "name": "Hold Breath"
"actions":
- "desc": "The crocodile makes two attacks: one with its bite and one with its tail."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8) to hit, reach 5 ft., one target.\
    \ Hit: dice:3d10 + 5|text(21) (3d10 + 5) piercing damage, and the target\
    \ is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) (escape DC 16).\
    \ Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and the crocodile can't bite another target."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8) to hit, reach 10 ft., one target\
    \ not [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) by the crocodile.\
    \ Hit: dice:2d8 + 5|text(14) (2d8 + 5) bludgeoning damage. If the target\
    \ is a creature, it must succeed on a DC 16 Strength saving throw or be knocked\
    \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Tail"
"source":
- "MM"
- "PotA"
- "ToA"
- "DIP"
- "SLW"
- "JttRC"
- "ToFW"
- "GHLoE"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/beast/token/giant-crocodile.webp"
```
^statblock

## Environment

swamp