---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/aberration
- monster/environment/underdark
aliases: ["Beholder"]
statblock: true
"name": "Beholder"
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
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beholder's central eye creates an area of antimagic, as in the [antimagic\
    \ field](/compendium/spells/antimagic-field.md) spell, in a 150-foot cone. At\
    \ the start of each of its turns, the beholder decides which way the cone faces\
    \ and whether the cone is active. The area works against the beholder's own eye\
    \ rays."
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
    \ simple tool or opening a door or a container.\n- 7. Sleep Ray. The targeted\
    \ creature must succeed on a DC 16 Wisdom saving throw or fall asleep and remain\
    \ [unconscious](/rules/conditions.md#unconscious) for 1 minute. The target awakens\
    \ if it takes damage or another creature takes an action to wake it. This ray\
    \ has no effect on constructs and undead.\n- 8. Petrification Ray. The targeted\
    \ creature must make a DC 16 Dexterity saving throw. On a failed save, the creature\
    \ begins to turn to stone and is [restrained](/rules/conditions.md#restrained).\
    \ It must repeat the saving throw at the end of its next turn. On a success, the\
    \ effect ends. On a failure, the creature is [petrified](/rules/conditions.md#petrified)\
    \ until freed by the  [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or other magic.\n- 9. Disintegration Ray. If the target is a creature,\
    \ it must succeed on a DC 16 Dexterity saving throw or take 45 (10d8) force damage.\
    \ If this damage reduces the creature to 0 hit points, its body becomes a pile\
    \ of fine gray dust.  \n      \n    If the target is a Large or smaller nonmagical\
    \ object or creation of magical force, it is disintegrated without a saving throw.\
    \ If the target is a Huge or larger object or creation of magical force, this\
    \ ray disintegrates a 10-foot cube of it.\n- 10. Death Ray. The targeted creature\
    \ must succeed on a DC 16 Dexterity saving throw or take 55 (10d10) necrotic damage.\
    \ The target dies if the ray reduces it to 0 hit points."
  "name": "Eye Rays"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beholder uses one random eye ray."
  "name": "Eye Ray"
"source":
- "MM"
- "ToA"
- "WDMM"
- "GoS"
- "ERLW"
- "EGW"
- "TCE"
- "CM"
- "JttRC"
- "LoX"
name: Beholder
image: "[[Beholder.png]]"
---

# Beholder

```statblock
"name": "Beholder"
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
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beholder's central eye creates an area of antimagic, as in the [antimagic\
    \ field](/compendium/spells/antimagic-field.md) spell, in a 150-foot cone. At\
    \ the start of each of its turns, the beholder decides which way the cone faces\
    \ and whether the cone is active. The area works against the beholder's own eye\
    \ rays."
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
    \ simple tool or opening a door or a container.\n- 7. Sleep Ray. The targeted\
    \ creature must succeed on a DC 16 Wisdom saving throw or fall asleep and remain\
    \ [unconscious](/rules/conditions.md#unconscious) for 1 minute. The target awakens\
    \ if it takes damage or another creature takes an action to wake it. This ray\
    \ has no effect on constructs and undead.\n- 8. Petrification Ray. The targeted\
    \ creature must make a DC 16 Dexterity saving throw. On a failed save, the creature\
    \ begins to turn to stone and is [restrained](/rules/conditions.md#restrained).\
    \ It must repeat the saving throw at the end of its next turn. On a success, the\
    \ effect ends. On a failure, the creature is [petrified](/rules/conditions.md#petrified)\
    \ until freed by the  [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or other magic.\n- 9. Disintegration Ray. If the target is a creature,\
    \ it must succeed on a DC 16 Dexterity saving throw or take 45 (10d8) force damage.\
    \ If this damage reduces the creature to 0 hit points, its body becomes a pile\
    \ of fine gray dust.  \n      \n    If the target is a Large or smaller nonmagical\
    \ object or creation of magical force, it is disintegrated without a saving throw.\
    \ If the target is a Huge or larger object or creation of magical force, this\
    \ ray disintegrates a 10-foot cube of it.\n- 10. Death Ray. The targeted creature\
    \ must succeed on a DC 16 Dexterity saving throw or take 55 (10d10) necrotic damage.\
    \ The target dies if the ray reduces it to 0 hit points."
  "name": "Eye Rays"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beholder uses one random eye ray."
  "name": "Eye Ray"
"source":
- "MM"
- "ToA"
- "WDMM"
- "GoS"
- "ERLW"
- "EGW"
- "TCE"
- "CM"
- "JttRC"
- "LoX"
"image": "[[Beholder.png]]"
```
^statblock

*Source: Monster Manual p. 28, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything, Candlekeep Mysteries, Journeys through the Radiant Citadel, Light of Xaryxis*

## Description

One glance at a beholder is enough to assess its foul and otherworldly nature. Aggressive, hateful, and greedy, these aberrations dismiss all other creatures as lesser beings, toying with them or destroying them as they choose.

A beholder's spheroid body levitates at all times, and its great bulging eye sits above a wide, toothy maw, while the smaller eyestalks that crown its body twist and turn to keep its foes in sight. When a beholder sleeps, it closes its central eye but leaves its smaller eyes open and alert.

**Xenophobic Isolationists.** Enemies abound, or so every beholder believes. Beholders are convinced that other creatures resent them for their brilliance and magical power, even as they dismiss those lesser creatures as crude and disgusting. Beholders always suspect others of plotting against them, even when no other creatures are around.

The disdain a beholder has for other creatures extends to other beholders. Each beholder believes its form to be an ideal, and that any deviation from that form is a flaw in the racial purity of its kind. Beholders vary greatly in their physical forms, making conflict between them inevitable. Some beholders are protected by overlapping chitinous plates. Some have smooth hides. Some have eyestalks that writhe like tentacles, while others' stalks bear crustacean-like joints. Even slight differences of coloration in hide can turn two beholders into lifelong enemies.

**Eye Tyrant.** Some beholders manage to channel their xenophobic tendencies into a terrible despotism. Rather than live in isolation, the aptly named eye tyrants enslave those other creatures, founding and controlling vast empires. An eye tyrant sometimes carves out a domain within or under a major city, commanding networks of agents that operate on their master's behalf.

**Alien Lairs.** Because they refuse to share territory with others, most beholders withdraw to frigid hills, abandoned ruins, and deep caverns to scheme. A beholder's lair is carved out by its disintegration eye ray, emphasizing vertical passages connecting chambers stacked on top of each other. Such an environment allows a beholder to move freely, even as it prevents intruders from easily creeping about. When intruders do break in, the height of its open ceilings allows a beholder to float up and harry foes on the floor.

As alien as their creator, the rooms in a beholder's lair reflect the creature's arrogance. It festoons its chambers with trophies from the battles it has won, including [petrified](/rules/conditions.md#petrified) adventurers standing frozen in their horrified final moments, pieces of other beholders, and magic items wrested from powerful foes. A beholder judges its own worth by its acquisitions, and it never willingly parts with its treasures.

**A Beholder's Lair.** A beholder's central lair is typically a large, spacious cavern with high ceilings, where it can attack without fear of closing to melee range. A beholder encountered in its lair has a challenge rating of 14 (11,500 XP).

## Environment

underdark