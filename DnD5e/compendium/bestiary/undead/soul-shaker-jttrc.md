---
cssclass: json5e-monster
tags:
- compendium/src/jttrc
- monster/size/large
- monster/type/undead
aliases: ["Soul Shaker"]
statblock: true
"name": "Soul Shaker"
"size": "Large"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "76"
"hit_dice": "8d10 + 32"
"stats":
- !!int "20"
- !!int "8"
- !!int "18"
- !!int "8"
- !!int "11"
- !!int "14"
"speed": "walk 20 ft."
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "telepathy 60 ft."
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soul shaker can cast the [geas](/compendium/spells/geas.md) spell,\
    \ requiring no spell components and using Charisma as the spellcasting ability\
    \ (spell save DC 12)."
  "name": "Enthralled Lure (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the soul shaker is reduced to 0 hit points, it explodes into 7 (1d4\
    \ + 5) crawling claws. After 6 (1d12) days, if at least two of those crawling\
    \ claws are alive, they teleport to the location of the soul shaker's death and\
    \ merge together, whereupon the soul shaker reforms and regains all its hit points."
  "name": "Reconstruction"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soul shaker doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is\
    \ [grappled](/rules/conditions.md#grappled) (escape DC 15). The soul shaker can\
    \ have only one creature [grappled](/rules/conditions.md#grappled) in this way\
    \ at a time."
  "name": "Crushing Grasp"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soul shaker targets a creature it is grappling. If the target is not\
    \ a Construct or an Undead, the target must succeed on a DC 14 Constitution saving\
    \ throw or take 7 (2d6) necrotic damage. The target's hit point maximum is reduced\
    \ by an amount equal to the necrotic damage taken, and the soul shaker regains\
    \ hit points equal to that amount. This reduction lasts until the target finishes\
    \ a long rest. The target dies if its hit point maximum is reduced to 0."
  "name": "Consume Vitality"
"source":
- "JttRC"
name: Soul Shaker
image: "[[Soul Shaker.png]]"
---

# Soul Shaker

```statblock
"name": "Soul Shaker"
"size": "Large"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "76"
"hit_dice": "8d10 + 32"
"stats":
- !!int "20"
- !!int "8"
- !!int "18"
- !!int "8"
- !!int "11"
- !!int "14"
"speed": "walk 20 ft."
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "telepathy 60 ft."
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soul shaker can cast the [geas](/compendium/spells/geas.md) spell,\
    \ requiring no spell components and using Charisma as the spellcasting ability\
    \ (spell save DC 12)."
  "name": "Enthralled Lure (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the soul shaker is reduced to 0 hit points, it explodes into 7 (1d4\
    \ + 5) crawling claws. After 6 (1d12) days, if at least two of those crawling\
    \ claws are alive, they teleport to the location of the soul shaker's death and\
    \ merge together, whereupon the soul shaker reforms and regains all its hit points."
  "name": "Reconstruction"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soul shaker doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is\
    \ [grappled](/rules/conditions.md#grappled) (escape DC 15). The soul shaker can\
    \ have only one creature [grappled](/rules/conditions.md#grappled) in this way\
    \ at a time."
  "name": "Crushing Grasp"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soul shaker targets a creature it is grappling. If the target is not\
    \ a Construct or an Undead, the target must succeed on a DC 14 Constitution saving\
    \ throw or take 7 (2d6) necrotic damage. The target's hit point maximum is reduced\
    \ by an amount equal to the necrotic damage taken, and the soul shaker regains\
    \ hit points equal to that amount. This reduction lasts until the target finishes\
    \ a long rest. The target dies if its hit point maximum is reduced to 0."
  "name": "Consume Vitality"
"source":
- "JttRC"
"image": "[[Soul Shaker.png]]"
```
^statblock

*Source: Journeys through the Radiant Citadel p. 47*

## Description

A grasping mass of Humanoid limbs, a soul shaker is an obsessive claimer of corpses and collector of body parts. These nightmarish creatures arise from ghoulish collections of severed limbs exposed to necromantic energies or when numerous crawling claws form a cooperative relationship.

Most of a soul shaker's victims have their vitality drained and their flesh pulverized by its many arms. However, should a soul shaker encounter someone with an impressionable mind, the creature attempts to charm the individual, using them as a lure to tempt others into its hunting grounds.

If defeated, a soul shaker disperses into several skittering, animate limbs. The terror can only truly be vanquished by destroying these disembodied appendages. If more than one of these pieces escape, the soul shaker reforms over the course of days and begins hunting once more.