---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Drider"]
---
# [Drider](3-Mechanics\CLI\bestiary\monstrosity/drider.md)
*Source: Monster Manual p. 120. Available in the SRD.*  

```statblock
"name": "Drider"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"stats":
- !!int "16"
- !!int "16"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "12"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Elvish, Undercommon"
"cr": "6"
"traits":
- "desc": "The drider's innate spellcasting ability is Wisdom (spell save DC 13).\
    \ The drider can innately cast the following spells, requiring no material components:\n\
    \nAt will: [dancing lights](/3-Mechanics/CLI/spells/dancing-lights.md)\n\n\
    1/day each: [darkness](/3-Mechanics/CLI/spells/darkness.md), [faerie fire](/3-Mechanics/CLI/spells/faerie-fire.md)"
  "name": "innate"
- "desc": "The drider has advantage on saving throws against being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
    \ and magic can't put the drider to sleep."
  "name": "Fey Ancestry"
- "desc": "The drider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "While in sunlight, the drider has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception)) checks\
    \ that rely on sight."
  "name": "Sunlight Sensitivity"
- "desc": "The drider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "The drider makes three attacks, either with its longsword or its longbow.\
    \ It can replace one of those attacks with a bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one creature.\
    \ Hit: dice:1d4|text(2) (1d4) piercing damage plus dice:2d8|text(9) (2d8)\
    \ poison damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 3|text(7) (1d8 + 3) slashing damage, or dice:1d10 + 3|text(8)\
    \ (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
- "desc": "Ranged Weapon Attack: dice: d20+6 (+6) to hit, range 150/600 ft.,\
    \ one target. Hit: dice:1d8 + 3|text(7) (1d8 + 3) piercing damage plus dice:1d8|text(4)\
    \ (1d8) poison damage."
  "name": "Longbow"
"source":
- "MM"
- "WDMM"
- "CRCotN"
- "SatO"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/drider.webp"
```
^statblock

## Environment

underdark