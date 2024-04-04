---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dwarf
statblock: inline
aliases: ["Duergar"]
---
# [Duergar](3-Mechanics\CLI\bestiary\humanoid/duergar.md)
*Source: Monster Manual p. 122. Available in the SRD.*  

```statblock
"name": "Duergar"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "[scale mail](/3-Mechanics/CLI/items/scale-mail.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "26"
"hit_dice": "4d8 + 4"
"stats":
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "9"
"speed": "25 ft."
"damage_resistances": "poison"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Dwarvish, Undercommon"
"cr": "1"
"traits":
- "desc": "The duergar has advantage on saving throws against poison, spells, and\
    \ illusions, as well as to resist being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ or [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed)."
  "name": "Duergar Resilience"
- "desc": "While in sunlight, the duergar has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception)) checks\
    \ that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "For 1 minute, the duergar magically increases in size, along with anything\
    \ it is wearing or carrying. While enlarged, the duergar is Large, doubles its\
    \ damage dice on Strength-based weapon attacks (included in the attacks), and\
    \ makes Strength checks and Strength saving throws with advantage. If the duergar\
    \ lacks the room to become Large, it attains the maximum size possible in the\
    \ space available."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 2|text(6) (1d8 + 2) piercing damage, or dice:2d8 + 2|text(11)\
    \ (2d8 + 2) piercing damage while enlarged."
  "name": "War Pick"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft.\
    \ or range 30/120 ft., one target. Hit: dice:1d6 + 2|text(5) (1d6 + 2) piercing\
    \ damage, or dice:2d6 + 2|text(9) (2d6 + 2) piercing damage while enlarged."
  "name": "Javelin"
- "desc": "The duergar magically turns [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible)\
    \ until it attacks, casts a spell, or uses its Enlarge, or until its [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration)\
    \ is broken, up to 1 hour (as if concentrating on a spell). Any equipment the\
    \ duergar wears or carries is [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible)\
    \ with it."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"source":
- "MM"
- "PotA"
- "TftYP"
- "WDH"
- "WDMM"
- "BGDIA"
- "EGW"
- "IDRotF"
- "KftGV"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/duergar.webp"
```
^statblock

## Environment

underdark