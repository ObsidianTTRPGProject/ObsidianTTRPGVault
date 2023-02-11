---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/construct
aliases: ["Halaster Horror"]
statblock: true
"name": "Halaster Horror"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft., fly 30 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't adamantine"
"damage_immunities": "force, necrotic, poison"
"condition_immunities": "blinded, charmed, deafened, frightened, paralyzed, petrified,\
  \ poisoned, stunned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 14"
"languages": "understands the languages of its creator but can't speak"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Halaster horror has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Halaster horror is immune to the [cone of cold](/compendium/spells/cone-of-cold.md),\
    \ [disintegrate](/compendium/spells/disintegrate.md), and [fireball](/compendium/spells/fireball.md)\
    \ spells."
  "name": "Spell Immunity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Halaster horror makes two staff attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) bludgeoning damage."
  "name": "Staff"
"source":
- "WDMM"
name: Halaster Horror
image: "[[Halaster Horror.png]]"
---

# Halaster Horror

```statblock
"name": "Halaster Horror"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft., fly 30 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't adamantine"
"damage_immunities": "force, necrotic, poison"
"condition_immunities": "blinded, charmed, deafened, frightened, paralyzed, petrified,\
  \ poisoned, stunned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 14"
"languages": "understands the languages of its creator but can't speak"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Halaster horror has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Halaster horror is immune to the [cone of cold](/compendium/spells/cone-of-cold.md),\
    \ [disintegrate](/compendium/spells/disintegrate.md), and [fireball](/compendium/spells/fireball.md)\
    \ spells."
  "name": "Spell Immunity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Halaster horror makes two staff attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) bludgeoning damage."
  "name": "Staff"
"source":
- "WDMM"
"image": "[[Halaster Horror.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 129*