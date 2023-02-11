---
cssclass: json5e-monster
tags:
- compendium/src/oow
- monster/size/huge
- monster/type/beast
- monster/environment/underwater
- monster/environment/underdark
- monster/environment/forest
- monster/environment/swamp
- monster/environment/desert
aliases: ["Enormous Tentacle"]
statblock: true
"name": "Enormous Tentacle"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "60"
"hit_dice": "8d12 + 8"
"stats":
- !!int "19"
- !!int "14"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "blindsight 10 ft., passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tentacle can reach anywhere in the room."
  "name": "Reach"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 35 ft., one creature. Hit: 13 (2d8\
    \ + 4) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the creature is [restrained](/rules/conditions.md#restrained),\
    \ and the tentacle can't constrict another target."
  "name": "Constrict"
"source":
- "OoW"
name: Enormous Tentacle
image: "[[Enormous Tentacle.png]]"
---

# Enormous Tentacle

```statblock
"name": "Enormous Tentacle"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "60"
"hit_dice": "8d12 + 8"
"stats":
- !!int "19"
- !!int "14"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "blindsight 10 ft., passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tentacle can reach anywhere in the room."
  "name": "Reach"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 35 ft., one creature. Hit: 13 (2d8\
    \ + 4) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the creature is [restrained](/rules/conditions.md#restrained),\
    \ and the tentacle can't constrict another target."
  "name": "Constrict"
"source":
- "OoW"
"image": "[[Enormous Tentacle.png]]"
```
^statblock

*Source: The Orrery of the Wanderer p. 94*

## Environment

underwater, underdark, forest, swamp, desert