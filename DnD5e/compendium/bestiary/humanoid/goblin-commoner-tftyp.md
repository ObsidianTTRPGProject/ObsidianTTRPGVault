---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/small
- monster/type/humanoid/goblinoid
- monster/environment/arctic
- monster/environment/desert
- monster/environment/coastal
- monster/environment/grassland
- monster/environment/hill
- monster/environment/urban
- monster/environment/forest
aliases: ["Goblin Commoner"]
statblock: true
"name": "Goblin Commoner"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "3"
"hit_dice": "1d6"
"stats":
- !!int "8"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any one language (usually Common), Goblin"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goblin commoner can take the Disengage or Hide action as a bonus action\
    \ on each of its turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4\
    \ - 1) bludgeoning damage."
  "name": "Club"
"source":
- "TftYP"
name: Goblin Commoner
image: "[[Goblin Commoner.png]]"
---

# Goblin Commoner

```statblock
"name": "Goblin Commoner"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "3"
"hit_dice": "1d6"
"stats":
- !!int "8"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any one language (usually Common), Goblin"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goblin commoner can take the Disengage or Hide action as a bonus action\
    \ on each of its turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4\
    \ - 1) bludgeoning damage."
  "name": "Club"
"source":
- "TftYP"
"image": "[[Goblin Commoner.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 24*

## Environment

arctic, desert, coastal, grassland, hill, urban, forest