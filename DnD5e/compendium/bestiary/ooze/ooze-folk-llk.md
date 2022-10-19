---
cssclass: json5e-monster
tags:
- compendium/src/llk
- monster/size/medium
- monster/type/ooze
aliases: ["Ooze-Folk"]
statblock: true
"name": "Ooze-Folk"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "19"
"hit_dice": "2d8 + 10"
"stats":
- !!int "14"
- !!int "3"
- !!int "20"
- !!int "1"
- !!int "6"
- !!int "1"
"speed": "walk 30 ft."
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, prone"
"senses": "blindsight 60 ft., passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Even when an ooze-folk is in plain sight, it takes a DC 12 Wisdom ([Perception](/rules/skills.md#Perception))\
    \ check to spot an ooze-folk that has neither moved nor attacked. A creature that\
    \ tries to enter the ooze-folk's space while unaware of the ooze-folk is surprised\
    \ by the ooze-folk."
  "name": "Transparent"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For each 5 damage it takes, the ooze-folk's walking speed is reduced by\
    \ 5 feet."
  "name": "Fragile Bones"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ooze folk makes one glass longsword attack and one pseudopod attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8\
    \ + 2) slashing damage. If a 1 is rolled on an attack roll with a glass longsword,\
    \ it shatters and can no longer be used."
  "name": "Glass Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) acid damage. "
  "name": "Pseudopod"
"source":
- "LLK"
name: Ooze-Folk
image: "[[Ooze-Folk.png]]"
---

# Ooze-Folk

```statblock
"name": "Ooze-Folk"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "19"
"hit_dice": "2d8 + 10"
"stats":
- !!int "14"
- !!int "3"
- !!int "20"
- !!int "1"
- !!int "6"
- !!int "1"
"speed": "walk 30 ft."
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, prone"
"senses": "blindsight 60 ft., passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Even when an ooze-folk is in plain sight, it takes a DC 12 Wisdom ([Perception](/rules/skills.md#Perception))\
    \ check to spot an ooze-folk that has neither moved nor attacked. A creature that\
    \ tries to enter the ooze-folk's space while unaware of the ooze-folk is surprised\
    \ by the ooze-folk."
  "name": "Transparent"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For each 5 damage it takes, the ooze-folk's walking speed is reduced by\
    \ 5 feet."
  "name": "Fragile Bones"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ooze folk makes one glass longsword attack and one pseudopod attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8\
    \ + 2) slashing damage. If a 1 is rolled on an attack roll with a glass longsword,\
    \ it shatters and can no longer be used."
  "name": "Glass Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) acid damage. "
  "name": "Pseudopod"
"source":
- "LLK"
"image": "[[Ooze-Folk.png]]"
```
^statblock

*Source: Lost Laboratory of Kwalish p. 46*