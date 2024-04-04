---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Young Black Dragon"]
---
# [Young Black Dragon](3-Mechanics\CLI\bestiary\dragon/young-black-dragon.md)
*Source: Monster Manual p. 88. Available in the SRD.*  

```statblock
"name": "Young Black Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"stats":
- !!int "19"
- !!int "14"
- !!int "17"
- !!int "12"
- !!int "11"
- !!int "15"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "5"
  "Wisdom": !!int "3"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "6"
"damage_immunities": "acid"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 16"
"languages": "Common, Draconic"
"cr": "7"
"traits":
- "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d10 + 4|text(15) (2d10 + 4) piercing damage plus dice:1d8|text(4)\
    \ (1d8) acid damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) slashing damage."
  "name": "Claw"
- "desc": "The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 14 Dexterity saving throw, taking dice:11d8|text(49)\
    \ (11d8) acid damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Acid Breath (Recharge 5-6)"
"source":
- "MM"
- "RoT"
- "TftYP"
- "GoS"
- "BGDIA"
- "LK"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/young-black-dragon.webp"
```
^statblock

## Environment

swamp