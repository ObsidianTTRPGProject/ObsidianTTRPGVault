---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/huge
- monster/type/construct
aliases: ["Warforged Titan"]
statblock: true
"name": "Warforged Titan"
"size": "Huge"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "20"
"hp": !!int "125"
"hit_dice": "10d12 + 60"
"stats":
- !!int "23"
- !!int "8"
- !!int "22"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "walk 40 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warforged titan has two platforms built into its chassis. One Medium\
    \ or smaller creature can ride on each platform without squeezing. To make a melee\
    \ attack against a target within 5 feet of the warforged, they must use spears\
    \ or weapons with reach and the target must be Large or larger."
  "name": "Platforms"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warforged titan deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warforged titan makes one axehand attack and one hammerfist attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 19 (3d8\
    \ + 6) slashing damage, plus 11 (2d10) slashing damage if the target is [prone](/rules/conditions.md#prone)."
  "name": "Axehand"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 17 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Hammerfist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warforged titan makes a sweep with its axehand, and each creature within\
    \ 10 feet of it must make a DC 17 Dexterity saving throw. A creature takes 19\
    \ (3d8 + 6) slashing damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Sweeping Axe (Recharge 6)"
"source":
- "ERLW"
name: Warforged Titan
image: "[[Warforged Titan.png]]"
---

# Warforged Titan

```statblock
"name": "Warforged Titan"
"size": "Huge"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "20"
"hp": !!int "125"
"hit_dice": "10d12 + 60"
"stats":
- !!int "23"
- !!int "8"
- !!int "22"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "walk 40 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warforged titan has two platforms built into its chassis. One Medium\
    \ or smaller creature can ride on each platform without squeezing. To make a melee\
    \ attack against a target within 5 feet of the warforged, they must use spears\
    \ or weapons with reach and the target must be Large or larger."
  "name": "Platforms"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warforged titan deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warforged titan makes one axehand attack and one hammerfist attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 19 (3d8\
    \ + 6) slashing damage, plus 11 (2d10) slashing damage if the target is [prone](/rules/conditions.md#prone)."
  "name": "Axehand"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 17 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Hammerfist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warforged titan makes a sweep with its axehand, and each creature within\
    \ 10 feet of it must make a DC 17 Dexterity saving throw. A creature takes 19\
    \ (3d8 + 6) slashing damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Sweeping Axe (Recharge 6)"
"source":
- "ERLW"
"image": "[[Warforged Titan.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 315*

## Description

Warforged titans are hulking constructs built to wreak paths of destruction through enemy armies. Some of the most feared combatants of the Last War, warforged titans are barely sentient, with just enough intelligence to follow commands.

**Legacy of Giants.** In the Age of Giants, giant artificers built mindless war golems to aid them in their war against the quori. Millennia later, some of these golems were unearthed by adventurers searching for the secrets of that age, then turned over to artificers working for the dragonmarked houses during the Last War. House Cannith studied these designs, and in the course of uncovering the secrets of the golems and the giant artificers who made them, House Cannith created the first warforged titans.