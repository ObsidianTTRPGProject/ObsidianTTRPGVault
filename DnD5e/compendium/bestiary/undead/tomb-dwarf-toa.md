---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/undead
aliases: ["Tomb Dwarf"]
statblock: true
"name": "Tomb Dwarf"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the tomb dwarf has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb dwarf makes two longsword attacks or two crossbow attacks. It\
    \ can use its Life Drain in place of one longsword attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0.A humanoid slain by this attack\
    \ rises 24 hours later as a zombie under the tomb dwarf's control, unless the\
    \ humanoid is restored to life or its body is destroyed. The tomb dwarf can have\
    \ no more than twelve zombies under its control at one time."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
  "name": "Battleaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d8 + 2) piercing damage."
  "name": "Light Crossbow"
"source":
- "ToA"
name: Tomb Dwarf
image: "[[Tomb Dwarf.png]]"
---

# Tomb Dwarf

```statblock
"name": "Tomb Dwarf"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the tomb dwarf has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb dwarf makes two longsword attacks or two crossbow attacks. It\
    \ can use its Life Drain in place of one longsword attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0.A humanoid slain by this attack\
    \ rises 24 hours later as a zombie under the tomb dwarf's control, unless the\
    \ humanoid is restored to life or its body is destroyed. The tomb dwarf can have\
    \ no more than twelve zombies under its control at one time."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
  "name": "Battleaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d8 + 2) piercing damage."
  "name": "Light Crossbow"
"source":
- "ToA"
"image": "[[Tomb Dwarf.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 135*

## Description

Acererak abducted dwarf miners and transformed them into wights to exploit their expertise at underground construction.