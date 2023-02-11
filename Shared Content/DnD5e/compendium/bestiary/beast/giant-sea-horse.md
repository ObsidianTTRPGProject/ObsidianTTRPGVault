---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/beast
- monster/environment/underwater
aliases: ["Giant Sea Horse"]
statblock: true
"name": "Giant Sea Horse"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "16"
"hit_dice": "3d10"
"stats":
- !!int "12"
- !!int "15"
- !!int "11"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 0 ft., swim 40 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the sea horse moves at least 20 feet straight toward a target and then\
    \ hits it with a ram attack on the same turn, the target takes an extra 7 (2d6)\
    \ bludgeoning damage. If the target is a creature, it must succeed on a DC 11\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea horse can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Ram"
"source":
- "MM"
- "GoS"
- "JttRC"
name: Giant Sea Horse
image: "[[Giant Sea Horse.png]]"
---

# Giant Sea Horse

```statblock
"name": "Giant Sea Horse"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "16"
"hit_dice": "3d10"
"stats":
- !!int "12"
- !!int "15"
- !!int "11"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 0 ft., swim 40 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the sea horse moves at least 20 feet straight toward a target and then\
    \ hits it with a ram attack on the same turn, the target takes an extra 7 (2d6)\
    \ bludgeoning damage. If the target is a creature, it must succeed on a DC 11\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea horse can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Ram"
"source":
- "MM"
- "GoS"
- "JttRC"
"image": "[[Giant Sea Horse.png]]"
```
^statblock

*Source: Monster Manual p. 328, Ghosts of Saltmarsh, Journeys through the Radiant Citadel*

## Description

Like their smaller kin, giant sea horses are shy, colorful fish with elongated bodies and curled tails. Aquatic elves train them as mounts.

## Environment

underwater