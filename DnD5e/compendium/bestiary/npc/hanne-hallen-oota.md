---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/underdark
aliases: ["Hanne Hallen"]
statblock: true
"name": "Hanne Hallen"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Investigation": !!int "5"
  "Perception": !!int "2"
  "Arcana": !!int "5"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Elvish, Undercommon, Common"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hanne's spellcasting ability is Charisma (spell save DC 11). It can innately\
    \ cast the following spells, requiring no material components:\n\nAt will:\
    \ [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each: [darkness](/compendium/spells/darkness.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hanne is a 1st-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 13, +5 to hit with spell attacks). She has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [shield](/compendium/spells/shield.md), [mage armor](/compendium/spells/mage-armor.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hanne has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Hanne to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Hanne has disadvantage on attack rolls, as well as on\
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
- "OotA"
name: Hanne Hallen
image: "[[Hanne Hallen.png]]"
---

# Hanne Hallen

```statblock
"name": "Hanne Hallen"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Investigation": !!int "5"
  "Perception": !!int "2"
  "Arcana": !!int "5"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Elvish, Undercommon, Common"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hanne's spellcasting ability is Charisma (spell save DC 11). It can innately\
    \ cast the following spells, requiring no material components:\n\nAt will:\
    \ [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each: [darkness](/compendium/spells/darkness.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hanne is a 1st-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 13, +5 to hit with spell attacks). She has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [shield](/compendium/spells/shield.md), [mage armor](/compendium/spells/mage-armor.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hanne has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Hanne to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Hanne has disadvantage on attack rolls, as well as on\
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
- "OotA"
"image": "[[Hanne Hallen.png]]"
```
^statblock

*Source: Out of the Abyss p. 171*

## Environment

underdark