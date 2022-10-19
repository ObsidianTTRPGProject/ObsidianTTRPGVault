---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/underdark
aliases: ["Drow House Captain"]
statblock: true
"name": "Drow House Captain"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "162"
"hit_dice": "25d8 + 50"
"stats":
- !!int "14"
- !!int "19"
- !!int "15"
- !!int "12"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "8"
  "Perception": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Undercommon"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 13):\n\nAt will:\
    \ [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each: [darkness](/compendium/spells/darkness.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md), [levitate](/compendium/spells/levitate.md)\
    \ (self only)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow makes two Scimitar attacks and one Whip or Hand Crossbow attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage plus 14 (4d6) poison damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 6 (1d4\
    \ + 4) slashing damage."
  "name": "Whip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 30/120 ft., one target. Hit: 7\
    \ (1d6 + 4) piercing damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) for 1 hour. If\
    \ the saving throw fails by 5 or more, the target is also [unconscious](/rules/conditions.md#unconscious)\
    \ while [poisoned](/rules/conditions.md#poisoned) in this way. The target regains\
    \ consciousness if it takes damage or if another creature takes an action to shake\
    \ it."
  "name": "Hand Crossbow"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Choose one creature within 30 feet of the drow that the drow can see. If\
    \ the chosen creature can see or hear the drow, that creature can use its reaction\
    \ to make one melee attack or to take the Dodge or Hide action."
  "name": "Battle Command"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow adds 3 to its AC against one melee attack roll that would hit\
    \ it. To do so, the drow must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MPMM"
- "MTF"
name: Drow House Captain
image: "[[Drow House Captain.png]]"
---

# Drow House Captain

```statblock
"name": "Drow House Captain"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "162"
"hit_dice": "25d8 + 50"
"stats":
- !!int "14"
- !!int "19"
- !!int "15"
- !!int "12"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "8"
  "Perception": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Undercommon"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 13):\n\nAt will:\
    \ [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each: [darkness](/compendium/spells/darkness.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md), [levitate](/compendium/spells/levitate.md)\
    \ (self only)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow makes two Scimitar attacks and one Whip or Hand Crossbow attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage plus 14 (4d6) poison damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 6 (1d4\
    \ + 4) slashing damage."
  "name": "Whip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 30/120 ft., one target. Hit: 7\
    \ (1d6 + 4) piercing damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) for 1 hour. If\
    \ the saving throw fails by 5 or more, the target is also [unconscious](/rules/conditions.md#unconscious)\
    \ while [poisoned](/rules/conditions.md#poisoned) in this way. The target regains\
    \ consciousness if it takes damage or if another creature takes an action to shake\
    \ it."
  "name": "Hand Crossbow"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Choose one creature within 30 feet of the drow that the drow can see. If\
    \ the chosen creature can see or hear the drow, that creature can use its reaction\
    \ to make one melee attack or to take the Dodge or Hide action."
  "name": "Battle Command"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow adds 3 to its AC against one melee attack roll that would hit\
    \ it. To do so, the drow must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MPMM"
- "MTF"
"image": "[[Drow House Captain.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 101, Mordenkainen's Tome of Foes p. 184*

## Description

> [!quote]- A quote from Tasha  
> 
> House captains will do anything to protect their family—whether that's their birth house or their platoon of scrappy rebels. I'd do anything for my (sometimes infuriating) mother and for my chosen family, so I admire their dedication.

A drow house captain leads the troops of an Underdark faction, whether defending a stronghold or leading forces against enemies. These officers make extensive study of strategy and tactics to become effective leaders in battle.

Among Lolth's devotees in the city of Menzoberranzan in the Forgotten Realms, each noble house entrusts the leadership of its military forces to a house captain, who is typically the first or second son of a drow matron mother. Elsewhere drow house captains fight in the war against Lolth, often allying with duergar and others who also wish to rid their subterranean world of that god's malevolence.

## Environment

underdark