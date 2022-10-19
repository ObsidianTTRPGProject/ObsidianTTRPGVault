---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/large
- monster/type/construct
aliases: ["Headless Iron Golem"]
statblock: true
"name": "Headless Iron Golem"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "150"
"hit_dice": "10d10 + 50"
"stats":
- !!int "24"
- !!int "9"
- !!int "20"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "walk 30 ft."
"damage_immunities": "fire; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the golem is subjected to fire damage, it takes no damage and\
    \ instead regains a number of hit points equal to the fire damage dealt."
  "name": "Fire Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "It is [blinded](/rules/conditions.md#blinded) and [deafened](/rules/conditions.md#deafened),\
    \ giving it disadvantage on all its attack rolls, and it can't use its Poison\
    \ Breath."
  "name": "Headless"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8\
    \ + 7) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10\
    \ + 7) slashing damage."
  "name": "Sword"
"source":
- "IDRotF"
name: Headless Iron Golem
image: "[[Headless Iron Golem.png]]"
---

# Headless Iron Golem

```statblock
"name": "Headless Iron Golem"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "150"
"hit_dice": "10d10 + 50"
"stats":
- !!int "24"
- !!int "9"
- !!int "20"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "walk 30 ft."
"damage_immunities": "fire; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the golem is subjected to fire damage, it takes no damage and\
    \ instead regains a number of hit points equal to the fire damage dealt."
  "name": "Fire Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "It is [blinded](/rules/conditions.md#blinded) and [deafened](/rules/conditions.md#deafened),\
    \ giving it disadvantage on all its attack rolls, and it can't use its Poison\
    \ Breath."
  "name": "Headless"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8\
    \ + 7) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10\
    \ + 7) slashing damage."
  "name": "Sword"
"source":
- "IDRotF"
"image": "[[Headless Iron Golem.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 244*

## Description

The mightiest of the golems, the iron golem is a massive, towering giant wrought of heavy metal. An iron golem's shape can be worked into any form, though most are fashioned to look like giant suits of armor. Its fist can destroy creatures with a single blow, and its clanging steps shake the earth beneath its feet. Iron golems wield enormous blades to extend their reach, and all can belch clouds of deadly poison.

An iron golem's body is smelted with rare tinctures and admixtures. Though other golems bear weaknesses inherent in their materials or the power of the elemental spirit bound within them, iron golems were designed to be nearly invulnerable. Their iron bodies imprison the spirits that drive them, and are susceptible only to weapons imbued with magic or the strength of adamantine.