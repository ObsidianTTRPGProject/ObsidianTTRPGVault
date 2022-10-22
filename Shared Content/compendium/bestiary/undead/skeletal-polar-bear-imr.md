---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/large
- monster/type/undead
- monster/environment/underdark
- monster/environment/arctic
aliases: ["Skeletal Polar Bear"]
statblock: true
"name": "Skeletal Polar Bear"
"size": "Large"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "42"
"hit_dice": "5d10 + 15"
"stats":
- !!int "20"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "13"
- !!int "7"
"speed": "walk 40 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bear has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bear makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Claws"
"source":
- "IMR"
name: Skeletal Polar Bear
image: "[[Skeletal Polar Bear.png]]"
---

# Skeletal Polar Bear

```statblock
"name": "Skeletal Polar Bear"
"size": "Large"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "42"
"hit_dice": "5d10 + 15"
"stats":
- !!int "20"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "13"
- !!int "7"
"speed": "walk 40 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bear has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bear makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Claws"
"source":
- "IMR"
"image": "[[Skeletal Polar Bear.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 34*

## Environment

underdark, arctic