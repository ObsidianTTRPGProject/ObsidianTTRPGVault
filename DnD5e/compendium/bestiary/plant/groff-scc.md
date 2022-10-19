---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/large
- monster/type/plant
aliases: ["Groff"]
statblock: true
"name": "Groff"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"stats":
- !!int "20"
- !!int "10"
- !!int "17"
- !!int "4"
- !!int "13"
- !!int "7"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the groff is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the groff move\
    \ or act, that creature must succeed on a DC 18 Intelligence (Investigation) check\
    \ to discern that the groff isn't an ordinary moss-covered bog patch."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The groff can hold its breath for up to 1 hour."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The groff makes one Bite attack and one Swamp Claw attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) slashing damage. If the target is a Medium or smaller creature, it must\
    \ succeed on a DC 15 Strength saving throw or become engulfed by the groff. While\
    \ engulfed, the target can't breathe, is [restrained](/rules/conditions.md#restrained),\
    \ and takes 10 (3d6) poison damage at the start of each of its turns. When the\
    \ groff moves, the engulfed target moves with it. The groff can have only one\
    \ target engulfed at a time.\n\nAn engulfed target can repeat the saving throw\
    \ at the end of its turns. On a success, the target escapes and enters the nearest\
    \ unoccupied space."
  "name": "Swamp Claw"
"source":
- "SCC"
name: Groff
image: "[[Groff.png]]"
---

# Groff

```statblock
"name": "Groff"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"stats":
- !!int "20"
- !!int "10"
- !!int "17"
- !!int "4"
- !!int "13"
- !!int "7"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the groff is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the groff move\
    \ or act, that creature must succeed on a DC 18 Intelligence (Investigation) check\
    \ to discern that the groff isn't an ordinary moss-covered bog patch."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The groff can hold its breath for up to 1 hour."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The groff makes one Bite attack and one Swamp Claw attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) slashing damage. If the target is a Medium or smaller creature, it must\
    \ succeed on a DC 15 Strength saving throw or become engulfed by the groff. While\
    \ engulfed, the target can't breathe, is [restrained](/rules/conditions.md#restrained),\
    \ and takes 10 (3d6) poison damage at the start of each of its turns. When the\
    \ groff moves, the engulfed target moves with it. The groff can have only one\
    \ target engulfed at a time.\n\nAn engulfed target can repeat the saving throw\
    \ at the end of its turns. On a success, the target escapes and enters the nearest\
    \ unoccupied space."
  "name": "Swamp Claw"
"source":
- "SCC"
"image": "[[Groff.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 194*

## Description

Many a Strixhaven student wandering the bayou has stepped on a seemingly mundane patch of moss—only to discover that it was the back of a hungry groff lurking beneath the surface. These shaggy swamp creatures have canine faces and glowing blue eyes, and they are ravenous carnivores—with pest mascots being their favorite food. A handful of more intrepid Witherbloom mages have learned to follow groffs in order to track down pest mascots, but most of these mages have yet to find a way to capture the pests before the groff eats someone.