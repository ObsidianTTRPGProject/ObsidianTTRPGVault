---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/medium
- monster/type/construct
aliases: ["Living Iron Statue"]
statblock: true
"name": "Living Iron Statue"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "102"
"hit_dice": "12d8 + 48"
"stats":
- !!int "16"
- !!int "14"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 20 ft."
"damage_vulnerabilities": "acid"
"damage_immunities": "lightning, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue makes two attacks: one with its blade and one with its hammer."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Blade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, and the target is knocked [prone](/rules/conditions.md#prone)."
  "name": "Hammer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue can use its action to spin at the waist, targeting creatures\
    \ of its choice within 10 feet of it. Each target must make a DC 13 Dexterity\
    \ saving throw, taking 19 (3d10 + 3) bludgeoning damage on a failed save, or half\
    \ as much damage on a successful one."
  "name": "Whirl (Recharge 5-6)"
"source":
- "GoS"
name: Living Iron Statue
image: "[[Living Iron Statue.png]]"
---

# Living Iron Statue

```statblock
"name": "Living Iron Statue"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "102"
"hit_dice": "12d8 + 48"
"stats":
- !!int "16"
- !!int "14"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 20 ft."
"damage_vulnerabilities": "acid"
"damage_immunities": "lightning, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue makes two attacks: one with its blade and one with its hammer."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Blade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, and the target is knocked [prone](/rules/conditions.md#prone)."
  "name": "Hammer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue can use its action to spin at the waist, targeting creatures\
    \ of its choice within 10 feet of it. Each target must make a DC 13 Dexterity\
    \ saving throw, taking 19 (3d10 + 3) bludgeoning damage on a failed save, or half\
    \ as much damage on a successful one."
  "name": "Whirl (Recharge 5-6)"
"source":
- "GoS"
"image": "[[Living Iron Statue.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 241*

## Description

This squat, solid-looking statue, currently guarding the evil cult's treasure in Isle of the Abbey, is made from pure iron. Its hands are shaped into deadly weapons.