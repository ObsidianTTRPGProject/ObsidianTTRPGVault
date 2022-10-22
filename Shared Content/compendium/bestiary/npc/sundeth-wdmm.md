---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/large
- monster/type/giant
- monster/environment/desert
- monster/environment/urban
aliases: ["Sundeth"]
statblock: true
"name": "Sundeth"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "143"
"hit_dice": "22d8 + 44"
"stats":
- !!int "20"
- !!int "15"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "9"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "9"
  "Perception": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Common, Giant"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sundeth rerolls a failed saving throw."
  "name": "Indomitable (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Sundeth can regain 20 hit points."
  "name": "Second Wind (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sundeth makes three attacks with its greatsword or its shortbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage, plus 7 (2d6) slashing damage if Sundeth has more than\
    \ half of its total hit points remaining."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage, plus 7 (2d6) piercing damage if Sundeth has more\
    \ than half of its total hit points remaining."
  "name": "Shortbow"
"source":
- "WDMM"
name: Sundeth
image: "[[Sundeth.png]]"
---

# Sundeth

```statblock
"name": "Sundeth"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "143"
"hit_dice": "22d8 + 44"
"stats":
- !!int "20"
- !!int "15"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "9"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "9"
  "Perception": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Common, Giant"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sundeth rerolls a failed saving throw."
  "name": "Indomitable (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Sundeth can regain 20 hit points."
  "name": "Second Wind (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sundeth makes three attacks with its greatsword or its shortbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage, plus 7 (2d6) slashing damage if Sundeth has more than\
    \ half of its total hit points remaining."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage, plus 7 (2d6) piercing damage if Sundeth has more\
    \ than half of its total hit points remaining."
  "name": "Shortbow"
"source":
- "WDMM"
"image": "[[Sundeth.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 304*

## Description

Sundeth is a hideous, 8-foot-tall, half-ogre.

## Environment

desert, urban