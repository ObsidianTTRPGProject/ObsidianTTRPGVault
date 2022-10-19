---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/humanoid/troglodyte
- monster/environment/underdark
aliases: ["Kol'daan"]
statblock: true
"name": "Kol'daan"
"size": "Medium"
"type": "humanoid"
"subtype": "troglodyte"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "20"
"hit_dice": "2d8 + 4"
"stats":
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "6"
- !!int "10"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "2"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Troglodyte"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kol'daan has advantage on Dexterity (Stealth) checks made to hide."
  "name": "Chameleon Skin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature other than a troglodyte that starts its turn within 5 feet\
    \ of Kol'daan must succeed on a DC 12 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the start of the creature's next turn. On a successful saving throw, the\
    \ creature is immune to the stench of all troglodytes for 1 hour."
  "name": "Stench"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Kol'daan has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kol'daan makes three attacks: one with its bite and two with its claws\
    \ or sparring sword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d4\
    \ + 2) bludgeoning damage."
  "name": "Sparring Sword"
"source":
- "WDMM"
name: Kol'daan
image: "[[Kol'daan.png]]"
---

# Kol'daan

```statblock
"name": "Kol'daan"
"size": "Medium"
"type": "humanoid"
"subtype": "troglodyte"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "20"
"hit_dice": "2d8 + 4"
"stats":
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "6"
- !!int "10"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "2"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Troglodyte"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kol'daan has advantage on Dexterity (Stealth) checks made to hide."
  "name": "Chameleon Skin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature other than a troglodyte that starts its turn within 5 feet\
    \ of Kol'daan must succeed on a DC 12 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the start of the creature's next turn. On a successful saving throw, the\
    \ creature is immune to the stench of all troglodytes for 1 hour."
  "name": "Stench"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Kol'daan has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kol'daan makes three attacks: one with its bite and two with its claws\
    \ or sparring sword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d4\
    \ + 2) bludgeoning damage."
  "name": "Sparring Sword"
"source":
- "WDMM"
"image": "[[Kol'daan.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 155*

## Environment

underdark