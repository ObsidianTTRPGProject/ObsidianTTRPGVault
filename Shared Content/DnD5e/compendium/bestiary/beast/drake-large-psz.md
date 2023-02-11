---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/large
- monster/type/beast
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/hill
- monster/environment/coastal
aliases: ["Drake (Large)"]
statblock: true
"name": "Drake (Large)"
"size": "Large"
"type": "beast"
"alignment": "Neutral Good"
"ac": !!int "13"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"stats":
- !!int "16"
- !!int "17"
- !!int "13"
- !!int "8"
- !!int "14"
- !!int "10"
"speed": "walk 10 ft., fly 80 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Giant Eagle, understands Common and Auran but can't speak them"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drake has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drake makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Beak"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Talons"
"source":
- "PSZ"
name: Drake (Large)
image: "[[Drake (Large).png]]"
---

# Drake (Large)

```statblock
"name": "Drake (Large)"
"size": "Large"
"type": "beast"
"alignment": "Neutral Good"
"ac": !!int "13"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"stats":
- !!int "16"
- !!int "17"
- !!int "13"
- !!int "8"
- !!int "14"
- !!int "10"
"speed": "walk 10 ft., fly 80 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Giant Eagle, understands Common and Auran but can't speak them"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drake has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drake makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Beak"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Talons"
"source":
- "PSZ"
"image": "[[Drake (Large).png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 24*

## Environment

mountain, grassland, hill, coastal