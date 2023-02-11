---
cssclass: json5e-monster
tags:
- compendium/src/rot
- monster/size/medium
- monster/type/monstrosity
aliases: ["Marfulb"]
statblock: true
"name": "Marfulb"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"stats":
- !!int "13"
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "10"
- !!int "6"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "2"
"damage_immunities": "cold"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Ice Toad"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The toad can breathe air or water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 5 feet of the toad takes 3 (1d6)\
    \ cold damage."
  "name": "Cold Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The toad's long jump is up to 20 feet and its high jump is up to 10 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d8)\
    \ cold damage. If the target is a Medium or smaller creature it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 11). Until this grapple ends, the toad can't bite another target."
  "name": "Bite"
"source":
- "RoT"
name: Marfulb
image: "[[Marfulb.png]]"
---

# Marfulb

```statblock
"name": "Marfulb"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"stats":
- !!int "13"
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "10"
- !!int "6"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "2"
"damage_immunities": "cold"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Ice Toad"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The toad can breathe air or water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 5 feet of the toad takes 3 (1d6)\
    \ cold damage."
  "name": "Cold Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The toad's long jump is up to 20 feet and its high jump is up to 10 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d8)\
    \ cold damage. If the target is a Medium or smaller creature it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 11). Until this grapple ends, the toad can't bite another target."
  "name": "Bite"
"source":
- "RoT"
"image": "[[Marfulb.png]]"
```
^statblock

*Source: The Rise of Tiamat p. 35*