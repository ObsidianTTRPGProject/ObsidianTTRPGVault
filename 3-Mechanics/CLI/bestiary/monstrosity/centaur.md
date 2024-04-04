---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Centaur"]
---
# [Centaur](3-Mechanics\CLI\bestiary\monstrosity/centaur.md)
*Source: Monster Manual p. 38. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Centaur"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Good"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "9"
- !!int "13"
- !!int "11"
"speed": "50 ft."
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "passive Perception 13"
"languages": "Elvish, Sylvan"
"cr": "2"
"traits":
- "desc": "If the centaur moves at least 30 feet straight toward a target and then\
    \ hits it with a pike attack on the same turn, the target takes an extra dice:3d6|text(10)\
    \ (3d6) piercing damage."
  "name": "Charge"
"actions":
- "desc": "The centaur makes two attacks: one with its pike and one with its hooves\
    \ or two with its longbow."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 10 ft., one target.\
    \ Hit: dice:1d10 + 4|text(9) (1d10 + 4) piercing damage."
  "name": "Pike"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) bludgeoning damage."
  "name": "Hooves"
- "desc": "Ranged Weapon Attack: dice: d20+4 (+4) to hit, range 150/600 ft.,\
    \ one target. Hit: dice:1d8 + 2|text(6) (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "MM"
- "SKT"
- "TftYP"
- "GoS"
- "DIP"
- "MOT"
- "WBtW"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/centaur.webp"
```
^statblock

## Environment

grassland, forest