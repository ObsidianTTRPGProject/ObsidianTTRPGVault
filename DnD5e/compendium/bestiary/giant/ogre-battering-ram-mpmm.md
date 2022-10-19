---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/giant
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
aliases: ["Ogre Battering Ram"]
statblock: true
"name": "Ogre Battering Ram"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
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
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ogre deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ogre makes two Bash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15 (2d10\
    \ + 4) bludgeoning damage, and the ogre can push the target 5 feet away if the\
    \ target is Huge or smaller."
  "name": "Bash"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature enters a space within 5 feet of the ogre, the ogre makes\
    \ a Bash attack against that creature. If the attack hits, the target's speed\
    \ is reduced to 0 until the start of the ogre's next turn."
  "name": "Block the Path"
"source":
- "MPMM"
- "MTF"
name: Ogre Battering Ram
image: "[[Ogre Battering Ram.png]]"
---

# Ogre Battering Ram

```statblock
"name": "Ogre Battering Ram"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
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
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ogre deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ogre makes two Bash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15 (2d10\
    \ + 4) bludgeoning damage, and the ogre can push the target 5 feet away if the\
    \ target is Huge or smaller."
  "name": "Bash"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature enters a space within 5 feet of the ogre, the ogre makes\
    \ a Bash attack against that creature. If the attack hits, the target's speed\
    \ is reduced to 0 until the start of the ogre's next turn."
  "name": "Block the Path"
"source":
- "MPMM"
- "MTF"
"image": "[[Ogre Battering Ram.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 200, Mordenkainen's Tome of Foes p. 220*

## Description

An ogre battering ram carries an enormous club that's primarily used for bashing doors into kindling but also works well for smashing foes. These ogres are drilled in two simple tasks: rushing forward to shatter enemy fortifications and using their weapons to force an advancing enemy to halt.

**Ogres of War.** Ogres love to rush headlong into battle, but with enough time and patience, some of them learn to carry out specialized missions. The names they are given—the battering ram, the bolt launcher, the chain brute, and the howdah—reflect their particular functions. These jobs are tailored to take advantage of an ogre's strengths.

## Environment

grassland, hill, mountain