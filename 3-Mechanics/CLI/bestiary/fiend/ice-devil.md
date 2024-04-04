---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
aliases: ["Ice Devil"]
---
# [Ice Devil](3-Mechanics\CLI\bestiary\fiend/ice-devil.md)
*Source: Monster Manual p. 75. Available in the SRD.*  

```statblock
"name": "Ice Devil"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "180"
"hit_dice": "19d10 + 76"
"stats":
- !!int "21"
- !!int "14"
- !!int "18"
- !!int "18"
- !!int "15"
- !!int "18"
"speed": "40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "7"
  "Wisdom": !!int "7"
  "Constitution": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"damage_immunities": "fire, poison, cold"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 12"
"languages": "Infernal, telepathy 120 ft."
"cr": "14"
"traits":
- "desc": "Magical darkness doesn't impede the devil's darkvision."
  "name": "Devil's Sight"
- "desc": "The devil has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The devil makes three attacks: one with its bite, one with its claws, and\
    \ one with its tail."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 5 ft., one\
    \ target. Hit: dice:2d6 + 5|text(12) (2d6 + 5) piercing damage plus dice:3d6|text(10)\
    \ (3d6) cold damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 5 ft., one\
    \ target. Hit: dice:2d4 + 5|text(10) (2d4 + 5) slashing damage plus dice:3d6|text(10)\
    \ (3d6) cold damage."
  "name": "Claws"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 10 ft., one\
    \ target. Hit: dice:2d6 + 5|text(12) (2d6 + 5) bludgeoning damage plus dice:3d6|text(10)\
    \ (3d6) cold damage."
  "name": "Tail"
- "desc": "The devil magically forms an opaque wall of ice on a solid surface it can\
    \ see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and\
    \ 10 feet high, or it's a hemispherical dome up to 20 feet in diameter.\n\nWhen\
    \ the wall appears, each creature in its space is pushed out of it by the shortest\
    \ route. The creature chooses which side of the wall to end up on, unless the\
    \ creature is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated).\
    \ The creature then makes a DC 17 Dexterity saving throw, taking dice:10d6|text(35)\
    \ (10d6) cold damage on a failed save, or half as much damage on a successful\
    \ one.\n\nThe wall lasts for 1 minute or until the devil is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ or dies. The wall can be damaged and breached; each 10-foot section has AC 5,\
    \ 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic,\
    \ poison, and psychic damage. If a section is destroyed, it leaves behind a sheet\
    \ of frigid air in the space the wall occupied. Whenever a creature finishes moving\
    \ through the frigid air on a turn, willingly or otherwise, the creature must\
    \ make a DC 17 Constitution saving throw, taking dice:5d6|text(17) (5d6) cold\
    \ damage on a failed save, or half as much damage on a successful one. The frigid\
    \ air dissipates when the rest of the wall vanishes."
  "name": "Wall of Ice (Recharge 6)"
"source":
- "MM"
- "BGDIA"
- "TCE"
- "SatO"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/ice-devil.webp"
```
^statblock