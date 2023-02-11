---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/huge
- monster/type/undead
aliases: ["Cloud Giant Ghost"]
statblock: true
"name": "Cloud Giant Ghost"
"size": "Huge"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "104"
"hit_dice": "16d12"
"stats":
- !!int "27"
- !!int "11"
- !!int "10"
- !!int "12"
- !!int "16"
- !!int "17"
"speed": "walk 0 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "7"
"skillsaves":
  "Perception": !!int "7"
"damage_resistances": "cold"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Common, Giant"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost casts one of the following spells, using Charisma as the spellcasting\
    \ ability and requiring no material components:\n\nAt will: [fog cloud](/compendium/spells/fog-cloud.md)\n\
    \n1/day: [control weather](/compendium/spells/control-weather.md)\n\n3/day:\
    \ [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost can see 120 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost regains 10 hit points at the start of its turn. If the ghost\
    \ takes radiant damage or damage from a magic weapon, this trait doesn't function\
    \ at the start of the ghost's next turn. The ghost dies only if it starts its\
    \ turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8\
    \ + 8) force damage."
  "name": "Spectral Weapon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost emits a dreadful howl that summons a cold, biting wind. This\
    \ wind engulfs up to three creatures of the ghost's choice that it can see within\
    \ 60 feet of it. Each target is pulled up to 20 feet toward the ghost and must\
    \ make a DC 15 Constitution saving throw, taking 16 (3d10) cold damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Wind Howl (Recharge 6)"
"source":
- "CM"
name: Cloud Giant Ghost
image: "[[Cloud Giant Ghost.png]]"
---

# Cloud Giant Ghost

```statblock
"name": "Cloud Giant Ghost"
"size": "Huge"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "104"
"hit_dice": "16d12"
"stats":
- !!int "27"
- !!int "11"
- !!int "10"
- !!int "12"
- !!int "16"
- !!int "17"
"speed": "walk 0 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "7"
"skillsaves":
  "Perception": !!int "7"
"damage_resistances": "cold"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Common, Giant"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost casts one of the following spells, using Charisma as the spellcasting\
    \ ability and requiring no material components:\n\nAt will: [fog cloud](/compendium/spells/fog-cloud.md)\n\
    \n1/day: [control weather](/compendium/spells/control-weather.md)\n\n3/day:\
    \ [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost can see 120 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost regains 10 hit points at the start of its turn. If the ghost\
    \ takes radiant damage or damage from a magic weapon, this trait doesn't function\
    \ at the start of the ghost's next turn. The ghost dies only if it starts its\
    \ turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8\
    \ + 8) force damage."
  "name": "Spectral Weapon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost emits a dreadful howl that summons a cold, biting wind. This\
    \ wind engulfs up to three creatures of the ghost's choice that it can see within\
    \ 60 feet of it. Each target is pulled up to 20 feet toward the ghost and must\
    \ make a DC 15 Constitution saving throw, taking 16 (3d10) cold damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Wind Howl (Recharge 6)"
"source":
- "CM"
"image": "[[Cloud Giant Ghost.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 146*