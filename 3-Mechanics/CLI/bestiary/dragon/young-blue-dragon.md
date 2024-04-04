---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Young Blue Dragon"]
---
# [Young Blue Dragon](3-Mechanics\CLI\bestiary\dragon/young-blue-dragon.md)
*Source: Monster Manual p. 91. Available in the SRD.*  

```statblock
"name": "Young Blue Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "152"
"hit_dice": "16d10 + 64"
"stats":
- !!int "21"
- !!int "10"
- !!int "19"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "40 ft., burrow 20 ft., fly 80 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "4"
  "Wisdom": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "9"
"damage_immunities": "lightning"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 19"
"languages": "Common, Draconic"
"cr": "9"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d10 + 5|text(16) (2d10 + 5) piercing damage plus dice:1d10|text(5)\
    \ (1d10) lightning damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 5|text(12) (2d6 + 5) slashing damage."
  "name": "Claw"
- "desc": "The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each\
    \ creature in that line must make a DC 16 Dexterity saving throw, taking dice:10d10|text(55)\
    \ (10d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Breath (Recharge 5-6)"
"source":
- "MM"
- "CoS"
- "RoT"
- "WDMM"
- "BGDIA"
- "MOT"
- "DSotDQ"
- "LK"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/young-blue-dragon.webp"
```
^statblock

## Environment

desert, coastal