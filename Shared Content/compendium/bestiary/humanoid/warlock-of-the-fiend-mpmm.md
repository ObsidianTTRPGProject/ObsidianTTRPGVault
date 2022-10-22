---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid
- monster/environment/arctic
- monster/environment/desert
- monster/environment/underdark
- monster/environment/urban
aliases: ["Warlock of the Fiend"]
statblock: true
"name": "Warlock of the Fiend"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "10"
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
  "Deception": !!int "7"
  "Religion": !!int "4"
  "Arcana": !!int "4"
  "Persuasion": !!int "7"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any two languages (usually Abyssal or Infernal)"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 15): \n\nAt will: [alter self](/compendium/spells/alter-self.md),\
    \ [mage armor](/compendium/spells/mage-armor.md) (self only), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [banishment](/compendium/spells/banishment.md), [plane shift](/compendium/spells/plane-shift.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the warlock makes an ability check or saving throw, it can add a d10\
    \ to the roll. It can do this after the roll is made but before any of the roll's\
    \ effects occur."
  "name": "Dark One's Own Luck (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock makes three Scimitar attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage plus 14 (4d6) fire damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Green flame explodes in a 10-foot-radius sphere centered on a point within\
    \ 120 feet of the warlock. Each creature in that area must make a DC 15 Dexterity\
    \ saving throw, taking 16 (3d10) fire damage and 11 (2d10) necrotic damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Hellfire"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being damaged by a visible creature within 60 feet of it,\
    \ the warlock forces that creature to make a DC 15 Constitution saving throw,\
    \ taking 22 (4d10) necrotic damage on a failed save, or half as much damage on\
    \ a successful one."
  "name": "Fiendish Rebuke (3/Day)"
"source":
- "MPMM"
- "VGM"
name: Warlock of the Fiend
image: "[[Warlock of the Fiend.png]]"
---

# Warlock of the Fiend

```statblock
"name": "Warlock of the Fiend"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "10"
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
  "Deception": !!int "7"
  "Religion": !!int "4"
  "Arcana": !!int "4"
  "Persuasion": !!int "7"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any two languages (usually Abyssal or Infernal)"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 15): \n\nAt will: [alter self](/compendium/spells/alter-self.md),\
    \ [mage armor](/compendium/spells/mage-armor.md) (self only), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [banishment](/compendium/spells/banishment.md), [plane shift](/compendium/spells/plane-shift.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the warlock makes an ability check or saving throw, it can add a d10\
    \ to the roll. It can do this after the roll is made but before any of the roll's\
    \ effects occur."
  "name": "Dark One's Own Luck (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock makes three Scimitar attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage plus 14 (4d6) fire damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Green flame explodes in a 10-foot-radius sphere centered on a point within\
    \ 120 feet of the warlock. Each creature in that area must make a DC 15 Dexterity\
    \ saving throw, taking 16 (3d10) fire damage and 11 (2d10) necrotic damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Hellfire"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being damaged by a visible creature within 60 feet of it,\
    \ the warlock forces that creature to make a DC 15 Constitution saving throw,\
    \ taking 22 (4d10) necrotic damage on a failed save, or half as much damage on\
    \ a successful one."
  "name": "Fiendish Rebuke (3/Day)"
"source":
- "MPMM"
- "VGM"
"image": "[[Warlock of the Fiend.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 255, Volo's Guide to Monsters p. 219*

## Description

Warlocks of the Fiend gain their powers through magical pacts forged with archfiends of the Lower Planes. These warlocks often keep [imps](/compendium/bestiary/fiend/imp.md) or [quasits](/compendium/bestiary/fiend/quasit.md) as companions, and they tend toward philosophical extremes: consorting with fiendish cults or dedicating their lives to destroying such cults.

**Warlocks.** Warlocks gain arcane might through magical pacts with mysterious entities. While some use their abilities to serve the sources of their power, others use them to undermine or even destroy these entities.

## Environment

arctic, desert, underdark, urban