---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Triceratops"]
---
# [Triceratops](3-Mechanics\CLI\bestiary\beast/triceratops.md)
*Source: Monster Manual p. 80. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Triceratops"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "95"
"hit_dice": "10d12 + 30"
"stats":
- !!int "22"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "11"
- !!int "5"
"speed": "50 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- "desc": "If the triceratops moves at least 20 feet straight toward a creature and\
    \ then hits it with a gore attack on the same turn, that target must succeed on\
    \ a DC 13 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ If the target is [prone](/3-Mechanics/CLI/rules/conditions.md#prone), the triceratops\
    \ can make one stomp attack against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 5 ft., one target.\
    \ Hit: dice:4d8 + 6|text(24) (4d8 + 6) piercing damage."
  "name": "Gore"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 5 ft., one [prone](/3-Mechanics/CLI/rules/conditions.md#prone)\
    \ creature. Hit: dice:3d10 + 6|text(22) (3d10 + 6) bludgeoning damage"
  "name": "Stomp"
"source":
- "MM"
- "ToA"
- "ToFW"
"image": "/3-Mechanics/CLI/bestiary/beast/token/triceratops.webp"
```
^statblock

## Environment

grassland