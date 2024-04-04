---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Giant Boar"]
---
# [Giant Boar](3-Mechanics\CLI\bestiary\beast/giant-boar.md)
*Source: Monster Manual p. 323. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Giant Boar"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "42"
"hit_dice": "5d10 + 15"
"stats":
- !!int "17"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "7"
- !!int "5"
"speed": "40 ft."
"senses": "passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- "desc": "If the boar moves at least 20 feet straight toward a target and then hits\
    \ it with a tusk attack on the same turn, the target takes an extra dice:2d6|text(7)\
    \ (2d6) slashing damage. If the target is a creature, it must succeed on a DC\
    \ 13 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Charge"
- "desc": "If the boar takes 10 damage or less that would reduce it to 0 hit points,\
    \ it is reduced to 1 hit point instead."
  "name": "Relentless (Recharges after a Short or Long Rest)"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 3|text(10) (2d6 + 3) slashing damage."
  "name": "Tusk"
"source":
- "MM"
- "SKT"
- "ToA"
- "GoS"
- "MOT"
- "PSI"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/beast/token/giant-boar.webp"
```
^statblock

## Environment

grassland, forest, hill