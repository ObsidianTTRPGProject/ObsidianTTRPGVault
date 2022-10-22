---
cssclass: json5e-monster
tags:
- compendium/src/psd
- monster/size/large
- monster/type/undead
- monster/environment/urban
aliases: ["Zombie Horse"]
statblock: true
"name": "Zombie Horse"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "8"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"stats":
- !!int "13"
- !!int "6"
- !!int "16"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "walk 20 ft."
"saves":
  "Wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands all languages it spoke in life but can't speak"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Slam"
"source":
- "PSD"
name: Zombie Horse
image: "[[Zombie Horse.png]]"
---

# Zombie Horse

```statblock
"name": "Zombie Horse"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "8"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"stats":
- !!int "13"
- !!int "6"
- !!int "16"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "walk 20 ft."
"saves":
  "Wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands all languages it spoke in life but can't speak"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Slam"
"source":
- "PSD"
"image": "[[Zombie Horse.png]]"
```
^statblock

*Source: Plane Shift: Dominaria p. 17*

## Environment

urban