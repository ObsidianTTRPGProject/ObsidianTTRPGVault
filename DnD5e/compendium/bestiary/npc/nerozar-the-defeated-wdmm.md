---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/large
- monster/type/undead
- monster/environment/underdark
aliases: ["Nerozar the Defeated"]
statblock: true
"name": "Nerozar the Defeated"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "10"
- !!int "8"
- !!int "16"
- !!int "3"
- !!int "8"
- !!int "5"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Wisdom": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Deep Speech and Undercommon but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces Nerozar to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, Nerozar drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 14 (4d6)\
    \ piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie uses a random magical eye ray, choosing a target that it can\
    \ see within 60 feet of it.\n\n- 1. Paralyzing Ray. The targeted creature\
    \ must succeed on a DC 14 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 2. Fear Ray. The targeted\
    \ creature must succeed on a DC 14 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 3. Enervation Ray. The\
    \ targeted creature must make a DC 14 Constitution saving throw, taking 36 (8d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one.\n\
    - 4. Telekinetic Ray. If the target is a creature, it must succeed on a DC\
    \ 14 Strength saving throw, or the zombie moves it up to 30 feet in any direction.\
    \ It is restrained by the ray's telekinetic grip until the start of the zombie's\
    \ next turn or until the zombie is incapacitated. If the target is an object weighing\
    \ 300 pounds or less that isn't being worn or carried, it is moved up to 30 feet\
    \ in any direction. The zombie can also exert fine control on objects with this\
    \ ray, such as manipulating a simple tool or opening a door or container."
  "name": "Eye Ray"
"source":
- "WDMM"
name: Nerozar the Defeated
image: "[[Nerozar the Defeated.png]]"
---

# Nerozar the Defeated

```statblock
"name": "Nerozar the Defeated"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "10"
- !!int "8"
- !!int "16"
- !!int "3"
- !!int "8"
- !!int "5"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Wisdom": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Deep Speech and Undercommon but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces Nerozar to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, Nerozar drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 14 (4d6)\
    \ piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zombie uses a random magical eye ray, choosing a target that it can\
    \ see within 60 feet of it.\n\n- 1. Paralyzing Ray. The targeted creature\
    \ must succeed on a DC 14 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 2. Fear Ray. The targeted\
    \ creature must succeed on a DC 14 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 3. Enervation Ray. The\
    \ targeted creature must make a DC 14 Constitution saving throw, taking 36 (8d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one.\n\
    - 4. Telekinetic Ray. If the target is a creature, it must succeed on a DC\
    \ 14 Strength saving throw, or the zombie moves it up to 30 feet in any direction.\
    \ It is restrained by the ray's telekinetic grip until the start of the zombie's\
    \ next turn or until the zombie is incapacitated. If the target is an object weighing\
    \ 300 pounds or less that isn't being worn or carried, it is moved up to 30 feet\
    \ in any direction. The zombie can also exert fine control on objects with this\
    \ ray, such as manipulating a simple tool or opening a door or container."
  "name": "Eye Ray"
"source":
- "WDMM"
"image": "[[Nerozar the Defeated.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 52*

## Environment

underdark