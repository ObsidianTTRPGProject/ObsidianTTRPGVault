---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Assassin"]
---
# [Assassin](3-Mechanics\CLI\bestiary\humanoid/assassin.md)
*Source: Monster Manual p. 343. Available in the SRD.*  

```statblock
"name": "Assassin"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "15"
"ac_class": "[studded leather](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "11"
- !!int "10"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "6"
  "Intelligence": !!int "4"
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "9"
  "Perception": !!int "3"
  "Acrobatics": !!int "6"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Thieves' cant plus any two languages"
"cr": "8"
"traits":
- "desc": "During its first turn, the assassin has advantage on attack rolls against\
    \ any creature that hasn't taken a turn. Any hit the assassin scores against a\
    \ surprised creature is a critical hit."
  "name": "Assassinate"
- "desc": "If the assassin is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the assassin instead takes no damage\
    \ if it succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- "desc": "The assassin deals an extra dice:4d6|text(14) (4d6) damage when it\
    \ hits a target with a weapon attack and has advantage on the attack roll, or\
    \ when the target is within 5 feet of an ally of the assassin that isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ and the assassin doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "The assassin makes two shortsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 3|text(6) (1d6 + 3) piercing damage, and the target must\
    \ make a DC 15 Constitution saving throw, taking dice:7d6|text(24) (7d6) poison\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: dice: d20+6 (+6) to hit, range 80/320 ft.,\
    \ one target. Hit: dice:1d8 + 3|text(7) (1d8 + 3) piercing damage, and the\
    \ target must make a DC 15 Constitution saving throw, taking dice:7d6|text(24)\
    \ (7d6) poison damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Light Crossbow"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "BGDIA"
- "IMR"
- "EGW"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "CRCotN"
- "JttRC"
- "KftGV"
- "SatO"
- "ToFW"
- "GHLoE"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/assassin.webp"
```
^statblock

## Environment

urban