---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/medium
- monster/type/construct
aliases: ["Swarm of Animated Books"]
statblock: true
"name": "Swarm of Animated Books"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "10"
- !!int "13"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 0 ft., fly 30 ft. (hover)"
"damage_vulnerabilities": "fire"
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained, stunned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the swarm is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the swarm move\
    \ or act, that creature must succeed on a DC 15 Wisdom (Perception) check to discern\
    \ that the swarm is animate."
  "name": "False Objects"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a 1-foot-tall, 8-inch-wide, 2-inch-thick\
    \ object. The swarm can't regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's\
    \ space. Hit: 6 (2d4 + 1) bludgeoning damage, or 3 (1d4 + 1) bludgeoning damage\
    \ if the swarm has half its hit points or fewer."
  "name": "Book Club"
"source":
- "CM"
name: Swarm of Animated Books
image: "[[Swarm of Animated Books.png]]"
---

# Swarm of Animated Books

```statblock
"name": "Swarm of Animated Books"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "10"
- !!int "13"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 0 ft., fly 30 ft. (hover)"
"damage_vulnerabilities": "fire"
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained, stunned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the swarm is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the swarm move\
    \ or act, that creature must succeed on a DC 15 Wisdom (Perception) check to discern\
    \ that the swarm is animate."
  "name": "False Objects"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a 1-foot-tall, 8-inch-wide, 2-inch-thick\
    \ object. The swarm can't regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's\
    \ space. Hit: 6 (2d4 + 1) bludgeoning damage, or 3 (1d4 + 1) bludgeoning damage\
    \ if the swarm has half its hit points or fewer."
  "name": "Book Club"
"source":
- "CM"
"image": "[[Swarm of Animated Books.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 19*