---
cssclass: json5e-monster
tags:
- compendium/src/hol
- monster/size/small
- monster/type/humanoid
aliases: ["Sneak"]
statblock: true
"name": "Sneak"
"size": "Small"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "9"
"hit_dice": "2d6 + 2"
"stats":
- !!int "8"
- !!int "13"
- !!int "12"
- !!int "11"
- !!int "12"
- !!int "9"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "3"
"skillsaves":
  "Sleight of Hand": !!int "3"
  "Stealth": !!int "3"
"senses": "passive Perception 11"
"languages": "any one language (usually Common)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 3 (1d4 + 1) piercing damage."
  "name": "Dagger"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "You take the Disengage action."
  "name": "Disengage"
"source":
- "HoL"
name: Sneak
image: "[[Sneak.png]]"
---

# Sneak

```statblock
"name": "Sneak"
"size": "Small"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "9"
"hit_dice": "2d6 + 2"
"stats":
- !!int "8"
- !!int "13"
- !!int "12"
- !!int "11"
- !!int "12"
- !!int "9"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "3"
"skillsaves":
  "Sleight of Hand": !!int "3"
  "Stealth": !!int "3"
"senses": "passive Perception 11"
"languages": "any one language (usually Common)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 3 (1d4 + 1) piercing damage."
  "name": "Dagger"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "You take the Disengage action."
  "name": "Disengage"
"source":
- "HoL"
"image": "[[Sneak.png]]"
```
^statblock

*Source: The House of Lament p. 201*