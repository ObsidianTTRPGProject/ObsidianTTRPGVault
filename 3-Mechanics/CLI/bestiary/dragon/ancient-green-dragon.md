---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/22
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Ancient Green Dragon"]
---
# [Ancient Green Dragon](3-Mechanics\CLI\bestiary\dragon/ancient-green-dragon.md)
*Source: Monster Manual p. 93. Available in the SRD.*  

```statblock
"name": "Ancient Green Dragon"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "385"
"hit_dice": "22d20 + 154"
"stats":
- !!int "27"
- !!int "12"
- !!int "25"
- !!int "20"
- !!int "17"
- !!int "19"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "8"
  "Wisdom": !!int "10"
  "Constitution": !!int "14"
"skillsaves":
  "Deception": !!int "11"
  "Stealth": !!int "8"
  "Insight": !!int "10"
  "Perception": !!int "17"
  "Persuasion": !!int "11"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27"
"languages": "Common, Draconic"
"cr": "22"
"traits":
- "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+15 (+15) to hit, reach 15 ft., one\
    \ target. Hit: dice:2d10 + 8|text(19) (2d10 + 8) piercing damage plus dice:3d6|text(10)\
    \ (3d6) poison damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+15 (+15) to hit, reach 10 ft., one\
    \ target. Hit: dice:4d6 + 8|text(22) (4d6 + 8) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+15 (+15) to hit, reach 20 ft., one\
    \ target. Hit: dice:2d8 + 8|text(17) (2d8 + 8) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 19 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that\
    \ area must make a DC 22 Constitution saving throw, taking dice:22d6|text(77)\
    \ (22d6) poison damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Poison Breath (Recharge 5-6)"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- "desc": "The dragon beats its wings. Each creature within 15 feet of the dragon\
    \ must succeed on a DC 23 Dexterity saving throw or take dice:2d6 + 8|text(15)\
    \ (2d6 + 8) bludgeoning damage and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ The dragon can then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "SKT"
- "DIP"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/ancient-green-dragon.webp"
```
^statblock

## Environment

forest