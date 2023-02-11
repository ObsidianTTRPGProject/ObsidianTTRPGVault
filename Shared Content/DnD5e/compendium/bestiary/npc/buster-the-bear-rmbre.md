---
cssclass: json5e-monster
tags:
- compendium/src/rmbre
- monster/size/medium
- monster/type/construct
aliases: ["Buster the Bear"]
statblock: true
"name": "Buster the Bear"
"size": "Medium"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "15"
- !!int "14"
- !!int "13"
- !!int "8"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Survival": !!int "2"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Buster the Bear surprises a creature and hits it with an attack during\
    \ the first round of combat, the target takes an extra 7 (2d6) damage from the\
    \ attack."
  "name": "Surprise Attack"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) bludgeoning damage."
  "name": "Bashin' Banjo"
"source":
- "RMBRE"
name: Buster the Bear
image: "[[Buster the Bear.png]]"
---

# Buster the Bear

```statblock
"name": "Buster the Bear"
"size": "Medium"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "15"
- !!int "14"
- !!int "13"
- !!int "8"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Survival": !!int "2"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Buster the Bear surprises a creature and hits it with an attack during\
    \ the first round of combat, the target takes an extra 7 (2d6) damage from the\
    \ attack."
  "name": "Surprise Attack"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) bludgeoning damage."
  "name": "Bashin' Banjo"
"source":
- "RMBRE"
"image": "[[Buster the Bear.png]]"
```
^statblock

*Source: The Lost Dungeon of Rickedness: Big Rick Energy p. 27*

## Description

Buster the Bear is a lovable, roly-poly teddy bear with a plaid shirt, torn jeans, and a banjo.

The five automatons that serve as the tavern's wait staff each have a name tag, are super friendly to the patrons, and attend to everyone's needs until it comes time for the Slaughterfest. If an automaton is attacked before the Slaughterfest, it giggles and repeats folksy homilies until it is destroyed. The next round, it magically pops back to life fully healed, then asks, "What can I do for ya?"