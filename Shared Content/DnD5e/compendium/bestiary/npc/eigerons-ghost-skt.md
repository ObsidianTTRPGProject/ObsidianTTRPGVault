---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/huge
- monster/type/undead
- monster/environment/underdark
- monster/environment/urban
aliases: ["Eigeron's Ghost"]
statblock: true
"name": "Eigeron's Ghost"
"size": "Huge"
"type": "undead"
"alignment": "Neutral Good"
"ac": !!int "11"
"hp": !!int "65"
"hit_dice": "10d12"
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
"languages": "Common, Giant"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost can see 60 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If it is destroyed, the ghost re-forms after 24 hours. To truly destroy\
    \ the ghost, characters must lay Eigeron's spirit to rest by killing Blagothkus."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6\
    \ + 3) necrotic damage."
  "name": "Withering Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid or giant that the ghost can see within 5 feet of it must succeed\
    \ on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then\
    \ disappears, and the target is [incapacitated](/rules/conditions.md#incapacitated)\
    \ and loses control of its body. The ghost now controls the body but doesn't deprive\
    \ the target of awareness. The ghost can't be targeted by any attack, spell, or\
    \ other effect, except ones that turn undead, and it retains its alignment, Intelligence,\
    \ Wisdom, Charisma, and immunity to being [charmed](/rules/conditions.md#charmed)\
    \ and [frightened](/rules/conditions.md#frightened). It otherwise uses the possessed\
    \ target's statistics, but doesn't gain access to the target's knowledge, class\
    \ features, or proficiencies.\n\nThe possession lasts until the body drops to\
    \ 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or\
    \ forced out by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, the ghost reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to this ghost's Possession for\
    \ 24 hours after succeeding on the saving throw or after the possession ends.\
    \ If a creature possessed by the ghost is forcibly removed from the Eye of Annam,\
    \ the ghost is expelled from its host and re-forms in the middle of this room."
  "name": "Possession (Recharge 6)"
"source":
- "SKT"
name: Eigeron's Ghost
image: "[[Eigeron's Ghost.png]]"
---

# Eigeron's Ghost

```statblock
"name": "Eigeron's Ghost"
"size": "Huge"
"type": "undead"
"alignment": "Neutral Good"
"ac": !!int "11"
"hp": !!int "65"
"hit_dice": "10d12"
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
"languages": "Common, Giant"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost can see 60 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If it is destroyed, the ghost re-forms after 24 hours. To truly destroy\
    \ the ghost, characters must lay Eigeron's spirit to rest by killing Blagothkus."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6\
    \ + 3) necrotic damage."
  "name": "Withering Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid or giant that the ghost can see within 5 feet of it must succeed\
    \ on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then\
    \ disappears, and the target is [incapacitated](/rules/conditions.md#incapacitated)\
    \ and loses control of its body. The ghost now controls the body but doesn't deprive\
    \ the target of awareness. The ghost can't be targeted by any attack, spell, or\
    \ other effect, except ones that turn undead, and it retains its alignment, Intelligence,\
    \ Wisdom, Charisma, and immunity to being [charmed](/rules/conditions.md#charmed)\
    \ and [frightened](/rules/conditions.md#frightened). It otherwise uses the possessed\
    \ target's statistics, but doesn't gain access to the target's knowledge, class\
    \ features, or proficiencies.\n\nThe possession lasts until the body drops to\
    \ 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or\
    \ forced out by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, the ghost reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to this ghost's Possession for\
    \ 24 hours after succeeding on the saving throw or after the possession ends.\
    \ If a creature possessed by the ghost is forcibly removed from the Eye of Annam,\
    \ the ghost is expelled from its host and re-forms in the middle of this room."
  "name": "Possession (Recharge 6)"
"source":
- "SKT"
"image": "[[Eigeron's Ghost.png]]"
```
^statblock

*Source: Storm King's Thunder p. 129*

## Environment

underdark, urban