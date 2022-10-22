---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/underdark
aliases: ["Drow Arachnomancer"]
statblock: true
"name": "Drow Arachnomancer"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "162"
"hit_dice": "25d8 + 50"
"stats":
- !!int "11"
- !!int "17"
- !!int "14"
- !!int "19"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft., climb 30 ft."
"saves":
  "Charisma": !!int "8"
  "Intelligence": !!int "9"
  "Constitution": !!int "7"
"skillsaves":
  "Nature": !!int "9"
  "Stealth": !!int "8"
  "Perception": !!int "7"
  "Arcana": !!int "9"
"damage_resistances": "poison"
"senses": "blindsight 10 ft., darkvision 120 ft., passive Perception 17"
"languages": "Elvish, Undercommon, can speak with spiders"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 17):\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md), [mage hand](/compendium/spells/mage-hand.md)\n\
    \n1/day each: [darkness](/compendium/spells/darkness.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [etherealness](/compendium/spells/etherealness.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [fly](/compendium/spells/fly.md), [insect plague](/compendium/spells/insect-plague.md),\
    \ [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow makes three attacks, using Bite, Poisonous Touch, Web, or a combination\
    \ of them. One attack can be replaced by a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) piercing damage, and the target must make a DC 15 Constitution saving throw,\
    \ taking 31 (7d8) poison damage on a failed save, or half as much damage on a\
    \ successful one. If the poison damage reduces the target to 0 hit points, the\
    \ target is stable but [poisoned](/rules/conditions.md#poisoned) for 1 hour, even\
    \ after regaining hit points, and is [paralyzed](/rules/conditions.md#paralyzed)\
    \ while [poisoned](/rules/conditions.md#poisoned) in this way."
  "name": "Bite (Spider Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 35 (10d6)\
    \ poison damage."
  "name": "Poisonous Touch (Humanoid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 30/60 ft., one target. Hit: The\
    \ target is [restrained](/rules/conditions.md#restrained) by webbing. As an action,\
    \ the [restrained](/rules/conditions.md#restrained) target can make a DC 15 Strength\
    \ check, bursting the webbing on a success. The webbing can also be attacked and\
    \ destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning,\
    \ poison, and psychic damage)."
  "name": "Web (Spider Form Only; (Recharge 5-6))"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow magically transforms into a Large spider, remaining in that form\
    \ for up to 1 hour, or back into its true form. Its statistics, other than its\
    \ size, are the same in each form. It can speak and cast spells while in spider\
    \ form. Any equipment it is wearing or carrying in Humanoid form melds into the\
    \ spider form. It can't activate, use, wield, or otherwise benefit from any of\
    \ its equipment. It reverts to its Humanoid form if it dies."
  "name": "Change Shape (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
name: Drow Arachnomancer
image: "[[Drow Arachnomancer.png]]"
---

# Drow Arachnomancer

```statblock
"name": "Drow Arachnomancer"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "162"
"hit_dice": "25d8 + 50"
"stats":
- !!int "11"
- !!int "17"
- !!int "14"
- !!int "19"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft., climb 30 ft."
"saves":
  "Charisma": !!int "8"
  "Intelligence": !!int "9"
  "Constitution": !!int "7"
"skillsaves":
  "Nature": !!int "9"
  "Stealth": !!int "8"
  "Perception": !!int "7"
  "Arcana": !!int "9"
"damage_resistances": "poison"
"senses": "blindsight 10 ft., darkvision 120 ft., passive Perception 17"
"languages": "Elvish, Undercommon, can speak with spiders"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 17):\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md), [mage hand](/compendium/spells/mage-hand.md)\n\
    \n1/day each: [darkness](/compendium/spells/darkness.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [etherealness](/compendium/spells/etherealness.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [fly](/compendium/spells/fly.md), [insect plague](/compendium/spells/insect-plague.md),\
    \ [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow makes three attacks, using Bite, Poisonous Touch, Web, or a combination\
    \ of them. One attack can be replaced by a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) piercing damage, and the target must make a DC 15 Constitution saving throw,\
    \ taking 31 (7d8) poison damage on a failed save, or half as much damage on a\
    \ successful one. If the poison damage reduces the target to 0 hit points, the\
    \ target is stable but [poisoned](/rules/conditions.md#poisoned) for 1 hour, even\
    \ after regaining hit points, and is [paralyzed](/rules/conditions.md#paralyzed)\
    \ while [poisoned](/rules/conditions.md#poisoned) in this way."
  "name": "Bite (Spider Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 35 (10d6)\
    \ poison damage."
  "name": "Poisonous Touch (Humanoid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 30/60 ft., one target. Hit: The\
    \ target is [restrained](/rules/conditions.md#restrained) by webbing. As an action,\
    \ the [restrained](/rules/conditions.md#restrained) target can make a DC 15 Strength\
    \ check, bursting the webbing on a success. The webbing can also be attacked and\
    \ destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning,\
    \ poison, and psychic damage)."
  "name": "Web (Spider Form Only; (Recharge 5-6))"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow magically transforms into a Large spider, remaining in that form\
    \ for up to 1 hour, or back into its true form. Its statistics, other than its\
    \ size, are the same in each form. It can speak and cast spells while in spider\
    \ form. Any equipment it is wearing or carrying in Humanoid form melds into the\
    \ spider form. It can't activate, use, wield, or otherwise benefit from any of\
    \ its equipment. It reverts to its Humanoid form if it dies."
  "name": "Change Shape (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
"image": "[[Drow Arachnomancer.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 99, Mordenkainen's Tome of Foes p. 182*

## Description

Drow spellcasters who seek to devote themselves wholly to [Lolth](/compendium/deities/drow-lolth.md), the Spider Queen, sometimes walk the sinister path of the arachnomancer. By offering up body and soul to Lolth, they gain tremendous power and a supernatural connection to the ancient spiders of the Demonweb Pits, channeling magic from that dread place.

## Environment

underdark