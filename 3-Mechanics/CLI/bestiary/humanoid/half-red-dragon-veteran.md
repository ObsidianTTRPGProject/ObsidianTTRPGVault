---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Half-Red Dragon Veteran"]
---
# [Half-Red Dragon Veteran](3-Mechanics\CLI\bestiary\humanoid/half-red-dragon-veteran.md)
*Source: Monster Manual p. 180. Available in the SRD.*  

```statblock
"name": "Half-Red Dragon Veteran"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "[plate armor](/3-Mechanics/CLI/items/plate-armor.md)"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "3"
"damage_resistances": "fire"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 12"
"languages": "Common, Draconic"
"cr": "5"
"actions":
- "desc": "The veteran makes two longsword attacks. If it has a shortsword drawn,\
    \ it can also make a shortsword attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 3|text(7) (1d8 + 3) slashing damage, or dice:1d10 + 3|text(8)\
    \ (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 3|text(6) (1d6 + 3) piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: dice: d20+3 (+3) to hit, range 100/400 ft.,\
    \ one target. Hit: dice:1d10 + 1|text(6) (1d10 + 1) piercing damage."
  "name": "Heavy Crossbow"
- "desc": "The veteran exhales fire in a 15-foot cone. Each creature in that area\
    \ must make a DC 15 Dexterity saving throw, taking dice:7d6|text(24) (7d6)\
    \ fire damage on a failed save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"source":
- "MM"
- "RoT"
- "GoS"
- "SLW"
- "IMR"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/half-red-dragon-veteran.webp"
```
^statblock