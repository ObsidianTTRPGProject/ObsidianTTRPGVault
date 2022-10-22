---
cssclass: json5e-monster
tags:
- compendium/src/rot
- monster/size/medium
- monster/type/construct
aliases: ["Snake Horror"]
statblock: true
"name": "Snake Horror"
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
  "desc": "The snake horror has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The snake horror is immune to three spells chosen by its creator. Typical\
    \ immunities include [fireball](/compendium/spells/fireball.md), [heat metal](/compendium/spells/heat-metal.md),\
    \ and [lightning bolt](/compendium/spells/lightning-bolt.md)."
  "name": "Spell Immunity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The snake horror makes two longsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands,\
    \ and the target must make a DC 12 Constitution saving throw, taking 9 (2d8) poison\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Longsword"
"source":
- "RoT"
name: Snake Horror
image: "[[Snake Horror.png]]"
---

# Snake Horror

```statblock
"name": "Snake Horror"
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
  "desc": "The snake horror has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The snake horror is immune to three spells chosen by its creator. Typical\
    \ immunities include [fireball](/compendium/spells/fireball.md), [heat metal](/compendium/spells/heat-metal.md),\
    \ and [lightning bolt](/compendium/spells/lightning-bolt.md)."
  "name": "Spell Immunity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The snake horror makes two longsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands,\
    \ and the target must make a DC 12 Constitution saving throw, taking 9 (2d8) poison\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Longsword"
"source":
- "RoT"
"image": "[[Snake Horror.png]]"
```
^statblock

*Source: The Rise of Tiamat p. 46*