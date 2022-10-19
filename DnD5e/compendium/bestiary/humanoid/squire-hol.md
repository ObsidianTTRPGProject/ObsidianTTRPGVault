---
cssclass: json5e-monster
tags:
- compendium/src/hol
- monster/size/medium
- monster/type/humanoid
aliases: ["Squire"]
statblock: true
"name": "Squire"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "10"
- !!int "12"
- !!int "8"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "3"
"skillsaves":
  "Athletics": !!int "3"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands."
  "name": "Longsword"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wielding a shield, you try to shove one creature within 5 feet of\
    \ you."
  "name": "Shove"
"source":
- "HoL"
name: Squire
image: "[[Squire.png]]"
---

# Squire

```statblock
"name": "Squire"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "10"
- !!int "12"
- !!int "8"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "3"
"skillsaves":
  "Athletics": !!int "3"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands."
  "name": "Longsword"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wielding a shield, you try to shove one creature within 5 feet of\
    \ you."
  "name": "Shove"
"source":
- "HoL"
"image": "[[Squire.png]]"
```
^statblock

*Source: The House of Lament p. 201*