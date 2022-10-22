---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/medium
- monster/type/humanoid/aarakocra
aliases: ["Aarakocra Simulacrum"]
statblock: true
"name": "Aarakocra Simulacrum"
"size": "Medium"
"type": "humanoid"
"subtype": "aarakocra"
"alignment": "Neutral Good"
"ac": !!int "12"
"hp": !!int "6"
"hit_dice": "3d4"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "12"
- !!int "11"
"speed": "walk 20 ft., fly 50 ft."
"skillsaves":
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": "Auran, Aarakocra"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the aarakocra is flying and dives at least 30 feet straight toward a\
    \ target and then hits it with a melee weapon attack, the attack deals an extra\
    \ 3 (1d6) damage to the target."
  "name": "Dive Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a simulacrum drops to 0 hit points or is subjected to a successful\
    \ [dispel magic](/compendium/spells/dispel-magic.md) spell (DC 17), it reverts\
    \ to ice and snow and is destroyed."
  "name": "Simulacra"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Talon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage."
  "name": "Javelin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Five aarakocra within 30 feet of each other can magically summon an air\
    \ elemental. Each of the five must use its action and movement on three consecutive\
    \ turns to perform an aerial dance and must maintain concentration while doing\
    \ so (as if concentrating on a spell). When all five have finished their third\
    \ turn of the dance, the elemental appears in an unoccupied space within 60 feet\
    \ of them. It is friendly toward them and obeys their spoken commands. It remains\
    \ for 1 hour, until it or all its summoners die, or until any of its summoners\
    \ dismisses it as a bonus action. A summoner can't perform the dance again until\
    \ it finishes a short rest. When the elemental returns to the Elemental Plane\
    \ of Air, any aarakocra within 5 feet of it can return with it."
  "name": "Summon Air Elemental"
"source":
- "SKT"
name: Aarakocra Simulacrum
image: "[[Aarakocra Simulacrum.png]]"
---

# Aarakocra Simulacrum

```statblock
"name": "Aarakocra Simulacrum"
"size": "Medium"
"type": "humanoid"
"subtype": "aarakocra"
"alignment": "Neutral Good"
"ac": !!int "12"
"hp": !!int "6"
"hit_dice": "3d4"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "12"
- !!int "11"
"speed": "walk 20 ft., fly 50 ft."
"skillsaves":
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": "Auran, Aarakocra"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the aarakocra is flying and dives at least 30 feet straight toward a\
    \ target and then hits it with a melee weapon attack, the attack deals an extra\
    \ 3 (1d6) damage to the target."
  "name": "Dive Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a simulacrum drops to 0 hit points or is subjected to a successful\
    \ [dispel magic](/compendium/spells/dispel-magic.md) spell (DC 17), it reverts\
    \ to ice and snow and is destroyed."
  "name": "Simulacra"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Talon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage."
  "name": "Javelin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Five aarakocra within 30 feet of each other can magically summon an air\
    \ elemental. Each of the five must use its action and movement on three consecutive\
    \ turns to perform an aerial dance and must maintain concentration while doing\
    \ so (as if concentrating on a spell). When all five have finished their third\
    \ turn of the dance, the elemental appears in an unoccupied space within 60 feet\
    \ of them. It is friendly toward them and obeys their spoken commands. It remains\
    \ for 1 hour, until it or all its summoners die, or until any of its summoners\
    \ dismisses it as a bonus action. A summoner can't perform the dance again until\
    \ it finishes a short rest. When the elemental returns to the Elemental Plane\
    \ of Air, any aarakocra within 5 feet of it can return with it."
  "name": "Summon Air Elemental"
"source":
- "SKT"
"image": "[[Aarakocra Simulacrum.png]]"
```
^statblock

*Source: Storm King's Thunder p. 188*