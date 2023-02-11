---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/large
- monster/type/beast
- monster/environment/underdark
- monster/environment/forest
- monster/environment/swamp
- monster/environment/urban
- monster/environment/desert
aliases: ["Ice Spider Queen"]
statblock: true
"name": "Ice Spider Queen"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "44"
"hit_dice": "4d10 + 4"
"stats":
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "2"
- !!int "11"
- !!int "4"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "7"
"damage_resistances": "cold"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 5 feet of the spider takes 5 (2d4)\
    \ cold damage."
  "name": "Cold Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in contact with a web, the spider knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8\
    \ + 3) piercing damage, and the target must make a DC 11 Constitution saving throw,\
    \ taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful\
    \ one. If the poison damage reduces the target to 0 hit points, the target is\
    \ stable but [poisoned](/rules/conditions.md#poisoned) for 1 hour, even after\
    \ regaining hit points, and is [paralyzed](/rules/conditions.md#paralyzed) while\
    \ [poisoned](/rules/conditions.md#poisoned) in this way."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit:\
    \ The target is [restrained](/rules/conditions.md#restrained) by webbing, and\
    \ takes 2 (1d4) cold damage at the start of each of its turns. As an action, the\
    \ [restrained](/rules/conditions.md#restrained) target can make a DC 12 Strength\
    \ check, bursting the webbing on a success. The webbing can also be attacked and\
    \ destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to poison, and\
    \ psychic damage)."
  "name": "Icy Web (Recharge 5-6)"
"source":
- "SKT"
name: Ice Spider Queen
image: "[[Ice Spider Queen.png]]"
---

# Ice Spider Queen

```statblock
"name": "Ice Spider Queen"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "44"
"hit_dice": "4d10 + 4"
"stats":
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "2"
- !!int "11"
- !!int "4"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "7"
"damage_resistances": "cold"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 5 feet of the spider takes 5 (2d4)\
    \ cold damage."
  "name": "Cold Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in contact with a web, the spider knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8\
    \ + 3) piercing damage, and the target must make a DC 11 Constitution saving throw,\
    \ taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful\
    \ one. If the poison damage reduces the target to 0 hit points, the target is\
    \ stable but [poisoned](/rules/conditions.md#poisoned) for 1 hour, even after\
    \ regaining hit points, and is [paralyzed](/rules/conditions.md#paralyzed) while\
    \ [poisoned](/rules/conditions.md#poisoned) in this way."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit:\
    \ The target is [restrained](/rules/conditions.md#restrained) by webbing, and\
    \ takes 2 (1d4) cold damage at the start of each of its turns. As an action, the\
    \ [restrained](/rules/conditions.md#restrained) target can make a DC 12 Strength\
    \ check, bursting the webbing on a success. The webbing can also be attacked and\
    \ destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to poison, and\
    \ psychic damage)."
  "name": "Icy Web (Recharge 5-6)"
"source":
- "SKT"
"image": "[[Ice Spider Queen.png]]"
```
^statblock

*Source: Storm King's Thunder p. 128*

## Environment

underdark, forest, swamp, urban, desert