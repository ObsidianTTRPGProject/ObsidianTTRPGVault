---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/beast
- monster/environment/underdark
- monster/environment/forest
aliases: ["Giant Bat"]
statblock: true
"name": "Giant Bat"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d10"
"stats":
- !!int "15"
- !!int "16"
- !!int "11"
- !!int "2"
- !!int "12"
- !!int "6"
"speed": "walk 10 ft., fly 60 ft."
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bat can't use its blindsight while [deafened](/rules/conditions.md#deafened)."
  "name": "Echolocation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bat has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "PotA"
- "WDMM"
- "MOT"
- "TCE"
name: Giant Bat
image: "[[Giant Bat.png]]"
---

# Giant Bat

```statblock
"name": "Giant Bat"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d10"
"stats":
- !!int "15"
- !!int "16"
- !!int "11"
- !!int "2"
- !!int "12"
- !!int "6"
"speed": "walk 10 ft., fly 60 ft."
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bat can't use its blindsight while [deafened](/rules/conditions.md#deafened)."
  "name": "Echolocation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bat has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "PotA"
- "WDMM"
- "MOT"
- "TCE"
"image": "[[Giant Bat.png]]"
```
^statblock

*Source: Monster Manual p. 323, Princes of the Apocalypse, Waterdeep: Dungeon of the Mad Mage, Mythic Odysseys of Theros, Tasha's Cauldron of Everything*

## Environment

underdark, forest