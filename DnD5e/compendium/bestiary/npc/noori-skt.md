---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/medium
- monster/type/humanoid/human
- monster/environment/coastal
- monster/environment/mountain
- monster/environment/hill
- monster/environment/arctic
- monster/environment/forest
- monster/environment/desert
aliases: ["Noori"]
statblock: true
"name": "Noori"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
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
"skillsaves":
  "Stealth": !!int "3"
  "Survival": !!int "2"
"senses": "passive Perception 10"
"languages": "Bothii, Common"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of its turn, Noori can gain advantage on all melee weapon\
    \ attack rolls during that turn, but attack rolls against it have advantage until\
    \ the start of its next turn."
  "name": "Reckless"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12\
    \ + 3) slashing damage."
  "name": "Greataxe"
"source":
- "SKT"
name: Noori
image: "[[Noori.png]]"
---

# Noori

```statblock
"name": "Noori"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
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
"skillsaves":
  "Stealth": !!int "3"
  "Survival": !!int "2"
"senses": "passive Perception 10"
"languages": "Bothii, Common"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of its turn, Noori can gain advantage on all melee weapon\
    \ attack rolls during that turn, but attack rolls against it have advantage until\
    \ the start of its next turn."
  "name": "Reckless"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12\
    \ + 3) slashing damage."
  "name": "Greataxe"
"source":
- "SKT"
"image": "[[Noori.png]]"
```
^statblock

*Source: Storm King's Thunder p. 127*

## Environment

coastal, mountain, hill, arctic, forest, desert