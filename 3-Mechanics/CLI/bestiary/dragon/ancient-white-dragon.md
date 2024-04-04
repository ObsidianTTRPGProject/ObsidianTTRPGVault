---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Ancient White Dragon"]
---
# [Ancient White Dragon](3-Mechanics\CLI\bestiary\dragon/ancient-white-dragon.md)
*Source: Monster Manual p. 100. Available in the SRD.*  

```statblock
"name": "Ancient White Dragon"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "333"
"hit_dice": "18d20 + 144"
"stats":
- !!int "26"
- !!int "10"
- !!int "26"
- !!int "10"
- !!int "13"
- !!int "14"
"speed": "40 ft., burrow 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "14"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "13"
"damage_immunities": "cold"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Common, Draconic"
"cr": "20"
"traits":
- "desc": "The dragon can move across and climb icy surfaces without needing to make\
    \ an ability check. Additionally, difficult terrain composed of ice or snow doesn't\
    \ cost it extra movement."
  "name": "Ice Walk"
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14) to hit, reach 15 ft., one\
    \ target. Hit: dice:2d10 + 8|text(19) (2d10 + 8) piercing damage plus dice:2d8|text(9)\
    \ (2d8) cold damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14) to hit, reach 10 ft., one\
    \ target. Hit: dice:2d6 + 8|text(15) (2d6 + 8) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14) to hit, reach 20 ft., one\
    \ target. Hit: dice:2d8 + 8|text(17) (2d8 + 8) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 16 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "The dragon exhales an icy blast in a 90-foot cone. Each creature in that\
    \ area must make a DC 22 Constitution saving throw, taking dice:16d8|text(72)\
    \ (16d8) cold damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Cold Breath (Recharge 5-6)"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- "desc": "The dragon beats its wings. Each creature within 15 feet of the dragon\
    \ must succeed on a DC 22 Dexterity saving throw or take dice:2d6 + 8|text(15)\
    \ (2d6 + 8) bludgeoning damage and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ The dragon can then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "SKT"
- "EGW"
- "IDRotF"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/ancient-white-dragon.webp"
```
^statblock

## Environment

arctic