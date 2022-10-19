---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/large
- monster/type/undead
- monster/environment/forest
- monster/environment/swamp
aliases: ["Undead Shambling Mound"]
statblock: true
"name": "Undead Shambling Mound"
"size": "Large"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "18"
- !!int "8"
- !!int "16"
- !!int "5"
- !!int "10"
- !!int "5"
"speed": "walk 20 ft., swim 20 ft."
"skillsaves":
  "Stealth": !!int "2"
"damage_resistances": "cold, fire"
"damage_immunities": "necrotic, poison"
"condition_immunities": "blinded, deafened, exhaustion, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the shambling mound is subjected to necrotic damage, it takes\
    \ no damage and regains a number of hit points equal to the necrotic damage dealt."
  "name": "Necrotic Absorption"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shambling mound makes two slam attacks. If both attacks hit a Medium\
    \ or smaller target, the target is [grappled](/rules/conditions.md#grappled) (escape\
    \ DC 14), and the shambling mound uses its Engulf on it."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shambling mound engulfs a Medium or smaller creature [grappled](/rules/conditions.md#grappled)\
    \ by it. The engulfed target is [blinded](/rules/conditions.md#blinded), [restrained](/rules/conditions.md#restrained),\
    \ and unable to breathe, and it must succeed on a DC 14 Constitution saving throw\
    \ at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage.\
    \ If the mound moves, the engulfed target moves with it. The mound can have only\
    \ one creature engulfed at a time."
  "name": "Engulf"
"source":
- "WDMM"
name: Undead Shambling Mound
image: "[[Undead Shambling Mound.png]]"
---

# Undead Shambling Mound

```statblock
"name": "Undead Shambling Mound"
"size": "Large"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "18"
- !!int "8"
- !!int "16"
- !!int "5"
- !!int "10"
- !!int "5"
"speed": "walk 20 ft., swim 20 ft."
"skillsaves":
  "Stealth": !!int "2"
"damage_resistances": "cold, fire"
"damage_immunities": "necrotic, poison"
"condition_immunities": "blinded, deafened, exhaustion, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the shambling mound is subjected to necrotic damage, it takes\
    \ no damage and regains a number of hit points equal to the necrotic damage dealt."
  "name": "Necrotic Absorption"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shambling mound makes two slam attacks. If both attacks hit a Medium\
    \ or smaller target, the target is [grappled](/rules/conditions.md#grappled) (escape\
    \ DC 14), and the shambling mound uses its Engulf on it."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shambling mound engulfs a Medium or smaller creature [grappled](/rules/conditions.md#grappled)\
    \ by it. The engulfed target is [blinded](/rules/conditions.md#blinded), [restrained](/rules/conditions.md#restrained),\
    \ and unable to breathe, and it must succeed on a DC 14 Constitution saving throw\
    \ at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage.\
    \ If the mound moves, the engulfed target moves with it. The mound can have only\
    \ one creature engulfed at a time."
  "name": "Engulf"
"source":
- "WDMM"
"image": "[[Undead Shambling Mound.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 142*

## Description

Made entirely of skulls and bones.

## Environment

forest, swamp