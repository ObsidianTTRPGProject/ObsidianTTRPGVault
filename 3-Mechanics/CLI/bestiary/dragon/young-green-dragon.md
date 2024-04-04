---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Young Green Dragon"]
---
# [Young Green Dragon](3-Mechanics\CLI\bestiary\dragon/young-green-dragon.md)
*Source: Monster Manual p. 94. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Young Green Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "19"
- !!int "12"
- !!int "17"
- !!int "16"
- !!int "13"
- !!int "15"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Perception": !!int "7"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 17"
"languages": "Common, Draconic"
"cr": "8"
"traits":
- "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d10 + 4|text(15) (2d10 + 4) piercing damage plus dice:2d6|text(7)\
    \ (2d6) poison damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) slashing damage."
  "name": "Claw"
- "desc": "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that\
    \ area must make a DC 14 Constitution saving throw, taking dice:12d6|text(42)\
    \ (12d6) poison damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Poison Breath (Recharge 5-6)"
"source":
- "MM"
- "RoT"
- "SKT"
- "WDMM"
- "BGDIA"
- "RMBRE"
- "HftT"
- "PaBTSO"
- "LK"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/young-green-dragon.webp"
```
^statblock

## Environment

forest