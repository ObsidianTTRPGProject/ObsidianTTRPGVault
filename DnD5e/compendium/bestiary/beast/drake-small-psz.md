---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/medium
- monster/type/beast
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/coastal
aliases: ["Drake (Small)"]
statblock: true
"name": "Drake (Small)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "12"
- !!int "15"
- !!int "10"
- !!int "2"
- !!int "9"
- !!int "5"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "1"
"senses": "passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drake doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4\
    \ + 1) piercing damage"
  "name": "Bite"
"source":
- "PSZ"
name: Drake (Small)
image: "[[Drake (Small).png]]"
---

# Drake (Small)

```statblock
"name": "Drake (Small)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "12"
- !!int "15"
- !!int "10"
- !!int "2"
- !!int "9"
- !!int "5"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "1"
"senses": "passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drake doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4\
    \ + 1) piercing damage"
  "name": "Bite"
"source":
- "PSZ"
"image": "[[Drake (Small).png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 24*

## Environment

mountain, grassland, coastal