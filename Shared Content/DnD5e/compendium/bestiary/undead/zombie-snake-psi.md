---
cssclass: json5e-monster
tags:
- compendium/src/psi
- monster/size/tiny
- monster/type/undead
- monster/environment/grassland
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
- monster/environment/desert
- monster/environment/coastal
aliases: ["Zombie Snake"]
statblock: true
"name": "Zombie Snake"
"size": "Tiny"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "2"
- !!int "16"
- !!int "11"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"senses": "blindsight 10 ft., passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the snake to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the snake drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage, and the target must make a DC 10 Constitution saving throw, taking 5\
    \ (2d4) poison damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Bite"
"source":
- "PSI"
name: Zombie Snake
image: "[[Zombie Snake.png]]"
---

# Zombie Snake

```statblock
"name": "Zombie Snake"
"size": "Tiny"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "2"
- !!int "16"
- !!int "11"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"senses": "blindsight 10 ft., passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the snake to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the snake drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage, and the target must make a DC 10 Constitution saving throw, taking 5\
    \ (2d4) poison damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Bite"
"source":
- "PSI"
"image": "[[Zombie Snake.png]]"
```
^statblock

*Source: Plane Shift: Innistrad p. 17*

## Environment

grassland, forest, swamp, hill, desert, coastal