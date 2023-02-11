---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/large
- monster/type/construct
aliases: ["Stone Juggernaut"]
statblock: true
"name": "Stone Juggernaut"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"stats":
- !!int "16"
- !!int "12"
- !!int "15"
- !!int "14"
- !!int "14"
- !!int "16"
"speed": "walk 50 ft. (in one direction chosen at the start of its turn)"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks\
  \ not made with adamantine weapons"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned, prone"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": ""
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The juggernaut can move through the space of a [prone](/rules/conditions.md#prone)\
    \ creature. A creature whose space the juggernaut enters for the first time on\
    \ a turn must make a DC 17 Dexterity saving throw, taking 55 (10d10) bludgeoning\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Devastating Roll"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The juggernaut is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As long as it has 1 hit point left, the juggernaut magically regains all\
    \ its hit points daily at dawn. The juggernaut is destroyed and doesn't regenerate\
    \ if it drops to 0 hit points."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The juggernaut deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 25 (3d12\
    \ + 6) bludgeoning damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 17 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Slam"
"source":
- "ToA"
name: Stone Juggernaut
image: "[[Stone Juggernaut.png]]"
---

# Stone Juggernaut

```statblock
"name": "Stone Juggernaut"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"stats":
- !!int "16"
- !!int "12"
- !!int "15"
- !!int "14"
- !!int "14"
- !!int "16"
"speed": "walk 50 ft. (in one direction chosen at the start of its turn)"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks\
  \ not made with adamantine weapons"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned, prone"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": ""
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The juggernaut can move through the space of a [prone](/rules/conditions.md#prone)\
    \ creature. A creature whose space the juggernaut enters for the first time on\
    \ a turn must make a DC 17 Dexterity saving throw, taking 55 (10d10) bludgeoning\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Devastating Roll"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The juggernaut is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As long as it has 1 hit point left, the juggernaut magically regains all\
    \ its hit points daily at dawn. The juggernaut is destroyed and doesn't regenerate\
    \ if it drops to 0 hit points."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The juggernaut deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 25 (3d12\
    \ + 6) bludgeoning damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 17 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Slam"
"source":
- "ToA"
"image": "[[Stone Juggernaut.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 231*

## Description

A stone juggernaut is a rolling construct imbued with enough awareness to avoid obvious dangers such as open pits and chasms. It trundles across open battlefields or rolls down dungeon corridors, crushing anyone in its path. Every stone juggernaut has a unique shape and appearance. One might resemble an elephant with bejeweled tusks, while another might look like a scowling demon with flaming eyes and obsidian teeth.

A stone juggernaut is fast, but it lacks maneuverability and can move in only one direction on its turn. It poses little danger to creatures it can't crush beneath its rollers. Its best tactic is to slam into a creature, knock it [prone](/rules/conditions.md#prone), and then roll over it.