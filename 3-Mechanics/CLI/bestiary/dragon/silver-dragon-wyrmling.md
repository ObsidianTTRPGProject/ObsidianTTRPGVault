---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Silver Dragon Wyrmling"]
---
# [Silver Dragon Wyrmling](3-Mechanics\CLI\bestiary\dragon/silver-dragon-wyrmling.md)
*Source: Monster Manual p. 118. Available in the SRD.*  

```statblock
"name": "Silver Dragon Wyrmling"
"size": "Medium"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "19"
- !!int "10"
- !!int "17"
- !!int "12"
- !!int "11"
- !!int "15"
"speed": "30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "2"
  "Wisdom": !!int "2"
  "Constitution": !!int "5"
"skillsaves":
  "Stealth": !!int "2"
  "Perception": !!int "4"
"damage_immunities": "cold"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 14"
"languages": "Draconic"
"cr": "2"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d10 + 4|text(9) (1d10 + 4) piercing damage."
  "name": "Bite"
- "desc": "The dragon uses one of the following breath weapons.\n\n- Cold Breath.\
    \ The dragon exhales an icy blast in a 15-foot cone. Each creature in that area\
    \ must make a DC 13 Constitution saving throw, taking dice:4d8|text(18) (4d8)\
    \ cold damage on a failed save, or half as much damage on a successful one.  \n\
    - Paralyzing Breath. The dragon exhales paralyzing gas in a 15-foot cone.\
    \ Each creature in that area must succeed on a DC 13 Constitution saving throw\
    \ or be [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed) for 1 minute.\
    \ A creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success.  "
  "name": "Breath Weapons (Recharge 5-6)"
"source":
- "MM"
- "SKT"
- "IDRotF"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/silver-dragon-wyrmling.webp"
```
^statblock