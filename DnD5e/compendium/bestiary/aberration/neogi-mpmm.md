---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/small
- monster/type/aberration
- monster/environment/hill
- monster/environment/underdark
aliases: ["Neogi"]
statblock: true
"name": "Neogi"
"size": "Small"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "33"
"hit_dice": "6d6 + 12"
"stats":
- !!int "6"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "15"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Intimidation": !!int "4"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Deep Speech, Undercommon"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened), and magic can't put the neogi\
    \ to sleep."
  "name": "Mental Fortitude"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage plus 14 (4d6) poison damage, and the target must succeed\
    \ on a DC 12 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. A target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) slashing damage."
  "name": "Claw"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi targets one creature it can see within 30 feet of it. The target\
    \ must succeed on a DC 14 Wisdom saving throw or be magically [charmed](/rules/conditions.md#charmed)\
    \ by the neogi for 1 day, or until the neogi dies or is more than 1 mile from\
    \ the target. The [charmed](/rules/conditions.md#charmed) target obeys the neogi's\
    \ commands and can't take reactions, and the neogi and the target can communicate\
    \ telepathically with each other at a distance of up to 1 mile. Whenever the [charmed](/rules/conditions.md#charmed)\
    \ target takes damage, it can repeat the saving throw, ending the effect on itself\
    \ on a success."
  "name": "Enslave (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
name: Neogi
image: "[[Neogi.png]]"
---

# Neogi

```statblock
"name": "Neogi"
"size": "Small"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "33"
"hit_dice": "6d6 + 12"
"stats":
- !!int "6"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "15"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Intimidation": !!int "4"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Deep Speech, Undercommon"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened), and magic can't put the neogi\
    \ to sleep."
  "name": "Mental Fortitude"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage plus 14 (4d6) poison damage, and the target must succeed\
    \ on a DC 12 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. A target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) slashing damage."
  "name": "Claw"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi targets one creature it can see within 30 feet of it. The target\
    \ must succeed on a DC 14 Wisdom saving throw or be magically [charmed](/rules/conditions.md#charmed)\
    \ by the neogi for 1 day, or until the neogi dies or is more than 1 mile from\
    \ the target. The [charmed](/rules/conditions.md#charmed) target obeys the neogi's\
    \ commands and can't take reactions, and the neogi and the target can communicate\
    \ telepathically with each other at a distance of up to 1 mile. Whenever the [charmed](/rules/conditions.md#charmed)\
    \ target takes damage, it can repeat the saving throw, ending the effect on itself\
    \ on a success."
  "name": "Enslave (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
"image": "[[Neogi.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 192, Volo's Guide to Monsters p. 180*

## Description

The mentality of neogi is alien to many other peoples. Because adult neogi have the power to control minds, they consider doing so to be entirely appropriate. Their society makes no distinction between individuals, aside from the ability that a given creature has to control others, and they don't comprehend the emotional aspects of existence that humans and similar beings experience. To a neogi, hatred is as foreign a sensation as love, and showing loyalty in the absence of authority is foolishness.

Neogi mark themselves and those they capture through the use of dyes, transformational magic, and other markings intended to signify rank, achievements, and the identity of the individual's leader. By these signs, neogi can identify each others' place in the hierarchy—and they must defer to those of higher station or risk harsh punishment.

**Neogi.** > [!quote]- A quote from Mordenkainen  
> 
> Only the malevolent or the desperate do business with neogi. I generally advise against working with beings who view you as property or prey.

A neogi looks like an outsize spider with an eel's neck and head. It can poison the body and the mind of its targets and can subjugate even beings that are physically superior.

Neogi usually dwell in far-flung locations on the Material Plane, as well as in the Astral Plane and the Ethereal Plane. They left their home world long ago to conquer and devour creatures in other realms. During this era, they dominated umber hulks and used them to build sleek, spidery ships capable of traversing the multiverse.

## Environment

hill, underdark