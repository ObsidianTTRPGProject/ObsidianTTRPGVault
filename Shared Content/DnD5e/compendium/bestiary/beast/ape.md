---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/beast
- monster/environment/forest
aliases: ["Ape"]
statblock: true
"name": "Ape"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "6"
- !!int "12"
- !!int "7"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ape makes two fist attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 6\
    \ (1d6 + 3) bludgeoning damage."
  "name": "Rock"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDH"
- "GoS"
- "CM"
name: Ape
image: "[[Ape.png]]"
---

# Ape

```statblock
"name": "Ape"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "6"
- !!int "12"
- !!int "7"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ape makes two fist attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 6\
    \ (1d6 + 3) bludgeoning damage."
  "name": "Rock"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDH"
- "GoS"
- "CM"
"image": "[[Ape.png]]"
```
^statblock

*Source: Monster Manual p. 317, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Candlekeep Mysteries*

## Environment

forest