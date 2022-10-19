---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/construct
aliases: ["Tomb Guardian"]
statblock: true
"name": "Tomb Guardian"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"stats":
- !!int "19"
- !!int "9"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"damage_immunities": "lightning; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the tomb guardian starts its turn with 40 hit points or fewer,\
    \ roll a d6. On a 6, the tomb guardian goes berserk. On each of its turns while\
    \ berserk, the tomb guardian attacks the nearest creature it can see. If no creature\
    \ is near enough to move to and attack, the tomb guardian attacks an object, with\
    \ preference for an object smaller than itself. Once the tomb guardian goes berserk,\
    \ it continues to do so until it is destroyed or regains all its hit points. The\
    \ golem's creator, if within 60 feet of the berserk tomb guardian, can try to\
    \ calm it by speaking firmly and persuasively. The tomb guardian must be able\
    \ to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion)\
    \ check. If the check succeeds, the tomb guardian ceases being berserk. If it\
    \ takes damage while still at 40 hit points or fewer, the tomb guardian might\
    \ go berserk again."
  "name": "Berserk"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the tomb guardian takes fire damage, it has disadvantage on attack rolls\
    \ and ability checks until the end of its next turn."
  "name": "Aversion of Fire"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb guardian is immune to any spell or effect that would alter its\
    \ form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the tomb guardian is subjected to lightning damage, it takes no\
    \ damage and instead regains a number of hit points equal to the lightning damage\
    \ dealt."
  "name": "Lightning Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb guardian has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb guardian makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "ToA"
name: Tomb Guardian
image: "[[Tomb Guardian.png]]"
---

# Tomb Guardian

```statblock
"name": "Tomb Guardian"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"stats":
- !!int "19"
- !!int "9"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"damage_immunities": "lightning; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the tomb guardian starts its turn with 40 hit points or fewer,\
    \ roll a d6. On a 6, the tomb guardian goes berserk. On each of its turns while\
    \ berserk, the tomb guardian attacks the nearest creature it can see. If no creature\
    \ is near enough to move to and attack, the tomb guardian attacks an object, with\
    \ preference for an object smaller than itself. Once the tomb guardian goes berserk,\
    \ it continues to do so until it is destroyed or regains all its hit points. The\
    \ golem's creator, if within 60 feet of the berserk tomb guardian, can try to\
    \ calm it by speaking firmly and persuasively. The tomb guardian must be able\
    \ to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion)\
    \ check. If the check succeeds, the tomb guardian ceases being berserk. If it\
    \ takes damage while still at 40 hit points or fewer, the tomb guardian might\
    \ go berserk again."
  "name": "Berserk"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the tomb guardian takes fire damage, it has disadvantage on attack rolls\
    \ and ability checks until the end of its next turn."
  "name": "Aversion of Fire"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb guardian is immune to any spell or effect that would alter its\
    \ form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the tomb guardian is subjected to lightning damage, it takes no\
    \ damage and instead regains a number of hit points equal to the lightning damage\
    \ dealt."
  "name": "Lightning Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb guardian has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb guardian makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "ToA"
"image": "[[Tomb Guardian.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 127*

## Description

Adventurers who have perished inside the tomb are stitched together by tomb dwarves and bolted into suits of armor. Once complete, these shambling golems are released into the tomb to hunt intruders.

A tomb guardian is a flesh golem clad in plate armor, giving it AC 17