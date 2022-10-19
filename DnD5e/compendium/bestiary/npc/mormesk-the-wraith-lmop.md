---
cssclass: json5e-monster
tags:
- compendium/src/lmop
- monster/size/medium
- monster/type/undead
aliases: ["Mormesk the Wraith"]
statblock: true
"name": "Mormesk the Wraith"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "6"
- !!int "16"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "15"
"speed": "walk 0 ft., fly 60 ft."
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks that aren't silvered"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, grappled, paralyzed, petrified, poisoned, prone,\
  \ restrained"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Infernal"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wraith can move through an object or another creature, but can't stop\
    \ there."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the wraith has disadvantage on attack rolls and on Wisdom\
    \ ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 16 (3d8\
    \ + 3) necrotic damage, and the target must succeed on a DC 13 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ If this attack reduces the target's hit point maximum to 0, the target dies.\
    \ This reduction to the target's hit point maximum lasts until the target finishes\
    \ a long rest."
  "name": "Life Drain"
"source":
- "LMoP"
name: Mormesk the Wraith
image: "[[Mormesk the Wraith.png]]"
---

# Mormesk the Wraith

```statblock
"name": "Mormesk the Wraith"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "6"
- !!int "16"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "15"
"speed": "walk 0 ft., fly 60 ft."
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks that aren't silvered"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, grappled, paralyzed, petrified, poisoned, prone,\
  \ restrained"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Infernal"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wraith can move through an object or another creature, but can't stop\
    \ there."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the wraith has disadvantage on attack rolls and on Wisdom\
    \ ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 16 (3d8\
    \ + 3) necrotic damage, and the target must succeed on a DC 13 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ If this attack reduces the target's hit point maximum to 0, the target dies.\
    \ This reduction to the target's hit point maximum lasts until the target finishes\
    \ a long rest."
  "name": "Life Drain"
"source":
- "LMoP"
"image": "[[Mormesk the Wraith.png]]"
```
^statblock

*Source: Lost Mine of Phandelver p. 59*

## Description

A wraith is the incorporeal remnant of a particularly hateful being. Most wraiths can transform those they have slain into spectral undead servitors. Mormesk chooses not to, preferring to let the dead stay dead.