---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/plant
aliases: ["Thorn Slinger"]
statblock: true
"name": "Thorn Slinger"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "32"
"hit_dice": "5d10 + 5"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 10 ft."
"condition_immunities": "blinded, deafened, frightened"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thorn slinger adheres to anything that touches it. A Medium or smaller\
    \ creature adhered to the thorn slinger is also [grappled](/rules/conditions.md#grappled)\
    \ by it (escape DC 11). Ability checks made to escape this grapple have disadvantage.\n\
    \nAt the end of each of the thorn slinger's turns, anything [grappled](/rules/conditions.md#grappled)\
    \ by it takes 3 (1d6) acid damage."
  "name": "Adhesive Blossoms"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the thorn slinger remains motionless, it is indistinguishable from\
    \ an inanimate bush."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30 ft.,\
    \ one target. Hit: 8 (2d6 + 1) piercing damage."
  "name": "Thorns"
"source":
- "TftYP"
name: Thorn Slinger
image: "[[Thorn Slinger.png]]"
---

# Thorn Slinger

```statblock
"name": "Thorn Slinger"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "32"
"hit_dice": "5d10 + 5"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 10 ft."
"condition_immunities": "blinded, deafened, frightened"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thorn slinger adheres to anything that touches it. A Medium or smaller\
    \ creature adhered to the thorn slinger is also [grappled](/rules/conditions.md#grappled)\
    \ by it (escape DC 11). Ability checks made to escape this grapple have disadvantage.\n\
    \nAt the end of each of the thorn slinger's turns, anything [grappled](/rules/conditions.md#grappled)\
    \ by it takes 3 (1d6) acid damage."
  "name": "Adhesive Blossoms"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the thorn slinger remains motionless, it is indistinguishable from\
    \ an inanimate bush."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30 ft.,\
    \ one target. Hit: 8 (2d6 + 1) piercing damage."
  "name": "Thorns"
"source":
- "TftYP"
"image": "[[Thorn Slinger.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 246*