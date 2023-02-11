---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/beast
- monster/environment/forest
- monster/environment/swamp
aliases: ["Giant Frog"]
statblock: true
"name": "Giant Frog"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "12"
- !!int "13"
- !!int "11"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "2"
"senses": "darkvision 30 ft., passive Perception 12"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The frog can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The frog's long jump is up to 20 feet and its high jump is up to 10 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 11). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the frog can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The frog makes one bite attack against a Small or smaller target it is\
    \ grappling. If the attack hits, the target is swallowed, and the grapple ends.\
    \ The swallowed target is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the frog, and it\
    \ takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog\
    \ can have only one target swallowed at a time. If the frog dies, a swallowed\
    \ creature is no longer [restrained](/rules/conditions.md#restrained) by it and\
    \ can escape from the corpse using 5 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "MM"
- "HotDQ"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "EGW"
- "WBtW"
name: Giant Frog
image: "[[Giant Frog.png]]"
---

# Giant Frog

```statblock
"name": "Giant Frog"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "12"
- !!int "13"
- !!int "11"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "2"
"senses": "darkvision 30 ft., passive Perception 12"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The frog can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The frog's long jump is up to 20 feet and its high jump is up to 10 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 11). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the frog can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The frog makes one bite attack against a Small or smaller target it is\
    \ grappling. If the attack hits, the target is swallowed, and the grapple ends.\
    \ The swallowed target is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the frog, and it\
    \ takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog\
    \ can have only one target swallowed at a time. If the frog dies, a swallowed\
    \ creature is no longer [restrained](/rules/conditions.md#restrained) by it and\
    \ can escape from the corpse using 5 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "MM"
- "HotDQ"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "EGW"
- "WBtW"
"image": "[[Giant Frog.png]]"
```
^statblock

*Source: Monster Manual p. 325, Hoard of the Dragon Queen, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, The Wild Beyond the Witchlight*

## Environment

forest, swamp