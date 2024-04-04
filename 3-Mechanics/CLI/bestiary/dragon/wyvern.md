---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Wyvern"]
---
# [Wyvern](3-Mechanics\CLI\bestiary\dragon/wyvern.md)
*Source: Monster Manual p. 303. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Wyvern"
"size": "Large"
"type": "dragon"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"stats":
- !!int "19"
- !!int "10"
- !!int "16"
- !!int "5"
- !!int "12"
- !!int "6"
"speed": "20 ft., fly 80 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "6"
"actions":
- "desc": "The wyvern makes two attacks: one with its bite and one with its stinger.\
    \ While flying, it can use its claws in place of one other attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 10 ft., one creature.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 4|text(13) (2d8 + 4) slashing damage."
  "name": "Claws"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 10 ft., one creature.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) piercing damage. The target must\
    \ make a DC 15 Constitution saving throw, taking dice:7d6|text(24) (7d6) poison\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Stinger"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "SKT"
- "WDMM"
- "DIP"
- "SLW"
- "BGDIA"
- "CM"
- "JttRC"
- "ToFW"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/wyvern.webp"
```
^statblock

## Environment

mountain, hill