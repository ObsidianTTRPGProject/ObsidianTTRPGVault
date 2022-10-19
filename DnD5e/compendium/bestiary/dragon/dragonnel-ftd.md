---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/large
- monster/type/dragon
aliases: ["Dragonnel"]
statblock: true
"name": "Dragonnel"
"size": "Large"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "58"
"hit_dice": "9d10 + 9"
"stats":
- !!int "16"
- !!int "15"
- !!int "12"
- !!int "8"
- !!int "13"
- !!int "10"
"speed": "walk 30 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 13"
"languages": "understands Draconic and Common but can't speak"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonnel doesn't provoke an opportunity attack when it flies out of\
    \ an enemy's reach."
  "name": "Flyby"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonnel makes two Rend attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Rend"
"source":
- "FTD"
name: Dragonnel
image: "[[Dragonnel.png]]"
---

# Dragonnel

```statblock
"name": "Dragonnel"
"size": "Large"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "58"
"hit_dice": "9d10 + 9"
"stats":
- !!int "16"
- !!int "15"
- !!int "12"
- !!int "8"
- !!int "13"
- !!int "10"
"speed": "walk 30 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 13"
"languages": "understands Draconic and Common but can't speak"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonnel doesn't provoke an opportunity attack when it flies out of\
    \ an enemy's reach."
  "name": "Flyby"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonnel makes two Rend attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Rend"
"source":
- "FTD"
"image": "[[Dragonnel.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 190*

## Description

Dragonnels are distantly related to chromatic, gem, and metallic dragons and resemble them in basic form. Intelligent enough to understand speech but incapable of speaking themselves, they are willful creatures motivated by the desire for food and entertainment. In the wild, they are picky eaters with mercurial moods, inclined to toy with their prey before going in for the kill.

In some regions, dragonnels are raised from eggs to be used as aerial mounts. These domesticated dragonnels are loyal to the point of being overly protective of their riders. However, efforts to break wild dragonnels to the saddle are perilous, as these creatures often feign compliance before throwing their would-be riders from great heights.

A dragonnel is an agile mount and naturally inclined to flyby tactics, swooping in to make attacks with its beak and claws before flying out of reach.

> [!quote] Dragonnel Steeds
> 
> With the DM's permission, a paladin can summon a spirit in the form of a dragonnel using the [find greater steed](/compendium/spells/find-greater-steed-xge.md) spell, which appears in "Xanathar's Guide to Everything".
^dragonnel-steeds