---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/undead
aliases: ["Yellow Musk Zombie"]
statblock: true
"name": "Yellow Musk Zombie"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "9"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "13"
- !!int "9"
- !!int "12"
- !!int "1"
- !!int "6"
- !!int "3"
"speed": "walk 20 ft."
"condition_immunities": "charmed, exhaustion"
"senses": "blindsight 30 ft., passive Perception 8"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 +the damage taken, unless the damage is fire or\
    \ from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) bludgeoning damage."
  "name": "Slam"
"source":
- "ToA"
name: Yellow Musk Zombie
image: "[[Yellow Musk Zombie.png]]"
---

# Yellow Musk Zombie

```statblock
"name": "Yellow Musk Zombie"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "9"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "13"
- !!int "9"
- !!int "12"
- !!int "1"
- !!int "6"
- !!int "3"
"speed": "walk 20 ft."
"condition_immunities": "charmed, exhaustion"
"senses": "blindsight 30 ft., passive Perception 8"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 +the damage taken, unless the damage is fire or\
    \ from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) bludgeoning damage."
  "name": "Slam"
"source":
- "ToA"
"image": "[[Yellow Musk Zombie.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 237*

## Description

A yellow musk creeper is an unholy vine whose flowers resemble an orchid's. Bright yellow with splashes of purple, these flowers expel a musk that attracts prey. A yellow musk creeper clings to walls, pillars, gravestones, door frames, or statuary in shadowy locations, remaining motionless until it strikes.

**Humanoid Hosts.** A yellow musk creeper destroys the minds of humanoids, then implants bulbs in those it kills. Twenty-four hours after being implanted, a bulb sprouts a creeper vine that magically animates the host corpse, turning it into a yellow musk zombie under the young vine's control. In addition to protecting the defenseless plant, the zombie acts as fertilizer for the young creeper vine, which grows to full size in seven days. Once it is fully grown, the new yellow musk creeper becomes mobile and bursts from its zombie host, whereupon the zombie collapses into a mound of dead offal. If the zombie is destroyed before the creeper emerges, the creeper withers and dies.

**Small Yellow Musk Zombies.** A Medium humanoid transformed into a yellow musk zombie uses the stat block presented in this section. A Small humanoid transformed into a yellow musk zombie becomes a Small undead with 27 (6d6 + 6) hit points, but otherwise has the same statistics.