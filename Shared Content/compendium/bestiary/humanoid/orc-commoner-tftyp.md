---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/humanoid/orc
- monster/environment/arctic
- monster/environment/desert
- monster/environment/coastal
- monster/environment/grassland
- monster/environment/hill
- monster/environment/urban
- monster/environment/forest
aliases: ["Orc Commoner"]
statblock: true
"name": "Orc Commoner"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Any alignment"
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
"languages": "any one language (usually Common), Orc"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, The orc commoner can move up to your speed toward a\
    \ hostile creature that they can see."
  "name": "Aggressive"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Club"
"source":
- "TftYP"
name: Orc Commoner
image: "[[Orc Commoner.png]]"
---

# Orc Commoner

```statblock
"name": "Orc Commoner"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Any alignment"
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
"languages": "any one language (usually Common), Orc"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, The orc commoner can move up to your speed toward a\
    \ hostile creature that they can see."
  "name": "Aggressive"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Club"
"source":
- "TftYP"
"image": "[[Orc Commoner.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 167*

## Environment

arctic, desert, coastal, grassland, hill, urban, forest