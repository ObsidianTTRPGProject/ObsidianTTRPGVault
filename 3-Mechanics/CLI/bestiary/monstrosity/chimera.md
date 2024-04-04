---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Chimera"]
---
# [Chimera](3-Mechanics\CLI\bestiary\monstrosity/chimera.md)
*Source: Monster Manual p. 39. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Chimera"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "19"
- !!int "11"
- !!int "19"
- !!int "3"
- !!int "14"
- !!int "10"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "8"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "understands Draconic but can't speak"
"cr": "6"
"actions":
- "desc": "The chimera makes three attacks: one with its bite, one with its horns,\
    \ and one with its claws. When its fire breath is available, it can use the breath\
    \ in place of its bite or horns."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d12 + 4|text(10) (1d12 + 4) bludgeoning damage."
  "name": "Horns"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) slashing damage."
  "name": "Claws"
- "desc": "The dragon head exhales fire in a 15-foot cone. Each creature in that area\
    \ must make a DC 15 Dexterity saving throw, taking dice:7d8|text(31) (7d8)\
    \ fire damage on a failed save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"source":
- "MM"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "WDMM"
- "SDW"
- "BGDIA"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/chimera.webp"
```
^statblock

## Environment

underdark, mountain, grassland, hill