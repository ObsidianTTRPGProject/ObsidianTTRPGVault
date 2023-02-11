---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/small
- monster/type/humanoid/grippli
aliases: ["Grippli Warrior"]
statblock: true
"name": "Grippli Warrior"
"size": "Small"
"type": "humanoid"
"subtype": "grippli"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "10"
- !!int "15"
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft., climb 30 ft., swim 30 ft."
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "4"
  "Survival": !!int "4"
"senses": "passive Perception 12"
"languages": "Grippli plus one other language (usually Common, Draconic, or Primordial)"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grippli can hold its breath for 20 minutes."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grippli can leap 30 feet horizontally or 20 feet vertically from a\
    \ standing position."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grippli makes one attack with its tongue. If this attack hits, the\
    \ grippli can make a melee attack using its trident against the same target."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one Medium or smaller creature.\
    \ Hit: The target is [grappled](/rules/conditions.md#grappled) (escape DC 12).\
    \ Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the grippli can't grab another creature."
  "name": "Tongue"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage\
    \ if used with two hands to make a melee attack, plus 2 (1d4) piercing damage\
    \ if the grippli had advantage on the attack roll."
  "name": "Trident"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage, plus 2 (1d4) piercing damage if the grippli had advantage\
    \ on the attack roll."
  "name": "Shortbow"
"source":
- "CM"
name: Grippli Warrior
image: "[[Grippli Warrior.png]]"
---

# Grippli Warrior

```statblock
"name": "Grippli Warrior"
"size": "Small"
"type": "humanoid"
"subtype": "grippli"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "10"
- !!int "15"
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft., climb 30 ft., swim 30 ft."
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "4"
  "Survival": !!int "4"
"senses": "passive Perception 12"
"languages": "Grippli plus one other language (usually Common, Draconic, or Primordial)"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grippli can hold its breath for 20 minutes."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grippli can leap 30 feet horizontally or 20 feet vertically from a\
    \ standing position."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grippli makes one attack with its tongue. If this attack hits, the\
    \ grippli can make a melee attack using its trident against the same target."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one Medium or smaller creature.\
    \ Hit: The target is [grappled](/rules/conditions.md#grappled) (escape DC 12).\
    \ Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the grippli can't grab another creature."
  "name": "Tongue"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage\
    \ if used with two hands to make a melee attack, plus 2 (1d4) piercing damage\
    \ if the grippli had advantage on the attack roll."
  "name": "Trident"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage, plus 2 (1d4) piercing damage if the grippli had advantage\
    \ on the attack roll."
  "name": "Shortbow"
"source":
- "CM"
"image": "[[Grippli Warrior.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 99*

## Description

At first glance or from a distance, a grippli looks like a large frog. Its head and body are indeed those of a frog, but its front extremities end in hands with fingers that enable it to manipulate weapons and other objects, and its rear legs have similar digits that it can use for grasping and climbing. A grippli can move as quickly on all fours as it can on two legs.