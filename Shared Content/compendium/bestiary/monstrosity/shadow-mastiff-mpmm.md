---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/monstrosity
- monster/environment/forest
- monster/environment/hill
- monster/environment/swamp
aliases: ["Shadow Mastiff"]
statblock: true
"name": "Shadow Mastiff"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "5"
- !!int "12"
- !!int "5"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks while\
  \ in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadow mastiff can see ethereal creatures and objects."
  "name": "Ethereal Awareness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in bright light created by sunlight, the shadow mastiff has disadvantage\
    \ on attack rolls, ability checks, and saving throws."
  "name": "Sunlight Weakness"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage. If the target is a creature, it must succeed on a DC 13\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Bite"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the shadow mastiff becomes [invisible](/rules/conditions.md#invisible),\
    \ along with anything it is wearing or carrying. The invisibility lasts until\
    \ the shadow mastiff uses a bonus action to end it or until the shadow mastiff\
    \ attacks, is in bright light, or is [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Shadow Blend"
"source":
- "MPMM"
- "VGM"
name: Shadow Mastiff
image: "[[Shadow Mastiff.png]]"
---

# Shadow Mastiff

```statblock
"name": "Shadow Mastiff"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "5"
- !!int "12"
- !!int "5"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks while\
  \ in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadow mastiff can see ethereal creatures and objects."
  "name": "Ethereal Awareness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in bright light created by sunlight, the shadow mastiff has disadvantage\
    \ on attack rolls, ability checks, and saving throws."
  "name": "Sunlight Weakness"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage. If the target is a creature, it must succeed on a DC 13\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Bite"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the shadow mastiff becomes [invisible](/rules/conditions.md#invisible),\
    \ along with anything it is wearing or carrying. The invisibility lasts until\
    \ the shadow mastiff uses a bonus action to end it or until the shadow mastiff\
    \ attacks, is in bright light, or is [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Shadow Blend"
"source":
- "MPMM"
- "VGM"
"image": "[[Shadow Mastiff.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 215, Volo's Guide to Monsters p. 190*

## Description

Shunning sunlight, these hounds are usually met as a pack. Some faiths devoted to deities of gloom and night, such as that of Shar in the Forgotten Realms, perform unholy rites to summon shadow mastiffs to work as temple sentinels and bodyguards.

**Shadow Mastiffs.** Shadow mastiffs—hounds of the Shadowfell—move invisibly through the shadows, always on the hunt.

## Environment

forest, hill, swamp