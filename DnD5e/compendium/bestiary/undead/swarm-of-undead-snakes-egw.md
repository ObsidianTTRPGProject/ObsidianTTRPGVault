---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/medium
- monster/type/undead
- monster/environment/forest
- monster/environment/swamp
aliases: ["Swarm of Undead Snakes"]
statblock: true
"name": "Swarm of Undead Snakes"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "8"
- !!int "18"
- !!int "11"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, grappled, paralyzed, petrified, prone,\
  \ restrained, stunned, poisoned"
"senses": "blindsight 10 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny snake. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm's\
    \ space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm\
    \ has half of its hit points or fewer. The target must make a DC 10 Constitution\
    \ saving throw, taking 14 (4d6) poison damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Bites"
"source":
- "EGW"
name: Swarm of Undead Snakes
image: "[[Swarm of Undead Snakes.png]]"
---

# Swarm of Undead Snakes

```statblock
"name": "Swarm of Undead Snakes"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "8"
- !!int "18"
- !!int "11"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, grappled, paralyzed, petrified, prone,\
  \ restrained, stunned, poisoned"
"senses": "blindsight 10 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny snake. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm's\
    \ space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm\
    \ has half of its hit points or fewer. The target must make a DC 10 Constitution\
    \ saving throw, taking 14 (4d6) poison damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Bites"
"source":
- "EGW"
"image": "[[Swarm of Undead Snakes.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 247*

## Environment

forest, swamp