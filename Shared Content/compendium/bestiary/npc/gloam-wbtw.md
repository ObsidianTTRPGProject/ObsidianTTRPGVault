---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/tiny
- monster/type/undead
aliases: ["Gloam"]
statblock: true
"name": "Gloam"
"size": "Tiny"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "3"
- !!int "15"
- !!int "10"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cat has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "On its first turn in combat or when it is reduced to 0 hit points, the\
    \ cat expels a cloud of dust that acts as dust of sneezing and choking"
  "name": "Cloud of Dust"
"source":
- "WBtW"
name: Gloam
image: "[[Gloam.png]]"
---

# Gloam

```statblock
"name": "Gloam"
"size": "Tiny"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "3"
- !!int "15"
- !!int "10"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cat has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "On its first turn in combat or when it is reduced to 0 hit points, the\
    \ cat expels a cloud of dust that acts as dust of sneezing and choking"
  "name": "Cloud of Dust"
"source":
- "WBtW"
"image": "[[Gloam.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 93*