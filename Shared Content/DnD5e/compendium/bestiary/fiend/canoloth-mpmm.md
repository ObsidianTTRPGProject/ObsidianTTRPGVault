---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/fiend/yugoloth
- monster/environment/coastal
- monster/environment/underdark
- monster/environment/urban
aliases: ["Canoloth"]
statblock: true
"name": "Canoloth"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "5"
- !!int "17"
- !!int "12"
"speed": "walk 50 ft."
"skillsaves":
  "Investigation": !!int "3"
  "Perception": !!int "9"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "poisoned"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Other creatures can't teleport to or from a space within 60 feet of the\
    \ canoloth. Any attempt to do so is wasted."
  "name": "Dimensional Lock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The canoloth has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The canoloth can't be surprised unless it's [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Uncanny Senses"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The canoloth makes one Bite or Tongue attack and one Claw attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage plus 18 (4d8) force damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage plus 9 (2d8) force damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 30 ft., one target. Hit: 10 (1d12\
    \ + 4) piercing damage plus 7 (2d6) acid damage. If the target is Medium or smaller,\
    \ it is [grappled](/rules/conditions.md#grappled) (escape DC 15), pulled up to\
    \ 30 feet toward the canoloth, and [restrained](/rules/conditions.md#restrained)\
    \ until the grapple ends. The canoloth can grapple one target at a time with its\
    \ tongue."
  "name": "Tongue"
"source":
- "MPMM"
- "MTF"
name: Canoloth
image: "[[Canoloth.png]]"
---

# Canoloth

```statblock
"name": "Canoloth"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "5"
- !!int "17"
- !!int "12"
"speed": "walk 50 ft."
"skillsaves":
  "Investigation": !!int "3"
  "Perception": !!int "9"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "poisoned"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Other creatures can't teleport to or from a space within 60 feet of the\
    \ canoloth. Any attempt to do so is wasted."
  "name": "Dimensional Lock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The canoloth has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The canoloth can't be surprised unless it's [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Uncanny Senses"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The canoloth makes one Bite or Tongue attack and one Claw attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage plus 18 (4d8) force damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage plus 9 (2d8) force damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 30 ft., one target. Hit: 10 (1d12\
    \ + 4) piercing damage plus 7 (2d6) acid damage. If the target is Medium or smaller,\
    \ it is [grappled](/rules/conditions.md#grappled) (escape DC 15), pulled up to\
    \ 30 feet toward the canoloth, and [restrained](/rules/conditions.md#restrained)\
    \ until the grapple ends. The canoloth can grapple one target at a time with its\
    \ tongue."
  "name": "Tongue"
"source":
- "MPMM"
- "MTF"
"image": "[[Canoloth.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 69, Mordenkainen's Tome of Foes p. 247*

## Description

> [!quote]- A quote from Mordenkainen  
> 
> Canoloths are glorified guard dogs. If you must engage one, just find out exactly what it's been assigned to do. I've often found I can waltz right past them by taking advantage of a relevant loophole.

A type of yugoloth, canoloths are fiendish trackers and guardians employed by evil powers. They prefer to enter into contracts to guard valuable treasures and important locations. They always do exactly as asked—never any more, never any less.

With senses sharp enough to pinpoint the locations of nearby [invisible](/rules/conditions.md#invisible) creatures, canoloths respond unfailingly to any threat to their charges. Furthermore, they emit a magical distortion field that prevents creatures close to them from teleporting. Canoloths confront intruders with swift and terrible force, projecting long, spiny tongues to grab their foes and drag them close. What happens next depends on the contract. Unless instructed to kill, a canoloth merely holds on to its prisoner, but if given the order to do so, it tears its prey limb from limb.

## Environment

coastal, underdark, urban