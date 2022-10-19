---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/undead
aliases: ["Shadow Assassin"]
statblock: true
"name": "Shadow Assassin"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "6"
- !!int "19"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "8"
  "Intelligence": !!int "5"
"skillsaves":
  "Stealth": !!int "12"
  "Perception": !!int "9"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "exhaustion, frightened, grappled, paralyzed, petrified, poisoned,\
  \ prone, restrained"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "understands the languages it knew in life but can't speak"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The assassin can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the assassin can take the Hide action as\
    \ a bonus action."
  "name": "Shadow Stealth"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the assassin has disadvantage on attack rolls, ability\
    \ checks, and saving throws."
  "name": "Sunlight Weakness"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The assassin makes two Shadow Blade attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage plus 10 (3d6) necrotic damage. Unless the target is immune\
    \ to necrotic damage, the target's Strength score is reduced by 1d4 each time\
    \ it is hit by this attack. The target dies if its Strength is reduced to 0. The\
    \ reduction lasts until the target finishes a short or long rest. If a non-evil\
    \ humanoid dies from this attack, a shadow (see the Monster Manual) rises from\
    \ the corpse 1d4 hours later."
  "name": "Shadow Blade"
"source":
- "WDMM"
name: Shadow Assassin
image: "[[Shadow Assassin.png]]"
---

# Shadow Assassin

```statblock
"name": "Shadow Assassin"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "6"
- !!int "19"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "8"
  "Intelligence": !!int "5"
"skillsaves":
  "Stealth": !!int "12"
  "Perception": !!int "9"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "exhaustion, frightened, grappled, paralyzed, petrified, poisoned,\
  \ prone, restrained"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "understands the languages it knew in life but can't speak"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The assassin can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the assassin can take the Hide action as\
    \ a bonus action."
  "name": "Shadow Stealth"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the assassin has disadvantage on attack rolls, ability\
    \ checks, and saving throws."
  "name": "Sunlight Weakness"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The assassin makes two Shadow Blade attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage plus 10 (3d6) necrotic damage. Unless the target is immune\
    \ to necrotic damage, the target's Strength score is reduced by 1d4 each time\
    \ it is hit by this attack. The target dies if its Strength is reduced to 0. The\
    \ reduction lasts until the target finishes a short or long rest. If a non-evil\
    \ humanoid dies from this attack, a shadow (see the Monster Manual) rises from\
    \ the corpse 1d4 hours later."
  "name": "Shadow Blade"
"source":
- "WDMM"
"image": "[[Shadow Assassin.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 316*

## Description

A shadow assassin looks like an undead shadow (as described in the _Monster Manual_) that wields shortswords also made of shadow. It exists only to slay the living.