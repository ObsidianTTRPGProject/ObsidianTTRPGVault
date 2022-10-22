---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/coastal
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/hill
- monster/environment/arctic
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/desert
aliases: ["Drow Scout"]
statblock: true
"name": "Drow Scout"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Nature": !!int "4"
  "Stealth": !!int "6"
  "Perception": !!int "5"
  "Survival": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "any one language (usually Common), Elvish"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow scout's innate spellcasting ability is Charisma (spell save DC\
    \ 10). The drow scout can innately cast the following spells, requiring no material\
    \ components:\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md)\n\
    \n1/day each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The scout has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow scout has advantage on saving throws against being charmed, and\
    \ magic can't put the drow scout to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow scout has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The scout makes two melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "OotA"
name: Drow Scout
image: "[[Drow Scout.png]]"
---

# Drow Scout

```statblock
"name": "Drow Scout"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Nature": !!int "4"
  "Stealth": !!int "6"
  "Perception": !!int "5"
  "Survival": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "any one language (usually Common), Elvish"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow scout's innate spellcasting ability is Charisma (spell save DC\
    \ 10). The drow scout can innately cast the following spells, requiring no material\
    \ components:\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md)\n\
    \n1/day each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The scout has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow scout has advantage on saving throws against being charmed, and\
    \ magic can't put the drow scout to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow scout has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The scout makes two melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "OotA"
"image": "[[Drow Scout.png]]"
```
^statblock

*Source: Out of the Abyss p. 191*

## Environment

coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert