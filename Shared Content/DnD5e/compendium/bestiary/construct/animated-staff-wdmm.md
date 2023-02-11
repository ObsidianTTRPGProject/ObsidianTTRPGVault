---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/construct
aliases: ["Animated Staff"]
statblock: true
"name": "Animated Staff"
"size": "Medium"
"type": "construct"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "40"
"stats":
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "18"
- !!int "14"
- !!int "10"
"speed": "walk 0 ft., fly 30 ft. (hover)"
"damage_resistances": "cold"
"damage_immunities": "poison"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 12"
"languages": "Common"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature can grab the staff out of the air with a successful grapple\
    \ check against the staff, and grappling the staff does not reduce the creature's\
    \ speed. Any creature that successfully grapples the staff must succeed on a DC\
    \ 12 Charisma saving throw or be [charmed](/rules/conditions.md#charmed) by the\
    \ staff until the staff is no longer in its grasp. While the creature is [charmed](/rules/conditions.md#charmed),\
    \ the staff can issue commands to it, which the creature does its best to obey.\
    \ The creature can repeat the saving throw each time it takes damage, ending the\
    \ effect on itself on a success. A creature that successfully resists the staff's\
    \ control can't be [charmed](/rules/conditions.md#charmed) by it for 24 hours.\n\
    \nA creature holding the staff that isn't [charmed](/rules/conditions.md#charmed)\
    \ by it can use an action to attempt to break the staff over a knee or against\
    \ a solid surface, doing so with a successful DC 17 Strength ([Athletics](/rules/skills.md#Athletics))\
    \ check. Breaking the staff in this manner destroys it."
  "name": "Wielder Domination"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The staff has 10 charges. It can expend 1 or more of its charges to cast\
    \ one of the following spells (save DC 12): [cone of cold](/compendium/spells/cone-of-cold.md)\
    \ (5 charges), [fog cloud](/compendium/spells/fog-cloud.md) (1 charge), [ice storm](/compendium/spells/ice-storm.md)\
    \ (4 charges), or [wall of ice](/compendium/spells/wall-of-ice.md) (4 charges).\
    \ It regains 1d6 + 4 expended charges daily at dawn. If the staff expends its\
    \ last charge, roll a d20. On a 1, the staff turns to water and is destroyed."
  "name": "Staff of Frost"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (2d6)\
    \ bludgeoning damage plus 1 cold damage."
  "name": "Staff"
"source":
- "WDMM"
name: Animated Staff
image: "[[Animated Staff.png]]"
---

# Animated Staff

```statblock
"name": "Animated Staff"
"size": "Medium"
"type": "construct"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "40"
"stats":
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "18"
- !!int "14"
- !!int "10"
"speed": "walk 0 ft., fly 30 ft. (hover)"
"damage_resistances": "cold"
"damage_immunities": "poison"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 12"
"languages": "Common"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature can grab the staff out of the air with a successful grapple\
    \ check against the staff, and grappling the staff does not reduce the creature's\
    \ speed. Any creature that successfully grapples the staff must succeed on a DC\
    \ 12 Charisma saving throw or be [charmed](/rules/conditions.md#charmed) by the\
    \ staff until the staff is no longer in its grasp. While the creature is [charmed](/rules/conditions.md#charmed),\
    \ the staff can issue commands to it, which the creature does its best to obey.\
    \ The creature can repeat the saving throw each time it takes damage, ending the\
    \ effect on itself on a success. A creature that successfully resists the staff's\
    \ control can't be [charmed](/rules/conditions.md#charmed) by it for 24 hours.\n\
    \nA creature holding the staff that isn't [charmed](/rules/conditions.md#charmed)\
    \ by it can use an action to attempt to break the staff over a knee or against\
    \ a solid surface, doing so with a successful DC 17 Strength ([Athletics](/rules/skills.md#Athletics))\
    \ check. Breaking the staff in this manner destroys it."
  "name": "Wielder Domination"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The staff has 10 charges. It can expend 1 or more of its charges to cast\
    \ one of the following spells (save DC 12): [cone of cold](/compendium/spells/cone-of-cold.md)\
    \ (5 charges), [fog cloud](/compendium/spells/fog-cloud.md) (1 charge), [ice storm](/compendium/spells/ice-storm.md)\
    \ (4 charges), or [wall of ice](/compendium/spells/wall-of-ice.md) (4 charges).\
    \ It regains 1d6 + 4 expended charges daily at dawn. If the staff expends its\
    \ last charge, roll a d20. On a 1, the staff turns to water and is destroyed."
  "name": "Staff of Frost"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (2d6)\
    \ bludgeoning damage plus 1 cold damage."
  "name": "Staff"
"source":
- "WDMM"
"image": "[[Animated Staff.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 262*