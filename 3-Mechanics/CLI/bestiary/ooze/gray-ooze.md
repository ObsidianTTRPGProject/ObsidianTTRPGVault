---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/ooze
statblock: inline
aliases: ["Gray Ooze"]
---
# [Gray Ooze](3-Mechanics\CLI\bestiary\ooze/gray-ooze.md)
*Source: Monster Manual p. 243. Available in the SRD.*  

```statblock
"name": "Gray Ooze"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"stats":
- !!int "12"
- !!int "6"
- !!int "16"
- !!int "1"
- !!int "6"
- !!int "2"
"speed": "10 ft., climb 10 ft."
"skillsaves":
  "Stealth": !!int "2"
"damage_resistances": "acid, cold, fire"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "Any nonmagical weapon made of metal that hits the ooze corrodes. After\
    \ dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage\
    \ rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition\
    \ made of metal that hits the ooze is destroyed after dealing damage.\n\nThe ooze\
    \ can eat through 2-inch-thick, nonmagical metal in 1 round."
  "name": "Corrode Metal"
- "desc": "While the ooze remains motionless, it is indistinguishable from an oily\
    \ pool or wet rock."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 1|text(4) (1d6 + 1) bludgeoning damage plus dice:2d6|text(7)\
    \ (2d6) acid damage, and if the target is wearing nonmagical metal armor, its\
    \ armor is partly corroded and takes a permanent and cumulative −1 penalty to\
    \ the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."
  "name": "Pseudopod"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "TftYP"
- "WDH"
- "GoS"
- "KftGV"
- "PaBTSO"
"image": "/3-Mechanics/CLI/bestiary/ooze/token/gray-ooze.webp"
```
^statblock

## Environment

underdark