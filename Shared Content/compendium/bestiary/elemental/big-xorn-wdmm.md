---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/large
- monster/type/elemental
- monster/environment/underdark
aliases: ["Big Xorn"]
statblock: true
"name": "Big Xorn"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "19"
"hp": !!int "103"
"hit_dice": "9d10 + 54"
"stats":
- !!int "20"
- !!int "10"
- !!int "22"
- !!int "11"
- !!int "10"
- !!int "11"
"speed": "walk 20 ft., burrow 20 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "6"
"damage_resistances": "piercing, slashing from nonmagical attacks that aren't adamantine"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 16"
"languages": "Terran"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xorn can burrow through nonmagical, unworked earth and stone. While\
    \ doing so, the xorn doesn't disturb the material it moves through."
  "name": "Earth Glide"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky\
    \ terrain."
  "name": "Stone Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xorn can pinpoint, by scent, the location of precious metals and stones,\
    \ such as coins and gems, within 60 feet of it."
  "name": "Treasure Sense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xorn makes three claw attacks and one bite attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 22 (5d6\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage."
  "name": "Claw"
"source":
- "WDMM"
name: Big Xorn
image: "[[Big Xorn.png]]"
---

# Big Xorn

```statblock
"name": "Big Xorn"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "19"
"hp": !!int "103"
"hit_dice": "9d10 + 54"
"stats":
- !!int "20"
- !!int "10"
- !!int "22"
- !!int "11"
- !!int "10"
- !!int "11"
"speed": "walk 20 ft., burrow 20 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "6"
"damage_resistances": "piercing, slashing from nonmagical attacks that aren't adamantine"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 16"
"languages": "Terran"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xorn can burrow through nonmagical, unworked earth and stone. While\
    \ doing so, the xorn doesn't disturb the material it moves through."
  "name": "Earth Glide"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky\
    \ terrain."
  "name": "Stone Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xorn can pinpoint, by scent, the location of precious metals and stones,\
    \ such as coins and gems, within 60 feet of it."
  "name": "Treasure Sense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xorn makes three claw attacks and one bite attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 22 (5d6\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage."
  "name": "Claw"
"source":
- "WDMM"
"image": "[[Big Xorn.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 51*

## Environment

underdark