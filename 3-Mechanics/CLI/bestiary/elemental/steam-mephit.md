---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Steam Mephit"]
---
# [Steam Mephit](3-Mechanics\CLI\bestiary\elemental/steam-mephit.md)
*Source: Monster Manual p. 217. Available in the SRD.*  

```statblock
"name": "Steam Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "10"
"hp": !!int "21"
"hit_dice": "6d6"
"stats":
- !!int "5"
- !!int "11"
- !!int "10"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "30 ft., fly 30 ft."
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan, Ignan"
"cr": "1/4"
"traits":
- "desc": "The mephit can innately cast [blur](/3-Mechanics/CLI/spells/blur.md), requiring\
    \ no material components. Its innate spellcasting ability is Charisma.\n\nAt\
    \ will: [blur](/3-Mechanics/CLI/spells/blur.md)"
  "name": "innate"
- "desc": "When the mephit dies, it explodes in a cloud of steam. Each creature within\
    \ 5 feet of the mephit must succeed on a DC 10 Dexterity saving throw or take\
    \ dice:1d8|text(4) (1d8) fire damage."
  "name": "Death Burst"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+2 (+2) to hit, reach 5 ft., one creature.\
    \ Hit: dice:1d4|text(2) (1d4) slashing damage plus dice:1d4|text(2) (1d4)\
    \ fire damage."
  "name": "Claws"
- "desc": "The mephit exhales a 15-foot cone of scalding steam. Each creature in that\
    \ area must succeed on a DC 10 Dexterity saving throw, taking dice:1d8|text(4)\
    \ (1d8) fire damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Steam Breath (Recharge 6)"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "EGW"
- "ToFW"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/steam-mephit.webp"
```
^statblock

## Environment

underwater