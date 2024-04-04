---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant
statblock: inline
aliases: ["Stone Giant"]
---
# [Stone Giant](3-Mechanics\CLI\bestiary\giant/stone-giant.md)
*Source: Monster Manual p. 156. Available in the SRD.*  

```statblock
"name": "Stone Giant"
"size": "Huge"
"type": "giant"
"alignment": "Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "23"
- !!int "15"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "40 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "12"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Giant"
"cr": "7"
"traits":
- "desc": "The giant has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth))\
    \ checks made to hide in rocky terrain."
  "name": "Stone Camouflage"
"actions":
- "desc": "The giant makes two greatclub attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 15 ft., one target.\
    \ Hit: dice:3d8 + 6|text(19) (3d8 + 6) bludgeoning damage."
  "name": "Greatclub"
- "desc": "Ranged Weapon Attack: dice: d20+9 (+9) to hit, range 60/240 ft.,\
    \ one target. Hit: dice:4d10 + 6|text(28) (4d10 + 6) bludgeoning damage.\
    \ If the target is a creature, it must succeed on a DC 17 Strength saving throw\
    \ or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Rock"
"reactions":
- "desc": "If a rock or similar object is hurled at the giant, the giant can, with\
    \ a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning\
    \ damage from it."
  "name": "Rock Catching"
"source":
- "MM"
- "HotDQ"
- "SKT"
- "TftYP"
- "WDMM"
- "MOT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/giant/token/stone-giant.webp"
```
^statblock

## Environment

underdark, mountain, hill