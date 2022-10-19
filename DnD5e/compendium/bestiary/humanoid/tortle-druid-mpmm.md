---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid
- monster/environment/coastal
aliases: ["Tortle Druid"]
statblock: true
"name": "Tortle Druid"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "11"
- !!int "15"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Nature": !!int "2"
  "Animal Handling": !!int "4"
  "Survival": !!int "4"
"senses": "passive Perception 12"
"languages": "Aquan, Common"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tortle casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [druidcraft](/compendium/spells/druidcraft.md),\
    \ [guidance](/compendium/spells/guidance.md)\n\n2/day each: [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [hold person](/compendium/spells/hold-person.md), [speak with animals](/compendium/spells/speak-with-animals.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tortle can hold its breath for 1 hour."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tortle makes four Claw attacks or two Nature's Wrath attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +4 to hit, range 90 ft., one target. Hit: 9 (2d6\
    \ + 2) damage of a type chosen by the tortle: cold, fire, lightning, or thunder."
  "name": "Nature's Wrath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus\
    \ to AC and has advantage on Strength and Constitution saving throws. While in\
    \ its shell, the tortle is [prone](/rules/conditions.md#prone), its speed is 0\
    \ and can't increase, it has disadvantage on Dexterity saving throws, it can't\
    \ take reactions, and the only action it can take is a bonus action to emerge."
  "name": "Shell Defense"
"source":
- "MPMM"
- "MTF"
name: Tortle Druid
image: "[[Tortle Druid.png]]"
---

# Tortle Druid

```statblock
"name": "Tortle Druid"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "11"
- !!int "15"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Nature": !!int "2"
  "Animal Handling": !!int "4"
  "Survival": !!int "4"
"senses": "passive Perception 12"
"languages": "Aquan, Common"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tortle casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [druidcraft](/compendium/spells/druidcraft.md),\
    \ [guidance](/compendium/spells/guidance.md)\n\n2/day each: [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [hold person](/compendium/spells/hold-person.md), [speak with animals](/compendium/spells/speak-with-animals.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tortle can hold its breath for 1 hour."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tortle makes four Claw attacks or two Nature's Wrath attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +4 to hit, range 90 ft., one target. Hit: 9 (2d6\
    \ + 2) damage of a type chosen by the tortle: cold, fire, lightning, or thunder."
  "name": "Nature's Wrath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus\
    \ to AC and has advantage on Strength and Constitution saving throws. While in\
    \ its shell, the tortle is [prone](/rules/conditions.md#prone), its speed is 0\
    \ and can't increase, it has disadvantage on Dexterity saving throws, it can't\
    \ take reactions, and the only action it can take is a bonus action to emerge."
  "name": "Shell Defense"
"source":
- "MPMM"
- "MTF"
"image": "[[Tortle Druid.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 244, Mordenkainen's Tome of Foes p. 242*

## Description

Many tortles view the world as a place of wonder. They live for the chance to hear a soft wind blowing through trees, to watch a frog croaking on a lily pad, or to stand in a crowded marketplace. A tortle druid savors such things more than most, channeling the natural magic of the world around them.

**Tortles.** Tortles are omnivorous, turtle-like bipeds with shells that cover most of their bodies. Because they carry their homes on their backs, tortles feel little need to stay put for long.

Most tortles like to see how other folk live. A tortle can spend decades away from their native land without feeling homesick, often viewing their current companions as their family.

## Environment

coastal