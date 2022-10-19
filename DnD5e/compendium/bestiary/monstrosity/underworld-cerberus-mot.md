---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/large
- monster/type/monstrosity
aliases: ["Underworld Cerberus"]
statblock: true
"name": "Underworld Cerberus"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "104"
"hit_dice": "11d10 + 44"
"stats":
- !!int "19"
- !!int "12"
- !!int "18"
- !!int "10"
- !!int "16"
- !!int "9"
"speed": "walk 60 ft."
"skillsaves":
  "Athletics": !!int "7"
  "Stealth": !!int "4"
  "Perception": !!int "9"
"damage_immunities": "fire, necrotic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, stunned"
"senses": "truesight 30 ft., passive Perception 19"
"languages": "understands all languages but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the cerberus can move up to its speed toward a hostile\
    \ creature that it can see."
  "name": "Aggressive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cerberus can't be surprised, and it has advantage on saving throws\
    \ against being knocked [unconscious](/rules/conditions.md#unconscious)."
  "name": "Multiheaded"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cerberus has advantage on an attack roll against a creature if at least\
    \ one of the cerberus's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cerberus makes three bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage plus 3 (1d6) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cerberus exhales a 30-foot cone of molten rock. Each creature in the\
    \ cone must make a DC 15 Dexterity saving throw, taking 21 (6d6) fire damage on\
    \ a failed save, or half as much damage on a successful one. On a failed save,\
    \ a creature is also [restrained](/rules/conditions.md#restrained) by the hardening\
    \ rock. A creature can make a DC 15 Strength (Athletics) check as an action, freeing\
    \ itself or a creature within reach from the rock on a success. The rock has AC\
    \ 17 and 20 hit points, and it is immune to fire, poison, and psychic damage."
  "name": "Breath Weapon (Recharge 5-6)"
"source":
- "MOT"
name: Underworld Cerberus
image: "[[Underworld Cerberus.png]]"
---

# Underworld Cerberus

```statblock
"name": "Underworld Cerberus"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "104"
"hit_dice": "11d10 + 44"
"stats":
- !!int "19"
- !!int "12"
- !!int "18"
- !!int "10"
- !!int "16"
- !!int "9"
"speed": "walk 60 ft."
"skillsaves":
  "Athletics": !!int "7"
  "Stealth": !!int "4"
  "Perception": !!int "9"
"damage_immunities": "fire, necrotic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, stunned"
"senses": "truesight 30 ft., passive Perception 19"
"languages": "understands all languages but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the cerberus can move up to its speed toward a hostile\
    \ creature that it can see."
  "name": "Aggressive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cerberus can't be surprised, and it has advantage on saving throws\
    \ against being knocked [unconscious](/rules/conditions.md#unconscious)."
  "name": "Multiheaded"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cerberus has advantage on an attack roll against a creature if at least\
    \ one of the cerberus's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cerberus makes three bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage plus 3 (1d6) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cerberus exhales a 30-foot cone of molten rock. Each creature in the\
    \ cone must make a DC 15 Dexterity saving throw, taking 21 (6d6) fire damage on\
    \ a failed save, or half as much damage on a successful one. On a failed save,\
    \ a creature is also [restrained](/rules/conditions.md#restrained) by the hardening\
    \ rock. A creature can make a DC 15 Strength (Athletics) check as an action, freeing\
    \ itself or a creature within reach from the rock on a success. The rock has AC\
    \ 17 and 20 hit points, and it is immune to fire, poison, and psychic damage."
  "name": "Breath Weapon (Recharge 5-6)"
"source":
- "MOT"
"image": "[[Underworld Cerberus.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 215*

## Description

Three-headed cerberi dwell deep in the Underworld. Terrifying and cunning, they guard portals between the wards of the Underworld, Erebos's greatest treasures, and noteworthy souls who might attempt to escape the realm of the dead. Three-headed cerberi commonly serve demons, but if left to their own devices, they often herd wily souls into labyrinthine Underworld wildernesses, then hunt them for sport.

Feared by the living and the dead, cerberi patrol both banks of the Tartyx River. These multiheaded hounds of the Underworld breathe gouts of molten rock that sear and imprison those who trespass upon the borders of life and death. Most cerberi have a boundless hunger for fresh meat, especially the flesh of humanoids. Villains have been known to exploit that hunger by luring cerberi away from the river and setting them loose on mortal settlements.