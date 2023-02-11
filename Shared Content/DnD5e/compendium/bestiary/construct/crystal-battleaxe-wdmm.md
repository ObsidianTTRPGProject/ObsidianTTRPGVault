---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/small
- monster/type/construct
aliases: ["Crystal Battleaxe"]
statblock: true
"name": "Crystal Battleaxe"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "17"
"hit_dice": "5d6"
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
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The battleaxe is [incapacitated](/rules/conditions.md#incapacitated) while\
    \ in the area of an [antimagic field](/compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the battleaxe\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [unconscious](/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the battleaxe remains motionless and isn't flying, it is indistinguishable\
    \ from a normal battleaxe."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage."
  "name": "Battleaxe"
"source":
- "WDMM"
name: Crystal Battleaxe
image: "[[Crystal Battleaxe.png]]"
---

# Crystal Battleaxe

```statblock
"name": "Crystal Battleaxe"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "17"
"hit_dice": "5d6"
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
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The battleaxe is [incapacitated](/rules/conditions.md#incapacitated) while\
    \ in the area of an [antimagic field](/compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the battleaxe\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [unconscious](/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the battleaxe remains motionless and isn't flying, it is indistinguishable\
    \ from a normal battleaxe."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage."
  "name": "Battleaxe"
"source":
- "WDMM"
"image": "[[Crystal Battleaxe.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 89*