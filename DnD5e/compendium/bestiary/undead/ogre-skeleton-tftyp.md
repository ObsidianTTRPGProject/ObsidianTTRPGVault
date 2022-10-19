---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/undead
- monster/environment/grassland
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
- monster/environment/desert
- monster/environment/coastal
- monster/environment/arctic
- monster/environment/underdark
- monster/environment/mountain
aliases: ["Ogre Skeleton"]
statblock: true
"name": "Ogre Skeleton"
"size": "Large"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"stats":
- !!int "19"
- !!int "8"
- !!int "16"
- !!int "5"
- !!int "7"
- !!int "7"
"speed": "walk 40 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., darkvision 60 ft., passive Perception 8"
"languages": "Common, Giant, understands all languages it spoke in life but can't\
  \ speak"
"cr": "2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 11 (2d6 + 4) piercing damage."
  "name": "Javelin"
"source":
- "TftYP"
name: Ogre Skeleton
image: "[[Ogre Skeleton.png]]"
---

# Ogre Skeleton

```statblock
"name": "Ogre Skeleton"
"size": "Large"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"stats":
- !!int "19"
- !!int "8"
- !!int "16"
- !!int "5"
- !!int "7"
- !!int "7"
"speed": "walk 40 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., darkvision 60 ft., passive Perception 8"
"languages": "Common, Giant, understands all languages it spoke in life but can't\
  \ speak"
"cr": "2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 11 (2d6 + 4) piercing damage."
  "name": "Javelin"
"source":
- "TftYP"
"image": "[[Ogre Skeleton.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 54*

## Environment

grassland, forest, swamp, hill, desert, coastal, arctic, underdark, mountain