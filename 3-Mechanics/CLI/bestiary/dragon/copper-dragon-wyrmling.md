---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Copper Dragon Wyrmling"]
---
# [Copper Dragon Wyrmling](3-Mechanics\CLI\bestiary\dragon/copper-dragon-wyrmling.md)
*Source: Monster Manual p. 111. Available in the SRD.*  

```statblock
"name": "Copper Dragon Wyrmling"
"size": "Medium"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "15"
- !!int "12"
- !!int "13"
- !!int "14"
- !!int "11"
- !!int "13"
"speed": "30 ft., climb 30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "3"
  "Wisdom": !!int "2"
  "Constitution": !!int "3"
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
"damage_immunities": "acid"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 14"
"languages": "Draconic"
"cr": "1"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d10 + 2|text(7) (1d10 + 2) piercing damage."
  "name": "Bite"
- "desc": "The dragon uses one of the following breath weapons.\n\n- Acid Breath.\
    \ The dragon exhales acid in a 20-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 11 Dexterity saving throw, taking dice:4d8|text(18)\
    \ (4d8) acid damage on a failed save, or half as much damage on a successful\
    \ one.  \n- Slowing Breath. The dragon exhales gas in a 15-foot cone. Each\
    \ creature in that area must succeed on a DC 11 Constitution saving throw. On\
    \ a failed save, the creature can't use reactions, its speed is halved, and it\
    \ can't make more than one attack on its turn. In addition, the creature can use\
    \ either an action or a bonus action on its turn, but not both. These effects\
    \ last for 1 minute. The creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself with a successful save.  "
  "name": "Breath Weapons (Recharge 5-6)"
"source":
- "MM"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/copper-dragon-wyrmling.webp"
```
^statblock