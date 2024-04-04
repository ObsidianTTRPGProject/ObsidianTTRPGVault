---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Young Gold Dragon"]
---
# [Young Gold Dragon](3-Mechanics\CLI\bestiary\dragon/young-gold-dragon.md)
*Source: Monster Manual p. 115. Available in the SRD.*  

```statblock
"name": "Young Gold Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"stats":
- !!int "23"
- !!int "14"
- !!int "21"
- !!int "16"
- !!int "13"
- !!int "20"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "6"
  "Wisdom": !!int "5"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "6"
  "Insight": !!int "5"
  "Perception": !!int "9"
  "Persuasion": !!int "9"
"damage_immunities": "fire"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 19"
"languages": "Common, Draconic"
"cr": "10"
"traits":
- "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 10 ft., one\
    \ target. Hit: dice:2d10 + 6|text(17) (2d10 + 6) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 5 ft., one\
    \ target. Hit: dice:2d6 + 6|text(13) (2d6 + 6) slashing damage."
  "name": "Claw"
- "desc": "The dragon uses one of the following breath weapons.\n\n- Fire Breath.\
    \ The dragon exhales fire in a 30-foot cone. Each creature in that area must make\
    \ a DC 17 Dexterity saving throw, taking dice:10d10|text(55) (10d10) fire\
    \ damage on a failed save, or half as much damage on a successful one.  \n- Weakening\
    \ Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area\
    \ must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based\
    \ attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success.  "
  "name": "Breath Weapons (Recharge 5-6)"
"source":
- "MM"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/young-gold-dragon.webp"
```
^statblock

## Environment

grassland, forest