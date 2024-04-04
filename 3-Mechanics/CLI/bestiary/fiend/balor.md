---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/19
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
aliases: ["Balor"]
---
# [Balor](3-Mechanics\CLI\bestiary\fiend/balor.md)
*Source: Monster Manual p. 55. Available in the SRD.*  

```statblock
"name": "Balor"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "262"
"hit_dice": "21d12 + 126"
"stats":
- !!int "26"
- !!int "15"
- !!int "22"
- !!int "20"
- !!int "16"
- !!int "22"
"speed": "40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "9"
  "Strength": !!int "14"
  "Constitution": !!int "12"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 13"
"languages": "Abyssal, telepathy 120 ft."
"cr": "19"
"traits":
- "desc": "When the balor dies, it explodes, and each creature within 30 feet of it\
    \ must make a DC 20 Dexterity saving throw, taking dice:20d6|text(70) (20d6)\
    \ fire damage on a failed save, or half as much damage on a successful one. The\
    \ explosion ignites flammable objects in that area that aren't being worn or carried,\
    \ and it destroys the balor's weapons."
  "name": "Death Throes"
- "desc": "At the start of each of the balor's turns, each creature within 5 feet\
    \ of it takes dice:3d6|text(10) (3d6) fire damage, and flammable objects in\
    \ the aura that aren't being worn or carried ignite. A creature that touches the\
    \ balor or hits it with a melee attack while within 5 feet of it takes dice:3d6|text(10)\
    \ (3d6) fire damage."
  "name": "Fire Aura"
- "desc": "The balor has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The balor's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The balor makes two attacks: one with its longsword and one with its whip."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14) to hit, reach 10 ft., one\
    \ target. Hit: dice:3d8 + 8|text(21) (3d8 + 8) slashing damage plus dice:3d8|text(13)\
    \ (3d8) lightning damage. If the balor scores a critical hit, it rolls damage\
    \ dice three times, instead of twice."
  "name": "Longsword"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14) to hit, reach 30 ft., one\
    \ target. Hit: dice:2d6 + 8|text(15) (2d6 + 8) slashing damage plus dice:3d6|text(10)\
    \ (3d6) fire damage, and the target must succeed on a DC 20 Strength saving\
    \ throw or be pulled up to 25 feet toward the balor."
  "name": "Whip"
- "desc": "The balor magically teleports, along with any equipment it is wearing or\
    \ carrying, up to 120 feet to an unoccupied space it can see."
  "name": "Teleport"
"source":
- "MM"
- "BGDIA"
- "IMR"
- "EGW"
- "TCE"
- "CRCotN"
- "ToFW"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/balor.webp"
```
^statblock