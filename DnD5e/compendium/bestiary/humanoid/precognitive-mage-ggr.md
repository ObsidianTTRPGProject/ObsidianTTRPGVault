---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Precognitive Mage"]
statblock: true
"name": "Precognitive Mage"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Neutral"
"ac": !!int "11"
"hp": !!int "63"
"hit_dice": "14d8"
"stats":
- !!int "9"
- !!int "13"
- !!int "10"
- !!int "18"
- !!int "13"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
  "Intelligence": !!int "6"
"skillsaves":
  "Perception": !!int "3"
"senses": "truesight 120 ft., passive Perception 13"
"languages": "Common plus any one language"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage's innate spellcasting ability is Intelligence (spell save DC 14).\
    \ It can cast the following spells, requiring no material components:\n\n1/day\
    \ each: [clairvoyance](/compendium/spells/clairvoyance.md), [locate object](/compendium/spells/locate-object.md)\n\
    \n3/day: [detect thoughts](/compendium/spells/detect-thoughts.md), [mage armor](/compendium/spells/mage-armor.md)"
  "name": "innate"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two\
    \ hands."
  "name": "Quarterstaff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage targets one creature within 120 feet of it that it can see. The\
    \ target takes 18 (4d8) psychic damage, and it must succeed on a DC 14 Intelligence\
    \ saving throw or be [stunned](/rules/conditions.md#stunned) until the end of\
    \ its next turn."
  "name": "Glimpse the Temporal Flood (Recharge 5-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mage or a creature it can see makes an attack roll, a saving throw,\
    \ or an ability check, the mage can cause the roll to be made with advantage or\
    \ disadvantage."
  "name": "Precognitive Insight (3/Day)"
"source":
- "GGR"
name: Precognitive Mage
image: "[[Precognitive Mage.png]]"
---

# Precognitive Mage

```statblock
"name": "Precognitive Mage"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Neutral"
"ac": !!int "11"
"hp": !!int "63"
"hit_dice": "14d8"
"stats":
- !!int "9"
- !!int "13"
- !!int "10"
- !!int "18"
- !!int "13"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
  "Intelligence": !!int "6"
"skillsaves":
  "Perception": !!int "3"
"senses": "truesight 120 ft., passive Perception 13"
"languages": "Common plus any one language"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage's innate spellcasting ability is Intelligence (spell save DC 14).\
    \ It can cast the following spells, requiring no material components:\n\n1/day\
    \ each: [clairvoyance](/compendium/spells/clairvoyance.md), [locate object](/compendium/spells/locate-object.md)\n\
    \n3/day: [detect thoughts](/compendium/spells/detect-thoughts.md), [mage armor](/compendium/spells/mage-armor.md)"
  "name": "innate"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two\
    \ hands."
  "name": "Quarterstaff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage targets one creature within 120 feet of it that it can see. The\
    \ target takes 18 (4d8) psychic damage, and it must succeed on a DC 14 Intelligence\
    \ saving throw or be [stunned](/rules/conditions.md#stunned) until the end of\
    \ its next turn."
  "name": "Glimpse the Temporal Flood (Recharge 5-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mage or a creature it can see makes an attack roll, a saving throw,\
    \ or an ability check, the mage can cause the roll to be made with advantage or\
    \ disadvantage."
  "name": "Precognitive Insight (3/Day)"
"source":
- "GGR"
"image": "[[Precognitive Mage.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 228*

## Description

Precognitive mages, a rarity among Azorius spellcasters, are capable of capturing glimpses of the future. They are typically employed to anticipate the actions of wanted criminals, thus aiding in their capture.