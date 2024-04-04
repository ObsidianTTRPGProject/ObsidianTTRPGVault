---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Boar"]
---
# [Boar](3-Mechanics\CLI\bestiary\beast/boar.md)
*Source: Monster Manual p. 319. Available in the SRD.*  

```statblock
"name": "Boar"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "2"
- !!int "9"
- !!int "5"
"speed": "40 ft."
"senses": "passive Perception 9"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "If the boar moves at least 20 feet straight toward a target and then hits\
    \ it with a tusk attack on the same turn, the target takes an extra dice:1d6|text(3)\
    \ (1d6) slashing damage. If the target is a creature, it must succeed on a DC\
    \ 11 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Charge"
- "desc": "If the boar takes 7 damage or less that would reduce it to 0 hit points,\
    \ it is reduced to 1 hit point instead."
  "name": "Relentless (Recharges after a Short or Long Rest)"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 1|text(4) (1d6 + 1) slashing damage."
  "name": "Tusk"
"source":
- "MM"
- "SKT"
- "ToA"
- "WDMM"
- "DIP"
- "MOT"
- "CM"
- "WBtW"
"image": "/3-Mechanics/CLI/bestiary/beast/token/boar.webp"
```
^statblock

## Environment

grassland, forest, hill