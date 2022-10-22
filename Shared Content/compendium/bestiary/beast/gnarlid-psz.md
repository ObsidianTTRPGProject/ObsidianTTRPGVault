---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/large
- monster/type/beast
- monster/environment/forest
- monster/environment/hill
- monster/environment/arctic
aliases: ["Gnarlid"]
statblock: true
"name": "Gnarlid"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "34"
"hit_dice": "4d10 + 12"
"stats":
- !!int "19"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "13"
- !!int "7"
"speed": "walk 40 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gnarlid has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gnarlid makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claws"
"source":
- "PSZ"
name: Gnarlid
image: "[[Gnarlid.png]]"
---

# Gnarlid

```statblock
"name": "Gnarlid"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "34"
"hit_dice": "4d10 + 12"
"stats":
- !!int "19"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "13"
- !!int "7"
"speed": "walk 40 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gnarlid has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gnarlid makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claws"
"source":
- "PSZ"
"image": "[[Gnarlid.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 34*

## Environment

forest, hill, arctic