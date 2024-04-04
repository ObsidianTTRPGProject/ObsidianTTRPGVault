---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Adult Brass Dragon"]
---
# [Adult Brass Dragon](3-Mechanics\CLI\bestiary\dragon/adult-brass-dragon.md)
*Source: Monster Manual p. 105. Available in the SRD.*  

```statblock
"name": "Adult Brass Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "23"
- !!int "10"
- !!int "21"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "40 ft., burrow 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
  "Constitution": !!int "10"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "11"
  "History": !!int "7"
  "Persuasion": !!int "8"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic"
"cr": "13"
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
- "desc": "The dragon uses one of the following breath weapons.\n\n- Fire Breath.\
    \ The dragon exhales fire in a 60-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 18 Dexterity saving throw, taking dice:13d6|text(45)\
    \ (13d6) fire damage on a failed save, or half as much damage on a successful\
    \ one.  \n- Sleep Breath. The dragon exhales sleep gas in a 60-foot cone.\
    \ Each creature in that area must succeed on a DC 18 Constitution saving throw\
    \ or fall [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious) for\
    \ 10 minutes. This effect ends for a creature if the creature takes damage or\
    \ someone uses an action to wake it.  "
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
"image": "/3-Mechanics/CLI/bestiary/dragon/token/adult-brass-dragon.webp"
```
^statblock

## Environment

desert