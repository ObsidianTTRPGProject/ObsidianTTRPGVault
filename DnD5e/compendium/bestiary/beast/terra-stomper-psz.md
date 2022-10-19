---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/huge
- monster/type/beast
- monster/environment/grassland
aliases: ["Terra Stomper"]
statblock: true
"name": "Terra Stomper"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "136"
"hit_dice": "13d12 + 52"
"stats":
- !!int "25"
- !!int "10"
- !!int "19"
- !!int "2"
- !!int "12"
- !!int "9"
"speed": "walk 50 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "8"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The terra stomper makes two attacks: one with its bite and one with its\
    \ tail. It can't make both attacks against the same target."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12\
    \ + 7) piercing damage. If the target is a Medium or smaller creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 17). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the terra stomper can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8\
    \ + 7) bludgeoning damage."
  "name": "Tail"
"source":
- "PSZ"
name: Terra Stomper
image: "[[Terra Stomper.png]]"
---

# Terra Stomper

```statblock
"name": "Terra Stomper"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "136"
"hit_dice": "13d12 + 52"
"stats":
- !!int "25"
- !!int "10"
- !!int "19"
- !!int "2"
- !!int "12"
- !!int "9"
"speed": "walk 50 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "8"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The terra stomper makes two attacks: one with its bite and one with its\
    \ tail. It can't make both attacks against the same target."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12\
    \ + 7) piercing damage. If the target is a Medium or smaller creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 17). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the terra stomper can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8\
    \ + 7) bludgeoning damage."
  "name": "Tail"
"source":
- "PSZ"
"image": "[[Terra Stomper.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 34*

## Environment

grassland