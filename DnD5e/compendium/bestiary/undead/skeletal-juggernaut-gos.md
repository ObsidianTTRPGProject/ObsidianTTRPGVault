---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/large
- monster/type/undead
aliases: ["Skeletal Juggernaut"]
statblock: true
"name": "Skeletal Juggernaut"
"size": "Large"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "142"
"hit_dice": "19d10 + 38"
"stats":
- !!int "16"
- !!int "14"
- !!int "15"
- !!int "6"
- !!int "8"
- !!int "5"
"speed": "walk 30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the juggernaut is reduced to 0 hit points, twelve skeletons rise from\
    \ its remains."
  "name": "Disassemble"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the juggernaut does not have all of its hit points at the start of its\
    \ turn, it loses 10 hit points."
  "name": "Falling Apart"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The juggernaut makes two claws attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 12 (2d8\
    \ + 3) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The juggernaut collapses into a large heap before quickly reforming. Each\
    \ creature within 10 feet of the juggernaut must make a DC 14 Dexterity saving\
    \ throw, taking 18 (4d8) bludgeoning damage on a failed save, or half as much\
    \ damage on a successful one. A creature that fails this saving throw is also\
    \ knocked [prone](/rules/conditions.md#prone)."
  "name": "Avalanche of Bones (Recharge 5-6)"
"source":
- "GoS"
- "IMR"
name: Skeletal Juggernaut
image: "[[Skeletal Juggernaut.png]]"
---

# Skeletal Juggernaut

```statblock
"name": "Skeletal Juggernaut"
"size": "Large"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "142"
"hit_dice": "19d10 + 38"
"stats":
- !!int "16"
- !!int "14"
- !!int "15"
- !!int "6"
- !!int "8"
- !!int "5"
"speed": "walk 30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the juggernaut is reduced to 0 hit points, twelve skeletons rise from\
    \ its remains."
  "name": "Disassemble"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the juggernaut does not have all of its hit points at the start of its\
    \ turn, it loses 10 hit points."
  "name": "Falling Apart"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The juggernaut makes two claws attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 12 (2d8\
    \ + 3) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The juggernaut collapses into a large heap before quickly reforming. Each\
    \ creature within 10 feet of the juggernaut must make a DC 14 Dexterity saving\
    \ throw, taking 18 (4d8) bludgeoning damage on a failed save, or half as much\
    \ damage on a successful one. A creature that fails this saving throw is also\
    \ knocked [prone](/rules/conditions.md#prone)."
  "name": "Avalanche of Bones (Recharge 5-6)"
"source":
- "GoS"
- "IMR"
"image": "[[Skeletal Juggernaut.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 253, Infernal Machine Rebuild*

## Description

As seen lumbering across the beaches in Isle of the Abbey, a skeletal juggernaut is an oversized, bipedal assembly of bones that loses a portion of its mass with each step. These skeletal guardians hold together for only a short time before disassembling into a gang of individual undead.