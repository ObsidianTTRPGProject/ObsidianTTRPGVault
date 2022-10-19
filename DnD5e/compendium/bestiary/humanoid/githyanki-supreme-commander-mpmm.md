---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/gith
- monster/environment/desert
- monster/environment/mountain
- monster/environment/urban
aliases: ["Githyanki Supreme Commander"]
statblock: true
"name": "Githyanki Supreme Commander"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "187"
"hit_dice": "22d8 + 88"
"stats":
- !!int "19"
- !!int "17"
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "8"
  "Intelligence": !!int "8"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "9"
  "Perception": !!int "8"
"senses": "passive Perception 18"
"languages": "Gith"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\nAt\
    \ will: [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible)\n\
    \n1/day each: [Bigby's hand](/compendium/spells/bigbys-hand.md), [mass suggestion](/compendium/spells/mass-suggestion.md),\
    \ [plane shift](/compendium/spells/plane-shift.md), [telekinesis](/compendium/spells/telekinesis.md)\n\
    \n3/day each: [levitate](/compendium/spells/levitate.md) (self only), [nondetection](/compendium/spells/nondetection.md)\
    \ (self only)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the githyanki fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki makes two Silver Greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage plus 17 (5d6) psychic damage. On a critical hit against\
    \ a target in an astral body (as with the [astral projection](/compendium/spells/astral-projection.md)\
    \ spell), the githyanki can cut the silvery cord that tethers the target to its\
    \ material body, instead of dealing damage."
  "name": "Silver Greatsword"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki adds 5 to its AC against one melee attack that would hit\
    \ it. To do so, the githyanki must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki targets one ally it can see within 30 feet of it. If the\
    \ target can see or hear the githyanki, the target can make one melee weapon attack\
    \ using its reaction, if available, and has advantage on the attack roll."
  "name": "Command Ally"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki makes one Silver Greatsword attack."
  "name": "Attack (2 Actions)"
"source":
- "MPMM"
- "MTF"
name: Githyanki Supreme Commander
image: "[[Githyanki Supreme Commander.png]]"
---

# Githyanki Supreme Commander

```statblock
"name": "Githyanki Supreme Commander"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "187"
"hit_dice": "22d8 + 88"
"stats":
- !!int "19"
- !!int "17"
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "8"
  "Intelligence": !!int "8"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "9"
  "Perception": !!int "8"
"senses": "passive Perception 18"
"languages": "Gith"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\nAt\
    \ will: [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible)\n\
    \n1/day each: [Bigby's hand](/compendium/spells/bigbys-hand.md), [mass suggestion](/compendium/spells/mass-suggestion.md),\
    \ [plane shift](/compendium/spells/plane-shift.md), [telekinesis](/compendium/spells/telekinesis.md)\n\
    \n3/day each: [levitate](/compendium/spells/levitate.md) (self only), [nondetection](/compendium/spells/nondetection.md)\
    \ (self only)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the githyanki fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki makes two Silver Greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage plus 17 (5d6) psychic damage. On a critical hit against\
    \ a target in an astral body (as with the [astral projection](/compendium/spells/astral-projection.md)\
    \ spell), the githyanki can cut the silvery cord that tethers the target to its\
    \ material body, instead of dealing damage."
  "name": "Silver Greatsword"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki adds 5 to its AC against one melee attack that would hit\
    \ it. To do so, the githyanki must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki targets one ally it can see within 30 feet of it. If the\
    \ target can see or hear the githyanki, the target can make one melee weapon attack\
    \ using its reaction, if available, and has advantage on the attack roll."
  "name": "Command Ally"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki makes one Silver Greatsword attack."
  "name": "Attack (2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "[[Githyanki Supreme Commander.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 141, Mordenkainen's Tome of Foes p. 206*

## Description

Supreme commanders lead armies, each one commanding ten kith'raks, who in turn lead the rest of their forces. Most supreme commanders ride [red dragons](/compendium/bestiary/dragon/adult-red-dragon.md) into battle.

**Githyanki.** Githyanki descend from an ancient people who were also the progenitors of githzerai (also in this book). These tall, gaunt folk have potent psionic powers and dwell, for the most part, on the Astral Plane. Among the best-known githyanki are the bellicose followers of the Lich Queen Vlaakith. They terrorize the Astral Plane, raiding into other planes to plunder the multiverse of its magic and riches.

## Environment

desert, mountain, urban