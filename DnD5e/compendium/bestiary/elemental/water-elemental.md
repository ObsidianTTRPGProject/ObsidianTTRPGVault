---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/elemental
- monster/environment/underwater
- monster/environment/swamp
- monster/environment/coastal
aliases: ["Water Elemental"]
statblock: true
"name": "Water Elemental"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "5"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft., swim 90 ft."
"damage_resistances": "acid; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, prone,\
  \ restrained, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elemental can enter a hostile creature's space and stop there. It can\
    \ move through a space as narrow as 1 inch wide without squeezing."
  "name": "Water Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the elemental takes cold damage, it partially freezes; its speed is\
    \ reduced by 20 feet until the end of its next turn."
  "name": "Freeze"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elemental makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature in the elemental's space must make a DC 15 Strength saving\
    \ throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is\
    \ Large or smaller, it is also [grappled](/rules/conditions.md#grappled) (escape\
    \ DC 14). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained)\
    \ and unable to breathe unless it can breathe water. If the saving throw is successful,\
    \ the target is pushed out of the elemental's space.\n\nThe elemental can grapple\
    \ one Large creature or up to two Medium or smaller creatures at one time. At\
    \ the start of each of the elemental's turns, each target [grappled](/rules/conditions.md#grappled)\
    \ by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the\
    \ elemental can pull a creature or object out of it by taking an action to make\
    \ a DC 14 Strength check and succeeding."
  "name": "Whelm (Recharge 4-6)"
"source":
- "MM"
- "PotA"
- "RoT"
- "SKT"
- "GoS"
- "DIP"
- "SLW"
- "BGDIA"
- "IMR"
- "MOT"
- "TCE"
- "CM"
- "JttRC"
name: Water Elemental
image: "[[Water Elemental.png]]"
---

# Water Elemental

```statblock
"name": "Water Elemental"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "5"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft., swim 90 ft."
"damage_resistances": "acid; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, prone,\
  \ restrained, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elemental can enter a hostile creature's space and stop there. It can\
    \ move through a space as narrow as 1 inch wide without squeezing."
  "name": "Water Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the elemental takes cold damage, it partially freezes; its speed is\
    \ reduced by 20 feet until the end of its next turn."
  "name": "Freeze"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elemental makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature in the elemental's space must make a DC 15 Strength saving\
    \ throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is\
    \ Large or smaller, it is also [grappled](/rules/conditions.md#grappled) (escape\
    \ DC 14). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained)\
    \ and unable to breathe unless it can breathe water. If the saving throw is successful,\
    \ the target is pushed out of the elemental's space.\n\nThe elemental can grapple\
    \ one Large creature or up to two Medium or smaller creatures at one time. At\
    \ the start of each of the elemental's turns, each target [grappled](/rules/conditions.md#grappled)\
    \ by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the\
    \ elemental can pull a creature or object out of it by taking an action to make\
    \ a DC 14 Strength check and succeeding."
  "name": "Whelm (Recharge 4-6)"
"source":
- "MM"
- "PotA"
- "RoT"
- "SKT"
- "GoS"
- "DIP"
- "SLW"
- "BGDIA"
- "IMR"
- "MOT"
- "TCE"
- "CM"
- "JttRC"
"image": "[[Water Elemental.png]]"
```
^statblock

*Source: Monster Manual p. 125, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Mythic Odysseys of Theros, Tasha's Cauldron of Everything, Candlekeep Mysteries, Journeys through the Radiant Citadel*

## Description

A water elemental is a cresting wave that rolls across the ground, becoming nearly invisible at it courses through a larger body of water. It engulfs creatures that stand against it, filling their mouths and lungs as easily as it smothers flame.

Elementals are incarnations of the elements that make up the universe: air, earth, fire, and water. Though little more than animated energy on their own planes of existence, they can be called on by spellcasters and powerful beings to take shape and perform tasks.

**Living Elements.** On its home plane, an elemental is a bodiless life force. Its dim consciousness manifests as a physical shape only when focused by the power of magic. A wild spirit of elemental force has no desire except to course through the element of its native plane. Like beasts of the Material Plane, these elemental spirits have no society or culture, and little sense of being.

**Conjured by Magic.** Certain spells and magic items can conjure an elemental, summoning it from the Inner Planes to the Material Plane. Elementals instinctively resent being pulled from their native planes and bound into service. A creature that summons an elemental must assert force of will to control it.

**Bound and Shaped.** Powerful magic can bind an elemental spirit into a material template that defines a specific use and function. Invisible stalkers are air elementals bound to a specific form, in the same way that water elementals can be shaped into water weirds.

**Elemental Nature.** An elemental doesn't require air, food, drink, or sleep.

## Environment

underwater, swamp, coastal