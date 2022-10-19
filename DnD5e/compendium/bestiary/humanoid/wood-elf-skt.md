---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/coastal
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/hill
- monster/environment/arctic
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/desert
aliases: ["Wood Elf"]
statblock: true
"name": "Wood Elf"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Good"
"ac": !!int "13"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "11"
"skillsaves":
  "Nature": !!int "4"
  "Stealth": !!int "6"
  "Perception": !!int "5"
  "Survival": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Elvish"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the wood elf to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf can attempt to hide even when they are only lightly obscured\
    \ by foliage, heavy rain, falling snow, mist, and other natural phenomena."
  "name": "Mask of the Wild"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf makes two melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "SKT"
name: Wood Elf
image: "[[Wood Elf.png]]"
---

# Wood Elf

```statblock
"name": "Wood Elf"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Good"
"ac": !!int "13"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "11"
"skillsaves":
  "Nature": !!int "4"
  "Stealth": !!int "6"
  "Perception": !!int "5"
  "Survival": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Elvish"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the wood elf to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf can attempt to hide even when they are only lightly obscured\
    \ by foliage, heavy rain, falling snow, mist, and other natural phenomena."
  "name": "Mask of the Wild"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf makes two melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "SKT"
"image": "[[Wood Elf.png]]"
```
^statblock

*Source: Storm King's Thunder p. 28*

## Environment

coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert