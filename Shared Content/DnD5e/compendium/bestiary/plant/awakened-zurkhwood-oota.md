---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/huge
- monster/type/plant
aliases: ["Awakened Zurkhwood"]
statblock: true
"name": "Awakened Zurkhwood"
"size": "Huge"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "59"
"hit_dice": "7d12 + 14"
"stats":
- !!int "19"
- !!int "6"
- !!int "15"
- !!int "10"
- !!int "10"
- !!int "7"
"speed": "walk 20 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "one language known by its creator"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the tree remains motionless, it is indistinguishable from a normal\
    \ zurkhwood mushroom."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the awakened zurkhwood was created by a myconid sovereign, it can't\
    \ speak."
  "name": "Mute"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6\
    \ + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "OotA"
name: Awakened Zurkhwood
image: "[[Awakened Zurkhwood.png]]"
---

# Awakened Zurkhwood

```statblock
"name": "Awakened Zurkhwood"
"size": "Huge"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "59"
"hit_dice": "7d12 + 14"
"stats":
- !!int "19"
- !!int "6"
- !!int "15"
- !!int "10"
- !!int "10"
- !!int "7"
"speed": "walk 20 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "one language known by its creator"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the tree remains motionless, it is indistinguishable from a normal\
    \ zurkhwood mushroom."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the awakened zurkhwood was created by a myconid sovereign, it can't\
    \ speak."
  "name": "Mute"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6\
    \ + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "OotA"
"image": "[[Awakened Zurkhwood.png]]"
```
^statblock

*Source: Out of the Abyss p. 230*

## Description

This creature is an ordinary zurkhwood mushroom (see "Fungi of the Underdark" in chapter 2) given sentience and mobility. An awakened zurkhwood can be created by casting the [awaken](/compendium/spells/awaken.md) spell on a normal zurkhwood mushroom. A myconid sovereign can create one by performing a lengthy ritual.

An awakened zurkhwood has the same statistics as an awakened tree (see appendix A of the Monster Manual), with the following modifications:

- The awakened zurkhwood has [darkvision](/rules/senses.md#darkvision) out to a range of 120 feet.
- If the awakened zurkhwood was created by a myconid sovereign, it can't speak.
- The awakened zurkhwood's False Appearance feature allows it to be mistaken for a normal zurkhwood mushroom (instead of a tree).