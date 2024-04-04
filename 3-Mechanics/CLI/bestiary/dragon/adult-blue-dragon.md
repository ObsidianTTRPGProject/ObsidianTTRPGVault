---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Adult Blue Dragon"]
---
# [Adult Blue Dragon](3-Mechanics\CLI\bestiary\dragon/adult-blue-dragon.md)
*Source: Monster Manual p. 91. Available in the SRD.*  

```statblock
"name": "Adult Blue Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "225"
"hit_dice": "18d12 + 108"
"stats":
- !!int "25"
- !!int "10"
- !!int "23"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "40 ft., burrow 30 ft., fly 80 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "12"
"damage_immunities": "lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "16"
"traits":
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+12 (+12) to hit, reach 10 ft., one\
    \ target. Hit: dice:2d10 + 7|text(18) (2d10 + 7) piercing damage plus dice:1d10|text(5)\
    \ (1d10) lightning damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+12 (+12) to hit, reach 5 ft., one\
    \ target. Hit: dice:2d6 + 7|text(14) (2d6 + 7) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+12 (+12) to hit, reach 15 ft., one\
    \ target. Hit: dice:2d8 + 7|text(16) (2d8 + 7) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 17 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each\
    \ creature in that line must make a DC 19 Dexterity saving throw, taking dice:12d10|text(66)\
    \ (12d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Breath (Recharge 5-6)"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
    \ must succeed on a DC 20 Dexterity saving throw or take dice:2d6 + 7|text(14)\
    \ (2d6 + 7) bludgeoning damage and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ The dragon can then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "HotDQ"
- "RoT"
- "SKT"
- "GoS"
- "MOT"
- "JttRC"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/adult-blue-dragon.webp"
```
^statblock

## Environment

desert, coastal