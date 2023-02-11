---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/huge
- monster/type/giant
- monster/environment/underdark
- monster/environment/mountain
- monster/environment/hill
aliases: ["The Keeper"]
statblock: true
"name": "The Keeper"
"size": "Huge"
"type": "giant"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "23"
- !!int "15"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "12"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Giant"
"cr": "7"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Keeper makes two battleaxe attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 20 (3d8\
    \ + 7) slashing damage, or 23 (3d10 + 7) slashing damage if used with both hands."
  "name": "Battleaxe +2"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28\
    \ (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed\
    \ on a DC 17 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Rock"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a rock or similar object is hurled at the Keeper, the Keeper can, with\
    \ a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning\
    \ damage from it."
  "name": "Rock Catching"
"source":
- "TftYP"
name: The Keeper
image: "[[The Keeper.png]]"
---

# The Keeper

```statblock
"name": "The Keeper"
"size": "Huge"
"type": "giant"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "23"
- !!int "15"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "12"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Giant"
"cr": "7"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Keeper makes two battleaxe attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 20 (3d8\
    \ + 7) slashing damage, or 23 (3d10 + 7) slashing damage if used with both hands."
  "name": "Battleaxe +2"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28\
    \ (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed\
    \ on a DC 17 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Rock"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a rock or similar object is hurled at the Keeper, the Keeper can, with\
    \ a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning\
    \ damage from it."
  "name": "Rock Catching"
"source":
- "TftYP"
"image": "[[The Keeper.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 173*

## Environment

underdark, mountain, hill