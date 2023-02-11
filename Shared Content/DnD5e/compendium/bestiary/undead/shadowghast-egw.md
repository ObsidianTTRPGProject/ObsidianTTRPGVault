---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/medium
- monster/type/undead
aliases: ["Shadowghast"]
statblock: true
"name": "Shadowghast"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"stats":
- !!int "14"
- !!int "20"
- !!int "12"
- !!int "12"
- !!int "11"
- !!int "8"
"speed": "walk 35 ft."
"skillsaves":
  "Stealth": !!int "8"
  "Perception": !!int "3"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 5 feet of the shadowghast must\
    \ succeed on a DC 12 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the start of its next turn. On a successful saving throw, the creature\
    \ is immune to this Stench for 24 hours."
  "name": "Stench"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the shadowghast can take the Hide action\
    \ as a bonus action."
  "name": "Shadow Stealth"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadowghast makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 11 (2d8\
    \ + 2) slashing damage plus 5 (1d10) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage. If the target is a creature other than an undead, it must\
    \ succeed on a DC 12 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Claws"
"source":
- "EGW"
name: Shadowghast
image: "[[Shadowghast.png]]"
---

# Shadowghast

```statblock
"name": "Shadowghast"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"stats":
- !!int "14"
- !!int "20"
- !!int "12"
- !!int "12"
- !!int "11"
- !!int "8"
"speed": "walk 35 ft."
"skillsaves":
  "Stealth": !!int "8"
  "Perception": !!int "3"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 5 feet of the shadowghast must\
    \ succeed on a DC 12 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the start of its next turn. On a successful saving throw, the creature\
    \ is immune to this Stench for 24 hours."
  "name": "Stench"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the shadowghast can take the Hide action\
    \ as a bonus action."
  "name": "Shadow Stealth"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadowghast makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 11 (2d8\
    \ + 2) slashing damage plus 5 (1d10) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage. If the target is a creature other than an undead, it must\
    \ succeed on a DC 12 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Claws"
"source":
- "EGW"
"image": "[[Shadowghast.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 299*

## Description

A shadowghast is an undead assassin. Leaping out from the shadows and trailing tendrils of darkness, it closes in on its prey with nary a sound, then tears into a victim with its paralyzing claws and furious bite.