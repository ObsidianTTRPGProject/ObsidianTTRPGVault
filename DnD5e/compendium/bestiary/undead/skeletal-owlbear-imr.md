---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/large
- monster/type/undead
- monster/environment/forest
aliases: ["Skeletal Owlbear"]
statblock: true
"name": "Skeletal Owlbear"
"size": "Large"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"stats":
- !!int "20"
- !!int "12"
- !!int "17"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The owlbear has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight or smell."
  "name": "Keen Sight and Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The owlbear makes two attacks: one with its beak and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10\
    \ + 5) piercing damage."
  "name": "Beak"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) slashing damage."
  "name": "Claws"
"source":
- "IMR"
name: Skeletal Owlbear
image: "[[Skeletal Owlbear.png]]"
---

# Skeletal Owlbear

```statblock
"name": "Skeletal Owlbear"
"size": "Large"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"stats":
- !!int "20"
- !!int "12"
- !!int "17"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The owlbear has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight or smell."
  "name": "Keen Sight and Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The owlbear makes two attacks: one with its beak and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10\
    \ + 5) piercing damage."
  "name": "Beak"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) slashing damage."
  "name": "Claws"
"source":
- "IMR"
"image": "[[Skeletal Owlbear.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 36*

## Environment

forest