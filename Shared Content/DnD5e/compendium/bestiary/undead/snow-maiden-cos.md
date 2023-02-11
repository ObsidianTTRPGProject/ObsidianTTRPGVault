---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/medium
- monster/type/undead
- monster/environment/underdark
- monster/environment/urban
aliases: ["Snow Maiden"]
statblock: true
"name": "Snow Maiden"
"size": "Medium"
"type": "undead"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "1"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "walk 0 ft., fly 50 ft. (hover)"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned,\
  \ prone, restrained, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands all languages it knew in life but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The specter can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the specter has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6)\
    \ cold damage. The target must succeed on a DC 10 Constitution saving throw or\
    \ its hit point maximum is reduced by an amount equal to the damage taken. This\
    \ reduction lasts until the creature finishes a long rest. The target dies if\
    \ this effect reduces its hit point maximum to 0."
  "name": "Life Drain"
"source":
- "CoS"
name: Snow Maiden
image: "[[Snow Maiden.png]]"
---

# Snow Maiden

```statblock
"name": "Snow Maiden"
"size": "Medium"
"type": "undead"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "1"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "walk 0 ft., fly 50 ft. (hover)"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned,\
  \ prone, restrained, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands all languages it knew in life but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The specter can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the specter has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6)\
    \ cold damage. The target must succeed on a DC 10 Constitution saving throw or\
    \ its hit point maximum is reduced by an amount equal to the damage taken. This\
    \ reduction lasts until the creature finishes a long rest. The target dies if\
    \ this effect reduces its hit point maximum to 0."
  "name": "Life Drain"
"source":
- "CoS"
"image": "[[Snow Maiden.png]]"
```
^statblock

*Source: Curse of Strahd p. 159*

## Environment

underdark, urban