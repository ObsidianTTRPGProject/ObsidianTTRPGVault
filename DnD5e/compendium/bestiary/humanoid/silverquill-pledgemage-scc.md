---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/small-or-medium
- monster/type/humanoid/bard
aliases: ["Silverquill Pledgemage"]
statblock: true
"name": "Silverquill Pledgemage"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "bard"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "10"
- !!int "16"
- !!int "13"
- !!int "12"
- !!int "11"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
"skillsaves":
  "Deception": !!int "5"
  "Performance": !!int "7"
  "Persuasion": !!int "7"
"senses": "passive Perception 10"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 13):\n\
    \nAt will: [dancing lights](/compendium/spells/dancing-lights.md), [friends](/compendium/spells/friends.md)\n\
    \n1/day each: [command](/compendium/spells/command.md), [confusion](/compendium/spells/confusion.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [tongues](/compendium/spells/tongues.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 5 (1d8 + 3) piercing damage plus 10 (3d6) psychic damage."
  "name": "Ink Blade"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage hurls magical insults at one creature it can see within\
    \ 30 feet of itself. The target must succeed on a DC 13 Wisdom saving throw or\
    \ become [frightened](/rules/conditions.md#frightened) of the pledgemage for 1\
    \ minute. While [frightened](/rules/conditions.md#frightened) in this way, the\
    \ target can't take reactions, its speed is halved, and any hit the pledgemage\
    \ scores against the creature is a critical hit. The target can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Demotivate (2/Day)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the pledgemage can see within 30 feet of it fails a saving\
    \ throw, the pledgemage magically weaves together stirring prose, allowing the\
    \ creature to reroll the saving throw and use the higher result."
  "name": "Rousing Verse"
"source":
- "SCC"
name: Silverquill Pledgemage
image: "[[Silverquill Pledgemage.png]]"
---

# Silverquill Pledgemage

```statblock
"name": "Silverquill Pledgemage"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "bard"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "10"
- !!int "16"
- !!int "13"
- !!int "12"
- !!int "11"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
"skillsaves":
  "Deception": !!int "5"
  "Performance": !!int "7"
  "Persuasion": !!int "7"
"senses": "passive Perception 10"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 13):\n\
    \nAt will: [dancing lights](/compendium/spells/dancing-lights.md), [friends](/compendium/spells/friends.md)\n\
    \n1/day each: [command](/compendium/spells/command.md), [confusion](/compendium/spells/confusion.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [tongues](/compendium/spells/tongues.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 5 (1d8 + 3) piercing damage plus 10 (3d6) psychic damage."
  "name": "Ink Blade"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage hurls magical insults at one creature it can see within\
    \ 30 feet of itself. The target must succeed on a DC 13 Wisdom saving throw or\
    \ become [frightened](/rules/conditions.md#frightened) of the pledgemage for 1\
    \ minute. While [frightened](/rules/conditions.md#frightened) in this way, the\
    \ target can't take reactions, its speed is halved, and any hit the pledgemage\
    \ scores against the creature is a critical hit. The target can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Demotivate (2/Day)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the pledgemage can see within 30 feet of it fails a saving\
    \ throw, the pledgemage magically weaves together stirring prose, allowing the\
    \ creature to reroll the saving throw and use the higher result."
  "name": "Rousing Verse"
"source":
- "SCC"
"image": "[[Silverquill Pledgemage.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 214*

## Description

Stylish and driven, the students of Silverquill College—first as apprentices and then as pledgemages—cut imposing figures on campus. Dressed in smartly trimmed black-and-white uniforms, these budding mages practice bolstering speeches and wield inky blades.

Some Silverquill students prefer the benevolent side of language, using their words to uplift their friends and illuminate harsh truths about those in power. Others, though, choose to wield words more ruthlessly and master the art of insults and discouragement (and in some cases, petty trash talk). Regardless, nearly all members of Silverquill College carry themselves with a fearsome, never-second-place attitude—because in the art of wielding words, confidence is key.

**Silverquill Scholars.** The scholars of Silverquill College study the power of magic shaped through spoken and written words. They use that power either to illuminate and guide or to obscure and demoralize.