---
cssclass: json5e-monster
tags:
- compendium/src/vrgr
- monster/size/huge
- monster/type/monstrosity
aliases: ["Unspeakable Horror"]
statblock: true
"name": "Unspeakable Horror"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"stats":
- !!int "21"
- !!int "13"
- !!int "19"
- !!int "3"
- !!int "14"
- !!int "17"
"speed": "walk 40 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "7"
"skillsaves":
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When created, the horror's body composition takes one of four forms: Aberrant\
    \ Armor, Loathsome Limbs, Malleable Mass, or Oozing Organs. This form determines\
    \ certain traits in this stat block."
  "name": "Formed by the Mists"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror can move through any opening at least 1 inch wide without squeezing."
  "name": "Amorphous (Malleable Mass Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that touches the horror or hits it with a melee attack takes\
    \ 5 (1d10) acid damage."
  "name": "Bile Body (Oozing Organs Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror can move through the space of another creature. The first time\
    \ on a turn that the horror enters a creature's space during this move, the creature\
    \ must succeed on a DC 16 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Relentless Stride (Loathsome Limbs Only)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror makes two Limbs attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10\
    \ + 5) bludgeoning damage."
  "name": "Limbs"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror expels necrotic energy in a 30-foot cone. Each creature in that\
    \ area must make a DC 15 Constitution saving throw, taking 45 (7d12) necrotic\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Hex Blast (Recharge 5-6)"
"source":
- "VRGR"
name: Unspeakable Horror
image: "[[Unspeakable Horror.png]]"
---

# Unspeakable Horror

```statblock
"name": "Unspeakable Horror"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"stats":
- !!int "21"
- !!int "13"
- !!int "19"
- !!int "3"
- !!int "14"
- !!int "17"
"speed": "walk 40 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "7"
"skillsaves":
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When created, the horror's body composition takes one of four forms: Aberrant\
    \ Armor, Loathsome Limbs, Malleable Mass, or Oozing Organs. This form determines\
    \ certain traits in this stat block."
  "name": "Formed by the Mists"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror can move through any opening at least 1 inch wide without squeezing."
  "name": "Amorphous (Malleable Mass Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that touches the horror or hits it with a melee attack takes\
    \ 5 (1d10) acid damage."
  "name": "Bile Body (Oozing Organs Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror can move through the space of another creature. The first time\
    \ on a turn that the horror enters a creature's space during this move, the creature\
    \ must succeed on a DC 16 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Relentless Stride (Loathsome Limbs Only)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror makes two Limbs attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10\
    \ + 5) bludgeoning damage."
  "name": "Limbs"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror expels necrotic energy in a 30-foot cone. Each creature in that\
    \ area must make a DC 15 Constitution saving throw, taking 45 (7d12) necrotic\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Hex Blast (Recharge 5-6)"
"source":
- "VRGR"
"image": "[[Unspeakable Horror.png]]"
```
^statblock

*Source: Van Richten's Guide to Ravenloft p. 250*

## Description

Untold, half-formed evils lurk amid the Mists, the yet-to-be-realized imaginings of the Dark Powers and the remnants of ruined domains. While such nightmares typically manifest as nothing more than impressions, whispers, or vaporous visions amid the fog, mysterious eddies in the Mists sometimes gather such evils, forcing them into unique, misshapen bodies untethered from the laws of reason or reality. Such unspeakable horrors might continue to haunt the misty netherworld between the Domains of Dread, or they might slink forth into other realms to slake unnameable hungers.

**Customizing a Horror.** An unspeakable horror has one of four body compositions, determined by rolling on the Body Composition table. You can roll on the Limbs to customize it further, while results from the Hex Blast table replace that action in the stat block. If the results of multiple tables conflict, chose your preferred result.

The results of these tables are meant to be broad, so feel free to describe the details of an unspeakable horror's form and the interplay between its parts however you desire. The more discordant and unexpected a horror's parts, the more unsettling it might be.

**Mist Horrors.** Some who wander into the Land of the Mists seek to stay hidden in the haze. They might even wish to dwell amid the endless fog, finding it preferable to horrors elsewhere. But the Mists drifting between the Domains of Dread are far from safe—or empty.

Mist horrors are bodiless spirits of dread, entities given form by the fears of those they encounter. Mist horrors use the unspeakable horror stat block with the Malleable Mass body option, which makes them appear to be composed of living mist. Further details of a mist horror's appearance are drawn from the fears of those within 100 feet of it. This might cause a mist horror to take on a form that combines multiple fears when it encounters a group, like a wolf with snakes for eyes or a drowned giant that resembles an estranged parent. Mist horrors can't persist for long outside the Mists: after 1d4 rounds outside the Mists, they lose cohesion and collapse back into harmless vapor.

**Body Composition**

| dice: d4 | Body |
|----------|------|
| 1 |  |
| 2 |  |
| 3 |  |
| 4 |  |
^body-composition

**Hex Blast**

| dice: d4 | Hex |
|----------|-----|
| 1 |  |
| 2 |  |
| 3 |  |
| 4 |  |
^hex-blast

**Limbs**

| dice: d4 | Attack |
|----------|--------|
| 1 |  |
| 2 |  |
| 3 |  |
| 4 |  |
^limbs