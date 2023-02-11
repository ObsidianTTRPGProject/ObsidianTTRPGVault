---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/huge
- monster/type/beast
- monster/environment/swamp
aliases: ["Elder Giant Lizard"]
statblock: true
"name": "Elder Giant Lizard"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "85"
"hit_dice": "9d12 + 27"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "5"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizard can hold its breath for 30 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizard makes two attacks: one with its bite and one with its tail."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10\
    \ + 5) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the lizard can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not [grappled](/rules/conditions.md#grappled)\
    \ by the lizard. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature,\
    \ it must succeed on a DC 16 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
"source":
- "TftYP"
name: Elder Giant Lizard
image: "[[Elder Giant Lizard.png]]"
---

# Elder Giant Lizard

```statblock
"name": "Elder Giant Lizard"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "85"
"hit_dice": "9d12 + 27"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "5"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizard can hold its breath for 30 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizard makes two attacks: one with its bite and one with its tail."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10\
    \ + 5) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the lizard can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not [grappled](/rules/conditions.md#grappled)\
    \ by the lizard. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature,\
    \ it must succeed on a DC 16 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
"source":
- "TftYP"
"image": "[[Elder Giant Lizard.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 176*

## Environment

swamp