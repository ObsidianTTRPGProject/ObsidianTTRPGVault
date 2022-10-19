---
cssclass: json5e-monster
tags:
- compendium/src/oow
- monster/size/medium
- monster/type/construct
aliases: ["Replica Quadrone"]
statblock: true
"name": "Replica Quadrone"
"size": "Medium"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Modron, can understand Common but speaks only preprogrammed responses"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quadrone can't be compelled to act in a manner contrary to its nature\
    \ or its instructions."
  "name": "Axiomatic Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the replica quadrone dies, its body falls into a pile of parts (gears,\
    \ plates, screws, and wires), leaving behind its weapons and anything else it\
    \ was carrying."
  "name": "Dismantlable"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quadrone makes two fist attacks or four shortbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Shortbow"
"source":
- "OoW"
name: Replica Quadrone
image: "[[Replica Quadrone.png]]"
---

# Replica Quadrone

```statblock
"name": "Replica Quadrone"
"size": "Medium"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Modron, can understand Common but speaks only preprogrammed responses"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quadrone can't be compelled to act in a manner contrary to its nature\
    \ or its instructions."
  "name": "Axiomatic Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the replica quadrone dies, its body falls into a pile of parts (gears,\
    \ plates, screws, and wires), leaving behind its weapons and anything else it\
    \ was carrying."
  "name": "Dismantlable"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quadrone makes two fist attacks or four shortbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Shortbow"
"source":
- "OoW"
"image": "[[Replica Quadrone.png]]"
```
^statblock

*Source: The Orrery of the Wanderer p. 132*