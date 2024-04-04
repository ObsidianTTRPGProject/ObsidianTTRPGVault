---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
aliases: ["Vrock"]
---
# [Vrock](3-Mechanics\CLI\bestiary\fiend/vrock.md)
*Source: Monster Manual p. 64. Available in the SRD.*  

```statblock
"name": "Vrock"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "11d10 + 44"
"stats":
- !!int "17"
- !!int "15"
- !!int "18"
- !!int "8"
- !!int "13"
- !!int "8"
"speed": "40 ft., fly 60 ft."
"saves":
  "Charisma": !!int "2"
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, telepathy 120 ft."
"cr": "6"
"traits":
- "desc": "The vrock has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The vrock makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 3|text(10) (2d6 + 3) piercing damage."
  "name": "Beak"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d10 + 3|text(14) (2d10 + 3) slashing damage."
  "name": "Talons"
- "desc": "A 15-foot-radius cloud of toxic spores extends out from the vrock. The\
    \ spores spread around corners. Each creature in that area must succeed on a DC\
    \ 14 Constitution saving throw or become [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned).\
    \ While [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned) in this way,\
    \ a target takes dice:1d10|text(5) (1d10) poison damage at the start of each\
    \ of its turns. A target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. Emptying a vial of holy water\
    \ on the target also ends the effect on it."
  "name": "Spores (Recharge 6)"
- "desc": "The vrock emits a horrific screech. Each creature within 20 feet of it\
    \ that can hear it and that isn't a demon must succeed on a DC 14 Constitution\
    \ saving throw or be [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned) until\
    \ the end of the vrock's next turn."
  "name": "Stunning Screech (1/Day)"
"source":
- "MM"
- "CoS"
- "PotA"
- "TftYP"
- "WDMM"
- "GoS"
- "BGDIA"
- "TCE"
- "CM"
- "CRCotN"
- "PSI"
- "SatO"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/vrock.webp"
```
^statblock