---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
aliases: ["Marilith"]
---
# [Marilith](3-Mechanics\CLI\bestiary\fiend/marilith.md)
*Source: Monster Manual p. 61. Available in the SRD.*  

```statblock
"name": "Marilith"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "18"
- !!int "20"
- !!int "20"
- !!int "18"
- !!int "16"
- !!int "20"
"speed": "40 ft."
"saves":
  "Charisma": !!int "10"
  "Wisdom": !!int "8"
  "Strength": !!int "9"
  "Constitution": !!int "10"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 13"
"languages": "Abyssal, telepathy 120 ft."
"cr": "16"
"traits":
- "desc": "The marilith has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The marilith's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "The marilith can take one reaction on every turn in combat."
  "name": "Reactive"
"actions":
- "desc": "The marilith can make seven attacks: six with its longswords and one with\
    \ its tail."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 4|text(13) (2d8 + 4) slashing damage."
  "name": "Longsword"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 10 ft., one creature.\
    \ Hit: dice:2d10 + 4|text(15) (2d10 + 4) bludgeoning damage. If the target\
    \ is Medium or smaller, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 19). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ the marilith can automatically hit the target with its tail, and the marilith\
    \ can't make tail attacks against other targets."
  "name": "Tail"
- "desc": "The marilith magically teleports, along with any equipment it is wearing\
    \ or carrying, up to 120 feet to an unoccupied space it can see."
  "name": "Teleport"
"reactions":
- "desc": "The marilith adds 5 to its AC against one melee attack that would hit it.\
    \ To do so, the marilith must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MM"
- "WDMM"
- "GoS"
- "BGDIA"
- "EGW"
- "TCE"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/marilith.webp"
```
^statblock