---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/monstrosity
- monster/environment/coastal
- monster/environment/desert
- monster/environment/mountain
- monster/environment/underdark
- monster/environment/urban
aliases: ["Lonely Sorrowsworn"]
statblock: true
"name": "Lonely Sorrowsworn"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "16"
- !!int "12"
- !!int "17"
- !!int "6"
- !!int "11"
- !!int "6"
"speed": "walk 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing while in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of the sorrowsworn's turns, each creature within 5\
    \ feet of it must succeed on a DC 15 Wisdom saving throw or take 10 (3d6) psychic\
    \ damage."
  "name": "Psychic Leech"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sorrowsworn has advantage on attack rolls while it is within 30 feet\
    \ of at least two other creatures. It otherwise has disadvantage on attack rolls."
  "name": "Thrives on Company"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sorrowsworn makes one Harpoon Arm attack, and it uses Sorrowful Embrace."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 60 ft., one target. Hit: 21 (4d8\
    \ + 3) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15) if it is a Large or smaller creature. The sorrowsworn has two\
    \ harpoon arms and can grapple up to two creatures at once."
  "name": "Harpoon Arm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature [grappled](/rules/conditions.md#grappled) by the sorrowsworn\
    \ must make a DC 15 Wisdom saving throw, taking 18 (4d8) psychic damage on a failed\
    \ save, or half as much damage on a successful one. In either case, the sorrowsworn\
    \ pulls each of those creatures up to 30 feet straight toward it."
  "name": "Sorrowful Embrace"
"source":
- "MPMM"
- "MTF"
name: Lonely Sorrowsworn
image: "[[Lonely Sorrowsworn.png]]"
---

# Lonely Sorrowsworn

```statblock
"name": "Lonely Sorrowsworn"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "16"
- !!int "12"
- !!int "17"
- !!int "6"
- !!int "11"
- !!int "6"
"speed": "walk 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing while in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of the sorrowsworn's turns, each creature within 5\
    \ feet of it must succeed on a DC 15 Wisdom saving throw or take 10 (3d6) psychic\
    \ damage."
  "name": "Psychic Leech"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sorrowsworn has advantage on attack rolls while it is within 30 feet\
    \ of at least two other creatures. It otherwise has disadvantage on attack rolls."
  "name": "Thrives on Company"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sorrowsworn makes one Harpoon Arm attack, and it uses Sorrowful Embrace."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 60 ft., one target. Hit: 21 (4d8\
    \ + 3) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15) if it is a Large or smaller creature. The sorrowsworn has two\
    \ harpoon arms and can grapple up to two creatures at once."
  "name": "Harpoon Arm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature [grappled](/rules/conditions.md#grappled) by the sorrowsworn\
    \ must make a DC 15 Wisdom saving throw, taking 18 (4d8) psychic damage on a failed\
    \ save, or half as much damage on a successful one. In either case, the sorrowsworn\
    \ pulls each of those creatures up to 30 feet straight toward it."
  "name": "Sorrowful Embrace"
"source":
- "MPMM"
- "MTF"
"image": "[[Lonely Sorrowsworn.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 223, Mordenkainen's Tome of Foes p. 232*

## Description

The sorrow of isolation afflicts many creatures that lurk in the Shadowfell, but the need for companionship is never manifested more dramatically than in the lonely sorrowsworn—also called the Lonely. When these sorrowsworn spot other creatures, they feel keenly the need for interaction and launch their harpoon-like arms to drag their victims closer.

**Sorrowsworn.** The Shadowfell's pervasive melancholy sometimes gives rise to strange incarnations of the plane's bleak nature. Sorrowsworn embody the forms of suffering inherent to the shadowy landscape and visit horror on those who stumble into their midst. Each sorrowsworn personifies a different aspect of despair or distress.

## Environment

coastal, desert, mountain, underdark, urban