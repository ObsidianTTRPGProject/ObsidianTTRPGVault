---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/huge
- monster/type/undead
aliases: ["Frost Giant Skeleton"]
statblock: true
"name": "Frost Giant Skeleton"
"size": "Huge"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "102"
"hit_dice": "12d12 + 24"
"stats":
- !!int "23"
- !!int "9"
- !!int "15"
- !!int "6"
- !!int "8"
- !!int "5"
"speed": "walk 40 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "cold, poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Giant but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton makes two greataxe attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12\
    \ + 6) slashing damage."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton targets one creature it can see within 60 feet of it. The\
    \ target must succeed on a DC 13 Constitution saving throw or take 35 (10d6) cold\
    \ damage and be [paralyzed](/rules/conditions.md#paralyzed) until the end of its\
    \ next turn."
  "name": "Freezing Stare"
"source":
- "IDRotF"
name: Frost Giant Skeleton
image: "[[Frost Giant Skeleton.png]]"
---

# Frost Giant Skeleton

```statblock
"name": "Frost Giant Skeleton"
"size": "Huge"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "102"
"hit_dice": "12d12 + 24"
"stats":
- !!int "23"
- !!int "9"
- !!int "15"
- !!int "6"
- !!int "8"
- !!int "5"
"speed": "walk 40 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "cold, poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Giant but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton makes two greataxe attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12\
    \ + 6) slashing damage."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton targets one creature it can see within 60 feet of it. The\
    \ target must succeed on a DC 13 Constitution saving throw or take 35 (10d6) cold\
    \ damage and be [paralyzed](/rules/conditions.md#paralyzed) until the end of its\
    \ next turn."
  "name": "Freezing Stare"
"source":
- "IDRotF"
"image": "[[Frost Giant Skeleton.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 288*

## Description

Necromancers can transform the inanimate bones of long-dead frost giants into malevolent juggernauts that love to harm the living.