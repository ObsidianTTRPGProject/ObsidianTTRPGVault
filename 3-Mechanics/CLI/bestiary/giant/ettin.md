---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/giant
statblock: inline
aliases: ["Ettin"]
---
# [Ettin](3-Mechanics\CLI\bestiary\giant/ettin.md)
*Source: Monster Manual p. 132. Available in the SRD.*  

```statblock
"name": "Ettin"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"stats":
- !!int "21"
- !!int "8"
- !!int "17"
- !!int "6"
- !!int "10"
- !!int "8"
"speed": "40 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Giant, Orc"
"cr": "4"
"traits":
- "desc": "The ettin has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks and on saving throws against being [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
    \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
    \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned),\
    \ and knocked [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)."
  "name": "Two Heads"
- "desc": "When one of the ettin's heads is asleep, its other head is awake."
  "name": "Wakeful"
"actions":
- "desc": "The ettin makes two attacks: one with its battleaxe and one with its morningstar."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 5|text(14) (2d8 + 5) slashing damage."
  "name": "Battleaxe"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 5|text(14) (2d8 + 5) piercing damage."
  "name": "Morningstar"
"source":
- "MM"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "WDMM"
- "JttRC"
- "ToFW"
"image": "/3-Mechanics/CLI/bestiary/giant/token/ettin.webp"
```
^statblock

## Environment

underdark, mountain, hill