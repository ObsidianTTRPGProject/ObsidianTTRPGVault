---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/beast
- monster/environment/grassland
- monster/environment/forest
- monster/environment/hill
aliases: ["Panther"]
statblock: true
"name": "Panther"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "14"
- !!int "15"
- !!int "10"
- !!int "3"
- !!int "14"
- !!int "7"
"speed": "walk 50 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The panther has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the panther moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 12 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the panther can make one\
    \ bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claw"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDH"
name: Panther
image: "[[Panther.png]]"
---

# Panther

```statblock
"name": "Panther"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "14"
- !!int "15"
- !!int "10"
- !!int "3"
- !!int "14"
- !!int "7"
"speed": "walk 50 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The panther has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the panther moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 12 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the panther can make one\
    \ bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claw"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDH"
"image": "[[Panther.png]]"
```
^statblock

*Source: Monster Manual p. 333, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist*

## Environment

grassland, forest, hill