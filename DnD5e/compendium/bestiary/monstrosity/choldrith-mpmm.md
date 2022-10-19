---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/monstrosity/cleric
- monster/environment/underdark
aliases: ["Choldrith"]
statblock: true
"name": "Choldrith"
"size": "Medium"
"type": "monstrosity"
"subtype": "cleric"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "12"
- !!int "16"
- !!int "12"
- !!int "11"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Stealth": !!int "5"
  "Religion": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Undercommon"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The choldrith casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [guidance](/compendium/spells/guidance.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1/day each: [bane](/compendium/spells/bane.md),\
    \ [hold person](/compendium/spells/hold-person.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The choldrith has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the choldrith to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The choldrith can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the choldrith has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in contact with a web, the choldrith knows the exact location of\
    \ any other creature in contact with the same web."
  "name": "Web Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The choldrith ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 10 (3d6) poison damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one Large or smaller\
    \ creature. Hit: The target is [restrained](/rules/conditions.md#restrained) by\
    \ webbing. As an action, the [restrained](/rules/conditions.md#restrained) target\
    \ can make a DC 11 Strength check, bursting the webbing on a success. The webbing\
    \ can also be attacked and destroyed (AC 10; 5 hit points; vulnerability to fire\
    \ damage; immunity to bludgeoning, poison, and psychic damage)."
  "name": "Web (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The choldrith conjures a floating, spectral dagger within 60 feet of itself.\
    \ The choldrith can make a melee spell attack (+4 to hit) against one creature\
    \ within 5 feet of the dagger. On a hit, the target takes 6 (1d8 + 2) force damage.\n\
    \nThe dagger lasts for 1 minute. As a bonus action on later turns, the choldrith\
    \ can move the dagger up to 20 feet and repeat the attack against one creature\
    \ within 5 feet of the dagger."
  "name": "Spectral Dagger (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
name: Choldrith
image: "[[Choldrith.png]]"
---

# Choldrith

```statblock
"name": "Choldrith"
"size": "Medium"
"type": "monstrosity"
"subtype": "cleric"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "12"
- !!int "16"
- !!int "12"
- !!int "11"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Stealth": !!int "5"
  "Religion": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Undercommon"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The choldrith casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [guidance](/compendium/spells/guidance.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1/day each: [bane](/compendium/spells/bane.md),\
    \ [hold person](/compendium/spells/hold-person.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The choldrith has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the choldrith to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The choldrith can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the choldrith has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in contact with a web, the choldrith knows the exact location of\
    \ any other creature in contact with the same web."
  "name": "Web Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The choldrith ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 10 (3d6) poison damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one Large or smaller\
    \ creature. Hit: The target is [restrained](/rules/conditions.md#restrained) by\
    \ webbing. As an action, the [restrained](/rules/conditions.md#restrained) target\
    \ can make a DC 11 Strength check, bursting the webbing on a success. The webbing\
    \ can also be attacked and destroyed (AC 10; 5 hit points; vulnerability to fire\
    \ damage; immunity to bludgeoning, poison, and psychic damage)."
  "name": "Web (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The choldrith conjures a floating, spectral dagger within 60 feet of itself.\
    \ The choldrith can make a melee spell attack (+4 to hit) against one creature\
    \ within 5 feet of the dagger. On a hit, the target takes 6 (1d8 + 2) force damage.\n\
    \nThe dagger lasts for 1 minute. As a bonus action on later turns, the choldrith\
    \ can move the dagger up to 20 feet and repeat the attack against one creature\
    \ within 5 feet of the dagger."
  "name": "Spectral Dagger (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
"image": "[[Choldrith.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 77, Volo's Guide to Monsters p. 132*

## Description

Choldriths are monstrous spiderlike creatures originally created to serve Lolth. They rule colonies of chitines (in this book) and lead them into battle in Lolth's war against her enemies.

When devotees of Lolth created the first chitines, she watched as her followers used arcane magic and demonic powers and invoked her aid for the divine spark needed to ensure the subjects' survival, expecting to see these new abominations dedicated solely to her, but the devotees performed no such ritual. As revenge for the devotees' betrayal, the Spider Queen manipulated the creation rituals so that they sometimes created choldriths instead of chitines.

At first, these devotees were unaware that the new creatures, which they dubbed choldriths, were signs of Lolth's wrath. Instead, they were pleased, because choldriths could lay eggs that birthed more chitines (and the rare choldrith) and could direct the chitines in their work. But the devotees soon realized their mistake—choldriths belonged to Lolth, body and soul. Choldriths whispered to the chitines of their adoration of the Spider Queen and their enmity against their creators, and led them in a successful revolt.

Choldriths are born with a mystical connection to Lolth, which gives them divine magic. They also make up the ruling caste of most chitine colonies. A colony can support numerous choldriths, who serve as commanders, priests, and supervisors. The choldriths continually jockey for position, although they rarely confront one another in a way that puts the colony at risk. The colony is ruled by a sovereign, who determines which colony members perform which tasks, including whether a choldrith is permitted to lay eggs. Sometimes a choldrith ruler receives a vision from Lolth that inspires the entire colony into some grand, often violent, action.

## Environment

underdark