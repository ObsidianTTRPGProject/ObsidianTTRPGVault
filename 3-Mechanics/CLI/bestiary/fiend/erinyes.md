---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
aliases: ["Erinyes"]
---
# [Erinyes](3-Mechanics\CLI\bestiary\fiend/erinyes.md)
*Source: Monster Manual p. 73. Available in the SRD.*  

```statblock
"name": "Erinyes"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "[plate armor](/3-Mechanics/CLI/items/plate-armor.md)"
"hp": !!int "153"
"hit_dice": "18d8 + 72"
"stats":
- !!int "18"
- !!int "16"
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "18"
"speed": "30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "7"
  "Wisdom": !!int "6"
  "Constitution": !!int "8"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 12"
"languages": "Infernal, telepathy 120 ft."
"cr": "12"
"traits":
- "desc": "The erinyes's weapon attacks are magical and deal an extra dice:3d8|text(13)\
    \ (3d8) poison damage on a hit (included in the attacks)."
  "name": "Hellish Weapons"
- "desc": "The erinyes has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The erinyes makes three attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 4|text(8) (1d8 + 4) slashing damage, or dice:1d10 + 4|text(9)\
    \ (1d10 + 4) slashing damage if used with two hands, plus dice:3d8|text(13)\
    \ (3d8) poison damage."
  "name": "Longsword"
- "desc": "Ranged Weapon Attack: dice: d20+7 (+7) to hit, range 150/600 ft.,\
    \ one target. Hit: dice:1d8 + 3|text(7) (1d8 + 3) piercing damage plus dice:3d8|text(13)\
    \ (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving\
    \ throw or be [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned). The poison\
    \ lasts until it is removed by the [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md)\
    \ spell or similar magic."
  "name": "Longbow"
"reactions":
- "desc": "The erinyes adds 4 to its AC against one melee attack that would hit it.\
    \ To do so, the erinyes must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MM"
- "ToA"
- "BGDIA"
- "EGW"
- "KftGV"
- "SatO"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/erinyes.webp"
```
^statblock