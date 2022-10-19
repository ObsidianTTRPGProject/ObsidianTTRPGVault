---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/huge
- monster/type/undead
aliases: ["Thunderbeast Skeleton"]
statblock: true
"name": "Thunderbeast Skeleton"
"size": "Huge"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "68"
"hit_dice": "8d12 + 16"
"stats":
- !!int "19"
- !!int "11"
- !!int "15"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "poisoned, exhaustion"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., Hit: 18 (4d6 + 4) piercing\
    \ damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "+7 to hit, reach 10 ft., one target. Hit: 18 (4d6 + 4) bludgeoning damage.\
    \ Succeed on a DC14 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
"source":
- "SKT"
name: Thunderbeast Skeleton
image: "[[Thunderbeast Skeleton.png]]"
---

# Thunderbeast Skeleton

```statblock
"name": "Thunderbeast Skeleton"
"size": "Huge"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "68"
"hit_dice": "8d12 + 16"
"stats":
- !!int "19"
- !!int "11"
- !!int "15"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "poisoned, exhaustion"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., Hit: 18 (4d6 + 4) piercing\
    \ damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "+7 to hit, reach 10 ft., one target. Hit: 18 (4d6 + 4) bludgeoning damage.\
    \ Succeed on a DC14 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
"source":
- "SKT"
"image": "[[Thunderbeast Skeleton.png]]"
```
^statblock

*Source: Storm King's Thunder p. 99*