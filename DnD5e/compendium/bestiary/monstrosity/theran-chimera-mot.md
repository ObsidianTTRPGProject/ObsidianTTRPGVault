---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/large
- monster/type/monstrosity
aliases: ["Theran Chimera"]
statblock: true
"name": "Theran Chimera"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"stats":
- !!int "18"
- !!int "13"
- !!int "19"
- !!int "3"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "7"
"skillsaves":
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "understands Draconic but can't speak"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chimera has advantage on a saving throw against any spell that targets\
    \ only the chimera (not an area). If the chimera's saving throw is successful\
    \ and the spell is of 4th level or lower, the spell has no effect on the chimera\
    \ and instead targets the caster."
  "name": "Spell Turning"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chimera makes three attacks: one with its claws, one with its head,\
    \ and one with its tail. When its breath weapon is available, it can use the breath\
    \ in place of its head or its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12\
    \ + 4) piercing damage."
  "name": "Head"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chimera exhales fire in a 15-foot cone. Each creature in that area\
    \ must make a DC 15 Dexterity saving throw, taking 32 (5d12) fire damage on a\
    \ failed save, or half as much damage on a successful one."
  "name": "Breath Weapon (Recharge 5-6)"
"source":
- "MOT"
name: Theran Chimera
image: "[[Theran Chimera.png]]"
---

# Theran Chimera

```statblock
"name": "Theran Chimera"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"stats":
- !!int "18"
- !!int "13"
- !!int "19"
- !!int "3"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "7"
"skillsaves":
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "understands Draconic but can't speak"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chimera has advantage on a saving throw against any spell that targets\
    \ only the chimera (not an area). If the chimera's saving throw is successful\
    \ and the spell is of 4th level or lower, the spell has no effect on the chimera\
    \ and instead targets the caster."
  "name": "Spell Turning"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chimera makes three attacks: one with its claws, one with its head,\
    \ and one with its tail. When its breath weapon is available, it can use the breath\
    \ in place of its head or its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12\
    \ + 4) piercing damage."
  "name": "Head"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chimera exhales fire in a 15-foot cone. Each creature in that area\
    \ must make a DC 15 Dexterity saving throw, taking 32 (5d12) fire damage on a\
    \ failed save, or half as much damage on a successful one."
  "name": "Breath Weapon (Recharge 5-6)"
"source":
- "MOT"
"image": "[[Theran Chimera.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 216*

## Description

The term chimera applies to a wide variety of disparate monsters that combine the features of multiple beasts. While many artistic depictions represent chimeras as an amalgam of lion, ram, and dragon, these beasts appear with nearly endless variations.

The Akroans tell a tale of the first chimera's origin, wherein the god Keranos sought to test Nylea's favorite champion, Renata of Setessa, by creating a beast so deadly that even she would balk at trying to hunt it. When Renata slayed this lion-ram-dragon creation effortlessly, Keranos created another combination of deadlier beasts to challenge her. She slayed that beast, too. Despite countless attempts, Keranos was unable to create a beast that Renata couldn't best.

Chimeras typically roam the deep wilds of the world, constantly seeking a lair that would perfectly suit one of its heads, but then finding it unsatisfying to two-thirds of its being. As a result, a hungry chimera might appear out of a clear sky to pick off prey nearly anywhere. This threat grows even more significant in regions where magic runs rampant or where portals to the realm of Nyx exist, as unrestrained magical energy often causes more chimeras to appear in a region. As such chaotic magic is inherent to a chimera's being, these monsters often manage to shrug off spells cast against them.

**Customizing a Chimera.** The Theran chimera stat block presents one possible chimera configuration. You may customize these statistics to design your own unique chimera. To do so, simply roll once on one or all of the following tables. Results from the Body Composition table adjust the Theran chimera as described, while results on the Breath Weapons, Head Attacks, and Tail Attacks tables replace those respective actions in the stat block. Theran chimeras always have the Claws action. If the results of multiple tables conflict, chose your preferred result.

**Body Composition**

| dice: d4 | Attack |
|----------|--------|
| 1 |  |
| 2 |  |
| 3 |  |
| 4 |  |
^body-composition

**Head Attacks**

| dice: d4 | Attack |
|----------|--------|
| 1 |  |
| 2 |  |
| 3 |  |
| 4 |  |
^head-attacks

**Breath Weapons**

| dice: d4 | Attack |
|----------|--------|
| 1 |  |
| 2 |  |
| 3 |  |
| 4 |  |
^breath-weapons

**Tail Attacks**

| dice: d4 | Attack |
|----------|--------|
| 1 |  |
| 2 |  |
| 3 |  |
| 4 |  |
^tail-attacks