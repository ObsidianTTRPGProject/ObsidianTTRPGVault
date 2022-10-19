---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/beast
- monster/environment/grassland
- monster/environment/hill
- monster/environment/desert
aliases: ["Vulture"]
statblock: true
"name": "Vulture"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "5"
"hit_dice": "1d8 + 1"
"stats":
- !!int "7"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "12"
- !!int "4"
"speed": "walk 10 ft., fly 50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vulture has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight or smell."
  "name": "Keen Sight and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vulture has advantage on an attack roll against a creature if at least\
    \ one of the vulture's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ piercing damage."
  "name": "Beak"
"source":
- "MM"
- "RoT"
- "ToA"
- "BGDIA"
- "CM"
- "WBtW"
name: Vulture
image: "[[Vulture.png]]"
---

# Vulture

```statblock
"name": "Vulture"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "5"
"hit_dice": "1d8 + 1"
"stats":
- !!int "7"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "12"
- !!int "4"
"speed": "walk 10 ft., fly 50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vulture has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight or smell."
  "name": "Keen Sight and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vulture has advantage on an attack roll against a creature if at least\
    \ one of the vulture's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ piercing damage."
  "name": "Beak"
"source":
- "MM"
- "RoT"
- "ToA"
- "BGDIA"
- "CM"
- "WBtW"
"image": "[[Vulture.png]]"
```
^statblock

*Source: Monster Manual p. 339, The Rise of Tiamat, Tomb of Annihilation, Baldur's Gate: Descent Into Avernus, Candlekeep Mysteries, The Wild Beyond the Witchlight*

## Environment

grassland, hill, desert