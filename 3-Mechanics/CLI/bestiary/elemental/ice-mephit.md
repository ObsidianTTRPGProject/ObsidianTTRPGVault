---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Ice Mephit"]
---
# [Ice Mephit](3-Mechanics\CLI\bestiary\elemental/ice-mephit.md)
*Source: Monster Manual p. 215. Available in the SRD.*  

```statblock
"name": "Ice Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "21"
"hit_dice": "6d6"
"stats":
- !!int "7"
- !!int "13"
- !!int "10"
- !!int "9"
- !!int "11"
- !!int "12"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "2"
"damage_vulnerabilities": "bludgeoning, fire"
"damage_immunities": "cold, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Aquan, Auran"
"cr": "1/2"
"traits":
- "desc": "The mephit can innately cast [fog cloud](/3-Mechanics/CLI/spells/fog-cloud.md),\
    \ requiring no material components. Its innate spellcasting ability is Charisma.\n\
    \nAt will: [fog cloud](/3-Mechanics/CLI/spells/fog-cloud.md)"
  "name": "innate"
- "desc": "When the mephit dies, it explodes in a burst of jagged ice. Each creature\
    \ within 5 feet of it must make a DC 10 Dexterity saving throw, taking dice:1d8|text(4)\
    \ (1d8) slashing damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Death Burst"
- "desc": "While the mephit remains motionless, it is indistinguishable from an ordinary\
    \ shard of ice."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3) to hit, reach 5 ft., one creature.\
    \ Hit: dice:1d4 + 1|text(3) (1d4 + 1) slashing damage plus dice:1d4|text(2)\
    \ (1d4) cold damage."
  "name": "Claws"
- "desc": "The mephit exhales a 15-foot cone of cold air. Each creature in that area\
    \ must succeed on a DC 10 Dexterity saving throw, taking dice:2d4|text(5) (2d4)\
    \ cold damage on a failed save, or half as much damage on a successful one."
  "name": "Frost Breath (Recharge 6)"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "EGW"
- "IDRotF"
- "CM"
- "KftGV"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/ice-mephit.webp"
```
^statblock

## Environment

arctic