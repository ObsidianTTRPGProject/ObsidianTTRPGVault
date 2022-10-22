---
cssclass: json5e-monster
tags:
- compendium/src/vrgr
- monster/size/tiny
- monster/type/undead
aliases: ["Death's Head"]
statblock: true
"name": "Death's Head"
"size": "Tiny"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "17"
"hit_dice": "5d4 + 5"
"stats":
- !!int "8"
- !!int "13"
- !!int "12"
- !!int "5"
- !!int "14"
- !!int "3"
"speed": "walk 0 ft., fly 30 ft. (hover)"
"damage_resistances": "necrotic"
"senses": "passive Perception 12"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When created, a death's head takes one of three forms: Aberrant Head, Gnashing\
    \ Head, or Petrifying Head. This form determines the creature's attack."
  "name": "Beheaded Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The death's head doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage plus 7 (2d6) necrotic damage."
  "name": "Gnashing Bite (Gnashing Head Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage plus 5 (1d10) necrotic damage, and the target must succeed\
    \ on a DC 10 Intelligence saving throw or it can't take a reaction until the end\
    \ of its next turn. Moreover, on its next turn, the target must choose whether\
    \ it gets a move, an action, or a bonus action; it gets only one of the three."
  "name": "Mind-Bending Bite (Aberrant Head Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage, and the target must succeed on a DC 10 Constitution saving\
    \ throw or be [restrained](/rules/conditions.md#restrained) as it begins to turn\
    \ to stone. The target must repeat the saving throw at the end of its next turn.\
    \ On a success, the effect ends. On a failure, the target is [petrified](/rules/conditions.md#petrified)\
    \ for 10 minutes."
  "name": "Petrifying Bite (Petrifying Head Only)"
"source":
- "VRGR"
name: Death's Head
image: "[[Death's Head.png]]"
---

# Death's Head

```statblock
"name": "Death's Head"
"size": "Tiny"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "17"
"hit_dice": "5d4 + 5"
"stats":
- !!int "8"
- !!int "13"
- !!int "12"
- !!int "5"
- !!int "14"
- !!int "3"
"speed": "walk 0 ft., fly 30 ft. (hover)"
"damage_resistances": "necrotic"
"senses": "passive Perception 12"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When created, a death's head takes one of three forms: Aberrant Head, Gnashing\
    \ Head, or Petrifying Head. This form determines the creature's attack."
  "name": "Beheaded Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The death's head doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage plus 7 (2d6) necrotic damage."
  "name": "Gnashing Bite (Gnashing Head Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage plus 5 (1d10) necrotic damage, and the target must succeed\
    \ on a DC 10 Intelligence saving throw or it can't take a reaction until the end\
    \ of its next turn. Moreover, on its next turn, the target must choose whether\
    \ it gets a move, an action, or a bonus action; it gets only one of the three."
  "name": "Mind-Bending Bite (Aberrant Head Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage, and the target must succeed on a DC 10 Constitution saving\
    \ throw or be [restrained](/rules/conditions.md#restrained) as it begins to turn\
    \ to stone. The target must repeat the saving throw at the end of its next turn.\
    \ On a success, the effect ends. On a failure, the target is [petrified](/rules/conditions.md#petrified)\
    \ for 10 minutes."
  "name": "Petrifying Bite (Petrifying Head Only)"
"source":
- "VRGR"
"image": "[[Death's Head.png]]"
```
^statblock

*Source: Van Richten's Guide to Ravenloft p. 232*

## Description

A death's head is a disembodied, flying head. The type of creature one of these grotesque undead originated from determines how it terrorizes it prey. A death's head that arises from a person or animal swoops down to rip apart victims with its gnashing teeth. One with the head of monster like a nothic or medusa, though, retains a measure of the power it had in life and can befuddle the minds or petrify the bodies of its victims.

**Death's Head Tree.** In cursed wilds grow death's head trees, awakened trees from which 2d6 death's heads dangle like foul fruit. The heads detach to protect the tree if it's threatened. Should the tree be destroyed, the heads scatter and plant themselves in unholy ground. A new death's head tree emerges from each planted head 1d12 months later.