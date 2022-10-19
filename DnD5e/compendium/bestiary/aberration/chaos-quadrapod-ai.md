---
cssclass: json5e-monster
tags:
- compendium/src/ai
- monster/size/large
- monster/type/aberration
aliases: ["Chaos Quadrapod"]
statblock: true
"name": "Chaos Quadrapod"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"stats":
- !!int "18"
- !!int "13"
- !!int "15"
- !!int "6"
- !!int "10"
- !!int "4"
"speed": "walk 40 ft., climb 40 ft."
"skillsaves":
  "Perception": !!int "4"
  "Acrobatics": !!int "5"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 14"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chaos quadrapod has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chaos quadrapod makes up to two tentacle attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 15 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ The chaos quadrapod can grapple no more than two targets at a time."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chaos quadrapod shoots forth a knot of roiling ethereal light that\
    \ explodes at a point it can see within 60 feet of it. Each creature in a 20-foot-radius\
    \ sphere centered on that point must succeed on a DC 14 Charisma saving throw\
    \ or be [stunned](/rules/conditions.md#stunned) until the end of its next turn."
  "name": "Chaos Cloud (Recharges after a Short or Long Rest)"
"source":
- "AI"
name: Chaos Quadrapod
image: "[[Chaos Quadrapod.png]]"
---

# Chaos Quadrapod

```statblock
"name": "Chaos Quadrapod"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"stats":
- !!int "18"
- !!int "13"
- !!int "15"
- !!int "6"
- !!int "10"
- !!int "4"
"speed": "walk 40 ft., climb 40 ft."
"skillsaves":
  "Perception": !!int "4"
  "Acrobatics": !!int "5"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 14"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chaos quadrapod has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chaos quadrapod makes up to two tentacle attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 15 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ The chaos quadrapod can grapple no more than two targets at a time."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chaos quadrapod shoots forth a knot of roiling ethereal light that\
    \ explodes at a point it can see within 60 feet of it. Each creature in a 20-foot-radius\
    \ sphere centered on that point must succeed on a DC 14 Charisma saving throw\
    \ or be [stunned](/rules/conditions.md#stunned) until the end of its next turn."
  "name": "Chaos Cloud (Recharges after a Short or Long Rest)"
"source":
- "AI"
"image": "[[Chaos Quadrapod.png]]"
```
^statblock

*Source: Acquisitions Incorporated p. 209*

## Description

A cluster of four suckered tentacles with a pulsing mass of ethereal light as its central body, the chaos quadrapod is a creature of the Far Realm, and it channels the anarchic power of that plane as it destroys all in its path. The quadrapod ambulates by flinging its mucus-covered tentacles out and dragging itself along, creating a horrid slurping sound as it advances relentlessly toward its prey.