---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/huge
- monster/type/undead
aliases: ["Frost Giant Zombie"]
statblock: true
"name": "Frost Giant Zombie"
"size": "Huge"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"stats":
- !!int "23"
- !!int "6"
- !!int "21"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "walk 40 ft."
"saves":
  "Wisdom": !!int "2"
"damage_immunities": "cold, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands Giant but can't speak"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 10 feet of the zombie must make\
    \ a DC 17 Constitution saving throw. Unless the save succeeds, the creature can't\
    \ make more than one attack, or take a bonus action on that turn."
  "name": "Numbing Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is fire, radiant,\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie makes two weapon attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (3d12\
    \ + 6) slashing damage."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +10 to hit, range 60/240 ft., one target. Hit:\
    \ 28 (4d10 + 6) bludgeoning damage."
  "name": "Hurl Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie targets one creature it can see within 60 feet of it. The target\
    \ must succeed on a DC 17 Constitution saving throw or take 35 (10d6) cold damage\
    \ and be [paralyzed](/rules/conditions.md#paralyzed) until the end of its next\
    \ turn."
  "name": "Freezing Stare"
"source":
- "EGW"
name: Frost Giant Zombie
image: "[[Frost Giant Zombie.png]]"
---

# Frost Giant Zombie

```statblock
"name": "Frost Giant Zombie"
"size": "Huge"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"stats":
- !!int "23"
- !!int "6"
- !!int "21"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "walk 40 ft."
"saves":
  "Wisdom": !!int "2"
"damage_immunities": "cold, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands Giant but can't speak"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 10 feet of the zombie must make\
    \ a DC 17 Constitution saving throw. Unless the save succeeds, the creature can't\
    \ make more than one attack, or take a bonus action on that turn."
  "name": "Numbing Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is fire, radiant,\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie makes two weapon attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (3d12\
    \ + 6) slashing damage."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +10 to hit, range 60/240 ft., one target. Hit:\
    \ 28 (4d10 + 6) bludgeoning damage."
  "name": "Hurl Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie targets one creature it can see within 60 feet of it. The target\
    \ must succeed on a DC 17 Constitution saving throw or take 35 (10d6) cold damage\
    \ and be [paralyzed](/rules/conditions.md#paralyzed) until the end of its next\
    \ turn."
  "name": "Freezing Stare"
"source":
- "EGW"
"image": "[[Frost Giant Zombie.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 288*

## Description

An unknown Aeorian object of immense power and mystery was uncovered and brought to the Fortress of the Dead Jarl in Eiselcross to please the ruling frost giant, Conessa Berg. The object's unstable nature unleashed a burst of corroding arcane power, ravaging the denizens of the stronghold with twisting necromantic energies, transforming them into monstrous, rime-infused undead. These hulking brutes now wander the ruined landscape surrounding their cursed home, hunting and destroying all living things with a frightening ferocity.

The battered, butchered, and frozen remains of would-be heroes litter battle sites where these undead giants have been encountered. Underestimating these towering horrors has been the folly of numerous expeditions to the northern reaches of Eiselcross, with only rumors often finding their way back as proof that these frigid monsters even exist.