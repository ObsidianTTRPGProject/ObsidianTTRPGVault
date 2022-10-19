---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/medium
- monster/type/monstrosity
aliases: ["Two-Headed Cerberus"]
statblock: true
"name": "Two-Headed Cerberus"
"size": "Medium"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "15"
- !!int "14"
- !!int "14"
- !!int "3"
- !!int "13"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"damage_immunities": "fire, necrotic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, stunned"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "2"
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
  "desc": "The cerberus makes two bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage plus 2 (1d4) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cerberus exhales a 15-foot cone of molten rock. Each creature in the\
    \ cone must make a DC 12 Dexterity saving throw, taking 10 (3d6) fire damage on\
    \ a failed save, or half as much damage on a successful one. On a failed save,\
    \ a creature is also [restrained](/rules/conditions.md#restrained) by the hardening\
    \ rock. A creature can make a DC 12 Strength (Athletics) check as an action, freeing\
    \ itself or a creature within reach from the rock on a success. The rock has AC\
    \ 17 and 10 hit points, and it is immune to fire, poison, and psychic damage."
  "name": "Breath Weapon (Recharge 5-6)"
"source":
- "MOT"
name: Two-Headed Cerberus
image: "[[Two-Headed Cerberus.png]]"
---

# Two-Headed Cerberus

```statblock
"name": "Two-Headed Cerberus"
"size": "Medium"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "15"
- !!int "14"
- !!int "14"
- !!int "3"
- !!int "13"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"damage_immunities": "fire, necrotic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, stunned"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "2"
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
  "desc": "The cerberus makes two bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage plus 2 (1d4) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cerberus exhales a 15-foot cone of molten rock. Each creature in the\
    \ cone must make a DC 12 Dexterity saving throw, taking 10 (3d6) fire damage on\
    \ a failed save, or half as much damage on a successful one. On a failed save,\
    \ a creature is also [restrained](/rules/conditions.md#restrained) by the hardening\
    \ rock. A creature can make a DC 12 Strength (Athletics) check as an action, freeing\
    \ itself or a creature within reach from the rock on a success. The rock has AC\
    \ 17 and 10 hit points, and it is immune to fire, poison, and psychic damage."
  "name": "Breath Weapon (Recharge 5-6)"
"source":
- "MOT"
"image": "[[Two-Headed Cerberus.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 215*

## Description

Thought to be a lesser breed of cerberi that have interbred with mortal wolves, two-headed cerberi typically roam the mortal side of the Tartyx River. There they generally ignore—or only modestly menace—the souls of the dead. Such isn't the case for mortals, though, and they eagerly set upon those who tread too close to the Underworld's borders.

Feared by the living and the dead, cerberi patrol both banks of the Tartyx River. These multiheaded hounds of the Underworld breathe gouts of molten rock that sear and imprison those who trespass upon the borders of life and death. Most cerberi have a boundless hunger for fresh meat, especially the flesh of humanoids. Villains have been known to exploit that hunger by luring cerberi away from the river and setting them loose on mortal settlements.