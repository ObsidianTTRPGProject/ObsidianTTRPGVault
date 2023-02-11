---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/undead
- monster/environment/underdark
aliases: ["Beholder Zombie"]
statblock: true
"name": "Beholder Zombie"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "10"
- !!int "8"
- !!int "16"
- !!int "3"
- !!int "8"
- !!int "5"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Wisdom": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Deep Speech and Undercommon but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 14 (4d6)\
    \ piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie uses a random magical eye ray, choosing a target that it can\
    \ see within 60 feet of it.\n\n- 1. Paralyzing Ray. The targeted creature\
    \ must succeed on a DC 14 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 2. Fear Ray. The targeted\
    \ creature must succeed on a DC 14 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 3. Enervation Ray. The\
    \ targeted creature must make a DC 14 Constitution saving throw, taking 36 (8d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one.\n\
    - 4. Disintegration Ray. If the target is a creature, it must succeed on a\
    \ DC 14 Dexterity saving throw or take 45 (10d8) force damage. If this damage\
    \ reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.\
    \  \n      \n    If the target is a Large or smaller nonmagical object or creation\
    \ of magical force, it is disintegrated without a saving throw. If the target\
    \ is a Huge or larger nonmagical object or creation of magical force, this ray\
    \ disintegrates a 10-foot cube of it."
  "name": "Eye Ray"
"source":
- "MM"
- "WDH"
- "WDMM"
name: Beholder Zombie
image: "[[Beholder Zombie.png]]"
---

# Beholder Zombie

```statblock
"name": "Beholder Zombie"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "10"
- !!int "8"
- !!int "16"
- !!int "3"
- !!int "8"
- !!int "5"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Wisdom": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Deep Speech and Undercommon but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 14 (4d6)\
    \ piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie uses a random magical eye ray, choosing a target that it can\
    \ see within 60 feet of it.\n\n- 1. Paralyzing Ray. The targeted creature\
    \ must succeed on a DC 14 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 2. Fear Ray. The targeted\
    \ creature must succeed on a DC 14 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 3. Enervation Ray. The\
    \ targeted creature must make a DC 14 Constitution saving throw, taking 36 (8d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one.\n\
    - 4. Disintegration Ray. If the target is a creature, it must succeed on a\
    \ DC 14 Dexterity saving throw or take 45 (10d8) force damage. If this damage\
    \ reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.\
    \  \n      \n    If the target is a Large or smaller nonmagical object or creation\
    \ of magical force, it is disintegrated without a saving throw. If the target\
    \ is a Huge or larger nonmagical object or creation of magical force, this ray\
    \ disintegrates a 10-foot cube of it."
  "name": "Eye Ray"
"source":
- "MM"
- "WDH"
- "WDMM"
"image": "[[Beholder Zombie.png]]"
```
^statblock

*Source: Monster Manual p. 316, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage*

## Description

From somewhere in the darkness, a gurgling moan is heard. A form lurches into view, dragging one foot as it raises bloated arms and broken hands. The zombie advances, driven to kill anyone too slow to escape its grasp.

**Dark Servants.** Sinister necromantic magic infuses the remains of the dead, causing them to rise as zombies that do their creator's bidding without fear or hesitation. They move with a jerky, uneven gait, clad in the moldering apparel they wore when put to rest, and carrying the stench of decay.

Most zombies are made from humanoid remains, though the flesh and bones of any formerly living creature can be imbued with a semblance of life. Necromantic magic, usually from spells, animates a zombie. Some zombies rise spontaneously when dark magic saturates an area. Once turned into a zombie, a creature can't be restored to life except by powerful magic, such as a [resurrection](/compendium/spells/resurrection.md) spell.

A zombie retains no vestiges of its former self, its mind devoid of thought and imagination. A zombie left without orders simply stands in place and rots unless something comes along that it can kill. The magic animating a zombie imbues it with evil, so left without purpose, it attacks any living creature it encounters.

**Hideous Forms.** Zombies appear as they did in life, showing the wounds that killed them. However, the magic that creates these vile creatures often takes time to run its course. Dead warriors might rise from a battlefield, eviscerated and bloated after days in the sun. The muddy cadaver of a peasant could claw its way from the ground, riddled with maggots and worms. A zombie might wash ashore or rise from a marsh, swollen and reeking after weeks in the water.

**Mindless Soldiers.** Zombies take the most direct route to any foe, unable to comprehend obstacles, tactics, or dangerous terrain. A zombie might stumble into a fast-flowing river to reach foes on a far shore, clawing at the surface as it is battered against rocks and destroyed. To reach a foe below it, a zombie might step out of an open window. Zombies stumble through roaring infernos, into pools of acid, and across fields littered with caltrops without hesitation.

A zombie can follow simple orders and distinguish friends from foes, but its ability to reason is limited to shambling in whatever direction it is pointed, pummeling any enemy in its path. A zombie armed with a weapon uses it, but the zombie won't retrieve a dropped weapon or other tool until told to do so.

**Undead Nature.** A zombie doesn't require air, food, drink, or sleep.

## Environment

underdark