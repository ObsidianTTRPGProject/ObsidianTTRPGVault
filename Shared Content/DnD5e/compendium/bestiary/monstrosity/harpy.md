---
cssclass: json5e-monster
tags:
- compendium/src/mm
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
  "desc": "The harpy makes two attacks: one with its claws and one with its club."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4\
    \ + 1) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Club"
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
  "desc": "The harpy makes two attacks: one with its claws and one with its club."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4\
    \ + 1) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Club"
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
"image": "[[Harpy.png]]"
```
^statblock

*Source: Monster Manual p. 181, Princes of the Apocalypse, Storm King's Thunder, Ghosts of Saltmarsh, Dragon of Icespire Peak, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Dragons of Stormwreck Isle*

## Description

Taking glee in suffering and death, the sadistic harpy is always on the hunt for prey. Its sweet song has lured countless adventurers to their deaths, drawing them in close for the harpy to kill and then consume.

A harpy combines the body, legs, and wings of a vulture with the torso, arms, and head of a human. Its wicked talons and bone club make it a formidable threat in combat, and its eyes reflect the absolute evil of its soul.

**Divine Curse.** Long ago, an elf wandering a forest heard birdsong so pure and wholesome that she was moved to tears. Following the music, she came upon a clearing where stood a handsome elf youth who had also paused to hear the bird's song. This was Fenmarel Mestarine, a reclusive elf god. His divine presence stole her heart as he fled, vanishing into the woods as if he was never there.

Though the elf searched the woods and called for her stranger, she found no sign of his passage. Driven to despair by her longing, she begged the gods to help her. Aerdrie Faenya, elf goddess of the sky, heard the elf's cries and was moved to her aid. She appeared as the bird whose song had entranced the outcast god, then taught that song of beauty and seduction to the elf.

When her singing failed to draw Fenmarel Mestarine to her side, the elf cursed the gods, invoking a dreadful power and transforming her into the first harpy. The curse worked its magic on the elf's spirit as well as her body, turning her desire for love into a hunger for flesh, even as her beautiful song continued to draw creatures to her deadly embrace.

**Harpy Song.** To hear a harpy's song is to hear music more beautiful than anything else in the world. A traveler that succumbs to the entrancing effect of that singing is compelled to blunder toward its source. A harpy sometimes charms victims before it attacks, but a more effective use of its song is to lure prey over cliffs, into bogs and quicksand, or into deadly pits. Creatures trapped or incapacitated then become easy targets for the harpy's wrath.

**Sadistic Cowards.** Harpies haunt bleak coastal cliffs and other places hazardous to non-flying creatures. Harpies have no interest in a fair fight, and they never attack unless they have a clear advantage. If a fight turns against a harpy, it lacks the cunning to adapt and will flee and go hungry rather than risk straight-up combat.

When they attack, harpies play with their food, delighting in the "music" their victims make as they scream. A harpy takes its time dismembering a helpless foe and can spend days torturing a victim before the merciful end.

**Gruesome Collectors.** Harpies take shiny baubles, valuable objects, and other trophies from their victims, sometimes fighting with each other for the right to claim the choicest prizes. When no valuable objects can be found, a harpy takes hair, bones, or body parts to line its nest. A harpy's lair is usually hidden in remote ruins, where adventurers can discover valuable treasure and magic hidden beneath foul piles of offal.

## Environment

mountain, forest, hill, coastal