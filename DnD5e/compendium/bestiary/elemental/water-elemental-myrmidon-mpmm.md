---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/elemental
aliases: ["Water Elemental Myrmidon"]
statblock: true
"name": "Water Elemental Myrmidon"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "8"
- !!int "10"
- !!int "10"
"speed": "walk 40 ft., swim 40 ft."
"damage_resistances": "acid; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "paralyzed, petrified, poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan, one language of its creator's choice"
"cr": "7"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The myrmidon makes three Trident attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) force damage, or 8 (1d8 + 4) force damage\
    \ if used with two hands to make a melee attack."
  "name": "Trident"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The myrmidon uses Multiattack. Each attack that hits deals an extra 5 (1d10)\
    \ cold damage. A target that is hit by one or more of these attacks has its speed\
    \ reduced by 10 feet until the end of the myrmidon's next turn."
  "name": "Freezing Strikes (Recharge 6)"
"source":
- "MPMM"
- "MTF"
name: Water Elemental Myrmidon
image: "[[Water Elemental Myrmidon.png]]"
---

# Water Elemental Myrmidon

```statblock
"name": "Water Elemental Myrmidon"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "8"
- !!int "10"
- !!int "10"
"speed": "walk 40 ft., swim 40 ft."
"damage_resistances": "acid; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "paralyzed, petrified, poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan, one language of its creator's choice"
"cr": "7"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The myrmidon makes three Trident attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) force damage, or 8 (1d8 + 4) force damage\
    \ if used with two hands to make a melee attack."
  "name": "Trident"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The myrmidon uses Multiattack. Each attack that hits deals an extra 5 (1d10)\
    \ cold damage. A target that is hit by one or more of these attacks has its speed\
    \ reduced by 10 feet until the end of the myrmidon's next turn."
  "name": "Freezing Strikes (Recharge 6)"
"source":
- "MPMM"
- "MTF"
"image": "[[Water Elemental Myrmidon.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 123, Mordenkainen's Tome of Foes p. 203*

## Description

**Elemental Myrmidons.** Elemental myrmidons are Elementals conjured and bound by magic into ritually created suits of plate armor. In this form, they possess no recollection of their former existence as free Elementals. They exist only to follow the commands of their creators.