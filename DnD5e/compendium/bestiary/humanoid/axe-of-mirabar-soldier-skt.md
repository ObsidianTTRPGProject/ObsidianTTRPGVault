---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/medium
- monster/type/humanoid/dwarf
- monster/environment/coastal
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/hill
- monster/environment/arctic
- monster/environment/urban
- monster/environment/forest
- monster/environment/underdark
aliases: ["Axe of Mirabar Soldier"]
statblock: true
"name": "Axe of Mirabar Soldier"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "16"
- !!int "13"
- !!int "16"
- !!int "10"
- !!int "11"
- !!int "10"
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "2"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Dwarvish"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The axe of mirabar soldier has advantage on saving throws against poison,\
    \ and has resistance against poison damage."
  "name": "Dwarven Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier makes two battleaxe attacks. If it has a handaxe drawn, it\
    \ can also make a handaxe attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Battleaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) slashing damage."
  "name": "Handaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit:\
    \ 6 (1d10 + 1) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "SKT"
name: Axe of Mirabar Soldier
image: "[[Axe of Mirabar Soldier.png]]"
---

# Axe of Mirabar Soldier

```statblock
"name": "Axe of Mirabar Soldier"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "16"
- !!int "13"
- !!int "16"
- !!int "10"
- !!int "11"
- !!int "10"
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "2"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Dwarvish"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The axe of mirabar soldier has advantage on saving throws against poison,\
    \ and has resistance against poison damage."
  "name": "Dwarven Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier makes two battleaxe attacks. If it has a handaxe drawn, it\
    \ can also make a handaxe attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Battleaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) slashing damage."
  "name": "Handaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit:\
    \ 6 (1d10 + 1) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "SKT"
"image": "[[Axe of Mirabar Soldier.png]]"
```
^statblock

*Source: Storm King's Thunder p. 98*

## Environment

coastal, mountain, grassland, hill, arctic, urban, forest, underdark