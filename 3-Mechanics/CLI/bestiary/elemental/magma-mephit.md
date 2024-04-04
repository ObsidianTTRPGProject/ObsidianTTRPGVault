---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Magma Mephit"]
---
# [Magma Mephit](3-Mechanics\CLI\bestiary\elemental/magma-mephit.md)
*Source: Monster Manual p. 216. Available in the SRD.*  

```statblock
"name": "Magma Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"stats":
- !!int "8"
- !!int "12"
- !!int "12"
- !!int "7"
- !!int "10"
- !!int "10"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "3"
"damage_vulnerabilities": "cold"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Ignan, Terran"
"cr": "1/2"
"traits":
- "desc": "The mephit can innately cast [heat metal](/3-Mechanics/CLI/spells/heat-metal.md)\
    \ (spell save DC 10), requiring no material components. Its innate spellcasting\
    \ ability is Charisma.\n\nAt will: [heat metal](/3-Mechanics/CLI/spells/heat-metal.md)"
  "name": "innate"
- "desc": "When the mephit dies, it explodes in a burst of lava. Each creature within\
    \ 5 feet of it must make a DC 11 Dexterity saving throw, taking dice:2d6|text(7)\
    \ (2d6) fire damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Death Burst"
- "desc": "While the mephit remains motionless, it is indistinguishable from an ordinary\
    \ mound of magma."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3) to hit, reach 5 ft., one creature.\
    \ Hit: dice:1d4 + 1|text(3) (1d4 + 1) slashing damage plus dice:1d4|text(2)\
    \ (1d4) fire damage."
  "name": "Claws"
- "desc": "The mephit exhales a 15-foot cone of fire. Each creature in that area must\
    \ make a DC 11 Dexterity saving throw, taking dice:2d6|text(7) (2d6) fire\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 6)"
"source":
- "MM"
- "PotA"
- "SKT"
- "ToA"
- "WDMM"
- "GoS"
- "EGW"
- "SjA"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/magma-mephit.webp"
```
^statblock

## Environment

underdark