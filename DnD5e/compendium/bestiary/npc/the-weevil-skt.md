---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/medium
- monster/type/humanoid/dwarf
- monster/environment/coastal
- monster/environment/hill
- monster/environment/arctic
- monster/environment/urban
- monster/environment/forest
- monster/environment/desert
aliases: ["The Weevil"]
statblock: true
"name": "The Weevil"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "15"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "14"
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
  "Strength": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Deception": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any two languages, Dwarvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Weevil has advantage on saving throws against poison, and has resistance\
    \ against poison damage."
  "name": "Dwarven Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Weevil makes three melee attacks with his handaxes. Or the Weevil makes\
    \ two ranged attacks with his handaxes."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 4) slashing damage."
  "name": "Handaxe +1"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Weevil adds 2 to its AC against one melee attack that would hit it.\
    \ To do so, the Weevil must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "SKT"
name: The Weevil
image: "[[The Weevil.png]]"
---

# The Weevil

```statblock
"name": "The Weevil"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "15"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "14"
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
  "Strength": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Deception": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any two languages, Dwarvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Weevil has advantage on saving throws against poison, and has resistance\
    \ against poison damage."
  "name": "Dwarven Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Weevil makes three melee attacks with his handaxes. Or the Weevil makes\
    \ two ranged attacks with his handaxes."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 4) slashing damage."
  "name": "Handaxe +1"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Weevil adds 2 to its AC against one melee attack that would hit it.\
    \ To do so, the Weevil must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "SKT"
"image": "[[The Weevil.png]]"
```
^statblock

*Source: Storm King's Thunder p. 114*

## Environment

coastal, hill, arctic, urban, forest, desert