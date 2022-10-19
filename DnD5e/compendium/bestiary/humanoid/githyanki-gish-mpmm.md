---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/gith
- monster/type/humanoid/wizard
- monster/environment/desert
- monster/environment/mountain
- monster/environment/urban
aliases: ["Githyanki Gish"]
statblock: true
"name": "Githyanki Gish"
"size": "Medium"
"type": "humanoid"
"subtype": "gith, wizard"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "130"
"hit_dice": "20d8 + 40"
"stats":
- !!int "17"
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "6"
  "Insight": !!int "6"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "Gith"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\nAt\
    \ will: [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md)\
    \ (the hand is invisible), [message](/compendium/spells/message.md)\n\n1/day\
    \ each: [dimension door](/compendium/spells/dimension-door.md), [plane shift](/compendium/spells/plane-shift.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md)\n\n3/day each: [fireball](/compendium/spells/fireball.md),\
    \ [invisibility](/compendium/spells/invisibility.md), [nondetection](/compendium/spells/nondetection.md)\
    \ (self only)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki makes three Longsword or Telekinetic Bolt attacks, or it\
    \ makes one of those attacks and uses Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands,\
    \ plus 22 (5d8) psychic damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 28 (8d6)\
    \ force damage."
  "name": "Telekinetic Bolt"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step (Recharge 4-6)"
"source":
- "MPMM"
- "MTF"
name: Githyanki Gish
image: "[[Githyanki Gish.png]]"
---

# Githyanki Gish

```statblock
"name": "Githyanki Gish"
"size": "Medium"
"type": "humanoid"
"subtype": "gith, wizard"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "130"
"hit_dice": "20d8 + 40"
"stats":
- !!int "17"
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "6"
  "Insight": !!int "6"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "Gith"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\nAt\
    \ will: [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md)\
    \ (the hand is invisible), [message](/compendium/spells/message.md)\n\n1/day\
    \ each: [dimension door](/compendium/spells/dimension-door.md), [plane shift](/compendium/spells/plane-shift.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md)\n\n3/day each: [fireball](/compendium/spells/fireball.md),\
    \ [invisibility](/compendium/spells/invisibility.md), [nondetection](/compendium/spells/nondetection.md)\
    \ (self only)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki makes three Longsword or Telekinetic Bolt attacks, or it\
    \ makes one of those attacks and uses Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands,\
    \ plus 22 (5d8) psychic damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 28 (8d6)\
    \ force damage."
  "name": "Telekinetic Bolt"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step (Recharge 4-6)"
"source":
- "MPMM"
- "MTF"
"image": "[[Githyanki Gish.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 140, Mordenkainen's Tome of Foes p. 205*

## Description

Gish blend their magical abilities with swordplay to become dangerous foes in battle. Their specialized capabilities make them well suited for assassination, raiding, and espionage.

**Githyanki.** Githyanki descend from an ancient people who were also the progenitors of githzerai (also in this book). These tall, gaunt folk have potent psionic powers and dwell, for the most part, on the Astral Plane. Among the best-known githyanki are the bellicose followers of the Lich Queen Vlaakith. They terrorize the Astral Plane, raiding into other planes to plunder the multiverse of its magic and riches.

## Environment

desert, mountain, urban