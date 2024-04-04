---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Guardian Naga"]
---
# [Guardian Naga](3-Mechanics\CLI\bestiary\monstrosity/guardian-naga.md)
*Source: Monster Manual p. 234. Available in the SRD.*  

```statblock
"name": "Guardian Naga"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Good"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"stats":
- !!int "19"
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "19"
- !!int "18"
"speed": "40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "8"
  "Wisdom": !!int "8"
  "Intelligence": !!int "7"
  "Constitution": !!int "7"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Celestial, Common"
"cr": "10"
"traits":
- "desc": "The naga is an 11th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 16, dice: d20+8 (+8) to hit with spell attacks), and it needs\
    \ only verbal components to cast its spells. It has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [mending](/3-Mechanics/CLI/spells/mending.md),\
    \ [sacred flame](/3-Mechanics/CLI/spells/sacred-flame.md), [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)\n\
    \n1st level (4 slots): [command](/3-Mechanics/CLI/spells/command.md), [cure\
    \ wounds](/3-Mechanics/CLI/spells/cure-wounds.md), [shield of faith](/3-Mechanics/CLI/spells/shield-of-faith.md)\n\
    \n2nd level (3 slots): [calm emotions](/3-Mechanics/CLI/spells/calm-emotions.md),\
    \ [hold person](/3-Mechanics/CLI/spells/hold-person.md)\n\n3rd level (3 slots):\
    \ [bestow curse](/3-Mechanics/CLI/spells/bestow-curse.md), [clairvoyance](/3-Mechanics/CLI/spells/clairvoyance.md)\n\
    \n4th level (3 slots): [banishment](/3-Mechanics/CLI/spells/banishment.md),\
    \ [freedom of movement](/3-Mechanics/CLI/spells/freedom-of-movement.md)\n\n5th\
    \ level (2 slots): [flame strike](/3-Mechanics/CLI/spells/flame-strike.md),\
    \ [geas](/3-Mechanics/CLI/spells/geas.md)\n\n6th level (1 slots): [true seeing](/3-Mechanics/CLI/spells/true-seeing.md)"
  "name": "spells"
- "desc": "If it dies, the naga returns to life in dice: 1d6|avg|noform (1d6)\
    \ days and regains all its hit points. Only a [wish](/3-Mechanics/CLI/spells/wish.md)\
    \ spell can prevent this trait from functioning."
  "name": "Rejuvenation"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+8 (+8) to hit, reach 10 ft., one creature.\
    \ Hit: dice:1d8 + 4|text(8) (1d8 + 4) piercing damage, and the target must\
    \ make a DC 15 Constitution saving throw, taking dice:10d8|text(45) (10d8)\
    \ poison damage on a failed save, or half as much damage on a successful one."
  "name": "Bite"
- "desc": "Ranged Weapon Attack: dice: d20+8 (+8) to hit, range 15/30 ft., one\
    \ creature. Hit: The target must make a DC 15 Constitution saving throw, taking\
    \ dice:10d8|text(45) (10d8) poison damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Spit Poison"
"source":
- "MM"
- "ToA"
- "GoS"
- "AATM"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/guardian-naga.webp"
```
^statblock

## Environment

forest, desert