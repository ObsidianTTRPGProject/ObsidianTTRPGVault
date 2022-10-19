---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/elemental
- monster/environment/underdark
- monster/environment/urban
aliases: ["Water Weird"]
statblock: true
"name": "Water Weird"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "58"
"hit_dice": "9d10 + 9"
"stats":
- !!int "17"
- !!int "16"
- !!int "13"
- !!int "11"
- !!int "10"
- !!int "10"
"speed": "walk 0 ft., swim 60 ft."
"damage_resistances": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, grappled, paralyzed, poisoned, restrained, prone,\
  \ unconscious"
"senses": "blindsight 30 ft., passive Perception 10"
"languages": "understands Aquan but doesn't speak"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The water weird is [invisible](/rules/conditions.md#invisible) while fully\
    \ immersed in water."
  "name": "Invisible in Water"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The water weird dies if it leaves the water to which it is bound or if\
    \ that water is destroyed."
  "name": "Water Bound"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 13 (3d6\
    \ + 3) bludgeoning damage. If the target is Medium or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13) and pulled 5 feet toward the water weird. Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained), the water\
    \ weird tries to drown it, and the water weird can't constrict another target."
  "name": "Constrict"
"source":
- "MM"
- "PotA"
- "TftYP"
- "DIP"
- "SLW"
- "MOT"
- "IDRotF"
- "CM"
- "JttRC"
name: Water Weird
image: "[[Water Weird.png]]"
---

# Water Weird

```statblock
"name": "Water Weird"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "58"
"hit_dice": "9d10 + 9"
"stats":
- !!int "17"
- !!int "16"
- !!int "13"
- !!int "11"
- !!int "10"
- !!int "10"
"speed": "walk 0 ft., swim 60 ft."
"damage_resistances": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, grappled, paralyzed, poisoned, restrained, prone,\
  \ unconscious"
"senses": "blindsight 30 ft., passive Perception 10"
"languages": "understands Aquan but doesn't speak"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The water weird is [invisible](/rules/conditions.md#invisible) while fully\
    \ immersed in water."
  "name": "Invisible in Water"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The water weird dies if it leaves the water to which it is bound or if\
    \ that water is destroyed."
  "name": "Water Bound"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 13 (3d6\
    \ + 3) bludgeoning damage. If the target is Medium or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13) and pulled 5 feet toward the water weird. Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained), the water\
    \ weird tries to drown it, and the water weird can't constrict another target."
  "name": "Constrict"
"source":
- "MM"
- "PotA"
- "TftYP"
- "DIP"
- "SLW"
- "MOT"
- "IDRotF"
- "CM"
- "JttRC"
"image": "[[Water Weird.png]]"
```
^statblock

*Source: Monster Manual p. 299, Princes of the Apocalypse, Tales from the Yawning Portal, Dragon of Icespire Peak, Storm Lord's Wrath, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, Journeys through the Radiant Citadel*

## Description

A water weird is an elemental guardian bound to a specific water-filled location, such as a pool or fountain.

Invisible while immersed in water, its serpentine shape becomes clear only when it emerges to attack, using its coils to crush any creature other than its summoner and those its summoner declares as off limits. When slain, a water weird becomes an inanimate pool of water.

**Good and Evil Weirds.** Like most elementals, a water weird has no concept of good or evil. However, a water weird bound to a sacred or befouled source of water begins to take on the nature of that site, becoming neutral good or neutral evil.

A neutral good water weird tries to frighten away interlopers rather than kill them, while a neutral evil water weird kills its victims for pleasure and might turn against its summoner. A water weird loses its evil alignment if its waters are cleansed with a [purify food and drink](/compendium/spells/purify-food-and-drink.md) spell.

**Elemental Nature.** A water weird doesn't require air, food, drink, or sleep.

## Environment

underdark, urban