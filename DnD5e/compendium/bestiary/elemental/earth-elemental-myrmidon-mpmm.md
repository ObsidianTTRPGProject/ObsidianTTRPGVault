---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/elemental
aliases: ["Earth Elemental Myrmidon"]
statblock: true
"name": "Earth Elemental Myrmidon"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "8"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "paralyzed, petrified, poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Terran, one language of its creator's choice"
"cr": "7"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The myrmidon makes two Maul attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) force damage."
  "name": "Maul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The myrmidon makes one Maul attack. On a hit, the target takes an extra\
    \ 22 (4d10) thunder damage, and the target must succeed on a DC 14 Strength saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Thunderous Strike (Recharge 6)"
"source":
- "MPMM"
- "MTF"
name: Earth Elemental Myrmidon
image: "[[Earth Elemental Myrmidon.png]]"
---

# Earth Elemental Myrmidon

```statblock
"name": "Earth Elemental Myrmidon"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "8"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "paralyzed, petrified, poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Terran, one language of its creator's choice"
"cr": "7"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The myrmidon makes two Maul attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) force damage."
  "name": "Maul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The myrmidon makes one Maul attack. On a hit, the target takes an extra\
    \ 22 (4d10) thunder damage, and the target must succeed on a DC 14 Strength saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Thunderous Strike (Recharge 6)"
"source":
- "MPMM"
- "MTF"
"image": "[[Earth Elemental Myrmidon.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 122, Mordenkainen's Tome of Foes p. 202*

## Description

**Elemental Myrmidons.** Elemental myrmidons are Elementals conjured and bound by magic into ritually created suits of plate armor. In this form, they possess no recollection of their former existence as free Elementals. They exist only to follow the commands of their creators.