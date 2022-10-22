---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/medium
- monster/type/fey/hag
aliases: ["Bavlorna Blightstraw"]
statblock: true
"name": "Bavlorna Blightstraw"
"size": "Medium"
"type": "fey"
"subtype": "hag"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "110"
"hit_dice": "13d8 + 52"
"stats":
- !!int "22"
- !!int "11"
- !!int "18"
- !!int "16"
- !!int "12"
- !!int "15"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
  "Constitution": !!int "7"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Arcana": !!int "9"
"senses": "truesight 60 ft., passive Perception 14"
"languages": "Common, Elvish, Sylvan"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bavlorna casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 14):\n\nAt\
    \ will: [detect magic](/compendium/spells/detect-magic.md)\n\n1/day: [plane\
    \ shift](/compendium/spells/plane-shift.md) (self only)\n\n2/day each: [create\
    \ food and water](/compendium/spells/create-food-and-water.md), [polymorph](/compendium/spells/polymorph.md),\
    \ [remove curse](/compendium/spells/remove-curse.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bavlorna can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bavlorna is immune to any effect that would age her, and she can't die\
    \ from old age."
  "name": "Boon of Immortality"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature within 10 feet of Bavlorna uses at least 10 feet of movement\
    \ to run in place counterclockwise, Bavlorna is overcome by a fit of sneezing\
    \ and can't cast spells until the end of her next turn. In addition, any creature\
    \ Bavlorna has swallowed is immediately expelled and falls [prone](/rules/conditions.md#prone)\
    \ in an unoccupied space within 5 feet of her."
  "name": "Widdershins Allergy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bavlorna makes one Bite attack and one Withering Ray attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16) if it is a Medium or smaller creature. Until the grapple ends,\
    \ the target is [restrained](/rules/conditions.md#restrained), and Bavlorna can't\
    \ use her Bite attack on another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +6 to hit, range 60 ft., one target. Hit: 17 (4d6\
    \ + 3) necrotic damage."
  "name": "Withering Ray"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bavlorna creates one or two 1-foot-tall duplicates of herself, called lornlings\
    \ (use the Quickling stat block in appendix C). Each lornling appears in an unoccupied\
    \ space within 5 feet of Bavlorna, obeys her commands, and takes its turn immediately\
    \ after hers. A lornling lasts for 1 hour, until it or Bavlorna dies, or until\
    \ Bavlorna dismisses it as an action. Bavlorna can have no more than eight lornlings\
    \ in existence at a time."
  "name": "Create Lornlings (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bavlorna swallows a Small or smaller creature she is grappling, ending\
    \ the grapple on it. The swallowed creature is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside Bavlorna, and it takes 10 (3d6) acid damage\
    \ at the start of each of its turns. If the swallowed creature is one of Bavlorna's\
    \ lornlings, Bavlorna gains all the lornling's memories when the acid damage reduces\
    \ it to 0 hit points.\n\nBavlorna can have only one creature swallowed at a time.\
    \ If Bavlorna dies, a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ and can escape from the corpse using 5 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "WBtW"
name: Bavlorna Blightstraw
image: "[[Bavlorna Blightstraw.png]]"
---

# Bavlorna Blightstraw

```statblock
"name": "Bavlorna Blightstraw"
"size": "Medium"
"type": "fey"
"subtype": "hag"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "110"
"hit_dice": "13d8 + 52"
"stats":
- !!int "22"
- !!int "11"
- !!int "18"
- !!int "16"
- !!int "12"
- !!int "15"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
  "Constitution": !!int "7"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Arcana": !!int "9"
"senses": "truesight 60 ft., passive Perception 14"
"languages": "Common, Elvish, Sylvan"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bavlorna casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 14):\n\nAt\
    \ will: [detect magic](/compendium/spells/detect-magic.md)\n\n1/day: [plane\
    \ shift](/compendium/spells/plane-shift.md) (self only)\n\n2/day each: [create\
    \ food and water](/compendium/spells/create-food-and-water.md), [polymorph](/compendium/spells/polymorph.md),\
    \ [remove curse](/compendium/spells/remove-curse.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bavlorna can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bavlorna is immune to any effect that would age her, and she can't die\
    \ from old age."
  "name": "Boon of Immortality"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature within 10 feet of Bavlorna uses at least 10 feet of movement\
    \ to run in place counterclockwise, Bavlorna is overcome by a fit of sneezing\
    \ and can't cast spells until the end of her next turn. In addition, any creature\
    \ Bavlorna has swallowed is immediately expelled and falls [prone](/rules/conditions.md#prone)\
    \ in an unoccupied space within 5 feet of her."
  "name": "Widdershins Allergy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bavlorna makes one Bite attack and one Withering Ray attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16) if it is a Medium or smaller creature. Until the grapple ends,\
    \ the target is [restrained](/rules/conditions.md#restrained), and Bavlorna can't\
    \ use her Bite attack on another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +6 to hit, range 60 ft., one target. Hit: 17 (4d6\
    \ + 3) necrotic damage."
  "name": "Withering Ray"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bavlorna creates one or two 1-foot-tall duplicates of herself, called lornlings\
    \ (use the Quickling stat block in appendix C). Each lornling appears in an unoccupied\
    \ space within 5 feet of Bavlorna, obeys her commands, and takes its turn immediately\
    \ after hers. A lornling lasts for 1 hour, until it or Bavlorna dies, or until\
    \ Bavlorna dismisses it as an action. Bavlorna can have no more than eight lornlings\
    \ in existence at a time."
  "name": "Create Lornlings (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bavlorna swallows a Small or smaller creature she is grappling, ending\
    \ the grapple on it. The swallowed creature is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside Bavlorna, and it takes 10 (3d6) acid damage\
    \ at the start of each of its turns. If the swallowed creature is one of Bavlorna's\
    \ lornlings, Bavlorna gains all the lornling's memories when the acid damage reduces\
    \ it to 0 hit points.\n\nBavlorna can have only one creature swallowed at a time.\
    \ If Bavlorna dies, a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ and can escape from the corpse using 5 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "WBtW"
"image": "[[Bavlorna Blightstraw.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 216*

## Description

Younger than Skabatha and older than Endelyn, Bavlorna is called Slack-jawed Lorna because her wide mouth is prone to hang agape. Flies flit in and out of it. She is the hag of the present, the here and now, the moment to moment. Those desperate individuals who seek her out do so to find a remedy for a nagging problem or anxiety. Though she despises unannounced visitors, a tragic tale of woe and misery puts her in a bargaining mood. If these visitors enter into an agreement with Bavlorna, she'll use her powers to resolve their pressing problem in exchange for something of use to her.