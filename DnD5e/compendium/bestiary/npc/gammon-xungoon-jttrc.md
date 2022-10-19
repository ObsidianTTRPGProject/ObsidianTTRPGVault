---
cssclass: json5e-monster
tags:
- compendium/src/jttrc
- monster/size/small
- monster/type/humanoid/kobold
- monster/environment/arctic
- monster/environment/desert
- monster/environment/coastal
- monster/environment/grassland
- monster/environment/hill
- monster/environment/urban
- monster/environment/forest
aliases: ["Gammon Xungoon"]
statblock: true
"name": "Gammon Xungoon"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Chaotic Good"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any one language (usually Common), Draconic"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Gammon has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gammon has advantage on an attack roll against a creature if at least one\
    \ of their allies is within 5 feet of the creature and the ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Club"
"source":
- "JttRC"
name: Gammon Xungoon
image: "[[Gammon Xungoon.png]]"
---

# Gammon Xungoon

```statblock
"name": "Gammon Xungoon"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Chaotic Good"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any one language (usually Common), Draconic"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Gammon has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gammon has advantage on an attack roll against a creature if at least one\
    \ of their allies is within 5 feet of the creature and the ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Club"
"source":
- "JttRC"
"image": "[[Gammon Xungoon.png]]"
```
^statblock

*Source: Journeys through the Radiant Citadel p. 345*

## Environment

arctic, desert, coastal, grassland, hill, urban, forest