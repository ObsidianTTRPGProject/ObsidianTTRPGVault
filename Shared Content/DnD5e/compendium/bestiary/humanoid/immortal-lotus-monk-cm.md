---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/medium
- monster/type/humanoid
aliases: ["Immortal Lotus Monk"]
statblock: true
"name": "Immortal Lotus Monk"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "12"
- !!int "16"
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "5"
  "Acrobatics": !!int "6"
"senses": "passive Perception 15"
"languages": "Common"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the monk is wearing no armor and wielding no shield, its AC includes\
    \ its Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The monk makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) force damage, and if the target is a creature, it must succeed on a DC\
    \ 14 Dexterity saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Force Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 20/60 ft., one target. Hit: 5\
    \ (1d4 + 3) piercing damage."
  "name": "Dart"
"source":
- "CM"
name: Immortal Lotus Monk
image: "[[Immortal Lotus Monk.png]]"
---

# Immortal Lotus Monk

```statblock
"name": "Immortal Lotus Monk"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "12"
- !!int "16"
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "5"
  "Acrobatics": !!int "6"
"senses": "passive Perception 15"
"languages": "Common"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the monk is wearing no armor and wielding no shield, its AC includes\
    \ its Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The monk makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) force damage, and if the target is a creature, it must succeed on a DC\
    \ 14 Dexterity saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Force Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 20/60 ft., one target. Hit: 5\
    \ (1d4 + 3) piercing damage."
  "name": "Dart"
"source":
- "CM"
"image": "[[Immortal Lotus Monk.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 165*