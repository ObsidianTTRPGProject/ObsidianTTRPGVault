---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/cleric
- monster/type/humanoid/elf
- monster/environment/underdark
aliases: ["Drow Inquisitor"]
statblock: true
"name": "Drow Inquisitor"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric, elf"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "149"
"hit_dice": "23d8 + 46"
"stats":
- !!int "11"
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "21"
- !!int "20"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "10"
  "Wisdom": !!int "10"
  "Constitution": !!int "7"
"skillsaves":
  "Stealth": !!int "7"
  "Religion": !!int "8"
  "Insight": !!int "10"
  "Perception": !!int "10"
"condition_immunities": "frightened"
"senses": "darkvision 120 ft., passive Perception 20"
"languages": "Elvish, Undercommon"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow's casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 18):\n\nAt will:\
    \ [dancing lights](/compendium/spells/dancing-lights.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [message](/compendium/spells/message.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1/day each: [clairvoyance](/compendium/spells/clairvoyance.md), [darkness](/compendium/spells/darkness.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md), [levitate](/compendium/spells/levitate.md)\
    \ (self only), [silence](/compendium/spells/silence.md), [suggestion](/compendium/spells/suggestion.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow discerns when a creature in earshot speaks a lie in a language\
    \ the drow knows."
  "name": "Discern Lie"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow makes three Death Lance attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) piercing damage plus 18 (4d8) necrotic damage. The target's hit point maximum\
    \ is reduced by an amount equal to the necrotic damage taken. This reduction lasts\
    \ until the target finishes a long rest. The target dies if its hit point maximum\
    \ is reduced to 0."
  "name": "Death Lance"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow conjures a floating, spectral dagger within 60 feet of itself.\
    \ The drow can make a melee spell attack (+10 to hit) against one creature within\
    \ 5 feet of the dagger. On a hit, the target takes 9 (1d8 + 5) force damage.\n\
    \nThe dagger lasts for 1 minute. As a bonus action on later turns, the drow can\
    \ move the dagger up to 20 feet and repeat the attack against one creature within\
    \ 5 feet of the dagger."
  "name": "Spectral Dagger (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
name: Drow Inquisitor
image: "[[Drow Inquisitor.png]]"
---

# Drow Inquisitor

```statblock
"name": "Drow Inquisitor"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric, elf"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "149"
"hit_dice": "23d8 + 46"
"stats":
- !!int "11"
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "21"
- !!int "20"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "10"
  "Wisdom": !!int "10"
  "Constitution": !!int "7"
"skillsaves":
  "Stealth": !!int "7"
  "Religion": !!int "8"
  "Insight": !!int "10"
  "Perception": !!int "10"
"condition_immunities": "frightened"
"senses": "darkvision 120 ft., passive Perception 20"
"languages": "Elvish, Undercommon"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow's casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 18):\n\nAt will:\
    \ [dancing lights](/compendium/spells/dancing-lights.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [message](/compendium/spells/message.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1/day each: [clairvoyance](/compendium/spells/clairvoyance.md), [darkness](/compendium/spells/darkness.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md), [levitate](/compendium/spells/levitate.md)\
    \ (self only), [silence](/compendium/spells/silence.md), [suggestion](/compendium/spells/suggestion.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow discerns when a creature in earshot speaks a lie in a language\
    \ the drow knows."
  "name": "Discern Lie"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow makes three Death Lance attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) piercing damage plus 18 (4d8) necrotic damage. The target's hit point maximum\
    \ is reduced by an amount equal to the necrotic damage taken. This reduction lasts\
    \ until the target finishes a long rest. The target dies if its hit point maximum\
    \ is reduced to 0."
  "name": "Death Lance"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow conjures a floating, spectral dagger within 60 feet of itself.\
    \ The drow can make a melee spell attack (+10 to hit) against one creature within\
    \ 5 feet of the dagger. On a hit, the target takes 9 (1d8 + 5) force damage.\n\
    \nThe dagger lasts for 1 minute. As a bonus action on later turns, the drow can\
    \ move the dagger up to 20 feet and repeat the attack against one creature within\
    \ 5 feet of the dagger."
  "name": "Spectral Dagger (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
"image": "[[Drow Inquisitor.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 102, Mordenkainen's Tome of Foes p. 184*

## Description

Lolth's worshipers expect treachery—the Spider Queen encourages it, after all. A certain amount of backstabbing and double-crossing can be managed, but too much can undermine an entire community. To keep some semblance of order and to root out traitors, priestesses of Lolth employ inquisitors. Inquisitors are chosen from the ranks of the priesthood, and their authority is equaled only by that of the [drow matron mothers](/compendium/bestiary/humanoid/drow-matron-mother-mpmm.md) (also in this book) of the noble houses. Anyone they decide is at odds with the hierarchy faces painful interrogation and usually an excruciating death.

## Environment

underdark