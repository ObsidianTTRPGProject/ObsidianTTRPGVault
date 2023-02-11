---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/tiny
- monster/type/beast
- monster/environment/forest
- monster/environment/arctic
aliases: ["Owl"]
statblock: true
"name": "Owl"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "3"
- !!int "13"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "walk 5 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "3"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The owl has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage."
  "name": "Talons"
"source":
- "MM"
- "RoT"
- "IMR"
- "IDRotF"
- "CM"
name: Owl
image: "[[Owl.png]]"
---

# Owl

```statblock
"name": "Owl"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "3"
- !!int "13"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "walk 5 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "3"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The owl has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage."
  "name": "Talons"
"source":
- "MM"
- "RoT"
- "IMR"
- "IDRotF"
- "CM"
"image": "[[Owl.png]]"
```
^statblock

*Source: Monster Manual p. 333, The Rise of Tiamat, Infernal Machine Rebuild, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries*

## Environment

forest, arctic