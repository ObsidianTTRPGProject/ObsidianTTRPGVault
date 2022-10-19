---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/large
- monster/type/giant
- monster/environment/grassland
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
- monster/environment/desert
- monster/environment/coastal
- monster/environment/arctic
- monster/environment/underdark
- monster/environment/mountain
aliases: ["Carrion Ogre"]
statblock: true
"name": "Carrion Ogre"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"stats":
- !!int "19"
- !!int "8"
- !!int "16"
- !!int "1"
- !!int "7"
- !!int "7"
"speed": "walk 40 ft."
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common, Giant"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While lashed to the floor, the creature is [prone](/rules/conditions.md#prone)\
    \ and [restrained](/rules/conditions.md#restrained). It also suffers from two\
    \ levels of [exhaustion](/rules/conditions.md#exhaustion)."
  "name": "Tied Down"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The creature makes two attacks: one with its tentacles and one with its\
    \ bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 4 (1d4\
    \ + 2) poison damage, and the target must succeed on a DC 13 Constitution saving\
    \ throw or be [poisoned](/rules/conditions.md#poisoned) for 1 minute. Until this\
    \ poison ends, the target is [paralyzed](/rules/conditions.md#paralyzed). The\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ poison on itself on a success."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "WDMM"
name: Carrion Ogre
image: "[[Carrion Ogre.png]]"
---

# Carrion Ogre

```statblock
"name": "Carrion Ogre"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"stats":
- !!int "19"
- !!int "8"
- !!int "16"
- !!int "1"
- !!int "7"
- !!int "7"
"speed": "walk 40 ft."
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common, Giant"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While lashed to the floor, the creature is [prone](/rules/conditions.md#prone)\
    \ and [restrained](/rules/conditions.md#restrained). It also suffers from two\
    \ levels of [exhaustion](/rules/conditions.md#exhaustion)."
  "name": "Tied Down"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The creature makes two attacks: one with its tentacles and one with its\
    \ bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 4 (1d4\
    \ + 2) poison damage, and the target must succeed on a DC 13 Constitution saving\
    \ throw or be [poisoned](/rules/conditions.md#poisoned) for 1 minute. Until this\
    \ poison ends, the target is [paralyzed](/rules/conditions.md#paralyzed). The\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ poison on itself on a success."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "WDMM"
"image": "[[Carrion Ogre.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 189*

## Description

A creature that has the body of an ogre and the head of a carrion crawler.

## Environment

grassland, forest, swamp, hill, desert, coastal, arctic, underdark, mountain