---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/huge
- monster/type/undead
aliases: ["Ankylosaurus Zombie"]
statblock: true
"name": "Ankylosaurus Zombie"
"size": "Huge"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "68"
"hit_dice": "8d12 + 16"
"stats":
- !!int "19"
- !!int "9"
- !!int "15"
- !!int "2"
- !!int "6"
- !!int "3"
"speed": "walk 20 ft."
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5+the damage taken, unless the damage is radiant or\
    \ from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target Hit: 18 (4d6\
    \ + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 14 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
"source":
- "ToA"
name: Ankylosaurus Zombie
image: "[[Ankylosaurus Zombie.png]]"
---

# Ankylosaurus Zombie

```statblock
"name": "Ankylosaurus Zombie"
"size": "Huge"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "68"
"hit_dice": "8d12 + 16"
"stats":
- !!int "19"
- !!int "9"
- !!int "15"
- !!int "2"
- !!int "6"
- !!int "3"
"speed": "walk 20 ft."
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5+the damage taken, unless the damage is radiant or\
    \ from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target Hit: 18 (4d6\
    \ + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 14 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
"source":
- "ToA"
"image": "[[Ankylosaurus Zombie.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 240*

## Description

Several new zombie variants are presented below. For more information on zombies, see the Monster Manual.

**Ankylosaurus Zombie.** This creature is slow and barely aware of its surroundings.

**Girallon Zombie.** Girallons are four-armed apes with white fur. Girallon zombies are slower than their non-undead counterparts but no less fierce. The necromantic energy empowering them fuels their murderous hearts and their hunger for living flesh.

**Tyrannosaurus Zombie.** A tyrannosaurus zombie has a gullet full of smaller zombies, which it can disgorge. These zombies aren't under the tyrannosaurus zombie's control.