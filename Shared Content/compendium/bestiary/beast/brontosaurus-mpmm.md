---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/gargantuan
- monster/type/beast/dinosaur
- monster/environment/forest
- monster/environment/grassland
aliases: ["Brontosaurus"]
statblock: true
"name": "Brontosaurus"
"size": "Gargantuan"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "121"
"hit_dice": "9d20 + 27"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft."
"saves":
  "Constitution": !!int "6"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 27 (5d8\
    \ + 5) bludgeoning damage, and the target must succeed on a DC 14 Strength saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Stomp"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 32 (6d8\
    \ + 5) bludgeoning damage"
  "name": "Tail"
"source":
- "MPMM"
- "VGM"
name: Brontosaurus
image: "[[Brontosaurus.png]]"
---

# Brontosaurus

```statblock
"name": "Brontosaurus"
"size": "Gargantuan"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "121"
"hit_dice": "9d20 + 27"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft."
"saves":
  "Constitution": !!int "6"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 27 (5d8\
    \ + 5) bludgeoning damage, and the target must succeed on a DC 14 Strength saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Stomp"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 32 (6d8\
    \ + 5) bludgeoning damage"
  "name": "Tail"
"source":
- "MPMM"
- "VGM"
"image": "[[Brontosaurus.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 95, Volo's Guide to Monsters p. 139*

## Description

This massive four-legged dinosaur is large enough that most predators leave it alone. Its deadly tail can drive away or kill smaller threats.

## Environment

forest, grassland