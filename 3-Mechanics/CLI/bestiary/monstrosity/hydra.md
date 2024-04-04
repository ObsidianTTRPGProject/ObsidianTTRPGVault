---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Hydra"]
---
# [Hydra](3-Mechanics\CLI\bestiary\monstrosity/hydra.md)
*Source: Monster Manual p. 190. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Hydra"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "20"
- !!int "12"
- !!int "20"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": ""
"cr": "8"
"traits":
- "desc": "The hydra can hold its breath for 1 hour."
  "name": "Hold Breath"
- "desc": "The hydra has five heads. While it has more than one head, the hydra has\
    \ advantage on saving throws against being [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
    \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
    \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned),\
    \ and knocked [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious).\n\
    \nWhenever the hydra takes 25 or more damage in a single turn, one of its heads\
    \ dies. If all its heads die, the hydra dies.\n\nAt the end of its turn, it grows\
    \ two heads for each of its heads that died since its last turn, unless it has\
    \ taken fire damage since its last turn. The hydra regains 10 hit points for each\
    \ head regrown in this way."
  "name": "Multiple Heads"
- "desc": "For each head the hydra has beyond one, it gets an extra reaction that\
    \ can be used only for opportunity attacks."
  "name": "Reactive Heads"
- "desc": "While the hydra sleeps, at least one of its heads is awake."
  "name": "Wakeful"
"actions":
- "desc": "The hydra makes as many bite attacks as it has heads."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8) to hit, reach 10 ft., one target.\
    \ Hit: dice:1d10 + 5|text(10) (1d10 + 5) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "PotA"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "EGW"
- "MOT"
- "IDRotF"
- "JttRC"
- "LoX"
- "PSZ"
- "PaBTSO"
- "SatO"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/hydra.webp"
```
^statblock

## Environment

swamp