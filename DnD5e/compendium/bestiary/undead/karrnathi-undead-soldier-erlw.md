---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/undead
aliases: ["Karrnathi Undead Soldier"]
statblock: true
"name": "Karrnathi Undead Soldier"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "5"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "3"
"damage_resistances": "cold, poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier has advantage on an attack roll against a creature if at least\
    \ one of the soldier's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the soldier to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the soldier drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier attacks three times with one of its weapons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier adds 3 to its AC against one melee attack that would hit it.\
    \ To do so, the soldier must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "ERLW"
name: Karrnathi Undead Soldier
image: "[[Karrnathi Undead Soldier.png]]"
---

# Karrnathi Undead Soldier

```statblock
"name": "Karrnathi Undead Soldier"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "5"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "3"
"damage_resistances": "cold, poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier has advantage on an attack roll against a creature if at least\
    \ one of the soldier's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the soldier to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the soldier drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier attacks three times with one of its weapons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier adds 3 to its AC against one melee attack that would hit it.\
    \ To do so, the soldier must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "ERLW"
"image": "[[Karrnathi Undead Soldier.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 295*

## Description

Undead soldiers form the elite core of the army of Karrnath. Fearless and tireless, they are a terrifying sight on the battlefield. With the end of the Last War, most Karrnathi undead have been sealed in vaults below the city of Atur. However, the Karrnathi army keeps numerous undead in its service, while others have been commandeered by the malevolent Order of the Emerald Claw.

**The Odakyr Rites.** The nation of Karrnath has a proud martial heritage, and its soldiers are unmatched in discipline. But in the early years of the Last War, Karrnath was crippled by famine and plague. In desperation, King Kaius I embraced the Blood of Vol, whose priests bolstered the armies of Karrnath with undead.

Initially, those skeletons and zombies required constant control and served as cannon fodder. Over decades, a high priest named Malevanor worked with the necromancers of the Blood of Vol to develop the Odakyr Rites, which grant Karrnathi undead the ability to make tactical decisions and operate without direct guidance.

The Odakyr Rites work only when performed on the remains of a soldier slain in battle, and only in manifest zones tied to the plane of Mabar. The most significant such zones in Karrnath exist in the cities of Atur and Odakyr (now called Fort Bones). The number of Karrnathi undead soldiers steadily increased over the course of the war, with the losses of Karrnath's living troops offset by the recovery and raising of their remains.

Malevanor claimed that Karrnathi undead are animated and granted intelligence by the patriotic spirit of Karrnath. However, many Karrns fear that the undead are vessels for a darker power—and that Lady Illmarrow or someone else will turn the undead against the living.

**Intelligent and Inhuman.** Karrnathi undead bear little resemblance to the people they were in life. These undead are content to stand motionless and silent for days. They show no emotion, and certainly no mercy or compassion. Undead soldiers kill any opposing forces—including civilians among those forces—unless given explicit instructions to the contrary.

A few exceptional Karrnathi undead retain their individuality and the memories of their former lives. Such undead are often found as champions of the Blood of Vol or agents of the Order of the Emerald Claw.

**Undead Nature.** A Karrnathi undead soldier doesn't require air, food, drink, or sleep.