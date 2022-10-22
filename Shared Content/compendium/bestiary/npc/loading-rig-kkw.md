---
cssclass: json5e-monster
tags:
- compendium/src/kkw
- monster/size/large
- monster/type/construct
aliases: ["Loading Rig"]
statblock: true
"name": "Loading Rig"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "39"
"hit_dice": "6d10 + 6"
"stats":
- !!int "18"
- !!int "11"
- !!int "13"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "walk 25 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rig is [incapacitated](/rules/conditions.md#incapacitated) while in\
    \ the area of an [antimagic field](/compendium/spells/antimagic-field.md). If\
    \ targeted by [dispel magic](/compendium/spells/dispel-magic.md), the rig must\
    \ succeed on a Constitution saving throw against the caster's spell save DC or\
    \ fall [unconscious](/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the rig takes damage, it must succeed on a DC 10 Constitution saving\
    \ throw or be [incapacitated](/rules/conditions.md#incapacitated) with a speed\
    \ of 0 until a creature activates it with a successful DC 10 Intelligence (Arcana)\
    \ check made as an action."
  "name": "Unstable"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The armor makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "KKW"
name: Loading Rig
image: "[[Loading Rig.png]]"
---

# Loading Rig

```statblock
"name": "Loading Rig"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "39"
"hit_dice": "6d10 + 6"
"stats":
- !!int "18"
- !!int "11"
- !!int "13"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "walk 25 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rig is [incapacitated](/rules/conditions.md#incapacitated) while in\
    \ the area of an [antimagic field](/compendium/spells/antimagic-field.md). If\
    \ targeted by [dispel magic](/compendium/spells/dispel-magic.md), the rig must\
    \ succeed on a Constitution saving throw against the caster's spell save DC or\
    \ fall [unconscious](/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the rig takes damage, it must succeed on a DC 10 Constitution saving\
    \ throw or be [incapacitated](/rules/conditions.md#incapacitated) with a speed\
    \ of 0 until a creature activates it with a successful DC 10 Intelligence (Arcana)\
    \ check made as an action."
  "name": "Unstable"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The armor makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "KKW"
"image": "[[Loading Rig.png]]"
```
^statblock

*Source: Krenko's Way p. 170*