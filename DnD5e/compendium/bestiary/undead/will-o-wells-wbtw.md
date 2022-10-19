---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/tiny
- monster/type/undead
- monster/environment/forest
- monster/environment/swamp
- monster/environment/urban
aliases: ["Will-o'-Wells"]
statblock: true
"name": "Will-o'-Wells"
"size": "Tiny"
"type": "undead"
"alignment": "Chaotic Good"
"ac": !!int "19"
"hp": !!int "22"
"hit_dice": "9d4"
"stats":
- !!int "1"
- !!int "28"
- !!int "10"
- !!int "13"
- !!int "14"
- !!int "11"
"speed": "walk 0 ft., fly 50 ft. (hover)"
"damage_resistances": "acid; cold; fire; necrotic; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "lightning, poison"
"condition_immunities": "exhaustion, grappled, paralyzed, poisoned, prone, restrained,\
  \ unconscious"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "the languages it knew in life"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the will-o'-wells can target one creature it can see\
    \ within 5 feet of it that has 0 hit points and is still alive. The target must\
    \ succeed on a DC 10 Constitution saving throw against this magic or die. If the\
    \ target dies, the will-o'-wells regains 10 (3d6) hit points."
  "name": "Consume Life"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The will-o'-wells can't wear or carry anything."
  "name": "Ephemeral"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The will-o'-wells can move through other creatures and objects as if they\
    \ were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The will-o'-wells sheds bright light in a 5 to 20-foot radius and dim light\
    \ for an additional number of ft. equal to the chosen radius. The will-o'-wells\
    \ can alter the radius as a bonus action."
  "name": "Variable Illumination"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d8)\
    \ lightning damage."
  "name": "Shock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The will-o'-wells and its light magically become [invisible](/rules/conditions.md#invisible)\
    \ until it attacks or uses its Consume Life, or until its concentration ends (as\
    \ if concentrating on a spell)."
  "name": "Invisibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The will-o'-wells grants a boon to one creature it can see within 5 feet\
    \ of it that isn't an Undead. The boon's recipient gains a d4 and can, at any\
    \ time within the next 24 hours, roll this die and add the number rolled to one\
    \ ability check, attack roll, or saving throw made by it. No creature can have\
    \ more than one of these magic boons at a time."
  "name": "Magic Boon (Recharges after a Long Rest)"
"source":
- "WBtW"
name: Will-o'-Wells
image: "[[Will-o'-Wells.png]]"
---

# Will-o'-Wells

```statblock
"name": "Will-o'-Wells"
"size": "Tiny"
"type": "undead"
"alignment": "Chaotic Good"
"ac": !!int "19"
"hp": !!int "22"
"hit_dice": "9d4"
"stats":
- !!int "1"
- !!int "28"
- !!int "10"
- !!int "13"
- !!int "14"
- !!int "11"
"speed": "walk 0 ft., fly 50 ft. (hover)"
"damage_resistances": "acid; cold; fire; necrotic; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "lightning, poison"
"condition_immunities": "exhaustion, grappled, paralyzed, poisoned, prone, restrained,\
  \ unconscious"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "the languages it knew in life"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the will-o'-wells can target one creature it can see\
    \ within 5 feet of it that has 0 hit points and is still alive. The target must\
    \ succeed on a DC 10 Constitution saving throw against this magic or die. If the\
    \ target dies, the will-o'-wells regains 10 (3d6) hit points."
  "name": "Consume Life"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The will-o'-wells can't wear or carry anything."
  "name": "Ephemeral"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The will-o'-wells can move through other creatures and objects as if they\
    \ were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The will-o'-wells sheds bright light in a 5 to 20-foot radius and dim light\
    \ for an additional number of ft. equal to the chosen radius. The will-o'-wells\
    \ can alter the radius as a bonus action."
  "name": "Variable Illumination"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d8)\
    \ lightning damage."
  "name": "Shock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The will-o'-wells and its light magically become [invisible](/rules/conditions.md#invisible)\
    \ until it attacks or uses its Consume Life, or until its concentration ends (as\
    \ if concentrating on a spell)."
  "name": "Invisibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The will-o'-wells grants a boon to one creature it can see within 5 feet\
    \ of it that isn't an Undead. The boon's recipient gains a d4 and can, at any\
    \ time within the next 24 hours, roll this die and add the number rolled to one\
    \ ability check, attack roll, or saving throw made by it. No creature can have\
    \ more than one of these magic boons at a time."
  "name": "Magic Boon (Recharges after a Long Rest)"
"source":
- "WBtW"
"image": "[[Will-o'-Wells.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 61*

## Environment

forest, swamp, urban