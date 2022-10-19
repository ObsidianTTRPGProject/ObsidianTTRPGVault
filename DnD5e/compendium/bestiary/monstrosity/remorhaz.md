---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/monstrosity
- monster/environment/arctic
aliases: ["Remorhaz"]
statblock: true
"name": "Remorhaz"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "195"
"hit_dice": "17d12 + 85"
"stats":
- !!int "24"
- !!int "13"
- !!int "21"
- !!int "4"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft., burrow 20 ft."
"damage_immunities": "cold, fire"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 10"
"languages": ""
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that touches the remorhaz or hits it with a melee attack while\
    \ within 5 feet of it takes 10 (3d6) fire damage."
  "name": "Heated Body"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10\
    \ + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature,\
    \ it is [grappled](/rules/conditions.md#grappled) (escape DC 17). Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained), and the remorhaz\
    \ can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The remorhaz makes one bite attack against a Medium or smaller creature\
    \ it is grappling. If the attack hits, that creature takes the bite's damage and\
    \ is swallowed, and the grapple ends. While swallowed, the creature is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage\
    \ at the start of each of the remorhaz's turns.\n\nIf the remorhaz takes 30 damage\
    \ or more on a single turn from a creature inside it, the remorhaz must succeed\
    \ on a DC 15 Constitution saving throw at the end of that turn or regurgitate\
    \ all swallowed creatures, which fall [prone](/rules/conditions.md#prone) in a\
    \ space within 10 feet oft he remorhaz. If the remorhaz dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "MM"
- "SKT"
- "TftYP"
- "WDMM"
- "BGDIA"
- "IMR"
- "EGW"
- "IDRotF"
- "LoX"
name: Remorhaz
image: "[[Remorhaz.png]]"
---

# Remorhaz

```statblock
"name": "Remorhaz"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "195"
"hit_dice": "17d12 + 85"
"stats":
- !!int "24"
- !!int "13"
- !!int "21"
- !!int "4"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft., burrow 20 ft."
"damage_immunities": "cold, fire"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 10"
"languages": ""
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that touches the remorhaz or hits it with a melee attack while\
    \ within 5 feet of it takes 10 (3d6) fire damage."
  "name": "Heated Body"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10\
    \ + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature,\
    \ it is [grappled](/rules/conditions.md#grappled) (escape DC 17). Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained), and the remorhaz\
    \ can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The remorhaz makes one bite attack against a Medium or smaller creature\
    \ it is grappling. If the attack hits, that creature takes the bite's damage and\
    \ is swallowed, and the grapple ends. While swallowed, the creature is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage\
    \ at the start of each of the remorhaz's turns.\n\nIf the remorhaz takes 30 damage\
    \ or more on a single turn from a creature inside it, the remorhaz must succeed\
    \ on a DC 15 Constitution saving throw at the end of that turn or regurgitate\
    \ all swallowed creatures, which fall [prone](/rules/conditions.md#prone) in a\
    \ space within 10 feet oft he remorhaz. If the remorhaz dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "MM"
- "SKT"
- "TftYP"
- "WDMM"
- "BGDIA"
- "IMR"
- "EGW"
- "IDRotF"
- "LoX"
"image": "[[Remorhaz.png]]"
```
^statblock

*Source: Monster Manual p. 258, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Light of Xaryxis*

## Description

From beneath the snow and ice bursts a remorhaz in a cloud of steam, its body pulsing with internal fire. Wing like fins flare from the back of the creature's head, and its wide mouth brims with jagged teeth.

**Arctic Predators.** Remorhazes live in arctic climes, preying on elk, polar bears, and other creatures sharing their territory. They can't tolerate warm weather, having adapted to the cold by generating a furnace-like heat within their bodies. When hunting, a remorhaz burrows deep below the snow and ice and lies in wait for the faint vibrations created by a creature moving above it. While hidden under the ice and snow, it can lower its body temperature so that it doesn't melt its cover.

**Young Ones.** Frost giant hunters scour the icy wastes for remorhaz nests and eggs. The giants prize young remorhazes, which can be trained from hatching to obey commands and guard the giants' icy citadels. Unlike fully grown specimens, young remorhazes gnaw on their victims instead of swallowing them whole.

## Environment

arctic