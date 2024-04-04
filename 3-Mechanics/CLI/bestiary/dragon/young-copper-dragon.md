---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Young Copper Dragon"]
---
# [Young Copper Dragon](3-Mechanics\CLI\bestiary\dragon/young-copper-dragon.md)
*Source: Monster Manual p. 112. Available in the SRD.*  

```statblock
"name": "Young Copper Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "119"
"hit_dice": "14d10 + 42"
"stats":
- !!int "19"
- !!int "12"
- !!int "17"
- !!int "16"
- !!int "13"
- !!int "15"
"speed": "40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Perception": !!int "7"
"damage_immunities": "acid"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 17"
"languages": "Common, Draconic"
"cr": "7"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d10 + 4|text(15) (2d10 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) slashing damage."
  "name": "Claw"
- "desc": "The dragon uses one of the following breath weapons.\n\n- Acid Breath.\
    \ The dragon exhales acid in a 40-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 14 Dexterity saving throw, taking dice:9d8|text(40)\
    \ (9d8) acid damage on a failed save, or half as much damage on a successful\
    \ one.  \n- Slowing Breath. The dragon exhales gas in a 30-foot cone. Each\
    \ creature in that area must succeed on a DC 14 Constitution saving throw. On\
    \ a failed save, the creature can't use reactions, its speed is halved, and it\
    \ can't make more than one attack on its turn. In addition, the creature can use\
    \ either an action or a bonus action on its turn, but not both. These effects\
    \ last for 1 minute. The creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself with a successful save.  "
  "name": "Breath Weapons (Recharge 5-6)"
"source":
- "MM"
- "SKT"
- "SatO"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/young-copper-dragon.webp"
```
^statblock

## Environment

hill