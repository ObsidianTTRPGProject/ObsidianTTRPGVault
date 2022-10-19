---
cssclass: json5e-monster
tags:
- compendium/src/mff
- monster/size/small
- monster/type/elemental
aliases: ["Khargra"]
statblock: true
"name": "Khargra"
"size": "Small"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "11"
"hit_dice": "2d6 + 4"
"stats":
- !!int "13"
- !!int "10"
- !!int "14"
- !!int "5"
- !!int "11"
- !!int "6"
"speed": "walk 5 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "2"
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Terran"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The khargra can scent the location of ferrous metal within 30 feet of it."
  "name": "Iron Scent"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage, and if the target is wearing metal armor or carrying a\
    \ metal shield, the khargra attaches to that armor or shield. While attached,\
    \ the khargra doesn't attack. Instead, at the start of each of the khargra's turns,\
    \ roll a d20. On a 10 or higher, the armor or shield takes a permanent and cumulative\
    \ -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that\
    \ drops to a +0 bonus is destroyed.\n\nThe khargra can detach itself by spending\
    \ 5 feet of its movement. A creature, including the target, can use its action\
    \ to detach the khargra."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Until the end of its next turn, the khargra can fly through nonmagical\
    \ earth and stone. While doing so, it doesn't disturb the material it moves through.\
    \ It can end its movement within earth or stone, but if it remains within earth\
    \ or stone when this ability ends, it takes 14 (4d6) force damage and immediately\
    \ moves to the nearest unoccupied space."
  "name": "Earth Phasing"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the khargra can see within 5 feet of it hits it with a\
    \ metal weapon, the khargra can make a bite attack against that creature."
  "name": "Opportunistic Hunger"
"source":
- "MFF"
name: Khargra
image: "[[Khargra.png]]"
---

# Khargra

```statblock
"name": "Khargra"
"size": "Small"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "11"
"hit_dice": "2d6 + 4"
"stats":
- !!int "13"
- !!int "10"
- !!int "14"
- !!int "5"
- !!int "11"
- !!int "6"
"speed": "walk 5 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "2"
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Terran"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The khargra can scent the location of ferrous metal within 30 feet of it."
  "name": "Iron Scent"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage, and if the target is wearing metal armor or carrying a\
    \ metal shield, the khargra attaches to that armor or shield. While attached,\
    \ the khargra doesn't attack. Instead, at the start of each of the khargra's turns,\
    \ roll a d20. On a 10 or higher, the armor or shield takes a permanent and cumulative\
    \ -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that\
    \ drops to a +0 bonus is destroyed.\n\nThe khargra can detach itself by spending\
    \ 5 feet of its movement. A creature, including the target, can use its action\
    \ to detach the khargra."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Until the end of its next turn, the khargra can fly through nonmagical\
    \ earth and stone. While doing so, it doesn't disturb the material it moves through.\
    \ It can end its movement within earth or stone, but if it remains within earth\
    \ or stone when this ability ends, it takes 14 (4d6) force damage and immediately\
    \ moves to the nearest unoccupied space."
  "name": "Earth Phasing"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the khargra can see within 5 feet of it hits it with a\
    \ metal weapon, the khargra can make a bite attack against that creature."
  "name": "Opportunistic Hunger"
"source":
- "MFF"
"image": "[[Khargra.png]]"
```
^statblock

*Source: Mordenkainen's Fiendish Folio p. 12*

## Description

The bizarre khargra is a flying creature from the Elemental Plane of Earth that devours any metals it encounters. Though normally content to eat raw veins of ore, this creature considers refined and crafted metals to be particularly delectable.

**Vexing Scavengers.** Khargras are native to the Elemental Plane of Earth, where they are considered annoying pests. They arrive in the Material Plane by accident, usually by following an earth elemental or other creature that has been summoned into the world.

Khargras can eat and digest most metals, though they prefer iron, copper, and tin above others. They find gold bland and mushy, akin to a flavorless gruel. Though khargras digest metal with ease, organic matter and gems are repugnant to them. If a khargra eats such morsels for whatever reason, they remain lodged in its gullet for a few days of indigestion before the offending material is coughed up.

**Reluctant Predators.** Khargras find living flesh disgusting, and they attack creatures only when driven by hunger and a lack of safer options. After securing a meal of whatever tasty, refined metal their victim carries, they quickly flee—and will flee before that rather than risk death.

**Stealthy Couriers.** A number of clans among the dwarves, duergar, and azers have trained khargras as couriers. Making use of these creatures' odd digestive systems, their masters sprinkle iron dust on a scroll or other organic item that bears a message. The khargra devours the missive, digesting the dust but leaving the message lodged in its digestive tract. Trained over long years and with plentiful treats to learn the direction to different underground strongholds and outposts, the khargra carries its burden to its destination, then coughs up the message on command.