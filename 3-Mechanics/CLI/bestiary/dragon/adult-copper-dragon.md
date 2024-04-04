---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Adult Copper Dragon"]
---
# [Adult Copper Dragon](3-Mechanics\CLI\bestiary\dragon/adult-copper-dragon.md)
*Source: Monster Manual p. 112. Available in the SRD.*  

```statblock
"name": "Adult Copper Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "184"
"hit_dice": "16d12 + 80"
"stats":
- !!int "23"
- !!int "12"
- !!int "21"
- !!int "18"
- !!int "15"
- !!int "17"
"speed": "40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "10"
"skillsaves":
  "Deception": !!int "8"
  "Stealth": !!int "6"
  "Perception": !!int "12"
"damage_immunities": "acid"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "14"
"traits":
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+11 (+11) to hit, reach 10 ft., one\
    \ target. Hit: dice:2d10 + 6|text(17) (2d10 + 6) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+11 (+11) to hit, reach 5 ft., one\
    \ target. Hit: dice:2d6 + 6|text(13) (2d6 + 6) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+11 (+11) to hit, reach 15 ft., one\
    \ target. Hit: dice:2d8 + 6|text(15) (2d8 + 6) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 16 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "The dragon uses one of the following breath weapons.\n\n- Acid Breath.\
    \ The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 18 Dexterity saving throw, taking dice:12d8|text(54)\
    \ (12d8) acid damage on a failed save, or half as much damage on a successful\
    \ one.  \n- Slowing Breath. The dragon exhales gas in a 60-foot cone. Each\
    \ creature in that area must succeed on a DC 18 Constitution saving throw. On\
    \ a failed save, the creature can't use reactions, its speed is halved, and it\
    \ can't make more than one attack on its turn. In addition, the creature can use\
    \ either an action or a bonus action on its turn, but not both. These effects\
    \ last for 1 minute. The creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself with a successful save.  "
  "name": "Breath Weapons (Recharge 5-6)"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
    \ must succeed on a DC 19 Dexterity saving throw or take dice:2d6 + 6|text(13)\
    \ (2d6 + 6) bludgeoning damage and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ The dragon can then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "GoS"
- "CM"
- "SatO"
- "ToFW"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/adult-copper-dragon.webp"
```
^statblock

## Environment

hill