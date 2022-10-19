---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/medium
- monster/type/fey
- monster/environment/urban
aliases: ["Thinnings"]
statblock: true
"name": "Thinnings"
"size": "Medium"
"type": "fey"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "10"
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Sleight of Hand": !!int "4"
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Investigation": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "6"
  "Persuasion": !!int "5"
"senses": "passive Perception 16"
"languages": "Common, Elvish, Sylvan"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "On each of its turns, Thinnings can use a bonus action to take the Dash,\
    \ Disengage, or Hide action."
  "name": "Cunning Action"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thinnings deals an extra 7 (2d6) damage when it hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of Thinnings that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and Thinnings doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thinnings makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thinnings can make himself as flat as a piece of parchment or revert to\
    \ his normal thickness. In his flattened form, he can slide under doors, roll\
    \ himself up, or even fold himself into the pages of a book."
  "name": "Change Shape"
"source":
- "WBtW"
name: Thinnings
image: "[[Thinnings.png]]"
---

# Thinnings

```statblock
"name": "Thinnings"
"size": "Medium"
"type": "fey"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "10"
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Sleight of Hand": !!int "4"
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Investigation": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "6"
  "Persuasion": !!int "5"
"senses": "passive Perception 16"
"languages": "Common, Elvish, Sylvan"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "On each of its turns, Thinnings can use a bonus action to take the Dash,\
    \ Disengage, or Hide action."
  "name": "Cunning Action"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thinnings deals an extra 7 (2d6) damage when it hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of Thinnings that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and Thinnings doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thinnings makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thinnings can make himself as flat as a piece of parchment or revert to\
    \ his normal thickness. In his flattened form, he can slide under doors, roll\
    \ himself up, or even fold himself into the pages of a book."
  "name": "Change Shape"
"source":
- "WBtW"
"image": "[[Thinnings.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 15*

## Environment

urban