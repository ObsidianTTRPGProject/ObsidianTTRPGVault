---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/gargantuan
- monster/type/monstrosity
aliases: ["Mossback Steward"]
statblock: true
"name": "Mossback Steward"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "227"
"hit_dice": "13d20 + 91"
"stats":
- !!int "28"
- !!int "3"
- !!int "25"
- !!int "12"
- !!int "17"
- !!int "5"
"speed": "walk 20 ft."
"saves":
  "Strength": !!int "12"
  "Constitution": !!int "10"
"skillsaves":
  "Nature": !!int "5"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Arcana": !!int "5"
  "Persuasion": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft, passive Perception 10"
"languages": "telepathy 120 ft, understands Goblin, Common, and Primordial but can't\
  \ speak"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mossback Steward's innate spellcasting ability is Wisdom (spell save DC\
    \ 15). It can innately cast the following spells, requiring no material components.\n\
    \nAt will: [friends](/compendium/spells/friends.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mossback Steward can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mossback Steward can carry up to 20,000 pounds of weight atop its shell,\
    \ but moves at half speed if the weight exceeds 10,000 pounds. Medium or smaller\
    \ creatures can move underneath Mossback Steward while it's not [prone](/rules/conditions.md#prone).\n\
    \nAny creature under Mossback Steward when it falls [prone](/rules/conditions.md#prone)\
    \ is [grappled](/rules/conditions.md#grappled) (escape DC 18). Until the grapple\
    \ ends, the creature is [prone](/rules/conditions.md#prone) and [restrained](/rules/conditions.md#restrained)."
  "name": "Massive Frame"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 28 (3d12\
    \ + 9) bludgeoning damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mossback Steward withdraws into its shell, falls [prone](/rules/conditions.md#prone),\
    \ and gains a +5 bonus to AC. While Mossback Steward is in its shell, its speed\
    \ is 0 and can't increase. Mossback Steward can emerge from its shell as an action,\
    \ whereupon it is no longer [prone](/rules/conditions.md#prone)."
  "name": "Shell Defense (Recharge 4-6)"
"source":
- "EGW"
name: Mossback Steward
image: "[[Mossback Steward.png]]"
---

# Mossback Steward

```statblock
"name": "Mossback Steward"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "227"
"hit_dice": "13d20 + 91"
"stats":
- !!int "28"
- !!int "3"
- !!int "25"
- !!int "12"
- !!int "17"
- !!int "5"
"speed": "walk 20 ft."
"saves":
  "Strength": !!int "12"
  "Constitution": !!int "10"
"skillsaves":
  "Nature": !!int "5"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Arcana": !!int "5"
  "Persuasion": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft, passive Perception 10"
"languages": "telepathy 120 ft, understands Goblin, Common, and Primordial but can't\
  \ speak"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mossback Steward's innate spellcasting ability is Wisdom (spell save DC\
    \ 15). It can innately cast the following spells, requiring no material components.\n\
    \nAt will: [friends](/compendium/spells/friends.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mossback Steward can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mossback Steward can carry up to 20,000 pounds of weight atop its shell,\
    \ but moves at half speed if the weight exceeds 10,000 pounds. Medium or smaller\
    \ creatures can move underneath Mossback Steward while it's not [prone](/rules/conditions.md#prone).\n\
    \nAny creature under Mossback Steward when it falls [prone](/rules/conditions.md#prone)\
    \ is [grappled](/rules/conditions.md#grappled) (escape DC 18). Until the grapple\
    \ ends, the creature is [prone](/rules/conditions.md#prone) and [restrained](/rules/conditions.md#restrained)."
  "name": "Massive Frame"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 28 (3d12\
    \ + 9) bludgeoning damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mossback Steward withdraws into its shell, falls [prone](/rules/conditions.md#prone),\
    \ and gains a +5 bonus to AC. While Mossback Steward is in its shell, its speed\
    \ is 0 and can't increase. Mossback Steward can emerge from its shell as an action,\
    \ whereupon it is no longer [prone](/rules/conditions.md#prone)."
  "name": "Shell Defense (Recharge 4-6)"
"source":
- "EGW"
"image": "[[Mossback Steward.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 256*

## Description

Desolate badlands and soggy marshes are home to the ancient and massive horizonback tortoises of Eastern Wynandir. Nearly fifty feet from nose to tail, and with a habit of remaining stationary for long periods, a horizonback tortoise is easy to mistake for a low hill at a distance. But when these impressive creatures rise to begin their march, the sight inspires fear and awe in equal parts. An omnivore of incredible size, these scavengers prefer to feed on dead vegetation, but make use of whatever edible matter they come across.