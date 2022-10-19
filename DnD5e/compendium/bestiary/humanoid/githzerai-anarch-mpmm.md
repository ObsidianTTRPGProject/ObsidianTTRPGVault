---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/gith
aliases: ["Githzerai Anarch"]
statblock: true
"name": "Githzerai Anarch"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "20"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "16"
- !!int "21"
- !!int "18"
- !!int "18"
- !!int "20"
- !!int "14"
"speed": "walk 30 ft., fly 40 ft. (hover)"
"saves":
  "Dexterity": !!int "10"
  "Wisdom": !!int "10"
  "Intelligence": !!int "9"
  "Strength": !!int "8"
"skillsaves":
  "Insight": !!int "10"
  "Perception": !!int "10"
  "Arcana": !!int "9"
"senses": "passive Perception 20"
"languages": "Gith"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githzerai casts one of the following spells, requiring no spell components\
    \ and using Wisdom as the spellcasting ability (spell save DC 18):\n\nAt will:\
    \ [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible)\n\n1/day\
    \ each: [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md),\
    \ [plane shift](/compendium/spells/plane-shift.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n3/day each: [see invisibility](/compendium/spells/see-invisibility.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the githzerai fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the githzerai is wearing no armor and wielding no shield, its AC\
    \ includes its Wisdom modifier."
  "name": "Psychic Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githzerai makes three Unarmed Strike attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) bludgeoning damage plus 18 (4d8) psychic damage."
  "name": "Unarmed Strike"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githzerai makes one Unarmed Strike attack."
  "name": "Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githzerai teleports, along with any equipment it is wearing or carrying,\
    \ to an unoccupied space it can see within 30 feet of it."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githzerai casts the [reverse gravity](/compendium/spells/reverse-gravity.md)\
    \ spell, using Wisdom as the spellcasting ability. The spell has the normal effect,\
    \ except that the githzerai can orient the area in any direction and creatures\
    \ and objects fall toward the end of the area."
  "name": "Change Gravity (Costs 3 Actions)"
"source":
- "MPMM"
- "MTF"
name: Githzerai Anarch
image: "[[Githzerai Anarch.png]]"
---

# Githzerai Anarch

```statblock
"name": "Githzerai Anarch"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "20"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "16"
- !!int "21"
- !!int "18"
- !!int "18"
- !!int "20"
- !!int "14"
"speed": "walk 30 ft., fly 40 ft. (hover)"
"saves":
  "Dexterity": !!int "10"
  "Wisdom": !!int "10"
  "Intelligence": !!int "9"
  "Strength": !!int "8"
"skillsaves":
  "Insight": !!int "10"
  "Perception": !!int "10"
  "Arcana": !!int "9"
"senses": "passive Perception 20"
"languages": "Gith"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githzerai casts one of the following spells, requiring no spell components\
    \ and using Wisdom as the spellcasting ability (spell save DC 18):\n\nAt will:\
    \ [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible)\n\n1/day\
    \ each: [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md),\
    \ [plane shift](/compendium/spells/plane-shift.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n3/day each: [see invisibility](/compendium/spells/see-invisibility.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the githzerai fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the githzerai is wearing no armor and wielding no shield, its AC\
    \ includes its Wisdom modifier."
  "name": "Psychic Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githzerai makes three Unarmed Strike attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) bludgeoning damage plus 18 (4d8) psychic damage."
  "name": "Unarmed Strike"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githzerai makes one Unarmed Strike attack."
  "name": "Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githzerai teleports, along with any equipment it is wearing or carrying,\
    \ to an unoccupied space it can see within 30 feet of it."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githzerai casts the [reverse gravity](/compendium/spells/reverse-gravity.md)\
    \ spell, using Wisdom as the spellcasting ability. The spell has the normal effect,\
    \ except that the githzerai can orient the area in any direction and creatures\
    \ and objects fall toward the end of the area."
  "name": "Change Gravity (Costs 3 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "[[Githzerai Anarch.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 142, Mordenkainen's Tome of Foes p. 207*

## Description

Anarchs are githzerai sages and mystics who lead communities and maintain the adamantine citadels that serve as strong points in Limbo and on other planes. They have formidable psionic capabilities and are able to manipulate the unformed substance of their adopted plane with a thought.

**An Anarch's Lair.** In Limbo, githzerai anarchs create islands of tranquility in this turbulent plane. An anarch can use its psionic power to give form to formless substance, creating mountains, lakes, and structures to serve as a foundation for a githzerai community.

The anarch's challenge rating is 17 (18,000 XP) when it's encountered in its lair.

**Githzerai.** Githzerai are otherworldly folk with psionic powers who share an ancestral link to githyanki (also in this book). The githzerai followers of the great leader Zaerith Menyar-Ag-Gith are an ascetic people who live apart from the rest of the cosmos, within the confines of fortresses floating through the chaos of Limbo. Instead of imposing their will on other peoples, they focus on controlling and manipulating their endlessly malleable home.