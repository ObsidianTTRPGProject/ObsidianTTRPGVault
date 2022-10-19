---
cssclass: json5e-monster
tags:
- compendium/src/psk
- monster/size/tiny
- monster/type/construct
aliases: ["Servo"]
statblock: true
"name": "Servo"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"stats":
- !!int "4"
- !!int "11"
- !!int "12"
- !!int "3"
- !!int "10"
- !!int "7"
"speed": "walk 20 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, poisoned"
"senses": "passive Perception 10"
"languages": ""
"cr": "0"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage."
  "name": "Claw"
"source":
- "PSK"
name: Servo
image: "[[Servo.png]]"
---

# Servo

```statblock
"name": "Servo"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"stats":
- !!int "4"
- !!int "11"
- !!int "12"
- !!int "3"
- !!int "10"
- !!int "7"
"speed": "walk 20 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, poisoned"
"senses": "passive Perception 10"
"languages": ""
"cr": "0"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage."
  "name": "Claw"
"source":
- "PSK"
"image": "[[Servo.png]]"
```
^statblock

*Source: Plane Shift: Kaladesh p. 32*