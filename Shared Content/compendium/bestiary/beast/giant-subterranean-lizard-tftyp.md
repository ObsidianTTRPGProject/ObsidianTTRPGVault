---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/huge
- monster/type/beast
aliases: ["Giant Subterranean Lizard"]
statblock: true
"name": "Giant Subterranean Lizard"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "66"
"hit_dice": "7d12 + 21"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., swim 50 ft."
"skillsaves":
  "Stealth": !!int "3"
"senses": "passive Perception 10"
"languages": ""
"cr": "4"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizard makes two attacks: one with its bite and one with its tail.\
    \ One attack can be replaced by Swallow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) piercing damage and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the lizard can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage. If the target is a creature, it must succeed on a DC 15\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one Medium or smaller creature\
    \ the lizard is grappling. Hit: 16 (2d10 + 5) piercing damage. The target is swallowed,\
    \ and the grapple ends. The swallowed target is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the lizard, and it takes 10 (3d6) acid damage\
    \ at the start of each of the lizard's turns. The lizard can have only one target\
    \ swallowed at a time.\n\nIf the lizard dies, a swallowed creature is no longer\
    \ [restrained](/rules/conditions.md#restrained) by it and can escape from the\
    \ corpse using 10 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "TftYP"
name: Giant Subterranean Lizard
image: "[[Giant Subterranean Lizard.png]]"
---

# Giant Subterranean Lizard

```statblock
"name": "Giant Subterranean Lizard"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "66"
"hit_dice": "7d12 + 21"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., swim 50 ft."
"skillsaves":
  "Stealth": !!int "3"
"senses": "passive Perception 10"
"languages": ""
"cr": "4"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizard makes two attacks: one with its bite and one with its tail.\
    \ One attack can be replaced by Swallow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) piercing damage and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the lizard can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage. If the target is a creature, it must succeed on a DC 15\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one Medium or smaller creature\
    \ the lizard is grappling. Hit: 16 (2d10 + 5) piercing damage. The target is swallowed,\
    \ and the grapple ends. The swallowed target is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the lizard, and it takes 10 (3d6) acid damage\
    \ at the start of each of the lizard's turns. The lizard can have only one target\
    \ swallowed at a time.\n\nIf the lizard dies, a swallowed creature is no longer\
    \ [restrained](/rules/conditions.md#restrained) by it and can escape from the\
    \ corpse using 10 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "TftYP"
"image": "[[Giant Subterranean Lizard.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 236*