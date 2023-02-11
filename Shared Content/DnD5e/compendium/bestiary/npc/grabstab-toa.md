---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/small
- monster/type/humanoid/goblinoid
- monster/environment/underdark
- monster/environment/grassland
- monster/environment/forest
- monster/environment/hill
aliases: ["Grabstab"]
statblock: true
"name": "Grabstab"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "21"
"hit_dice": "6d6"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "8"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "6"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Goblin"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Grabstab can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Grabstab makes two attacks with its scimitar. The second attack has disadvantage."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 3 (1d6) piercing damage."
  "name": "Javelin"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature Grabstab can see targets it with an attack, Grabstab chooses\
    \ another goblin within 5 feet of it. The two goblins swap places, and the chosen\
    \ goblin becomes the target instead."
  "name": "Redirect Attack"
"source":
- "ToA"
name: Grabstab
image: "[[Grabstab.png]]"
---

# Grabstab

```statblock
"name": "Grabstab"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "21"
"hit_dice": "6d6"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "8"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "6"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Goblin"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Grabstab can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Grabstab makes two attacks with its scimitar. The second attack has disadvantage."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 3 (1d6) piercing damage."
  "name": "Javelin"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature Grabstab can see targets it with an attack, Grabstab chooses\
    \ another goblin within 5 feet of it. The two goblins swap places, and the chosen\
    \ goblin becomes the target instead."
  "name": "Redirect Attack"
"source":
- "ToA"
"image": "[[Grabstab.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 89*

## Environment

underdark, grassland, forest, hill