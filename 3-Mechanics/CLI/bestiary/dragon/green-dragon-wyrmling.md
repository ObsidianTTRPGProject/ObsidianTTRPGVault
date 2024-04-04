---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Green Dragon Wyrmling"]
---
# [Green Dragon Wyrmling](3-Mechanics\CLI\bestiary\dragon/green-dragon-wyrmling.md)
*Source: Monster Manual p. 95. Available in the SRD.*  

```statblock
"name": "Green Dragon Wyrmling"
"size": "Medium"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"stats":
- !!int "15"
- !!int "12"
- !!int "13"
- !!int "14"
- !!int "11"
- !!int "13"
"speed": "30 ft., fly 60 ft., swim 30 ft."
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "3"
  "Wisdom": !!int "2"
  "Constitution": !!int "3"
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 14"
"languages": "Draconic"
"cr": "2"
"traits":
- "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d10 + 2|text(7) (1d10 + 2) piercing damage plus dice:1d6|text(3)\
    \ (1d6) poison damage."
  "name": "Bite"
- "desc": "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that\
    \ area must make a DC 11 Constitution saving throw, taking dice:6d6|text(21)\
    \ (6d6) poison damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Poison Breath (Recharge 5-6)"
"source":
- "MM"
- "WBtW"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/green-dragon-wyrmling.webp"
```
^statblock