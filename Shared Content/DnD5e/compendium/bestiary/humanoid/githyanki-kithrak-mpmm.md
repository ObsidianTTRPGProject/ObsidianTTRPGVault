---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/gith
- monster/environment/desert
- monster/environment/mountain
- monster/environment/urban
aliases: ["Githyanki Kith'rak"]
statblock: true
"name": "Githyanki Kith'rak"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "180"
"hit_dice": "24d8 + 72"
"stats":
- !!int "18"
- !!int "16"
- !!int "17"
- !!int "16"
- !!int "15"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "7"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "Gith"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\nAt\
    \ will: [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible)\n\
    \n1/day each: [plane shift](/compendium/spells/plane-shift.md), [telekinesis](/compendium/spells/telekinesis.md)\n\
    \n3/day each: [blur](/compendium/spells/blur.md), [nondetection](/compendium/spells/nondetection.md)\
    \ (self only)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki makes three Greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage plus 17 (5d6) psychic damage."
  "name": "Greatsword"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step (Recharge 4-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki magically ends the [charmed](/rules/conditions.md#charmed)\
    \ and [frightened](/rules/conditions.md#frightened) conditions on itself and each\
    \ creature of its choice that it can see within 30 feet of it."
  "name": "Rally the Troops"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki adds 4 to its AC against one melee attack that would hit\
    \ it. To do so, the githyanki must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MPMM"
- "MTF"
name: Githyanki Kith'rak
image: "[[Githyanki Kith'rak.png]]"
---

# Githyanki Kith'rak

```statblock
"name": "Githyanki Kith'rak"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "180"
"hit_dice": "24d8 + 72"
"stats":
- !!int "18"
- !!int "16"
- !!int "17"
- !!int "16"
- !!int "15"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "7"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "Gith"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\nAt\
    \ will: [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible)\n\
    \n1/day each: [plane shift](/compendium/spells/plane-shift.md), [telekinesis](/compendium/spells/telekinesis.md)\n\
    \n3/day each: [blur](/compendium/spells/blur.md), [nondetection](/compendium/spells/nondetection.md)\
    \ (self only)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki makes three Greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage plus 17 (5d6) psychic damage."
  "name": "Greatsword"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step (Recharge 4-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki magically ends the [charmed](/rules/conditions.md#charmed)\
    \ and [frightened](/rules/conditions.md#frightened) conditions on itself and each\
    \ creature of its choice that it can see within 30 feet of it."
  "name": "Rally the Troops"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki adds 4 to its AC against one melee attack that would hit\
    \ it. To do so, the githyanki must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MPMM"
- "MTF"
"image": "[[Githyanki Kith'rak.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 140, Mordenkainen's Tome of Foes p. 205*

## Description

Militarized githyanki cultures assign ranks and responsibilities to citizens. Groups of ten warriors follow the commands of sarths ([githyanki warriors](/compendium/bestiary/humanoid/githyanki-warrior.md)), while ten sarths obey the commands of a mighty kith'rak. These champions undergo torturous training and psionic testing until they can command the respect of their underlings.

**Githyanki.** Githyanki descend from an ancient people who were also the progenitors of githzerai (also in this book). These tall, gaunt folk have potent psionic powers and dwell, for the most part, on the Astral Plane. Among the best-known githyanki are the bellicose followers of the Lich Queen Vlaakith. They terrorize the Astral Plane, raiding into other planes to plunder the multiverse of its magic and riches.

## Environment

desert, mountain, urban