---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Harpy"]
---
# [Harpy](3-Mechanics\CLI\bestiary\monstrosity/harpy.md)
*Source: Monster Manual p. 181. Available in the SRD and the Basic Rules.*  

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
"speed": "20 ft., fly 40 ft."
"senses": "passive Perception 10"
"languages": "Common"
"cr": "1"
"actions":
- "desc": "The harpy makes two attacks: one with its claws and one with its club."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+3 (+3) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d4 + 1|text(6) (2d4 + 1) slashing damage."
  "name": "Claws"
- "desc": "Melee Weapon Attack: dice: d20+3 (+3) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d4 + 1|text(3) (1d4 + 1) bludgeoning damage."
  "name": "Club"
- "desc": "The harpy sings a magical melody. Every humanoid and giant within 300 feet\
    \ of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw\
    \ or be [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed) until the song\
    \ ends. The harpy must take a bonus action on its subsequent turns to continue\
    \ singing. It can stop singing at any time. The song ends if the harpy is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated).\n\
    \nWhile [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed) by the harpy,\
    \ a target is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ and ignores the songs of other harpies. If the [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
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
- "MM"
- "PotA"
- "SKT"
- "GoS"
- "DIP"
- "ERLW"
- "EGW"
- "MOT"
- "IDRotF"
- "DoSI"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/harpy.webp"
```
^statblock

## Environment

mountain, forest, hill, coastal