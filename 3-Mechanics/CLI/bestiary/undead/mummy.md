---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Mummy"]
---
# [Mummy](3-Mechanics\CLI\bestiary\undead/mummy.md)
*Source: Monster Manual p. 228. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Mummy"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "16"
- !!int "8"
- !!int "15"
- !!int "6"
- !!int "10"
- !!int "12"
"speed": "20 ft."
"saves":
  "Wisdom": !!int "2"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "the languages it knew in life"
"cr": "3"
"actions":
- "desc": "The mummy can use its Dreadful Glare and makes one attack with its rotting\
    \ fist."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 3|text(10) (2d6 + 3) bludgeoning damage plus dice:3d6|text(10)\
    \ (3d6) necrotic damage. If the target is a creature, it must succeed on a DC\
    \ 12 Constitution saving throw or be cursed with mummy rot. The cursed target\
    \ can't regain hit points, and its hit point maximum decreases by dice:3d6|text(10)\
    \ (3d6) for every 24 hours that elapse. If the curse reduces the target's hit\
    \ point maximum to 0, the target dies, and its body turns to dust. The curse lasts\
    \ until removed by the [remove curse](/3-Mechanics/CLI/spells/remove-curse.md)\
    \ spell or other magic."
  "name": "Rotting Fist"
- "desc": "The mummy targets one creature it can see within 60 feet of it. If the\
    \ target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against\
    \ this magic or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ until the end of the mummy's next turn. If the target fails the saving throw\
    \ by 5 or more, it is also [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed)\
    \ for the same duration. A target that succeeds on the saving throw is immune\
    \ to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours."
  "name": "Dreadful Glare"
"source":
- "MM"
- "RoT"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "IDRotF"
- "TCE"
- "CM"
- "DSotDQ"
- "PSI"
- "PaBTSO"
- "AATM"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/undead/token/mummy.webp"
```
^statblock

## Environment

desert