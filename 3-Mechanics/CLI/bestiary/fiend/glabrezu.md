---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
aliases: ["Glabrezu"]
---
# [Glabrezu](3-Mechanics\CLI\bestiary\fiend/glabrezu.md)
*Source: Monster Manual p. 58. Available in the SRD.*  

```statblock
"name": "Glabrezu"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"stats":
- !!int "20"
- !!int "15"
- !!int "21"
- !!int "19"
- !!int "17"
- !!int "16"
"speed": "40 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "7"
  "Strength": !!int "9"
  "Constitution": !!int "9"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 13"
"languages": "Abyssal, telepathy 120 ft."
"cr": "9"
"traits":
- "desc": "The glabrezu's spellcasting ability is Intelligence (spell save DC 16).\
    \ The glabrezu can innately cast the following spells, requiring no material components:\n\
    \nAt will: [darkness](/3-Mechanics/CLI/spells/darkness.md), [detect magic](/3-Mechanics/CLI/spells/detect-magic.md),\
    \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md)\n\n1/day each: [confusion](/3-Mechanics/CLI/spells/confusion.md),\
    \ [fly](/3-Mechanics/CLI/spells/fly.md), [power word stun](/3-Mechanics/CLI/spells/power-word-stun.md)"
  "name": "innate"
- "desc": "The glabrezu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The glabrezu makes four attacks: two with its pincers and two with its\
    \ fists. Alternatively, it makes two attacks with its pincers and casts one spell."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d10 + 5|text(16) (2d10 + 5) bludgeoning damage. If the target\
    \ is a Medium or smaller creature, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 15). The glabrezu has two pincers, each of which can grapple only\
    \ one target."
  "name": "Pincer"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d4 + 2|text(7) (2d4 + 2) bludgeoning damage."
  "name": "Fist"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "BGDIA"
- "EGW"
- "CRCotN"
- "SatO"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/glabrezu.webp"
```
^statblock