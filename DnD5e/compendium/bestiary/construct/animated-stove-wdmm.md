---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/large
- monster/type/construct
aliases: ["Animated Stove"]
statblock: true
"name": "Animated Stove"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "50"
"hit_dice": "50d1"
"stats":
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "3"
- !!int "3"
- !!int "1"
"speed": "walk 30 ft."
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "3"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d8\
    \ + 2) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The stove belches fire in a 15-foot cone. Each creature in the area must\
    \ make a DC 10 Dexterity saving throw, taking 22 (4d10) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Belch Fire (Recharge 4-6)"
"source":
- "WDMM"
name: Animated Stove
image: "[[Animated Stove.png]]"
---

# Animated Stove

```statblock
"name": "Animated Stove"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "50"
"hit_dice": "50d1"
"stats":
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "3"
- !!int "3"
- !!int "1"
"speed": "walk 30 ft."
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "3"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d8\
    \ + 2) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The stove belches fire in a 15-foot cone. Each creature in the area must\
    \ make a DC 10 Dexterity saving throw, taking 22 (4d10) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Belch Fire (Recharge 4-6)"
"source":
- "WDMM"
"image": "[[Animated Stove.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 186*

## Description

The stove was given a semblance of life through an [animate objects](/compendium/spells/animate-objects.md) spell made permanent by a [wish](/compendium/spells/wish.md) spell.