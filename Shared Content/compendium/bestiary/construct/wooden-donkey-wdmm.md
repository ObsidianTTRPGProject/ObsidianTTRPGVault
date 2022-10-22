---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/construct
- monster/environment/hill
- monster/environment/urban
- monster/environment/desert
aliases: ["Wooden Donkey"]
statblock: true
"name": "Wooden Donkey"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "14"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 40 ft."
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, frightened, paralyzed, petrified, poisoned"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The donkey is considered to be a Large animal for the purpose of determining\
    \ its carrying capacity."
  "name": "Beast of Burden"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The donkey has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [prone](/rules/conditions.md#prone)."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) bludgeoning damage."
  "name": "Hooves"
"source":
- "WDMM"
name: Wooden Donkey
image: "[[Wooden Donkey.png]]"
---

# Wooden Donkey

```statblock
"name": "Wooden Donkey"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "14"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 40 ft."
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, frightened, paralyzed, petrified, poisoned"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The donkey is considered to be a Large animal for the purpose of determining\
    \ its carrying capacity."
  "name": "Beast of Burden"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The donkey has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [prone](/rules/conditions.md#prone)."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) bludgeoning damage."
  "name": "Hooves"
"source":
- "WDMM"
"image": "[[Wooden Donkey.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 84*

## Description

A crude wooden constructs resembling a donkey. Each of these magic dummies has a body made of a wooden keg turned on its side. A head and neck made of wood and sackcloth is attached to one end of the keg. At the other end is a tail made from a straw broom. Each keg is held up by four 2-foot-long peg legs.

## Environment

hill, urban, desert