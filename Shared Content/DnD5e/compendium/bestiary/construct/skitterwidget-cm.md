---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/medium
- monster/type/construct
aliases: ["Skitterwidget"]
statblock: true
"name": "Skitterwidget"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "85"
"hit_dice": "10d8 + 40"
"stats":
- !!int "16"
- !!int "14"
- !!int "18"
- !!int "3"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft., climb 30 ft."
"damage_immunities": "lightning, poison"
"condition_immunities": "blinded, deafened, exhaustion, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Skitterwidget"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the skitterwidget is subjected to lightning damage, it takes no\
    \ damage and instead regains a number of hit points equal to the lightning damage\
    \ dealt."
  "name": "Lightning Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skitterwidget doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skitterwidget makes two attacks: one with its bite and one with its\
    \ tail."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ by the skitterwidget (escape DC 13)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage plus 10 (3d6) lightning damage, and if the target is a\
    \ creature, it must succeed on a DC 15 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until the end of its next turn."
  "name": "Tail"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skitterwidget imposes disadvantage on one attack roll made against\
    \ a kiddywidget it can see within 5 feet of it."
  "name": "Good Parent"
"source":
- "CM"
name: Skitterwidget
image: "[[Skitterwidget.png]]"
---

# Skitterwidget

```statblock
"name": "Skitterwidget"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "85"
"hit_dice": "10d8 + 40"
"stats":
- !!int "16"
- !!int "14"
- !!int "18"
- !!int "3"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft., climb 30 ft."
"damage_immunities": "lightning, poison"
"condition_immunities": "blinded, deafened, exhaustion, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Skitterwidget"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the skitterwidget is subjected to lightning damage, it takes no\
    \ damage and instead regains a number of hit points equal to the lightning damage\
    \ dealt."
  "name": "Lightning Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skitterwidget doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skitterwidget makes two attacks: one with its bite and one with its\
    \ tail."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ by the skitterwidget (escape DC 13)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage plus 10 (3d6) lightning damage, and if the target is a\
    \ creature, it must succeed on a DC 15 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until the end of its next turn."
  "name": "Tail"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skitterwidget imposes disadvantage on one attack roll made against\
    \ a kiddywidget it can see within 5 feet of it."
  "name": "Good Parent"
"source":
- "CM"
"image": "[[Skitterwidget.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 136*

## Description

A skitterwidget is made of metal and bears a passing resemblance to a giant dog-headed cockroach. No two skitterwidgets look exactly alike, but all are surprisingly cute.