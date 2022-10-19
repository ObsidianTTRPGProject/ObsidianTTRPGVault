---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/small
- monster/type/humanoid/kobold
aliases: ["Icewind Kobold"]
statblock: true
"name": "Icewind Kobold"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "9"
"hit_dice": "2d6 + 2"
"stats":
- !!int "7"
- !!int "15"
- !!int "12"
- !!int "8"
- !!int "8"
- !!int "8"
"speed": "walk 30 ft., climb 20 ft."
"saves":
  "Dexterity": !!int "4"
  "Constitution": !!int "3"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "1"
  "Survival": !!int "1"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Draconic"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kobold has advantage on an attack roll against a creature if at least\
    \ one of the kobold's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the kobold has disadvantage on attack rolls, as well\
    \ as on Wisdom (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +0 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 1 (1d6 - 2) piercing damage."
  "name": "Javelin"
"source":
- "IDRotF"
name: Icewind Kobold
image: "[[Icewind Kobold.png]]"
---

# Icewind Kobold

```statblock
"name": "Icewind Kobold"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "9"
"hit_dice": "2d6 + 2"
"stats":
- !!int "7"
- !!int "15"
- !!int "12"
- !!int "8"
- !!int "8"
- !!int "8"
"speed": "walk 30 ft., climb 20 ft."
"saves":
  "Dexterity": !!int "4"
  "Constitution": !!int "3"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "1"
  "Survival": !!int "1"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Draconic"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kobold has advantage on an attack roll against a creature if at least\
    \ one of the kobold's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the kobold has disadvantage on attack rolls, as well\
    \ as on Wisdom (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +0 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 1 (1d6 - 2) piercing damage."
  "name": "Javelin"
"source":
- "IDRotF"
"image": "[[Icewind Kobold.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 296*

## Description

Kobolds can be found anywhere dragons are known to dwell, and those that live in the mountains and hills of Icewind Dale are among the hardiest of their kind. Drawn to the north by a desire to find and serve white dragons, these kobolds adapted as best they can to the hostile climate. Their sensitive eyes appreciate sunless days and long, dark nights. They use wooden javelins as tools to test the snow ahead of them.

Kobolds native to Icewind Dale frequently wander into Ten-Towns to escape the dreadful cold, hoping to trade what few skills they have for some warm soup and shelter. The people of Ten-Towns, accustomed to the presence of strange outlanders, allow these kobolds to dwell among them for the most part. When the kobolds don't feel safe, they acquire heavy winter clothing and disguise themselves as humans by standing on one another's shoulders. Three kobolds in cold weather gear can pass themselves off as a clumsy human with a successful group Charisma (Deception) check, the DC of which equals the onlooker's Wisdom (Insight) check result.