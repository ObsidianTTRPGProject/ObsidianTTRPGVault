---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/huge
- monster/type/undead
aliases: ["Giant Skeleton"]
statblock: true
"name": "Giant Skeleton"
"size": "Huge"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "115"
"hit_dice": "10d12 + 50"
"stats":
- !!int "21"
- !!int "10"
- !!int "20"
- !!int "4"
- !!int "6"
- !!int "6"
"speed": "walk 30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands Giant but can't speak"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the skeleton is subjected to an effect that allows it to make a saving\
    \ throw to take only half damage, it instead takes no damage if it succeeds on\
    \ the saving throw, and only half damage if it fails."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton is immune to effects that turn undead."
  "name": "Turn Immunity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton makes three scimitar attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 15 (3d6\
    \ + 5) slashing damage."
  "name": "Scimitar"
"source":
- "TftYP"
- "DC"
- "SDW"
- "IMR"
name: Giant Skeleton
image: "[[Giant Skeleton.png]]"
---

# Giant Skeleton

```statblock
"name": "Giant Skeleton"
"size": "Huge"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "115"
"hit_dice": "10d12 + 50"
"stats":
- !!int "21"
- !!int "10"
- !!int "20"
- !!int "4"
- !!int "6"
- !!int "6"
"speed": "walk 30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands Giant but can't speak"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the skeleton is subjected to an effect that allows it to make a saving\
    \ throw to take only half damage, it instead takes no damage if it succeeds on\
    \ the saving throw, and only half damage if it fails."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton is immune to effects that turn undead."
  "name": "Turn Immunity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton makes three scimitar attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 15 (3d6\
    \ + 5) slashing damage."
  "name": "Scimitar"
"source":
- "TftYP"
- "DC"
- "SDW"
- "IMR"
"image": "[[Giant Skeleton.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 236, Divine Contention, Sleeping Dragon's Wake, Infernal Machine Rebuild*

## Description

In the Tomb of Horrors, treasure sometimes presents itself for the taking. In one such location, the "reward" for an attempt to grab some valuables turns out to be the animated skeleton of a giant—deadly not only because of its size and strength, but because it has defenses normally possessed only by undead of much greater power.

**Undead Nature.** A skeleton doesn't require air, food, drink, or sleep.