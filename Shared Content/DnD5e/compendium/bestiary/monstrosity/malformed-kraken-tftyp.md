---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/huge
- monster/type/monstrosity
aliases: ["Malformed Kraken"]
statblock: true
"name": "Malformed Kraken"
"size": "Huge"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "25"
- !!int "11"
- !!int "20"
- !!int "11"
- !!int "15"
- !!int "15"
"speed": "walk 20 ft., swim 40 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
  "Intelligence": !!int "4"
  "Strength": !!int "11"
  "Constitution": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "lightning"
"condition_immunities": "frightened, paralyzed"
"senses": "truesight 60 ft., passive Perception 12"
"languages": "understands Common but can't speak, telepathy 60 ft."
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken makes three tentacle attacks. One of them can be replaced with\
    \ a bite attack, and any of them can be replaced with Fling."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 16 (2d8\
    \ + 7) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 20 ft., one target. Hit: 14 (2d6\
    \ + 7) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ The kraken has ten tentacles, each of which can grapple one target."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One Medium or smaller object held or creature [grappled](/rules/conditions.md#grappled)\
    \ by the kraken's tentacles is thrown up to 60 feet in a random direction and\
    \ knocked [prone](/rules/conditions.md#prone). If a thrown target strikes a solid\
    \ surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was\
    \ thrown. If the target is thrown at another creature, that creature must succeed\
    \ on a DC 16 Dexterity saving throw or take the same damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken creates three bolts of lightning, each of which can strike a\
    \ target the kraken can see within 150 feet of it. A target must make a DC 16\
    \ Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Lightning Storm"
"source":
- "TftYP"
name: Malformed Kraken
image: "[[Malformed Kraken.png]]"
---

# Malformed Kraken

```statblock
"name": "Malformed Kraken"
"size": "Huge"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "25"
- !!int "11"
- !!int "20"
- !!int "11"
- !!int "15"
- !!int "15"
"speed": "walk 20 ft., swim 40 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
  "Intelligence": !!int "4"
  "Strength": !!int "11"
  "Constitution": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "lightning"
"condition_immunities": "frightened, paralyzed"
"senses": "truesight 60 ft., passive Perception 12"
"languages": "understands Common but can't speak, telepathy 60 ft."
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken makes three tentacle attacks. One of them can be replaced with\
    \ a bite attack, and any of them can be replaced with Fling."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 16 (2d8\
    \ + 7) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 20 ft., one target. Hit: 14 (2d6\
    \ + 7) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ The kraken has ten tentacles, each of which can grapple one target."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One Medium or smaller object held or creature [grappled](/rules/conditions.md#grappled)\
    \ by the kraken's tentacles is thrown up to 60 feet in a random direction and\
    \ knocked [prone](/rules/conditions.md#prone). If a thrown target strikes a solid\
    \ surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was\
    \ thrown. If the target is thrown at another creature, that creature must succeed\
    \ on a DC 16 Dexterity saving throw or take the same damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken creates three bolts of lightning, each of which can strike a\
    \ target the kraken can see within 150 feet of it. A target must make a DC 16\
    \ Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Lightning Storm"
"source":
- "TftYP"
"image": "[[Malformed Kraken.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 239*

## Description

The Doomvault (Dead in Thay) contains a number of denizens that don't have all the traits or abilities of normal creatures of their kind. By far the most powerful of these "inferior" creatures is a malformed kraken that is kept in a saltwater pool and is not as large or as durable as a true kraken