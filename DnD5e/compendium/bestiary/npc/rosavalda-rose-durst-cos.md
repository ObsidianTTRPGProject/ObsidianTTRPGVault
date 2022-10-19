---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/small
- monster/type/undead
- monster/environment/underdark
- monster/environment/urban
aliases: ["Rosavalda Rose Durst"]
statblock: true
"name": "Rosavalda Rose Durst"
"size": "Small"
"type": "undead"
"alignment": "Lawful Good"
"ac": !!int "11"
"hp": !!int "35"
"hit_dice": "10d6"
"stats":
- !!int "7"
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "17"
"speed": "walk 0 ft., fly 40 ft. (hover)"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rose can see 60 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rose can move through other creatures and objects as if they were difficult\
    \ terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
  "name": "Incorporeal Movement"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6\
    \ + 3) necrotic damage."
  "name": "Withering Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rose enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid that Rose can see within 5 feet of it must succeed on a DC\
    \ 13 Charisma saving throw or be possessed by Rose; Rose then disappears, and\
    \ the target is [incapacitated](/rules/conditions.md#incapacitated) and loses\
    \ control of its body. Rose now controls the body but doesn't deprive the target\
    \ of awareness. Rose can't be targeted by any attack, spell, or other effect,\
    \ except ones that turn undead, and it retains its alignment, Intelligence, Wisdom,\
    \ Charisma, and immunity to being [charmed](/rules/conditions.md#charmed) and\
    \ [frightened](/rules/conditions.md#frightened). It otherwise uses the possessed\
    \ target's statistics, but doesn't gain access to the target's knowledge, class\
    \ features, or proficiencies.\n\nThe possession lasts until the body drops to\
    \ 0 hit points, Rose ends it as a bonus action, or Rose is turned or forced out\
    \ by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, Rose reappears in an unoccupied space within\
    \ 5 feet of the body. The target is immune to this ghost's Possession for 24 hours\
    \ after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"source":
- "CoS"
name: Rosavalda Rose Durst
image: "[[Rosavalda Rose Durst.png]]"
---

# Rosavalda Rose Durst

```statblock
"name": "Rosavalda Rose Durst"
"size": "Small"
"type": "undead"
"alignment": "Lawful Good"
"ac": !!int "11"
"hp": !!int "35"
"hit_dice": "10d6"
"stats":
- !!int "7"
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "17"
"speed": "walk 0 ft., fly 40 ft. (hover)"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rose can see 60 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rose can move through other creatures and objects as if they were difficult\
    \ terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
  "name": "Incorporeal Movement"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6\
    \ + 3) necrotic damage."
  "name": "Withering Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rose enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid that Rose can see within 5 feet of it must succeed on a DC\
    \ 13 Charisma saving throw or be possessed by Rose; Rose then disappears, and\
    \ the target is [incapacitated](/rules/conditions.md#incapacitated) and loses\
    \ control of its body. Rose now controls the body but doesn't deprive the target\
    \ of awareness. Rose can't be targeted by any attack, spell, or other effect,\
    \ except ones that turn undead, and it retains its alignment, Intelligence, Wisdom,\
    \ Charisma, and immunity to being [charmed](/rules/conditions.md#charmed) and\
    \ [frightened](/rules/conditions.md#frightened). It otherwise uses the possessed\
    \ target's statistics, but doesn't gain access to the target's knowledge, class\
    \ features, or proficiencies.\n\nThe possession lasts until the body drops to\
    \ 0 hit points, Rose ends it as a bonus action, or Rose is turned or forced out\
    \ by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, Rose reappears in an unoccupied space within\
    \ 5 feet of the body. The target is immune to this ghost's Possession for 24 hours\
    \ after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"source":
- "CoS"
"image": "[[Rosavalda Rose Durst.png]]"
```
^statblock

*Source: Curse of Strahd p. 217*

## Environment

underdark, urban