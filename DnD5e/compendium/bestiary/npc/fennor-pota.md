---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/medium
- monster/type/humanoid/human
- monster/environment/coastal
- monster/environment/mountain
- monster/environment/hill
- monster/environment/arctic
- monster/environment/forest
- monster/environment/desert
aliases: ["Fennor"]
statblock: true
"name": "Fennor"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any Chaotic alignment"
"ac": !!int "14"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "16"
- !!int "12"
- !!int "17"
- !!int "9"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft."
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of its turn, Fennor can gain advantage on all melee weapon\
    \ attack rolls during that turn, but attack rolls against it have advantage until\
    \ the start of its next turn."
  "name": "Reckless"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fennor makes two attacks with her greatsword"
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Greatsword"
"source":
- "PotA"
name: Fennor
image: "[[Fennor.png]]"
---

# Fennor

```statblock
"name": "Fennor"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any Chaotic alignment"
"ac": !!int "14"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "16"
- !!int "12"
- !!int "17"
- !!int "9"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft."
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of its turn, Fennor can gain advantage on all melee weapon\
    \ attack rolls during that turn, but attack rolls against it have advantage until\
    \ the start of its next turn."
  "name": "Reckless"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fennor makes two attacks with her greatsword"
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Greatsword"
"source":
- "PotA"
"image": "[[Fennor.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 170*

## Environment

coastal, mountain, hill, arctic, forest, desert