---
cssclass: json5e-monster
tags:
- compendium/src/mcv1sc
- monster/size/gargantuan
- monster/type/plant
aliases: ["Yggdrasti"]
statblock: true
"name": "Yggdrasti"
"size": "Gargantuan"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "112"
"hit_dice": "9d20 + 18"
"stats":
- !!int "20"
- !!int "10"
- !!int "15"
- !!int "3"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft., fly 60 ft. (hover)"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"damage_immunities": "lightning"
"condition_immunities": "blinded, deafened, exhaustion"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yggdrasti has 1d4 + 2 cavities in its trunk. Each cavity is big enough\
    \ to hold one Medium creature, two Small creatures, or eight Tiny creatures. A\
    \ creature inside a cavity has three-quarters cover against attacks and other\
    \ effects that originate outside the cavity. The yggdrasti's cavities aren't connected\
    \ to one another."
  "name": "Cavities"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the yggdrasti is motionless and rooted in the ground at the start of\
    \ combat, it looks just like a dead tree and has advantage on its initiative roll.\
    \ Moreover, if a creature hasn't observed the rooted yggdrasti move or act, that\
    \ creature must succeed on a DC 18 Intelligence (Investigation) check to discern\
    \ that the yggdrasti is animate."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the yggdrasti is subjected to lightning damage, it is unhurt, and the\
    \ lightning damage is instead divided evenly among all creatures it is grappling.\
    \ In addition, the yggdrasti regains one use of Lightning Discharge."
  "name": "Lightning Conduit"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yggdrasti doesn't require air or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yggdrasti makes two Root attacks and uses Lightning Discharge (if available)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage, and if the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). The yggdrasti has four roots, each of which can grapple one\
    \ target."
  "name": "Root"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yggdrasti shoots lightning at one creature within 120 feet of itself.\
    \ The target must make a DC 13 Dexterity saving throw, taking 31 (7d8) lightning\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Lightning Discharge (3/Day)"
"source":
- "MCV1SC"
name: Yggdrasti
image: "[[Yggdrasti.png]]"
---

# Yggdrasti

```statblock
"name": "Yggdrasti"
"size": "Gargantuan"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "112"
"hit_dice": "9d20 + 18"
"stats":
- !!int "20"
- !!int "10"
- !!int "15"
- !!int "3"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft., fly 60 ft. (hover)"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"damage_immunities": "lightning"
"condition_immunities": "blinded, deafened, exhaustion"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yggdrasti has 1d4 + 2 cavities in its trunk. Each cavity is big enough\
    \ to hold one Medium creature, two Small creatures, or eight Tiny creatures. A\
    \ creature inside a cavity has three-quarters cover against attacks and other\
    \ effects that originate outside the cavity. The yggdrasti's cavities aren't connected\
    \ to one another."
  "name": "Cavities"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the yggdrasti is motionless and rooted in the ground at the start of\
    \ combat, it looks just like a dead tree and has advantage on its initiative roll.\
    \ Moreover, if a creature hasn't observed the rooted yggdrasti move or act, that\
    \ creature must succeed on a DC 18 Intelligence (Investigation) check to discern\
    \ that the yggdrasti is animate."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the yggdrasti is subjected to lightning damage, it is unhurt, and the\
    \ lightning damage is instead divided evenly among all creatures it is grappling.\
    \ In addition, the yggdrasti regains one use of Lightning Discharge."
  "name": "Lightning Conduit"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yggdrasti doesn't require air or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yggdrasti makes two Root attacks and uses Lightning Discharge (if available)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage, and if the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). The yggdrasti has four roots, each of which can grapple one\
    \ target."
  "name": "Root"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yggdrasti shoots lightning at one creature within 120 feet of itself.\
    \ The target must make a DC 13 Dexterity saving throw, taking 31 (7d8) lightning\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Lightning Discharge (3/Day)"
"source":
- "MCV1SC"
"image": "[[Yggdrasti.png]]"
```
^statblock

*Source: Monster Compendium Volume 1: Spelljammer Creatures p. 13*

## Description

Thought to be cast-off splinters of Yggdrasil, the World Tree, yggdrasti look like gigantic, dead trees covered with barnacles. They fly through Wildspace and the Astral Sea with their topmost branches leading the way and their withered roots trailing behind them. Each one has its own gravity plane and air envelope.

Creatures sometimes try to hitch a ride on an yggdrasti to take advantage of its air envelope. A typical yggdrasti specimen has cavities inside its trunk in which Medium or smaller creatures can lurk.

Yggdrasti attack any settlements or spelljamming ships they come across without provocation. By using a speak with plants spell or similar magic, someone might be able to convince an yggdrasti to break off its attack, but the monster's innate hatred of other living things is extremely difficult for it to suppress.

Yggdrasti sometimes make landfall and disguise themselves as ordinary trees, burying their roots in the ground to pull off the deception. They can uproot themselves at any time and use their roots to shamble awkwardly across the ground, but flying is their preferred mode of travel.