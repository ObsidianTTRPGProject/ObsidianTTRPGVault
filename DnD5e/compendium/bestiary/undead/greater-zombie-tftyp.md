---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/undead
aliases: ["Greater Zombie"]
statblock: true
"name": "Greater Zombie"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "4"
- !!int "6"
- !!int "6"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "1"
"damage_resistances": "cold, necrotic"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands the languages it knew in life but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie has advantage on saving throws against any effect that turns\
    \ undead."
  "name": "Turn Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage and 7 (2d6) necrotic damage."
  "name": "Empowered Slam"
"source":
- "TftYP"
- "DC"
- "SDW"
- "IMR"
name: Greater Zombie
image: "[[Greater Zombie.png]]"
---

# Greater Zombie

```statblock
"name": "Greater Zombie"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "4"
- !!int "6"
- !!int "6"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "1"
"damage_resistances": "cold, necrotic"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands the languages it knew in life but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie has advantage on saving throws against any effect that turns\
    \ undead."
  "name": "Turn Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage and 7 (2d6) necrotic damage."
  "name": "Empowered Slam"
"source":
- "TftYP"
- "DC"
- "SDW"
- "IMR"
"image": "[[Greater Zombie.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 237, Divine Contention, Sleeping Dragon's Wake, Infernal Machine Rebuild*

## Description

Many of those who brave the Tomb of Horrors believe they have reached their ultimate destination when they disturb a skeletal figure inside a secluded crypt. It is, in fact, a greater zombie, a creature magically created from a humanoid corpse to be far more resilient than a typical zombie.

**Undead Nature.** A zombie doesn't require air, food, drink, or sleep.