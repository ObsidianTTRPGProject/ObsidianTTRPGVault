---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Pirate Captain"]
statblock: true
"name": "Pirate Captain"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "4"
  "Athletics": !!int "5"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The captain adds its Charisma modifier to the damage roll for its longsword\
    \ attacks (included in the attack)."
  "name": "Flourish"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The captain has advantage on ability checks and saving throws to resist\
    \ being knocked [prone](/rules/conditions.md#prone)."
  "name": "Sea Legs"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The captain makes two attacks: one with its hand crossbow and one with\
    \ its longsword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage, or 10 (1d10 + 5) slashing damage if used with two hands."
  "name": "Longsword"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever a friendly creature within 30 feet of the captain that can hear\
    \ it misses with an attack, the captain can yell perilous threats to allow that\
    \ creature to reroll the attack roll."
  "name": "Shape Up, Ye Dog (2/Day)"
"source":
- "GoS"
name: Pirate Captain
image: "[[Pirate Captain.png]]"
---

# Pirate Captain

```statblock
"name": "Pirate Captain"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "4"
  "Athletics": !!int "5"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The captain adds its Charisma modifier to the damage roll for its longsword\
    \ attacks (included in the attack)."
  "name": "Flourish"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The captain has advantage on ability checks and saving throws to resist\
    \ being knocked [prone](/rules/conditions.md#prone)."
  "name": "Sea Legs"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The captain makes two attacks: one with its hand crossbow and one with\
    \ its longsword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage, or 10 (1d10 + 5) slashing damage if used with two hands."
  "name": "Longsword"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever a friendly creature within 30 feet of the captain that can hear\
    \ it misses with an attack, the captain can yell perilous threats to allow that\
    \ creature to reroll the attack roll."
  "name": "Shape Up, Ye Dog (2/Day)"
"source":
- "GoS"
"image": "[[Pirate Captain.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 247*

## Description

Pirate captains spend their lives at sea, earning and keeping command through blood and daring. A captain's impressive sword work and biting words inspire both confidence and fear in a ship's crew. Sigurd "Snake Eyes" is the pirate captain who leads a gang of smugglers in The Sinister Secret of Saltmarsh.