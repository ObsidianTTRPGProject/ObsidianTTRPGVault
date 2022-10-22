---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/construct
aliases: ["Duodrone"]
statblock: true
"name": "Duodrone"
"size": "Medium"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "11"
- !!int "13"
- !!int "12"
- !!int "6"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft."
"senses": "truesight 120 ft., passive Perception 10"
"languages": "Modron"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The duodrone can't be compelled to act in a manner contrary to its nature\
    \ or its instructions."
  "name": "Axiomatic Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the duodrone dies, its body disintegrates into dust, leaving behind\
    \ its weapons and anything else it was carrying."
  "name": "Disintegration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The duodrone makes two fist attacks or two javelin attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage."
  "name": "Javelin"
"source":
- "MM"
name: Duodrone
image: "[[Duodrone.png]]"
---

# Duodrone

```statblock
"name": "Duodrone"
"size": "Medium"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "11"
- !!int "13"
- !!int "12"
- !!int "6"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft."
"senses": "truesight 120 ft., passive Perception 10"
"languages": "Modron"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The duodrone can't be compelled to act in a manner contrary to its nature\
    \ or its instructions."
  "name": "Axiomatic Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the duodrone dies, its body disintegrates into dust, leaving behind\
    \ its weapons and anything else it was carrying."
  "name": "Disintegration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The duodrone makes two fist attacks or two javelin attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage."
  "name": "Javelin"
"source":
- "MM"
"image": "[[Duodrone.png]]"
```
^statblock

*Source: Monster Manual p. 225*

## Description

The blocky duodrones supervise units of monodrones and can perform up to two tasks at a time.

**Modrons.** Modrons are beings of absolute law that adhere to a hive-like hierarchy. They inhabit the plane of Mechanus and tend its eternally revolving gears, their existence a clockwork routine of perfect order.

**Absolute Law and Order.**  Under the direction of their leader, Primus, modrons increase order in the multiverse in accordance with laws beyond the comprehension of mortal minds. Their own minds are networked in a hierarchal pyramid, in which each modron receives commands from superiors and delegates orders to underlings. A modron carries out commands with total obedience, utmost efficiency, and an absence of morality or ego. Modrons have no sense of self beyond what is necessary to fulfill their duties. They exist as a unified collective, divided by ranks, yet they always refer to themselves collectively. To a modron, there is no "I," but only "we" or "us."

> [!quote] Variant: Rogue Modrons
> 
> A modron unit sometimes becomes defective, either through natural decay or exposure to chaotic forces. Rogue modrons don't act in accordance with Primus's wishes and directives, breaking laws, disobeying orders, and even engaging in violence. Other modrons hunt down such rogues.
> 
> A rogue modron loses the Axiomatic Mind trait and can have any alignment other than lawful neutral. Otherwise, it has the same statistics as a regular modron of its rank.
^variant-rogue-modrons

**Absolute Hierarchy.**  Modrons communicate only with their own rank and the ranks immediately above and below them. Modrons more than one rank away are either too advanced or too simple to understand.

**Cogs of the Great Machine.**  If a modron is destroyed, its remains disintegrate. A replacement from the next lowest rank then transforms in a flash of light, gaining the physical form of its new rank. The promoted modron is replaced by one of its underlings in the same manner, all the way to the lowest levels of the hierarchy. There, a new modron is created by Primus, with a steady stream of monodrones leaving the Great Modron Cathedral on Mechanus as a result.

**The Great Modron March.**  When the gears of Mechanus complete seventeen cycles once every 289 years, Primus sends a vast army of modrons across the Outer Planes, ostensibly on a reconnaissance mission. The march is long and dangerous, and only a small number of modrons returns to Mechanus.