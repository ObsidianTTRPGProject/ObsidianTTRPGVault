---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Bronze Dragon Wyrmling"]
---
# [Bronze Dragon Wyrmling](3-Mechanics\CLI\bestiary\dragon/bronze-dragon-wyrmling.md)
*Source: Monster Manual p. 109. Available in the SRD.*  

```statblock
"name": "Bronze Dragon Wyrmling"
"size": "Medium"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"stats":
- !!int "17"
- !!int "10"
- !!int "15"
- !!int "12"
- !!int "11"
- !!int "15"
"speed": "30 ft., fly 60 ft., swim 30 ft."
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
"cr": "2"
"traits":
- "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d10 + 3|text(8) (1d10 + 3) piercing damage."
  "name": "Bite"
- "desc": "The dragon uses one of the following breath weapons.\n\n- Lightning Breath.\
    \ The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 12 Dexterity saving throw, taking dice:3d10|text(16)\
    \ (3d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one.  \n- Repulsion Breath. The dragon exhales repulsion energy in a 30-foot\
    \ cone. Each creature in that area must succeed on a DC 12 Strength saving throw.\
    \ On a failed save, the creature is pushed 30 feet away from the dragon.  "
  "name": "Breath Weapons (Recharge 5-6)"
"source":
- "MM"
- "DoSI"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/bronze-dragon-wyrmling.webp"
```
^statblock