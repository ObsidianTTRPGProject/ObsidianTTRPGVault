---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Black Dragon Wyrmling"]
---
# [Black Dragon Wyrmling](3-Mechanics\CLI\bestiary\dragon/black-dragon-wyrmling.md)
*Source: Monster Manual p. 88. Available in the SRD.*  

```statblock
"name": "Black Dragon Wyrmling"
"size": "Medium"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "15"
- !!int "14"
- !!int "13"
- !!int "10"
- !!int "11"
- !!int "13"
"speed": "30 ft., fly 60 ft., swim 30 ft."
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "4"
  "Wisdom": !!int "2"
  "Constitution": !!int "3"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_immunities": "acid"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 14"
"languages": "Draconic"
"cr": "2"
"traits":
- "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d10 + 2|text(7) (1d10 + 2) piercing damage plus dice:1d4|text(2)\
    \ (1d4) acid damage."
  "name": "Bite"
- "desc": "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 11 Dexterity saving throw, taking dice:5d8|text(22)\
    \ (5d8) acid damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Acid Breath (Recharge 5-6)"
"source":
- "MM"
- "TftYP"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/black-dragon-wyrmling.webp"
```
^statblock