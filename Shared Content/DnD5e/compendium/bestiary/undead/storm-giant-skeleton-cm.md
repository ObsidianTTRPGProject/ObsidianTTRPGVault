---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/huge
- monster/type/undead
aliases: ["Storm Giant Skeleton"]
statblock: true
"name": "Storm Giant Skeleton"
"size": "Huge"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "204"
"hit_dice": "24d12 + 48"
"stats":
- !!int "29"
- !!int "14"
- !!int "15"
- !!int "3"
- !!int "8"
- !!int "1"
"speed": "walk 50 ft."
"saves":
  "Strength": !!int "14"
  "Constitution": !!int "7"
"skillsaves":
  "Perception": !!int "4"
"damage_vulnerabilities": "bludgeoning"
"damage_resistances": "cold"
"damage_immunities": "lightning, poison, thunder"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "16"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two attacks with its greatsword or hurls two rocks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6\
    \ + 9) slashing damage plus 18 (4d8) necrotic damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +14 to hit, reach 60/240 ft., one target. Hit:\
    \ 35 (4d12 + 9) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant hurls a magical lightning bolt at a point it can see within 500\
    \ feet of it. Each creature within 10 feet of that point must make a DC 15 Dexterity\
    \ saving throw, taking 54 (12d8) lightning damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Lightning Strike (Recharge 5-6)"
"source":
- "CM"
name: Storm Giant Skeleton
image: "[[Storm Giant Skeleton.png]]"
---

# Storm Giant Skeleton

```statblock
"name": "Storm Giant Skeleton"
"size": "Huge"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "204"
"hit_dice": "24d12 + 48"
"stats":
- !!int "29"
- !!int "14"
- !!int "15"
- !!int "3"
- !!int "8"
- !!int "1"
"speed": "walk 50 ft."
"saves":
  "Strength": !!int "14"
  "Constitution": !!int "7"
"skillsaves":
  "Perception": !!int "4"
"damage_vulnerabilities": "bludgeoning"
"damage_resistances": "cold"
"damage_immunities": "lightning, poison, thunder"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "16"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two attacks with its greatsword or hurls two rocks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6\
    \ + 9) slashing damage plus 18 (4d8) necrotic damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +14 to hit, reach 60/240 ft., one target. Hit:\
    \ 35 (4d12 + 9) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant hurls a magical lightning bolt at a point it can see within 500\
    \ feet of it. Each creature within 10 feet of that point must make a DC 15 Dexterity\
    \ saving throw, taking 54 (12d8) lightning damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Lightning Strike (Recharge 5-6)"
"source":
- "CM"
"image": "[[Storm Giant Skeleton.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 208*