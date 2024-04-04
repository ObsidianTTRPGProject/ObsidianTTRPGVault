---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Rust Monster"]
---
# [Rust Monster](3-Mechanics\CLI\bestiary\monstrosity/rust-monster.md)
*Source: Monster Manual p. 262. Available in the SRD.*  

```statblock
"name": "Rust Monster"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "13"
- !!int "12"
- !!int "13"
- !!int "2"
- !!int "13"
- !!int "6"
"speed": "40 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The rust monster can pinpoint, by scent, the location of ferrous metal\
    \ within 30 feet of it."
  "name": "Iron Scent"
- "desc": "Any nonmagical weapon made of metal that hits the rust monster corrodes.\
    \ After dealing damage, the weapon takes a permanent and cumulative −1 penalty\
    \ to damage rolls. If its penalty drops to −5, the weapon is destroyed. Non magical\
    \ ammunition made of metal that hits the rust monster is destroyed after dealing\
    \ damage."
  "name": "Rust Metal"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 1|text(5) (1d8 + 1) piercing damage."
  "name": "Bite"
- "desc": "The rust monster corrodes a nonmagical ferrous metal object it can see\
    \ within 5 feet of it. If the object isn't being worn or carried, the touch destroys\
    \ a 1-foot cube of it. If the object is being worn or carried by a creature, the\
    \ creature can make a DC 11 Dexterity saving throw to avoid the rust monster's\
    \ touch.\n\nIf the object touched is either metal armor or a metal shield being\
    \ worn or carried, it takes a permanent and cumulative −1 penalty to the AC it\
    \ offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is\
    \ destroyed. If the object touched is a held metal weapon, it rusts as described\
    \ in the Rust Metal trait."
  "name": "Antennae"
"source":
- "MM"
- "PotA"
- "SKT"
- "WDH"
- "WDMM"
- "IMR"
- "EGW"
- "IDRotF"
- "SatO"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/rust-monster.webp"
```
^statblock

## Environment

underdark