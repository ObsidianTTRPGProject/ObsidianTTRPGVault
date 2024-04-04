---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/gnoll
statblock: inline
aliases: ["Gnoll"]
---
# [Gnoll](3-Mechanics\CLI\bestiary\humanoid/gnoll.md)
*Source: Monster Manual p. 163. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Gnoll"
"size": "Medium"
"type": "humanoid"
"subtype": "gnoll"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "[hide armor](/3-Mechanics/CLI/items/hide-armor.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "6"
- !!int "10"
- !!int "7"
"speed": "30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Gnoll"
"cr": "1/2"
"traits":
- "desc": "When the gnoll reduces a creature to 0 hit points with a melee attack on\
    \ its turn, the gnoll can take a bonus action to move up to half its speed and\
    \ make a bite attack."
  "name": "Rampage"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one creature.\
    \ Hit: dice:1d4 + 2|text(4) (1d4 + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice:1d6 + 2|text(5) (1d6 + 2) piercing\
    \ damage, or dice:1d8 + 2|text(6) (1d8 + 2) piercing damage if used with two\
    \ hands to make a melee attack."
  "name": "Spear"
- "desc": "Ranged Weapon Attack: dice: d20+3 (+3) to hit, range 150/600 ft.,\
    \ one target. Hit: dice:1d8 + 1|text(5) (1d8 + 1) piercing damage."
  "name": "Longbow"
"source":
- "MM"
- "PotA"
- "TftYP"
- "GoS"
- "BGDIA"
- "ERLW"
- "EGW"
- "IDRotF"
- "SatO"
- "ToFW"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/gnoll.webp"
```
^statblock

## Environment

grassland, forest, hill, desert