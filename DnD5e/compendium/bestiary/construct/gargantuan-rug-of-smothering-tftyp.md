---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/gargantuan
- monster/type/construct
aliases: ["Gargantuan Rug of Smothering"]
statblock: true
"name": "Gargantuan Rug of Smothering"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "63"
"hit_dice": "6d20"
"stats":
- !!int "17"
- !!int "14"
- !!int "10"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "walk 10 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, frightened, paralyzed, petrified,\
  \ poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rug is [incapacitated](/rules/conditions.md#incapacitated) while in\
    \ the area of an [antimagic field](/compendium/spells/antimagic-field.md). If\
    \ targeted by [dispel magic](/compendium/spells/dispel-magic.md), the rug must\
    \ succeed on a Constitution saving throw against the caster's spell save DC or\
    \ fall [unconscious](/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While it is grappling a creature, the rug takes only half the damage dealt\
    \ to it, and the creature [grappled](/rules/conditions.md#grappled) by the rug\
    \ takes the other half."
  "name": "Damage Transfer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the rug remains motionless, it is indistinguishable from a normal\
    \ rug."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature.\
    \ Hit: The creature is [grappled](/rules/conditions.md#grappled) (escape DC 13).\
    \ Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ [blinded](/rules/conditions.md#blinded), and at risk of suffocating, and the\
    \ rug can't smother another target. In addition, at the start of each of the target's\
    \ turns, the target takes 10 (2d6 + 3) bludgeoning damage."
  "name": "Smother"
"source":
- "TftYP"
name: Gargantuan Rug of Smothering
image: "[[Gargantuan Rug of Smothering.png]]"
---

# Gargantuan Rug of Smothering

```statblock
"name": "Gargantuan Rug of Smothering"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "63"
"hit_dice": "6d20"
"stats":
- !!int "17"
- !!int "14"
- !!int "10"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "walk 10 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, frightened, paralyzed, petrified,\
  \ poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rug is [incapacitated](/rules/conditions.md#incapacitated) while in\
    \ the area of an [antimagic field](/compendium/spells/antimagic-field.md). If\
    \ targeted by [dispel magic](/compendium/spells/dispel-magic.md), the rug must\
    \ succeed on a Constitution saving throw against the caster's spell save DC or\
    \ fall [unconscious](/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While it is grappling a creature, the rug takes only half the damage dealt\
    \ to it, and the creature [grappled](/rules/conditions.md#grappled) by the rug\
    \ takes the other half."
  "name": "Damage Transfer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the rug remains motionless, it is indistinguishable from a normal\
    \ rug."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature.\
    \ Hit: The creature is [grappled](/rules/conditions.md#grappled) (escape DC 13).\
    \ Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ [blinded](/rules/conditions.md#blinded), and at risk of suffocating, and the\
    \ rug can't smother another target. In addition, at the start of each of the target's\
    \ turns, the target takes 10 (2d6 + 3) bludgeoning damage."
  "name": "Smother"
"source":
- "TftYP"
"image": "[[Gargantuan Rug of Smothering.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 56*