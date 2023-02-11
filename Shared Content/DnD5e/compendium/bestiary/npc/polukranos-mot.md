---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/gargantuan
- monster/type/monstrosity
aliases: ["Polukranos"]
statblock: true
"name": "Polukranos"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "232"
"hit_dice": "15d20 + 75"
"stats":
- !!int "25"
- !!int "15"
- !!int "21"
- !!int "4"
- !!int "14"
- !!int "10"
"speed": "walk 50 ft., swim 50 ft."
"skillsaves":
  "Perception": !!int "14"
"damage_immunities": "acid"
"senses": "darkvision 120 ft., passive Perception 24"
"languages": ""
"cr": "19"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Polukranos takes piercing or slashing damage, each creature within\
    \ 5 feet of Polukranos takes 10 (3d6) acid damage."
  "name": "Acidic Blood"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Polukranos can hold its breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Polukranos fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Polukranos has five heads. While it has more than one head, Polukranos\
    \ has advantage on saving throws against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ or knocked [unconscious](/rules/conditions.md#unconscious). Whenever Polukranos\
    \ takes 40 or more damage in a single turn, one of its heads dies. If all its\
    \ heads die, Polukranos dies. At the end of its turn, it grows two heads for each\
    \ of its heads that died since its last turn, unless it has taken 40 or more fire\
    \ damage since its last turn. Polukranos regains 20 hit points for each head regrown\
    \ in this way."
  "name": "Multiple Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For each head Polukranos has beyond one, it gets an extra reaction that\
    \ can be used only to make opportunity attacks."
  "name": "Reactive Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Polukranos deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Polukranos sleeps, at least one of its heads is awake."
  "name": "Wakeful"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Polukranos makes as many bite attacks as it has heads."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 18 (2d10\
    \ + 7) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 16 (2d8\
    \ + 7) bludgeoning damage."
  "name": "Stomp"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 18 (2d10\
    \ + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 21 Strength saving throw or be pushed up to 20 feet away from Polukranos."
  "name": "Tail"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Polukranos makes a Wisdom (Perception) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Polukranos makes a tail attack."
  "name": "Tail Swipe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Polukranos moves up to 50 feet in a straight line and can move through\
    \ the space of any creature Huge or smaller. The first time it enters each creature's\
    \ space during this move, it can make a stomp attack against that creature."
  "name": "Trampling Charge (Costs 3 Actions)"
"source":
- "MOT"
name: Polukranos
image: "[[Polukranos.png]]"
---

# Polukranos

```statblock
"name": "Polukranos"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "232"
"hit_dice": "15d20 + 75"
"stats":
- !!int "25"
- !!int "15"
- !!int "21"
- !!int "4"
- !!int "14"
- !!int "10"
"speed": "walk 50 ft., swim 50 ft."
"skillsaves":
  "Perception": !!int "14"
"damage_immunities": "acid"
"senses": "darkvision 120 ft., passive Perception 24"
"languages": ""
"cr": "19"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Polukranos takes piercing or slashing damage, each creature within\
    \ 5 feet of Polukranos takes 10 (3d6) acid damage."
  "name": "Acidic Blood"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Polukranos can hold its breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Polukranos fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Polukranos has five heads. While it has more than one head, Polukranos\
    \ has advantage on saving throws against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ or knocked [unconscious](/rules/conditions.md#unconscious). Whenever Polukranos\
    \ takes 40 or more damage in a single turn, one of its heads dies. If all its\
    \ heads die, Polukranos dies. At the end of its turn, it grows two heads for each\
    \ of its heads that died since its last turn, unless it has taken 40 or more fire\
    \ damage since its last turn. Polukranos regains 20 hit points for each head regrown\
    \ in this way."
  "name": "Multiple Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For each head Polukranos has beyond one, it gets an extra reaction that\
    \ can be used only to make opportunity attacks."
  "name": "Reactive Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Polukranos deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Polukranos sleeps, at least one of its heads is awake."
  "name": "Wakeful"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Polukranos makes as many bite attacks as it has heads."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 18 (2d10\
    \ + 7) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 16 (2d8\
    \ + 7) bludgeoning damage."
  "name": "Stomp"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 18 (2d10\
    \ + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 21 Strength saving throw or be pushed up to 20 feet away from Polukranos."
  "name": "Tail"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Polukranos makes a Wisdom (Perception) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Polukranos makes a tail attack."
  "name": "Tail Swipe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Polukranos moves up to 50 feet in a straight line and can move through\
    \ the space of any creature Huge or smaller. The first time it enters each creature's\
    \ space during this move, it can make a stomp attack against that creature."
  "name": "Trampling Charge (Costs 3 Actions)"
"source":
- "MOT"
"image": "[[Polukranos.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 231*

## Description

Polukranos, called the World Eater, is the mortal manifestation of the eternal ideal of a hydra. In its first incarnation, it fell from Nyx to the mortal world, and so great were its size and strength that the gods Nylea and Heliod combined their power to bind the monster deep within the Nessian Wood. That incarnation was slain, but the eternal ideal remains. A new incarnation of the World Eater is a fearsome omen, as the monster only appears when the pillars of the world tremble and terrible things are afoot in the realm of the gods. Its rampages often presage an age of menace for all civilization.

What krakens are to the sea and dragons are to the sky, hydras are to the lands of Theros. Various hydras dwell at the fringes of civilization, from the bog-dwelling hydras known across the multiverse to massive ironscale hydras that lurk in deep wildernesses. Beyond even these exist serpentine horrors born of the whims of foul gods, like the legendary hydra Polukranos.