---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/undead
aliases: ["Dread Warrior"]
statblock: true
"name": "Dread Warrior"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "37"
"hit_dice": "5d8 + 15"
"stats":
- !!int "15"
- !!int "11"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
"skillsaves":
  "Athletics": !!int "4"
  "Perception": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the dread warrior to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5+the damage taken, unless the damage is radiant or\
    \ from a critical hit. On a success, the dread warrior drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dread warrior makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if wielded with two hands."
  "name": "Battleaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage."
  "name": "Javelin"
"source":
- "TftYP"
name: Dread Warrior
image: "[[Dread Warrior.png]]"
---

# Dread Warrior

```statblock
"name": "Dread Warrior"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "37"
"hit_dice": "5d8 + 15"
"stats":
- !!int "15"
- !!int "11"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
"skillsaves":
  "Athletics": !!int "4"
  "Perception": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the dread warrior to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5+the damage taken, unless the damage is radiant or\
    \ from a critical hit. On a success, the dread warrior drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dread warrior makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if wielded with two hands."
  "name": "Battleaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage."
  "name": "Javelin"
"source":
- "TftYP"
"image": "[[Dread Warrior.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 233*

## Description

The Red Wizards (Dead in Thay) make use of several kinds of undead minions, including the special servants known as dread warriors. After being created by a secret ritual, a dread warrior is further enchanted so that a Red Wizard can employ the creature in the fashion of a spellcaster's familiar. By creating a psychic link with a dread warrior, a Red Wizard can experience the world through the creature's senses and direct the warrior.

**Undead Nature.** A dread warrior doesn't require air, food, drink, or sleep.