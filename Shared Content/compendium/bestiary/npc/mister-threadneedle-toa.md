---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/construct
- monster/environment/grassland
aliases: ["Mister Threadneedle"]
statblock: true
"name": "Mister Threadneedle"
"size": "Medium"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "11"
- !!int "13"
- !!int "11"
- !!int "10"
- !!int "10"
- !!int "13"
"speed": "walk 30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Mister Threadneedle remains motionless, it is indistinguishable from\
    \ an ordinary, inanimate scarecrow."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mister Threadneedle makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4\
    \ + 1) slashing damage. If the target is a creature, it must succeed on a DC 11\
    \ Wisdom saving throw or be [frightened](/rules/conditions.md#frightened) until\
    \ the end of Mister Threadneedle's next turn."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mister Threadneedle targets one creature it can see within 30 feet of it.\
    \ If the target can see Mister Threadneedle, the target must succeed on a DC 11\
    \ Wisdom saving throw or be magically [frightened](/rules/conditions.md#frightened)\
    \ until the end of Mister Threadneedle's next turn. The [frightened](/rules/conditions.md#frightened)\
    \ target is [paralyzed](/rules/conditions.md#paralyzed)."
  "name": "Terrifying Glare"
"source":
- "ToA"
name: Mister Threadneedle
image: "[[Mister Threadneedle.png]]"
---

# Mister Threadneedle

```statblock
"name": "Mister Threadneedle"
"size": "Medium"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "11"
- !!int "13"
- !!int "11"
- !!int "10"
- !!int "10"
- !!int "13"
"speed": "walk 30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Mister Threadneedle remains motionless, it is indistinguishable from\
    \ an ordinary, inanimate scarecrow."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mister Threadneedle makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4\
    \ + 1) slashing damage. If the target is a creature, it must succeed on a DC 11\
    \ Wisdom saving throw or be [frightened](/rules/conditions.md#frightened) until\
    \ the end of Mister Threadneedle's next turn."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mister Threadneedle targets one creature it can see within 30 feet of it.\
    \ If the target can see Mister Threadneedle, the target must succeed on a DC 11\
    \ Wisdom saving throw or be magically [frightened](/rules/conditions.md#frightened)\
    \ until the end of Mister Threadneedle's next turn. The [frightened](/rules/conditions.md#frightened)\
    \ target is [paralyzed](/rules/conditions.md#paralyzed)."
  "name": "Terrifying Glare"
"source":
- "ToA"
"image": "[[Mister Threadneedle.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 183*

## Environment

grassland