---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/gargantuan
- monster/type/monstrosity
aliases: ["Skyswimmer"]
statblock: true
"name": "Skyswimmer"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "216"
"hit_dice": "16d20 + 48"
"stats":
- !!int "23"
- !!int "15"
- !!int "16"
- !!int "7"
- !!int "12"
- !!int "6"
"speed": "walk 10 ft., fly 60 ft."
"saves":
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": ""
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skyswimmer can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skyswimmer makes three attacks: one with its bite and two with its\
    \ slam."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 22 (3d10\
    \ + 6) piercing damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 19 Dexterity saving throw or be swallowed by the skyswimmer.\
    \ A swallowed creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the skyswimmer,\
    \ and it takes 21 (6d6) acid damage at the start of each of the skyswimmer's turns.\
    \ If the skyswimmer takes 30 damage or more on a single turn from the swallowed\
    \ creature, the skyswimmer must succeed on a DC 18 Constitution saving throw at\
    \ the end of that turn or regurgitate the creature, which falls [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of the skyswimmer. If the skyswimmer dies, a swallowed\
    \ creature is no longer [restrained](/rules/conditions.md#restrained) by it and\
    \ can escape from the corpse by using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 30 ft., one target. Hit: 19 (2d12\
    \ + 6) bludgeoning damage."
  "name": "Slam"
"source":
- "GGR"
name: Skyswimmer
image: "[[Skyswimmer.png]]"
---

# Skyswimmer

```statblock
"name": "Skyswimmer"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "216"
"hit_dice": "16d20 + 48"
"stats":
- !!int "23"
- !!int "15"
- !!int "16"
- !!int "7"
- !!int "12"
- !!int "6"
"speed": "walk 10 ft., fly 60 ft."
"saves":
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": ""
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skyswimmer can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skyswimmer makes three attacks: one with its bite and two with its\
    \ slam."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 22 (3d10\
    \ + 6) piercing damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 19 Dexterity saving throw or be swallowed by the skyswimmer.\
    \ A swallowed creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the skyswimmer,\
    \ and it takes 21 (6d6) acid damage at the start of each of the skyswimmer's turns.\
    \ If the skyswimmer takes 30 damage or more on a single turn from the swallowed\
    \ creature, the skyswimmer must succeed on a DC 18 Constitution saving throw at\
    \ the end of that turn or regurgitate the creature, which falls [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of the skyswimmer. If the skyswimmer dies, a swallowed\
    \ creature is no longer [restrained](/rules/conditions.md#restrained) by it and\
    \ can escape from the corpse by using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 30 ft., one target. Hit: 19 (2d12\
    \ + 6) bludgeoning damage."
  "name": "Slam"
"source":
- "GGR"
"image": "[[Skyswimmer.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 220*

## Description

Skyswimmers are enormous, predatory leviathans that feed on drakes, rocs, griffins, and anything else they encounter as they soar through the clouds above Ravnica.