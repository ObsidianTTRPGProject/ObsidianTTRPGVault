---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/grimlock
statblock: inline
aliases: ["Grimlock"]
---
# [Grimlock](3-Mechanics\CLI\bestiary\humanoid/grimlock.md)
*Source: Monster Manual p. 175. Available in the SRD.*  

```statblock
"name": "Grimlock"
"size": "Medium"
"type": "humanoid"
"subtype": "grimlock"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "16"
- !!int "12"
- !!int "12"
- !!int "9"
- !!int "8"
- !!int "6"
"speed": "30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Stealth": !!int "3"
  "Perception": !!int "3"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)"
"senses": "blindsight 30 ft. or 10 ft. while deafened (blind beyond this radius),\
  \ passive Perception 13"
"languages": "Undercommon"
"cr": "1/4"
"traits":
- "desc": "The grimlock can't use its blindsight while [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened)\
    \ and unable to smell."
  "name": "Blind Senses"
- "desc": "The grimlock has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- "desc": "The grimlock has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth))\
    \ checks made to hide in rocky terrain."
  "name": "Stone Camouflage"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d4 + 3|text(5) (1d4 + 3) bludgeoning damage plus dice:1d4|text(2)\
    \ (1d4) piercing damage."
  "name": "Spiked Bone Club"
"source":
- "MM"
- "WDMM"
- "PaBTSO"
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/grimlock.webp"
```
^statblock

## Environment

underdark