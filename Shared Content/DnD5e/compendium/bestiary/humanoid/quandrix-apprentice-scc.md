---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/small-or-medium
- monster/type/humanoid/wizard
aliases: ["Quandrix Apprentice"]
statblock: true
"name": "Quandrix Apprentice"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "15"
- !!int "14"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "4"
"skillsaves":
  "Nature": !!int "4"
  "Investigation": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 12"
"languages": "Common plus any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The apprentice casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 12):\n\nAt will: [guidance](/compendium/spells/guidance.md), [mage hand](/compendium/spells/mage-hand.md)\n\
    \n1/day each: [enlarge/reduce](/compendium/spells/enlarge-reduce.md), [mage\
    \ armor](/compendium/spells/mage-armor.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The apprentice makes two Exponential Lash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +4 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 5 (1d6 + 2) force damage, and the apprentice can cause one\
    \ creature it can see within 30 feet of the target to take 9 (2d6 + 2) force damage."
  "name": "Exponential Lash"
"source":
- "SCC"
name: Quandrix Apprentice
image: "[[Quandrix Apprentice.png]]"
---

# Quandrix Apprentice

```statblock
"name": "Quandrix Apprentice"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "15"
- !!int "14"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "4"
"skillsaves":
  "Nature": !!int "4"
  "Investigation": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 12"
"languages": "Common plus any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The apprentice casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 12):\n\nAt will: [guidance](/compendium/spells/guidance.md), [mage hand](/compendium/spells/mage-hand.md)\n\
    \n1/day each: [enlarge/reduce](/compendium/spells/enlarge-reduce.md), [mage\
    \ armor](/compendium/spells/mage-armor.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The apprentice makes two Exponential Lash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +4 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 5 (1d6 + 2) force damage, and the apprentice can cause one\
    \ creature it can see within 30 feet of the target to take 9 (2d6 + 2) force damage."
  "name": "Exponential Lash"
"source":
- "SCC"
"image": "[[Quandrix Apprentice.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 208*

## Description

The students of Quandrix College—first as apprentices and then as pledgemages—immerse themselves in the magic of geometry and metaphysics. Their ultimate goal isn't mastery, however. Rather, in their projects they explore and expand knowledge without expecting concrete answers. Whether students are extrapolating mathematical patterns in nature or engaging in speculative dives into topological formulas that bend reality, their studies blur the line between abstract numerical theory and natural reality.

**Quandrix Scholars.** The scholars of Quandrix College focus on the mathematical principles that govern reality. Through these formulas, they can manipulate properties of matter and space, as well as abstract and conceptual space such as the mind, probability, and the flow of magic itself.