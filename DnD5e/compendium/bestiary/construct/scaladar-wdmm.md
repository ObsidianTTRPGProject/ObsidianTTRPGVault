---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/huge
- monster/type/construct
aliases: ["Scaladar"]
statblock: true
"name": "Scaladar"
"size": "Huge"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "19"
"hp": !!int "94"
"hit_dice": "7d12 + 49"
"stats":
- !!int "19"
- !!int "10"
- !!int "25"
- !!int "1"
- !!int "12"
- !!int "1"
"speed": "walk 30 ft., climb 20 ft."
"damage_resistances": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "force, lightning, poison"
"condition_immunities": "charmed, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the scaladar is subjected to lightning damage, it takes no damage,\
    \ and its sting deals an extra 11 (2d10) lightning damage until the end of its\
    \ next turn."
  "name": "Lightning Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The scaladar knows the location of other scaladar within 100 feet of it,\
    \ and it can sense when any of them take damage."
  "name": "Scaladar Link"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The scaladar makes three attacks: two with its claws and one with its sting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 10 (1d12\
    \ + 4) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). The scaladar has two claws, each of which can grapple one target."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage plus 11 (2d10) lightning damage."
  "name": "Sting"
"source":
- "WDMM"
name: Scaladar
image: "[[Scaladar.png]]"
---

# Scaladar

```statblock
"name": "Scaladar"
"size": "Huge"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "19"
"hp": !!int "94"
"hit_dice": "7d12 + 49"
"stats":
- !!int "19"
- !!int "10"
- !!int "25"
- !!int "1"
- !!int "12"
- !!int "1"
"speed": "walk 30 ft., climb 20 ft."
"damage_resistances": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "force, lightning, poison"
"condition_immunities": "charmed, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the scaladar is subjected to lightning damage, it takes no damage,\
    \ and its sting deals an extra 11 (2d10) lightning damage until the end of its\
    \ next turn."
  "name": "Lightning Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The scaladar knows the location of other scaladar within 100 feet of it,\
    \ and it can sense when any of them take damage."
  "name": "Scaladar Link"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The scaladar makes three attacks: two with its claws and one with its sting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 10 (1d12\
    \ + 4) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). The scaladar has two claws, each of which can grapple one target."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage plus 11 (2d10) lightning damage."
  "name": "Sting"
"source":
- "WDMM"
"image": "[[Scaladar.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 315*

## Description

Scaladar are constructs created by Trobriand, one of Halaster's apprentices. They move and attack like giant scorpions, grabbing prey with two large pincer claws and delivering a deadly pulse of lightning with their metal stinger tails.