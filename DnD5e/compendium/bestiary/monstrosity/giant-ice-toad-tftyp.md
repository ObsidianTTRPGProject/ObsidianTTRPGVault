---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/monstrosity
aliases: ["Giant Ice Toad"]
statblock: true
"name": "Giant Ice Toad"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "8"
- !!int "10"
- !!int "6"
"speed": "walk 30 ft."
"damage_immunities": "cold"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Ice Toad"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The toad can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 10 feet of the toad takes 5 (1d10)\
    \ cold damage."
  "name": "Cold Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The toad's long jump is up to 20 feet and its high jump is up to 10 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the toad can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature\
    \ the toad is grappling. Hit: 10 (2d6 + 3) piercing damage, the target is swallowed,\
    \ and the grapple ends. The swallowed target is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the toad, and it takes 10 (3d6) acid damage\
    \ and 11 (2d10) cold damage at the start of each of the toad's turns. The toad\
    \ can have only one target swallowed at a time.\n\nIf the toad dies, a swallowed\
    \ creature is no longer [restrained](/rules/conditions.md#restrained) by it and\
    \ can escape from the corpse using 5 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "TftYP"
name: Giant Ice Toad
image: "[[Giant Ice Toad.png]]"
---

# Giant Ice Toad

```statblock
"name": "Giant Ice Toad"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "8"
- !!int "10"
- !!int "6"
"speed": "walk 30 ft."
"damage_immunities": "cold"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Ice Toad"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The toad can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 10 feet of the toad takes 5 (1d10)\
    \ cold damage."
  "name": "Cold Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The toad's long jump is up to 20 feet and its high jump is up to 10 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the toad can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature\
    \ the toad is grappling. Hit: 10 (2d6 + 3) piercing damage, the target is swallowed,\
    \ and the grapple ends. The swallowed target is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the toad, and it takes 10 (3d6) acid damage\
    \ and 11 (2d10) cold damage at the start of each of the toad's turns. The toad\
    \ can have only one target swallowed at a time.\n\nIf the toad dies, a swallowed\
    \ creature is no longer [restrained](/rules/conditions.md#restrained) by it and\
    \ can escape from the corpse using 5 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "TftYP"
"image": "[[Giant Ice Toad.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 235*

## Description

In a cavern within the glacial rift (Against the Giants), a group of ice toads vigorously guard their territory. Waves of cold radiate from the creature, afflicting those that try to approach it, and anyone unfortunate enough to be swallowed suffers injury from cold as well as from the toad's digestive juices.