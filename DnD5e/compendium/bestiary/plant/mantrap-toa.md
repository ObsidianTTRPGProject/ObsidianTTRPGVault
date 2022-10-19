---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/large
- monster/type/plant
aliases: ["Mantrap"]
statblock: true
"name": "Mantrap"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "7d10 + 7"
"stats":
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "2"
"speed": "walk 5 ft."
"condition_immunities": "blinded, deafened, exhaustion, prone"
"senses": "tremorsense 30 ft., passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mantrap detects any creatures nearby, it can use its reaction\
    \ to release pollen out to a radius of 30 feet. Any beast or humanoid within the\
    \ area must succeed on a DC 11 Wisdom saving throw or be forced to use all its\
    \ movement on its turns to get as close to the the mantrap as possible. An affected\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Attractive Pollen (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the mantrap remains motionless, it is indistinguishable from an ordinary\
    \ tropical plant."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one Medium or smaller creature.\
    \ Hit: The target is trapped inside the mantrap's leafy jaws. While trapped in\
    \ this way, the target is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ has total cover from an attacks and other effects outside the mantrap, and takes\
    \ 14 (4d6) acid damage at the start of each of the target's turns. If the mantrap\
    \ dies, the creature inside it is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it. A mantrap can engulf only one creature at a time."
  "name": "Engulf"
"source":
- "ToA"
name: Mantrap
image: "[[Mantrap.png]]"
---

# Mantrap

```statblock
"name": "Mantrap"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "7d10 + 7"
"stats":
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "2"
"speed": "walk 5 ft."
"condition_immunities": "blinded, deafened, exhaustion, prone"
"senses": "tremorsense 30 ft., passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mantrap detects any creatures nearby, it can use its reaction\
    \ to release pollen out to a radius of 30 feet. Any beast or humanoid within the\
    \ area must succeed on a DC 11 Wisdom saving throw or be forced to use all its\
    \ movement on its turns to get as close to the the mantrap as possible. An affected\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Attractive Pollen (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the mantrap remains motionless, it is indistinguishable from an ordinary\
    \ tropical plant."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one Medium or smaller creature.\
    \ Hit: The target is trapped inside the mantrap's leafy jaws. While trapped in\
    \ this way, the target is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ has total cover from an attacks and other effects outside the mantrap, and takes\
    \ 14 (4d6) acid damage at the start of each of the target's turns. If the mantrap\
    \ dies, the creature inside it is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it. A mantrap can engulf only one creature at a time."
  "name": "Engulf"
"source":
- "ToA"
"image": "[[Mantrap.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 227*

## Description

A mantrap is a giant carnivorous plant that resembles an oversized flytrap. To attract prey, the mantrap releases a pollen that magically draws creatures to it. Though it will snap its leafy jaws shut around any warm-blooded creature that strays within its reach, it prefers humanoid prey.