---
cssclass: json5e-monster
tags:
- compendium/src/aitfr-dn
- monster/size/large
- monster/type/undead
aliases: ["Skeletal Horror"]
statblock: true
"name": "Skeletal Horror"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "150"
"hit_dice": "20d10 + 40"
"stats":
- !!int "16"
- !!int "14"
- !!int "15"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": ""
"cr": "6"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror makes two attacks with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 19 (3d10\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror crashes into foes like a wave before quickly reforming. Each\
    \ creature within 10 feet of the horror must make a DC 15 Dexterity saving throw,\
    \ taking 18 (4d8) bludgeoning damage on a failed save, or half as much damage\
    \ on a successful one. A creature that fails this saving throw is also knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Wave of Bones (Recharge 5-6)"
"source":
- "AitFR-DN"
name: Skeletal Horror
image: "[[Skeletal Horror.png]]"
---

# Skeletal Horror

```statblock
"name": "Skeletal Horror"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "150"
"hit_dice": "20d10 + 40"
"stats":
- !!int "16"
- !!int "14"
- !!int "15"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": ""
"cr": "6"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror makes two attacks with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 19 (3d10\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror crashes into foes like a wave before quickly reforming. Each\
    \ creature within 10 feet of the horror must make a DC 15 Dexterity saving throw,\
    \ taking 18 (4d8) bludgeoning damage on a failed save, or half as much damage\
    \ on a successful one. A creature that fails this saving throw is also knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Wave of Bones (Recharge 5-6)"
"source":
- "AitFR-DN"
"image": "[[Skeletal Horror.png]]"
```
^statblock

*Source: Adventures in the Forgotten Realms: Deepest Night p. 13*

## Description

This horrid mass of bones clambers along on a dozen hands and feet without maintaining any consistent shape. One moment it moves like a centipede, the next it rears back to claw like a bear. The only consistent feature is a weird absence: no matter how many skulls make up its mass, this strange horror always seems to be headless.

The skeletal horrors in Kyrilla's lair are made from the bones of yuan-ti supplicants and cultists who came to learn her powers or, later, to steal them. She spared none of these intruders' lives, and in death their remains do her bidding.