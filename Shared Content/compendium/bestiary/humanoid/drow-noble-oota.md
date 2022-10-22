---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/urban
aliases: ["Drow Noble"]
statblock: true
"name": "Drow Noble"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "11"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "4"
  "Persuasion": !!int "5"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "any two languages, Elvish"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow noble's innate spellcasting ability is Charisma (spell save DC\
    \ 13). The drow noble can innately cast the following spells, requiring no material\
    \ components:\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md)\n\
    \n1/day each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow noble has advantage on saving throws against being charmed, and\
    \ magic can't put the drow noble to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow noble has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) piercing damage."
  "name": "Rapier"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The noble adds 2 to its AC against one melee attack that would hit it.\
    \ To do so, the noble must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "OotA"
name: Drow Noble
image: "[[Drow Noble.png]]"
---

# Drow Noble

```statblock
"name": "Drow Noble"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "11"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "4"
  "Persuasion": !!int "5"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "any two languages, Elvish"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow noble's innate spellcasting ability is Charisma (spell save DC\
    \ 13). The drow noble can innately cast the following spells, requiring no material\
    \ components:\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md)\n\
    \n1/day each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow noble has advantage on saving throws against being charmed, and\
    \ magic can't put the drow noble to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow noble has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) piercing damage."
  "name": "Rapier"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The noble adds 2 to its AC against one melee attack that would hit it.\
    \ To do so, the noble must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "OotA"
"image": "[[Drow Noble.png]]"
```
^statblock

*Source: Out of the Abyss p. 196*

## Environment

urban