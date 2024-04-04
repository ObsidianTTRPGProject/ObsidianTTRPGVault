---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Death Dog"]
---
# [Death Dog](3-Mechanics\CLI\bestiary\monstrosity/death-dog.md)
*Source: Monster Manual p. 321. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Death Dog"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "15"
- !!int "14"
- !!int "14"
- !!int "3"
- !!int "13"
- !!int "6"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": ""
"cr": "1"
"traits":
- "desc": "The dog has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks and on saving throws against being [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
    \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
    \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned),\
    \ or knocked [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)."
  "name": "Two-Headed"
"actions":
- "desc": "The dog makes two bite attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 2|text(5) (1d6 + 2) piercing damage. If the target is\
    \ a creature, it must succeed on a DC 12 Constitution saving throw against disease\
    \ or become [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned) until the\
    \ disease is cured. Every 24 hours that elapse, the creature must repeat the saving\
    \ throw, reducing its hit point maximum by dice:1d10|text(5) (1d10) on a failure.\
    \ This reduction lasts until the disease is cured. The creature dies if the disease\
    \ reduces its hit point maximum to 0."
  "name": "Bite"
"source":
- "MM"
- "SKT"
- "WDH"
- "WDMM"
- "MOT"
- "LoX"
- "AATM"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/death-dog.webp"
```
^statblock

## Environment

desert