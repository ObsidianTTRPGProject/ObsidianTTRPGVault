---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/monstrosity
- monster/environment/arctic
aliases: ["Yeti Leader"]
statblock: true
"name": "Yeti Leader"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "51"
"hit_dice": "6d10 + 18"
"stats":
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "8"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "3"
"damage_immunities": "cold"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Yeti"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the yeti takes fire damage, it has disadvantage on attack rolls and\
    \ ability checks until the end of its next turn."
  "name": "Fear of Fire"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yeti has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy\
    \ terrain."
  "name": "Snow Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yeti can use its Chilling Gaze and makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage plus 3 (1d6) cold damage."
  "name": "Frost Brand Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yeti targets one creature it can see within 30 feet of it. If the target\
    \ can see the yeti, the target must succeed on a DC 13 Constitution saving throw\
    \ against this magic or take 10 (3d6) cold damage and then be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute, unless it is immune to cold damage. The target can repeat the\
    \ saving throw at the end of each of its turns, ending the effect on itself on\
    \ a success. If the target's saving throw is successful, or if the effect ends\
    \ on it, the target is immune to the Chilling Gaze of all yetis (but not abominable\
    \ yetis) for 1 hour."
  "name": "Chilling Gaze"
"source":
- "TftYP"
name: Yeti Leader
image: "[[Yeti Leader.png]]"
---

# Yeti Leader

```statblock
"name": "Yeti Leader"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "51"
"hit_dice": "6d10 + 18"
"stats":
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "8"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "3"
"damage_immunities": "cold"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Yeti"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the yeti takes fire damage, it has disadvantage on attack rolls and\
    \ ability checks until the end of its next turn."
  "name": "Fear of Fire"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yeti has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy\
    \ terrain."
  "name": "Snow Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yeti can use its Chilling Gaze and makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage plus 3 (1d6) cold damage."
  "name": "Frost Brand Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yeti targets one creature it can see within 30 feet of it. If the target\
    \ can see the yeti, the target must succeed on a DC 13 Constitution saving throw\
    \ against this magic or take 10 (3d6) cold damage and then be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute, unless it is immune to cold damage. The target can repeat the\
    \ saving throw at the end of each of its turns, ending the effect on itself on\
    \ a success. If the target's saving throw is successful, or if the effect ends\
    \ on it, the target is immune to the Chilling Gaze of all yetis (but not abominable\
    \ yetis) for 1 hour."
  "name": "Chilling Gaze"
"source":
- "TftYP"
"image": "[[Yeti Leader.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 183*

## Environment

arctic