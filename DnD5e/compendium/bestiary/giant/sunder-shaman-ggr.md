---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/huge
- monster/type/giant
aliases: ["Sunder Shaman"]
statblock: true
"name": "Sunder Shaman"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Neutral"
"ac": !!int "20"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"stats":
- !!int "23"
- !!int "15"
- !!int "21"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "5"
  "Constitution": !!int "9"
"skillsaves":
  "Athletics": !!int "10"
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Giant"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of its turn, the giant can gain advantage on all melee weapon\
    \ attack rolls it makes during that turn, but attack rolls against it have advantage\
    \ until the start of its next turn."
  "name": "Reckless"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky\
    \ terrain."
  "name": "Stone Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two slam attacks. The first of those attacks that hits\
    \ deals an extra 18 (4d8) damage if the giant has taken damage since its last\
    \ turn."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 24 (4d8\
    \ + 6) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +10 to hit, range 60/240 ft., one target. Hit:\
    \ 28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed\
    \ on a DC 18 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Rock"
"source":
- "GGR"
name: Sunder Shaman
image: "[[Sunder Shaman.png]]"
---

# Sunder Shaman

```statblock
"name": "Sunder Shaman"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Neutral"
"ac": !!int "20"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"stats":
- !!int "23"
- !!int "15"
- !!int "21"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "5"
  "Constitution": !!int "9"
"skillsaves":
  "Athletics": !!int "10"
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Giant"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of its turn, the giant can gain advantage on all melee weapon\
    \ attack rolls it makes during that turn, but attack rolls against it have advantage\
    \ until the start of its next turn."
  "name": "Reckless"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky\
    \ terrain."
  "name": "Stone Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two slam attacks. The first of those attacks that hits\
    \ deals an extra 18 (4d8) damage if the giant has taken damage since its last\
    \ turn."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 24 (4d8\
    \ + 6) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +10 to hit, range 60/240 ft., one target. Hit:\
    \ 28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed\
    \ on a DC 18 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Rock"
"source":
- "GGR"
"image": "[[Sunder Shaman.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 202*

## Description

Gruul sunder shamans are angry giants that channel their rage into brutal attacks that deal overwhelming damage to foes and structures alike.

These shamans sometimes lead hill giants and stone giants that also live among the Gruul Clans. They are occasionally joined by cyclopes, ettins, fomorians, and ogres. Like the rest of the Gruul, they hate the urban development that encroaches on the wilds where they once lived-not least because they have so much difficulty fitting inside the small structures. They delight in destroying such edifices, and in the heat of their rage, they walk through buildings, trample people underfoot, and generally cause as much chaos as possible. They often armor themselves with pieces of buildings and wield columns or other architectural elements as clubs.

**Giants.** Giants use their tremendous size and strength to advance the cause of no less than four guilds. In the Boros Legion and the Orzhov Syndicate, they are cunning soldiers. The giants of the Cult of Rakdos and the Gruul Clans are no less effective but lack discipline.