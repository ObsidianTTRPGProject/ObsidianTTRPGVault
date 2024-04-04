---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Ghast"]
---
# [Ghast](3-Mechanics\CLI\bestiary\undead/ghast.md)
*Source: Monster Manual p. 148. Available in the SRD.*  

```statblock
"name": "Ghast"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "16"
- !!int "17"
- !!int "10"
- !!int "11"
- !!int "10"
- !!int "8"
"speed": "30 ft."
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "2"
"traits":
- "desc": "Any creature that starts its turn within 5 feet of the ghast must succeed\
    \ on a DC 10 Constitution saving throw or be [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ until the start of its next turn. On a successful saving throw, the creature\
    \ is immune to the ghast's Stench for 24 hours."
  "name": "Stench"
- "desc": "The ghast and any ghouls within 30 feet of it have advantage on saving\
    \ throws against effects that turn undead."
  "name": "Turn Defiance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3) to hit, reach 5 ft., one creature.\
    \ Hit: dice:2d8 + 3|text(12) (2d8 + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 3|text(10) (2d6 + 3) slashing damage. If the target is\
    \ a creature other than an undead, it must succeed on a DC 10 Constitution saving\
    \ throw or be [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed) for\
    \ 1 minute. The target can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Claws"
"source":
- "MM"
- "CoS"
- "PotA"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DC"
- "DIP"
- "SDW"
- "BGDIA"
- "DSotDQ"
- "PSI"
"image": "/3-Mechanics/CLI/bestiary/undead/token/ghast.webp"
```
^statblock

## Environment

underdark, swamp, urban