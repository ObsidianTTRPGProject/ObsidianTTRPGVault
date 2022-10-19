---
cssclass: json5e-monster
tags:
- compendium/src/hftt
- monster/size/medium
- monster/type/monstrosity
aliases: ["Demogorgon"]
statblock: true
"name": "Demogorgon"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "3"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"senses": "blindsight 60 ft., passive Perception 13"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demogorgon has advantage on Wisdom (Perception) checks that rely on\
    \ smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demogorgon has advantage on melee attack rolls against any creature\
    \ that doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demogorgon regains 10 hit points at the start of its turn. If the demogorgon\
    \ takes acid or fire damage, this trait doesn't function at the start of the demogorgon's\
    \ next turn. The demogorgon dies only if it starts its turn with 0 hit points\
    \ and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demogorgon makes three attacks: one with its bite and two with its\
    \ claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) slashing damage."
  "name": "Claw"
"source":
- "HftT"
name: Demogorgon
image: "[[Demogorgon.png]]"
---

# Demogorgon

```statblock
"name": "Demogorgon"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "3"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"senses": "blindsight 60 ft., passive Perception 13"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demogorgon has advantage on Wisdom (Perception) checks that rely on\
    \ smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demogorgon has advantage on melee attack rolls against any creature\
    \ that doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demogorgon regains 10 hit points at the start of its turn. If the demogorgon\
    \ takes acid or fire damage, this trait doesn't function at the start of the demogorgon's\
    \ next turn. The demogorgon dies only if it starts its turn with 0 hit points\
    \ and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demogorgon makes three attacks: one with its bite and two with its\
    \ claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) slashing damage."
  "name": "Claw"
"source":
- "HftT"
"image": "[[Demogorgon.png]]"
```
^statblock

*Source: Hunt for the Thessalhydra p. 36*

## Description

A predator of the Upside Down, the demogorgon hunts the dimension looking for unfortunate creatures that find their way there. The size and shape of an adult humanoid, the demogorgon's mouth encompasses its face and unfolds like a blossoming flower