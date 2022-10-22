---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/large
- monster/type/undead
aliases: ["Girallon Zombie"]
statblock: true
"name": "Girallon Zombie"
"size": "Large"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"stats":
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "3"
- !!int "7"
- !!int "5"
"speed": "walk 30 ft., climb 30 ft."
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the zombie can move up to its speed toward a hostile\
    \ creature that it can see."
  "name": "Aggressive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5+the damage taken, unless the damage is radiant or\
    \ from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie makes five attacks: one with its bite and four with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d4\
    \ + 4) slashing damage."
  "name": "Claw"
"source":
- "ToA"
name: Girallon Zombie
image: "[[Girallon Zombie.png]]"
---

# Girallon Zombie

```statblock
"name": "Girallon Zombie"
"size": "Large"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"stats":
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "3"
- !!int "7"
- !!int "5"
"speed": "walk 30 ft., climb 30 ft."
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the zombie can move up to its speed toward a hostile\
    \ creature that it can see."
  "name": "Aggressive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5+the damage taken, unless the damage is radiant or\
    \ from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie makes five attacks: one with its bite and four with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d4\
    \ + 4) slashing damage."
  "name": "Claw"
"source":
- "ToA"
"image": "[[Girallon Zombie.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 240*

## Description

Several new zombie variants are presented below. For more information on zombies, see the Monster Manual.

**Ankylosaurus Zombie.** This creature is slow and barely aware of its surroundings.

**Girallon Zombie.** Girallons are four-armed apes with white fur. Girallon zombies are slower than their non-undead counterparts but no less fierce. The necromantic energy empowering them fuels their murderous hearts and their hunger for living flesh.

**Tyrannosaurus Zombie.** A tyrannosaurus zombie has a gullet full of smaller zombies, which it can disgorge. These zombies aren't under the tyrannosaurus zombie's control.