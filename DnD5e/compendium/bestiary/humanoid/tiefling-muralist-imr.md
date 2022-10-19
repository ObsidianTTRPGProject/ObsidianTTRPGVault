---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/medium
- monster/type/humanoid/tiefling
- monster/environment/urban
aliases: ["Tiefling Muralist"]
statblock: true
"name": "Tiefling Muralist"
"size": "Medium"
"type": "humanoid"
"subtype": "tiefling"
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
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "2"
  "Religion": !!int "2"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any one language (usually Common), Infernal"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tiefling muralist's innate spellcasting ability is Charisma (spell\
    \ save DC 10). The tiefling muralist can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1/day each: [darkness](/compendium/spells/darkness.md), [hellish rebuke](/compendium/spells/hellish-rebuke.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The muralist has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened)."
  "name": "Dark Devotion"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6\
    \ + 1) slashing damage."
  "name": "Scimitar"
"source":
- "IMR"
name: Tiefling Muralist
image: "[[Tiefling Muralist.png]]"
---

# Tiefling Muralist

```statblock
"name": "Tiefling Muralist"
"size": "Medium"
"type": "humanoid"
"subtype": "tiefling"
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
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "2"
  "Religion": !!int "2"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any one language (usually Common), Infernal"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tiefling muralist's innate spellcasting ability is Charisma (spell\
    \ save DC 10). The tiefling muralist can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1/day each: [darkness](/compendium/spells/darkness.md), [hellish rebuke](/compendium/spells/hellish-rebuke.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The muralist has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened)."
  "name": "Dark Devotion"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6\
    \ + 1) slashing damage."
  "name": "Scimitar"
"source":
- "IMR"
"image": "[[Tiefling Muralist.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 17*

## Environment

urban