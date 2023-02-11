---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/huge
- monster/type/giant
- monster/environment/hill
aliases: ["Fire Giant Servant"]
statblock: true
"name": "Fire Giant Servant"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "105"
"hit_dice": "10d12 + 40"
"stats":
- !!int "21"
- !!int "8"
- !!int "19"
- !!int "5"
- !!int "9"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "2"
"damage_immunities": "fire"
"senses": "passive Perception 12"
"languages": "Giant"
"cr": "5"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two longsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8\
    \ + 5) slashing damage, or 21 (3d10 + 5) slashing damage if used with both hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21\
    \ (3d10 + 5) bludgeoning damage."
  "name": "Rock"
"source":
- "TftYP"
name: Fire Giant Servant
image: "[[Fire Giant Servant.png]]"
---

# Fire Giant Servant

```statblock
"name": "Fire Giant Servant"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "105"
"hit_dice": "10d12 + 40"
"stats":
- !!int "21"
- !!int "8"
- !!int "19"
- !!int "5"
- !!int "9"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "2"
"damage_immunities": "fire"
"senses": "passive Perception 12"
"languages": "Giant"
"cr": "5"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two longsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8\
    \ + 5) slashing damage, or 21 (3d10 + 5) slashing damage if used with both hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21\
    \ (3d10 + 5) bludgeoning damage."
  "name": "Rock"
"source":
- "TftYP"
"image": "[[Fire Giant Servant.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 171*

## Environment

hill