---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/small-or-medium
- monster/type/humanoid/wizard
aliases: ["Quandrix Pledgemage"]
statblock: true
"name": "Quandrix Pledgemage"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "17"
- !!int "14"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Nature": !!int "5"
  "Investigation": !!int "7"
  "Arcana": !!int "7"
"senses": "passive Perception 12"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 13):\n\nAt will: [guidance](/compendium/spells/guidance.md), [mage hand](/compendium/spells/mage-hand.md)\n\
    \n1/day each: [dimension door](/compendium/spells/dimension-door.md), [enlarge/reduce](/compendium/spells/enlarge-reduce.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [plant growth](/compendium/spells/plant-growth.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage makes two Exponential Lash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 6 (1d6 + 3) force damage, and the pledgemage can cause one\
    \ creature it can see within 30 feet of the target to take 10 (2d6 + 3) force\
    \ damage."
  "name": "Exponential Lash"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage teleports, along with any equipment it is wearing or carrying,\
    \ to an unoccupied space it can see within 60 feet of itself. Immediately after\
    \ it teleports, each creature within 20 feet of the space it left must make a\
    \ DC 13 Constitution saving throw. On a failed save, a creature takes 7 (2d6)\
    \ force damage and is moved 10 feet in a random horizontal direction. On a successful\
    \ save, a creature takes half as much damage and isn't moved."
  "name": "Vortex Calculus (Recharge 4-6)"
"source":
- "SCC"
name: Quandrix Pledgemage
image: "[[Quandrix Pledgemage.png]]"
---

# Quandrix Pledgemage

```statblock
"name": "Quandrix Pledgemage"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "17"
- !!int "14"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Nature": !!int "5"
  "Investigation": !!int "7"
  "Arcana": !!int "7"
"senses": "passive Perception 12"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 13):\n\nAt will: [guidance](/compendium/spells/guidance.md), [mage hand](/compendium/spells/mage-hand.md)\n\
    \n1/day each: [dimension door](/compendium/spells/dimension-door.md), [enlarge/reduce](/compendium/spells/enlarge-reduce.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [plant growth](/compendium/spells/plant-growth.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage makes two Exponential Lash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 6 (1d6 + 3) force damage, and the pledgemage can cause one\
    \ creature it can see within 30 feet of the target to take 10 (2d6 + 3) force\
    \ damage."
  "name": "Exponential Lash"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage teleports, along with any equipment it is wearing or carrying,\
    \ to an unoccupied space it can see within 60 feet of itself. Immediately after\
    \ it teleports, each creature within 20 feet of the space it left must make a\
    \ DC 13 Constitution saving throw. On a failed save, a creature takes 7 (2d6)\
    \ force damage and is moved 10 feet in a random horizontal direction. On a successful\
    \ save, a creature takes half as much damage and isn't moved."
  "name": "Vortex Calculus (Recharge 4-6)"
"source":
- "SCC"
"image": "[[Quandrix Pledgemage.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 208*

## Description

The students of Quandrix College—first as apprentices and then as pledgemages—immerse themselves in the magic of geometry and metaphysics. Their ultimate goal isn't mastery, however. Rather, in their projects they explore and expand knowledge without expecting concrete answers. Whether students are extrapolating mathematical patterns in nature or engaging in speculative dives into topological formulas that bend reality, their studies blur the line between abstract numerical theory and natural reality.

**Quandrix Scholars.** The scholars of Quandrix College focus on the mathematical principles that govern reality. Through these formulas, they can manipulate properties of matter and space, as well as abstract and conceptual space such as the mind, probability, and the flow of magic itself.