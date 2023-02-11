---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/undead
- monster/environment/underdark
- monster/environment/urban
aliases: ["Poltergeist"]
statblock: true
"name": "Poltergeist"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "1"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "walk 0 ft., fly 50 ft. (hover)"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned,\
  \ prone, restrained, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands all languages it knew in life but can't speak"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The poltergeist can move through other creatures and objects as if they\
    \ were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the poltergeist has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The poltergeist is [invisible](/rules/conditions.md#invisible)."
  "name": "Invisibility"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6)\
    \ force damage."
  "name": "Forceful Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The poltergeist targets a creature or unattended object within 30 feet\
    \ of it. A creature must be Medium or smaller to be affected by this magic, and\
    \ an object can weigh up to 150 pounds.\n\nIf the target is a creature, the poltergeist\
    \ makes a Charisma check contested by the target's Strength check. If the poltergeist\
    \ wins the contest, the poltergeist hurls the target up to 30 feet in any direction,\
    \ including upward. If the target then comes into contact with a hard surface\
    \ or heavy object, the target takes 1d6 damage per 10 feet moved.\n\nIf the target\
    \ is an object that isn't being worn or carried, the poltergeist hurls it up to\
    \ 30 feet in any direction. The poltergeist can use the object as a ranged weapon,\
    \ attacking one creature along the object's path (+4 to hit) and dealing 5 (2d4)\
    \ bludgeoning damage on a hit."
  "name": "Telekinetic Thrust"
"source":
- "MM"
- "CoS"
- "IDRotF"
- "CM"
name: Poltergeist
image: "[[Poltergeist.png]]"
---

# Poltergeist

```statblock
"name": "Poltergeist"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "1"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "walk 0 ft., fly 50 ft. (hover)"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned,\
  \ prone, restrained, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands all languages it knew in life but can't speak"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The poltergeist can move through other creatures and objects as if they\
    \ were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the poltergeist has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The poltergeist is [invisible](/rules/conditions.md#invisible)."
  "name": "Invisibility"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6)\
    \ force damage."
  "name": "Forceful Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The poltergeist targets a creature or unattended object within 30 feet\
    \ of it. A creature must be Medium or smaller to be affected by this magic, and\
    \ an object can weigh up to 150 pounds.\n\nIf the target is a creature, the poltergeist\
    \ makes a Charisma check contested by the target's Strength check. If the poltergeist\
    \ wins the contest, the poltergeist hurls the target up to 30 feet in any direction,\
    \ including upward. If the target then comes into contact with a hard surface\
    \ or heavy object, the target takes 1d6 damage per 10 feet moved.\n\nIf the target\
    \ is an object that isn't being worn or carried, the poltergeist hurls it up to\
    \ 30 feet in any direction. The poltergeist can use the object as a ranged weapon,\
    \ attacking one creature along the object's path (+4 to hit) and dealing 5 (2d4)\
    \ bludgeoning damage on a hit."
  "name": "Telekinetic Thrust"
"source":
- "MM"
- "CoS"
- "IDRotF"
- "CM"
"image": "[[Poltergeist.png]]"
```
^statblock

*Source: Monster Manual p. 279, Curse of Strahd, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries*

## Description

A poltergeist is the confused, invisible spirit of an individual with no sense of how he or she died. A poltergeist expresses its rage by hurling creatures and objects using the power of its shattered psyche.

## Environment

underdark, urban