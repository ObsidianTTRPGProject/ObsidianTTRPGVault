---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/small-or-medium
- monster/type/humanoid/wizard
aliases: ["Lorehold Pledgemage"]
statblock: true
"name": "Lorehold Pledgemage"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "60"
"hit_dice": "11d8 + 11"
"stats":
- !!int "10"
- !!int "16"
- !!int "13"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Intelligence": !!int "5"
  "Constitution": !!int "3"
"skillsaves":
  "Investigation": !!int "7"
  "Insight": !!int "3"
  "History": !!int "7"
"senses": "passive Perception 11"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 13):\n\nAt will: [guidance](/compendium/spells/guidance.md), [light](/compendium/spells/light.md)\n\
    \n1/day each: [mage armor](/compendium/spells/mage-armor.md), [speak with\
    \ dead](/compendium/spells/speak-with-dead.md), [stone shape](/compendium/spells/stone-shape.md)\n\
    \n2/day each: [comprehend languages](/compendium/spells/comprehend-languages.md),\
    \ [locate object](/compendium/spells/locate-object.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage makes two Scroll Bash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 30 ft., one target. Hit: 8 (1d10\
    \ + 3) bludgeoning damage plus 9 (2d8) thunder damage."
  "name": "Scroll Bash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thundering golden energy erupts around a creature the pledgemage can see\
    \ within 90 feet of it. The creature must make a DC 13 Constitution saving throw,\
    \ taking 44 (8d10) thunder damage on a failed save, or half as much damage on\
    \ a successful one. A Construct has disadvantage on the saving throw."
  "name": "Reduce to Memory (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage chooses a point within 30 feet of itself, shunting the minds\
    \ of nearby creatures out of this moment in time. Each creature in a 10-foot-radius\
    \ sphere centered on that point must succeed on a DC 13 Wisdom saving throw or\
    \ be [incapacitated](/rules/conditions.md#incapacitated) until the end of the\
    \ pledgemage's next turn."
  "name": "Chronal Break (1/Day)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When another creature within 60 feet of the pledgemage misses a target\
    \ with an attack roll, the pledgemage magically enables the attacker to reroll\
    \ the attack roll. It must use the new roll."
  "name": "Learn from the Past (2/Day)"
"source":
- "SCC"
name: Lorehold Pledgemage
image: "[[Lorehold Pledgemage.png]]"
---

# Lorehold Pledgemage

```statblock
"name": "Lorehold Pledgemage"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "60"
"hit_dice": "11d8 + 11"
"stats":
- !!int "10"
- !!int "16"
- !!int "13"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Intelligence": !!int "5"
  "Constitution": !!int "3"
"skillsaves":
  "Investigation": !!int "7"
  "Insight": !!int "3"
  "History": !!int "7"
"senses": "passive Perception 11"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 13):\n\nAt will: [guidance](/compendium/spells/guidance.md), [light](/compendium/spells/light.md)\n\
    \n1/day each: [mage armor](/compendium/spells/mage-armor.md), [speak with\
    \ dead](/compendium/spells/speak-with-dead.md), [stone shape](/compendium/spells/stone-shape.md)\n\
    \n2/day each: [comprehend languages](/compendium/spells/comprehend-languages.md),\
    \ [locate object](/compendium/spells/locate-object.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage makes two Scroll Bash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 30 ft., one target. Hit: 8 (1d10\
    \ + 3) bludgeoning damage plus 9 (2d8) thunder damage."
  "name": "Scroll Bash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thundering golden energy erupts around a creature the pledgemage can see\
    \ within 90 feet of it. The creature must make a DC 13 Constitution saving throw,\
    \ taking 44 (8d10) thunder damage on a failed save, or half as much damage on\
    \ a successful one. A Construct has disadvantage on the saving throw."
  "name": "Reduce to Memory (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pledgemage chooses a point within 30 feet of itself, shunting the minds\
    \ of nearby creatures out of this moment in time. Each creature in a 10-foot-radius\
    \ sphere centered on that point must succeed on a DC 13 Wisdom saving throw or\
    \ be [incapacitated](/rules/conditions.md#incapacitated) until the end of the\
    \ pledgemage's next turn."
  "name": "Chronal Break (1/Day)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When another creature within 60 feet of the pledgemage misses a target\
    \ with an attack roll, the pledgemage magically enables the attacker to reroll\
    \ the attack roll. It must use the new roll."
  "name": "Learn from the Past (2/Day)"
"source":
- "SCC"
"image": "[[Lorehold Pledgemage.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 197*

## Description

Deep in crumbling ruins and piles of dusty scrolls, Lorehold students—first as apprentices and then as pledgemages—study the magic of the past, searching for arcane artifacts and speaking with long-dead adventurers to uncover secrets lost to time.

Though many Lorehold students bury themselves in old tomes, others take a more cavalier approach to their studies and travel the world to see history made before their eyes. Their magic can range from spells tampering with the flow of time itself to concussive blasts that break through old ruins—to sometimes just bashing things with a glowing scroll.

**Lorehold Scholars.** The archaeomancers of Lorehold College draw their magical might from the flow of time and fate and the way those forces shape the course of history. Scholars of this broad mystical study divide between those who see history as an unpredictable jumble of chance and those who believe events form a perfect—and predictable—pattern.