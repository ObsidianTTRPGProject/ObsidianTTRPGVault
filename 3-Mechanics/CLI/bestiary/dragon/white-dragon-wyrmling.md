---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["White Dragon Wyrmling"]
---
# [White Dragon Wyrmling](3-Mechanics\CLI\bestiary\dragon/white-dragon-wyrmling.md)
*Source: Monster Manual p. 102. Available in the SRD.*  

```statblock
"name": "White Dragon Wyrmling"
"size": "Medium"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"stats":
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "5"
- !!int "10"
- !!int "11"
"speed": "30 ft., burrow 15 ft., fly 60 ft., swim 30 ft."
"saves":
  "Charisma": !!int "2"
  "Dexterity": !!int "2"
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "2"
  "Perception": !!int "4"
"damage_immunities": "cold"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 14"
"languages": "Draconic"
"cr": "2"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d10 + 2|text(7) (1d10 + 2) piercing damage plus dice:1d4|text(2)\
    \ (1d4) cold damage."
  "name": "Bite"
- "desc": "The dragon exhales an icy blast of hail in a 15-foot cone. Each creature\
    \ in that area must make a DC 12 Constitution saving throw, taking dice:5d8|text(22)\
    \ (5d8) cold damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Cold Breath (Recharge 5-6)"
"source":
- "MM"
- "SKT"
- "EGW"
- "IDRotF"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/white-dragon-wyrmling.webp"
```
^statblock