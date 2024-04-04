---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/ooze
statblock: inline
aliases: ["Black Pudding"]
---
# [Black Pudding](3-Mechanics\CLI\bestiary\ooze/black-pudding.md)
*Source: Monster Manual p. 241. Available in the SRD.*  

```statblock
"name": "Black Pudding"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "7"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"stats":
- !!int "16"
- !!int "5"
- !!int "16"
- !!int "1"
- !!int "6"
- !!int "1"
"speed": "20 ft., climb 20 ft."
"damage_immunities": "acid, cold, lightning, slashing"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "4"
"traits":
- "desc": "The pudding can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "A creature that touches the pudding or hits it with a melee attack while\
    \ within 5 feet of it takes dice:1d8|text(4) (1d8) acid damage. Any nonmagical\
    \ weapon made of metal or wood that hits the pudding corrodes. After dealing damage,\
    \ the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its\
    \ penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of\
    \ metal or wood that hits the pudding is destroyed after dealing damage. The pudding\
    \ can eat through 2-inch-thick, nonmagical wood or metal in 1 round."
  "name": "Corrosive Form"
- "desc": "The pudding can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 3|text(6) (1d6 + 3) bludgeoning damage plus dice:4d8|text(18)\
    \ (4d8) acid damage. In addition, nonmagical armor worn by the target is partly\
    \ dissolved and takes a permanent and cumulative −1 penalty to the AC it offers.\
    \ The armor is destroyed if the penalty reduces its AC to 10."
  "name": "Pseudopod"
"reactions":
- "desc": "When a pudding that is Medium or larger is subjected to lightning or slashing\
    \ damage, it splits into two new puddings if it has at least 10 hit points. Each\
    \ new pudding has hit points equal to half the original pudding's, rounded down.\
    \ New puddings are one size smaller than the original pudding."
  "name": "Split"
"source":
- "MM"
- "CoS"
- "PotA"
- "SKT"
- "TftYP"
- "WDH"
- "WDMM"
- "GoS"
- "IDRotF"
- "CM"
- "JttRC"
- "DSotDQ"
- "KftGV"
- "SatO"
- "ToFW"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/ooze/token/black-pudding.webp"
```
^statblock

## Environment

underdark