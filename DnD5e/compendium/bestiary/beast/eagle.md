---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/small
- monster/type/beast
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/hill
- monster/environment/coastal
aliases: ["Eagle"]
statblock: true
"name": "Eagle"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "3"
"hit_dice": "1d6"
"stats":
- !!int "6"
- !!int "15"
- !!int "10"
- !!int "2"
- !!int "14"
- !!int "7"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eagle has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Talons"
"source":
- "MM"
- "CM"
name: Eagle
image: "[[Eagle.png]]"
---

# Eagle

```statblock
"name": "Eagle"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "3"
"hit_dice": "1d6"
"stats":
- !!int "6"
- !!int "15"
- !!int "10"
- !!int "2"
- !!int "14"
- !!int "7"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eagle has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Talons"
"source":
- "MM"
- "CM"
"image": "[[Eagle.png]]"
```
^statblock

*Source: Monster Manual p. 322, Candlekeep Mysteries*

## Environment

mountain, grassland, hill, coastal