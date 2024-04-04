---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
statblock: inline
aliases: ["Shambling Mound"]
---
# [Shambling Mound](3-Mechanics\CLI\bestiary\plant/shambling-mound.md)
*Source: Monster Manual p. 270. Available in the SRD.*  

```statblock
"name": "Shambling Mound"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "18"
- !!int "8"
- !!int "16"
- !!int "5"
- !!int "10"
- !!int "5"
"speed": "20 ft., swim 20 ft."
"skillsaves":
  "Stealth": !!int "2"
"damage_resistances": "cold, fire"
"damage_immunities": "lightning"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened), [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- "desc": "Whenever the shambling mound is subjected to lightning damage, it takes\
    \ no damage and regains a number of hit points equal to the lightning damage dealt."
  "name": "Lightning Absorption"
"actions":
- "desc": "The shambling mound makes two slam attacks. If both attacks hit a Medium\
    \ or smaller target, the target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 14), and the shambling mound uses its Engulf on it."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 4|text(13) (2d8 + 4) bludgeoning damage."
  "name": "Slam"
- "desc": "The shambling mound engulfs a Medium or smaller creature [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by it. The engulfed target is [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
    \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained), and unable to\
    \ breathe, and it must succeed on a DC 14 Constitution saving throw at the start\
    \ of each of the mound's turns or take dice:2d8 + 4|text(13) (2d8 + 4) bludgeoning\
    \ damage. If the mound moves, the engulfed target moves with it. The mound can\
    \ have only one creature engulfed at a time."
  "name": "Engulf"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "BGDIA"
- "MOT"
- "CM"
- "WBtW"
- "JttRC"
- "KftGV"
- "PSI"
- "BMT"
- "HFStCM"
- "GHLoE"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/plant/token/shambling-mound.webp"
```
^statblock

## Environment

forest, swamp