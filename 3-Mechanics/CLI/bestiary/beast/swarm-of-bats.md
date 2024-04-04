---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Swarm of Bats"]
---
# [Swarm of Bats](3-Mechanics\CLI\bestiary\beast/swarm-of-bats.md)
*Source: Monster Manual p. 337. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Swarm of Bats"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "5"
- !!int "15"
- !!int "10"
- !!int "2"
- !!int "12"
- !!int "4"
"speed": "0 ft., fly 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone), [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
  \ [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)"
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The swarm can't use its blindsight while [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened)."
  "name": "Echolocation"
- "desc": "The swarm has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny bat. The swarm can't regain\
    \ hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 0 ft., one creature\
    \ in the swarm's space. Hit: dice:2d4|text(5) (2d4) piercing damage, or\
    \ dice:1d4|text(2) (1d4) piercing damage if the swarm has half of its hit\
    \ points or fewer."
  "name": "Bites"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "TftYP"
- "ToA"
- "WDMM"
- "EGW"
- "CM"
- "WBtW"
- "AATM"
"image": "/3-Mechanics/CLI/bestiary/beast/token/swarm-of-bats.webp"
```
^statblock

## Environment

underdark, mountain, hill, urban