---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/small
- monster/type/undead
aliases: ["Icewind Kobold Zombie"]
statblock: true
"name": "Icewind Kobold Zombie"
"size": "Small"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "9"
"hp": !!int "19"
"hit_dice": "3d6 + 9"
"stats":
- !!int "8"
- !!int "6"
- !!int "16"
- !!int "3"
- !!int "6"
- !!int "3"
"speed": "walk 20 ft."
"saves":
  "Wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands Common and Draconic but can't speak"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) piercing damage."
  "name": "Javelin"
"source":
- "IDRotF"
name: Icewind Kobold Zombie
image: "[[Icewind Kobold Zombie.png]]"
---

# Icewind Kobold Zombie

```statblock
"name": "Icewind Kobold Zombie"
"size": "Small"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "9"
"hp": !!int "19"
"hit_dice": "3d6 + 9"
"stats":
- !!int "8"
- !!int "6"
- !!int "16"
- !!int "3"
- !!int "6"
- !!int "3"
"speed": "walk 20 ft."
"saves":
  "Wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands Common and Draconic but can't speak"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) piercing damage."
  "name": "Javelin"
"source":
- "IDRotF"
"image": "[[Icewind Kobold Zombie.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 297*

## Description

The necromancer Vellynne Harpell has Icewind kobold guides in her employ, including a pair that died and were turned into zombies using [animate dead](/compendium/spells/animate-dead.md) spells. The cold climate helps to preserve their dead flesh.