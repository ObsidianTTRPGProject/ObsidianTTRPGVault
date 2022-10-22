---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/construct
aliases: ["Animated Table"]
statblock: true
"name": "Animated Table"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "39"
"hit_dice": "6d10 + 6"
"stats":
- !!int "18"
- !!int "8"
- !!int "13"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "walk 40 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The table is [incapacitated](/rules/conditions.md#incapacitated) while\
    \ in the area of an [antimagic field](/compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the table\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [unconscious](/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the table remains motionless, it is indistinguishable from a normal\
    \ table."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the table moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 9 (2d8) bludgeoning\
    \ damage. If the target is a creature, it must succeed on a DC 15 Strength saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning\
    \ damage."
  "name": "Ram"
"source":
- "TftYP"
name: Animated Table
image: "[[Animated Table.png]]"
---

# Animated Table

```statblock
"name": "Animated Table"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "39"
"hit_dice": "6d10 + 6"
"stats":
- !!int "18"
- !!int "8"
- !!int "13"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "walk 40 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The table is [incapacitated](/rules/conditions.md#incapacitated) while\
    \ in the area of an [antimagic field](/compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the table\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [unconscious](/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the table remains motionless, it is indistinguishable from a normal\
    \ table."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the table moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 9 (2d8) bludgeoning\
    \ damage. If the target is a creature, it must succeed on a DC 15 Strength saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning\
    \ damage."
  "name": "Ram"
"source":
- "TftYP"
"image": "[[Animated Table.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 230*

## Description

**Arundil's Animated Objects.** A century ago, the dwarf mage Arundil animated a number of objects to defend the Foundry against intruders other than dwarves. Many of these creations remain in place today.

These animated objects never attack dwarves or duergar. In addition, a dwarf (including a duergar) can order an object to cease its attack. If so commanded, the object becomes immobile for 10 minutes, or until the one commanding it leaves the area.

**Constructed Nature.** An animated table doesn't require air, food, drink, or sleep.