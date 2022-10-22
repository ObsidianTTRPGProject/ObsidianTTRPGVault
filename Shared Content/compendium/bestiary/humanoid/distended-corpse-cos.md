---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/medium
- monster/type/humanoid/any-race
- monster/environment/arctic
- monster/environment/desert
- monster/environment/coastal
- monster/environment/grassland
- monster/environment/hill
- monster/environment/urban
- monster/environment/forest
aliases: ["Distended Corpse"]
statblock: true
"name": "Distended Corpse"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
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
"speed": "walk 20 ft."
"condition_immunities": "charmed, frightened"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a corpse is reduced to 0 hit points, it splits open, disgorging a\
    \ [swarm of poisonous snakes](/compendium/bestiary/beast/swarm-of-poisonous-snakes.md).\
    \ The snakes are hungry and fight until slain."
  "name": "Snake-Swollen"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Club"
"source":
- "CoS"
name: Distended Corpse
image: "[[Distended Corpse.png]]"
---

# Distended Corpse

```statblock
"name": "Distended Corpse"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
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
"speed": "walk 20 ft."
"condition_immunities": "charmed, frightened"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a corpse is reduced to 0 hit points, it splits open, disgorging a\
    \ [swarm of poisonous snakes](/compendium/bestiary/beast/swarm-of-poisonous-snakes.md).\
    \ The snakes are hungry and fight until slain."
  "name": "Snake-Swollen"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Club"
"source":
- "CoS"
"image": "[[Distended Corpse.png]]"
```
^statblock

*Source: Curse of Strahd p. 165*

## Environment

arctic, desert, coastal, grassland, hill, urban, forest