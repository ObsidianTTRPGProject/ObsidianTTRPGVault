---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Gladiator"]
---
# [Gladiator](3-Mechanics\CLI\bestiary\humanoid/gladiator.md)
*Source: Monster Manual p. 346. Available in the SRD.*  

```statblock
"name": "Gladiator"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "[studded leather](/3-Mechanics/CLI/items/studded-leather-armor.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "15"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "5"
  "Strength": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "10"
"senses": "passive Perception 11"
"languages": "any one language (usually Common)"
"cr": "5"
"traits":
- "desc": "The gladiator has advantage on saving throws against being [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)."
  "name": "Brave"
- "desc": "A melee weapon deals one extra die of its damage when the gladiator hits\
    \ with it (included in the attack)."
  "name": "Brute"
"actions":
- "desc": "The gladiator makes three melee attacks or two ranged attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft.\
    \ and range 20/60 ft., one target. Hit: dice:2d6 + 4|text(11) (2d6 + 4)\
    \ piercing damage, or dice:2d8 + 4|text(13) (2d8 + 4) piercing damage if used\
    \ with two hands to make a melee attack."
  "name": "Spear"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one creature.\
    \ Hit: dice:2d4 + 4|text(9) (2d4 + 4) bludgeoning damage. If the target\
    \ is a Medium or smaller creature, it must succeed on a DC 15 Strength saving\
    \ throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Shield Bash"
"reactions":
- "desc": "The gladiator adds 3 to its AC against one melee attack that would hit\
    \ it. To do so, the gladiator must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MM"
- "CoS"
- "RoT"
- "SKT"
- "ToA"
- "GoS"
- "DIP"
- "SLW"
- "BGDIA"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "CRCotN"
- "KftGV"
- "SatO"
- "ToFW"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/gladiator.webp"
```
^statblock

## Environment

urban