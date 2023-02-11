---
cssclass: json5e-monster
tags:
- compendium/src/psk
- monster/size/gargantuan
- monster/type/beast
aliases: ["Sky Leviathan"]
statblock: true
"name": "Sky Leviathan"
"size": "Gargantuan"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "247"
"hit_dice": "15d20 + 90"
"stats":
- !!int "28"
- !!int "7"
- !!int "22"
- !!int "1"
- !!int "8"
- !!int "4"
"speed": "fly 50 ft. (hover)"
"saves":
  "Wisdom": !!int "3"
  "Constitution": !!int "10"
"senses": "passive Perception 9"
"languages": ""
"cr": "10"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d8\
    \ + 9) piercing damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 18 Dexterity saving throw or be swallowed by the leviathan.\
    \ A swallowed creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the leviathan,\
    \ and it takes 21 (6d6) acid damage at the start of each of the leviathan's turns.\n\
    \nIf the leviathan takes 30 damage or more on a single turn from a creature inside\
    \ it, the leviathan must succeed on a DC 21 Constitution saving throw at the end\
    \ of that turn or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of the leviathan. If the leviathan dies, a swallowed\
    \ creature is no longer [restrained](/rules/conditions.md#restrained) by it and\
    \ can escape from the corpse by using 20 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
"source":
- "PSK"
name: Sky Leviathan
image: "[[Sky Leviathan.png]]"
---

# Sky Leviathan

```statblock
"name": "Sky Leviathan"
"size": "Gargantuan"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "247"
"hit_dice": "15d20 + 90"
"stats":
- !!int "28"
- !!int "7"
- !!int "22"
- !!int "1"
- !!int "8"
- !!int "4"
"speed": "fly 50 ft. (hover)"
"saves":
  "Wisdom": !!int "3"
  "Constitution": !!int "10"
"senses": "passive Perception 9"
"languages": ""
"cr": "10"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d8\
    \ + 9) piercing damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 18 Dexterity saving throw or be swallowed by the leviathan.\
    \ A swallowed creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the leviathan,\
    \ and it takes 21 (6d6) acid damage at the start of each of the leviathan's turns.\n\
    \nIf the leviathan takes 30 damage or more on a single turn from a creature inside\
    \ it, the leviathan must succeed on a DC 21 Constitution saving throw at the end\
    \ of that turn or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of the leviathan. If the leviathan dies, a swallowed\
    \ creature is no longer [restrained](/rules/conditions.md#restrained) by it and\
    \ can escape from the corpse by using 20 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
"source":
- "PSK"
"image": "[[Sky Leviathan.png]]"
```
^statblock

*Source: Plane Shift: Kaladesh p. 28*