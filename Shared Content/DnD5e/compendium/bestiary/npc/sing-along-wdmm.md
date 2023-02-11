---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/small
- monster/type/humanoid/halfling
- monster/environment/arctic
- monster/environment/desert
- monster/environment/coastal
- monster/environment/grassland
- monster/environment/hill
- monster/environment/urban
- monster/environment/forest
aliases: ["Sing-Along"]
statblock: true
"name": "Sing-Along"
"size": "Small"
"type": "humanoid"
"subtype": "halfling"
"alignment": "Lawful Good"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "14"
"skillsaves":
  "Performance": !!int "4"
"senses": "passive Perception 10"
"languages": "Common, Halfling"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sing-along can move through a space of a Medium or larger creature."
  "name": "Halfling Nimbleness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sing-along has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Club"
"source":
- "WDMM"
name: Sing-Along
image: "[[Sing-Along.png]]"
---

# Sing-Along

```statblock
"name": "Sing-Along"
"size": "Small"
"type": "humanoid"
"subtype": "halfling"
"alignment": "Lawful Good"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "14"
"skillsaves":
  "Performance": !!int "4"
"senses": "passive Perception 10"
"languages": "Common, Halfling"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sing-along can move through a space of a Medium or larger creature."
  "name": "Halfling Nimbleness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sing-along has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Club"
"source":
- "WDMM"
"image": "[[Sing-Along.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 148*

## Environment

arctic, desert, coastal, grassland, hill, urban, forest