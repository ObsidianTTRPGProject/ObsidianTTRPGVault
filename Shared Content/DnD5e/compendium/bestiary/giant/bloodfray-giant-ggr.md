---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/huge
- monster/type/giant
aliases: ["Bloodfray Giant"]
statblock: true
"name": "Bloodfray Giant"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "103"
"hit_dice": "9d12 + 45"
"stats":
- !!int "23"
- !!int "9"
- !!int "20"
- !!int "7"
- !!int "8"
- !!int "9"
"speed": "walk 40 ft."
"saves":
  "Wisdom": !!int "2"
  "Strength": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "9"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Giant"
"cr": "6"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 20 ft., one target. Hit: 16 (3d6\
    \ + 6) bludgeoning damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 17). Until the grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the giant can't use this attack on anyone else."
  "name": "Chain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 16\
    \ (3d6 + 6) bludgeoning damage."
  "name": "Rock"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "After a creature the giant can see is dealt damage by a foe within 20 feet\
    \ of the giant, the giant makes a chain attack against that foe."
  "name": "Furious Defense"
"source":
- "GGR"
name: Bloodfray Giant
image: "[[Bloodfray Giant.png]]"
---

# Bloodfray Giant

```statblock
"name": "Bloodfray Giant"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "103"
"hit_dice": "9d12 + 45"
"stats":
- !!int "23"
- !!int "9"
- !!int "20"
- !!int "7"
- !!int "8"
- !!int "9"
"speed": "walk 40 ft."
"saves":
  "Wisdom": !!int "2"
  "Strength": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "9"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Giant"
"cr": "6"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 20 ft., one target. Hit: 16 (3d6\
    \ + 6) bludgeoning damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 17). Until the grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the giant can't use this attack on anyone else."
  "name": "Chain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 16\
    \ (3d6 + 6) bludgeoning damage."
  "name": "Rock"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "After a creature the giant can see is dealt damage by a foe within 20 feet\
    \ of the giant, the giant makes a chain attack against that foe."
  "name": "Furious Defense"
"source":
- "GGR"
"image": "[[Bloodfray Giant.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 200*

## Description

Giants in the Cult of Rakdos act as enforcers, bouncers, and sometimes even pillars, holding the mobile platforms that serve as stages for Rakdos performances. Like other members of the cult, giants thrill to the violence of those shows. Though they can seem entranced by the horror unfolding on the stage, they react quickly and brutally to any interruption of the performance.

**Giants.** Giants use their tremendous size and strength to advance the cause of no less than four guilds. In the Boros Legion and the Orzhov Syndicate, they are cunning soldiers. The giants of the Cult of Rakdos and the Gruul Clans are no less effective but lack discipline.