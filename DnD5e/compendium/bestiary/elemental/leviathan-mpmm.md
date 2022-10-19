---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/gargantuan
- monster/type/elemental
- monster/environment/coastal
- monster/environment/underwater
aliases: ["Leviathan"]
statblock: true
"name": "Leviathan"
"size": "Gargantuan"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "328"
"hit_dice": "16d20 + 160"
"stats":
- !!int "27"
- !!int "24"
- !!int "30"
- !!int "2"
- !!int "18"
- !!int "17"
"speed": "walk 40 ft., swim 120 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "10"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, prone,\
  \ restrained, stunned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "20"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the leviathan fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the leviathan takes 50 cold damage or more during a single turn, the\
    \ leviathan partially freezes; until the end of its next turn, its speeds are\
    \ reduced to 20 feet, and it makes attack rolls with disadvantage."
  "name": "Partial Freeze"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leviathan deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leviathan can enter a hostile creature's space and stop there. It can\
    \ move through a space as narrow as 1 inch wide without squeezing."
  "name": "Water Form"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leviathan makes one Slam attack and one Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 21 (2d12\
    \ + 8) bludgeoning damage plus 13 (2d12) acid damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 19 (2d10\
    \ + 8) bludgeoning damage plus 10 (3d6) acid damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leviathan magically creates a wave of water that extends from a point\
    \ it can see within 120 feet of itself. The wave is up to 250 feet long, up to\
    \ 250 feet tall, and up to 50 feet wide. Each creature in the wave must make a\
    \ DC 24 Strength saving throw. On a failed save, a creature takes 45 (7d12) bludgeoning\
    \ damage and is knocked [prone](/rules/conditions.md#prone). On a successful save,\
    \ a creature takes half as much damage and isn't knocked [prone](/rules/conditions.md#prone).\
    \ The water spreads out across the ground in all directions, extinguishing unprotected\
    \ flames in its area and within 250 feet of it, and then it vanishes."
  "name": "Tidal Wave (Recharge 6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leviathan moves up to its speed."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leviathan makes one Slam attack."
  "name": "Slam (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
name: Leviathan
image: "[[Leviathan.png]]"
---

# Leviathan

```statblock
"name": "Leviathan"
"size": "Gargantuan"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "328"
"hit_dice": "16d20 + 160"
"stats":
- !!int "27"
- !!int "24"
- !!int "30"
- !!int "2"
- !!int "18"
- !!int "17"
"speed": "walk 40 ft., swim 120 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "10"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, prone,\
  \ restrained, stunned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "20"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the leviathan fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the leviathan takes 50 cold damage or more during a single turn, the\
    \ leviathan partially freezes; until the end of its next turn, its speeds are\
    \ reduced to 20 feet, and it makes attack rolls with disadvantage."
  "name": "Partial Freeze"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leviathan deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leviathan can enter a hostile creature's space and stop there. It can\
    \ move through a space as narrow as 1 inch wide without squeezing."
  "name": "Water Form"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leviathan makes one Slam attack and one Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 21 (2d12\
    \ + 8) bludgeoning damage plus 13 (2d12) acid damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 19 (2d10\
    \ + 8) bludgeoning damage plus 10 (3d6) acid damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leviathan magically creates a wave of water that extends from a point\
    \ it can see within 120 feet of itself. The wave is up to 250 feet long, up to\
    \ 250 feet tall, and up to 50 feet wide. Each creature in the wave must make a\
    \ DC 24 Strength saving throw. On a failed save, a creature takes 45 (7d12) bludgeoning\
    \ damage and is knocked [prone](/rules/conditions.md#prone). On a successful save,\
    \ a creature takes half as much damage and isn't knocked [prone](/rules/conditions.md#prone).\
    \ The water spreads out across the ground in all directions, extinguishing unprotected\
    \ flames in its area and within 250 feet of it, and then it vanishes."
  "name": "Tidal Wave (Recharge 6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leviathan moves up to its speed."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leviathan makes one Slam attack."
  "name": "Slam (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "[[Leviathan.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 171, Mordenkainen's Tome of Foes p. 198*

## Description

A leviathan is an immense creature that acts as a force of nature, dragging ships down to the ocean's depths and washing away coastal settlements. When called forth, a leviathan arises from a large body of water and takes on the form of a gigantic serpent.

Usually found only on the Elemental Plane of Water, a leviathan sometimes swims through a portal to another world, where tritons, sea elves, and other aquatic folk attempt to contain it. Nihilistic cults have also been known to perform arduous rituals to summon a leviathan to a world, with the aim of using the creature to destroy coastal communities. Those cultists often consider it a blessing to drown themselves in the elemental's waters.

## Environment

coastal, underwater