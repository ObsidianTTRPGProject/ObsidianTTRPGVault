---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/medium
- monster/type/humanoid/orc
- monster/environment/underdark
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/forest
- monster/environment/hill
- monster/environment/arctic
aliases: ["Blurg"]
statblock: true
"name": "Blurg"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "42"
"hit_dice": "5d8 + 20"
"stats":
- !!int "18"
- !!int "12"
- !!int "18"
- !!int "12"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "5"
  "Survival": !!int "2"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Orc"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Blurg can move up to its speed toward a hostile creature\
    \ that it can see."
  "name": "Aggressive"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Blurg makes two greataxe attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d12\
    \ + 4) slashing damage."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage."
  "name": "Javelin"
"source":
- "OotA"
name: Blurg
image: "[[Blurg.png]]"
---

# Blurg

```statblock
"name": "Blurg"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "42"
"hit_dice": "5d8 + 20"
"stats":
- !!int "18"
- !!int "12"
- !!int "18"
- !!int "12"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "5"
  "Survival": !!int "2"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Orc"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Blurg can move up to its speed toward a hostile creature\
    \ that it can see."
  "name": "Aggressive"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Blurg makes two greataxe attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d12\
    \ + 4) slashing damage."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage."
  "name": "Javelin"
"source":
- "OotA"
"image": "[[Blurg.png]]"
```
^statblock

*Source: Out of the Abyss p. 29*

## Environment

underdark, mountain, grassland, forest, hill, arctic