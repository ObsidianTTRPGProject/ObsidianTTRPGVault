---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/monstrosity
- monster/environment/underdark
- monster/environment/urban
aliases: ["Angry Sorrowsworn"]
statblock: true
"name": "Angry Sorrowsworn"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "255"
"hit_dice": "30d8 + 120"
"stats":
- !!int "17"
- !!int "10"
- !!int "19"
- !!int "8"
- !!int "13"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "11"
"damage_resistances": "bludgeoning, piercing, slashing while in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 21"
"languages": "Common"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sorrowsworn has advantage on saving throws against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ or knocked [unconscious](/rules/conditions.md#unconscious)."
  "name": "Two Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If another creature deals damage to the sorrowsworn, the sorrowsworn's\
    \ attack rolls have advantage until the end of its next turn, and the first time\
    \ it hits with a Hook attack on its next turn, the attack's target takes an extra\
    \ 19 (3d12) psychic damage.\n\nOn its turn, the sorrowsworn has disadvantage on\
    \ attack rolls if no other creature has dealt damage to it since the end of its\
    \ last turn."
  "name": "Rising Anger"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sorrowsworn makes two Hook attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d12\
    \ + 3) piercing damage."
  "name": "Hook"
"source":
- "MPMM"
- "MTF"
name: Angry Sorrowsworn
image: "[[Angry Sorrowsworn.png]]"
---

# Angry Sorrowsworn

```statblock
"name": "Angry Sorrowsworn"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "255"
"hit_dice": "30d8 + 120"
"stats":
- !!int "17"
- !!int "10"
- !!int "19"
- !!int "8"
- !!int "13"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "11"
"damage_resistances": "bludgeoning, piercing, slashing while in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 21"
"languages": "Common"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sorrowsworn has advantage on saving throws against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ or knocked [unconscious](/rules/conditions.md#unconscious)."
  "name": "Two Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If another creature deals damage to the sorrowsworn, the sorrowsworn's\
    \ attack rolls have advantage until the end of its next turn, and the first time\
    \ it hits with a Hook attack on its next turn, the attack's target takes an extra\
    \ 19 (3d12) psychic damage.\n\nOn its turn, the sorrowsworn has disadvantage on\
    \ attack rolls if no other creature has dealt damage to it since the end of its\
    \ last turn."
  "name": "Rising Anger"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sorrowsworn makes two Hook attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d12\
    \ + 3) piercing damage."
  "name": "Hook"
"source":
- "MPMM"
- "MTF"
"image": "[[Angry Sorrowsworn.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 222, Mordenkainen's Tome of Foes p. 231*

## Description

Relying on violence to sustain their existence, angry sorrowsworn—sometimes called the Angry—grow more powerful when their foes fight back. If a creature opts not to attack, though, this sorrowsworn becomes confused, and its attacks weaken. It also has two heads, which bicker with each other incessantly.

**Sorrowsworn.** The Shadowfell's pervasive melancholy sometimes gives rise to strange incarnations of the plane's bleak nature. Sorrowsworn embody the forms of suffering inherent to the shadowy landscape and visit horror on those who stumble into their midst. Each sorrowsworn personifies a different aspect of despair or distress.

## Environment

underdark, urban