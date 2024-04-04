---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Medusa"]
---
# [Medusa](3-Mechanics\CLI\bestiary\monstrosity/medusa.md)
*Source: Monster Manual p. 214. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Medusa"
"size": "Medium"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"stats":
- !!int "10"
- !!int "15"
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "15"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common"
"cr": "6"
"traits":
- "desc": "When a creature that can see the medusa's eyes starts its turn within 30\
    \ feet of the medusa, the medusa can force it to make a DC 14 Constitution saving\
    \ throw if the medusa isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ and can see the creature. If the saving throw fails by 5 or more, the creature\
    \ is instantly [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified). Otherwise,\
    \ a creature that fails the save begins to turn to stone and is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained).\
    \ The [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained) creature must\
    \ repeat the saving throw at the end of its next turn, becoming [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified)\
    \ on a failure or ending the effect on a success. The petrification lasts until\
    \ the creature is freed by the  [greater restoration](/3-Mechanics/CLI/spells/greater-restoration.md)\
    \ spell or other magic.\n\nUnless surprised, a creature can avert its eyes to\
    \ avoid the saving throw at the start of its turn. If the creature does so, it\
    \ can't see the medusa until the start of its next turn, when it can avert its\
    \ eyes again. If the creature looks at the medusa in the meantime, it must immediately\
    \ make the save.\n\nIf the medusa sees itself reflected on a polished surface\
    \ within 30 feet of it and in an area of bright light, the medusa is, due to its\
    \ curse, affected by its own gaze."
  "name": "Petrifying Gaze"
"actions":
- "desc": "The medusa makes either three melee attacks—one with its snake hair and\
    \ two with its shortsword—or two ranged attacks with its longbow."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one creature.\
    \ Hit: dice:1d4 + 2|text(4) (1d4 + 2) piercing damage plus dice:4d6|text(14)\
    \ (4d6) poison damage."
  "name": "Snake Hair"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 2|text(5) (1d6 + 2) piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: dice: d20+5 (+5) to hit, range 150/600 ft.,\
    \ one target. Hit: dice:1d8 + 2|text(6) (1d8 + 2) piercing damage plus dice:2d6|text(7)\
    \ (2d6) poison damage."
  "name": "Longbow"
"source":
- "MM"
- "WDMM"
- "GoS"
- "BGDIA"
- "ERLW"
- "IMR"
- "CM"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/medusa.webp"
```
^statblock

## Environment

desert