---
cssclass: json5e-monster
tags:
- compendium/src/psi
- monster/size/tiny
- monster/type/undead
- monster/environment/swamp
- monster/environment/urban
aliases: ["Zombie Rat"]
statblock: true
"name": "Zombie Rat"
"size": "Tiny"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "11"
- !!int "9"
- !!int "2"
- !!int "10"
- !!int "4"
"speed": "walk 20 ft."
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the rat to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the rat drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage."
  "name": "Bite"
"source":
- "PSI"
name: Zombie Rat
image: "[[Zombie Rat.png]]"
---

# Zombie Rat

```statblock
"name": "Zombie Rat"
"size": "Tiny"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "11"
- !!int "9"
- !!int "2"
- !!int "10"
- !!int "4"
"speed": "walk 20 ft."
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the rat to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the rat drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage."
  "name": "Bite"
"source":
- "PSI"
"image": "[[Zombie Rat.png]]"
```
^statblock

*Source: Plane Shift: Innistrad p. 17*

## Environment

swamp, urban