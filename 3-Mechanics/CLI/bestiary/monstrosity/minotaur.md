---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Minotaur"]
---
# [Minotaur](3-Mechanics\CLI\bestiary\monstrosity/minotaur.md)
*Source: Monster Manual p. 223. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Minotaur"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
"stats":
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "6"
- !!int "16"
- !!int "9"
"speed": "40 ft."
"skillsaves":
  "Perception": !!int "7"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Abyssal"
"cr": "3"
"traits":
- "desc": "If the minotaur moves at least 10 feet straight toward a target and then\
    \ hits it with a gore attack on the same turn, the target takes an extra dice:2d8|text(9)\
    \ (2d8) piercing damage. If the target is a creature, it must succeed on a DC\
    \ 14 Strength saving throw or be pushed up to 10 feet away and knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Charge"
- "desc": "The minotaur can perfectly recall any path it has traveled."
  "name": "Labyrinthine Recall"
- "desc": "At the start of its turn, the minotaur can gain advantage on all melee\
    \ weapon attack rolls it makes during that turn, but attack rolls against it have\
    \ advantage until the start of its next turn."
  "name": "Reckless"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d12 + 4|text(17) (2d12 + 4) slashing damage."
  "name": "Greataxe"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 4|text(13) (2d8 + 4) piercing damage."
  "name": "Gore"
"source":
- "MM"
- "PotA"
- "ToA"
- "WDH"
- "WDMM"
- "BGDIA"
- "ERLW"
- "EGW"
- "MOT"
- "CRCotN"
- "PSZ"
- "SatO"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/minotaur.webp"
```
^statblock

## Environment

underdark