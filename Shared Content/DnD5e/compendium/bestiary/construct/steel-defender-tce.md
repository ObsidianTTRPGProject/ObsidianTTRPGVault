---
cssclass: json5e-monster
tags:
- compendium/src/tce
- monster/size/medium
- monster/type/construct
aliases: ["Steel Defender"]
statblock: true
"name": "Steel Defender"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"stats":
- !!int "14"
- !!int "12"
- !!int "14"
- !!int "4"
- !!int "10"
- !!int "6"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "0"
  "Constitution": !!int "0"
"skillsaves":
  "Athletics": !!int "0"
  "Perception": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 0"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The defender can't be surprised."
  "name": "Vigilant"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target you can see. Hit: 1d8 + PB force damage."
  "name": "Force-Empowered Rend"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The magical mechanisms inside the defender restore 2d8 + PB hit points\
    \ to itself or to one construct or object within 5 feet of it."
  "name": "Repair (3/Day)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The defender imposes disadvantage on the attack roll of one creature it\
    \ can see that is within 5 feet of it, provided the attack roll is against a creature\
    \ other than the defender."
  "name": "Deflect Attack"
"source":
- "TCE"
- "ERLW"
name: Steel Defender
image: "[[Steel Defender.png]]"
---

# Steel Defender

```statblock
"name": "Steel Defender"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"stats":
- !!int "14"
- !!int "12"
- !!int "14"
- !!int "4"
- !!int "10"
- !!int "6"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "0"
  "Constitution": !!int "0"
"skillsaves":
  "Athletics": !!int "0"
  "Perception": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 0"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The defender can't be surprised."
  "name": "Vigilant"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target you can see. Hit: 1d8 + PB force damage."
  "name": "Force-Empowered Rend"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The magical mechanisms inside the defender restore 2d8 + PB hit points\
    \ to itself or to one construct or object within 5 feet of it."
  "name": "Repair (3/Day)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The defender imposes disadvantage on the attack roll of one creature it\
    \ can see that is within 5 feet of it, provided the attack roll is against a creature\
    \ other than the defender."
  "name": "Deflect Attack"
"source":
- "TCE"
- "ERLW"
"image": "[[Steel Defender.png]]"
```
^statblock

*Source: Tasha's Cauldron of Everything p. 19, Eberron: Rising from the Last War p. 61*