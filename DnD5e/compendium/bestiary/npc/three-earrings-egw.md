---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/medium
- monster/type/humanoid/tabaxi
- monster/environment/coastal
- monster/environment/hill
- monster/environment/arctic
- monster/environment/urban
- monster/environment/forest
- monster/environment/desert
aliases: ["Three Earrings"]
statblock: true
"name": "Three Earrings"
"size": "Medium"
"type": "humanoid"
"subtype": "tabaxi"
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
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
  "Strength": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Deception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When The three earrings moves on its turn in combat, they can double their\
    \ speed until the end of the turn. Once they uses this ability, The three earrings\
    \ can't use it again until they moves 0 feet on one of their turns."
  "name": "Feline Agility"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The captain makes three melee attacks: two with its scimitar and one with\
    \ its dagger. Or Three Earrings makes two ranged attacks with its daggers."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: ++4 to hit, reach 5 ft., one target. Hit: +4.0 (1d4+2)\
    \ slashing damage."
  "name": "Claws"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The captain adds 2 to its AC against one melee attack that would hit it.\
    \ To do so, Three Earrings must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "EGW"
name: Three Earrings
image: "[[Three Earrings.png]]"
---

# Three Earrings

```statblock
"name": "Three Earrings"
"size": "Medium"
"type": "humanoid"
"subtype": "tabaxi"
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
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
  "Strength": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Deception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When The three earrings moves on its turn in combat, they can double their\
    \ speed until the end of the turn. Once they uses this ability, The three earrings\
    \ can't use it again until they moves 0 feet on one of their turns."
  "name": "Feline Agility"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The captain makes three melee attacks: two with its scimitar and one with\
    \ its dagger. Or Three Earrings makes two ranged attacks with its daggers."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: ++4 to hit, reach 5 ft., one target. Hit: +4.0 (1d4+2)\
    \ slashing damage."
  "name": "Claws"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The captain adds 2 to its AC against one melee attack that would hit it.\
    \ To do so, Three Earrings must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "EGW"
"image": "[[Three Earrings.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 211*

## Description

This pale, spotted, Tabaxi bandit captain is a low-ranking member of the Revelry pirates. She brought her vessel to the village of Palma Flora because she was informed that a local sahuagin tribe had uncovered an unusual treasure. Three Earrings rightly assumed that they were going to attack the village, and she intended to be there to plunder the ruins after the attack. She didn't anticipate Flora Isle sinking.

## Environment

coastal, hill, arctic, urban, forest, desert