---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/construct
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
aliases: ["Clockwork Bronze Scout"]
statblock: true
"name": "Clockwork Bronze Scout"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "11"
- !!int "3"
- !!int "14"
- !!int "1"
"speed": "walk 30 ft., burrow 30 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "6"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "understands one language of its creator but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork doesn't provoke opportunity attack||opportunity attacks when\
    \ it burrows."
  "name": "Earth Armor"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage plus 3 (1d6) lightning damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature in contact with the ground within 15 feet of the clockwork\
    \ must make a DC 13 Dexterity saving throw, taking 14 (4d6) lightning damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Lightning Flare (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
name: Clockwork Bronze Scout
image: "[[Clockwork Bronze Scout.png]]"
---

# Clockwork Bronze Scout

```statblock
"name": "Clockwork Bronze Scout"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "11"
- !!int "3"
- !!int "14"
- !!int "1"
"speed": "walk 30 ft., burrow 30 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "6"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "understands one language of its creator but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork doesn't provoke opportunity attack||opportunity attacks when\
    \ it burrows."
  "name": "Earth Armor"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage plus 3 (1d6) lightning damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature in contact with the ground within 15 feet of the clockwork\
    \ must make a DC 13 Dexterity saving throw, taking 14 (4d6) lightning damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Lightning Flare (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
"image": "[[Clockwork Bronze Scout.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 79, Mordenkainen's Tome of Foes p. 125*

## Description

A bronze scout seldom emerges from underground. Its telescoping eyestalks observe foes at close range while most of its segmented body remains buried. If detected, it sends electrical shocks through the ground toward pursuers while it retreats.

**Clockworks.** Gnomes' tinkering with magic and mechanical devices has produced many failed Constructs but also has resulted in genuine advances, such as clockworks. The methods used to craft clockworks have been shared between gnome communities over many generations.

**Individual Designs.** Gnome artisans prefer unique clockworks over perfectly functioning ones that copy too much from other creations. A clockwork can be customized by adding one of the following enhancements and one potential malfunction to its stat block. You can select randomly or choose a pair of modifications that fit the temperament of the clockwork's builder.

**Clockwork Enhancements**

| dice: d10 | Enhancement |
|-----------|-------------|
| 1 | **Camouflaged.** The clockwork gains proficiency in [Stealth](/rules/skills.md#Stealth) if it lacks that proficiency. While motionless, it is indistinguishable from a stopped machine. |
| 2 | **Sensors.** The range of the clockwork's [darkvision](/rules/senses.md#darkvision) increases by 60 feet, and it gains proficiency in [Perception](/rules/skills.md#Perception) if it lacks that proficiency. |
| 3 | **Fortified.** The clockwork's AC increases by 2. |
| 4 | **Increased Speed.** The clockwork's speed increases by 10 feet. |
| 5 | **Reinforced Construction.** The clockwork has resistance to force, lightning, and thunder damage. |
| 6 | **Self-Repairing.** If the clockwork starts its turn with fewer than half its hit points but at least 1 hit point, it regains 5 hit points. If it takes lightning damage, this ability doesn't function at the start of its next turn. |
| 7 | **Sturdy Frame.** The clockwork's hit point maximum increases by an amount equal to its number of Hit Dice. |
| 8 | **Suction.** The clockwork gains a climbing speed of 30 feet. |
| 9 | **Vocal Resonator.** The clockwork gains the ability to speak rudimentary Common or Gnomish. |
| 10 | **Water Propulsion.** The clockwork gains a swimming speed of 30 feet. |
^clockwork-enhancements

**Clockwork Malfunctions**

| dice: d8 | Malfunction |
|----------|-------------|
| 1 | **Faulty Sensors.** Roll a d6 at the start of the clock work's turn. If you roll a 1, the clockwork is [blinded](/rules/conditions.md#blinded) until the end of its turn. |
| 2 | **Flawed Targeting.** Roll a d6 at the start of the clock work's turn. If you roll a 1, the clockwork makes attack rolls with disadvantage until the end of its turn. |
| 3 | **Ground Fault.** The clockwork has vulnerability to lightning damage. |
| 4 | **Imprinting Loop.** Roll a d6 at the start of the clock work's turn. If you roll a 1, the clockwork mistakes one creature it can see within 30 feet for its creator. The clockwork won't willingly harm that creature for 1 minute or until that creature attacks or dam ages it. |
| 5 | **Limited Steering.** The clockwork must move in a straight line. It can turn up to 90 degrees before moving and again at the midpoint of its movement. It can rotate freely if it doesn't use any of its speeds on its turn. |
| 6 | **Overactive Sense of Self-Preservation.** If the clock work has half its hit points or fewer at the start of its turn in combat, roll a d6. If you roll a 1, it retreats from combat if possible. It otherwise keeps fighting. |
| 7 | **Overheats.** Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork is [incapacitated](/rules/conditions.md#incapacitated) until the end of its turn. |
| 8 | **Rusty Gears.** The clockwork has disadvantage on initiative rolls, and its speed decreases by 10 feet. |
^clockwork-malfunctions

## Environment

forest, grassland, hill, mountain