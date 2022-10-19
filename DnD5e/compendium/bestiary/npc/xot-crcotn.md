---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/medium
- monster/type/humanoid/goliath
aliases: ["Xot"]
statblock: true
"name": "Xot"
"size": "Medium"
"type": "humanoid"
"subtype": "goliath"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Intelligence": !!int "4"
  "Constitution": !!int "5"
"skillsaves":
  "Athletics": !!int "4"
  "History": !!int "4"
  "Arcana": !!int "4"
"damage_resistances": "cold"
"senses": "passive Perception 12"
"languages": "Common plus two other languages, Giant"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Scribble deals double damage to objects and structures."
  "name": "Siege Expert"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xot counts as one size larger when determining their carrying capacity\
    \ and the weight they can push, drag, or lift."
  "name": "Powerful Build"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Scribble makes three Thunderous Warhammer attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) thunder damage."
  "name": "Thunderous Warhammer"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Scribble targets one Medium or smaller creature or an object weighing 300\
    \ pounds or less that isn't being worn or carried. The target, which must be within\
    \ 30 feet of Scribble and visible to it, is magically pushed up to 20 feet horizontally\
    \ in a direction of Scribble's choice. If the target is a creature, it can make\
    \ a DC 13 Strength saving throw to resist the effect and is not pushed on a successful\
    \ save."
  "name": "Telekinetic Toss (Recharge 5-6)"
"source":
- "CRCotN"
name: Xot
image: "[[Xot.png]]"
---

# Xot

```statblock
"name": "Xot"
"size": "Medium"
"type": "humanoid"
"subtype": "goliath"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Intelligence": !!int "4"
  "Constitution": !!int "5"
"skillsaves":
  "Athletics": !!int "4"
  "History": !!int "4"
  "Arcana": !!int "4"
"damage_resistances": "cold"
"senses": "passive Perception 12"
"languages": "Common plus two other languages, Giant"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Scribble deals double damage to objects and structures."
  "name": "Siege Expert"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xot counts as one size larger when determining their carrying capacity\
    \ and the weight they can push, drag, or lift."
  "name": "Powerful Build"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Scribble makes three Thunderous Warhammer attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) thunder damage."
  "name": "Thunderous Warhammer"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Scribble targets one Medium or smaller creature or an object weighing 300\
    \ pounds or less that isn't being worn or carried. The target, which must be within\
    \ 30 feet of Scribble and visible to it, is magically pushed up to 20 feet horizontally\
    \ in a direction of Scribble's choice. If the target is a creature, it can make\
    \ a DC 13 Strength saving throw to resist the effect and is not pushed on a successful\
    \ save."
  "name": "Telekinetic Toss (Recharge 5-6)"
"source":
- "CRCotN"
"image": "[[Xot.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 206*