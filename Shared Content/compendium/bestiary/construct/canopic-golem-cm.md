---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/large
- monster/type/construct
aliases: ["Canopic Golem"]
statblock: true
"name": "Canopic Golem"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "252"
"hit_dice": "24d10 + 120"
"stats":
- !!int "20"
- !!int "10"
- !!int "20"
- !!int "7"
- !!int "11"
- !!int "1"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "0"
  "Wisdom": !!int "5"
  "Intelligence": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": ""
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem automatically succeeds on saving throws against spells of 7th\
    \ level or lower, and the attack rolls of such spells always miss it."
  "name": "Limited Spell Immunity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 27 (4d10\
    \ + 5) force damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +10 to hit, range 120 ft., one target. Hit: 14\
    \ (2d8 + 5) force damage."
  "name": "Crystal Dart"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to a spell attack missing the golem, it causes that spell to\
    \ hit another creature within 120 feet of it that it can see."
  "name": "Spell Deflection"
"source":
- "CM"
name: Canopic Golem
image: "[[Canopic Golem.png]]"
---

# Canopic Golem

```statblock
"name": "Canopic Golem"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "252"
"hit_dice": "24d10 + 120"
"stats":
- !!int "20"
- !!int "10"
- !!int "20"
- !!int "7"
- !!int "11"
- !!int "1"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "0"
  "Wisdom": !!int "5"
  "Intelligence": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": ""
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem automatically succeeds on saving throws against spells of 7th\
    \ level or lower, and the attack rolls of such spells always miss it."
  "name": "Limited Spell Immunity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 27 (4d10\
    \ + 5) force damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +10 to hit, range 120 ft., one target. Hit: 14\
    \ (2d8 + 5) force damage."
  "name": "Crystal Dart"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to a spell attack missing the golem, it causes that spell to\
    \ hit another creature within 120 feet of it that it can see."
  "name": "Spell Deflection"
"source":
- "CM"
"image": "[[Canopic Golem.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 179*

## Description

A mummy lord's organs, normally stored in sacred canopic jars during mummification, can be magically preserved and transplanted into living humanoids. The transplant recipients come under the control of the mummy lord, either as living supplicants or mindless golems through which the mummy lord can see and speak.