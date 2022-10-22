---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Rakdos Performer, Fire Eater"]
statblock: true
"name": "Rakdos Performer, Fire Eater"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "13"
- !!int "17"
- !!int "12"
- !!int "10"
- !!int "8"
- !!int "15"
"speed": "walk 40 ft., climb 30 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "5"
"skillsaves":
  "Performance": !!int "4"
  "Acrobatics": !!int "7"
"senses": "passive Perception 9"
"languages": "any one language (usually Common)"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The performer can take the Disengage action as a bonus action on each of\
    \ its turns."
  "name": "Nimble"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fire eater makes two attacks with its bladed chain."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Bladed Chain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fire eater exhales flames. Each creature in a 15-foot cone must make\
    \ a DC 13 Dexterity saving throw, taking 9 (2d8) fire damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Spew Flame (Recharge 4-6)"
"source":
- "GGR"
name: Rakdos Performer, Fire Eater
image: "[[Rakdos Performer, Fire Eater.png]]"
---

# Rakdos Performer, Fire Eater

```statblock
"name": "Rakdos Performer, Fire Eater"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "13"
- !!int "17"
- !!int "12"
- !!int "10"
- !!int "8"
- !!int "15"
"speed": "walk 40 ft., climb 30 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "5"
"skillsaves":
  "Performance": !!int "4"
  "Acrobatics": !!int "7"
"senses": "passive Perception 9"
"languages": "any one language (usually Common)"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The performer can take the Disengage action as a bonus action on each of\
    \ its turns."
  "name": "Nimble"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fire eater makes two attacks with its bladed chain."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Bladed Chain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fire eater exhales flames. Each creature in a 15-foot cone must make\
    \ a DC 13 Dexterity saving throw, taking 9 (2d8) fire damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Spew Flame (Recharge 4-6)"
"source":
- "GGR"
"image": "[[Rakdos Performer, Fire Eater.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 249*

## Description

By offering a place for those of many different talents, the Cult of Rakdos has seen its numbers swell with performing artists, including blade jugglers, fire eaters, and high wire acrobats. Performers carry the message of Rakdos out into the streets: cut loose, free yourself from the bonds of society's mores and expectations, and indulge your desires.