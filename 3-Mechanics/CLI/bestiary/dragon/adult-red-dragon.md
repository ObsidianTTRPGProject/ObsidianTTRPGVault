---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Adult Red Dragon"]
---
# [Adult Red Dragon](3-Mechanics\CLI\bestiary\dragon/adult-red-dragon.md)
*Source: Monster Manual p. 98. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Adult Red Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "256"
"hit_dice": "19d12 + 133"
"stats":
- !!int "27"
- !!int "10"
- !!int "25"
- !!int "16"
- !!int "13"
- !!int "21"
"speed": "40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "13"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "13"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Common, Draconic"
"cr": "17"
"traits":
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14) to hit, reach 10 ft., one\
    \ target. Hit: dice:2d10 + 8|text(19) (2d10 + 8) piercing damage plus dice:2d6|text(7)\
    \ (2d6) fire damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14) to hit, reach 5 ft., one\
    \ target. Hit: dice:2d6 + 8|text(15) (2d6 + 8) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14) to hit, reach 15 ft., one\
    \ target. Hit: dice:2d8 + 8|text(17) (2d8 + 8) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 19 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "The dragon exhales fire in a 60-foot cone. Each creature in that area must\
    \ make a DC 21 Dexterity saving throw, taking dice:18d6|text(63) (18d6) fire\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
    \ must succeed on a DC 22 Dexterity saving throw or take dice:2d6 + 8|text(15)\
    \ (2d6 + 8) bludgeoning damage and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ The dragon can then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "RoT"
- "TftYP"
- "GoS"
- "EGW"
- "MOT"
- "GotSF"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/adult-red-dragon.webp"
```
^statblock

## Environment

mountain, hill