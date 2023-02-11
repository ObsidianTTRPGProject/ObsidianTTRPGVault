---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/small
- monster/type/beast
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/forest
- monster/environment/hill
- monster/environment/coastal
- monster/environment/arctic
aliases: ["Blood Hawk"]
statblock: true
"name": "Blood Hawk"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "6"
- !!int "14"
- !!int "10"
- !!int "3"
- !!int "14"
- !!int "5"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hawk has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hawk has advantage on an attack roll against a creature if at least\
    \ one of the hawk's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Beak"
"source":
- "MM"
- "PotA"
- "SKT"
- "GoS"
- "EGW"
- "CM"
name: Blood Hawk
image: "[[Blood Hawk.png]]"
---

# Blood Hawk

```statblock
"name": "Blood Hawk"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "6"
- !!int "14"
- !!int "10"
- !!int "3"
- !!int "14"
- !!int "5"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hawk has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hawk has advantage on an attack roll against a creature if at least\
    \ one of the hawk's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Beak"
"source":
- "MM"
- "PotA"
- "SKT"
- "GoS"
- "EGW"
- "CM"
"image": "[[Blood Hawk.png]]"
```
^statblock

*Source: Monster Manual p. 319, Princes of the Apocalypse, Storm King's Thunder, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Candlekeep Mysteries*

## Description

Taking its name from its crimson feathers and aggressive nature, the blood hawk fearlessly attacks almost any animal, stabbing it with its daggerlike beak. Blood hawks flock together in large numbers, attacking as a pack to take down prey.

## Environment

mountain, grassland, forest, hill, coastal, arctic