---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/gargantuan
- monster/type/monstrosity
- monster/environment/underdark
- monster/environment/desert
aliases: ["Wurm"]
statblock: true
"name": "Wurm"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "247"
"hit_dice": "15d20 + 90"
"stats":
- !!int "28"
- !!int "7"
- !!int "22"
- !!int "1"
- !!int "8"
- !!int "4"
"speed": "walk 50 ft., burrow 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "11"
"senses": "blindsight 30 ft., tremorsense 60 ft., passive Perception 9"
"languages": ""
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wurm can burrow through solid rock at half its burrow speed and leaves\
    \ a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wurm makes two attacks: one with its bite and one with its stinger."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 22 (3d8\
    \ + 9) piercing damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 19 Dexterity saving throw or be swallowed by the wurm. A swallowed\
    \ creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the wurm, and it\
    \ takes 21 (6d6) acid damage at the start of each of the wurm's turns.\n\nIf the\
    \ wurm takes 30 damage or more on a single turn from a creature inside it, the\
    \ wurm must succeed on a DC 21 Constitution saving throw at the end of that turn\
    \ or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of the wurm. If the wurm dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse by using 20 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one creature. Hit: 19\
    \ (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution saving\
    \ throw, taking 42 (12d6) poison damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Tail Stinger"
"source":
- "PSZ"
name: Wurm
image: "[[Wurm.png]]"
---

# Wurm

```statblock
"name": "Wurm"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "247"
"hit_dice": "15d20 + 90"
"stats":
- !!int "28"
- !!int "7"
- !!int "22"
- !!int "1"
- !!int "8"
- !!int "4"
"speed": "walk 50 ft., burrow 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "11"
"senses": "blindsight 30 ft., tremorsense 60 ft., passive Perception 9"
"languages": ""
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wurm can burrow through solid rock at half its burrow speed and leaves\
    \ a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wurm makes two attacks: one with its bite and one with its stinger."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 22 (3d8\
    \ + 9) piercing damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 19 Dexterity saving throw or be swallowed by the wurm. A swallowed\
    \ creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the wurm, and it\
    \ takes 21 (6d6) acid damage at the start of each of the wurm's turns.\n\nIf the\
    \ wurm takes 30 damage or more on a single turn from a creature inside it, the\
    \ wurm must succeed on a DC 21 Constitution saving throw at the end of that turn\
    \ or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of the wurm. If the wurm dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse by using 20 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one creature. Hit: 19\
    \ (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution saving\
    \ throw, taking 42 (12d6) poison damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Tail Stinger"
"source":
- "PSZ"
"image": "[[Wurm.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 32*

## Environment

underdark, desert