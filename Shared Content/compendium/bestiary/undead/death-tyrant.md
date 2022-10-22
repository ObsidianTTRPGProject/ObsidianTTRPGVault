---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/undead
- monster/environment/underdark
aliases: ["Death Tyrant"]
statblock: true
"name": "Death Tyrant"
"size": "Large"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "187"
"hit_dice": "25d10 + 50"
"stats":
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "19"
- !!int "15"
- !!int "19"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "7"
  "Intelligence": !!int "9"
  "Strength": !!int "5"
  "Constitution": !!int "7"
"skillsaves":
  "Perception": !!int "12"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, paralyzed, petrified, poisoned, prone"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Deep Speech, Undercommon"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The death tyrant's central eye emits an [invisible](/rules/conditions.md#invisible),\
    \ magical 150-foot cone of negative energy. At the start of each of its turns,\
    \ the tyrant decides which way the cone faces and whether the cone is active.\n\
    \nAny creature in that area can't regain hit points. Any humanoid that dies there\
    \ becomes a [zombie](/compendium/bestiary/undead/zombie.md) under the tyrant's\
    \ command. The dead humanoid retains its place in the initiative order and animates\
    \ at the start of its next turn, provided that its body hasn't been completely\
    \ destroyed."
  "name": "Negative Energy Cone"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6)\
    \ piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The death tyrant shoots three of the following magical eye rays at random\
    \ (reroll duplicates), choosing one to three targets it can see within 120 feet\
    \ of it:\n\n- 1. Charm Ray. The targeted creature must succeed on a DC 17\
    \ Wisdom saving throw or be [charmed](/rules/conditions.md#charmed) by the death\
    \ tyrant for 1 hour, or until the death tyrant harms the creature.\n- 2. Paralyzing\
    \ Ray. The targeted creature must succeed on a DC 17 Constitution saving throw\
    \ or be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success.\n- 3. Fear Ray. The targeted creature must succeed\
    \ on a DC 17 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 4. Slowing Ray. The\
    \ targeted creature must succeed on a DC 17 Dexterity saving throw. On a failed\
    \ save, the target's speed is halved for 1 minute. In addition, the creature can't\
    \ take reactions, and it can take either an action or a bonus action on its turn,\
    \ not both. The creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 5. Enervation Ray. The\
    \ targeted creature must make a DC 17 Constitution saving throw, taking 36 (8d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one.\n\
    - 6. Telekinetic Ray. If the target is a creature, it must succeed on a DC\
    \ 17 Strength saving throw or the death tyrant moves it up to 30 feet in any direction.\
    \ It is [restrained](/rules/conditions.md#restrained) by the ray's telekinetic\
    \ grip until the start of the death tyrant's next turn or until the death tyrant\
    \ is [incapacitated](/rules/conditions.md#incapacitated).  \n      \n    If the\
    \ target is an object weighing 300 pounds or less that isn't being worn or carried,\
    \ it is moved up to 30 feet in any direction. The death tyrant can also exert\
    \ fine control on objects with this ray, such as manipulating a simple tool or\
    \ opening a door or a container.\n- 7. Sleep Ray. The targeted creature must\
    \ succeed on a DC 17 Wisdom saving throw or fall asleep and remain [unconscious](/rules/conditions.md#unconscious)\
    \ for 1 minute. The target awakens if it takes damage or another creature takes\
    \ an action to wake it. This ray has no effect on constructs and undead.\n- 8.\
    \ Petrification Ray. The targeted creature must make a DC 17 Dexterity saving\
    \ throw. On a failed save, the creature begins to turn to stone and is [restrained](/rules/conditions.md#restrained).\
    \ It must repeat the saving throw at the end of its next turn. On a success, the\
    \ effect ends. On a failure, the creature is [petrified](/rules/conditions.md#petrified)\
    \ until freed by the  [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or other magic.\n- 9. Disintegration Ray. If the target is a creature,\
    \ it must succeed on a DC 17 Dexterity saving throw or take 45 (10d8) force damage.\
    \ If this damage reduces the creature to 0 hit points, its body becomes a pile\
    \ of fine gray dust.  \n      \n    If the target is a Large or smaller nonmagical\
    \ object or creation of magical force, it is disintegrated without a saving throw.\
    \ If the target is a Huge or larger object or creation of magical force, this\
    \ ray disintegrates a 10-foot cube of it.\n- 10. Death Ray. The targeted creature\
    \ must succeed on a DC 17 Dexterity saving throw or take 55 (10d10) necrotic damage.\
    \ The target dies if the ray reduces it to 0 hit points."
  "name": "Eye Rays"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The death tyrant uses one random eye ray."
  "name": "Eye Ray"
"source":
- "MM"
- "WDMM"
- "CM"
name: Death Tyrant
image: "[[Death Tyrant.png]]"
---

# Death Tyrant

```statblock
"name": "Death Tyrant"
"size": "Large"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "187"
"hit_dice": "25d10 + 50"
"stats":
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "19"
- !!int "15"
- !!int "19"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "7"
  "Intelligence": !!int "9"
  "Strength": !!int "5"
  "Constitution": !!int "7"
"skillsaves":
  "Perception": !!int "12"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, paralyzed, petrified, poisoned, prone"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Deep Speech, Undercommon"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The death tyrant's central eye emits an [invisible](/rules/conditions.md#invisible),\
    \ magical 150-foot cone of negative energy. At the start of each of its turns,\
    \ the tyrant decides which way the cone faces and whether the cone is active.\n\
    \nAny creature in that area can't regain hit points. Any humanoid that dies there\
    \ becomes a [zombie](/compendium/bestiary/undead/zombie.md) under the tyrant's\
    \ command. The dead humanoid retains its place in the initiative order and animates\
    \ at the start of its next turn, provided that its body hasn't been completely\
    \ destroyed."
  "name": "Negative Energy Cone"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6)\
    \ piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The death tyrant shoots three of the following magical eye rays at random\
    \ (reroll duplicates), choosing one to three targets it can see within 120 feet\
    \ of it:\n\n- 1. Charm Ray. The targeted creature must succeed on a DC 17\
    \ Wisdom saving throw or be [charmed](/rules/conditions.md#charmed) by the death\
    \ tyrant for 1 hour, or until the death tyrant harms the creature.\n- 2. Paralyzing\
    \ Ray. The targeted creature must succeed on a DC 17 Constitution saving throw\
    \ or be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success.\n- 3. Fear Ray. The targeted creature must succeed\
    \ on a DC 17 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 4. Slowing Ray. The\
    \ targeted creature must succeed on a DC 17 Dexterity saving throw. On a failed\
    \ save, the target's speed is halved for 1 minute. In addition, the creature can't\
    \ take reactions, and it can take either an action or a bonus action on its turn,\
    \ not both. The creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 5. Enervation Ray. The\
    \ targeted creature must make a DC 17 Constitution saving throw, taking 36 (8d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one.\n\
    - 6. Telekinetic Ray. If the target is a creature, it must succeed on a DC\
    \ 17 Strength saving throw or the death tyrant moves it up to 30 feet in any direction.\
    \ It is [restrained](/rules/conditions.md#restrained) by the ray's telekinetic\
    \ grip until the start of the death tyrant's next turn or until the death tyrant\
    \ is [incapacitated](/rules/conditions.md#incapacitated).  \n      \n    If the\
    \ target is an object weighing 300 pounds or less that isn't being worn or carried,\
    \ it is moved up to 30 feet in any direction. The death tyrant can also exert\
    \ fine control on objects with this ray, such as manipulating a simple tool or\
    \ opening a door or a container.\n- 7. Sleep Ray. The targeted creature must\
    \ succeed on a DC 17 Wisdom saving throw or fall asleep and remain [unconscious](/rules/conditions.md#unconscious)\
    \ for 1 minute. The target awakens if it takes damage or another creature takes\
    \ an action to wake it. This ray has no effect on constructs and undead.\n- 8.\
    \ Petrification Ray. The targeted creature must make a DC 17 Dexterity saving\
    \ throw. On a failed save, the creature begins to turn to stone and is [restrained](/rules/conditions.md#restrained).\
    \ It must repeat the saving throw at the end of its next turn. On a success, the\
    \ effect ends. On a failure, the creature is [petrified](/rules/conditions.md#petrified)\
    \ until freed by the  [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or other magic.\n- 9. Disintegration Ray. If the target is a creature,\
    \ it must succeed on a DC 17 Dexterity saving throw or take 45 (10d8) force damage.\
    \ If this damage reduces the creature to 0 hit points, its body becomes a pile\
    \ of fine gray dust.  \n      \n    If the target is a Large or smaller nonmagical\
    \ object or creation of magical force, it is disintegrated without a saving throw.\
    \ If the target is a Huge or larger object or creation of magical force, this\
    \ ray disintegrates a 10-foot cube of it.\n- 10. Death Ray. The targeted creature\
    \ must succeed on a DC 17 Dexterity saving throw or take 55 (10d10) necrotic damage.\
    \ The target dies if the ray reduces it to 0 hit points."
  "name": "Eye Rays"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The death tyrant uses one random eye ray."
  "name": "Eye Ray"
"source":
- "MM"
- "WDMM"
- "CM"
"image": "[[Death Tyrant.png]]"
```
^statblock

*Source: Monster Manual p. 29, Waterdeep: Dungeon of the Mad Mage, Candlekeep Mysteries*

## Description

On rare occasions, a beholder's sleeping mind drifts to places beyond its normal madness, imagining a reality in which it exists beyond death. When such dreams take hold, a beholder can transform, its flesh sloughing away to leave a death tyrant behind. This monster possesses the cunning and much of the magic it had in life, but it is fueled by the power of undeath. A death tyrant appears as a massive, naked skull, with a pinpoint of red light gleaming in its hollow eye socket. With its eyestalks rotted away, ten spectral eyes hover above the creature and glare in all directions.

**Deathly Despot.** As they did when they were beholders, death tyrants lord their power over other creatures. Moreover, a beholder's ability to quash magical energy with its central eye gives way to a more sinister power in a death tyrant, which can transform former slaves and enemies into undead servants.

Zombies created by a death tyrant are used and discarded as needed. They stand guard at the entrances to the death tyrant's lair or guard its treasure vaults.

Acting as bait for traps or as combat fodder, zombies keep powerful enemies distracted while the death tyrant moves into position and prepares to destroy them.

**Armies of the Dead.** A death tyrant that embraces undeath becomes an engine of destruction. Driven by a hunger for power and security, it advances against humanoid settlements, using its eye rays to destroy every creature it encounters, then building an army of undead. If left unchecked, a death tyrant might wipe out the population of a city in weeks, then set its undead eye on wider conquest. As each settlement falls, the death tyrant's zombie forces build to overwhelming numbers.

**Undead Nature.** A death tyrant doesn't require air, food, drink, or sleep.

**A Death Tyrant's Lair.** A death tyrant's lair is usually the same site it held as a beholder, but it contains more trappings of death and decay. A death tyrant encountered in its lair has a challenge rating of 15 (13,000 XP).

The death tyrant can't repeat an effect until all three have been used, and it can't use the same effect on consecutive rounds.

## Environment

underdark