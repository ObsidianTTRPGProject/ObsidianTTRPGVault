---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/small
- monster/type/construct
aliases: ["Strixhaven Campus Guide"]
statblock: true
"name": "Strixhaven Campus Guide"
"size": "Small"
"type": "construct"
"alignment": "Lawful Good"
"ac": !!int "17"
"hp": !!int "31"
"hit_dice": "7d6 + 7"
"stats":
- !!int "15"
- !!int "14"
- !!int "13"
- !!int "10"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Insight": !!int "3"
  "Persuasion": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "blinded, deafened, exhaustion, paralyzed, petrified, poisoned"
"senses": "blindsight 60 ft., passive Perception 11"
"languages": "Common plus any three languages"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While at Strixhaven, the guide can't become lost by magical or nonmagical\
    \ means. The guide also has advantage on ability checks made to locate creatures\
    \ or objects at Strixhaven."
  "name": "Campus Knowledge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the guide speaks, any creature that knows at least one language and\
    \ can hear the guide understands what it says."
  "name": "Univocal Speech"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The guide doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The guide makes two Slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the guide's choice that is within 30 feet of the guide\
    \ must succeed on a DC 11 Wisdom saving throw or be magically [charmed](/rules/conditions.md#charmed)\
    \ by the guide for 1 hour.\n\nA [charmed](/rules/conditions.md#charmed) target\
    \ must move on its turn toward the guide, trying to get within 5 feet of the guide.\
    \ The target doesn't move into obviously dangerous ground, such as a fire or a\
    \ pit. Whenever the [charmed](/rules/conditions.md#charmed) target takes damage,\
    \ it can repeat the saving throw, ending the effect on itself on a success.\n\n\
    A target that successfully saves is immune to any guide's Smile and Wave ability\
    \ for the next 24 hours."
  "name": "Smile and Wave"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The guide takes the Help action."
  "name": "Need Directions"
"source":
- "SCC"
name: Strixhaven Campus Guide
image: "[[Strixhaven Campus Guide.png]]"
---

# Strixhaven Campus Guide

```statblock
"name": "Strixhaven Campus Guide"
"size": "Small"
"type": "construct"
"alignment": "Lawful Good"
"ac": !!int "17"
"hp": !!int "31"
"hit_dice": "7d6 + 7"
"stats":
- !!int "15"
- !!int "14"
- !!int "13"
- !!int "10"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Insight": !!int "3"
  "Persuasion": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "blinded, deafened, exhaustion, paralyzed, petrified, poisoned"
"senses": "blindsight 60 ft., passive Perception 11"
"languages": "Common plus any three languages"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While at Strixhaven, the guide can't become lost by magical or nonmagical\
    \ means. The guide also has advantage on ability checks made to locate creatures\
    \ or objects at Strixhaven."
  "name": "Campus Knowledge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the guide speaks, any creature that knows at least one language and\
    \ can hear the guide understands what it says."
  "name": "Univocal Speech"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The guide doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The guide makes two Slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the guide's choice that is within 30 feet of the guide\
    \ must succeed on a DC 11 Wisdom saving throw or be magically [charmed](/rules/conditions.md#charmed)\
    \ by the guide for 1 hour.\n\nA [charmed](/rules/conditions.md#charmed) target\
    \ must move on its turn toward the guide, trying to get within 5 feet of the guide.\
    \ The target doesn't move into obviously dangerous ground, such as a fire or a\
    \ pit. Whenever the [charmed](/rules/conditions.md#charmed) target takes damage,\
    \ it can repeat the saving throw, ending the effect on itself on a success.\n\n\
    A target that successfully saves is immune to any guide's Smile and Wave ability\
    \ for the next 24 hours."
  "name": "Smile and Wave"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The guide takes the Help action."
  "name": "Need Directions"
"source":
- "SCC"
"image": "[[Strixhaven Campus Guide.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 217*

## Description

With cheerful dispositions and a knack for walking backward, Strixhaven campus guides lead gaggles of prospective students on tours. The guides' gold and silver chassis are built in shapes reminiscent of the star arches surrounding Strixhaven. Embedded in their chests are holographic maps of the university's campuses, which the guides use to provide directions. However, it's rare for a campus guide to need its own maps, as these gregarious automatons have a gift for finding things on campus, often popping up at the most inopportune times.