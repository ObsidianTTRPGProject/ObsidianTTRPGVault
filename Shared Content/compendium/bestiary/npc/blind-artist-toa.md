---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/undead
- monster/environment/urban
aliases: ["Blind Artist"]
statblock: true
"name": "Blind Artist"
"size": "Medium"
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
"condition_immunities": "blinded, poisoned"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 8"
"languages": "understands all languages it spoke in life but can't speak"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the artist to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the artist drops to 1 hit point instead."
  "name": "Undead Fortitude"
"source":
- "ToA"
name: Blind Artist
image: "[[Blind Artist.png]]"
---

# Blind Artist

```statblock
"name": "Blind Artist"
"size": "Medium"
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
"condition_immunities": "blinded, poisoned"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 8"
"languages": "understands all languages it spoke in life but can't speak"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the artist to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the artist drops to 1 hit point instead."
  "name": "Undead Fortitude"
"source":
- "ToA"
"image": "[[Blind Artist.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 164*

## Environment

urban