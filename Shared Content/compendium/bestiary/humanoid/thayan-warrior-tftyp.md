---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Thayan Warrior"]
statblock: true
"name": "Thayan Warrior"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any Non-Good alignment"
"ac": !!int "16"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Common, Thayan"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Within the Doomvault, the warrior has advantage on saving throws against\
    \ being [charmed](/rules/conditions.md#charmed) or [frightened](/rules/conditions.md#frightened)."
  "name": "Doomvault Devotion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior has advantage on an attack roll against a creature if at least\
    \ one of the warrior's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage."
  "name": "Javelin"
"source":
- "TftYP"
name: Thayan Warrior
image: "[[Thayan Warrior.png]]"
---

# Thayan Warrior

```statblock
"name": "Thayan Warrior"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any Non-Good alignment"
"ac": !!int "16"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Common, Thayan"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Within the Doomvault, the warrior has advantage on saving throws against\
    \ being [charmed](/rules/conditions.md#charmed) or [frightened](/rules/conditions.md#frightened)."
  "name": "Doomvault Devotion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior has advantage on an attack roll against a creature if at least\
    \ one of the warrior's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage."
  "name": "Javelin"
"source":
- "TftYP"
"image": "[[Thayan Warrior.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 246*