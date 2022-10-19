---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/tiny
- monster/type/ooze
aliases: ["Inkling Mascot"]
statblock: true
"name": "Inkling Mascot"
"size": "Tiny"
"type": "ooze"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "18"
"hit_dice": "4d4 + 8"
"stats":
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "6"
- !!int "7"
- !!int "11"
"speed": "walk 10 ft., fly 30 ft. (hover)"
"skillsaves":
  "Stealth": !!int "5"
"damage_immunities": "psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, prone"
"senses": "blindsight 60 ft., passive Perception 8"
"languages": "understands the languages of its creator but can't speak"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The inkling can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) psychic damage."
  "name": "Blot"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The inkling sprays viscous ink at one creature within 15 feet of itself.\
    \ The target must succeed on a DC 12 Constitution saving throw or be [blinded](/rules/conditions.md#blinded)\
    \ until the end of the inkling's next turn."
  "name": "Ink Spray (1/Day)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the inkling takes the Hide action."
  "name": "Shadow Stealth"
"source":
- "SCC"
name: Inkling Mascot
image: "[[Inkling Mascot.png]]"
---

# Inkling Mascot

```statblock
"name": "Inkling Mascot"
"size": "Tiny"
"type": "ooze"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "18"
"hit_dice": "4d4 + 8"
"stats":
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "6"
- !!int "7"
- !!int "11"
"speed": "walk 10 ft., fly 30 ft. (hover)"
"skillsaves":
  "Stealth": !!int "5"
"damage_immunities": "psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, prone"
"senses": "blindsight 60 ft., passive Perception 8"
"languages": "understands the languages of its creator but can't speak"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The inkling can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) psychic damage."
  "name": "Blot"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The inkling sprays viscous ink at one creature within 15 feet of itself.\
    \ The target must succeed on a DC 12 Constitution saving throw or be [blinded](/rules/conditions.md#blinded)\
    \ until the end of the inkling's next turn."
  "name": "Ink Spray (1/Day)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the inkling takes the Hide action."
  "name": "Shadow Stealth"
"source":
- "SCC"
"image": "[[Inkling Mascot.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 195*

## Description

Squelching slightly as they wriggle through the air, inklings serve as the mascots for Silverquill College. These living blobs of shadowy ink are often summoned by professors who require assistance in their writing workshops—the inklings provide endless ink—or by lonely students hoping for company as they study. However, inklings can just as readily support mages in combat, disrupting opponents' sight.