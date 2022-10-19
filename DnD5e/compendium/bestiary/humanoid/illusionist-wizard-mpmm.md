---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid
- monster/environment/urban
aliases: ["Illusionist Wizard"]
statblock: true
"name": "Illusionist Wizard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "9"
- !!int "14"
- !!int "13"
- !!int "16"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "2"
  "Intelligence": !!int "5"
"skillsaves":
  "History": !!int "5"
  "Arcana": !!int "5"
"senses": "passive Perception 10"
"languages": "any four languages"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illusionist casts one of the following spells, using Intelligence as\
    \ the spellcasting ability (spell save DC 13):\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md)\n\
    \n2/day each: [disguise self](/compendium/spells/disguise-self.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [major image](/compendium/spells/major-image.md),\
    \ [phantasmal force](/compendium/spells/phantasmal-force.md), [phantom steed](/compendium/spells/phantom-steed.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illusionist makes two Arcane Burst attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 14 (2d10 + 3) psychic damage."
  "name": "Arcane Burst"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illusionist projects an illusion that makes the illusionist appear\
    \ to be standing in a place a few inches from its actual location, causing any\
    \ creature to have disadvantage on attack rolls against the illusionist. The effect\
    \ lasts for 1 minute, and it ends early if the illusionist takes damage, if it\
    \ is [incapacitated](/rules/conditions.md#incapacitated), or if its speed becomes\
    \ 0."
  "name": "Displacement (Recharge 5-6)"
"source":
- "MPMM"
- "VGM"
name: Illusionist Wizard
image: "[[Illusionist Wizard.png]]"
---

# Illusionist Wizard

```statblock
"name": "Illusionist Wizard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "9"
- !!int "14"
- !!int "13"
- !!int "16"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "2"
  "Intelligence": !!int "5"
"skillsaves":
  "History": !!int "5"
  "Arcana": !!int "5"
"senses": "passive Perception 10"
"languages": "any four languages"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illusionist casts one of the following spells, using Intelligence as\
    \ the spellcasting ability (spell save DC 13):\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md)\n\
    \n2/day each: [disguise self](/compendium/spells/disguise-self.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [major image](/compendium/spells/major-image.md),\
    \ [phantasmal force](/compendium/spells/phantasmal-force.md), [phantom steed](/compendium/spells/phantom-steed.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illusionist makes two Arcane Burst attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 14 (2d10 + 3) psychic damage."
  "name": "Arcane Burst"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illusionist projects an illusion that makes the illusionist appear\
    \ to be standing in a place a few inches from its actual location, causing any\
    \ creature to have disadvantage on attack rolls against the illusionist. The effect\
    \ lasts for 1 minute, and it ends early if the illusionist takes damage, if it\
    \ is [incapacitated](/rules/conditions.md#incapacitated), or if its speed becomes\
    \ 0."
  "name": "Displacement (Recharge 5-6)"
"source":
- "MPMM"
- "VGM"
"image": "[[Illusionist Wizard.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 263, Volo's Guide to Monsters p. 214*

## Description

Illusionists twist light, sound, and even thought to create illusory effects. Some illusionists are delightful entertainers, while others are devilish tricksters.

**Wizards.** Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

## Environment

urban