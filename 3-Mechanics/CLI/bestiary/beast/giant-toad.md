---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Giant Toad"]
---
# [Giant Toad](3-Mechanics\CLI\bestiary\beast/giant-toad.md)
*Source: Monster Manual p. 329. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Giant Toad"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "39"
"hit_dice": "6d10 + 6"
"stats":
- !!int "15"
- !!int "13"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "20 ft., swim 40 ft."
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- "desc": "The toad can breathe air and water."
  "name": "Amphibious"
- "desc": "The toad's long jump is up to 20 feet and its high jump is up to 10 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d10 + 2|text(7) (1d10 + 2) piercing damage plus dice:1d10|text(5)\
    \ (1d10) poison damage, and the target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 13). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and the toad can't bite another target."
  "name": "Bite"
- "desc": "The toad makes one bite attack against a Medium or smaller target it is\
    \ grappling. If the attack hits, the target is swallowed, and the grapple ends.\
    \ The swallowed target is [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ and [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained), it has total\
    \ cover against attacks and other effects outside the toad, and it takes dice:3d6|text(10)\
    \ (3d6) acid damage at the start of each of the toad's turns. The toad can have\
    \ only one target swallowed at a time.\n\nIf the toad dies, a swallowed creature\
    \ is no longer [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained) by\
    \ it and can escape from the corpse using 5 feet of movement, exiting [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "MM"
- "WDMM"
- "GoS"
- "EGW"
- "TCE"
- "WBtW"
- "KftGV"
"image": "/3-Mechanics/CLI/bestiary/beast/token/giant-toad.webp"
```
^statblock

## Environment

underdark, forest, swamp, desert, coastal