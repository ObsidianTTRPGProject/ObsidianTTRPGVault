---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/large
- monster/type/giant
- monster/environment/underdark
- monster/environment/mountain
- monster/environment/forest
- monster/environment/hill
- monster/environment/urban
- monster/environment/desert
- monster/environment/arctic
aliases: ["Garra"]
statblock: true
"name": "Garra"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "30"
"hit_dice": "4d10 + 8"
"stats":
- !!int "17"
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "9"
- !!int "10"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Giant"
"cr": "1"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) slashing damage, or 14 (2d10 + 3) slashing damage if used with two hands."
  "name": "Battleaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 10 (2d6 + 3) piercing damage."
  "name": "Javelin"
"source":
- "ERLW"
name: Garra
image: "[[Garra.png]]"
---

# Garra

```statblock
"name": "Garra"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "30"
"hit_dice": "4d10 + 8"
"stats":
- !!int "17"
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "9"
- !!int "10"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Giant"
"cr": "1"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) slashing damage, or 14 (2d10 + 3) slashing damage if used with two hands."
  "name": "Battleaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 10 (2d6 + 3) piercing damage."
  "name": "Javelin"
"source":
- "ERLW"
"image": "[[Garra.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 272*

## Environment

underdark, mountain, forest, hill, urban, desert, arctic