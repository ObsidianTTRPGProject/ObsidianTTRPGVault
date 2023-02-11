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
aliases: ["Clockwork Stone Defender"]
statblock: true
"name": "Clockwork Stone Defender"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"stats":
- !!int "19"
- !!int "10"
- !!int "17"
- !!int "3"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands one language of its creator but can't speak"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage, and if the target is Large or smaller, it is knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Slam"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to another creature within 5 feet of it being hit by an attack\
    \ roll, the clockwork gives that creature a +5 bonus to its AC against that attack,\
    \ potentially causing a miss. To use this ability, the clockwork must be able\
    \ to see the creature and the attacker."
  "name": "Intercept Attack"
"source":
- "MPMM"
- "MTF"
name: Clockwork Stone Defender
image: "[[Clockwork Stone Defender.png]]"
---

# Clockwork Stone Defender

```statblock
"name": "Clockwork Stone Defender"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"stats":
- !!int "19"
- !!int "10"
- !!int "17"
- !!int "3"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands one language of its creator but can't speak"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage, and if the target is Large or smaller, it is knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Slam"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to another creature within 5 feet of it being hit by an attack\
    \ roll, the clockwork gives that creature a +5 bonus to its AC against that attack,\
    \ potentially causing a miss. To use this ability, the clockwork must be able\
    \ to see the creature and the attacker."
  "name": "Intercept Attack"
"source":
- "MPMM"
- "MTF"
"image": "[[Clockwork Stone Defender.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 80, Mordenkainen's Tome of Foes p. 126*

## Description

The thick plates of stone riveted onto a stone defender give it substantial protection. Its chief role is as a bodyguard.

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