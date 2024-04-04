---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
aliases: ["Imp"]
---
# [Imp](3-Mechanics\CLI\bestiary\fiend/imp.md)
*Source: Monster Manual p. 76. Available in the SRD.*  

```statblock
"name": "Imp"
"size": "Tiny"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"stats":
- !!int "6"
- !!int "17"
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "14"
"speed": "20 ft., fly 40 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "5"
  "Insight": !!int "3"
  "Persuasion": !!int "4"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ not made with silvered weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Infernal, Common"
"cr": "1"
"traits":
- "desc": "The imp can use its action to polymorph into a beast form that resembles\
    \ a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb\
    \ 20 ft.), or back into its true form. Its statistics are the same in each form,\
    \ except for the speed changes noted. Any equipment it is wearing or carrying\
    \ isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- "desc": "Magical darkness doesn't impede the imp's darkvision."
  "name": "Devil's Sight"
- "desc": "The imp has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d4 + 3|text(5) (1d4 + 3) piercing damage, and the target must\
    \ make a DC 11 Constitution saving throw, taking dice:3d6|text(10) (3d6) poison\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Sting (Bite in Beast Form)"
- "desc": "The imp magically turns [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible)\
    \ until it attacks, or until its [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration)\
    \ ends (as if concentrating on a spell). Any equipment the imp wears or carries\
    \ is [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible) with it."
  "name": "Invisibility"
"source":
- "MM"
- "CoS"
- "SKT"
- "ToA"
- "WDH"
- "GoS"
- "BGDIA"
- "EGW"
- "TCE"
- "CM"
- "KftGV"
- "PSI"
- "SatO"
- "ToFW"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/imp.webp"
```
^statblock