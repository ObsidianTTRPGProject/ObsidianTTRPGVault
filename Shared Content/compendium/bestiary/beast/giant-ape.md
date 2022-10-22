---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/beast
- monster/environment/forest
aliases: ["Giant Ape"]
statblock: true
"name": "Giant Ape"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "157"
"hit_dice": "15d12 + 60"
"stats":
- !!int "23"
- !!int "14"
- !!int "18"
- !!int "7"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft., climb 40 ft."
"skillsaves":
  "Athletics": !!int "9"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "7"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ape makes two fist attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10\
    \ + 6) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30\
    \ (7d6 + 6) bludgeoning damage."
  "name": "Rock"
"source":
- "MM"
- "GoS"
name: Giant Ape
image: "[[Giant Ape.png]]"
---

# Giant Ape

```statblock
"name": "Giant Ape"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "157"
"hit_dice": "15d12 + 60"
"stats":
- !!int "23"
- !!int "14"
- !!int "18"
- !!int "7"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft., climb 40 ft."
"skillsaves":
  "Athletics": !!int "9"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "7"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ape makes two fist attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10\
    \ + 6) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30\
    \ (7d6 + 6) bludgeoning damage."
  "name": "Rock"
"source":
- "MM"
- "GoS"
"image": "[[Giant Ape.png]]"
```
^statblock

*Source: Monster Manual p. 323, Ghosts of Saltmarsh*

## Environment

forest