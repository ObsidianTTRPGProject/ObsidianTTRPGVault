---
cssclass: json5e-monster
tags:
- compendium/src/kkw
- monster/size/small
- monster/type/humanoid/goblinoid
aliases: ["Krenko"]
statblock: true
"name": "Krenko"
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
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "6"
  "Persuasion": !!int "4"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Goblin"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Krenko can take the Disengage or Hide action as a bonus action on each\
    \ of his turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Krenko makes two attacks with his scimitar."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage plus 2 (1d4) poison damage.."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d8 + 2) piercing damage."
  "name": "Light Crossbow"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature Krenko can see targets him with an attack, Krenko chooses\
    \ another goblin within 5 feet of him. The two goblins swap places, and the chosen\
    \ goblin becomes the target instead."
  "name": "Redirect Attack"
"source":
- "KKW"
name: Krenko
image: "[[Krenko.png]]"
---

# Krenko

```statblock
"name": "Krenko"
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
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "6"
  "Persuasion": !!int "4"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Goblin"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Krenko can take the Disengage or Hide action as a bonus action on each\
    \ of his turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Krenko makes two attacks with his scimitar."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage plus 2 (1d4) poison damage.."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d8 + 2) piercing damage."
  "name": "Light Crossbow"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature Krenko can see targets him with an attack, Krenko chooses\
    \ another goblin within 5 feet of him. The two goblins swap places, and the chosen\
    \ goblin becomes the target instead."
  "name": "Redirect Attack"
"source":
- "KKW"
"image": "[[Krenko.png]]"
```
^statblock

*Source: Krenko's Way p. 168*