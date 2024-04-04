---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Ogre Zombie"]
---
# [Ogre Zombie](3-Mechanics\CLI\bestiary\undead/ogre-zombie.md)
*Source: Monster Manual p. 316. Available in the SRD.*  

```statblock
"name": "Ogre Zombie"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "8"
"hp": !!int "85"
"hit_dice": "9d10 + 36"
"stats":
- !!int "19"
- !!int "6"
- !!int "18"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands Common and Giant but can't speak"
"cr": "2"
"traits":
- "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 4|text(13) (2d8 + 4) bludgeoning damage."
  "name": "Morningstar"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "DIP"
- "SDW"
- "IDRotF"
- "LoX"
- "PaBTSO"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/undead/token/ogre-zombie.webp"
```
^statblock