---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/huge
- monster/type/construct
aliases: ["Hellfire Engine"]
statblock: true
"name": "Hellfire Engine"
"size": "Huge"
"type": "construct"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "216"
"hit_dice": "16d12 + 112"
"stats":
- !!int "20"
- !!int "16"
- !!int "24"
- !!int "2"
- !!int "10"
- !!int "1"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "0"
  "Dexterity": !!int "8"
  "Wisdom": !!int "5"
"damage_resistances": "cold; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, deafened, exhaustion, frightened, paralyzed, poisoned,\
  \ unconscious"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands Infernal but can't speak"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellfire engine is immune to any spell or effect that would alter its\
    \ form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellfire engine has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellfire engine doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellfire engine moves up to its speed in a straight line. During this\
    \ move, it can enter Large or smaller creatures' spaces. A creature whose space\
    \ the hellfire engine enters must make a DC 18 Dexterity saving throw. On a successful\
    \ save, the creature is pushed to the nearest space out of the hellfire engine's\
    \ path. On a failed save, the creature falls [prone](/rules/conditions.md#prone)\
    \ and takes 28 (8d6) bludgeoning damage.\n\nIf the hellfire engine remains in\
    \ the [prone](/rules/conditions.md#prone) creature's space, the creature is also\
    \ [restrained](/rules/conditions.md#restrained) until it's no longer in the same\
    \ space as the hellfire engine. While [restrained](/rules/conditions.md#restrained)\
    \ in this way, the creature, or another creature within 5 feet of it, can make\
    \ a DC 18 Strength check. On a success, the creature is shunted to an unoccupied\
    \ space of its choice within 5 feet of the hellfire engine and is no longer [restrained](/rules/conditions.md#restrained)."
  "name": "Flesh-Crushing Stride"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellfire engine uses one of the following options (choose one or roll\
    \ a d6):\n\n- 1–2 Bonemelt Sprayer. The hellfire engine spews acidic flame\
    \ in a 60-foot cone. Each creature in the cone must make a DC 20 Dexterity saving\
    \ throw, taking 11 (2d10) fire damage plus 18 (4d8) acid damage on a failed save,\
    \ or half as much damage on a successful one. Creatures that fail the saving throw\
    \ are drenched in burning acid and take 5 (1d10) fire damage plus 9 (2d8) acid\
    \ damage at the end of their turns. An affected creature or another creature within\
    \ 5 feet of it can take an action to scrape off the burning fuel.\n- 3–4 Lightning\
    \ Flail. Melee Weapon Attack: +10 to hit, reach 15 ft., one creature. Hit:\
    \ 18 (3d8 + 5) bludgeoning damage plus 22 (5d8) lightning damage. Up to three\
    \ other creatures of the hellfire engine's choice that it can see within 30 feet\
    \ of the target must each make a DC 20 Dexterity saving throw, taking 22 (5d8)\
    \ lightning damage on a failed save, or half as much damage on a successful one.\n\
    - 5–6 Thunder Cannon. The hellfire engine targets a point within 120 feet\
    \ of it that it can see. Each creature within 30 feet of that point must make\
    \ a DC 20 Dexterity saving throw, taking 27 (5d10) bludgeoning damage plus 19\
    \ (3d12) thunder damage on a failed save, or half as much damage on a successful\
    \ one.  \n      \n    If the chosen option kills a creature, the creature's soul\
    \ rises from the River Styx as a [lemure](/compendium/bestiary/fiend/lemure.md)\
    \ in Avernus in 1d4 hours. If the creature isn't revived before then, only a [wish](/compendium/spells/wish.md)\
    \ spell or killing the [lemure](/compendium/bestiary/fiend/lemure.md) and casting\
    \ true resurrection on the creature's original body can restore it to life. Constructs\
    \ and devils are immune to this effect."
  "name": "Hellfire Weapons"
"source":
- "MPMM"
- "MTF"
name: Hellfire Engine
image: "[[Hellfire Engine.png]]"
---

# Hellfire Engine

```statblock
"name": "Hellfire Engine"
"size": "Huge"
"type": "construct"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "216"
"hit_dice": "16d12 + 112"
"stats":
- !!int "20"
- !!int "16"
- !!int "24"
- !!int "2"
- !!int "10"
- !!int "1"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "0"
  "Dexterity": !!int "8"
  "Wisdom": !!int "5"
"damage_resistances": "cold; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, deafened, exhaustion, frightened, paralyzed, poisoned,\
  \ unconscious"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands Infernal but can't speak"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellfire engine is immune to any spell or effect that would alter its\
    \ form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellfire engine has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellfire engine doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellfire engine moves up to its speed in a straight line. During this\
    \ move, it can enter Large or smaller creatures' spaces. A creature whose space\
    \ the hellfire engine enters must make a DC 18 Dexterity saving throw. On a successful\
    \ save, the creature is pushed to the nearest space out of the hellfire engine's\
    \ path. On a failed save, the creature falls [prone](/rules/conditions.md#prone)\
    \ and takes 28 (8d6) bludgeoning damage.\n\nIf the hellfire engine remains in\
    \ the [prone](/rules/conditions.md#prone) creature's space, the creature is also\
    \ [restrained](/rules/conditions.md#restrained) until it's no longer in the same\
    \ space as the hellfire engine. While [restrained](/rules/conditions.md#restrained)\
    \ in this way, the creature, or another creature within 5 feet of it, can make\
    \ a DC 18 Strength check. On a success, the creature is shunted to an unoccupied\
    \ space of its choice within 5 feet of the hellfire engine and is no longer [restrained](/rules/conditions.md#restrained)."
  "name": "Flesh-Crushing Stride"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellfire engine uses one of the following options (choose one or roll\
    \ a d6):\n\n- 1–2 Bonemelt Sprayer. The hellfire engine spews acidic flame\
    \ in a 60-foot cone. Each creature in the cone must make a DC 20 Dexterity saving\
    \ throw, taking 11 (2d10) fire damage plus 18 (4d8) acid damage on a failed save,\
    \ or half as much damage on a successful one. Creatures that fail the saving throw\
    \ are drenched in burning acid and take 5 (1d10) fire damage plus 9 (2d8) acid\
    \ damage at the end of their turns. An affected creature or another creature within\
    \ 5 feet of it can take an action to scrape off the burning fuel.\n- 3–4 Lightning\
    \ Flail. Melee Weapon Attack: +10 to hit, reach 15 ft., one creature. Hit:\
    \ 18 (3d8 + 5) bludgeoning damage plus 22 (5d8) lightning damage. Up to three\
    \ other creatures of the hellfire engine's choice that it can see within 30 feet\
    \ of the target must each make a DC 20 Dexterity saving throw, taking 22 (5d8)\
    \ lightning damage on a failed save, or half as much damage on a successful one.\n\
    - 5–6 Thunder Cannon. The hellfire engine targets a point within 120 feet\
    \ of it that it can see. Each creature within 30 feet of that point must make\
    \ a DC 20 Dexterity saving throw, taking 27 (5d10) bludgeoning damage plus 19\
    \ (3d12) thunder damage on a failed save, or half as much damage on a successful\
    \ one.  \n      \n    If the chosen option kills a creature, the creature's soul\
    \ rises from the River Styx as a [lemure](/compendium/bestiary/fiend/lemure.md)\
    \ in Avernus in 1d4 hours. If the creature isn't revived before then, only a [wish](/compendium/spells/wish.md)\
    \ spell or killing the [lemure](/compendium/bestiary/fiend/lemure.md) and casting\
    \ true resurrection on the creature's original body can restore it to life. Constructs\
    \ and devils are immune to this effect."
  "name": "Hellfire Weapons"
"source":
- "MPMM"
- "MTF"
"image": "[[Hellfire Engine.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 152, Mordenkainen's Tome of Foes p. 165*

## Description

Hellfire engines are semiautonomous bringers of destruction. Amnizus (in this book) and other devilish generals hold them in reserve until they are needed to repel an incursion by demons or crusading mortals, but occasionally one of these magical-mechanical hybrids gets loose, driven berserk by its need to destroy.

Hellfire engines take many forms, but all of them have one purpose: to mow down foes in waves. They are incapable of subtlety or trickery, but their destructive capability is immense.

Mortal creatures slain by hellfire engines are doomed to join the infernal legions in mere hours unless powerful magic-wielders intervene on their behalf. The archdukes of the Nine Hells would like nothing better than to modify this magic so it works against demons, too, but that discovery has eluded them so far.