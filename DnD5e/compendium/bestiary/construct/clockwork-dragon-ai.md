---
cssclass: json5e-monster
tags:
- compendium/src/ai
- monster/size/medium
- monster/type/construct
aliases: ["Clockwork Dragon"]
statblock: true
"name": "Clockwork Dragon"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "16"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "13"
"speed": "walk 30 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "4"
  "Acrobatics": !!int "2"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 14"
"languages": "Common, Draconic"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the clockwork dragon remains motionless, it is indistinguishable\
    \ from a metal statue."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork dragon exhales fire in a 15-foot cone. Each creature in that\
    \ area must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"source":
- "AI"
name: Clockwork Dragon
image: "[[Clockwork Dragon.png]]"
---

# Clockwork Dragon

```statblock
"name": "Clockwork Dragon"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "16"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "13"
"speed": "walk 30 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "4"
  "Acrobatics": !!int "2"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 14"
"languages": "Common, Draconic"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the clockwork dragon remains motionless, it is indistinguishable\
    \ from a metal statue."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork dragon exhales fire in a 15-foot cone. Each creature in that\
    \ area must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"source":
- "AI"
"image": "[[Clockwork Dragon.png]]"
```
^statblock

*Source: Acquisitions Incorporated p. 209*

## Description

These intricately crafted constructs are typically made to reflect the forms of the metallic dragons. Plated in brass, bronze, copper, or faux gold and silver, they are often taken for fine draconic statues at first glance. A clockwork dragon makes a formidable guardian or defender, with its advanced intellect allowing it to be programmed with a wide range of orders, as well as being capable of wholly independent reactions to potential threats.

Though most clockwork dragons have a breath weapon that deals fire damage, some might be constructed to deal acid, cold, or lightning damage, depending on their makers' whims.