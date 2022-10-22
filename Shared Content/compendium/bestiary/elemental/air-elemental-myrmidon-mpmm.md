---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/elemental
aliases: ["Air Elemental Myrmidon"]
statblock: true
"name": "Air Elemental Myrmidon"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "9"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft., fly 30 ft. (hover)"
"damage_resistances": "lightning; thunder; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "paralyzed, petrified, poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Auran, one language of its creator's choice"
"cr": "7"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The myrmidon makes three Flail attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) force damage."
  "name": "Flail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The myrmidon makes one Flail attack. On a hit, the target takes an extra\
    \ 18 (4d8) lightning damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [stunned](/rules/conditions.md#stunned) until the end of\
    \ the myrmidon's next turn."
  "name": "Lightning Strike (Recharge 6)"
"source":
- "MPMM"
- "MTF"
name: Air Elemental Myrmidon
image: "[[Air Elemental Myrmidon.png]]"
---

# Air Elemental Myrmidon

```statblock
"name": "Air Elemental Myrmidon"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "9"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft., fly 30 ft. (hover)"
"damage_resistances": "lightning; thunder; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "paralyzed, petrified, poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Auran, one language of its creator's choice"
"cr": "7"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The myrmidon makes three Flail attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) force damage."
  "name": "Flail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The myrmidon makes one Flail attack. On a hit, the target takes an extra\
    \ 18 (4d8) lightning damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [stunned](/rules/conditions.md#stunned) until the end of\
    \ the myrmidon's next turn."
  "name": "Lightning Strike (Recharge 6)"
"source":
- "MPMM"
- "MTF"
"image": "[[Air Elemental Myrmidon.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 122, Mordenkainen's Tome of Foes p. 202*

## Description

**Elemental Myrmidons.** Elemental myrmidons are Elementals conjured and bound by magic into ritually created suits of plate armor. In this form, they possess no recollection of their former existence as free Elementals. They exist only to follow the commands of their creators.