---
cssclass: json5e-monster
tags:
- compendium/src/tce
- monster/size/large
- monster/type/construct
aliases: ["Dancing Item"]
statblock: true
"name": "Dancing Item"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"stats":
- !!int "18"
- !!int "14"
- !!int "16"
- !!int "4"
- !!int "10"
- !!int "6"
"speed": "walk 30 ft., fly 30 ft. (hover)"
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, poisoned, frightened"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The item is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When any creature starts its turn within 10 feet of the item, the item\
    \ can increase or decrease (your choice) the walking speed of that creature by\
    \ 10 feet until the end of the turn, provided the item isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Irrepressible Dance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target you can see. Hit: 1d10 + PB force damage."
  "name": "Force-Empowered Slam"
"source":
- "TCE"
name: Dancing Item
image: "[[Dancing Item.png]]"
---

# Dancing Item

```statblock
"name": "Dancing Item"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"stats":
- !!int "18"
- !!int "14"
- !!int "16"
- !!int "4"
- !!int "10"
- !!int "6"
"speed": "walk 30 ft., fly 30 ft. (hover)"
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, poisoned, frightened"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The item is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When any creature starts its turn within 10 feet of the item, the item\
    \ can increase or decrease (your choice) the walking speed of that creature by\
    \ 10 feet until the end of the turn, provided the item isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Irrepressible Dance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target you can see. Hit: 1d10 + PB force damage."
  "name": "Force-Empowered Slam"
"source":
- "TCE"
"image": "[[Dancing Item.png]]"
```
^statblock

*Source: Tasha's Cauldron of Everything p. 29*