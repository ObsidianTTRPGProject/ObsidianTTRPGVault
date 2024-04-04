---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Blue Dragon Wyrmling"]
---
# [Blue Dragon Wyrmling](3-Mechanics\CLI\bestiary\dragon/blue-dragon-wyrmling.md)
*Source: Monster Manual p. 91. Available in the SRD.*  

```statblock
"name": "Blue Dragon Wyrmling"
"size": "Medium"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "17"
- !!int "10"
- !!int "15"
- !!int "12"
- !!int "11"
- !!int "15"
"speed": "30 ft., burrow 15 ft., fly 60 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "2"
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "2"
  "Perception": !!int "4"
"damage_immunities": "lightning"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 14"
"languages": "Draconic"
"cr": "3"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d10 + 3|text(8) (1d10 + 3) piercing damage plus dice:1d6|text(3)\
    \ (1d6) lightning damage."
  "name": "Bite"
- "desc": "The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each\
    \ creature in that line must make a DC 12 Dexterity saving throw, taking dice:4d10|text(22)\
    \ (4d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Breath (Recharge 5-6)"
"source":
- "MM"
- "MOT"
- "DoSI"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/blue-dragon-wyrmling.webp"
```
^statblock