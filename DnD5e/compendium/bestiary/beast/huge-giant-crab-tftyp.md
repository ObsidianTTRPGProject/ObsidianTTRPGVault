---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/huge
- monster/type/beast
aliases: ["Huge Giant Crab"]
statblock: true
"name": "Huge Giant Crab"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "161"
"hit_dice": "14d12 + 70"
"stats":
- !!int "20"
- !!int "15"
- !!int "20"
- !!int "1"
- !!int "9"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "5"
"condition_immunities": "charmed, frightened, paralyzed"
"senses": "blindsight 30 ft., passive Perception 9"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "On one of its claws, the crab wears a rune-covered copper band that makes\
    \ it immune to being [charmed](/rules/conditions.md#charmed), [frightened](/rules/conditions.md#frightened),\
    \ and [paralyzed](/rules/conditions.md#paralyzed). The copper band is worthless\
    \ as a treasure, as the magic is keyed to this crab."
  "name": "Banded Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The crab can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 27 (4d10\
    \ + 5) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled),\
    \ escape DC 14. The crab has two claws, each of which can grapple only one target."
  "name": "Claw"
"source":
- "TftYP"
- "SLW"
name: Huge Giant Crab
image: "[[Huge Giant Crab.png]]"
---

# Huge Giant Crab

```statblock
"name": "Huge Giant Crab"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "161"
"hit_dice": "14d12 + 70"
"stats":
- !!int "20"
- !!int "15"
- !!int "20"
- !!int "1"
- !!int "9"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "5"
"condition_immunities": "charmed, frightened, paralyzed"
"senses": "blindsight 30 ft., passive Perception 9"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "On one of its claws, the crab wears a rune-covered copper band that makes\
    \ it immune to being [charmed](/rules/conditions.md#charmed), [frightened](/rules/conditions.md#frightened),\
    \ and [paralyzed](/rules/conditions.md#paralyzed). The copper band is worthless\
    \ as a treasure, as the magic is keyed to this crab."
  "name": "Banded Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The crab can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 27 (4d10\
    \ + 5) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled),\
    \ escape DC 14. The crab has two claws, each of which can grapple only one target."
  "name": "Claw"
"source":
- "TftYP"
- "SLW"
"image": "[[Huge Giant Crab.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 103, Storm Lord's Wrath*