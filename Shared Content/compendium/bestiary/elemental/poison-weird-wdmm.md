---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/large
- monster/type/elemental
- monster/environment/underdark
- monster/environment/urban
aliases: ["Poison Weird"]
statblock: true
"name": "Poison Weird"
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
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The weird is [invisible](/rules/conditions.md#invisible) while fully immersed\
    \ in toxic brew."
  "name": "Invisible in Water"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The weird dies if forced to leave the basin of toxic brew it inhabits,\
    \ or if a [purify food and drink](/compendium/spells/purify-food-and-drink.md)\
    \ spell is cast on the brew."
  "name": "Brew Bound"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature takes 10 (3d6) poison damage at the start of each of its turns\
    \ while [grappled](/rules/conditions.md#grappled) by a poison weird."
  "name": "Poisonous Body"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 13 (3d6\
    \ + 3) bludgeoning damage. If the target is Medium or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13) and pulled 5 feet toward the poison weird. Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained), the poison\
    \ weird tries to drown it, and the poison weird can't constrict another target."
  "name": "Constrict"
"source":
- "WDMM"
name: Poison Weird
image: "[[Poison Weird.png]]"
---

# Poison Weird

```statblock
"name": "Poison Weird"
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
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The weird is [invisible](/rules/conditions.md#invisible) while fully immersed\
    \ in toxic brew."
  "name": "Invisible in Water"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The weird dies if forced to leave the basin of toxic brew it inhabits,\
    \ or if a [purify food and drink](/compendium/spells/purify-food-and-drink.md)\
    \ spell is cast on the brew."
  "name": "Brew Bound"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature takes 10 (3d6) poison damage at the start of each of its turns\
    \ while [grappled](/rules/conditions.md#grappled) by a poison weird."
  "name": "Poisonous Body"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 13 (3d6\
    \ + 3) bludgeoning damage. If the target is Medium or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13) and pulled 5 feet toward the poison weird. Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained), the poison\
    \ weird tries to drown it, and the poison weird can't constrict another target."
  "name": "Constrict"
"source":
- "WDMM"
"image": "[[Poison Weird.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 127*

## Environment

underdark, urban