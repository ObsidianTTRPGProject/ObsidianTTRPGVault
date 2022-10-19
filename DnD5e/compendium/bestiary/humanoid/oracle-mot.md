---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/medium
- monster/type/humanoid
aliases: ["Oracle"]
statblock: true
"name": "Oracle"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "5"
"skillsaves":
  "Religion": !!int "5"
  "Insight": !!int "5"
  "Persuasion": !!int "4"
"senses": "passive Perception 13"
"languages": "Celestial, Common"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oracle's spellcasting ability is Wisdom (spell save DC 13, +5 to hit\
    \ with spell attacks). It can innately cast the following spells, requiring no\
    \ material components:\n\nAt will: [guidance](/compendium/spells/guidance.md),\
    \ [light](/compendium/spells/light.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1/day each: [augury](/compendium/spells/augury.md), [scrying](/compendium/spells/scrying.md)\n\
    \n3/day each: [bless](/compendium/spells/bless.md), [guiding bolt](/compendium/spells/guiding-bolt.md),\
    \ [healing word](/compendium/spells/healing-word.md), [hold person](/compendium/spells/hold-person.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the oracle is wearing no armor and wielding no shield, its AC includes\
    \ its Wisdom modifier. In addition, a creature that hits the oracle with a melee\
    \ attack while within 5 feet of it takes 9 (2d8) force damage."
  "name": "Blessings of the Gods"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 +\
    \ 3) force damage."
  "name": "Eldritch Touch"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the oracle or a creature it can see makes an attack roll, a saving\
    \ throw, or an ability check, the oracle can cause the roll to be made with advantage\
    \ or disadvantage."
  "name": "Divine Insight (3/Day)"
"source":
- "MOT"
name: Oracle
image: "[[Oracle.png]]"
---

# Oracle

```statblock
"name": "Oracle"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "5"
"skillsaves":
  "Religion": !!int "5"
  "Insight": !!int "5"
  "Persuasion": !!int "4"
"senses": "passive Perception 13"
"languages": "Celestial, Common"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oracle's spellcasting ability is Wisdom (spell save DC 13, +5 to hit\
    \ with spell attacks). It can innately cast the following spells, requiring no\
    \ material components:\n\nAt will: [guidance](/compendium/spells/guidance.md),\
    \ [light](/compendium/spells/light.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1/day each: [augury](/compendium/spells/augury.md), [scrying](/compendium/spells/scrying.md)\n\
    \n3/day each: [bless](/compendium/spells/bless.md), [guiding bolt](/compendium/spells/guiding-bolt.md),\
    \ [healing word](/compendium/spells/healing-word.md), [hold person](/compendium/spells/hold-person.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the oracle is wearing no armor and wielding no shield, its AC includes\
    \ its Wisdom modifier. In addition, a creature that hits the oracle with a melee\
    \ attack while within 5 feet of it takes 9 (2d8) force damage."
  "name": "Blessings of the Gods"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 +\
    \ 3) force damage."
  "name": "Eldritch Touch"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the oracle or a creature it can see makes an attack roll, a saving\
    \ throw, or an ability check, the oracle can cause the roll to be made with advantage\
    \ or disadvantage."
  "name": "Divine Insight (3/Day)"
"source":
- "MOT"
"image": "[[Oracle.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 238*

## Description

Oracles posses the ability to interpret the patterns and language of Nyx, divining from it the flow of fates and the will of the gods. Most of these gifted—or cursed—mortals communicate with a single god, interpreting their intentions for the wider world. Others aren't aligned with a god and observe the night sky, reading Nyx like a vast, cryptic scroll for insights.