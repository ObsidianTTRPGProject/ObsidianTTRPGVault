---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/tiny
- monster/type/fiend/demon
aliases: ["Abyssal Chicken"]
statblock: true
"name": "Abyssal Chicken"
"size": "Tiny"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"stats":
- !!int "6"
- !!int "14"
- !!int "13"
- !!int "4"
- !!int "9"
- !!int "5"
"speed": "walk 30 ft., fly 30 ft. (see bad flier below)"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "blinded, poisoned"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 9"
"languages": "understands Abyssal but can't speak"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abyssal chicken falls at the end of a turn if it's airborne and the\
    \ only thing holding it aloft is its flying speed."
  "name": "Bad Flier"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abyssal chicken makes two attacks: one with its bite and one with its\
    \ claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Claws"
"source":
- "BGDIA"
name: Abyssal Chicken
image: "[[Abyssal Chicken.png]]"
---

# Abyssal Chicken

```statblock
"name": "Abyssal Chicken"
"size": "Tiny"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"stats":
- !!int "6"
- !!int "14"
- !!int "13"
- !!int "4"
- !!int "9"
- !!int "5"
"speed": "walk 30 ft., fly 30 ft. (see bad flier below)"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "blinded, poisoned"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 9"
"languages": "understands Abyssal but can't speak"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abyssal chicken falls at the end of a turn if it's airborne and the\
    \ only thing holding it aloft is its flying speed."
  "name": "Bad Flier"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abyssal chicken makes two attacks: one with its bite and one with its\
    \ claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Claws"
"source":
- "BGDIA"
"image": "[[Abyssal Chicken.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 97*

## Description

Abyssal chickens are carnivorous, temperamental, tasty bottom-feeders native to the Abyss. They beat their leathery wings to scare predators and to help them run faster, and they taste like fatty chicken.

With your permission, a character who casts the [find familiar](/compendium/spells/find-familiar.md) spell can henceforth choose to conjure an abyssal chicken instead of a raven.