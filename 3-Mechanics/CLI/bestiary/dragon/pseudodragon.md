---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Pseudodragon"]
---
# [Pseudodragon](3-Mechanics\CLI\bestiary\dragon/pseudodragon.md)
*Source: Monster Manual p. 254. Available in the SRD.*  

```statblock
"name": "Pseudodragon"
"size": "Tiny"
"type": "dragon"
"alignment": "Neutral Good"
"ac": !!int "13"
"hp": !!int "7"
"hit_dice": "2d4 + 2"
"stats":
- !!int "6"
- !!int "15"
- !!int "13"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "15 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 13"
"languages": "understands Common and Draconic but can't speak"
"cr": "1/4"
"traits":
- "desc": "The pseudodragon has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight, hearing, or smell."
  "name": "Keen Senses"
- "desc": "The pseudodragon has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The pseudodragon can magically communicate simple ideas, emotions, and\
    \ images telepathically with any creature within 100 feet of it that can understand\
    \ a language."
  "name": "Limited Telepathy"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d4 + 2|text(4) (1d4 + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one creature.\
    \ Hit: dice:1d4 + 2|text(4) (1d4 + 2) piercing damage, and the target must\
    \ succeed on a DC 11 Constitution saving throw or become [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ for 1 hour. If the saving throw fails by 5 or more, the target falls [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)\
    \ for the same duration, or until it takes damage or another creature uses an\
    \ action to shake it awake."
  "name": "Sting"
"source":
- "MM"
- "RoT"
- "ToA"
- "WDMM"
- "GoS"
- "ERLW"
- "IMR"
- "EGW"
- "IDRotF"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/pseudodragon.webp"
```
^statblock

## Environment

mountain, forest, hill, urban, desert, coastal