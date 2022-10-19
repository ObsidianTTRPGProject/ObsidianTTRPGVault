---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/beast
- monster/environment/grassland
aliases: ["Triceratops"]
statblock: true
"name": "Triceratops"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "95"
"hit_dice": "10d12 + 30"
"stats":
- !!int "22"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "11"
- !!int "5"
"speed": "walk 50 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the triceratops moves at least 20 feet straight toward a creature and\
    \ then hits it with a gore attack on the same turn, that target must succeed on\
    \ a DC 13 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the triceratops can make\
    \ one stomp attack against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8\
    \ + 6) piercing damage."
  "name": "Gore"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 22 (3d10 + 6) bludgeoning damage"
  "name": "Stomp"
"source":
- "MM"
- "ToA"
name: Triceratops
image: "[[Triceratops.png]]"
---

# Triceratops

```statblock
"name": "Triceratops"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "95"
"hit_dice": "10d12 + 30"
"stats":
- !!int "22"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "11"
- !!int "5"
"speed": "walk 50 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the triceratops moves at least 20 feet straight toward a creature and\
    \ then hits it with a gore attack on the same turn, that target must succeed on\
    \ a DC 13 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the triceratops can make\
    \ one stomp attack against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8\
    \ + 6) piercing damage."
  "name": "Gore"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 22 (3d10 + 6) bludgeoning damage"
  "name": "Stomp"
"source":
- "MM"
- "ToA"
"image": "[[Triceratops.png]]"
```
^statblock

*Source: Monster Manual p. 80, Tomb of Annihilation*

## Description

One of the most aggressive of the herbivorous dinosaurs, a triceratops has a skull that flares out to form a protective plate of bone. With its great horns and formidable speed, a triceratops gores and tramples would-be predators to death.

**Dinosaurs.** Dinosaurs, or behemoths, are among the oldest reptiles in the world. Predatory dinosaurs are savage, territorial hunters. Herbivorous dinosaurs are less aggressive, but they might attack to defend their young, or if startled or harassed.

Dinosaurs come in many sizes and shapes. Larger varieties often have drab coloration, while smaller dinosaurs have colorful markings akin to birds. Dinosaurs roam rugged and isolated areas that humanoids seldom visit, including remote mountain valleys, inaccessible plateaus, tropical islands, and deep fens.

## Environment

grassland