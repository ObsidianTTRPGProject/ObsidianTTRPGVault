---
cssclass: json5e-monster
tags:
- compendium/src/lox
- monster/size/small
- monster/type/aberration
- monster/environment/underdark
aliases: ["Flapjack"]
statblock: true
"name": "Flapjack"
"size": "Small"
"type": "aberration"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "6"
- !!int "15"
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "11"
"speed": "walk 5 ft., fly 30 ft."
"skillsaves":
  "Religion": !!int "4"
  "History": !!int "4"
  "Arcana": !!int "4"
"damage_vulnerabilities": "psychic"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands Undercommon but can't speak, telepathy 60 ft."
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Flapjack casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 12):\n\nAt\
    \ will: [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md)\n\
    \n1/day each: [magic missile](/compendium/spells/magic-missile.md), [unseen\
    \ servant](/compendium/spells/unseen-servant.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Flapjack can perceive the content of any telepathic communication used\
    \ within 60 feet of it, and it can't be surprised by creatures with any form of\
    \ telepathy."
  "name": "Advanced Telepathy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Flapjack is knocked [prone](/rules/conditions.md#prone), roll a die.\
    \ On an odd result, Flapjack lands upside-down and is [incapacitated](/rules/conditions.md#incapacitated).\
    \ At the end of each of its turns, Flapjack can make a DC 10 Dexterity saving\
    \ throw, righting itself and ending the [incapacitated](/rules/conditions.md#incapacitated)\
    \ condition if it succeeds."
  "name": "Prone Deficiency"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Flapjack is immune to any effect that would sense its emotions or read\
    \ its thoughts, as well as all divination spells."
  "name": "Telepathic Shroud"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) piercing damage plus 2 (1d4) acid damage. At the end of each of its turns,\
    \ the target must make a DC 10 Constitution saving throw, taking 2 (1d4) acid\
    \ damage on a failure or ending the recurring acid damage on a success. A [lesser\
    \ restoration](/compendium/spells/lesser-restoration.md) spell cast on the target\
    \ also ends the recurring acid damage."
  "name": "Tendrils"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature in a 15-foot cone originating from Flapjack must succeed\
    \ on a DC 10 Dexterity saving throw or be coated in a foul-smelling liquid. A\
    \ coated creature exudes a horrible stench for 1d4 hours. The coated creature\
    \ is [poisoned](/rules/conditions.md#poisoned) as long as the stench lasts, and\
    \ other creatures are [poisoned](/rules/conditions.md#poisoned) while with in\
    \ 5 feet of the coated creature. A creature can remove the stench on itself by\
    \ using a short rest to bathe in water, alcohol, or vinegar."
  "name": "Stench Spray (1/Day)"
"source":
- "LoX"
name: Flapjack
image: "[[Flapjack.png]]"
---

# Flapjack

```statblock
"name": "Flapjack"
"size": "Small"
"type": "aberration"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "6"
- !!int "15"
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "11"
"speed": "walk 5 ft., fly 30 ft."
"skillsaves":
  "Religion": !!int "4"
  "History": !!int "4"
  "Arcana": !!int "4"
"damage_vulnerabilities": "psychic"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands Undercommon but can't speak, telepathy 60 ft."
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Flapjack casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 12):\n\nAt\
    \ will: [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md)\n\
    \n1/day each: [magic missile](/compendium/spells/magic-missile.md), [unseen\
    \ servant](/compendium/spells/unseen-servant.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Flapjack can perceive the content of any telepathic communication used\
    \ within 60 feet of it, and it can't be surprised by creatures with any form of\
    \ telepathy."
  "name": "Advanced Telepathy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Flapjack is knocked [prone](/rules/conditions.md#prone), roll a die.\
    \ On an odd result, Flapjack lands upside-down and is [incapacitated](/rules/conditions.md#incapacitated).\
    \ At the end of each of its turns, Flapjack can make a DC 10 Dexterity saving\
    \ throw, righting itself and ending the [incapacitated](/rules/conditions.md#incapacitated)\
    \ condition if it succeeds."
  "name": "Prone Deficiency"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Flapjack is immune to any effect that would sense its emotions or read\
    \ its thoughts, as well as all divination spells."
  "name": "Telepathic Shroud"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) piercing damage plus 2 (1d4) acid damage. At the end of each of its turns,\
    \ the target must make a DC 10 Constitution saving throw, taking 2 (1d4) acid\
    \ damage on a failure or ending the recurring acid damage on a success. A [lesser\
    \ restoration](/compendium/spells/lesser-restoration.md) spell cast on the target\
    \ also ends the recurring acid damage."
  "name": "Tendrils"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature in a 15-foot cone originating from Flapjack must succeed\
    \ on a DC 10 Dexterity saving throw or be coated in a foul-smelling liquid. A\
    \ coated creature exudes a horrible stench for 1d4 hours. The coated creature\
    \ is [poisoned](/rules/conditions.md#poisoned) as long as the stench lasts, and\
    \ other creatures are [poisoned](/rules/conditions.md#poisoned) while with in\
    \ 5 feet of the coated creature. A creature can remove the stench on itself by\
    \ using a short rest to bathe in water, alcohol, or vinegar."
  "name": "Stench Spray (1/Day)"
"source":
- "LoX"
"image": "[[Flapjack.png]]"
```
^statblock

*Source: Light of Xaryxis p. 13*

## Description

One crew member stayed aboard the Moondancer while it was in port: a flumph named Flapjack, who serves as the ship's spelljammer.

## Environment

underdark