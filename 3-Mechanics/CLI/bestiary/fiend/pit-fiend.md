---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
aliases: ["Pit Fiend"]
---
# [Pit Fiend](3-Mechanics\CLI\bestiary\fiend/pit-fiend.md)
*Source: Monster Manual p. 77. Available in the SRD.*  

```statblock
"name": "Pit Fiend"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "300"
"hit_dice": "24d10 + 168"
"stats":
- !!int "26"
- !!int "14"
- !!int "24"
- !!int "22"
- !!int "18"
- !!int "24"
"speed": "30 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "10"
  "Constitution": !!int "13"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 14"
"languages": "Infernal, telepathy 120 ft."
"cr": "20"
"traits":
- "desc": "The pit fiend's spellcasting ability is Charisma (spell save DC 21). The\
    \ pit fiend can innately cast the following spells, requiring no material components:\n\
    \nAt will: [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [fireball](/3-Mechanics/CLI/spells/fireball.md)\n\
    \n3/day each: [hold monster](/3-Mechanics/CLI/spells/hold-monster.md), [wall\
    \ of fire](/3-Mechanics/CLI/spells/wall-of-fire.md)"
  "name": "innate"
- "desc": "Any creature hostile to the pit fiend that starts its turn within 20 feet\
    \ of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend\
    \ is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated). On a\
    \ failed save, the creature is [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ until the start of its next turn. If a creature's saving throw is successful,\
    \ the creature is immune to the pit fiend's Fear Aura for the next 24 hours."
  "name": "Fear Aura"
- "desc": "The pit fiend has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The pit fiend's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The pit fiend makes four attacks: one with its bite, one with its claw,\
    \ one with its mace, and one with its tail."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14) to hit, reach 5 ft., one\
    \ target. Hit: dice:4d6 + 8|text(22) (4d6 + 8) piercing damage. The target\
    \ must succeed on a DC 21 Constitution saving throw or become [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned).\
    \ While [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned) in this way,\
    \ the target can't regain hit points, and it takes dice:6d6|text(21) (6d6)\
    \ poison damage at the start of each of its turns. The [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14) to hit, reach 10 ft., one\
    \ target. Hit: dice:2d8 + 8|text(17) (2d8 + 8) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14) to hit, reach 10 ft., one\
    \ target. Hit: dice:2d6 + 8|text(15) (2d6 + 8) bludgeoning damage plus dice:6d6|text(21)\
    \ (6d6) fire damage."
  "name": "Mace"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14) to hit, reach 10 ft., one\
    \ target. Hit: dice:3d10 + 8|text(24) (3d10 + 8) bludgeoning damage."
  "name": "Tail"
"source":
- "MM"
- "WDMM"
- "BGDIA"
- "EGW"
- "TCE"
- "SatO"
- "ToFW"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/pit-fiend.webp"
```
^statblock