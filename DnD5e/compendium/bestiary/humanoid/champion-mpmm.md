---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid
- monster/environment/desert
- monster/environment/urban
aliases: ["Champion"]
statblock: true
"name": "Champion"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "143"
"hit_dice": "22d8 + 44"
"stats":
- !!int "20"
- !!int "15"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "9"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "9"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "any one language (usually Common)"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The champion rerolls a failed saving throw."
  "name": "Indomitable (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The champion makes three Greatsword or Shortbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage, plus 7 (2d6) slashing damage if the champion has more\
    \ than half of its total hit points remaining."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage, plus 7 (2d6) piercing damage if the champion has\
    \ more than half of its total hit points remaining."
  "name": "Shortbow"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The champion regains 20 hit points."
  "name": "Second Wind (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
name: Champion
image: "[[Champion.png]]"
---

# Champion

```statblock
"name": "Champion"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "143"
"hit_dice": "22d8 + 44"
"stats":
- !!int "20"
- !!int "15"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "9"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "9"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "any one language (usually Common)"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The champion rerolls a failed saving throw."
  "name": "Indomitable (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The champion makes three Greatsword or Shortbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage, plus 7 (2d6) slashing damage if the champion has more\
    \ than half of its total hit points remaining."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage, plus 7 (2d6) piercing damage if the champion has\
    \ more than half of its total hit points remaining."
  "name": "Shortbow"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The champion regains 20 hit points."
  "name": "Second Wind (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
"image": "[[Champion.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 74, Volo's Guide to Monsters p. 212*

## Description

> [!quote]- A quote from Mordenkainen  
> 
> Bountiful and overrated. You can't spit in this realm without hitting one. I have witnessed the birth, death, and unlife of more champions than I dare recount. Few are worth remembering.

Champions are mighty warriors who have honed their fighting skills in wars or gladiatorial pits. To soldiers and other people who fight for a living, champions are as influential as nobles, and their presence is courted as a sign of status among rulers.

A typical champion bears a coat of arms, heraldry that is associated with the champion far and wide. You may create a coat of arms for a champion or roll on the Champion's Coats of Arms table to determine it.

**Champion's Coat of Arms**

| dice: d12 | Coat of Arms |
|-----------|--------------|
| 1 | Three lit candles on a purple field |
| 2 | Sea serpent coiled around a trident on a blue field |
| 3 | Hunting horn banded in gold on a gray field |
| 4 | Raised fist grasping an anchor on a quartered field of blue and white |
| 5 | Turtle with crenelated tower on its shell on a white field |
| 6 | Dragon skull supported on either side by dragon wings on a red field |
| 7 | Yellow chicken foot on a black field |
| 8 | Lightning bolt splitting a galley in two on a blue field |
| 9 | Two crouching displacer beasts facing each other on a yellow field |
| 10 | Knotted brambles on a green field |
| 11 | Red owlbear with a silver crown on a checkered field of black and white |
| 12 | Black anvil cracked down the middle on an orange field |
^champions-coat-of-arms

## Environment

desert, urban