---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Young Brass Dragon"]
---
# [Young Brass Dragon](3-Mechanics\CLI\bestiary\dragon/young-brass-dragon.md)
*Source: Monster Manual p. 105. Available in the SRD.*  

```statblock
"name": "Young Brass Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"stats":
- !!int "19"
- !!int "10"
- !!int "17"
- !!int "12"
- !!int "11"
- !!int "15"
"speed": "40 ft., burrow 20 ft., fly 80 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "3"
  "Wisdom": !!int "3"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "6"
  "Persuasion": !!int "5"
"damage_immunities": "fire"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 16"
"languages": "Common, Draconic"
"cr": "6"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d10 + 4|text(15) (2d10 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) slashing damage."
  "name": "Claw"
- "desc": "The dragon uses one of the following breath weapons.\n\n- Fire Breath.\
    \ The dragon exhales fire in a 40-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 14 Dexterity saving throw, taking dice:12d6|text(42)\
    \ (12d6) fire damage on a failed save, or half as much damage on a successful\
    \ one.  \n- Sleep Breath. The dragon exhales sleep gas in a 30-foot cone.\
    \ Each creature in that area must succeed on a DC 14 Constitution saving throw\
    \ or fall [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious) for\
    \ 5 minutes. This effect ends for a creature if the creature takes damage or someone\
    \ uses an action to wake it.  "
  "name": "Breath Weapons (Recharge 5-6)"
"source":
- "MM"
- "SKT"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/young-brass-dragon.webp"
```
^statblock

## Environment

desert