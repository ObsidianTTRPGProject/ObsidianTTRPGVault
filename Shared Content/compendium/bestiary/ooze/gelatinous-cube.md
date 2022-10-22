---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/ooze
- monster/environment/underdark
aliases: ["Gelatinous Cube"]
statblock: true
"name": "Gelatinous Cube"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "6"
"hp": !!int "84"
"hit_dice": "8d10 + 40"
"stats":
- !!int "14"
- !!int "3"
- !!int "20"
- !!int "1"
- !!int "6"
- !!int "1"
"speed": "walk 15 ft."
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, prone"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cube takes up its entire space. Other creatures can enter the space,\
    \ but a creature that does so is subjected to the cube's Engulf and has disadvantage\
    \ on the saving throw.\n\nCreatures inside the cube can be seen but have total\
    \ cover.\n\nA creature within 5 feet of the cube can take an action to pull a\
    \ creature or object out of the cube. Doing so requires a successful DC 12 Strength\
    \ check, and the creature making the attempt takes 10 (3d6) acid damage.\n\nThe\
    \ cube can hold only one Large creature or up to four Medium or smaller creatures\
    \ inside it at a time."
  "name": "Ooze Cube"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom\
    \ (Perception) check to spot a cube that has neither moved nor attacked. A creature\
    \ that tries to enter the cube's space while unaware of the cube is surprised\
    \ by the cube."
  "name": "Transparent"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6)\
    \ acid damage."
  "name": "Pseudopod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cube moves up to its speed. While doing so, it can enter Large or smaller\
    \ creatures' spaces. Whenever the cube enters a creature's space, the creature\
    \ must make a DC 12 Dexterity saving throw.\n\nOn a successful save, the creature\
    \ can choose to be pushed 5 feet back or to the side of the cube. A creature that\
    \ chooses not to be pushed suffers the consequences of a failed saving throw.\n\
    \nOn a failed save, the cube enters the creature's space, and the creature takes\
    \ 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is\
    \ [restrained](/rules/conditions.md#restrained), and takes 21 (6d6) acid damage\
    \ at the start of each of the cube's turns. When the cube moves, the engulfed\
    \ creature moves with it.\n\nAn engulfed creature can try to escape by taking\
    \ an action to make a DC 12 Strength check. On a success, the creature escapes\
    \ and enters a space of its choice within 5 feet of the cube."
  "name": "Engulf"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "ERLW"
- "IDRotF"
- "WBtW"
name: Gelatinous Cube
image: "[[Gelatinous Cube.png]]"
---

# Gelatinous Cube

```statblock
"name": "Gelatinous Cube"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "6"
"hp": !!int "84"
"hit_dice": "8d10 + 40"
"stats":
- !!int "14"
- !!int "3"
- !!int "20"
- !!int "1"
- !!int "6"
- !!int "1"
"speed": "walk 15 ft."
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, prone"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cube takes up its entire space. Other creatures can enter the space,\
    \ but a creature that does so is subjected to the cube's Engulf and has disadvantage\
    \ on the saving throw.\n\nCreatures inside the cube can be seen but have total\
    \ cover.\n\nA creature within 5 feet of the cube can take an action to pull a\
    \ creature or object out of the cube. Doing so requires a successful DC 12 Strength\
    \ check, and the creature making the attempt takes 10 (3d6) acid damage.\n\nThe\
    \ cube can hold only one Large creature or up to four Medium or smaller creatures\
    \ inside it at a time."
  "name": "Ooze Cube"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom\
    \ (Perception) check to spot a cube that has neither moved nor attacked. A creature\
    \ that tries to enter the cube's space while unaware of the cube is surprised\
    \ by the cube."
  "name": "Transparent"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6)\
    \ acid damage."
  "name": "Pseudopod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cube moves up to its speed. While doing so, it can enter Large or smaller\
    \ creatures' spaces. Whenever the cube enters a creature's space, the creature\
    \ must make a DC 12 Dexterity saving throw.\n\nOn a successful save, the creature\
    \ can choose to be pushed 5 feet back or to the side of the cube. A creature that\
    \ chooses not to be pushed suffers the consequences of a failed saving throw.\n\
    \nOn a failed save, the cube enters the creature's space, and the creature takes\
    \ 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is\
    \ [restrained](/rules/conditions.md#restrained), and takes 21 (6d6) acid damage\
    \ at the start of each of the cube's turns. When the cube moves, the engulfed\
    \ creature moves with it.\n\nAn engulfed creature can try to escape by taking\
    \ an action to make a DC 12 Strength check. On a success, the creature escapes\
    \ and enters a space of its choice within 5 feet of the cube."
  "name": "Engulf"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "ERLW"
- "IDRotF"
- "WBtW"
"image": "[[Gelatinous Cube.png]]"
```
^statblock

*Source: Monster Manual p. 242, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Eberron: Rising from the Last War, Icewind Dale: Rime of the Frostmaiden, The Wild Beyond the Witchlight*

## Description

Gelatinous cubes scour dungeon passages in silent, predictable patterns, leaving perfectly clean paths in their wake. They consume living tissue while leaving bones and other materials undissolved.

A gelatinous cube is all but transparent, making it hard to spot until it attacks. A cube that is well fed can be easier to spot, since its victims' bones, coins, and other objects can be seen suspended inside the creature.

**Oozes.** Oozes thrive in the dark, shunning areas of bright light and extreme temperatures. They flow through the damp underground, feeding on any creature or object that can be dissolved, slinking along the ground, dripping from walls and ceilings, spreading across the edges of underground pools, and squeezing through cracks.

The first warning an adventurer receives of an ooze's presence is often the searing pain of its acidic touch. Oozes are drawn to movement and warmth. Organic material nourishes them, and when prey is scarce they feed on grime, fungus, and offal. Veteran explorers know that an immaculately clean passageway is a likely sign that an ooze lairs nearby.

**Slow Death.**  An ooze kills its prey slowly. Some varieties, such as black puddings and gelatinous cubes, engulf creatures to prevent escape. The only upside of this torturous death is that a victim's comrades can come to the rescue before it is too late.

Since not every ooze digests every type of substance, some have coins, metal gear, bones, and other debris suspended within their quivering bodies. A slain ooze can be a rich source of treasure for its killers.

Whether this is true or not, the Faceless Lord is one of the few beings that can control oozes and imbue them with a modicum of intelligence. Most of the time, oozes have no sense of tactics or self-preservation. They are direct and predictable, attacking and eating without cunning. Under the control of Juiblex, they exhibit glimmers of sentience and malevolent intent.

**Unwitting Servants.**  Although an ooze lacks the intelligence to ally itself with other creatures, others that understand an ooze's need to feed might lure it into a location where it can be of use to them. Clever monsters keep oozes around to defend passageways or consume refuse. Likewise, an ooze can be enticed into a pit trap, where its captors feed it often enough to prevent it from coming after them. Crafty creatures place torches and flaming braziers in strategic areas to dissuade an ooze from leaving a particular tunnel or room.

**Spawn of Juiblex.**  According to the Demonomicon of Iggwilv and other sources, oozes are scattered fragments or offspring of the demon lord Juiblex.

**Ooze Nature.**  An ooze doesn't require sleep.

## Environment

underdark