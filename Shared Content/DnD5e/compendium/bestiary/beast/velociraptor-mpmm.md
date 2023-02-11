---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/tiny
- monster/type/beast/dinosaur
- monster/environment/forest
- monster/environment/grassland
aliases: ["Velociraptor"]
statblock: true
"name": "Velociraptor"
"size": "Tiny"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"stats":
- !!int "6"
- !!int "14"
- !!int "13"
- !!int "4"
- !!int "12"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The velociraptor has advantage on an attack roll against a creature if\
    \ at least one of the velociraptor's allies is within 5 feet of the creature and\
    \ the ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The velociraptor makes one Bite attack and one Claw attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claw"
"source":
- "MPMM"
- "VGM"
name: Velociraptor
image: "[[Velociraptor.png]]"
---

# Velociraptor

```statblock
"name": "Velociraptor"
"size": "Tiny"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"stats":
- !!int "6"
- !!int "14"
- !!int "13"
- !!int "4"
- !!int "12"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The velociraptor has advantage on an attack roll against a creature if\
    \ at least one of the velociraptor's allies is within 5 feet of the creature and\
    \ the ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The velociraptor makes one Bite attack and one Claw attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claw"
"source":
- "MPMM"
- "VGM"
"image": "[[Velociraptor.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 96, Volo's Guide to Monsters p. 140*

## Description

This feathered dinosaur is about the size of a large turkey. It is an aggressive predator and often hunts in packs to bring down larger prey.

## Environment

forest, grassland