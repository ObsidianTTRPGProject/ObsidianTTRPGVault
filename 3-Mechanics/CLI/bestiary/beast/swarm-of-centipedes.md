---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Swarm of Centipedes"]
---
# [Swarm of Centipedes](3-Mechanics\CLI\bestiary\beast/swarm-of-centipedes.md)
*Source: Monster Manual p. 338. Available in the SRD.*  

```statblock
"name": "Swarm of Centipedes"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "3"
- !!int "13"
- !!int "10"
- !!int "1"
- !!int "7"
- !!int "1"
"speed": "20 ft., climb 20 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone), [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
  \ [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)"
"senses": "blindsight 10 ft., passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny insect. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3) to hit, reach 0 ft., one target\
    \ in the swarm's space. Hit: dice:4d4|text(10) (4d4) piercing damage, or\
    \ dice:2d4|text(5) (2d4) piercing damage if the swarm has half of its hit\
    \ points or fewer.\n\nA creature reduced to 0 hit points by a swarm of centipedes\
    \ is stable but [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned) for\
    \ 1 hour, even after regaining hit points, and [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed)\
    \ while [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned) in this way."
  "name": "Bites"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "WDMM"
"image": "/3-Mechanics/CLI/bestiary/beast/token/swarm-of-centipedes.webp"
```
^statblock

## Environment

underdark, grassland, forest, swamp, hill, urban, desert