---
cssclass: json5e-monster
tags:
- compendium/src/oow
- monster/size/large
- monster/type/construct
aliases: ["Replica Pentadrone"]
statblock: true
"name": "Replica Pentadrone"
"size": "Large"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"hp": !!int "32"
"hit_dice": "5d10 + 5"
"stats":
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "13"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Modron, can understand Common but speaks only preprogrammed responses"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pentadrone can't be compelled to act in a manner contrary to its nature\
    \ or its instructions."
  "name": "Axiomatic Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the replica pentadrone dies, its body falls into a pile of parts (gears,\
    \ plates, screws, and wires), leaving behind its weapons and anything else it\
    \ was carrying."
  "name": "Dismantlable"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pentadrone makes five arm attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage."
  "name": "Arm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pentadrone exhales a 30-foot cone of gas. Each creature in that area\
    \ must succeed on a DC 11 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Paralysis Gas (Recharge 5-6)"
"source":
- "OoW"
name: Replica Pentadrone
image: "[[Replica Pentadrone.png]]"
---

# Replica Pentadrone

```statblock
"name": "Replica Pentadrone"
"size": "Large"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"hp": !!int "32"
"hit_dice": "5d10 + 5"
"stats":
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "13"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Modron, can understand Common but speaks only preprogrammed responses"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pentadrone can't be compelled to act in a manner contrary to its nature\
    \ or its instructions."
  "name": "Axiomatic Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the replica pentadrone dies, its body falls into a pile of parts (gears,\
    \ plates, screws, and wires), leaving behind its weapons and anything else it\
    \ was carrying."
  "name": "Dismantlable"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pentadrone makes five arm attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage."
  "name": "Arm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pentadrone exhales a 30-foot cone of gas. Each creature in that area\
    \ must succeed on a DC 11 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Paralysis Gas (Recharge 5-6)"
"source":
- "OoW"
"image": "[[Replica Pentadrone.png]]"
```
^statblock

*Source: The Orrery of the Wanderer p. 132*