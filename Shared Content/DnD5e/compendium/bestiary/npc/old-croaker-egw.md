---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/large
- monster/type/beast
- monster/environment/underdark
- monster/environment/forest
- monster/environment/swamp
- monster/environment/desert
- monster/environment/coastal
aliases: ["Old Croaker"]
statblock: true
"name": "Old Croaker"
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
"speed": "walk 20 ft., swim 40 ft."
"damage_immunities": "cold"
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Old Croaker can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Old Croaker's long jump is up to 20 feet and its high jump is up to 10\
    \ feet, with or without a running start."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) piercing damage plus 5 (1d10) poison damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and Old Croaker can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Old Croaker makes one bite attack against a Medium or smaller target it\
    \ is grappling. If the attack hits, the target is swallowed, and the grapple ends.\
    \ The swallowed target is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside Old Croaker, and\
    \ it takes 10 (3d6) acid damage at the start of each of Old Croaker's turns. Old\
    \ Croaker can have only one target swallowed at a time.\n\nIf Old Croaker dies,\
    \ a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse using 5 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "EGW"
name: Old Croaker
image: "[[Old Croaker.png]]"
---

# Old Croaker

```statblock
"name": "Old Croaker"
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
"speed": "walk 20 ft., swim 40 ft."
"damage_immunities": "cold"
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Old Croaker can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Old Croaker's long jump is up to 20 feet and its high jump is up to 10\
    \ feet, with or without a running start."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) piercing damage plus 5 (1d10) poison damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and Old Croaker can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Old Croaker makes one bite attack against a Medium or smaller target it\
    \ is grappling. If the attack hits, the target is swallowed, and the grapple ends.\
    \ The swallowed target is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside Old Croaker, and\
    \ it takes 10 (3d6) acid damage at the start of each of Old Croaker's turns. Old\
    \ Croaker can have only one target swallowed at a time.\n\nIf Old Croaker dies,\
    \ a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse using 5 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "EGW"
"image": "[[Old Croaker.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 240*

## Environment

underdark, forest, swamp, desert, coastal