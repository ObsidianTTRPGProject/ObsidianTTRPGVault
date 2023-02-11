---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/huge
- monster/type/giant
- monster/environment/hill
aliases: ["Young Cloud Giant"]
statblock: true
"name": "Young Cloud Giant"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "105"
"hit_dice": "10d12 + 40"
"stats":
- !!int "21"
- !!int "8"
- !!int "19"
- !!int "10"
- !!int "12"
- !!int "12"
"speed": "walk 40 ft."
"skillsaves":
  "Insight": !!int "4"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Common, Giant"
"cr": "5"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two greatclub attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8\
    \ + 5) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21\
    \ (3d10 + 5) bludgeoning damage."
  "name": "Rock"
"source":
- "SKT"
name: Young Cloud Giant
image: "[[Young Cloud Giant.png]]"
---

# Young Cloud Giant

```statblock
"name": "Young Cloud Giant"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "105"
"hit_dice": "10d12 + 40"
"stats":
- !!int "21"
- !!int "8"
- !!int "19"
- !!int "10"
- !!int "12"
- !!int "12"
"speed": "walk 40 ft."
"skillsaves":
  "Insight": !!int "4"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Common, Giant"
"cr": "5"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two greatclub attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8\
    \ + 5) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21\
    \ (3d10 + 5) bludgeoning damage."
  "name": "Rock"
"source":
- "SKT"
"image": "[[Young Cloud Giant.png]]"
```
^statblock

*Source: Storm King's Thunder p. 112*

## Environment

hill