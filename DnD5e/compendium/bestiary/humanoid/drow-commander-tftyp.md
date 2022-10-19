---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/underdark
aliases: ["Drow Commander"]
statblock: true
"name": "Drow Commander"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "110"
"hit_dice": "11d8 + 22"
"stats":
- !!int "13"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "13"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "4"
  "Constitution": !!int "5"
"skillsaves":
  "Stealth": !!int "10"
  "Perception": !!int "4"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow's spellcasting ability is Charisma (spell save DC 12). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each:\
    \ [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow carries three magical bolts, as follows:\n\n- A _bolt of holding_,\
    \ which casts [hold person](/compendium/spells/hold-person.md) on a target hit\
    \ with the bolt, as well as up to two other targets within 30 feet of that target\n\
    - A _bolt of blinding_, which casts [blindness/deafness](/compendium/spells/blindness-deafness.md)\
    \ to blind on a target hit with the bolt, as well as up to two other targets within\
    \ 30 feet of that target\n- A _bolt of vapors_, which casts [stinking cloud](/compendium/spells/stinking-cloud.md)\
    \ centered on the point it hits\n\nEach of these effects has a spell save DC of\
    \ 15 and a duration of 1 minute."
  "name": "Special Equipment"
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
  "desc": "The drow makes two shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d6\
    \ + 6) piercing damage plus 10 (3d6) poison damage."
  "name": "Shortsword +2"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 30/120 ft., one target. Hit: 8\
    \ (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) for 1 hour. If\
    \ the saving throw fails by 5 or more, the target is also [unconscious](/rules/conditions.md#unconscious)\
    \ while [poisoned](/rules/conditions.md#poisoned) in this way. The target wakes\
    \ up if it takes damage or if another creature takes an action to shake it awake."
  "name": "Hand Crossbow +1"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow adds 3 to its AC against one melee attack that would hit it. To\
    \ do so, the drow must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "TftYP"
name: Drow Commander
image: "[[Drow Commander.png]]"
---

# Drow Commander

```statblock
"name": "Drow Commander"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "110"
"hit_dice": "11d8 + 22"
"stats":
- !!int "13"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "13"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "4"
  "Constitution": !!int "5"
"skillsaves":
  "Stealth": !!int "10"
  "Perception": !!int "4"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow's spellcasting ability is Charisma (spell save DC 12). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each:\
    \ [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow carries three magical bolts, as follows:\n\n- A _bolt of holding_,\
    \ which casts [hold person](/compendium/spells/hold-person.md) on a target hit\
    \ with the bolt, as well as up to two other targets within 30 feet of that target\n\
    - A _bolt of blinding_, which casts [blindness/deafness](/compendium/spells/blindness-deafness.md)\
    \ to blind on a target hit with the bolt, as well as up to two other targets within\
    \ 30 feet of that target\n- A _bolt of vapors_, which casts [stinking cloud](/compendium/spells/stinking-cloud.md)\
    \ centered on the point it hits\n\nEach of these effects has a spell save DC of\
    \ 15 and a duration of 1 minute."
  "name": "Special Equipment"
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
  "desc": "The drow makes two shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d6\
    \ + 6) piercing damage plus 10 (3d6) poison damage."
  "name": "Shortsword +2"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 30/120 ft., one target. Hit: 8\
    \ (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) for 1 hour. If\
    \ the saving throw fails by 5 or more, the target is also [unconscious](/rules/conditions.md#unconscious)\
    \ while [poisoned](/rules/conditions.md#poisoned) in this way. The target wakes\
    \ up if it takes damage or if another creature takes an action to shake it awake."
  "name": "Hand Crossbow +1"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow adds 3 to its AC against one melee attack that would hit it. To\
    \ do so, the drow must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "TftYP"
"image": "[[Drow Commander.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 209*

## Environment

underdark