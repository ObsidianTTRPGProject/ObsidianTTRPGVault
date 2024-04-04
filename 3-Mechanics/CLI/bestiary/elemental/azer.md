---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Azer"]
---
# [Azer](3-Mechanics\CLI\bestiary\elemental/azer.md)
*Source: Monster Manual p. 22. Available in the SRD.*  

```statblock
"name": "Azer"
"size": "Medium"
"type": "elemental"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"ac_class": "natural armor, [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "17"
- !!int "12"
- !!int "15"
- !!int "12"
- !!int "13"
- !!int "10"
"speed": "30 ft."
"saves":
  "Constitution": !!int "4"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "passive Perception 11"
"languages": "Ignan"
"cr": "2"
"traits":
- "desc": "A creature that touches the azer or hits it with a melee attack while within\
    \ 5 feet of it takes dice:1d10|text(5) (1d10) fire damage."
  "name": "Heated Body"
- "desc": "When the azer hits with a metal melee weapon, it deals an extra dice:1d6|text(3)\
    \ (1d6) fire damage (included in the attack)."
  "name": "Heated Weapons"
- "desc": "The azer sheds bright light in a 10-foot radius and dim light for an additional\
    \ 10 feet."
  "name": "Illumination"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 3|text(7) (1d8 + 3) bludgeoning damage, or dice:1d10\
    \ + 3|text(8) (1d10 + 3) bludgeoning damage if used with two hands to make\
    \ a melee attack, plus dice:1d6|text(3) (1d6) fire damage."
  "name": "Warhammer"
"source":
- "MM"
- "PotA"
- "WDMM"
- "KftGV"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/azer.webp"
```
^statblock