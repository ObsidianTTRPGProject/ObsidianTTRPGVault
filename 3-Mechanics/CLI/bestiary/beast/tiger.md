---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Tiger"]
---
# [Tiger](3-Mechanics\CLI\bestiary\beast/tiger.md)
*Source: Monster Manual p. 339. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Tiger"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "37"
"hit_dice": "5d10 + 10"
"stats":
- !!int "17"
- !!int "15"
- !!int "14"
- !!int "3"
- !!int "12"
- !!int "8"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- "desc": "The tiger has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "If the tiger moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 13 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ If the target is [prone](/3-Mechanics/CLI/rules/conditions.md#prone), the tiger\
    \ can make one bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d10 + 3|text(8) (1d10 + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 3|text(7) (1d8 + 3) slashing damage."
  "name": "Claw"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDH"
- "GoS"
- "MOT"
"image": "/3-Mechanics/CLI/bestiary/beast/token/tiger.webp"
```
^statblock

## Environment

grassland, forest