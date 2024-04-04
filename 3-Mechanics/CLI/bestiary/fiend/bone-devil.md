---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
aliases: ["Bone Devil"]
---
# [Bone Devil](3-Mechanics\CLI\bestiary\fiend/bone-devil.md)
*Source: Monster Manual p. 71. Available in the SRD.*  

```statblock
"name": "Bone Devil"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "18"
- !!int "16"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "16"
"speed": "40 ft., fly 40 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Intelligence": !!int "5"
"skillsaves":
  "Deception": !!int "7"
  "Insight": !!int "6"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Infernal, telepathy 120 ft."
"cr": "9"
"traits":
- "desc": "Magical darkness doesn't impede the devil's darkvision."
  "name": "Devil's Sight"
- "desc": "The devil has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The devil makes three attacks: two with its claws and one with its sting."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8) to hit, reach 10 ft., one target.\
    \ Hit: dice:1d8 + 4|text(8) (1d8 + 4) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d8 + 4|text(13) (2d8 + 4) piercing damage plus dice:5d6|text(17)\
    \ (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving\
    \ throw or become [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned) for\
    \ 1 minute. The target can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Sting"
"source":
- "MM"
- "RoT"
- "ToA"
- "WDMM"
- "DC"
- "DIP"
- "BGDIA"
- "EGW"
- "DSotDQ"
- "SatO"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/bone-devil.webp"
```
^statblock