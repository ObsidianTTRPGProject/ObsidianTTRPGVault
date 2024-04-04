---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Knight"]
---
# [Knight](3-Mechanics\CLI\bestiary\humanoid/knight.md)
*Source: Monster Manual p. 347. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Knight"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "[plate armor](/3-Mechanics/CLI/items/plate-armor.md)"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "11"
- !!int "15"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "3"
"traits":
- "desc": "The knight has advantage on saving throws against being [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)."
  "name": "Brave"
"actions":
- "desc": "The knight makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 3|text(10) (2d6 + 3) slashing damage."
  "name": "Greatsword"
- "desc": "Ranged Weapon Attack: dice: d20+2 (+2) to hit, range 100/400 ft.,\
    \ one target. Hit: dice:1d10|text(5) (1d10) piercing damage."
  "name": "Heavy Crossbow"
- "desc": "For 1 minute, the knight can utter a special command or warning whenever\
    \ a nonhostile creature that it can see within 30 feet of it makes an attack roll\
    \ or a saving throw. The creature can add a dice: d4|avg|noform (d4) to its\
    \ roll provided it can hear and understand the knight. A creature can benefit\
    \ from only one Leadership die at a time. This effect ends if the knight is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Leadership (Recharges after a Short or Long Rest)"
"reactions":
- "desc": "The knight adds 2 to its AC against one melee attack that would hit it.\
    \ To do so, the knight must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "ToA"
- "WDH"
- "GoS"
- "DC"
- "DIP"
- "BGDIA"
- "EGW"
- "MOT"
- "CM"
- "WBtW"
- "CRCotN"
- "JttRC"
- "DSotDQ"
- "KftGV"
- "GotSF"
- "SatO"
- "ToFW"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/knight.webp"
```
^statblock

## Environment

urban