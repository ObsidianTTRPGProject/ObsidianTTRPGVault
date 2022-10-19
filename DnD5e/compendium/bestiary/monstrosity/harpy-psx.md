---
cssclass: json5e-monster
tags:
- compendium/src/psx
- monster/size/medium
- monster/type/monstrosity
- monster/environment/mountain
- monster/environment/forest
- monster/environment/hill
- monster/environment/coastal
aliases: ["Harpy"]
statblock: true
"name": "Harpy"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"stats":
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "7"
- !!int "10"
- !!int "13"
"speed": "walk 20 ft., fly 40 ft."
"senses": "passive Perception 10"
"languages": "Common"
"cr": "1"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The harpy makes two attacks: one with its claws and one with its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4\
    \ + 1) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) slashing damage. If the target is a creature, it must succeed on a DC 11\
    \ Constitution saving throw or contract a disease. Until the disease is cured,\
    \ the target can't regain hit points except by magical means, and the target's\
    \ hit point maximum decreases by 3 (1d6) every 24 hours. If the target's hit point\
    \ maximum drops to 0 as a result of this disease, the target dies."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The harpy sings a magical melody. Every humanoid and giant within 300 feet\
    \ of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw\
    \ or be [charmed](/rules/conditions.md#charmed) until the song ends. The harpy\
    \ must take a bonus action on its subsequent turns to continue singing. It can\
    \ stop singing at any time. The song ends if the harpy is [incapacitated](/rules/conditions.md#incapacitated).\n\
    \nWhile [charmed](/rules/conditions.md#charmed) by the harpy, a target is [incapacitated](/rules/conditions.md#incapacitated)\
    \ and ignores the songs of other harpies. If the [charmed](/rules/conditions.md#charmed)\
    \ target is more than 5 feet away from the harpy, the target must move on its\
    \ turn toward the harpy by the most direct route. It doesn't avoid opportunity\
    \ attacks, but before moving into damaging terrain, such as lava or a pit, and\
    \ whenever it takes damage from a source other than the harpy, a target can repeat\
    \ the saving throw. A creature can also repeat the saving throw at the end of\
    \ each of its turns. If a creature's saving throw is successful, the effect ends\
    \ on it.\n\nA target that successfully saves is immune to this harpy's song for\
    \ the next 24 hours."
  "name": "Luring Song"
"source":
- "PSX"
name: Harpy
image: "[[Harpy.png]]"
---

# Harpy

```statblock
"name": "Harpy"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"stats":
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "7"
- !!int "10"
- !!int "13"
"speed": "walk 20 ft., fly 40 ft."
"senses": "passive Perception 10"
"languages": "Common"
"cr": "1"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The harpy makes two attacks: one with its claws and one with its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4\
    \ + 1) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) slashing damage. If the target is a creature, it must succeed on a DC 11\
    \ Constitution saving throw or contract a disease. Until the disease is cured,\
    \ the target can't regain hit points except by magical means, and the target's\
    \ hit point maximum decreases by 3 (1d6) every 24 hours. If the target's hit point\
    \ maximum drops to 0 as a result of this disease, the target dies."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The harpy sings a magical melody. Every humanoid and giant within 300 feet\
    \ of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw\
    \ or be [charmed](/rules/conditions.md#charmed) until the song ends. The harpy\
    \ must take a bonus action on its subsequent turns to continue singing. It can\
    \ stop singing at any time. The song ends if the harpy is [incapacitated](/rules/conditions.md#incapacitated).\n\
    \nWhile [charmed](/rules/conditions.md#charmed) by the harpy, a target is [incapacitated](/rules/conditions.md#incapacitated)\
    \ and ignores the songs of other harpies. If the [charmed](/rules/conditions.md#charmed)\
    \ target is more than 5 feet away from the harpy, the target must move on its\
    \ turn toward the harpy by the most direct route. It doesn't avoid opportunity\
    \ attacks, but before moving into damaging terrain, such as lava or a pit, and\
    \ whenever it takes damage from a source other than the harpy, a target can repeat\
    \ the saving throw. A creature can also repeat the saving throw at the end of\
    \ each of its turns. If a creature's saving throw is successful, the effect ends\
    \ on it.\n\nA target that successfully saves is immune to this harpy's song for\
    \ the next 24 hours."
  "name": "Luring Song"
"source":
- "PSX"
"image": "[[Harpy.png]]"
```
^statblock

*Source: Plane Shift: Ixalan p. 36*

## Environment

mountain, forest, hill, coastal