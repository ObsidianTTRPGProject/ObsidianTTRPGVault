---
cssclass: json5e-monster
tags:
- compendium/src/jttrc
- monster/size/tiny
- monster/type/fey
aliases: ["Wynling"]
statblock: true
"name": "Wynling"
"size": "Tiny"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "21"
"hit_dice": "6d4 + 6"
"stats":
- !!int "3"
- !!int "20"
- !!int "13"
- !!int "10"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft., fly 40 ft."
"skillsaves":
  "Sleight of Hand": !!int "7"
  "Stealth": !!int "7"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Sylvan"
"cr": "1/2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d4\
    \ + 5) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wynling magically turns [invisible](/rules/conditions.md#invisible),\
    \ along with any equipment it is wearing or carrying, for 1 minute or until it\
    \ makes an attack roll."
  "name": "Cloak of the Mountain (Recharge 4-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Immediately after a creature the wynling can see misses the wynling with\
    \ an attack roll, the wynling can move up to 30 feet. This movement doesn't provoke\
    \ opportunity attacks."
  "name": "Trickster's Flight"
"source":
- "JttRC"
name: Wynling
image: "[[Wynling.png]]"
---

# Wynling

```statblock
"name": "Wynling"
"size": "Tiny"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "21"
"hit_dice": "6d4 + 6"
"stats":
- !!int "3"
- !!int "20"
- !!int "13"
- !!int "10"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft., fly 40 ft."
"skillsaves":
  "Sleight of Hand": !!int "7"
  "Stealth": !!int "7"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Sylvan"
"cr": "1/2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d4\
    \ + 5) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wynling magically turns [invisible](/rules/conditions.md#invisible),\
    \ along with any equipment it is wearing or carrying, for 1 minute or until it\
    \ makes an attack roll."
  "name": "Cloak of the Mountain (Recharge 4-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Immediately after a creature the wynling can see misses the wynling with\
    \ an attack roll, the wynling can move up to 30 feet. This movement doesn't provoke\
    \ opportunity attacks."
  "name": "Trickster's Flight"
"source":
- "JttRC"
"image": "[[Wynling.png]]"
```
^statblock

*Source: Journeys through the Radiant Citadel p. 33*

## Description

Playful and mischievous, wynlings defend mountain heights and alpine vales against trespassers. A wynling rarely engages a threat directly, preferring to deter intruders by harassing them with thefts and pranks. Many travelers return from lands protected by wynlings with stories of vanishing equipment and curious eyes staring from the shadows.

Wynlings typically live on the mountains they protect, but they often venture into nearby settlements, lured by high-spirited music and sweet foods. Away from their open, wild homes, wynlings cause all manner of mysterious accidents.