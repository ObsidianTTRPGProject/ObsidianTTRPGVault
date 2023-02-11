---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/huge
- monster/type/beast/dinosaur
- monster/environment/coastal
- monster/environment/hill
- monster/environment/mountain
aliases: ["Quetzalcoatlus"]
statblock: true
"name": "Quetzalcoatlus"
"size": "Huge"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "30"
"hit_dice": "4d12 + 4"
"stats":
- !!int "15"
- !!int "13"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 10 ft., fly 80 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quetzalcoatlus doesn't provoke an opportunity attack when it flies\
    \ out of an enemy's reach."
  "name": "Flyby"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 10 ft., one creature. Hit: 12 (3d6\
    \ + 2) piercing damage. If the quetzalcoatlus flew least 30 feet toward the target\
    \ immediately before the hit, the target takes an extra 10 (3d6) piercing damage."
  "name": "Bite"
"source":
- "MPMM"
- "VGM"
name: Quetzalcoatlus
image: "[[Quetzalcoatlus.png]]"
---

# Quetzalcoatlus

```statblock
"name": "Quetzalcoatlus"
"size": "Huge"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "30"
"hit_dice": "4d12 + 4"
"stats":
- !!int "15"
- !!int "13"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 10 ft., fly 80 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quetzalcoatlus doesn't provoke an opportunity attack when it flies\
    \ out of an enemy's reach."
  "name": "Flyby"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 10 ft., one creature. Hit: 12 (3d6\
    \ + 2) piercing damage. If the quetzalcoatlus flew least 30 feet toward the target\
    \ immediately before the hit, the target takes an extra 10 (3d6) piercing damage."
  "name": "Bite"
"source":
- "MPMM"
- "VGM"
"image": "[[Quetzalcoatlus.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 96, Volo's Guide to Monsters p. 140*

## Description

This giant relative of the pteranodon has a wingspan exceeding 30 feet. Although it can walk like a quadruped, it is more comfortable in the air.

## Environment

coastal, hill, mountain