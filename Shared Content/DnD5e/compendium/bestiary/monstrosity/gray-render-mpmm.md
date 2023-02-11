---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/monstrosity
- monster/environment/forest
- monster/environment/hill
aliases: ["Gray Render"]
statblock: true
"name": "Gray Render"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Neutral"
"ac": !!int "19"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "19"
- !!int "13"
- !!int "20"
- !!int "3"
- !!int "6"
- !!int "8"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "8"
  "Constitution": !!int "9"
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "12"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gray render makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 17 (2d12\
    \ + 4) piercing damage. If the target is Medium or smaller, the target must succeed\
    \ on a DC 16 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage, plus 10 (3d6) bludgeoning damage if the target is [prone](/rules/conditions.md#prone)."
  "name": "Claw"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the gray render takes damage, it makes one Claw attack against a random\
    \ creature within its reach, other than its master."
  "name": "Bloody Rampage"
"source":
- "MPMM"
- "MTF"
name: Gray Render
image: "[[Gray Render.png]]"
---

# Gray Render

```statblock
"name": "Gray Render"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Neutral"
"ac": !!int "19"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "19"
- !!int "13"
- !!int "20"
- !!int "3"
- !!int "6"
- !!int "8"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "8"
  "Constitution": !!int "9"
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "12"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gray render makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 17 (2d12\
    \ + 4) piercing damage. If the target is Medium or smaller, the target must succeed\
    \ on a DC 16 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage, plus 10 (3d6) bludgeoning damage if the target is [prone](/rules/conditions.md#prone)."
  "name": "Claw"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the gray render takes damage, it makes one Claw attack against a random\
    \ creature within its reach, other than its master."
  "name": "Bloody Rampage"
"source":
- "MPMM"
- "MTF"
"image": "[[Gray Render.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 146, Mordenkainen's Tome of Foes p. 209*

## Description

A curious impulse drives the gray render. Despite its hulking form and terrible appetite, it wants most of all to bond with an intelligent creature and, once bonded, to give its life to protect that creature. Great strength and a ferocious nature make gray renders fierce guardians, but they lack a shred of cunning.

Gray renders reproduce by forming nodules on their bodies that, on reaching maturity, break off to begin life as young gray renders. They feel no obligation to their young and have no inclination to gather with others of their kind. Instead, each has an overpowering need to bond with an intelligent creature. When one encounters a suitable master, it sings to that creature—a weird, warbling cry accompanied by scratching at the earth and a show of deference. Once it forms a bond, a gray render serves its master devotedly.

A gray render might be a strong ally, but it's always an unpredictable one. In combat, a gray render fights viciously and never willingly harms its master, but outside battle, it might cause considerable difficulties. It might follow its master despite being told to stay put, destroy its master's house, burrow holes through a ship's hull, attack out of jealousy, or worse.

The Gray Render Quirks table presents possible quirks for gray renders that can be generated randomly or selected as desired.

**Gray Render Quirks**

| dice: d12 | Quirk |
|-----------|-------|
| 1 | Hates horses and other mounts |
| 2 | Roars loudly when its bonded creature is touched by another creature |
| 3 | Likes to snuggle |
| 4 | Uproots and chews on trees |
| 5 | Has terrific and eye-watering flatulence |
| 6 | Brings offerings of meat to its bonded creature |
| 7 | Compulsively digs up the ground |
| 8 | Attacks carts and wagons as if they were terrible monsters |
| 9 | Howls when it rains |
| 10 | Whines piteously in the dark |
| 11 | Buries treasure it finds |
| 12 | Chases birds, leaping into the air to catch them, heedless of the destruction it causes |
^gray-render-quirks

## Environment

forest, hill