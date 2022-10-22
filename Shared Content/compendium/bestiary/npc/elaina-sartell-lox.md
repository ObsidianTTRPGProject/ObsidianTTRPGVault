---
cssclass: json5e-monster
tags:
- compendium/src/lox
- monster/size/medium
- monster/type/humanoid/any-race
- monster/environment/coastal
- monster/environment/hill
- monster/environment/arctic
- monster/environment/urban
- monster/environment/forest
- monster/environment/desert
aliases: ["Elaina Sartell"]
statblock: true
"name": "Elaina Sartell"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Chaotic Good"
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
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
  "Strength": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Deception": !!int "4"
"senses": "passive Perception 10"
"languages": "any two languages"
"cr": "2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Elaina makes three melee attacks: two with its scimitar and one with its\
    \ dagger. Or Elaina makes two ranged attacks with its daggers."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Elaina adds 2 to its AC against one melee attack that would hit it. To\
    \ do so, Elaina must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "LoX"
name: Elaina Sartell
image: "[[Elaina Sartell.png]]"
---

# Elaina Sartell

```statblock
"name": "Elaina Sartell"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Chaotic Good"
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
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
  "Strength": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Deception": !!int "4"
"senses": "passive Perception 10"
"languages": "any two languages"
"cr": "2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Elaina makes three melee attacks: two with its scimitar and one with its\
    \ dagger. Or Elaina makes two ranged attacks with its daggers."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Elaina adds 2 to its AC against one melee attack that would hit it. To\
    \ do so, Elaina must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "LoX"
"image": "[[Elaina Sartell.png]]"
```
^statblock

*Source: Light of Xaryxis p. 344*

## Environment

coastal, hill, arctic, urban, forest, desert