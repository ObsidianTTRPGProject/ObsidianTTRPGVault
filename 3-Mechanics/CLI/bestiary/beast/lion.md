---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Lion"]
---
# [Lion](3-Mechanics\CLI\bestiary\beast/lion.md)
*Source: Monster Manual p. 331. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Lion"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"stats":
- !!int "17"
- !!int "15"
- !!int "13"
- !!int "3"
- !!int "12"
- !!int "8"
"speed": "50 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- "desc": "The lion has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The lion has advantage on an attack roll against a creature if at least\
    \ one of the lion's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- "desc": "If the lion moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 13 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ If the target is [prone](/3-Mechanics/CLI/rules/conditions.md#prone), the lion\
    \ can make one bite attack against it as a bonus action."
  "name": "Pounce"
- "desc": "With a 10-foot running start, the lion can long jump up to 25 feet."
  "name": "Running Leap"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 3|text(7) (1d8 + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 3|text(6) (1d6 + 3) slashing damage."
  "name": "Claw"
"source":
- "MM"
- "TftYP"
- "ToA"
- "KftGV"
"image": "/3-Mechanics/CLI/bestiary/beast/token/lion.webp"
```
^statblock

## Environment

mountain, grassland, hill, desert