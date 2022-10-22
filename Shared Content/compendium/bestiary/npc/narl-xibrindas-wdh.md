---
cssclass: json5e-monster
tags:
- compendium/src/wdh
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/underdark
aliases: ["Nar'l Xibrindas"]
statblock: true
"name": "Nar'l Xibrindas"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "10"
- !!int "17"
- !!int "13"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Arcana": !!int "6"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nar'l's spellcasting ability is Charisma (spell save DC 12). It can innately\
    \ cast the following spells, requiring no material components:\n\nAt will:\
    \ [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each: [darkness](/compendium/spells/darkness.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md), [levitate](/compendium/spells/levitate.md)\
    \ (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nar'l is a 10th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). Nar'l has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [poison spray](/compendium/spells/poison-spray.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md), [witch bolt](/compendium/spells/witch-bolt.md)\n\
    \n2nd level (3 2nd-level slots): [alter self](/compendium/spells/alter-self.md),\
    \ [misty step](/compendium/spells/misty-step.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [fly](/compendium/spells/fly.md), [lightning\
    \ bolt](/compendium/spells/lightning-bolt.md)\n\n4th level (3 4th-level slots):\
    \ [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md), [greater\
    \ invisibility](/compendium/spells/greater-invisibility.md)\n\n5th level (2\
    \ 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nar'l has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Nar'l to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Nar'l has disadvantage on attack rolls, as well as on\
    \ Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nar'l carries a vial containing three doses of eyescratch, a contact poison.\
    \ A creature that comes into contact with the poison must succeed on a DC 14 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) for 1 hour and\
    \ [blinded](/rules/conditions.md#blinded) while [poisoned](/rules/conditions.md#poisoned)\
    \ in this way. A [lesser restoration](/compendium/spells/lesser-restoration.md)\
    \ spell or similar magic ends the effect."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two\
    \ hands, plus 3 (1d6) poison damage."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nar'l magically summons a [quasit](/compendium/bestiary/fiend/quasit.md),\
    \ or attempts to summon a [shadow demon](/compendium/bestiary/fiend/shadow-demon.md)\
    \ with a 50|50 percent|50% summoning chance% chance chance of success. The summoned\
    \ demon appears in an unoccupied space within 60 feet of its summoner, acts as\
    \ an ally of its summoner, and can't summon other demons. It remains for 10 minutes,\
    \ until it or its summoner dies, or until its summoner dismisses it as an action."
  "name": "Summon Demon (1/Day)"
"source":
- "WDH"
name: Nar'l Xibrindas
image: "[[Nar'l Xibrindas.png]]"
---

# Nar'l Xibrindas

```statblock
"name": "Nar'l Xibrindas"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "10"
- !!int "17"
- !!int "13"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Arcana": !!int "6"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nar'l's spellcasting ability is Charisma (spell save DC 12). It can innately\
    \ cast the following spells, requiring no material components:\n\nAt will:\
    \ [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each: [darkness](/compendium/spells/darkness.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md), [levitate](/compendium/spells/levitate.md)\
    \ (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nar'l is a 10th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). Nar'l has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [poison spray](/compendium/spells/poison-spray.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md), [witch bolt](/compendium/spells/witch-bolt.md)\n\
    \n2nd level (3 2nd-level slots): [alter self](/compendium/spells/alter-self.md),\
    \ [misty step](/compendium/spells/misty-step.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [fly](/compendium/spells/fly.md), [lightning\
    \ bolt](/compendium/spells/lightning-bolt.md)\n\n4th level (3 4th-level slots):\
    \ [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md), [greater\
    \ invisibility](/compendium/spells/greater-invisibility.md)\n\n5th level (2\
    \ 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nar'l has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Nar'l to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Nar'l has disadvantage on attack rolls, as well as on\
    \ Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nar'l carries a vial containing three doses of eyescratch, a contact poison.\
    \ A creature that comes into contact with the poison must succeed on a DC 14 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) for 1 hour and\
    \ [blinded](/rules/conditions.md#blinded) while [poisoned](/rules/conditions.md#poisoned)\
    \ in this way. A [lesser restoration](/compendium/spells/lesser-restoration.md)\
    \ spell or similar magic ends the effect."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two\
    \ hands, plus 3 (1d6) poison damage."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nar'l magically summons a [quasit](/compendium/bestiary/fiend/quasit.md),\
    \ or attempts to summon a [shadow demon](/compendium/bestiary/fiend/shadow-demon.md)\
    \ with a 50|50 percent|50% summoning chance% chance chance of success. The summoned\
    \ demon appears in an unoccupied space within 60 feet of its summoner, acts as\
    \ an ally of its summoner, and can't summon other demons. It remains for 10 minutes,\
    \ until it or its summoner dies, or until its summoner dismisses it as an action."
  "name": "Summon Demon (1/Day)"
"source":
- "WDH"
"image": "[[Nar'l Xibrindas.png]]"
```
^statblock

*Source: Waterdeep: Dragon Heist p. 211*

## Description

Xanathar's advisor is a nervous and conniving male drow named Nar'l Xibrindas. Nar'l's house was wiped out long ago, but he and his elder brother Soluun survived and joined Bregan D'aerthe. A year ago, Nar'l was given the difficult task of infiltrating the Xanathar Guild and getting as close to the beholder as possible. Not only did he succeed, but in the course of gaining Xanathar's trust, he managed to convince the beholder to eliminate its other advisors. The beholder's paranoia will eventually cause Xanathar to question the drow's loyalty, though, and Nar'l has become increasingly worried about his future. If forced to decide between himself and Bregan D'aerthe, he'll choose the former and betray his drow allies to save his own skin.

Xanathar is aware that something is off with Nar'l, and recently assigned him a grell bodyguard. The grell has instructions to dispose of Nar'l at the first sign of disloyalty.

## Environment

underdark