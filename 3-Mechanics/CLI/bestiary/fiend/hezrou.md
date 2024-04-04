---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
aliases: ["Hezrou"]
---
# [Hezrou](3-Mechanics\CLI\bestiary\fiend/hezrou.md)
*Source: Monster Manual p. 60. Available in the SRD.*  

```statblock
"name": "Hezrou"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "13d10 + 65"
"stats":
- !!int "19"
- !!int "17"
- !!int "20"
- !!int "5"
- !!int "12"
- !!int "13"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
  "Strength": !!int "7"
  "Constitution": !!int "8"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, telepathy 120 ft."
"cr": "8"
"traits":
- "desc": "The hezrou has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Any creature that starts its turn within 10 feet of the hezrou must succeed\
    \ on a DC 14 Constitution saving throw or be [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ until the start of its next turn. On a successful saving throw, the creature\
    \ is immune to the hezrou's stench for 24 hours."
  "name": "Stench"
"actions":
- "desc": "The hezrou makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d10 + 4|text(15) (2d10 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) slashing damage."
  "name": "Claws"
"source":
- "MM"
- "PotA"
- "TftYP"
- "WDMM"
- "BGDIA"
- "EGW"
- "WBtW"
- "CRCotN"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/hezrou.webp"
```
^statblock