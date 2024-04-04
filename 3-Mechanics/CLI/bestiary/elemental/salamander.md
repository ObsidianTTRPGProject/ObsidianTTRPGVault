---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Salamander"]
---
# [Salamander](3-Mechanics\CLI\bestiary\elemental/salamander.md)
*Source: Monster Manual p. 266. Available in the SRD.*  

```statblock
"name": "Salamander"
"size": "Large"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "30 ft."
"damage_vulnerabilities": "cold"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Ignan"
"cr": "5"
"traits":
- "desc": "A creature that touches the salamander or hits it with a melee attack while\
    \ within 5 feet of it takes dice:2d6|text(7) (2d6) fire damage."
  "name": "Heated Body"
- "desc": "Any metal melee weapon the salamander wields deals an extra dice:1d6|text(3)\
    \ (1d6) fire damage on a hit (included in the attack)."
  "name": "Heated Weapons"
"actions":
- "desc": "The salamander makes two attacks: one with its spear and one with its tail."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice:2d6 + 4|text(11) (2d6 + 4) piercing\
    \ damage, or dice:2d8 + 4|text(13) (2d8 + 4) piercing damage if used with\
    \ two hands to make a melee attack, plus dice:1d6|text(3) (1d6) fire damage."
  "name": "Spear"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) bludgeoning damage plus dice:2d6|text(7)\
    \ (2d6) fire damage, and the target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 14). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ the salamander can automatically hit the target with its tail, and the salamander\
    \ can't make tail attacks against other targets."
  "name": "Tail"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "BGDIA"
- "JttRC"
- "DoSI"
- "KftGV"
- "GotSF"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/salamander.webp"
```
^statblock

## Environment

underdark