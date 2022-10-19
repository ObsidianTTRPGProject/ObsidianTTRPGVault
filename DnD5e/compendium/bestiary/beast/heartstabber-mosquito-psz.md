---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/tiny
- monster/type/beast
- monster/environment/grassland
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
- monster/environment/urban
- monster/environment/desert
- monster/environment/coastal
- monster/environment/mountain
- monster/environment/underdark
aliases: ["Heartstabber Mosquito"]
statblock: true
"name": "Heartstabber Mosquito"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "4"
- !!int "16"
- !!int "11"
- !!int "2"
- !!int "8"
- !!int "6"
"speed": "walk 10 ft., fly 40 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "1/8"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) piercing damage, and the mosquito attaches to the target. While attached,\
    \ the mosquito doesn't attack. Instead, at the start of each of the mosquito's\
    \ turns, the target loses 5 (1d4 + 3) hit points due to blood loss.\n\nThe mosquito\
    \ can detach itself by spending 5 feet of its movement. It does so after it drains\
    \ 10 hit points of blood from the target or the target dies. A creature, including\
    \ the target, can use its action to detach the mosquito."
  "name": "Blood Drain"
"source":
- "PSZ"
name: Heartstabber Mosquito
image: "[[Heartstabber Mosquito.png]]"
---

# Heartstabber Mosquito

```statblock
"name": "Heartstabber Mosquito"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "4"
- !!int "16"
- !!int "11"
- !!int "2"
- !!int "8"
- !!int "6"
"speed": "walk 10 ft., fly 40 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "1/8"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) piercing damage, and the mosquito attaches to the target. While attached,\
    \ the mosquito doesn't attack. Instead, at the start of each of the mosquito's\
    \ turns, the target loses 5 (1d4 + 3) hit points due to blood loss.\n\nThe mosquito\
    \ can detach itself by spending 5 feet of its movement. It does so after it drains\
    \ 10 hit points of blood from the target or the target dies. A creature, including\
    \ the target, can use its action to detach the mosquito."
  "name": "Blood Drain"
"source":
- "PSZ"
"image": "[[Heartstabber Mosquito.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 27*

## Environment

grassland, forest, swamp, hill, urban, desert, coastal, mountain, underdark