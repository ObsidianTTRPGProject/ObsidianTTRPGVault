---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/humanoid/human
- monster/environment/urban
aliases: ["Zhanthi"]
statblock: true
"name": "Zhanthi"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Good"
"ac": !!int "15"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "11"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Insight": !!int "4"
  "Persuasion": !!int "5"
"senses": "passive Perception 12"
"languages": "any two languages"
"cr": "1/8"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) piercing damage."
  "name": "Rapier"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zhanthi adds 2 to its AC against one melee attack that would hit it. To\
    \ do so, Zhanthi must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "ToA"
name: Zhanthi
image: "[[Zhanthi.png]]"
---

# Zhanthi

```statblock
"name": "Zhanthi"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Good"
"ac": !!int "15"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "11"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Insight": !!int "4"
  "Persuasion": !!int "5"
"senses": "passive Perception 12"
"languages": "any two languages"
"cr": "1/8"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) piercing damage."
  "name": "Rapier"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zhanthi adds 2 to its AC against one melee attack that would hit it. To\
    \ do so, Zhanthi must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "ToA"
"image": "[[Zhanthi.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 27*

## Environment

urban