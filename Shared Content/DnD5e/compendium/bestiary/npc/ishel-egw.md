---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/underdark
aliases: ["Ishel"]
statblock: true
"name": "Ishel"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "24"
"hit_dice": "3d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Elvish, Undercommon"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ishel's spellcasting ability is Charisma (spell save DC 11). It can innately\
    \ cast the following spells, requiring no material components:\n\nAt will:\
    \ [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each: [darkness](/compendium/spells/darkness.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ishel has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Ishel to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Ishel has disadvantage on attack rolls, as well as on\
    \ Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) for 1 hour. If\
    \ the saving throw fails by 5 or more, the target is also [unconscious](/rules/conditions.md#unconscious)\
    \ while [poisoned](/rules/conditions.md#poisoned) in this way. The target wakes\
    \ up if it takes damage or if another creature takes an action to shake it awake."
  "name": "Hand Crossbow"
"source":
- "EGW"
name: Ishel
image: "[[Ishel.png]]"
---

# Ishel

```statblock
"name": "Ishel"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "24"
"hit_dice": "3d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Elvish, Undercommon"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ishel's spellcasting ability is Charisma (spell save DC 11). It can innately\
    \ cast the following spells, requiring no material components:\n\nAt will:\
    \ [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each: [darkness](/compendium/spells/darkness.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ishel has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Ishel to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Ishel has disadvantage on attack rolls, as well as on\
    \ Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) for 1 hour. If\
    \ the saving throw fails by 5 or more, the target is also [unconscious](/rules/conditions.md#unconscious)\
    \ while [poisoned](/rules/conditions.md#poisoned) in this way. The target wakes\
    \ up if it takes damage or if another creature takes an action to shake it awake."
  "name": "Hand Crossbow"
"source":
- "EGW"
"image": "[[Ishel.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 231*

## Description

Ishel—a drow ambassador from the Kryn Dynasty.

## Environment

underdark