---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/medium
- monster/type/humanoid/troglodyte
aliases: ["Troglodyte Champion of Laogzed"]
statblock: true
"name": "Troglodyte Champion of Laogzed"
"size": "Medium"
"type": "humanoid"
"subtype": "troglodyte"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "59"
"hit_dice": "7d8 + 28"
"stats":
- !!int "18"
- !!int "12"
- !!int "18"
- !!int "8"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "3"
  "Athletics": !!int "6"
  "Stealth": !!int "3"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Troglodyte"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troglodyte has advantage on Dexterity (Stealth) checks made to hide."
  "name": "Chameleon Skin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature other than a troglodyte that starts its turn within 5 feet\
    \ of the troglodyte must succeed on a DC 14 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the start of the creature's next turn. On a successful saving throw, the\
    \ creature is immune to the stench of all troglodytes for 1 hour."
  "name": "Stench"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the troglodyte has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troglodyte makes three attacks: one with its bite and two with either\
    \ its claws or its greatclub."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d4\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d4\
    \ + 4) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troglodyte spits acid in a line 15 feet long and 5 feet wide. Each\
    \ creature in that line must make a DC 14 Dexterity saving throw, taking 10 (3d6)\
    \ acid damage on a failed save, or half as much damage on a successful one."
  "name": "Acid Spray (Recharge 6)"
"source":
- "OotA"
name: Troglodyte Champion of Laogzed
image: "[[Troglodyte Champion of Laogzed.png]]"
---

# Troglodyte Champion of Laogzed

```statblock
"name": "Troglodyte Champion of Laogzed"
"size": "Medium"
"type": "humanoid"
"subtype": "troglodyte"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "59"
"hit_dice": "7d8 + 28"
"stats":
- !!int "18"
- !!int "12"
- !!int "18"
- !!int "8"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "3"
  "Athletics": !!int "6"
  "Stealth": !!int "3"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Troglodyte"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troglodyte has advantage on Dexterity (Stealth) checks made to hide."
  "name": "Chameleon Skin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature other than a troglodyte that starts its turn within 5 feet\
    \ of the troglodyte must succeed on a DC 14 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the start of the creature's next turn. On a successful saving throw, the\
    \ creature is immune to the stench of all troglodytes for 1 hour."
  "name": "Stench"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the troglodyte has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troglodyte makes three attacks: one with its bite and two with either\
    \ its claws or its greatclub."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d4\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d4\
    \ + 4) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troglodyte spits acid in a line 15 feet long and 5 feet wide. Each\
    \ creature in that line must make a DC 14 Dexterity saving throw, taking 10 (3d6)\
    \ acid damage on a failed save, or half as much damage on a successful one."
  "name": "Acid Spray (Recharge 6)"
"source":
- "OotA"
"image": "[[Troglodyte Champion of Laogzed.png]]"
```
^statblock

*Source: Out of the Abyss p. 229*

## Description

The Monster Manual provides statistics for the typical troglodyte. Once in a while, a troglodyte tribe produces an unusually smart and strong specimen that can spew acid-what many troglodytes consider blessings from Laogzed, their demonic god. These hulking troglodyte champions make excellent chieftains.