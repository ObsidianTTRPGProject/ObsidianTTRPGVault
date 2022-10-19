---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/small
- monster/type/construct
aliases: ["Animated Broom"]
statblock: true
"name": "Animated Broom"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "17"
"hit_dice": "5d6"
"stats":
- !!int "10"
- !!int "17"
- !!int "10"
- !!int "1"
- !!int "5"
- !!int "1"
"speed": "walk 0 ft., fly 50 ft. (hover)"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned, prone"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 7"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the broom is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the broom move\
    \ or act, that creature must succeed on a DC 15 Wisdom (Perception) check to discern\
    \ that the broom is animate."
  "name": "False Object"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The broom doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The broom makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) bludgeoning damage."
  "name": "Broomstick"
"source":
- "CM"
name: Animated Broom
image: "[[Animated Broom.png]]"
---

# Animated Broom

```statblock
"name": "Animated Broom"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "17"
"hit_dice": "5d6"
"stats":
- !!int "10"
- !!int "17"
- !!int "10"
- !!int "1"
- !!int "5"
- !!int "1"
"speed": "walk 0 ft., fly 50 ft. (hover)"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned, prone"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 7"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the broom is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the broom move\
    \ or act, that creature must succeed on a DC 15 Wisdom (Perception) check to discern\
    \ that the broom is animate."
  "name": "False Object"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The broom doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The broom makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) bludgeoning damage."
  "name": "Broomstick"
"source":
- "CM"
"image": "[[Animated Broom.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 20*