---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
aliases: ["Dretch"]
---
# [Dretch](3-Mechanics\CLI\bestiary\fiend/dretch.md)
*Source: Monster Manual p. 57. Available in the SRD.*  

```statblock
"name": "Dretch"
"size": "Small"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "18"
"hit_dice": "4d6 + 4"
"stats":
- !!int "11"
- !!int "11"
- !!int "12"
- !!int "5"
- !!int "8"
- !!int "3"
"speed": "20 ft."
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Abyssal, telepathy 60 ft. (works only with creatures that understand\
  \ Abyssal)"
"cr": "1/4"
"actions":
- "desc": "The dretch makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+2 (+2) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6|text(3) (1d6) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+2 (+2) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d4|text(5) (2d4) slashing damage."
  "name": "Claws"
- "desc": "A 10-foot radius of disgusting green gas extends out from the dretch. The\
    \ gas spreads around corners, and its area is lightly obscured. It lasts for 1\
    \ minute or until a strong wind disperses it. Any creature that starts its turn\
    \ in that area must succeed on a DC 11 Constitution saving throw or be [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ until the start of its next turn. While [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ in this way, the target can take either an action or a bonus action on its turn,\
    \ not both, and can't take reactions."
  "name": "Fetid Cloud (1/Day)"
"source":
- "MM"
- "CoS"
- "GoS"
- "BGDIA"
- "IMR"
- "EGW"
- "WBtW"
- "PSI"
- "SatO"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/dretch.webp"
```
^statblock