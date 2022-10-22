---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/large
- monster/type/undead
aliases: ["Skeletal Swarm"]
statblock: true
"name": "Skeletal Swarm"
"size": "Large"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"stats":
- !!int "12"
- !!int "14"
- !!int "15"
- !!int "6"
- !!int "8"
- !!int "5"
"speed": "walk 30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_resistances": "slashing, piercing"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned,\
  \ prone, restrained, stunned"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Creatures are [deafened](/rules/conditions.md#deafened) while in the swarm's\
    \ space."
  "name": "Deafening Clatter"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Small humanoid. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 0 ft., one target in the swarm's\
    \ space. Hit: 11 (2d8 + 2) slashing damage, or 6 (1d8 + 2) slashing damage if\
    \ the swarm has half of its hit points or fewer."
  "name": "Slash"
"source":
- "GoS"
- "DC"
- "IMR"
name: Skeletal Swarm
image: "[[Skeletal Swarm.png]]"
---

# Skeletal Swarm

```statblock
"name": "Skeletal Swarm"
"size": "Large"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"stats":
- !!int "12"
- !!int "14"
- !!int "15"
- !!int "6"
- !!int "8"
- !!int "5"
"speed": "walk 30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_resistances": "slashing, piercing"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned,\
  \ prone, restrained, stunned"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Creatures are [deafened](/rules/conditions.md#deafened) while in the swarm's\
    \ space."
  "name": "Deafening Clatter"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Small humanoid. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 0 ft., one target in the swarm's\
    \ space. Hit: 11 (2d8 + 2) slashing damage, or 6 (1d8 + 2) slashing damage if\
    \ the swarm has half of its hit points or fewer."
  "name": "Slash"
"source":
- "GoS"
- "DC"
- "IMR"
"image": "[[Skeletal Swarm.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 254, Divine Contention, Infernal Machine Rebuild*

## Description

This swarm of bones found rising out of the sand in Isle of the Abbey is made from the remains of several animated skeletons. A skeletal swarm alternates its appearance between partially formed humanoid shapes and a chaotic, swirling mass.