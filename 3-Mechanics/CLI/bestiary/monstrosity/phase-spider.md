---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Phase Spider"]
---
# [Phase Spider](3-Mechanics\CLI\bestiary\monstrosity/phase-spider.md)
*Source: Monster Manual p. 334. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Phase Spider"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "32"
"hit_dice": "5d10 + 5"
"stats":
- !!int "15"
- !!int "15"
- !!int "12"
- !!int "6"
- !!int "10"
- !!int "6"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "6"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "3"
"traits":
- "desc": "As a bonus action, the spider can magically shift from the Material Plane\
    \ to the Ethereal Plane, or vice versa."
  "name": "Ethereal Jaunt"
- "desc": "The spider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "The spider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one creature.\
    \ Hit: dice:1d10 + 2|text(7) (1d10 + 2) piercing damage, and the target\
    \ must make a DC 11 Constitution saving throw, taking dice:4d8|text(18) (4d8)\
    \ poison damage on a failed save, or half as much damage on a successful one.\
    \ If the poison damage reduces the target to 0 hit points, the target is stable\
    \ but [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned) for 1 hour, even\
    \ after regaining hit points, and is [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed)\
    \ while [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned) in this way."
  "name": "Bite"
"source":
- "MM"
- "WDMM"
- "GoS"
- "DIP"
- "SDW"
- "MOT"
- "IDRotF"
- "PaBTSO"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/phase-spider.webp"
```
^statblock

## Environment

underdark, grassland, forest, hill, urban, desert