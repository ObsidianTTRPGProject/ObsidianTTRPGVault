---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/small
- monster/type/humanoid/kobold
- monster/environment/arctic
- monster/environment/desert
- monster/environment/coastal
- monster/environment/grassland
- monster/environment/hill
- monster/environment/urban
- monster/environment/forest
aliases: ["Kobold Commoner"]
statblock: true
"name": "Kobold Commoner"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "3"
"hit_dice": "1d6"
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
  "desc": "While in sunlight, The kobold commoner has disadvantage on attack rolls,\
    \ as well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kobold commoner has advantage on an attack roll against a creature\
    \ if at least one of their allies is within 5 feet of the creature and the ally\
    \ isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4\
    \ - 1) bludgeoning damage."
  "name": "Club"
"source":
- "TftYP"
name: Kobold Commoner
image: "[[Kobold Commoner.png]]"
---

# Kobold Commoner

```statblock
"name": "Kobold Commoner"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "3"
"hit_dice": "1d6"
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
  "desc": "While in sunlight, The kobold commoner has disadvantage on attack rolls,\
    \ as well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kobold commoner has advantage on an attack roll against a creature\
    \ if at least one of their allies is within 5 feet of the creature and the ally\
    \ isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4\
    \ - 1) bludgeoning damage."
  "name": "Club"
"source":
- "TftYP"
"image": "[[Kobold Commoner.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 18*

## Environment

arctic, desert, coastal, grassland, hill, urban, forest