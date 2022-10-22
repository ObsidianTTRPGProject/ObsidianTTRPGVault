---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/small-or-medium
- monster/type/humanoid/druid
aliases: ["Witherbloom Pledgemage"]
statblock: true
"name": "Witherbloom Pledgemage"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "druid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "10"
- !!int "15"
- !!int "13"
- !!int "14"
- !!int "17"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "3"
"skillsaves":
  "Medicine": !!int "5"
  "Nature": !!int "6"
  "Perception": !!int "7"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "passive Perception 17"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The apprentice casts one of the following spells, requiring no material\
    \ components and using Wisdom as the spellcasting ability:\n\nAt will: [druidcraft](/compendium/spells/druidcraft.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md)\n\n1/day each:\
    \ [death ward](/compendium/spells/death-ward.md), [pass without trace](/compendium/spells/pass-without-trace.md),\
    \ [speak with plants](/compendium/spells/speak-with-plants.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As long as the pledgemage has at least 1 hit point remaining, the pledgemage\
    \ regains 5 hit points at the start of its turn."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the end of a 10-minute ritual, the pledgemage can touch one willing\
    \ creature (including itself) and bestow upon it a small talisman imbued with\
    \ magic. Upon receiving the talisman, the creature gains 10 temporary hit points,\
    \ and it can add 1d6 to its initiative rolls while it wears the talisman. These\
    \ benefits last for 1 hour or until the pledgemage conducts another ritual to\
    \ bestow another talisman. When the benefits expire, the talisman crumbles to\
    \ dust."
  "name": "Verdant Talisman"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 15 ft., one target. Hit: 8 (1d10\
    \ + 3) piercing damage plus 18 (4d8) poison damage. If the target is a Large or\
    \ smaller creature, the apprentice can pull it up to 10 feet closer to itself."
  "name": "Briar Vine"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage transforms into an avatar of plants and shadow. While in\
    \ this form, the pledgemage adds its Wisdom modifier to its AC if it isn't wearing\
    \ armor or wielding a shield, and it has advantage on attack rolls against any\
    \ creature missing hit points. This form lasts for 1 minute or until the pledgemage\
    \ is reduced to 0 hit points."
  "name": "Vociferous Form (1/Day)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the pledgemage sees a creature within 30 feet of itself drop to 0\
    \ hit points, the pledgemage channels the expended life essence and targets another\
    \ creature it can see within 30 feet of itself. The target must succeed on a DC\
    \ 13 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. While [poisoned](/rules/conditions.md#poisoned) in this way, the\
    \ target takes 3 (1d6) poison damage at the start of each of its turns. The target\
    \ can repeat the save at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Wither Burst"
"source":
- "SCC"
name: Witherbloom Pledgemage
image: "[[Witherbloom Pledgemage.png]]"
---

# Witherbloom Pledgemage

```statblock
"name": "Witherbloom Pledgemage"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "druid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "10"
- !!int "15"
- !!int "13"
- !!int "14"
- !!int "17"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "3"
"skillsaves":
  "Medicine": !!int "5"
  "Nature": !!int "6"
  "Perception": !!int "7"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "passive Perception 17"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The apprentice casts one of the following spells, requiring no material\
    \ components and using Wisdom as the spellcasting ability:\n\nAt will: [druidcraft](/compendium/spells/druidcraft.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md)\n\n1/day each:\
    \ [death ward](/compendium/spells/death-ward.md), [pass without trace](/compendium/spells/pass-without-trace.md),\
    \ [speak with plants](/compendium/spells/speak-with-plants.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As long as the pledgemage has at least 1 hit point remaining, the pledgemage\
    \ regains 5 hit points at the start of its turn."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the end of a 10-minute ritual, the pledgemage can touch one willing\
    \ creature (including itself) and bestow upon it a small talisman imbued with\
    \ magic. Upon receiving the talisman, the creature gains 10 temporary hit points,\
    \ and it can add 1d6 to its initiative rolls while it wears the talisman. These\
    \ benefits last for 1 hour or until the pledgemage conducts another ritual to\
    \ bestow another talisman. When the benefits expire, the talisman crumbles to\
    \ dust."
  "name": "Verdant Talisman"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 15 ft., one target. Hit: 8 (1d10\
    \ + 3) piercing damage plus 18 (4d8) poison damage. If the target is a Large or\
    \ smaller creature, the apprentice can pull it up to 10 feet closer to itself."
  "name": "Briar Vine"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage transforms into an avatar of plants and shadow. While in\
    \ this form, the pledgemage adds its Wisdom modifier to its AC if it isn't wearing\
    \ armor or wielding a shield, and it has advantage on attack rolls against any\
    \ creature missing hit points. This form lasts for 1 minute or until the pledgemage\
    \ is reduced to 0 hit points."
  "name": "Vociferous Form (1/Day)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the pledgemage sees a creature within 30 feet of itself drop to 0\
    \ hit points, the pledgemage channels the expended life essence and targets another\
    \ creature it can see within 30 feet of itself. The target must succeed on a DC\
    \ 13 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. While [poisoned](/rules/conditions.md#poisoned) in this way, the\
    \ target takes 3 (1d6) poison damage at the start of each of its turns. The target\
    \ can repeat the save at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Wither Burst"
"source":
- "SCC"
"image": "[[Witherbloom Pledgemage.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 222*

## Description

Deep in the fog and muck of the swamp, the students of Witherbloom College—first as apprentices and then as pledgemages—study the cycle of life and death. Their magic is fueled by what they call life essence: the ubiquitous energy that runs through living things.

Witherbloom students learn how to concoct magical potions and talismans, in addition to their spellcasting studies. Their magic ranges from necrotic shadows and withering bursts of poison to flourishing bursts of plant life.

**Witherbloom Scholars.** Witherbloom College studies the magic inherent in the natural cycle of life and death. Witherbloom professors approach the philosophy from different directions, with one methodology focusing on decay and the other dealing with growth.