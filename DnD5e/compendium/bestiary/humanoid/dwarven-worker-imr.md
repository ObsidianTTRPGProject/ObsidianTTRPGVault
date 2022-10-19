---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/medium
- monster/type/humanoid/dwarf
- monster/environment/urban
aliases: ["Dwarven Worker"]
statblock: true
"name": "Dwarven Worker"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any Non-Good alignment"
"ac": !!int "12"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "11"
- !!int "10"
"skillsaves":
  "Deception": !!int "2"
  "Religion": !!int "2"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any one language (usually Common), Dwarvish"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The worker has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened)."
  "name": "Dark Devotion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dwarven worker has advantage on saving throws against poison, and has\
    \ resistance against poison damage."
  "name": "Dwarven Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6\
    \ + 1) bludgeoning or piercing damage."
  "name": "Pick or Hammer"
"source":
- "IMR"
name: Dwarven Worker
image: "[[Dwarven Worker.png]]"
---

# Dwarven Worker

```statblock
"name": "Dwarven Worker"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any Non-Good alignment"
"ac": !!int "12"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "11"
- !!int "10"
"skillsaves":
  "Deception": !!int "2"
  "Religion": !!int "2"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any one language (usually Common), Dwarvish"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The worker has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened)."
  "name": "Dark Devotion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dwarven worker has advantage on saving throws against poison, and has\
    \ resistance against poison damage."
  "name": "Dwarven Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6\
    \ + 1) bludgeoning or piercing damage."
  "name": "Pick or Hammer"
"source":
- "IMR"
"image": "[[Dwarven Worker.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 15*

## Environment

urban