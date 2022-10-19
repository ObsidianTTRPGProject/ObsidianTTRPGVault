---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/beast
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/forest
- monster/environment/hill
aliases: ["Giant Elk"]
statblock: true
"name": "Giant Elk"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "42"
"hit_dice": "5d12 + 10"
"stats":
- !!int "19"
- !!int "16"
- !!int "14"
- !!int "7"
- !!int "14"
- !!int "10"
"speed": "walk 60 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Giant Elk, understands Common, Elvish, Sylvan but can't speak them"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the elk moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage.\
    \ If the target is a creature, it must succeed on a DC 14 Strength saving throw\
    \ or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Ram"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 22 (4d8 + 4) bludgeoning damage."
  "name": "Hooves"
"source":
- "MM"
- "SKT"
name: Giant Elk
image: "[[Giant Elk.png]]"
---

# Giant Elk

```statblock
"name": "Giant Elk"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "42"
"hit_dice": "5d12 + 10"
"stats":
- !!int "19"
- !!int "16"
- !!int "14"
- !!int "7"
- !!int "14"
- !!int "10"
"speed": "walk 60 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Giant Elk, understands Common, Elvish, Sylvan but can't speak them"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the elk moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage.\
    \ If the target is a creature, it must succeed on a DC 14 Strength saving throw\
    \ or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Ram"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 22 (4d8 + 4) bludgeoning damage."
  "name": "Hooves"
"source":
- "MM"
- "SKT"
"image": "[[Giant Elk.png]]"
```
^statblock

*Source: Monster Manual p. 325, Storm King's Thunder*

## Description

The majestic giant elk is rare to the point that its appearance is often taken as a foreshadowing of an important event, such as the birth of a king. Legends tell of gods that take the form of giant elk when visiting the Material Plane. Many cultures therefore believe that to hunt these creatures is to invite divine wrath.

## Environment

mountain, grassland, forest, hill