---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Minotaur Skeleton"]
---
# [Minotaur Skeleton](3-Mechanics\CLI\bestiary\undead/minotaur-skeleton.md)
*Source: Monster Manual p. 273. Available in the SRD.*  

```statblock
"name": "Minotaur Skeleton"
"size": "Large"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "67"
"hit_dice": "9d10 + 18"
"stats":
- !!int "18"
- !!int "11"
- !!int "15"
- !!int "6"
- !!int "8"
- !!int "5"
"speed": "40 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Abyssal but can't speak"
"cr": "2"
"traits":
- "desc": "If the skeleton moves at least 10 feet straight toward a target and then\
    \ hits it with a gore attack on the same turn, the target takes an extra dice:2d8|text(9)\
    \ (2d8) piercing damage. If the target is a creature, it must succeed on a DC\
    \ 14 Strength saving throw or be pushed up to 10 feet away and knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Charge"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d12 + 4|text(17) (2d12 + 4) slashing damage."
  "name": "Greataxe"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 4|text(13) (2d8 + 4) piercing damage."
  "name": "Gore"
"source":
- "MM"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DIP"
- "SDW"
- "BGDIA"
- "IMR"
- "DSotDQ"
- "KftGV"
- "AATM"
"image": "/3-Mechanics/CLI/bestiary/undead/token/minotaur-skeleton.webp"
```
^statblock

## Environment

underdark