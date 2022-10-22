---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Soldier"]
statblock: true
"name": "Soldier"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "3"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ [frightened](/rules/conditions.md#frightened), [grappled](/rules/conditions.md#grappled),\
    \ or [restrained](/rules/conditions.md#restrained) while it is within 5 feet of\
    \ at least one ally."
  "name": "Formation Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
  "name": "Longsword"
"source":
- "GGR"
- "MOT"
name: Soldier
image: "[[Soldier.png]]"
---

# Soldier

```statblock
"name": "Soldier"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "3"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ [frightened](/rules/conditions.md#frightened), [grappled](/rules/conditions.md#grappled),\
    \ or [restrained](/rules/conditions.md#restrained) while it is within 5 feet of\
    \ at least one ally."
  "name": "Formation Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
  "name": "Longsword"
"source":
- "GGR"
- "MOT"
"image": "[[Soldier.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 226, Mythic Odysseys of Theros*

## Description

Soldiers are found in many of Ravnica's guilds. The soldier stat block represents a typical member of the rank and file, though weaponry and armor can vary.