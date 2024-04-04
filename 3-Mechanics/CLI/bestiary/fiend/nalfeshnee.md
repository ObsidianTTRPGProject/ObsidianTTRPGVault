---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
aliases: ["Nalfeshnee"]
---
# [Nalfeshnee](3-Mechanics\CLI\bestiary\fiend/nalfeshnee.md)
*Source: Monster Manual p. 62. Available in the SRD.*  

```statblock
"name": "Nalfeshnee"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "184"
"hit_dice": "16d10 + 96"
"stats":
- !!int "21"
- !!int "10"
- !!int "22"
- !!int "19"
- !!int "12"
- !!int "15"
"speed": "20 ft., fly 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
  "Constitution": !!int "11"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 11"
"languages": "Abyssal, telepathy 120 ft."
"cr": "13"
"traits":
- "desc": "The nalfeshnee has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 5 ft., one\
    \ target. Hit: dice:5d10 + 5|text(32) (5d10 + 5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 10 ft., one\
    \ target. Hit: dice:3d6 + 5|text(15) (3d6 + 5) slashing damage."
  "name": "Claw"
- "desc": "The nalfeshnee magically emits scintillating, multicolored light. Each\
    \ creature within 15 feet of the nalfeshnee that can see the light must succeed\
    \ on a DC 15 Wisdom saving throw or be [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the nalfeshnee's\
    \ Horror Nimbus for the next 24 hours."
  "name": "Horror Nimbus (Recharge 5-6)"
- "desc": "The nalfeshnee magically teleports, along with any equipment it is wearing\
    \ or carrying, up to 120 feet to an unoccupied space it can see."
  "name": "Teleport"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDMM"
- "BGDIA"
- "CM"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/nalfeshnee.webp"
```
^statblock