---
cssclass: json5e-monster
tags:
- compendium/src/psa
- monster/size/huge
- monster/type/beast
- monster/environment/underwater
- monster/environment/underdark
- monster/environment/forest
- monster/environment/swamp
- monster/environment/desert
aliases: ["River Serpent"]
statblock: true
"name": "River Serpent"
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
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8\
    \ + 4) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the creature is [restrained](/rules/conditions.md#restrained),\
    \ and the serpent can't constrict another target."
  "name": "Constrict"
"source":
- "PSA"
name: River Serpent
image: "[[River Serpent.png]]"
---

# River Serpent

```statblock
"name": "River Serpent"
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
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8\
    \ + 4) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the creature is [restrained](/rules/conditions.md#restrained),\
    \ and the serpent can't constrict another target."
  "name": "Constrict"
"source":
- "PSA"
"image": "[[River Serpent.png]]"
```
^statblock

*Source: Plane Shift: Amonkhet p. 38*

## Description

**The Luxa River.** The Luxa river is an abundant source of life, fertilizing the lush valley around Naktamun and providing water to humanoids and animals alike. It is also a vibrant habitat for countless creatures, including many species of birds, fish, and frogs. [Crocodiles](/compendium/bestiary/beast/crocodile.md) and [hippopotamuses](/compendium/bestiary/beast/hippopotamus-psa.md) can be a danger to boats and barges, but perhaps the most feared denizens of the river are the [giant serpents](/compendium/bestiary/monstrosity/giant-river-serpent-psa.md) known to lurk near its bottom. When roused to anger, they can sink fishing boats by the dozens and flood the shore.

## Environment

underwater, underdark, forest, swamp, desert