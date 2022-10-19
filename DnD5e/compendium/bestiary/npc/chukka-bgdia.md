---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/medium
- monster/type/humanoid/kenku
- monster/environment/forest
- monster/environment/urban
aliases: ["Chukka"]
statblock: true
"name": "Chukka"
"size": "Medium"
"type": "humanoid"
"subtype": "kenku"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "11"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "5"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "understands Auran and Common but speaks only through the use of its\
  \ Mimicry trait"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In the first round of a combat, Chukka has advantage on attack rolls against\
    \ any creature it surprised."
  "name": "Ambusher"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Chukka can mimic any sounds it has heard, including voices. A creature\
    \ that hears the sounds can tell they are imitations with a successful DC 14 Wisdom\
    \ (Insight) check."
  "name": "Mimicry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (1d10)\
    \ piercing damage."
  "name": "Silvered Pike"
"source":
- "BGDIA"
name: Chukka
image: "[[Chukka.png]]"
---

# Chukka

```statblock
"name": "Chukka"
"size": "Medium"
"type": "humanoid"
"subtype": "kenku"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "11"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "5"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "understands Auran and Common but speaks only through the use of its\
  \ Mimicry trait"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In the first round of a combat, Chukka has advantage on attack rolls against\
    \ any creature it surprised."
  "name": "Ambusher"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Chukka can mimic any sounds it has heard, including voices. A creature\
    \ that hears the sounds can tell they are imitations with a successful DC 14 Wisdom\
    \ (Insight) check."
  "name": "Mimicry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (1d10)\
    \ piercing damage."
  "name": "Silvered Pike"
"source":
- "BGDIA"
"image": "[[Chukka.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 83*

## Environment

forest, urban