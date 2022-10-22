---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/huge
- monster/type/undead
aliases: ["Tyrannosaurus Zombie"]
statblock: true
"name": "Tyrannosaurus Zombie"
"size": "Huge"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "136"
"hit_dice": "13d12 + 52"
"stats":
- !!int "25"
- !!int "6"
- !!int "19"
- !!int "1"
- !!int "3"
- !!int "5"
"speed": "walk 40 ft."
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 6"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the tyrannosaurus zombie can disgorge a normal [zombie](/compendium/bestiary/undead/zombie.md),\
    \ which appears in an unoccupied space within 10 feet of it. The disgorged [zombie](/compendium/bestiary/undead/zombie.md)\
    \ acts on its own initiative count. After a zombie is disgorged, roll a d6. On\
    \ a roll of 1, the tyrannosaurus zombie runs out of zombies to disgorge and loses\
    \ this trait. If the tyrannosaurus zombie still has this trait when it dies, 1d4\
    \ normal zombies erupt from its corpse at the start of its next turn. These zombies\
    \ act on their own initiative count."
  "name": "Disgorge Zombie"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the tyrannosaurus zombie to 0 hit points, it must make\
    \ a Constitution saving throw with a DC of 5+the damage taken, unless the damage\
    \ is radiant or from a critical hit. On a success, the zombie drops to 1 hit point\
    \ instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tyrannosaurus zombie makes two attacks: one with its bite and one with\
    \ its tail. It can't make both attacks against the same target."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12\
    \ + 7) piercing damage. If the target is a Medium or smaller creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 17). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained)\
    \ and the tyrannosaurus zombie can't bite another target or disgorge zombies."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8\
    \ + 7) bludgeoning damage."
  "name": "Tail"
"source":
- "ToA"
name: Tyrannosaurus Zombie
image: "[[Tyrannosaurus Zombie.png]]"
---

# Tyrannosaurus Zombie

```statblock
"name": "Tyrannosaurus Zombie"
"size": "Huge"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "136"
"hit_dice": "13d12 + 52"
"stats":
- !!int "25"
- !!int "6"
- !!int "19"
- !!int "1"
- !!int "3"
- !!int "5"
"speed": "walk 40 ft."
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 6"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the tyrannosaurus zombie can disgorge a normal [zombie](/compendium/bestiary/undead/zombie.md),\
    \ which appears in an unoccupied space within 10 feet of it. The disgorged [zombie](/compendium/bestiary/undead/zombie.md)\
    \ acts on its own initiative count. After a zombie is disgorged, roll a d6. On\
    \ a roll of 1, the tyrannosaurus zombie runs out of zombies to disgorge and loses\
    \ this trait. If the tyrannosaurus zombie still has this trait when it dies, 1d4\
    \ normal zombies erupt from its corpse at the start of its next turn. These zombies\
    \ act on their own initiative count."
  "name": "Disgorge Zombie"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the tyrannosaurus zombie to 0 hit points, it must make\
    \ a Constitution saving throw with a DC of 5+the damage taken, unless the damage\
    \ is radiant or from a critical hit. On a success, the zombie drops to 1 hit point\
    \ instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tyrannosaurus zombie makes two attacks: one with its bite and one with\
    \ its tail. It can't make both attacks against the same target."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12\
    \ + 7) piercing damage. If the target is a Medium or smaller creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 17). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained)\
    \ and the tyrannosaurus zombie can't bite another target or disgorge zombies."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8\
    \ + 7) bludgeoning damage."
  "name": "Tail"
"source":
- "ToA"
"image": "[[Tyrannosaurus Zombie.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 241*

## Description

Several new zombie variants are presented below. For more information on zombies, see the Monster Manual.

**Ankylosaurus Zombie.** This creature is slow and barely aware of its surroundings.

**Girallon Zombie.** Girallons are four-armed apes with white fur. Girallon zombies are slower than their non-undead counterparts but no less fierce. The necromantic energy empowering them fuels their murderous hearts and their hunger for living flesh.

**Tyrannosaurus Zombie.** A tyrannosaurus zombie has a gullet full of smaller zombies, which it can disgorge. These zombies aren't under the tyrannosaurus zombie's control.