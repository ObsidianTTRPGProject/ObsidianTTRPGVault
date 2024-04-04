---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/kobold
statblock: inline
aliases: ["Kobold"]
---
# [Kobold](3-Mechanics\CLI\bestiary\humanoid/kobold.md)
*Source: Monster Manual p. 195. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Kobold"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "5"
"hit_dice": "2d6 - 2"
"stats":
- !!int "7"
- !!int "15"
- !!int "9"
- !!int "8"
- !!int "7"
- !!int "8"
"speed": "30 ft."
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common, Draconic"
"cr": "1/8"
"traits":
- "desc": "While in sunlight, the kobold has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception)) checks\
    \ that rely on sight."
  "name": "Sunlight Sensitivity"
- "desc": "The kobold has advantage on an attack roll against a creature if at least\
    \ one of the kobold's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d4 + 2|text(4) (1d4 + 2) piercing damage."
  "name": "Dagger"
- "desc": "Ranged Weapon Attack: dice: d20+4 (+4) to hit, range 30/120 ft.,\
    \ one target. Hit: dice:1d4 + 2|text(4) (1d4 + 2) bludgeoning damage."
  "name": "Sling"
"source":
- "MM"
- "HotDQ"
- "RoT"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "ERLW"
- "EGW"
- "DoSI"
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/kobold.webp"
```
^statblock

## Environment

forest, swamp, hill, urban, desert, coastal, arctic, mountain, underdark