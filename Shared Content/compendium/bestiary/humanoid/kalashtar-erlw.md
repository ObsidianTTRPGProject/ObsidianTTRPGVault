---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/humanoid/kalashtar
aliases: ["Kalashtar"]
statblock: true
"name": "Kalashtar"
"size": "Medium"
"type": "humanoid"
"subtype": "kalashtar"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "13"
- !!int "15"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Insight": !!int "4"
  "Acrobatics": !!int "4"
  "Persuasion": !!int "6"
"damage_resistances": "psychic"
"senses": "passive Perception 12"
"languages": "Common, telepathy 20 ft."
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kalashtar has advantage on Wisdom saving throws."
  "name": "Dual Mind"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kalashtar targets a creature it can see within 30 feet of it. The target\
    \ must succeed on a DC 12 Wisdom saving throw or take 11 (2d10) psychic damage."
  "name": "Mind Thrust"
"source":
- "ERLW"
name: Kalashtar
image: "[[Kalashtar.png]]"
---

# Kalashtar

```statblock
"name": "Kalashtar"
"size": "Medium"
"type": "humanoid"
"subtype": "kalashtar"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "13"
- !!int "15"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Insight": !!int "4"
  "Acrobatics": !!int "4"
  "Persuasion": !!int "6"
"damage_resistances": "psychic"
"senses": "passive Perception 12"
"languages": "Common, telepathy 20 ft."
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kalashtar has advantage on Wisdom saving throws."
  "name": "Dual Mind"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kalashtar targets a creature it can see within 30 feet of it. The target\
    \ must succeed on a DC 12 Wisdom saving throw or take 11 (2d10) psychic damage."
  "name": "Mind Thrust"
"source":
- "ERLW"
"image": "[[Kalashtar.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 317*

## Description

The kalashtar have bonded with good-aligned quori spirits, which communicate with their hosts through dreams and visions. Descended from monks who offered their bodies as sanctuaries to those quori escaping the evil of Dal Quor, the kalashtar now fight to herald in a new age of light and balance.