---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/large
- monster/type/giant
aliases: ["Orzhov Giant"]
statblock: true
"name": "Orzhov Giant"
"size": "Large"
"type": "giant"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "84"
"hit_dice": "8d10 + 40"
"stats":
- !!int "23"
- !!int "13"
- !!int "21"
- !!int "12"
- !!int "13"
- !!int "8"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "8"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Giant"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the giant can target a creature it can see within 30\
    \ feet of it and make that creature its focus. The target remains the giant's\
    \ focus for 1 minute, or until either the target or the giant drops to 0 hit points.\
    \ When the giant makes an attack roll against its focus, it adds a d4 to its attack\
    \ roll. If the giant attacks a different target while it has a focus, it subtracts\
    \ a d4 from its attack roll."
  "name": "Focus"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two greataxe attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12\
    \ + 6) slashing damage. If the Orzhov giant scores a critical hit, it rolls the\
    \ damage dice three times, instead of twice."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28\
    \ (4d10 + 6) bludgeoning damage."
  "name": "Rock"
"source":
- "GGR"
name: Orzhov Giant
image: "[[Orzhov Giant.png]]"
---

# Orzhov Giant

```statblock
"name": "Orzhov Giant"
"size": "Large"
"type": "giant"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "84"
"hit_dice": "8d10 + 40"
"stats":
- !!int "23"
- !!int "13"
- !!int "21"
- !!int "12"
- !!int "13"
- !!int "8"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "8"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Giant"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the giant can target a creature it can see within 30\
    \ feet of it and make that creature its focus. The target remains the giant's\
    \ focus for 1 minute, or until either the target or the giant drops to 0 hit points.\
    \ When the giant makes an attack roll against its focus, it adds a d4 to its attack\
    \ roll. If the giant attacks a different target while it has a focus, it subtracts\
    \ a d4 from its attack roll."
  "name": "Focus"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two greataxe attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12\
    \ + 6) slashing damage. If the Orzhov giant scores a critical hit, it rolls the\
    \ damage dice three times, instead of twice."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28\
    \ (4d10 + 6) bludgeoning damage."
  "name": "Rock"
"source":
- "GGR"
"image": "[[Orzhov Giant.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 202*

## Description

A few giants join the ranks of the Orzhov Syndicate and serve as guards, executioners, and thugs-the muscle of the guild. The presence of Orzhov giants in markets and streets serves as an effective reminder for business owners to keep their payments up to date.

**Giants.** Giants use their tremendous size and strength to advance the cause of no less than four guilds. In the Boros Legion and the Orzhov Syndicate, they are cunning soldiers. The giants of the Cult of Rakdos and the Gruul Clans are no less effective but lack discipline.