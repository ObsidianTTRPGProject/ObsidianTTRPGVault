---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/large
- monster/type/construct
aliases: ["Dragonbone Golem"]
statblock: true
"name": "Dragonbone Golem"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "161"
"hit_dice": "19d10 + 57"
"stats":
- !!int "20"
- !!int "10"
- !!int "17"
- !!int "3"
- !!int "11"
- !!int "10"
"speed": "walk 40 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands Draconic and the languages of its creator but can't speak"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the golem's choice that starts its turn within 20 feet\
    \ of the golem must make a DC 15 Wisdom saving throw unless the golem is [incapacitated](/rules/conditions.md#incapacitated).\
    \ On a failed save, the creature is [frightened](/rules/conditions.md#frightened)\
    \ until the start of its next turn. On a successful save, the creature is immune\
    \ to this golem's Fear Aura for the next 24 hours."
  "name": "Fear Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes one Pinion attack and two Rend attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage. If the target is a Medium or smaller creature, it is pinned\
    \ beneath the bony pinion and [restrained](/rules/conditions.md#restrained). The\
    \ golem has two pinions, each of which can restrain one target. If a creature\
    \ is [restrained](/rules/conditions.md#restrained) by one of the pinions, the\
    \ golem can't attack with it. Any creature [restrained](/rules/conditions.md#restrained)\
    \ by a pinion can free itself at the start of its turn with a successful DC 17\
    \ Strength (Athletics) check."
  "name": "Pinion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage plus 5 (1d10) necrotic damage."
  "name": "Rend"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem emits a 60-foot cone of petrifying gas from its mouth. Each creature\
    \ in that area must succeed on a DC 15 Constitution saving throw or take 35 (10d6)\
    \ poison damage and be [restrained](/rules/conditions.md#restrained) as it begins\
    \ to turn to stone. The [restrained](/rules/conditions.md#restrained) target must\
    \ repeat the saving throw at the end of its next turn. On a successful save, the\
    \ effect ends on the target. On a failed save, the target is [petrified](/rules/conditions.md#petrified)."
  "name": "Petrifying Breath (Recharge 5-6)"
"source":
- "FTD"
name: Dragonbone Golem
image: "[[Dragonbone Golem.png]]"
---

# Dragonbone Golem

```statblock
"name": "Dragonbone Golem"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "161"
"hit_dice": "19d10 + 57"
"stats":
- !!int "20"
- !!int "10"
- !!int "17"
- !!int "3"
- !!int "11"
- !!int "10"
"speed": "walk 40 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands Draconic and the languages of its creator but can't speak"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the golem's choice that starts its turn within 20 feet\
    \ of the golem must make a DC 15 Wisdom saving throw unless the golem is [incapacitated](/rules/conditions.md#incapacitated).\
    \ On a failed save, the creature is [frightened](/rules/conditions.md#frightened)\
    \ until the start of its next turn. On a successful save, the creature is immune\
    \ to this golem's Fear Aura for the next 24 hours."
  "name": "Fear Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes one Pinion attack and two Rend attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage. If the target is a Medium or smaller creature, it is pinned\
    \ beneath the bony pinion and [restrained](/rules/conditions.md#restrained). The\
    \ golem has two pinions, each of which can restrain one target. If a creature\
    \ is [restrained](/rules/conditions.md#restrained) by one of the pinions, the\
    \ golem can't attack with it. Any creature [restrained](/rules/conditions.md#restrained)\
    \ by a pinion can free itself at the start of its turn with a successful DC 17\
    \ Strength (Athletics) check."
  "name": "Pinion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage plus 5 (1d10) necrotic damage."
  "name": "Rend"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem emits a 60-foot cone of petrifying gas from its mouth. Each creature\
    \ in that area must succeed on a DC 15 Constitution saving throw or take 35 (10d6)\
    \ poison damage and be [restrained](/rules/conditions.md#restrained) as it begins\
    \ to turn to stone. The [restrained](/rules/conditions.md#restrained) target must\
    \ repeat the saving throw at the end of its next turn. On a successful save, the\
    \ effect ends on the target. On a failed save, the target is [petrified](/rules/conditions.md#petrified)."
  "name": "Petrifying Breath (Recharge 5-6)"
"source":
- "FTD"
"image": "[[Dragonbone Golem.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 183*

## Description

A dragonbone golem is composed of dragon bones linked together with adamantine wire into the form of a dragon, animated by drawing on the bones' inherent magic. Most dragon bone golems are created by powerful dragons from the bones of vanquished rivals. Each bone is etched with intricate glyphs that allow animating power to flow through the golem's form.

Dragonbone golems' resilience and obedience make them excellent lair guardians for their dragon creators, and their supernaturally fearsome presence is a strong deterrent against intrusion.