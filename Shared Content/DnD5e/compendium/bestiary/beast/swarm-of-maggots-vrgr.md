---
cssclass: json5e-monster
tags:
- compendium/src/vrgr
- monster/size/medium
- monster/type/beast
aliases: ["Swarm of Maggots"]
statblock: true
"name": "Swarm of Maggots"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "3"
- !!int "12"
- !!int "10"
- !!int "1"
- !!int "7"
- !!int "1"
"speed": "walk 20 ft., swim 20 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "charmed, frightened, grappled, paralyzed, petrified, prone,\
  \ restrained, stunned"
"senses": "blindsight 10 ft., passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny maggot. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's\
    \ space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm\
    \ has half of its hit points or fewer. A creature damaged by the swarm must succeed\
    \ on a DC 12 Constitution saving throw or contract a disease.\n\nEach time the\
    \ diseased creature finishes a long rest, roll a d6 to determine the disease's\
    \ effect:\n\n- 1-2. The creature is [blinded](/rules/conditions.md#blinded)\
    \ until it finishes a long rest.\n- 3-4. The creature's hit point maximum\
    \ decreases by 5 (2d4), and the reduction can't be removed until the disease ends.\
    \ The creature dies if its hit point maximum drops to 0.\n- 5-6. The creature\
    \ has disadvantage on ability checks and attack rolls until it finishes its next\
    \ long rest.  \n      \n    The disease lasts until it's removed by magic or until\
    \ the creature rolls the same random effect for the disease two long rests in\
    \ a row."
  "name": "Infestation"
"source":
- "VRGR"
name: Swarm of Maggots
image: "[[Swarm of Maggots.png]]"
---

# Swarm of Maggots

```statblock
"name": "Swarm of Maggots"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "3"
- !!int "12"
- !!int "10"
- !!int "1"
- !!int "7"
- !!int "1"
"speed": "walk 20 ft., swim 20 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "charmed, frightened, grappled, paralyzed, petrified, prone,\
  \ restrained, stunned"
"senses": "blindsight 10 ft., passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny maggot. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's\
    \ space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm\
    \ has half of its hit points or fewer. A creature damaged by the swarm must succeed\
    \ on a DC 12 Constitution saving throw or contract a disease.\n\nEach time the\
    \ diseased creature finishes a long rest, roll a d6 to determine the disease's\
    \ effect:\n\n- 1-2. The creature is [blinded](/rules/conditions.md#blinded)\
    \ until it finishes a long rest.\n- 3-4. The creature's hit point maximum\
    \ decreases by 5 (2d4), and the reduction can't be removed until the disease ends.\
    \ The creature dies if its hit point maximum drops to 0.\n- 5-6. The creature\
    \ has disadvantage on ability checks and attack rolls until it finishes its next\
    \ long rest.  \n      \n    The disease lasts until it's removed by magic or until\
    \ the creature rolls the same random effect for the disease two long rests in\
    \ a row."
  "name": "Infestation"
"source":
- "VRGR"
"image": "[[Swarm of Maggots.png]]"
```
^statblock

*Source: Van Richten's Guide to Ravenloft p. 247*

## Description

Base creatures are among the first to respond to sinister forces at work in a land. As nefarious powers grip an area, populations of maggots, scarabs, and similar scavenging insects explode and become aggressive predators. Roll on the Swarm Behavior table to see how such swarms might manifest.

**Swarm Behavior**

| dice: d4 | Behavior |
|----------|----------|
| 1 | Crawls on walls in a vaguely bipedal shape |
| 2 | Makes skittering noises that sound like whispered chanting |
| 3 | Skeletal visages, giant eyes, or the faces of nearby creatures appear in relief amid its mass |
| 4 | Occupies and animates a corpse or other debris as if it were alive |
^swarm-behavior