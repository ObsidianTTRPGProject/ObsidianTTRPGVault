---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/underdark
aliases: ["Zress Orlezziir"]
statblock: true
"name": "Zress Orlezziir"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
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
  "desc": "Zress's innate spellcasting ability is Charisma (spell save DC 13). He\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day\
    \ each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Zress targets one ally he can see within 30 feet of\
    \ him. If the target can see or hear Zress, the target can use its reaction to\
    \ make one melee attack or to take the Dodge or Hide action."
  "name": "Battle Command"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zress has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Zress to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Zress has disadvantage on attack rolls, as well as on\
    \ Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zress makes three attacks: two with his scimitar and one with his whip\
    \ or his hand crossbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage plus 14 (4d6) poison damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 6 (1d4\
    \ + 4) slashing damage. If the target is an ally, it has advantage on attack rolls\
    \ until the end of its next turn."
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
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zress adds 3 to his AC against one melee attack that would hit him. To\
    \ do so, Zress must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "WDMM"
name: Zress Orlezziir
image: "[[Zress Orlezziir.png]]"
---

# Zress Orlezziir

```statblock
"name": "Zress Orlezziir"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
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
  "desc": "Zress's innate spellcasting ability is Charisma (spell save DC 13). He\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day\
    \ each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Zress targets one ally he can see within 30 feet of\
    \ him. If the target can see or hear Zress, the target can use its reaction to\
    \ make one melee attack or to take the Dodge or Hide action."
  "name": "Battle Command"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zress has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Zress to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Zress has disadvantage on attack rolls, as well as on\
    \ Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zress makes three attacks: two with his scimitar and one with his whip\
    \ or his hand crossbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage plus 14 (4d6) poison damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 6 (1d4\
    \ + 4) slashing damage. If the target is an ally, it has advantage on attack rolls\
    \ until the end of its next turn."
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
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zress adds 3 to his AC against one melee attack that would hit him. To\
    \ do so, Zress must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "WDMM"
"image": "[[Zress Orlezziir.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 136*

## Environment

underdark