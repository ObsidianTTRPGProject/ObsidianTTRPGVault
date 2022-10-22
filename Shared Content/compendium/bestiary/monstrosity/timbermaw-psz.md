---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/medium
- monster/type/monstrosity
- monster/environment/underdark
- monster/environment/forest
aliases: ["Timbermaw"]
statblock: true
"name": "Timbermaw"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "3"
- !!int "14"
- !!int "5"
"speed": "walk 30 ft., climb 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The timbermaw has advantage on Dexterity (Stealth) checks made to hide\
    \ in rocky terrain."
  "name": "Stone Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The timbermaw makes one attack with its tentacles. If that attack hits,\
    \ the timbermaw can make one beak attack against the same target."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) slashing damage."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Beak"
"source":
- "PSZ"
name: Timbermaw
image: "[[Timbermaw.png]]"
---

# Timbermaw

```statblock
"name": "Timbermaw"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "3"
- !!int "14"
- !!int "5"
"speed": "walk 30 ft., climb 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The timbermaw has advantage on Dexterity (Stealth) checks made to hide\
    \ in rocky terrain."
  "name": "Stone Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The timbermaw makes one attack with its tentacles. If that attack hits,\
    \ the timbermaw can make one beak attack against the same target."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) slashing damage."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Beak"
"source":
- "PSZ"
"image": "[[Timbermaw.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 34*

## Environment

underdark, forest