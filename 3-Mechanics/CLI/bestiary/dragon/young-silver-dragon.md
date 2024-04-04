---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Young Silver Dragon"]
---
# [Young Silver Dragon](3-Mechanics\CLI\bestiary\dragon/young-silver-dragon.md)
*Source: Monster Manual p. 118. Available in the SRD.*  

```statblock
"name": "Young Silver Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "168"
"hit_dice": "16d10 + 80"
"stats":
- !!int "23"
- !!int "10"
- !!int "21"
- !!int "14"
- !!int "11"
- !!int "19"
"speed": "40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "8"
  "History": !!int "6"
  "Arcana": !!int "6"
"damage_immunities": "cold"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 18"
"languages": "Common, Draconic"
"cr": "9"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 10 ft., one\
    \ target. Hit: dice:2d10 + 6|text(17) (2d10 + 6) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 5 ft., one\
    \ target. Hit: dice:2d6 + 6|text(13) (2d6 + 6) slashing damage."
  "name": "Claw"
- "desc": "The dragon uses one of the following breath weapons.\n\n- Cold Breath.\
    \ The dragon exhales an icy blast in a 30-foot cone. Each creature in that area\
    \ must make a DC 17 Constitution saving throw, taking dice:12d8|text(54) (12d8)\
    \ cold damage on a failed save, or half as much damage on a successful one.  \n\
    - Paralyzing Breath. The dragon exhales paralyzing gas in a 30-foot cone.\
    \ Each creature in that area must succeed on a DC 17 Constitution saving throw\
    \ or be [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed) for 1 minute.\
    \ A creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success.  "
  "name": "Breath Weapons (Recharge 5-6)"
"source":
- "MM"
- "SKT"
- "DSotDQ"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/young-silver-dragon.webp"
```
^statblock

## Environment

mountain, urban