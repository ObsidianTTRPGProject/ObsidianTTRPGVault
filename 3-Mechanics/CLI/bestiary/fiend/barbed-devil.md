---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
aliases: ["Barbed Devil"]
---
# [Barbed Devil](3-Mechanics\CLI\bestiary\fiend/barbed-devil.md)
*Source: Monster Manual p. 70. Available in the SRD.*  

```statblock
"name": "Barbed Devil"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "110"
"hit_dice": "13d8 + 52"
"stats":
- !!int "16"
- !!int "17"
- !!int "18"
- !!int "12"
- !!int "14"
- !!int "14"
"speed": "30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
  "Strength": !!int "6"
  "Constitution": !!int "7"
"skillsaves":
  "Deception": !!int "5"
  "Insight": !!int "5"
  "Perception": !!int "8"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Infernal, telepathy 120 ft."
"cr": "5"
"traits":
- "desc": "At the start of each of its turns, the barbed devil deals dice:1d10|text(5)\
    \ (1d10) piercing damage to any creature grappling it."
  "name": "Barbed Hide"
- "desc": "Magical darkness doesn't impede the devil's darkvision."
  "name": "Devil's Sight"
- "desc": "The devil has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The devil makes three melee attacks: one with its tail and two with its\
    \ claws. Alternatively, it can use Hurl Flame twice."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 3|text(6) (1d6 + 3) piercing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 3|text(10) (2d6 + 3) piercing damage."
  "name": "Tail"
- "desc": "Ranged Spell Attack: dice: d20+5 (+5) to hit, range 150 ft., one\
    \ target. Hit: dice:3d6|text(10) (3d6) fire damage. If the target is a flammable\
    \ object that isn't being worn or carried, it also catches fire."
  "name": "Hurl Flame"
"source":
- "MM"
- "RoT"
- "ToA"
- "WDH"
- "WDMM"
- "BGDIA"
- "EGW"
- "IDRotF"
- "TCE"
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/barbed-devil.webp"
```
^statblock