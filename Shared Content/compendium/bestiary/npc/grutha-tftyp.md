---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/huge
- monster/type/giant
- monster/environment/hill
aliases: ["Grutha"]
statblock: true
"name": "Grutha"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "105"
"hit_dice": "10d12 + 40"
"stats":
- !!int "21"
- !!int "8"
- !!int "19"
- !!int "5"
- !!int "9"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Giant"
"cr": "5"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Grutha makes two greatclub attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8\
    \ + 5) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21\
    \ (3d10 + 5) bludgeoning damage."
  "name": "Rock"
"source":
- "TftYP"
name: Grutha
image: "[[Grutha.png]]"
---

# Grutha

```statblock
"name": "Grutha"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "105"
"hit_dice": "10d12 + 40"
"stats":
- !!int "21"
- !!int "8"
- !!int "19"
- !!int "5"
- !!int "9"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Giant"
"cr": "5"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Grutha makes two greatclub attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8\
    \ + 5) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21\
    \ (3d10 + 5) bludgeoning damage."
  "name": "Rock"
"source":
- "TftYP"
"image": "[[Grutha.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 170*

## Environment

hill