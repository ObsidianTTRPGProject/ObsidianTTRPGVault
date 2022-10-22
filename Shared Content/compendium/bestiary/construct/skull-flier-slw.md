---
cssclass: json5e-monster
tags:
- compendium/src/slw
- monster/size/medium
- monster/type/construct
aliases: ["Skull Flier"]
statblock: true
"name": "Skull Flier"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "24"
"hit_dice": "3d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "walk 10 ft., fly 50 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) piercing damage, and the target must make a DC 11 Constitution saving throw,\
    \ taking 10 (3d6) poison damage on a failed save, or half as much damage on a\
    \ successful one. If the poison damage reduces the target to 0 hit points, the\
    \ target is stable but [poisoned](/rules/conditions.md#poisoned) for 1 hour, even\
    \ after regaining hit points, and is [paralyzed](/rules/conditions.md#paralyzed)\
    \ while [poisoned](/rules/conditions.md#poisoned) in this way."
  "name": "Sting"
"source":
- "SLW"
name: Skull Flier
image: "[[Skull Flier.png]]"
---

# Skull Flier

```statblock
"name": "Skull Flier"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "24"
"hit_dice": "3d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "walk 10 ft., fly 50 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) piercing damage, and the target must make a DC 11 Constitution saving throw,\
    \ taking 10 (3d6) poison damage on a failed save, or half as much damage on a\
    \ successful one. If the poison damage reduces the target to 0 hit points, the\
    \ target is stable but [poisoned](/rules/conditions.md#poisoned) for 1 hour, even\
    \ after regaining hit points, and is [paralyzed](/rules/conditions.md#paralyzed)\
    \ while [poisoned](/rules/conditions.md#poisoned) in this way."
  "name": "Sting"
"source":
- "SLW"
"image": "[[Skull Flier.png]]"
```
^statblock

*Source: Storm Lord's Wrath*