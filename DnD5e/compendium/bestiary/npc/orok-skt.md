---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/small
- monster/type/humanoid/human
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
- monster/environment/urban
- monster/environment/desert
- monster/environment/coastal
- monster/environment/arctic
- monster/environment/mountain
- monster/environment/underdark
aliases: ["Orok"]
statblock: true
"name": "Orok"
"size": "Small"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "5"
"hit_dice": "2d6 - 2"
"stats":
- !!int "7"
- !!int "15"
- !!int "9"
- !!int "8"
- !!int "7"
- !!int "8"
"speed": "walk 30 ft."
"senses": "passive Perception 8"
"languages": "Bothii, Common"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Orok has advantage on an attack roll against a creature if at least one\
    \ of Orok's allies is within 5 feet of the creature and the ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4\
    \ (1d4 + 2) bludgeoning damage."
  "name": "Sling"
"source":
- "SKT"
name: Orok
image: "[[Orok.png]]"
---

# Orok

```statblock
"name": "Orok"
"size": "Small"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "5"
"hit_dice": "2d6 - 2"
"stats":
- !!int "7"
- !!int "15"
- !!int "9"
- !!int "8"
- !!int "7"
- !!int "8"
"speed": "walk 30 ft."
"senses": "passive Perception 8"
"languages": "Bothii, Common"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Orok has advantage on an attack roll against a creature if at least one\
    \ of Orok's allies is within 5 feet of the creature and the ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4\
    \ (1d4 + 2) bludgeoning damage."
  "name": "Sling"
"source":
- "SKT"
"image": "[[Orok.png]]"
```
^statblock

*Source: Storm King's Thunder p. 115*

## Environment

forest, swamp, hill, urban, desert, coastal, arctic, mountain, underdark