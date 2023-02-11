---
cssclass: json5e-monster
tags:
- compendium/src/aitfr-fcd
- monster/size/medium
- monster/type/humanoid
aliases: ["Mercenary Envoy"]
statblock: true
"name": "Mercenary Envoy"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "15"
- !!int "15"
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "4"
  "Constitution": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": "Common"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mercenary has advantage on savings throws against being [charmed](/rules/conditions.md#charmed),\
    \ [frightened](/rules/conditions.md#frightened), [grappled](/rules/conditions.md#grappled),\
    \ or [restrained](/rules/conditions.md#restrained) while within 5 feet of at least\
    \ one ally."
  "name": "Inspired Courage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, the mercenary can deal an extra 7 (2d6) damage to a creature\
    \ it hits with a weapon attack if that creature is within 5 feet of an ally of\
    \ the mercenary that isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Martial Advantage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mercenary makes two longsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range\n\n100/400 ft., one target. Hit:\
    \ 7 (1d10 + 2) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "AitFR-FCD"
name: Mercenary Envoy
image: "[[Mercenary Envoy.png]]"
---

# Mercenary Envoy

```statblock
"name": "Mercenary Envoy"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "15"
- !!int "15"
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "4"
  "Constitution": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": "Common"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mercenary has advantage on savings throws against being [charmed](/rules/conditions.md#charmed),\
    \ [frightened](/rules/conditions.md#frightened), [grappled](/rules/conditions.md#grappled),\
    \ or [restrained](/rules/conditions.md#restrained) while within 5 feet of at least\
    \ one ally."
  "name": "Inspired Courage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, the mercenary can deal an extra 7 (2d6) damage to a creature\
    \ it hits with a weapon attack if that creature is within 5 feet of an ally of\
    \ the mercenary that isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Martial Advantage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mercenary makes two longsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range\n\n100/400 ft., one target. Hit:\
    \ 7 (1d10 + 2) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "AitFR-FCD"
"image": "[[Mercenary Envoy.png]]"
```
^statblock

*Source: Adventures in the Forgotten Realms: From Cyan Depths p. 10*

## Description

These mercenaries stand for the Banner of Blades and the Iron Lions at Tyreus's fortress, but they might not be representative of those armies. These are rank-and-file warriors capable of demonstrating coordinated attacks and formations. They are neither the most capable lieutenants nor the rough-andtumble masses of these small armies.

For the purposes of their Inspired Courage feature, the mercenaries of both companies consider each other allies while at the fortress—unless the adventurers do something to drive them apart.