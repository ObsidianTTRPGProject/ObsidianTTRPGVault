---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/large
- monster/type/giant
- monster/environment/grassland
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
- monster/environment/desert
- monster/environment/coastal
- monster/environment/arctic
- monster/environment/underdark
- monster/environment/mountain
aliases: ["Ogre Goblin Hucker"]
statblock: true
"name": "Ogre Goblin Hucker"
"size": "Large"
"type": "giant"
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
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common, Giant"
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
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 150/600 ft. (can't hit targets\
    \ within 30 feet of the hucker), one target. Hit: 5 (2d4) bludgeoning damage,\
    \ or 10 (4d4) piercing damage if the projectile is wearing a spiked helmet. _Hit\
    \ or Miss:_ The goblin projectile takes 1d6 bludgeoning damage per 10 feet it\
    \ travels through the air (maximum 20d6)."
  "name": "Goblin Projectile"
"source":
- "SKT"
name: Ogre Goblin Hucker
image: "[[Ogre Goblin Hucker.png]]"
---

# Ogre Goblin Hucker

```statblock
"name": "Ogre Goblin Hucker"
"size": "Large"
"type": "giant"
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
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common, Giant"
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
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 150/600 ft. (can't hit targets\
    \ within 30 feet of the hucker), one target. Hit: 5 (2d4) bludgeoning damage,\
    \ or 10 (4d4) piercing damage if the projectile is wearing a spiked helmet. _Hit\
    \ or Miss:_ The goblin projectile takes 1d6 bludgeoning damage per 10 feet it\
    \ travels through the air (maximum 20d6)."
  "name": "Goblin Projectile"
"source":
- "SKT"
"image": "[[Ogre Goblin Hucker.png]]"
```
^statblock

*Source: Storm King's Thunder p. 50*

## Environment

grassland, forest, swamp, hill, desert, coastal, arctic, underdark, mountain