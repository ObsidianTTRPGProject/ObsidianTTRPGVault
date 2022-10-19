---
cssclass: json5e-monster
tags:
- compendium/src/psx
- monster/size/small
- monster/type/beast
aliases: ["Frilled Deathspitter"]
statblock: true
"name": "Frilled Deathspitter"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "18"
"hit_dice": "4d6 + 4"
"stats":
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "4"
- !!int "12"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deathspitter makes three attacks: one with its bite and two with its\
    \ claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 15/30 ft., one creature. Hit:\
    \ The target must make a DC 13 Constitution saving throw, taking 18 (4d8) poison\
    \ damage on a failed save, or half as much damage on a successful one. In addition,\
    \ a creature that fails its saving throw is [blinded](/rules/conditions.md#blinded)\
    \ until the end of the deathspitter's next turn."
  "name": "Spit Poison"
"source":
- "PSX"
name: Frilled Deathspitter
image: "[[Frilled Deathspitter.png]]"
---

# Frilled Deathspitter

```statblock
"name": "Frilled Deathspitter"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "18"
"hit_dice": "4d6 + 4"
"stats":
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "4"
- !!int "12"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deathspitter makes three attacks: one with its bite and two with its\
    \ claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 15/30 ft., one creature. Hit:\
    \ The target must make a DC 13 Constitution saving throw, taking 18 (4d8) poison\
    \ damage on a failed save, or half as much damage on a successful one. In addition,\
    \ a creature that fails its saving throw is [blinded](/rules/conditions.md#blinded)\
    \ until the end of the deathspitter's next turn."
  "name": "Spit Poison"
"source":
- "PSX"
"image": "[[Frilled Deathspitter.png]]"
```
^statblock

*Source: Plane Shift: Ixalan p. 30*