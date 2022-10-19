---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/humanoid
aliases: ["Giff Shock Trooper"]
statblock: true
"name": "Giff Shock Trooper"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"stats":
- !!int "20"
- !!int "14"
- !!int "18"
- !!int "11"
- !!int "12"
- !!int "13"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Strength": !!int "8"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "7"
  "Athletics": !!int "8"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Common"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giff's mastery of its weapons enables it to ignore the loading property\
    \ of any firearm."
  "name": "Firearms Knowledge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the giff moves at least 20 feet in a straight line and ends within 5\
    \ feet of a Large or smaller creature, that creature must succeed on a DC 16 Strength\
    \ saving throw or take 7 (2d6) bludgeoning damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Headfirst Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giff deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giff makes two Greatsword or Musket attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6\
    \ + 5) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 40/120 ft., one target. Hit: 15\
    \ (2d12 + 2) piercing damage."
  "name": "Musket"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giff lights a grapefruit-sized bomb and throws it at a point up to\
    \ 60 feet away, where it explodes. Each creature within a 10-foot-radius sphere\
    \ centered on that point must make a DC 15 Dexterity saving throw, taking 18 (4d8)\
    \ thunder damage on a failed save, or half as much damage on a successful one.\
    \ After the giff throws the bomb, roll a d6; on a roll of 4 or lower, the giff\
    \ has no more bombs to throw."
  "name": "Thunder Bomb"
"source":
- "BAM"
- "LoX"
name: Giff Shock Trooper
image: "[[Giff Shock Trooper.png]]"
---

# Giff Shock Trooper

```statblock
"name": "Giff Shock Trooper"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"stats":
- !!int "20"
- !!int "14"
- !!int "18"
- !!int "11"
- !!int "12"
- !!int "13"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Strength": !!int "8"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "7"
  "Athletics": !!int "8"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Common"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giff's mastery of its weapons enables it to ignore the loading property\
    \ of any firearm."
  "name": "Firearms Knowledge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the giff moves at least 20 feet in a straight line and ends within 5\
    \ feet of a Large or smaller creature, that creature must succeed on a DC 16 Strength\
    \ saving throw or take 7 (2d6) bludgeoning damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Headfirst Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giff deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giff makes two Greatsword or Musket attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6\
    \ + 5) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 40/120 ft., one target. Hit: 15\
    \ (2d12 + 2) piercing damage."
  "name": "Musket"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giff lights a grapefruit-sized bomb and throws it at a point up to\
    \ 60 feet away, where it explodes. Each creature within a 10-foot-radius sphere\
    \ centered on that point must make a DC 15 Dexterity saving throw, taking 18 (4d8)\
    \ thunder damage on a failed save, or half as much damage on a successful one.\
    \ After the giff throws the bomb, roll a d6; on a roll of 4 or lower, the giff\
    \ has no more bombs to throw."
  "name": "Thunder Bomb"
"source":
- "BAM"
- "LoX"
"image": "[[Giff Shock Trooper.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 25, Light of Xaryxis*

## Description

A giff shock trooper is trained to mount assaults on enemy strongholds. Each one is adept at softening up the enemy from a distance with firearms before charging into melee to mop up the foes that remain standing.