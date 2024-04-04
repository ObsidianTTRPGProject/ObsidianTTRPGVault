---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/ooze
statblock: inline
aliases: ["Gelatinous Cube"]
---
# [Gelatinous Cube](3-Mechanics\CLI\bestiary\ooze/gelatinous-cube.md)
*Source: Monster Manual p. 242. Available in the SRD.*  

```statblock
"name": "Gelatinous Cube"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "6"
"hp": !!int "84"
"hit_dice": "8d10 + 40"
"stats":
- !!int "14"
- !!int "3"
- !!int "20"
- !!int "1"
- !!int "6"
- !!int "1"
"speed": "15 ft."
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- "desc": "The cube takes up its entire space. Other creatures can enter the space,\
    \ but a creature that does so is subjected to the cube's Engulf and has disadvantage\
    \ on the saving throw.\n\nCreatures inside the cube can be seen but have total\
    \ cover.\n\nA creature within 5 feet of the cube can take an action to pull a\
    \ creature or object out of the cube. Doing so requires a successful DC 12 Strength\
    \ check, and the creature making the attempt takes dice:3d6|text(10) (3d6)\
    \ acid damage.\n\nThe cube can hold only one Large creature or up to four Medium\
    \ or smaller creatures inside it at a time."
  "name": "Ooze Cube"
- "desc": "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom\
    \ ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception)) check to spot a\
    \ cube that has neither moved nor attacked. A creature that tries to enter the\
    \ cube's space while unaware of the cube is surprised by the cube."
  "name": "Transparent"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one creature.\
    \ Hit: dice:3d6|text(10) (3d6) acid damage."
  "name": "Pseudopod"
- "desc": "The cube moves up to its speed. While doing so, it can enter Large or smaller\
    \ creatures' spaces. Whenever the cube enters a creature's space, the creature\
    \ must make a DC 12 Dexterity saving throw.\n\nOn a successful save, the creature\
    \ can choose to be pushed 5 feet back or to the side of the cube. A creature that\
    \ chooses not to be pushed suffers the consequences of a failed saving throw.\n\
    \nOn a failed save, the cube enters the creature's space, and the creature takes\
    \ dice:3d6|text(10) (3d6) acid damage and is engulfed. The engulfed creature\
    \ can't breathe, is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and takes dice:6d6|text(21) (6d6) acid damage at the start of each of the\
    \ cube's turns. When the cube moves, the engulfed creature moves with it.\n\n\
    An engulfed creature can try to escape by taking an action to make a DC 12 Strength\
    \ check. On a success, the creature escapes and enters a space of its choice within\
    \ 5 feet of the cube."
  "name": "Engulf"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "ERLW"
- "IDRotF"
- "WBtW"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/ooze/token/gelatinous-cube.webp"
```
^statblock

## Environment

underdark