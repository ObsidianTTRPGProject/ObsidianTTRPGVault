---
cssclass: json5e-monster
tags:
- compendium/src/dc
- monster/size/medium
- monster/type/undead
aliases: ["Ebondeath"]
statblock: true
"name": "Ebondeath"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "225"
"hit_dice": "10d8"
"stats":
- !!int "7"
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "17"
"speed": "walk 0 ft., fly 40 ft."
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Any languages it knew in life"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ebondeath can see 60 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ebondeath can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6\
    \ + 3) necrotic damage."
  "name": "Withering Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ebondeath enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each non-undead creature within 60 feet of Ebondeath that can see it must\
    \ succeed on a DC 13 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10\
    \ years. A [frightened](/rules/conditions.md#frightened) target can repeat the\
    \ saving throw at the end of each of its turns, ending the [frightened](/rules/conditions.md#frightened)\
    \ condition on itself on a success. If a target's saving throw is successful or\
    \ the effect ends for it, the target is immune to this Ebondeath's Horrifying\
    \ Visage for the next 24 hours. The aging effect can be reversed with a [greater\
    \ restoration](/compendium/spells/greater-restoration.md) spell, but only within\
    \ 24 hours of it occurring."
  "name": "Horrifying Visage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid that Ebondeath can see within 5 feet of it must succeed on\
    \ a DC 20 Charisma saving throw or be possessed by Ebondeath; Ebondeath then disappears,\
    \ and the target is [incapacitated](/rules/conditions.md#incapacitated) and loses\
    \ control of its body. Ebondeath now controls the body but doesn't deprive the\
    \ target of awareness. Ebondeath can't be targeted by any attack, spell, or other\
    \ effect, except ones that turn undead, and it retains its alignment, Intelligence,\
    \ Wisdom, Charisma, and immunity to being [charmed](/rules/conditions.md#charmed)\
    \ and [frightened](/rules/conditions.md#frightened). It otherwise uses the possessed\
    \ target's statistics, including gaining access to the target's knowledge, class\
    \ features, and proficiencies.\n\nThe possession lasts until the body drops to\
    \ 0 hit points, Ebondeath ends it as a bonus action, or Ebondeath is turned or\
    \ forced out by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, Ebondeath reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to Ebondeath Possession for\
    \ 24 hours after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"source":
- "DC"
name: Ebondeath
image: "[[Ebondeath.png]]"
---

# Ebondeath

```statblock
"name": "Ebondeath"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "225"
"hit_dice": "10d8"
"stats":
- !!int "7"
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "17"
"speed": "walk 0 ft., fly 40 ft."
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Any languages it knew in life"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ebondeath can see 60 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ebondeath can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6\
    \ + 3) necrotic damage."
  "name": "Withering Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ebondeath enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each non-undead creature within 60 feet of Ebondeath that can see it must\
    \ succeed on a DC 13 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10\
    \ years. A [frightened](/rules/conditions.md#frightened) target can repeat the\
    \ saving throw at the end of each of its turns, ending the [frightened](/rules/conditions.md#frightened)\
    \ condition on itself on a success. If a target's saving throw is successful or\
    \ the effect ends for it, the target is immune to this Ebondeath's Horrifying\
    \ Visage for the next 24 hours. The aging effect can be reversed with a [greater\
    \ restoration](/compendium/spells/greater-restoration.md) spell, but only within\
    \ 24 hours of it occurring."
  "name": "Horrifying Visage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid that Ebondeath can see within 5 feet of it must succeed on\
    \ a DC 20 Charisma saving throw or be possessed by Ebondeath; Ebondeath then disappears,\
    \ and the target is [incapacitated](/rules/conditions.md#incapacitated) and loses\
    \ control of its body. Ebondeath now controls the body but doesn't deprive the\
    \ target of awareness. Ebondeath can't be targeted by any attack, spell, or other\
    \ effect, except ones that turn undead, and it retains its alignment, Intelligence,\
    \ Wisdom, Charisma, and immunity to being [charmed](/rules/conditions.md#charmed)\
    \ and [frightened](/rules/conditions.md#frightened). It otherwise uses the possessed\
    \ target's statistics, including gaining access to the target's knowledge, class\
    \ features, and proficiencies.\n\nThe possession lasts until the body drops to\
    \ 0 hit points, Ebondeath ends it as a bonus action, or Ebondeath is turned or\
    \ forced out by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, Ebondeath reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to Ebondeath Possession for\
    \ 24 hours after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"source":
- "DC"
"image": "[[Ebondeath.png]]"
```
^statblock

*Source: Divine Contention*

## Description

Over a thousand years ago, the black dragon Chardansearavitriol, commonly known as Ebondeath, settled in the Mere of Dead Men, making his lair in the ruined citadel of Uthtower. Ebondeath became a dracolich and was worshiped by the Cult of the Dragon until the death god Myrkul's influence waned across Faerûn and the dragon's bones turned to dust.