---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/small
- monster/type/humanoid/halfling
- monster/environment/urban
aliases: ["Drevin"]
statblock: true
"name": "Drevin"
"size": "Small"
"type": "humanoid"
"subtype": "halfling"
"alignment": "Any alignment"
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
"skillsaves":
  "Sleight of Hand": !!int "4"
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Investigation": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "6"
  "Persuasion": !!int "5"
"senses": "passive Perception 16"
"languages": "any two languages, Halfling"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "On each of its turns, Drevin can use a bonus action to take the Dash, Disengage,\
    \ or Hide action."
  "name": "Cunning Action"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Drevin deals an extra 7 (2d6) damage when it hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of Drevin that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and Drevin doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drevin can move through a space of a Medium or larger creature."
  "name": "Halfling Nimbleness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drevin has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Drevin makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
"source":
- "TftYP"
name: Drevin
image: "[[Drevin.png]]"
---

# Drevin

```statblock
"name": "Drevin"
"size": "Small"
"type": "humanoid"
"subtype": "halfling"
"alignment": "Any alignment"
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
"skillsaves":
  "Sleight of Hand": !!int "4"
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Investigation": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "6"
  "Persuasion": !!int "5"
"senses": "passive Perception 16"
"languages": "any two languages, Halfling"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "On each of its turns, Drevin can use a bonus action to take the Dash, Disengage,\
    \ or Hide action."
  "name": "Cunning Action"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Drevin deals an extra 7 (2d6) damage when it hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of Drevin that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and Drevin doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drevin can move through a space of a Medium or larger creature."
  "name": "Halfling Nimbleness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drevin has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Drevin makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
"source":
- "TftYP"
"image": "[[Drevin.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 126*

## Environment

urban