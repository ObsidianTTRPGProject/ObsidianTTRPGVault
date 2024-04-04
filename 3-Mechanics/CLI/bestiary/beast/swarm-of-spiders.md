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
aliases: ["Swarm of Spiders"]
---
# [Swarm of Spiders](3-Mechanics\CLI\bestiary\beast/swarm-of-spiders.md)
*Source: Monster Manual p. 338. Available in the SRD.*  

```statblock
"name": "Swarm of Spiders"
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
- "desc": "The swarm can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "While in contact with a web, the swarm knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- "desc": "The swarm ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3) to hit, reach 0 ft., one target\
    \ in the swarm's space. Hit: dice:4d4|text(10) (4d4) piercing damage, or\
    \ dice:2d4|text(5) (2d4) piercing damage if the swarm has half of its hit\
    \ points or fewer."
  "name": "Bites"
"source":
- "MM"
- "CoS"
- "SKT"
- "WDMM"
- "GoS"
- "DC"
- "DIP"
- "MOT"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/beast/token/swarm-of-spiders.webp"
```
^statblock

## Environment

underdark, grassland, forest, swamp, hill, urban, desert