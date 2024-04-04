---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
aliases: ["Quasit"]
---
# [Quasit](3-Mechanics\CLI\bestiary\fiend/quasit.md)
*Source: Monster Manual p. 63. Available in the SRD.*  

```statblock
"name": "Quasit"
"size": "Tiny"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "7"
"hit_dice": "3d4"
"stats":
- !!int "5"
- !!int "17"
- !!int "10"
- !!int "7"
- !!int "10"
- !!int "10"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "5"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Abyssal, Common"
"cr": "1"
"traits":
- "desc": "The quasit can use its action to polymorph into a beast form that resembles\
    \ a bat (speed 10 feet fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad\
    \ (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same\
    \ in each form, except for the speed changes noted. Any equipment it is wearing\
    \ or carrying isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- "desc": "The quasit has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d4 + 3|text(5) (1d4 + 3) piercing damage, and the target must\
    \ succeed on a DC 10 Constitution saving throw or take dice:2d4|text(5) (2d4)\
    \ poison damage and become [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Claw (Bite in Beast Form)"
- "desc": "One creature of the quasit's choice within 20 feet of it must succeed on\
    \ a DC 10 Wisdom saving throw or be [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, with disadvantage if the quasit is within line of sight, ending the effect\
    \ on itself on a success."
  "name": "Scare (1/Day)"
- "desc": "The quasit magically turns [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible)\
    \ until it attacks or uses Scare, or until its [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration)\
    \ ends (as if concentrating on a spell). Any equipment the quasit wears or carries\
    \ is [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible) with it."
  "name": "Invisibility"
"source":
- "MM"
- "CoS"
- "TftYP"
- "WDMM"
- "BGDIA"
- "EGW"
- "TCE"
- "CM"
- "WBtW"
- "CRCotN"
- "KftGV"
- "PSI"
- "PaBTSO"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/quasit.webp"
```
^statblock