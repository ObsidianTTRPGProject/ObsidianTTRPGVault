---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/large
- monster/type/undead
- monster/environment/forest
- monster/environment/hill
- monster/environment/arctic
aliases: ["Skeletal Giant Owl"]
statblock: true
"name": "Skeletal Giant Owl"
"size": "Large"
"type": "undead"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "13"
- !!int "15"
- !!int "12"
- !!int "8"
- !!int "13"
- !!int "10"
"speed": "walk 5 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Giant Owl, understands Common, Elvish, and Sylvan but can't speak them"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The owl has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6\
    \ + 1) slashing damage."
  "name": "Talons"
"source":
- "IMR"
name: Skeletal Giant Owl
image: "[[Skeletal Giant Owl.png]]"
---

# Skeletal Giant Owl

```statblock
"name": "Skeletal Giant Owl"
"size": "Large"
"type": "undead"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "13"
- !!int "15"
- !!int "12"
- !!int "8"
- !!int "13"
- !!int "10"
"speed": "walk 5 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Giant Owl, understands Common, Elvish, and Sylvan but can't speak them"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The owl has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6\
    \ + 1) slashing damage."
  "name": "Talons"
"source":
- "IMR"
"image": "[[Skeletal Giant Owl.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 33*

## Environment

forest, hill, arctic