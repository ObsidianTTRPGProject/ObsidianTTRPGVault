---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Iron Golem"]
---
# [Iron Golem](3-Mechanics\CLI\bestiary\construct/iron-golem.md)
*Source: Monster Manual p. 170. Available in the SRD.*  

```statblock
"name": "Iron Golem"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "210"
"hit_dice": "20d10 + 100"
"stats":
- !!int "24"
- !!int "9"
- !!int "20"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "30 ft."
"damage_immunities": "fire; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "16"
"traits":
- "desc": "Whenever the golem is subjected to fire damage, it takes no damage and\
    \ instead regains a number of hit points equal to the fire damage dealt."
  "name": "Fire Absorption"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The golem makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+13 (+13) to hit, reach 5 ft., one\
    \ target. Hit: dice:3d8 + 7|text(20) (3d8 + 7) bludgeoning damage."
  "name": "Slam"
- "desc": "Melee Weapon Attack: dice: d20+13 (+13) to hit, reach 10 ft., one\
    \ target. Hit: dice:3d10 + 7|text(23) (3d10 + 7) slashing damage."
  "name": "Sword"
- "desc": "The golem exhales poisonous gas in a 15-foot cone. Each creature in that\
    \ area must make a DC 19 Constitution saving throw, taking dice:10d8|text(45)\
    \ (10d8) poison damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Poison Breath (Recharge 5-6)"
"source":
- "MM"
- "CoS"
- "SKT"
- "WDMM"
- "GoS"
- "EGW"
- "MOT"
- "IDRotF"
- "SatO"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/construct/token/iron-golem.webp"
```
^statblock