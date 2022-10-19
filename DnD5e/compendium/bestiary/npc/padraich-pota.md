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
aliases: ["Padraich"]
statblock: true
"name": "Padraich"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any Chaotic alignment"
"ac": !!int "13"
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
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of its turn, Padraich can gain advantage on all melee weapon\
    \ attack rolls during that turn, but attack rolls against it have advantage until\
    \ the start of its next turn."
  "name": "Reckless"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage."
  "name": "Maul"
"source":
- "PotA"
name: Padraich
image: "[[Padraich.png]]"
---

# Padraich

```statblock
"name": "Padraich"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any Chaotic alignment"
"ac": !!int "13"
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
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of its turn, Padraich can gain advantage on all melee weapon\
    \ attack rolls during that turn, but attack rolls against it have advantage until\
    \ the start of its next turn."
  "name": "Reckless"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage."
  "name": "Maul"
"source":
- "PotA"
"image": "[[Padraich.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 170*

## Environment

coastal, mountain, hill, arctic, forest, desert