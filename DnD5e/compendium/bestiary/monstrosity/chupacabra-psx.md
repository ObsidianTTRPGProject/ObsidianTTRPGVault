---
cssclass: json5e-monster
tags:
- compendium/src/psx
- monster/size/medium
- monster/type/monstrosity
aliases: ["Chupacabra"]
statblock: true
"name": "Chupacabra"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "6"
- !!int "13"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the chupacabra has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) piercing damage. If the target is a creature, it must succeed on a DC 13\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature that is [prone](/rules/conditions.md#prone),\
    \ [incapacitated](/rules/conditions.md#incapacitated), or [restrained](/rules/conditions.md#restrained).\
    \ Hit: 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution\
    \ saving throw or its hit point maximum is reduced by an amount equal to the damage\
    \ taken, and the chupacabra regains hit points equal to that amount. The reduction\
    \ lasts until the target finishes a long rest. The target dies if this effect\
    \ reduces its hit point maximum to 0."
  "name": "Drain Blood"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature within 5 feet of the chupacabra stands up, the chupacabra\
    \ can use its reaction to make a bite attack."
  "name": "Pin"
"source":
- "PSX"
name: Chupacabra
image: "[[Chupacabra.png]]"
---

# Chupacabra

```statblock
"name": "Chupacabra"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "6"
- !!int "13"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the chupacabra has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) piercing damage. If the target is a creature, it must succeed on a DC 13\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature that is [prone](/rules/conditions.md#prone),\
    \ [incapacitated](/rules/conditions.md#incapacitated), or [restrained](/rules/conditions.md#restrained).\
    \ Hit: 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution\
    \ saving throw or its hit point maximum is reduced by an amount equal to the damage\
    \ taken, and the chupacabra regains hit points equal to that amount. The reduction\
    \ lasts until the target finishes a long rest. The target dies if this effect\
    \ reduces its hit point maximum to 0."
  "name": "Drain Blood"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature within 5 feet of the chupacabra stands up, the chupacabra\
    \ can use its reaction to make a bite attack."
  "name": "Pin"
"source":
- "PSX"
"image": "[[Chupacabra.png]]"
```
^statblock

*Source: Plane Shift: Ixalan p. 9*