---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/small
- monster/type/humanoid/gnome
- monster/environment/coastal
- monster/environment/hill
- monster/environment/arctic
- monster/environment/urban
- monster/environment/forest
- monster/environment/desert
aliases: ["Ortimay Swift and Dark"]
statblock: true
"name": "Ortimay Swift and Dark"
"size": "Small"
"type": "humanoid"
"subtype": "gnome"
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
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
  "Strength": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Deception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any two languages, Gnomish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ortimay swift and dark has advantage on all Intelligence, Wisdom, and\
    \ Charisma saving throws against magic."
  "name": "Gnome Cunning"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ortimay makes three melee attacks: two with its scimitar and one with its\
    \ dagger. Or Ortimay makes two ranged attacks with its daggers."
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
  "desc": "Ortimay adds 2 to its AC against one melee attack that would hit it. To\
    \ do so, Ortimay must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "ToA"
name: Ortimay Swift and Dark
image: "[[Ortimay Swift and Dark.png]]"
---

# Ortimay Swift and Dark

```statblock
"name": "Ortimay Swift and Dark"
"size": "Small"
"type": "humanoid"
"subtype": "gnome"
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
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
  "Strength": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Deception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any two languages, Gnomish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ortimay swift and dark has advantage on all Intelligence, Wisdom, and\
    \ Charisma saving throws against magic."
  "name": "Gnome Cunning"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ortimay makes three melee attacks: two with its scimitar and one with its\
    \ dagger. Or Ortimay makes two ranged attacks with its daggers."
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
  "desc": "Ortimay adds 2 to its AC against one melee attack that would hit it. To\
    \ do so, Ortimay must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "ToA"
"image": "[[Ortimay Swift and Dark.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 21*

## Environment

coastal, hill, arctic, urban, forest, desert