---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid
- monster/environment/arctic
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/environment/urban
aliases: ["Warlock of the Great Old One"]
statblock: true
"name": "Warlock of the Great Old One"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "9"
- !!int "16"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "History": !!int "4"
  "Arcana": !!int "4"
"damage_resistances": "psychic"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any two languages, telepathy 30 ft."
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 15): \n\nAt will: [detect magic](/compendium/spells/detect-magic.md),\
    \ [guidance](/compendium/spells/guidance.md), [levitate](/compendium/spells/levitate.md),\
    \ [mage armor](/compendium/spells/mage-armor.md) (self only), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [arcane gate](/compendium/spells/arcane-gate.md), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of the warlock's turns, each creature of its choice\
    \ within 5 feet of it must succeed on a DC 15 Wisdom saving throw or take 10 (3d6)\
    \ psychic damage, provided that the warlock isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Whispering Aura"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock makes two Dagger attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 10 (3d6) psychic damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock opens a momentary extraplanar rift within 60 feet of it. The\
    \ rift is a scream-filled, 20-foot cube. Each creature in that area must make\
    \ a DC 15 Wisdom saving throw. On a failed save, a creature takes 9 (2d8) psychic\
    \ damage and is [frightened](/rules/conditions.md#frightened) of the warlock until\
    \ the start of the war lock's next turn. On a successful save, a creature takes\
    \ half as much damage and isn't [frightened](/rules/conditions.md#frightened)."
  "name": "Howling Void"
"source":
- "MPMM"
- "VGM"
name: Warlock of the Great Old One
image: "[[Warlock of the Great Old One.png]]"
---

# Warlock of the Great Old One

```statblock
"name": "Warlock of the Great Old One"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "9"
- !!int "16"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "History": !!int "4"
  "Arcana": !!int "4"
"damage_resistances": "psychic"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any two languages, telepathy 30 ft."
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 15): \n\nAt will: [detect magic](/compendium/spells/detect-magic.md),\
    \ [guidance](/compendium/spells/guidance.md), [levitate](/compendium/spells/levitate.md),\
    \ [mage armor](/compendium/spells/mage-armor.md) (self only), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [arcane gate](/compendium/spells/arcane-gate.md), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of the warlock's turns, each creature of its choice\
    \ within 5 feet of it must succeed on a DC 15 Wisdom saving throw or take 10 (3d6)\
    \ psychic damage, provided that the warlock isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Whispering Aura"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock makes two Dagger attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 10 (3d6) psychic damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock opens a momentary extraplanar rift within 60 feet of it. The\
    \ rift is a scream-filled, 20-foot cube. Each creature in that area must make\
    \ a DC 15 Wisdom saving throw. On a failed save, a creature takes 9 (2d8) psychic\
    \ damage and is [frightened](/rules/conditions.md#frightened) of the warlock until\
    \ the start of the war lock's next turn. On a successful save, a creature takes\
    \ half as much damage and isn't [frightened](/rules/conditions.md#frightened)."
  "name": "Howling Void"
"source":
- "MPMM"
- "VGM"
"image": "[[Warlock of the Great Old One.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 256, Volo's Guide to Monsters p. 220*

## Description

Warlocks of the Great Old One gain their powers through magical pacts forged with eldritch entities from strange and distant realms of existence. Some of these warlocks associate with cultists devoted to these entities, as well as Aberrations that share their goals, yet other warlocks of the Great Old One are experts at rooting out the chaos and wickedness inspired by bizarre beings from beyond the stars.

**Warlocks.** Warlocks gain arcane might through magical pacts with mysterious entities. While some use their abilities to serve the sources of their power, others use them to undermine or even destroy these entities.

## Environment

arctic, hill, mountain, underdark, urban