---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/huge
- monster/type/giant
- monster/environment/underdark
- monster/environment/mountain
- monster/environment/hill
aliases: ["Deadstone Cleft Stone Giant"]
statblock: true
"name": "Deadstone Cleft Stone Giant"
"size": "Huge"
"type": "giant"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "23"
- !!int "15"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "12"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., tremorsense 30 ft., passive Perception 14"
"languages": "Giant"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant's innate spellcasting ability is Wisdom. It can innately cast\
    \ the following spells, requiring no material components:\n\n1/day each: [stoneskin](/compendium/spells/stoneskin.md),\
    \ [time stop](/compendium/spells/time-stop.md)\n\n3/day each: [meld into stone](/compendium/spells/meld-into-stone.md),\
    \ [stone shape](/compendium/spells/stone-shape.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant meditates for 1 hour, during which time it can do nothing else.\
    \ At the end of the hour, provided the giant's meditation has been uninterrupted,\
    \ it becomes [petrified](/rules/conditions.md#petrified) for 8 hours. At the end\
    \ of this time, the giant is no longer petrified and gains tremorsense out to\
    \ a range of 30 feet, as well as a measure of innate spellcasting ability for\
    \ the next 24 hours."
  "name": "Olach Morrah"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky\
    \ terrain."
  "name": "Stone Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two greatclub attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28\
    \ (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed\
    \ on a DC 17 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Rock"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a rock or similar object is hurled at the giant, the giant can, with\
    \ a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning\
    \ damage from it."
  "name": "Rock Catching"
"source":
- "SKT"
name: Deadstone Cleft Stone Giant
image: "[[Deadstone Cleft Stone Giant.png]]"
---

# Deadstone Cleft Stone Giant

```statblock
"name": "Deadstone Cleft Stone Giant"
"size": "Huge"
"type": "giant"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "23"
- !!int "15"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "12"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., tremorsense 30 ft., passive Perception 14"
"languages": "Giant"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant's innate spellcasting ability is Wisdom. It can innately cast\
    \ the following spells, requiring no material components:\n\n1/day each: [stoneskin](/compendium/spells/stoneskin.md),\
    \ [time stop](/compendium/spells/time-stop.md)\n\n3/day each: [meld into stone](/compendium/spells/meld-into-stone.md),\
    \ [stone shape](/compendium/spells/stone-shape.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant meditates for 1 hour, during which time it can do nothing else.\
    \ At the end of the hour, provided the giant's meditation has been uninterrupted,\
    \ it becomes [petrified](/rules/conditions.md#petrified) for 8 hours. At the end\
    \ of this time, the giant is no longer petrified and gains tremorsense out to\
    \ a range of 30 feet, as well as a measure of innate spellcasting ability for\
    \ the next 24 hours."
  "name": "Olach Morrah"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky\
    \ terrain."
  "name": "Stone Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two greatclub attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28\
    \ (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed\
    \ on a DC 17 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Rock"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a rock or similar object is hurled at the giant, the giant can, with\
    \ a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning\
    \ damage from it."
  "name": "Rock Catching"
"source":
- "SKT"
"image": "[[Deadstone Cleft Stone Giant.png]]"
```
^statblock

*Source: Storm King's Thunder p. 146*

## Environment

underdark, mountain, hill