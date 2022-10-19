---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/medium
- monster/type/undead
aliases: ["Husk Zombie"]
statblock: true
"name": "Husk Zombie"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "10"
"hp": !!int "37"
"hit_dice": "5d8 + 15"
"stats":
- !!int "16"
- !!int "10"
- !!int "16"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "walk 35 ft."
"saves":
  "Wisdom": !!int "0"
  "Constitution": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands the languages it knew in life but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A humanoid slain by a melee attack from the zombie revives as a husk zombie\
    \ on its next turn."
  "name": "Curse of the Husk"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie makes two claw attacks. For each of these attacks that reduces\
    \ a creature to 0 hit points, the zombie can make an additional claw attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Claw"
"source":
- "EGW"
name: Husk Zombie
image: "[[Husk Zombie.png]]"
---

# Husk Zombie

```statblock
"name": "Husk Zombie"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "10"
"hp": !!int "37"
"hit_dice": "5d8 + 15"
"stats":
- !!int "16"
- !!int "10"
- !!int "16"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "walk 35 ft."
"saves":
  "Wisdom": !!int "0"
  "Constitution": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands the languages it knew in life but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A humanoid slain by a melee attack from the zombie revives as a husk zombie\
    \ on its next turn."
  "name": "Curse of the Husk"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie makes two claw attacks. For each of these attacks that reduces\
    \ a creature to 0 hit points, the zombie can make an additional claw attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Claw"
"source":
- "EGW"
"image": "[[Husk Zombie.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 293*

## Description

The wastes of Eastern Wynandir retain many curses and corruptions from the time of the Calamity, the worst of which pervert the sanctity of death. One such curse manifests as a terrible roving fog that draws the corpses of the fallen to rise as husk zombies—resilient undead of frightening speed and bloodlust. As well, some of the more heinous fiends that walk these scarred lands feed on the life force of the living, leaving these terrible undead in their wake.