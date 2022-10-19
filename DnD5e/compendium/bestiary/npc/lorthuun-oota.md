---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/large
- monster/type/aberration
- monster/environment/underdark
aliases: ["Lorthuun"]
statblock: true
"name": "Lorthuun"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "180"
"hit_dice": "19d10 + 76"
"stats":
- !!int "10"
- !!int "14"
- !!int "18"
- !!int "17"
- !!int "15"
- !!int "17"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "7"
  "Intelligence": !!int "8"
"skillsaves":
  "Perception": !!int "12"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Deep Speech, Undercommon"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lorthuun's central eye creates an area of antimagic, as in the [antimagic\
    \ field](/compendium/spells/antimagic-field.md) spell, in a 150-foot cone. At\
    \ the start of each of its turns, Lorthuun decides which way the cone faces and\
    \ whether the cone is active. The area works against Lorthuun's own eye rays."
  "name": "Antimagic Cone"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6)\
    \ piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beholder shoots three of the following magical eye rays at random (reroll\
    \ duplicates), choosing one to three targets it can see within 120 feet of it:\n\
    \n- 1. Charm Ray. The targeted creature must succeed on a DC 16 Wisdom saving\
    \ throw or be [charmed](/rules/conditions.md#charmed) by the beholder for 1 hour,\
    \ or until the beholder harms the creature.\n- 2. Paralyzing Ray. The targeted\
    \ creature must succeed on a DC 16 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 3. Fear Ray. The targeted\
    \ creature must succeed on a DC 16 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 4. Slowing Ray. The\
    \ targeted creature must succeed on a DC 16 Dexterity saving throw. On a failed\
    \ save, the target's speed is halved for 1 minute. In addition, the creature can't\
    \ take reactions, and it can take either an action or a bonus action on its turn,\
    \ not both. The creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 5. Enervation Ray. The\
    \ targeted creature must make a DC 16 Constitution saving throw, taking 36 (8d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one.\n\
    - 6. Telekinetic Ray. If the target is a creature, it must succeed on a DC\
    \ 16 Strength saving throw or the beholder moves it up to 30 feet in any direction.\
    \ It is [restrained](/rules/conditions.md#restrained) by the ray's telekinetic\
    \ grip until the start of the beholder's next turn or until the beholder is [incapacitated](/rules/conditions.md#incapacitated).\
    \  \n      \n    If the target is an object weighing 300 pounds or less that isn't\
    \ being worn or carried, it is moved up to 30 feet in any direction. The beholder\
    \ can also exert fine control on objects with this ray, such as manipulating a\
    \ simple tool or opening a door or a container."
  "name": "Eye Rays"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lorthuun uses one random eye ray."
  "name": "Eye Ray"
"source":
- "OotA"
name: Lorthuun
image: "[[Lorthuun.png]]"
---

# Lorthuun

```statblock
"name": "Lorthuun"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "180"
"hit_dice": "19d10 + 76"
"stats":
- !!int "10"
- !!int "14"
- !!int "18"
- !!int "17"
- !!int "15"
- !!int "17"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "7"
  "Intelligence": !!int "8"
"skillsaves":
  "Perception": !!int "12"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Deep Speech, Undercommon"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lorthuun's central eye creates an area of antimagic, as in the [antimagic\
    \ field](/compendium/spells/antimagic-field.md) spell, in a 150-foot cone. At\
    \ the start of each of its turns, Lorthuun decides which way the cone faces and\
    \ whether the cone is active. The area works against Lorthuun's own eye rays."
  "name": "Antimagic Cone"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6)\
    \ piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beholder shoots three of the following magical eye rays at random (reroll\
    \ duplicates), choosing one to three targets it can see within 120 feet of it:\n\
    \n- 1. Charm Ray. The targeted creature must succeed on a DC 16 Wisdom saving\
    \ throw or be [charmed](/rules/conditions.md#charmed) by the beholder for 1 hour,\
    \ or until the beholder harms the creature.\n- 2. Paralyzing Ray. The targeted\
    \ creature must succeed on a DC 16 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 3. Fear Ray. The targeted\
    \ creature must succeed on a DC 16 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 4. Slowing Ray. The\
    \ targeted creature must succeed on a DC 16 Dexterity saving throw. On a failed\
    \ save, the target's speed is halved for 1 minute. In addition, the creature can't\
    \ take reactions, and it can take either an action or a bonus action on its turn,\
    \ not both. The creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 5. Enervation Ray. The\
    \ targeted creature must make a DC 16 Constitution saving throw, taking 36 (8d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one.\n\
    - 6. Telekinetic Ray. If the target is a creature, it must succeed on a DC\
    \ 16 Strength saving throw or the beholder moves it up to 30 feet in any direction.\
    \ It is [restrained](/rules/conditions.md#restrained) by the ray's telekinetic\
    \ grip until the start of the beholder's next turn or until the beholder is [incapacitated](/rules/conditions.md#incapacitated).\
    \  \n      \n    If the target is an object weighing 300 pounds or less that isn't\
    \ being worn or carried, it is moved up to 30 feet in any direction. The beholder\
    \ can also exert fine control on objects with this ray, such as manipulating a\
    \ simple tool or opening a door or a container."
  "name": "Eye Rays"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lorthuun uses one random eye ray."
  "name": "Eye Ray"
"source":
- "OotA"
"image": "[[Lorthuun.png]]"
```
^statblock

*Source: Out of the Abyss p. 141*

## Environment

underdark