---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Reef Shark"]
---
# [Reef Shark](3-Mechanics\CLI\bestiary\beast/reef-shark.md)
*Source: Monster Manual p. 336. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Reef Shark"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "14"
- !!int "13"
- !!int "13"
- !!int "1"
- !!int "10"
- !!int "4"
"speed": "swim 40 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "blindsight 30 ft., passive Perception 12"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The shark has advantage on an attack roll against a creature if at least\
    \ one of the shark's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- "desc": "The shark can breathe only underwater."
  "name": "Water Breathing"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 2|text(6) (1d8 + 2) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "ToA"
- "GoS"
- "EGW"
- "CRCotN"
- "JttRC"
"image": "/3-Mechanics/CLI/bestiary/beast/token/reef-shark.webp"
```
^statblock

## Environment

underwater