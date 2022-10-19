---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/small-or-medium
- monster/type/humanoid/wizard
aliases: ["Quandrix Professor of Theory"]
statblock: true
"name": "Quandrix Professor of Theory"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "97"
"hit_dice": "15d8 + 30"
"stats":
- !!int "11"
- !!int "14"
- !!int "14"
- !!int "19"
- !!int "15"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
  "Constitution": !!int "5"
"skillsaves":
  "Investigation": !!int "10"
  "Insight": !!int "5"
  "Perception": !!int "5"
  "Arcana": !!int "10"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "passive Perception 15"
"languages": "Common plus any four languages"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 15):\n\nAt will: [guidance](/compendium/spells/guidance.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each: [mage\
    \ armor](/compendium/spells/mage-armor.md), [major image](/compendium/spells/major-image.md),\
    \ [mirage arcane](/compendium/spells/mirage-arcane.md) (as an action), [Rary's\
    \ telepathic bond](/compendium/spells/rarys-telepathic-bond.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor makes two Heuristic Lance attacks. It can also use Overriding\
    \ Theorem, if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 60 ft.,\
    \ one creature. Hit: 13 (2d8 + 4) psychic damage, and the target is [poisoned](/rules/conditions.md#poisoned)\
    \ until the end of its next turn."
  "name": "Heuristic Lance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor magically influences the mind of up to two creatures it can\
    \ see within 60 feet of itself. Each target must succeed on a DC 15 Intelligence\
    \ saving throw or become [charmed](/rules/conditions.md#charmed) by the professor\
    \ until the start of the professor's next turn. The [charmed](/rules/conditions.md#charmed)\
    \ creature must immediately use its reaction, if available, to move up its speed\
    \ toward another creature of the professor's choice and make one melee attack\
    \ against that other creature."
  "name": "Overriding Theorem (Recharge 4-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the professor sees another creature within 60 feet of itself casting\
    \ a spell, the professor can try to nullify the spell's formation. The creature\
    \ must succeed on a DC 15 saving throw using the spell's spellcasting ability,\
    \ or the spell fails and is wasted."
  "name": "Divide by Zero (2/Day)"
"source":
- "SCC"
name: Quandrix Professor of Theory
image: "[[Quandrix Professor of Theory.png]]"
---

# Quandrix Professor of Theory

```statblock
"name": "Quandrix Professor of Theory"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "97"
"hit_dice": "15d8 + 30"
"stats":
- !!int "11"
- !!int "14"
- !!int "14"
- !!int "19"
- !!int "15"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
  "Constitution": !!int "5"
"skillsaves":
  "Investigation": !!int "10"
  "Insight": !!int "5"
  "Perception": !!int "5"
  "Arcana": !!int "10"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "passive Perception 15"
"languages": "Common plus any four languages"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 15):\n\nAt will: [guidance](/compendium/spells/guidance.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each: [mage\
    \ armor](/compendium/spells/mage-armor.md), [major image](/compendium/spells/major-image.md),\
    \ [mirage arcane](/compendium/spells/mirage-arcane.md) (as an action), [Rary's\
    \ telepathic bond](/compendium/spells/rarys-telepathic-bond.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor makes two Heuristic Lance attacks. It can also use Overriding\
    \ Theorem, if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 60 ft.,\
    \ one creature. Hit: 13 (2d8 + 4) psychic damage, and the target is [poisoned](/rules/conditions.md#poisoned)\
    \ until the end of its next turn."
  "name": "Heuristic Lance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor magically influences the mind of up to two creatures it can\
    \ see within 60 feet of itself. Each target must succeed on a DC 15 Intelligence\
    \ saving throw or become [charmed](/rules/conditions.md#charmed) by the professor\
    \ until the start of the professor's next turn. The [charmed](/rules/conditions.md#charmed)\
    \ creature must immediately use its reaction, if available, to move up its speed\
    \ toward another creature of the professor's choice and make one melee attack\
    \ against that other creature."
  "name": "Overriding Theorem (Recharge 4-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the professor sees another creature within 60 feet of itself casting\
    \ a spell, the professor can try to nullify the spell's formation. The creature\
    \ must succeed on a DC 15 saving throw using the spell's spellcasting ability,\
    \ or the spell fails and is wasted."
  "name": "Divide by Zero (2/Day)"
"source":
- "SCC"
"image": "[[Quandrix Professor of Theory.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 209*

## Description

Professors of theory advance the Quandrix philosophy that math-magical manipulation is most powerful in the abstract dimension of minds, probability, and the fabric of magic itself. Their equations shift perceptions in profound ways, alter probability, and interfere with the formation of other magic. In battle, the professors tweak probability to impede attacks and strike at the minds of their foes with lancing equations that disrupt the opponent's resolve.

Professors of theory hold that altering the way a person interacts with the world can change the world. They impress upon their students to use magic as a tool to shape the overall experience of reality, and in turn make the world a better place.

**Quandrix Scholars.** The scholars of Quandrix College focus on the mathematical principles that govern reality. Through these formulas, they can manipulate properties of matter and space, as well as abstract and conceptual space such as the mind, probability, and the flow of magic itself.