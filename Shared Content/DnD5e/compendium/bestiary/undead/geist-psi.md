---
cssclass: json5e-monster
tags:
- compendium/src/psi
- monster/size/medium
- monster/type/undead
aliases: ["Geist"]
statblock: true
"name": "Geist"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "7"
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "17"
"speed": "walk 0 ft., fly 40 ft."
"damage_resistances": "acid, fire, lightning, thunder, bludgeoning"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any languages it knew in life"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The geist can see 60 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The geist can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Geists are as varied as the humans they were in life. In addition to the\
    \ traits and actions all geists possess, an individual geist might have any of\
    \ the following special characteristics. "
  "name": "Geist Powers"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A living creature possessed by a white-aligned geist gains immunity to\
    \ the [charmed](/rules/conditions.md#charmed) and [frightened](/rules/conditions.md#frightened)\
    \ conditions, and resistance to bludgeoning, piercing, and slashing damage from\
    \ nonmagical attacks. While the creature is possessed, the geist can allow it\
    \ to take control of its body, but the geist can regain control at any time (no\
    \ action required)."
  "name": "Geist Powers: Intangible Virtue"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Black-aligned geists can make themselves terrible to behold, even when\
    \ they are possessing the living. Each non-undead creature within 60 feet of the\
    \ geist that can see it must succeed on a DC 13 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10\
    \ years. A [frightened](/rules/conditions.md#frightened) target can repeat the\
    \ saving throw at the end of each of its turns, ending the [frightened](/rules/conditions.md#frightened)\
    \ condition on itself on a success. If a target's saving throw is successful or\
    \ the effect ends for it, the target is immune to this geist's Horrifying Visage\
    \ for the next 24 hours. The aging effect can be reversed with a [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell, but only within 24 hours of it occurring."
  "name": "Geist Powers: Horrifying Visage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target Hit: 17 (4d6\
    \ + 3) necrotic damage."
  "name": "Withering Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The geist enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature that the geist can see within 5 feet of it must succeed on\
    \ a DC 13 Charisma saving throw or be possessed by the geist; the geist then disappears,\
    \ and the target is [incapacitated](/rules/conditions.md#incapacitated) and loses\
    \ control of its body. The geist now controls the body but doesn't deprive the\
    \ target of awareness. The geist can't be targeted by any attack, spell, or other\
    \ effect, except ones that turn undead, and it retains its alignment, Intelligence,\
    \ Wisdom, Charisma, and immunity to being [charmed](/rules/conditions.md#charmed)\
    \ and [frightened](/rules/conditions.md#frightened). It otherwise uses the possessed\
    \ target's statistics, but doesn't gain access to the target's knowledge, class\
    \ features, or proficiencies. The possession lasts until the body drops to 0 hit\
    \ points, the geist ends it as a bonus action, or the geist is turned or forced\
    \ out by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, the geist reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to this geist's Possession for\
    \ 24 hours after succeeding on the saving throw or after the possession ends.\
    \ The geist can instead target the corpse of a creature, effectively using its\
    \ own life force to animate the corpse as a zombie. The animated corpse uses zombie\
    \ statistics and returns to death if the geist ends the possession."
  "name": "Possession (Recharge 6)"
"source":
- "PSI"
name: Geist
image: "[[Geist.png]]"
---

# Geist

```statblock
"name": "Geist"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "7"
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "17"
"speed": "walk 0 ft., fly 40 ft."
"damage_resistances": "acid, fire, lightning, thunder, bludgeoning"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any languages it knew in life"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The geist can see 60 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The geist can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Geists are as varied as the humans they were in life. In addition to the\
    \ traits and actions all geists possess, an individual geist might have any of\
    \ the following special characteristics. "
  "name": "Geist Powers"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A living creature possessed by a white-aligned geist gains immunity to\
    \ the [charmed](/rules/conditions.md#charmed) and [frightened](/rules/conditions.md#frightened)\
    \ conditions, and resistance to bludgeoning, piercing, and slashing damage from\
    \ nonmagical attacks. While the creature is possessed, the geist can allow it\
    \ to take control of its body, but the geist can regain control at any time (no\
    \ action required)."
  "name": "Geist Powers: Intangible Virtue"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Black-aligned geists can make themselves terrible to behold, even when\
    \ they are possessing the living. Each non-undead creature within 60 feet of the\
    \ geist that can see it must succeed on a DC 13 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10\
    \ years. A [frightened](/rules/conditions.md#frightened) target can repeat the\
    \ saving throw at the end of each of its turns, ending the [frightened](/rules/conditions.md#frightened)\
    \ condition on itself on a success. If a target's saving throw is successful or\
    \ the effect ends for it, the target is immune to this geist's Horrifying Visage\
    \ for the next 24 hours. The aging effect can be reversed with a [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell, but only within 24 hours of it occurring."
  "name": "Geist Powers: Horrifying Visage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target Hit: 17 (4d6\
    \ + 3) necrotic damage."
  "name": "Withering Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The geist enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature that the geist can see within 5 feet of it must succeed on\
    \ a DC 13 Charisma saving throw or be possessed by the geist; the geist then disappears,\
    \ and the target is [incapacitated](/rules/conditions.md#incapacitated) and loses\
    \ control of its body. The geist now controls the body but doesn't deprive the\
    \ target of awareness. The geist can't be targeted by any attack, spell, or other\
    \ effect, except ones that turn undead, and it retains its alignment, Intelligence,\
    \ Wisdom, Charisma, and immunity to being [charmed](/rules/conditions.md#charmed)\
    \ and [frightened](/rules/conditions.md#frightened). It otherwise uses the possessed\
    \ target's statistics, but doesn't gain access to the target's knowledge, class\
    \ features, or proficiencies. The possession lasts until the body drops to 0 hit\
    \ points, the geist ends it as a bonus action, or the geist is turned or forced\
    \ out by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, the geist reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to this geist's Possession for\
    \ 24 hours after succeeding on the saving throw or after the possession ends.\
    \ The geist can instead target the corpse of a creature, effectively using its\
    \ own life force to animate the corpse as a zombie. The animated corpse uses zombie\
    \ statistics and returns to death if the geist ends the possession."
  "name": "Possession (Recharge 6)"
"source":
- "PSI"
"image": "[[Geist.png]]"
```
^statblock

*Source: Plane Shift: Innistrad p. 19*