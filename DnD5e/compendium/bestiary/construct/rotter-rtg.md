---
cssclass: json5e-monster
tags:
- compendium/src/rtg
- monster/size/medium
- monster/type/construct
aliases: ["Rotter"]
statblock: true
"name": "Rotter"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "8"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Athletics": !!int "7"
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "telepathy 60 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In the rotter's hand, its club is magical and deals 7 (3d4) extra damage\
    \ (included in its attacks)."
  "name": "Magic Club"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rotter has advantage on Dexterity (Stealth) checks it makes in terrain\
    \ with ample obscuring plant life."
  "name": "Plant Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rotter regains 10 hit points at the start of its turn if it is in contact\
    \ with the ground. If the rotter takes fire damage, this trait doesn't function\
    \ at the start of the rotter's next turn. The rotter dies only if it starts its\
    \ turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rotter can see and hear what any plant within 120 ft can see and hear.\
    \ In addition, the rotter can communicate telepathically with any plant within\
    \ this range."
  "name": "Shared Senses"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once on each of its turns, the rotter can use 10 feet of its movement to\
    \ step magically into one copse of mushrooms within 5 feet of it and emerge from\
    \ a second copse of mushrooms within 60 feet of it, appearing in an unoccupied\
    \ space within 5 feet of the second copse. Both copses of mushrooms must be Large\
    \ or bigger. The rotter doesn't need to be able to see the second copse to use\
    \ this ability."
  "name": "Tree Stride"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rotter makes two attacks with its club."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (4d4\
    \ + 4) bludgeoning damage."
  "name": "Club"
"source":
- "RtG"
name: Rotter
image: "[[Rotter.png]]"
---

# Rotter

```statblock
"name": "Rotter"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "8"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Athletics": !!int "7"
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "telepathy 60 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In the rotter's hand, its club is magical and deals 7 (3d4) extra damage\
    \ (included in its attacks)."
  "name": "Magic Club"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rotter has advantage on Dexterity (Stealth) checks it makes in terrain\
    \ with ample obscuring plant life."
  "name": "Plant Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rotter regains 10 hit points at the start of its turn if it is in contact\
    \ with the ground. If the rotter takes fire damage, this trait doesn't function\
    \ at the start of the rotter's next turn. The rotter dies only if it starts its\
    \ turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rotter can see and hear what any plant within 120 ft can see and hear.\
    \ In addition, the rotter can communicate telepathically with any plant within\
    \ this range."
  "name": "Shared Senses"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once on each of its turns, the rotter can use 10 feet of its movement to\
    \ step magically into one copse of mushrooms within 5 feet of it and emerge from\
    \ a second copse of mushrooms within 60 feet of it, appearing in an unoccupied\
    \ space within 5 feet of the second copse. Both copses of mushrooms must be Large\
    \ or bigger. The rotter doesn't need to be able to see the second copse to use\
    \ this ability."
  "name": "Tree Stride"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rotter makes two attacks with its club."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (4d4\
    \ + 4) bludgeoning damage."
  "name": "Club"
"source":
- "RtG"
"image": "[[Rotter.png]]"
```
^statblock

*Source: Return to Glory p. 34*