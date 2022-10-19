---
cssclass: json5e-monster
tags:
- compendium/src/slw
- monster/size/medium
- monster/type/fiend
aliases: ["Tooth-N-Claw"]
statblock: true
"name": "Tooth-N-Claw"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"stats":
- !!int "17"
- !!int "12"
- !!int "14"
- !!int "6"
- !!int "13"
- !!int "6"
"speed": "walk 50 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_immunities": "cold"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "understands Infernal but can't speak it"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tooth-N-Claw has advantage on Wisdom (Perception) checks that rely on hearing\
    \ or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tooth-N-Claw has advantage on an attack roll against a creature if at least\
    \ one of its allies is within 5 feet of the creature and the ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 7 (2d6) cold damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tooth-N-Claw exhales an icy blast in a 15-foot cone. Each creature in that\
    \ area must make a DC 12 Dexterity saving throw, taking 21 (6d6) cold damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Freezing Breath (Recharge 5-6)"
"source":
- "SLW"
name: Tooth-N-Claw
image: "[[Tooth-N-Claw.png]]"
---

# Tooth-N-Claw

```statblock
"name": "Tooth-N-Claw"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"stats":
- !!int "17"
- !!int "12"
- !!int "14"
- !!int "6"
- !!int "13"
- !!int "6"
"speed": "walk 50 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_immunities": "cold"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "understands Infernal but can't speak it"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tooth-N-Claw has advantage on Wisdom (Perception) checks that rely on hearing\
    \ or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tooth-N-Claw has advantage on an attack roll against a creature if at least\
    \ one of its allies is within 5 feet of the creature and the ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 7 (2d6) cold damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tooth-N-Claw exhales an icy blast in a 15-foot cone. Each creature in that\
    \ area must make a DC 12 Dexterity saving throw, taking 21 (6d6) cold damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Freezing Breath (Recharge 5-6)"
"source":
- "SLW"
"image": "[[Tooth-N-Claw.png]]"
```
^statblock

*Source: Storm Lord's Wrath*