---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/huge
- monster/type/giant
- monster/environment/underdark
aliases: ["Trench Giant"]
statblock: true
"name": "Trench Giant"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "149"
"hit_dice": "13d12 + 65"
"stats":
- !!int "23"
- !!int "10"
- !!int "20"
- !!int "9"
- !!int "14"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "8"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Giant, Undercommon"
"cr": "8"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant attacks twice with its greatclub or makes one greatclub attack\
    \ and uses Evil Eye once."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant magically forces a creature it can see within 60 feet of it to\
    \ make a DC 14 Charisma saving throw. The creature takes 27 (6d8) psychic damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Evil Eye"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "With a stare, the giant uses Evil Eye, but on a failed save, the creature\
    \ is also cursed with magical deformities. While deformed, the creature has its\
    \ speed halved and has disadvantage on ability checks, saving throws, and attacks\
    \ based on Strength or Dexterity.\n\nThe transformed creature can repeat the saving\
    \ throw whenever it finishes a long rest, ending the effect on a success."
  "name": "Curse of the Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "PSZ"
name: Trench Giant
image: "[[Trench Giant.png]]"
---

# Trench Giant

```statblock
"name": "Trench Giant"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "149"
"hit_dice": "13d12 + 65"
"stats":
- !!int "23"
- !!int "10"
- !!int "20"
- !!int "9"
- !!int "14"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "8"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Giant, Undercommon"
"cr": "8"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant attacks twice with its greatclub or makes one greatclub attack\
    \ and uses Evil Eye once."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant magically forces a creature it can see within 60 feet of it to\
    \ make a DC 14 Charisma saving throw. The creature takes 27 (6d8) psychic damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Evil Eye"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "With a stare, the giant uses Evil Eye, but on a failed save, the creature\
    \ is also cursed with magical deformities. While deformed, the creature has its\
    \ speed halved and has disadvantage on ability checks, saving throws, and attacks\
    \ based on Strength or Dexterity.\n\nThe transformed creature can repeat the saving\
    \ throw whenever it finishes a long rest, ending the effect on a success."
  "name": "Curse of the Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "PSZ"
"image": "[[Trench Giant.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 30*

## Environment

underdark