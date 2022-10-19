---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/construct
aliases: ["Terracotta Warrior"]
statblock: true
"name": "Terracotta Warrior"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "14"
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
  "desc": "If a critical hit is scored against the terracotta warrior, it shatters\
    \ and is destroyed."
  "name": "Fragile"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The terracotta warrior is [incapacitated](/rules/conditions.md#incapacitated)\
    \ while in the area of an [antimagic field](/compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the terracotta\
    \ warrior must succeed on a Constitution saving throw against the caster's spell\
    \ save DC or fall [unconscious](/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the terracotta warrior remains motionless, it is indistinguishable\
    \ from a terracotta statue."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The terracotta warrior makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
"source":
- "ToA"
name: Terracotta Warrior
image: "[[Terracotta Warrior.png]]"
---

# Terracotta Warrior

```statblock
"name": "Terracotta Warrior"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "14"
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
  "desc": "If a critical hit is scored against the terracotta warrior, it shatters\
    \ and is destroyed."
  "name": "Fragile"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The terracotta warrior is [incapacitated](/rules/conditions.md#incapacitated)\
    \ while in the area of an [antimagic field](/compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the terracotta\
    \ warrior must succeed on a Constitution saving throw against the caster's spell\
    \ save DC or fall [unconscious](/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the terracotta warrior remains motionless, it is indistinguishable\
    \ from a terracotta statue."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The terracotta warrior makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
"source":
- "ToA"
"image": "[[Terracotta Warrior.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 161*