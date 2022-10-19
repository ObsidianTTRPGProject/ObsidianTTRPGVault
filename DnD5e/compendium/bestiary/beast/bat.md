---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/tiny
- monster/type/beast
aliases: ["Bat"]
statblock: true
"name": "Bat"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "15"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "4"
"speed": "walk 5 ft., fly 30 ft."
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "0"
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
  "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing\
    \ damage."
  "name": "Bite"
"source":
- "MM"
- "CoS"
- "ToA"
- "WDMM"
- "IDRotF"
- "WBtW"
name: Bat
image: "[[Bat.png]]"
---

# Bat

```statblock
"name": "Bat"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "15"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "4"
"speed": "walk 5 ft., fly 30 ft."
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "0"
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
  "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing\
    \ damage."
  "name": "Bite"
"source":
- "MM"
- "CoS"
- "ToA"
- "WDMM"
- "IDRotF"
- "WBtW"
"image": "[[Bat.png]]"
```
^statblock

*Source: Monster Manual p. 318, Curse of Strahd, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Icewind Dale: Rime of the Frostmaiden, The Wild Beyond the Witchlight*