---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/tiny
- monster/type/monstrosity
aliases: ["Tressym"]
statblock: true
"name": "Tressym"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "5"
"hit_dice": "2d4"
"stats":
- !!int "3"
- !!int "15"
- !!int "10"
- !!int "11"
- !!int "12"
- !!int "12"
"speed": "walk 40 ft., climb 30 ft., fly 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "understands Common but can't speak"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Within 60 feet of the tressym, magical invisibility fails to conceal anything\
    \ from the tressym's sight."
  "name": "Detect Invisibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tressym has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tressym can detect whether a substance is poisonous by taste, touch,\
    \ or smell."
  "name": "Poison Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "With the DM's permission, a person who casts the [find familiar](/compendium/spells/find-familiar.md)\
    \ spell can choose to conjure a tressym in stead of a normal cat."
  "name": "Familiar"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage."
  "name": "Claws"
"source":
- "BGDIA"
name: Tressym
image: "[[Tressym.png]]"
---

# Tressym

```statblock
"name": "Tressym"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "5"
"hit_dice": "2d4"
"stats":
- !!int "3"
- !!int "15"
- !!int "10"
- !!int "11"
- !!int "12"
- !!int "12"
"speed": "walk 40 ft., climb 30 ft., fly 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "understands Common but can't speak"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Within 60 feet of the tressym, magical invisibility fails to conceal anything\
    \ from the tressym's sight."
  "name": "Detect Invisibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tressym has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tressym can detect whether a substance is poisonous by taste, touch,\
    \ or smell."
  "name": "Poison Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "With the DM's permission, a person who casts the [find familiar](/compendium/spells/find-familiar.md)\
    \ spell can choose to conjure a tressym in stead of a normal cat."
  "name": "Familiar"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage."
  "name": "Claws"
"source":
- "BGDIA"
"image": "[[Tressym.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 241*