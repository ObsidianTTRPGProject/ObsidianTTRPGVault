---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/tiny
- monster/type/construct
aliases: ["Flying Dagger"]
statblock: true
"name": "Flying Dagger"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "7"
"hit_dice": "3d4"
"stats":
- !!int "12"
- !!int "15"
- !!int "11"
- !!int "1"
- !!int "5"
- !!int "1"
"speed": "walk 0 ft., fly 50 ft. (hover)"
"saves":
  "Dexterity": !!int "4"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, frightened, paralyzed, petrified,\
  \ poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 7"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dagger is [incapacitated](/rules/conditions.md#incapacitated) while\
    \ in the area of an [antimagic field](/compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the dagger\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [unconscious](/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the dagger remains motionless and isn't flying, it is indistinguishable\
    \ from a normal dagger."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Dagger"
"source":
- "BGDIA"
name: Flying Dagger
image: "[[Flying Dagger.png]]"
---

# Flying Dagger

```statblock
"name": "Flying Dagger"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "7"
"hit_dice": "3d4"
"stats":
- !!int "12"
- !!int "15"
- !!int "11"
- !!int "1"
- !!int "5"
- !!int "1"
"speed": "walk 0 ft., fly 50 ft. (hover)"
"saves":
  "Dexterity": !!int "4"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, frightened, paralyzed, petrified,\
  \ poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 7"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dagger is [incapacitated](/rules/conditions.md#incapacitated) while\
    \ in the area of an [antimagic field](/compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the dagger\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [unconscious](/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the dagger remains motionless and isn't flying, it is indistinguishable\
    \ from a normal dagger."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Dagger"
"source":
- "BGDIA"
"image": "[[Flying Dagger.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 30*