---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/humanoid/tabaxi
aliases: ["River Mist"]
statblock: true
"name": "River Mist"
"size": "Medium"
"type": "humanoid"
"subtype": "tabaxi"
"alignment": "Chaotic Good"
"ac": !!int "14"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "13"
- !!int "14"
- !!int "15"
"speed": "walk 30 ft., climb 20 ft."
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "6"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common plus any one language"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When River Mist moves on its turn in combat, it can double its speed until\
    \ the end of the turn. Once it uses this ability, River Mist can't use it again\
    \ until it moves 0 feet on one of its turns."
  "name": "Feline Agility"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "River Mist makes two attacks with its claws, its shortsword, or its shortbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage."
  "name": "Shortbow"
"source":
- "ToA"
name: River Mist
image: "[[River Mist.png]]"
---

# River Mist

```statblock
"name": "River Mist"
"size": "Medium"
"type": "humanoid"
"subtype": "tabaxi"
"alignment": "Chaotic Good"
"ac": !!int "14"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "13"
- !!int "14"
- !!int "15"
"speed": "walk 30 ft., climb 20 ft."
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "6"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common plus any one language"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When River Mist moves on its turn in combat, it can double its speed until\
    \ the end of the turn. Once it uses this ability, River Mist can't use it again\
    \ until it moves 0 feet on one of its turns."
  "name": "Feline Agility"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "River Mist makes two attacks with its claws, its shortsword, or its shortbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage."
  "name": "Shortbow"
"source":
- "ToA"
"image": "[[River Mist.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 35*