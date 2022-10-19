---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/small
- monster/type/construct
aliases: ["Kiddywidget"]
statblock: true
"name": "Kiddywidget"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "15"
"hit_dice": "2d6 + 8"
"stats":
- !!int "6"
- !!int "14"
- !!int "18"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 20 ft., climb 20 ft."
"damage_immunities": "lightning, poison"
"condition_immunities": "blinded, deafened, exhaustion, paralyzed, petrified, poisoned"
"senses": "darkvision 60, passive Perception 10"
"languages": "Skitterwidget"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kiddywidget doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kiddywidget makes two attacks: one with its bite and one with its tail."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ by the kiddywidget (escape DC 8)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage plus 2 (1d4) lightning damage."
  "name": "Tail"
"source":
- "CM"
name: Kiddywidget
image: "[[Kiddywidget.png]]"
---

# Kiddywidget

```statblock
"name": "Kiddywidget"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "15"
"hit_dice": "2d6 + 8"
"stats":
- !!int "6"
- !!int "14"
- !!int "18"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 20 ft., climb 20 ft."
"damage_immunities": "lightning, poison"
"condition_immunities": "blinded, deafened, exhaustion, paralyzed, petrified, poisoned"
"senses": "darkvision 60, passive Perception 10"
"languages": "Skitterwidget"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kiddywidget doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kiddywidget makes two attacks: one with its bite and one with its tail."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ by the kiddywidget (escape DC 8)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage plus 2 (1d4) lightning damage."
  "name": "Tail"
"source":
- "CM"
"image": "[[Kiddywidget.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 136*

## Description

A skitterwidget that gives birth to a kiddywidget can't procreate for 3d6 days afterward. Still, given that skitterwidgets are constructs with no natural life span, there is no telling how many kiddywidgets a pair of skitterwidgets can produce.