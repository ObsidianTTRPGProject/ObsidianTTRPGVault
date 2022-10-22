---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/construct
- monster/environment/grassland
- monster/environment/forest
- monster/environment/urban
aliases: ["Metal Wasp"]
statblock: true
"name": "Metal Wasp"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "13"
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
- "WDMM"
name: Metal Wasp
image: "[[Metal Wasp.png]]"
---

# Metal Wasp

```statblock
"name": "Metal Wasp"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "13"
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
- "WDMM"
"image": "[[Metal Wasp.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 174*

## Environment

grassland, forest, urban