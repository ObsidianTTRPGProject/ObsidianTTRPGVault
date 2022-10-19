---
cssclass: json5e-monster
tags:
- compendium/src/slw
- monster/size/large
- monster/type/elemental
aliases: ["Statue of Talos"]
statblock: true
"name": "Statue of Talos"
"size": "Large"
"type": "elemental"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "147"
"hit_dice": "14d10 + 70"
"stats":
- !!int "19"
- !!int "11"
- !!int "20"
- !!int "6"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Perception": !!int "4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't adamantine"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Terran"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the statue remains motionless, it is indistinguishable from an inanimate\
    \ statue."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue makes five attacks: one with its headbutt and four with its\
    \ lightning bolt blades."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Headbutt"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (2d4\
    \ + 4) slashing damage."
  "name": "Lightning Bolt Blades"
"source":
- "SLW"
name: Statue of Talos
image: "[[Statue of Talos.png]]"
---

# Statue of Talos

```statblock
"name": "Statue of Talos"
"size": "Large"
"type": "elemental"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "147"
"hit_dice": "14d10 + 70"
"stats":
- !!int "19"
- !!int "11"
- !!int "20"
- !!int "6"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Perception": !!int "4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't adamantine"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Terran"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the statue remains motionless, it is indistinguishable from an inanimate\
    \ statue."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue makes five attacks: one with its headbutt and four with its\
    \ lightning bolt blades."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Headbutt"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (2d4\
    \ + 4) slashing damage."
  "name": "Lightning Bolt Blades"
"source":
- "SLW"
"image": "[[Statue of Talos.png]]"
```
^statblock

*Source: Storm Lord's Wrath*