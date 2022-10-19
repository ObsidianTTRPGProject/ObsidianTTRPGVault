---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/monstrosity
- monster/environment/forest
- monster/environment/underdark
- monster/environment/urban
aliases: ["Hungry Sorrowsworn"]
statblock: true
"name": "Hungry Sorrowsworn"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "225"
"hit_dice": "30d8 + 90"
"stats":
- !!int "19"
- !!int "10"
- !!int "17"
- !!int "6"
- !!int "11"
- !!int "6"
"speed": "walk 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing while in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature within 60 feet of the sorrowsworn regains hit points, the\
    \ sorrowsworn gains two benefits until the end of its next turn: it has advantage\
    \ on attack rolls, and its Bite deals an extra 22 (4d10) necrotic damage on a\
    \ hit."
  "name": "Life Hunger"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sorrowsworn makes one Bite attack and one Claw attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage plus 13 (3d8) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (4d6\
    \ + 4) slashing damage. If the target is Medium or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16), and it is [restrained](/rules/conditions.md#restrained) until\
    \ the grapple ends. While grappling a creature, the sorrowsworn can't make a Claw\
    \ attack."
  "name": "Claw"
"source":
- "MPMM"
- "MTF"
name: Hungry Sorrowsworn
image: "[[Hungry Sorrowsworn.png]]"
---

# Hungry Sorrowsworn

```statblock
"name": "Hungry Sorrowsworn"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "225"
"hit_dice": "30d8 + 90"
"stats":
- !!int "19"
- !!int "10"
- !!int "17"
- !!int "6"
- !!int "11"
- !!int "6"
"speed": "walk 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing while in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature within 60 feet of the sorrowsworn regains hit points, the\
    \ sorrowsworn gains two benefits until the end of its next turn: it has advantage\
    \ on attack rolls, and its Bite deals an extra 22 (4d10) necrotic damage on a\
    \ hit."
  "name": "Life Hunger"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sorrowsworn makes one Bite attack and one Claw attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage plus 13 (3d8) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (4d6\
    \ + 4) slashing damage. If the target is Medium or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16), and it is [restrained](/rules/conditions.md#restrained) until\
    \ the grapple ends. While grappling a creature, the sorrowsworn can't make a Claw\
    \ attack."
  "name": "Claw"
"source":
- "MPMM"
- "MTF"
"image": "[[Hungry Sorrowsworn.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 223, Mordenkainen's Tome of Foes p. 232*

## Description

Horrible creatures with grasping claws and distended jaws, hungry sorrowsworn—also known as the Hungry—do whatever is necessary to sate their appetites. These greedy devourers stuff their maws with flesh and drink in their victims' screams. When they finish, they lurch away while their bright eyes resume the search for something else to consume.

**Sorrowsworn.** The Shadowfell's pervasive melancholy sometimes gives rise to strange incarnations of the plane's bleak nature. Sorrowsworn embody the forms of suffering inherent to the shadowy landscape and visit horror on those who stumble into their midst. Each sorrowsworn personifies a different aspect of despair or distress.

## Environment

forest, underdark, urban