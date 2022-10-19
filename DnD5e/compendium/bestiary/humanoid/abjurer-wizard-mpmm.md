---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid
- monster/environment/urban
aliases: ["Abjurer Wizard"]
statblock: true
"name": "Abjurer Wizard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"stats":
- !!int "9"
- !!int "14"
- !!int "14"
- !!int "18"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "8"
"skillsaves":
  "History": !!int "8"
  "Arcana": !!int "8"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abjurer casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 16):\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1/day each:\
    \ [arcane lock](/compendium/spells/arcane-lock.md), [banishment](/compendium/spells/banishment.md),\
    \ [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md),\
    \ [invisibility](/compendium/spells/invisibility.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n2/day each: [dispel magic](/compendium/spells/dispel-magic.md), [lightning\
    \ bolt](/compendium/spells/lightning-bolt.md), [mage armor](/compendium/spells/mage-armor.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abjurer makes three Arcane Burst attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +8 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 20 (3d10 + 4) force damage."
  "name": "Arcane Burst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature in a 20-foot cube originating from the abjurer must make\
    \ a DC 16 Constitution saving throw. On a failed save, a creature takes 36 (8d8)\
    \ force damage and is pushed up to 10 feet away from the abjurer. On a successful\
    \ save, a creature takes half as much damage and isn't pushed."
  "name": "Force Blast"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the abjurer or a creature it can see within 30 feet of it takes damage,\
    \ the abjurer magically creates a protective barrier around itself or the other\
    \ creature. The barrier reduces the damage to the protected creature by 26 (4d10\
    \ + 4), to a minimum of 0, and then vanishes."
  "name": "Arcane Ward (Recharge 4-6)"
"source":
- "MPMM"
- "VGM"
name: Abjurer Wizard
image: "[[Abjurer Wizard.png]]"
---

# Abjurer Wizard

```statblock
"name": "Abjurer Wizard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"stats":
- !!int "9"
- !!int "14"
- !!int "14"
- !!int "18"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "8"
"skillsaves":
  "History": !!int "8"
  "Arcana": !!int "8"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abjurer casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 16):\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1/day each:\
    \ [arcane lock](/compendium/spells/arcane-lock.md), [banishment](/compendium/spells/banishment.md),\
    \ [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md),\
    \ [invisibility](/compendium/spells/invisibility.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n2/day each: [dispel magic](/compendium/spells/dispel-magic.md), [lightning\
    \ bolt](/compendium/spells/lightning-bolt.md), [mage armor](/compendium/spells/mage-armor.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abjurer makes three Arcane Burst attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +8 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 20 (3d10 + 4) force damage."
  "name": "Arcane Burst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature in a 20-foot cube originating from the abjurer must make\
    \ a DC 16 Constitution saving throw. On a failed save, a creature takes 36 (8d8)\
    \ force damage and is pushed up to 10 feet away from the abjurer. On a successful\
    \ save, a creature takes half as much damage and isn't pushed."
  "name": "Force Blast"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the abjurer or a creature it can see within 30 feet of it takes damage,\
    \ the abjurer magically creates a protective barrier around itself or the other\
    \ creature. The barrier reduces the damage to the protected creature by 26 (4d10\
    \ + 4), to a minimum of 0, and then vanishes."
  "name": "Arcane Ward (Recharge 4-6)"
"source":
- "MPMM"
- "VGM"
"image": "[[Abjurer Wizard.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 260, Volo's Guide to Monsters p. 209*

## Description

Abjurers specialize in creating protective magical wards. Monarchs, nobles, and other wealthy individuals commonly hire abjurers to provide protection.

**Wizards.** Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

## Environment

urban