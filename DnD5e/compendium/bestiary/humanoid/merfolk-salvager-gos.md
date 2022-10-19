---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/medium
- monster/type/humanoid/merfolk
aliases: ["Merfolk Salvager"]
statblock: true
"name": "Merfolk Salvager"
"size": "Medium"
"type": "humanoid"
"subtype": "merfolk"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "10"
- !!int "13"
"speed": "walk 10 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Athletics": !!int "3"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Aquan, Common"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The salvager can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The salvager makes two attacks with its coral rapier."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing\
    \ damage."
  "name": "Coral Rapier"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing\
    \ damage, and the creature must succeed on a DC 12 Constitution saving throw or\
    \ be [paralyzed](/rules/conditions.md#paralyzed) until the end of its next turn."
  "name": "Inject Toxin (2/Day)"
"source":
- "GoS"
name: Merfolk Salvager
image: "[[Merfolk Salvager.png]]"
---

# Merfolk Salvager

```statblock
"name": "Merfolk Salvager"
"size": "Medium"
"type": "humanoid"
"subtype": "merfolk"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "10"
- !!int "13"
"speed": "walk 10 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Athletics": !!int "3"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Aquan, Common"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The salvager can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The salvager makes two attacks with its coral rapier."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing\
    \ damage."
  "name": "Coral Rapier"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing\
    \ damage, and the creature must succeed on a DC 12 Constitution saving throw or\
    \ be [paralyzed](/rules/conditions.md#paralyzed) until the end of its next turn."
  "name": "Inject Toxin (2/Day)"
"source":
- "GoS"
"image": "[[Merfolk Salvager.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 244*

## Description

Veterans of scouring the wrecks and ruins found in the deepest waters, these skilled warriors help defend their kin with rapier-like weapons of living coral. The salvagers escort other merfolk on scavenging missions, using their keen senses to detect danger. They are found allying with the lizardfolk in Danger at Dunwater.