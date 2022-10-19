---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/monstrosity
aliases: ["Thri-kreen Gladiator"]
statblock: true
"name": "Thri-kreen Gladiator"
"size": "Medium"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "142"
"hit_dice": "19d8 + 57"
"stats":
- !!int "18"
- !!int "18"
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "5"
  "Strength": !!int "7"
"skillsaves":
  "Athletics": !!int "7"
  "Perception": !!int "5"
  "Acrobatics": !!int "7"
"condition_immunities": "frightened"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "telepathy 60 ft., Thri-kreen"
"cr": "7"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thri-kreen makes two Gythka attacks and one Chatkcha attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit (with advantage if the thri-kreen is missing\
    \ any hit points), reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
  "name": "Gythka"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +7 to hit (with advantage if the thri-kreen is\
    \ missing any hit points), range 30/120 ft., one target. Hit: 7 (1d6 + 4) slashing\
    \ damage."
  "name": "Chatkcha"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thri-kreen leaps up to 20 feet in any direction, provided its speed\
    \ isn't 0."
  "name": "Leap"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thri-kreen adds 3 to its AC against one melee attack that would hit\
    \ it. To do so, the thri-kreen must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "BAM"
- "LoX"
name: Thri-kreen Gladiator
image: "[[Thri-kreen Gladiator.png]]"
---

# Thri-kreen Gladiator

```statblock
"name": "Thri-kreen Gladiator"
"size": "Medium"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "142"
"hit_dice": "19d8 + 57"
"stats":
- !!int "18"
- !!int "18"
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "5"
  "Strength": !!int "7"
"skillsaves":
  "Athletics": !!int "7"
  "Perception": !!int "5"
  "Acrobatics": !!int "7"
"condition_immunities": "frightened"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "telepathy 60 ft., Thri-kreen"
"cr": "7"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thri-kreen makes two Gythka attacks and one Chatkcha attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit (with advantage if the thri-kreen is missing\
    \ any hit points), reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
  "name": "Gythka"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +7 to hit (with advantage if the thri-kreen is\
    \ missing any hit points), range 30/120 ft., one target. Hit: 7 (1d6 + 4) slashing\
    \ damage."
  "name": "Chatkcha"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thri-kreen leaps up to 20 feet in any direction, provided its speed\
    \ isn't 0."
  "name": "Leap"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thri-kreen adds 3 to its AC against one melee attack that would hit\
    \ it. To do so, the thri-kreen must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "BAM"
- "LoX"
"image": "[[Thri-kreen Gladiator.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 60, Light of Xaryxis*

## Description

Thri-kreen gladiators relish opportunities to test their mettle in combat and often paint their carapaces with the blood of their enemies.