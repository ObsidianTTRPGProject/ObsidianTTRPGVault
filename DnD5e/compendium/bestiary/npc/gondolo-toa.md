---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/small
- monster/type/humanoid/halfling
- monster/environment/coastal
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/hill
- monster/environment/arctic
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/desert
aliases: ["Gondolo"]
statblock: true
"name": "Gondolo"
"size": "Small"
"type": "humanoid"
"subtype": "halfling"
"alignment": "Chaotic Good"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "11"
"skillsaves":
  "Nature": !!int "4"
  "Stealth": !!int "6"
  "Perception": !!int "5"
  "Survival": !!int "5"
"senses": "passive Perception 15"
"languages": "any one language (usually Common), Halfling"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gondolo has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gondolo can move through a space of a Medium or larger creature."
  "name": "Halfling Nimbleness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gondolo has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gondolo makes two melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "ToA"
name: Gondolo
image: "[[Gondolo.png]]"
---

# Gondolo

```statblock
"name": "Gondolo"
"size": "Small"
"type": "humanoid"
"subtype": "halfling"
"alignment": "Chaotic Good"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "11"
"skillsaves":
  "Nature": !!int "4"
  "Stealth": !!int "6"
  "Perception": !!int "5"
  "Survival": !!int "5"
"senses": "passive Perception 15"
"languages": "any one language (usually Common), Halfling"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gondolo has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gondolo can move through a space of a Medium or larger creature."
  "name": "Halfling Nimbleness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gondolo has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gondolo makes two melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "ToA"
"image": "[[Gondolo.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 34*

## Environment

coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert