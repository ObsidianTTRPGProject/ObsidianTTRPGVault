---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Brass Dragon Wyrmling"]
---
# [Brass Dragon Wyrmling](3-Mechanics\CLI\bestiary\dragon/brass-dragon-wyrmling.md)
*Source: Monster Manual p. 106. Available in the SRD.*  

```statblock
"name": "Brass Dragon Wyrmling"
"size": "Medium"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "10"
- !!int "11"
- !!int "13"
"speed": "30 ft., burrow 15 ft., fly 60 ft."
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "2"
  "Wisdom": !!int "2"
  "Constitution": !!int "3"
"skillsaves":
  "Stealth": !!int "2"
  "Perception": !!int "4"
"damage_immunities": "fire"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 14"
"languages": "Draconic"
"cr": "1"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d10 + 2|text(7) (1d10 + 2) piercing damage."
  "name": "Bite"
- "desc": "The dragon uses one of the following breath weapons.\n\n- Fire Breath.\
    \ The dragon exhales fire in a 20-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 11 Dexterity saving throw, taking dice:4d6|text(14)\
    \ (4d6) fire damage on a failed save, or half as much damage on a successful\
    \ one.  \n- Sleep Breath. The dragon exhales sleep gas in a 15-foot cone.\
    \ Each creature in that area must succeed on a DC 11 Constitution saving throw\
    \ or fall [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious) for\
    \ 1 minute. This effect ends for a creature if the creature takes damage or someone\
    \ uses an action to wake it.  "
  "name": "Breath Weapons (Recharge 5-6)"
"source":
- "MM"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/brass-dragon-wyrmling.webp"
```
^statblock