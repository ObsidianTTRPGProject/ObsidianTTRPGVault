---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/23
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/monstrosity/titan
statblock: inline
aliases: ["Kraken"]
---
# [Kraken](3-Mechanics\CLI\bestiary\monstrosity/kraken.md)
*Source: Monster Manual p. 197. Available in the SRD.*  

```statblock
"name": "Kraken"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "472"
"hit_dice": "27d20 + 189"
"stats":
- !!int "30"
- !!int "11"
- !!int "25"
- !!int "22"
- !!int "18"
- !!int "20"
"speed": "20 ft., swim 60 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "11"
  "Intelligence": !!int "13"
  "Strength": !!int "17"
  "Constitution": !!int "14"
"damage_immunities": "lightning; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed)"
"senses": "truesight 120 ft., passive Perception 14"
"languages": "Abyssal, Celestial, Infernal, Primordial, telepathy 120 ft. but can't\
  \ speak"
"cr": "23"
"traits":
- "desc": "The kraken can breathe air and water."
  "name": "Amphibious"
- "desc": "The kraken ignores difficult terrain, and magical effects can't reduce\
    \ its speed or cause it to be [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained).\
    \ It can spend 5 feet of movement to escape from nonmagical restraints or being\
    \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)."
  "name": "Freedom of Movement"
- "desc": "The kraken deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- "desc": "The kraken makes three tentacle attacks, each of which it can replace with\
    \ one use of Fling."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+17 (+17) to hit, reach 5 ft., one\
    \ target. Hit: dice:3d8 + 10|text(23) (3d8 + 10) piercing damage. If the\
    \ target is a Large or smaller creature [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by the kraken, that creature is swallowed, and the grapple ends. While swallowed,\
    \ the creature is [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded) and\
    \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained), it has total\
    \ cover against attacks and other effects outside the kraken, and it takes dice:12d6|text(42)\
    \ (12d6) acid damage at the start of each of the kraken's turns. If the kraken\
    \ takes 50 damage or more on a single turn from a creature inside it, the kraken\
    \ must succeed on a DC 25 Constitution saving throw at the end of that turn or\
    \ regurgitate all swallowed creatures, which fall [prone](/3-Mechanics/CLI/rules/conditions.md#prone)\
    \ in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature\
    \ is no longer [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained) by\
    \ it and can escape from the corpse using 15 feet of movement, exiting [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+17 (+17) to hit, reach 30 ft., one\
    \ target. Hit: dice:3d6 + 10|text(20) (3d6 + 10) bludgeoning damage, and\
    \ the target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) (escape\
    \ DC 18). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained).\
    \ The kraken has ten tentacles, each of which can grapple one target."
  "name": "Tentacle"
- "desc": "One Large or smaller object held or creature [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by the kraken is thrown up to 60 feet in a random direction and knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ If a thrown target strikes a solid surface, the target takes dice:1d6|text(3)\
    \ (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is\
    \ thrown at another creature, that creature must succeed on a DC 18 Dexterity\
    \ saving throw or take the same damage and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Fling"
- "desc": "The kraken magically creates three bolts of lightning, each of which can\
    \ strike a target the kraken can see within 120 feet of it. A target must make\
    \ a DC 23 Dexterity saving throw, taking dice:4d10|text(22) (4d10) lightning\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Lightning Storm"
"legendary_actions":
- "desc": "The kraken makes one tentacle attack or uses its Fling."
  "name": "Tentacle Attack or Fling"
- "desc": "The kraken uses Lightning Storm."
  "name": "Lightning Storm (Costs 2 Actions)"
- "desc": "While underwater, the kraken expels an ink cloud in a 60-foot radius. The\
    \ cloud spreads around corners, and that area is heavily obscured to creatures\
    \ other than the kraken. Each creature other than the kraken that ends its turn\
    \ there must succeed on a DC 23 Constitution saving throw, taking dice:3d10|text(16)\
    \ (3d10) poison damage on a failed save, or half as much damage on a successful\
    \ one. A strong current disperses the cloud, which otherwise disappears at the\
    \ end of the kraken's next turn."
  "name": "Ink Cloud (Costs 3 Actions)"
"source":
- "MM"
- "GoS"
- "SLW"
- "EGW"
- "MOT"
- "PaBTSO"
- "SatO"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/kraken.webp"
```
^statblock

## Environment

underwater