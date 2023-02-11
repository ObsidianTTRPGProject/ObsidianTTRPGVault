---
cssclass: json5e-monster
tags:
- compendium/src/rot
- monster/size/medium
- monster/type/construct
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
- monster/environment/urban
aliases: ["Paper Whirlwind"]
statblock: true
"name": "Paper Whirlwind"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "24"
"hit_dice": "7d8 - 7"
"stats":
- !!int "6"
- !!int "14"
- !!int "8"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "walk 10 ft., fly 50 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "charmed, frightened, grappled, paralyzed, petrified, prone,\
  \ restrained, stunned"
"senses": "passive Perception 15"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny raven. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm's\
    \ space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm\
    \ has half of its hit points or fewer."
  "name": "Beaks"
"source":
- "RoT"
name: Paper Whirlwind
image: "[[Paper Whirlwind.png]]"
---

# Paper Whirlwind

```statblock
"name": "Paper Whirlwind"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "24"
"hit_dice": "7d8 - 7"
"stats":
- !!int "6"
- !!int "14"
- !!int "8"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "walk 10 ft., fly 50 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "charmed, frightened, grappled, paralyzed, petrified, prone,\
  \ restrained, stunned"
"senses": "passive Perception 15"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny raven. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm's\
    \ space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm\
    \ has half of its hit points or fewer."
  "name": "Beaks"
"source":
- "RoT"
"image": "[[Paper Whirlwind.png]]"
```
^statblock

*Source: The Rise of Tiamat p. 72*

## Environment

forest, swamp, hill, urban