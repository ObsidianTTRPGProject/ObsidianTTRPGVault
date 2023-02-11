---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/large
- monster/type/elemental
aliases: ["Animated Breath"]
statblock: true
"name": "Animated Breath"
"size": "Large"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"stats":
- !!int "19"
- !!int "11"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft., fly 30 ft. (hover)"
"condition_immunities": "exhaustion, paralyzed, petrified, poisoned, restrained, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands Draconic but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When created, the animated breath takes one of five forms, matching its\
    \ creator's breath weapon: Acid, Cold, Fire, Lightning, or Poison. This form determines\
    \ the creature's AC, damage resistance, traits, and attacks."
  "name": "Chromatic Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of the animated breath's turns, each creature within\
    \ 5 feet of it takes 3 (1d6) fire damage, and flammable objects in the aura that\
    \ aren't being worn or carried ignite. A creature that touches the animated breath\
    \ or hits it with a melee attack takes 3 (1d6) fire damage."
  "name": "Fire Aura (Fire Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that starts its turn within 5 feet of the animated breath must\
    \ succeed on a DC 15 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the start of its next turn. A creature that touches the animated breath\
    \ or hits it with a melee attack takes 3 (1d6) acid damage."
  "name": "Putrid Aura (Acid and Poison Forms Only)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The animated breath makes two Slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage plus 11 (2d10) damage of a type determined by the animated\
    \ breath's form: acid, cold, fire, lightning, or poison."
  "name": "Slam"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The animated breath magically teleports to an unoccupied space it can see\
    \ within 30 feet of it. Each creature within 5 feet of the animated breath after\
    \ it teleports takes 3 (1d6) lightning damage."
  "name": "Lightning Burst (Lightning Form Only)"
"source":
- "FTD"
name: Animated Breath
image: "[[Animated Breath.png]]"
---

# Animated Breath

```statblock
"name": "Animated Breath"
"size": "Large"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"stats":
- !!int "19"
- !!int "11"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft., fly 30 ft. (hover)"
"condition_immunities": "exhaustion, paralyzed, petrified, poisoned, restrained, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands Draconic but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When created, the animated breath takes one of five forms, matching its\
    \ creator's breath weapon: Acid, Cold, Fire, Lightning, or Poison. This form determines\
    \ the creature's AC, damage resistance, traits, and attacks."
  "name": "Chromatic Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of the animated breath's turns, each creature within\
    \ 5 feet of it takes 3 (1d6) fire damage, and flammable objects in the aura that\
    \ aren't being worn or carried ignite. A creature that touches the animated breath\
    \ or hits it with a melee attack takes 3 (1d6) fire damage."
  "name": "Fire Aura (Fire Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that starts its turn within 5 feet of the animated breath must\
    \ succeed on a DC 15 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the start of its next turn. A creature that touches the animated breath\
    \ or hits it with a melee attack takes 3 (1d6) acid damage."
  "name": "Putrid Aura (Acid and Poison Forms Only)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The animated breath makes two Slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage plus 11 (2d10) damage of a type determined by the animated\
    \ breath's form: acid, cold, fire, lightning, or poison."
  "name": "Slam"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The animated breath magically teleports to an unoccupied space it can see\
    \ within 30 feet of it. Each creature within 5 feet of the animated breath after\
    \ it teleports takes 3 (1d6) lightning damage."
  "name": "Lightning Burst (Lightning Form Only)"
"source":
- "FTD"
"image": "[[Animated Breath.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 163*

## Description

A chromatic dragon's breath weapon is a manifestation of the energy that suffuses the dragon. With sufficient practice, dragons can learn to draw on magic from the Elemental Planes to shape their breath weapons into bipedal form, creating Elemental creatures called animated breaths. Chromatic dragons often use these creatures as guardians for their hoards or send them out to gather treasure from the territory around their lairs.

An animated breath is a bipedal creature formed from the same energy as the breath weapon of the dragon that created it. A red dragon's creation strongly resembles a fire elemental, while a black dragon's is similar to a water elemental, but viscous and foul-looking. A green dragon's animated poison breath looks like billowing clouds of green gas, while a white dragon's animated cold breath looks like a walking ice sculpture with frigid air whirling around it. A blue dragon's animated lightning breath is a constantly shifting form of crackling lightning, and it can suddenly vanish from one place to reappear in another, striking like a bolt from the blue.