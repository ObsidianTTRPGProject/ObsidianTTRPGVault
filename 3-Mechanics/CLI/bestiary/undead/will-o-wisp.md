---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Will-o'-Wisp"]
---
# [Will-o'-Wisp](3-Mechanics\CLI\bestiary\undead/will-o-wisp.md)
*Source: Monster Manual p. 301. Available in the SRD.*  

```statblock
"name": "Will-o'-Wisp"
"size": "Tiny"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "22"
"hit_dice": "9d4"
"stats":
- !!int "1"
- !!int "28"
- !!int "10"
- !!int "13"
- !!int "14"
- !!int "11"
"speed": "0 ft., fly 50 ft. (hover)"
"damage_resistances": "acid; cold; fire; necrotic; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "lightning, poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned), [prone](/3-Mechanics/CLI/rules/conditions.md#prone),\
  \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained), [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "the languages it knew in life"
"cr": "2"
"traits":
- "desc": "As a bonus action, the will-o'-wisp can target one creature it can see\
    \ within 5 feet of it that has 0 hit points and is still alive. The target must\
    \ succeed on a DC 10 Constitution saving throw against this magic or die. If the\
    \ target dies, the will-o'-wisp regains dice:3d6|text(10) (3d6) hit points."
  "name": "Consume Life"
- "desc": "The will-o'-wisp can't wear or carry anything."
  "name": "Ephemeral"
- "desc": "The will-o'-wisp can move through other creatures and objects as if they\
    \ were difficult terrain. It takes dice:1d10|text(5) (1d10) force damage if\
    \ it ends its turn inside an object."
  "name": "Incorporeal Movement"
- "desc": "The will-o'-wisp sheds bright light in a 5 to 20-foot radius and dim light\
    \ for an additional number of ft. equal to the chosen radius. The will-o'-wisp\
    \ can alter the radius as a bonus action."
  "name": "Variable Illumination"
"actions":
- "desc": "Melee Spell Attack: dice: d20+4 (+4) to hit, reach 5 ft., one creature.\
    \ Hit: dice:2d8|text(9) (2d8) lightning damage."
  "name": "Shock"
- "desc": "The will-o'-wisp and its light magically become [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible)\
    \ until it attacks or uses its Consume Life, or until its [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration)\
    \ ends (as if concentrating on a spell)."
  "name": "Invisibility"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "DIP"
- "BGDIA"
- "IDRotF"
- "CM"
- "WBtW"
- "CRCotN"
- "JttRC"
- "LoX"
- "PSI"
- "AATM"
- "SatO"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/undead/token/will-o-wisp.webp"
```
^statblock

## Environment

forest, swamp, urban