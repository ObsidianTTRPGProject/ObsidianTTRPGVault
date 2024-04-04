---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Roc"]
---
# [Roc](3-Mechanics\CLI\bestiary\monstrosity/roc.md)
*Source: Monster Manual p. 260. Available in the SRD.*  

```statblock
"name": "Roc"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "248"
"hit_dice": "16d20 + 80"
"stats":
- !!int "28"
- !!int "10"
- !!int "20"
- !!int "3"
- !!int "10"
- !!int "9"
"speed": "20 ft., fly 120 ft."
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "9"
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "11"
"traits":
- "desc": "The roc has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- "desc": "The roc makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+13 (+13) to hit, reach 10 ft., one\
    \ target. Hit: dice:4d8 + 9|text(27) (4d8 + 9) piercing damage."
  "name": "Beak"
- "desc": "Melee Weapon Attack: dice: d20+13 (+13) to hit, reach 5 ft., one\
    \ target. Hit: dice:4d6 + 9|text(23) (4d6 + 9) slashing damage, and the\
    \ target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) (escape\
    \ DC 19). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and the roc can't use its talons on another target."
  "name": "Talons"
"source":
- "MM"
- "CoS"
- "SKT"
- "GoS"
- "DC"
- "DIP"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "WBtW"
- "SatO"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/roc.webp"
```
^statblock

## Environment

mountain, hill, desert, coastal, arctic