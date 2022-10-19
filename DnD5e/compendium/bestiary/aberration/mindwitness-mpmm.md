---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/aberration
- monster/environment/underdark
aliases: ["Mindwitness"]
statblock: true
"name": "Mindwitness"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "15"
- !!int "15"
- !!int "10"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "5"
"skillsaves":
  "Perception": !!int "8"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Deep Speech, Undercommon, telepathy 600 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mindwitness receives a telepathic message, it can telepathically\
    \ share that message with up to seven other creatures within 600 feet of it that\
    \ it can see."
  "name": "Telepathic Hub"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mindwitness makes one Bite attack and one Tentacles attack, or it uses\
    \ Eye Ray three times."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 16 (4d6\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 20 (4d8\
    \ + 2) psychic damage. If the target is Large or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13), and it must succeed on a DC 13 Intelligence saving throw or\
    \ be [restrained](/rules/conditions.md#restrained) until this grapple ends."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mindwitness shoots one magical eye ray at random (roll a d6, and reroll\
    \ if the ray has already been used this turn), choosing one target it can see\
    \ within 120 feet of it:\n\n- 1 Aversion Ray. The targeted creature must make\
    \ a DC 13 Charisma saving throw. On a failed save, the target has disadvantage\
    \ on attack rolls for 1 minute. The target can repeat the saving throw at the\
    \ end of each of its turns, ending the effect on itself on a success.\n- 2 Fear\
    \ Ray. The targeted creature must succeed on a DC 13 Wisdom saving throw or\
    \ be [frightened](/rules/conditions.md#frightened) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success.\n- 3 Psychic Ray. The target must succeed on a DC 13\
    \ Intelligence saving throw or take 27 (6d8) psychic damage.\n- 4 Slowing Ray.\
    \ The targeted creature must make a DC 13 Dexterity saving throw. On a failed\
    \ save, the target's speed is halved for 1 minute. In addition, the creature can't\
    \ take reactions, and it can take either an action or a bonus action on its turn\
    \ but not both. The creature can repeat the saving throw at the end of each of\
    \ its turns, ending the effect on itself on a success.\n- 5 Stunning Ray.\
    \ The targeted creature must succeed on a DC 13 Constitution saving throw or be\
    \ [stunned](/rules/conditions.md#stunned) for 1 minute. The target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success.\n- 6 Telekinetic Ray. If the target is a creature, it must\
    \ make a DC 13 Strength saving throw. On a failed save, the mindwitness moves\
    \ it up to 30 feet in any direction, and it is [restrained](/rules/conditions.md#restrained)\
    \ by the ray's telekinetic grip until the start of the mindwitness's next turn\
    \ or until the mindwitness is [incapacitated](/rules/conditions.md#incapacitated).\
    \  \n      \n    If the target is an object weighing 300 pounds or less that isn't\
    \ being worn or carried, it is telekinetically moved up to 30 feet in any direction.\
    \ The mindwitness can also exert fine control on objects with this ray, such as\
    \ manipulating a simple tool or opening a door or a container."
  "name": "Eye Ray"
"source":
- "MPMM"
- "VGM"
name: Mindwitness
image: "[[Mindwitness.png]]"
---

# Mindwitness

```statblock
"name": "Mindwitness"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "15"
- !!int "15"
- !!int "10"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "5"
"skillsaves":
  "Perception": !!int "8"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Deep Speech, Undercommon, telepathy 600 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mindwitness receives a telepathic message, it can telepathically\
    \ share that message with up to seven other creatures within 600 feet of it that\
    \ it can see."
  "name": "Telepathic Hub"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mindwitness makes one Bite attack and one Tentacles attack, or it uses\
    \ Eye Ray three times."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 16 (4d6\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 20 (4d8\
    \ + 2) psychic damage. If the target is Large or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13), and it must succeed on a DC 13 Intelligence saving throw or\
    \ be [restrained](/rules/conditions.md#restrained) until this grapple ends."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mindwitness shoots one magical eye ray at random (roll a d6, and reroll\
    \ if the ray has already been used this turn), choosing one target it can see\
    \ within 120 feet of it:\n\n- 1 Aversion Ray. The targeted creature must make\
    \ a DC 13 Charisma saving throw. On a failed save, the target has disadvantage\
    \ on attack rolls for 1 minute. The target can repeat the saving throw at the\
    \ end of each of its turns, ending the effect on itself on a success.\n- 2 Fear\
    \ Ray. The targeted creature must succeed on a DC 13 Wisdom saving throw or\
    \ be [frightened](/rules/conditions.md#frightened) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success.\n- 3 Psychic Ray. The target must succeed on a DC 13\
    \ Intelligence saving throw or take 27 (6d8) psychic damage.\n- 4 Slowing Ray.\
    \ The targeted creature must make a DC 13 Dexterity saving throw. On a failed\
    \ save, the target's speed is halved for 1 minute. In addition, the creature can't\
    \ take reactions, and it can take either an action or a bonus action on its turn\
    \ but not both. The creature can repeat the saving throw at the end of each of\
    \ its turns, ending the effect on itself on a success.\n- 5 Stunning Ray.\
    \ The targeted creature must succeed on a DC 13 Constitution saving throw or be\
    \ [stunned](/rules/conditions.md#stunned) for 1 minute. The target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success.\n- 6 Telekinetic Ray. If the target is a creature, it must\
    \ make a DC 13 Strength saving throw. On a failed save, the mindwitness moves\
    \ it up to 30 feet in any direction, and it is [restrained](/rules/conditions.md#restrained)\
    \ by the ray's telekinetic grip until the start of the mindwitness's next turn\
    \ or until the mindwitness is [incapacitated](/rules/conditions.md#incapacitated).\
    \  \n      \n    If the target is an object weighing 300 pounds or less that isn't\
    \ being worn or carried, it is telekinetically moved up to 30 feet in any direction.\
    \ The mindwitness can also exert fine control on objects with this ray, such as\
    \ manipulating a simple tool or opening a door or a container."
  "name": "Eye Ray"
"source":
- "MPMM"
- "VGM"
"image": "[[Mindwitness.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 181, Volo's Guide to Monsters p. 176*

## Description

If a beholder is [stunned](/rules/conditions.md#stunned) and brought to the brine pool of an elder brain, the beholder can be converted into a mindwitness. This alters some of its eye rays and transforms four of its eyestalks into tentacles similar to a mind flayer's. The mindwitness is psychically imprinted with devotion to the elder brain and submission to illithid commands.

A mindwitness's primary function is to improve telepathic communication in a mind flayer colony. A creature in telepathic communication with a mindwitness can converse through it to as many as seven other creatures the mindwitness can see, rapidly disseminating commands and other information.

If separated from its illithid masters, a mindwitness seeks out other telepathic creatures to tell it what to do. Mindwitnesses have been known to ally with [flumphs](/compendium/bestiary/aberration/flumph.md) and planar beings such as demons, shifting their worldview and alignment to match those of their new masters.

## Environment

underdark