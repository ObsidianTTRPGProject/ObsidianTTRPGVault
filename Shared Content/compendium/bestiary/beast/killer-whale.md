---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/beast
- monster/environment/underwater
aliases: ["Killer Whale"]
statblock: true
"name": "Killer Whale"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "90"
"hit_dice": "12d12 + 12"
"stats":
- !!int "19"
- !!int "10"
- !!int "13"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "swim 60 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "blindsight 120 ft., passive Perception 13"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The whale can't use its blindsight while [deafened](/rules/conditions.md#deafened)."
  "name": "Echolocation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The whale can hold its breath for 30 minutes."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The whale has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6\
    \ + 4) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "SKT"
- "GoS"
- "EGW"
- "MOT"
- "IDRotF"
name: Killer Whale
image: "[[Killer Whale.png]]"
---

# Killer Whale

```statblock
"name": "Killer Whale"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "90"
"hit_dice": "12d12 + 12"
"stats":
- !!int "19"
- !!int "10"
- !!int "13"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "swim 60 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "blindsight 120 ft., passive Perception 13"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The whale can't use its blindsight while [deafened](/rules/conditions.md#deafened)."
  "name": "Echolocation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The whale can hold its breath for 30 minutes."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The whale has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6\
    \ + 4) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "SKT"
- "GoS"
- "EGW"
- "MOT"
- "IDRotF"
"image": "[[Killer Whale.png]]"
```
^statblock

*Source: Monster Manual p. 331, Storm King's Thunder, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden*

## Environment

underwater