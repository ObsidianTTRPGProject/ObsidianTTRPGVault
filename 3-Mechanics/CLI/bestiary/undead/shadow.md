---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Shadow"]
---
# [Shadow](3-Mechanics\CLI\bestiary\undead/shadow.md)
*Source: Monster Manual p. 269. Available in the SRD.*  

```statblock
"name": "Shadow"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "6"
- !!int "14"
- !!int "13"
- !!int "6"
- !!int "10"
- !!int "8"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "4"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned), [prone](/3-Mechanics/CLI/rules/conditions.md#prone),\
  \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The shadow can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "While in dim light or darkness, the shadow can take the Hide action as\
    \ a bonus action. Its stealth bonus is also improved to +6."
  "name": "Shadow Stealth"
- "desc": "While in sunlight, the shadow has disadvantage on attack rolls, ability\
    \ checks, and saving throws."
  "name": "Sunlight Weakness"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one creature.\
    \ Hit: dice:2d6 + 2|text(9) (2d6 + 2) necrotic damage, and the target's\
    \ Strength score is reduced by dice: 1d4|avg|noform (1d4). The target dies\
    \ if this reduces its Strength to 0. Otherwise, the reduction lasts until the\
    \ target finishes a short or long rest.\n\nIf a non-evil humanoid dies from this\
    \ attack, a new shadow rises from the corpse dice: 1d4|avg|noform (1d4) hours\
    \ later."
  "name": "Strength Drain"
"source":
- "MM"
- "CoS"
- "PotA"
- "TftYP"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "IMR"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "WBtW"
- "SjA"
- "PSI"
- "SatO"
- "BMT"
- "GHLoE"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/undead/token/shadow.webp"
```
^statblock

## Environment

underdark, urban