---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/23
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Ancient Blue Dragon"]
---
# [Ancient Blue Dragon](3-Mechanics\CLI\bestiary\dragon/ancient-blue-dragon.md)
*Source: Monster Manual p. 90. Available in the SRD.*  

```statblock
"name": "Ancient Blue Dragon"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "481"
"hit_dice": "26d20 + 208"
"stats":
- !!int "29"
- !!int "10"
- !!int "27"
- !!int "18"
- !!int "17"
- !!int "21"
"speed": "40 ft., burrow 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "12"
  "Dexterity": !!int "7"
  "Wisdom": !!int "10"
  "Constitution": !!int "15"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "17"
"damage_immunities": "lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27"
"languages": "Common, Draconic"
"cr": "23"
"traits":
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+16 (+16) to hit, reach 15 ft., one\
    \ target. Hit: dice:2d10 + 9|text(20) (2d10 + 9) piercing damage plus dice:2d10|text(11)\
    \ (2d10) lightning damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+16 (+16) to hit, reach 10 ft., one\
    \ target. Hit: dice:2d6 + 9|text(16) (2d6 + 9) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+16 (+16) to hit, reach 20 ft., one\
    \ target. Hit: dice:2d8 + 9|text(18) (2d8 + 9) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 20 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each\
    \ creature in that line must make a DC 23 Dexterity saving throw, taking dice:16d10|text(88)\
    \ (16d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Breath (Recharge 5-6)"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- "desc": "The dragon beats its wings. Each creature within 15 feet of the dragon\
    \ must succeed on a DC 24 Dexterity saving throw or take dice:2d6 + 9|text(16)\
    \ (2d6 + 9) bludgeoning damage and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ The dragon can then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "MOT"
- "TCE"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/ancient-blue-dragon.webp"
```
^statblock

## Environment

desert, coastal