---
cssclass: json5e-monster
tags:
- compendium/src/tce
- monster/size/tiny
- monster/type/construct
aliases: ["Homunculus Servant"]
statblock: true
"name": "Homunculus Servant"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"stats":
- !!int "4"
- !!int "15"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "7"
"speed": "walk 20 ft., fly 30 ft."
"saves":
  "Dexterity": !!int "0"
"skillsaves":
  "Stealth": !!int "0"
  "Perception": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 0"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the homunculus is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, it instead takes no damage if it succeeds\
    \ on the saving throw, and only half damage if it fails. It can't use this trait\
    \ if it's [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Evasion"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: the summoner's spell attack modifier to hit, range\
    \ 30 ft., one target you can see. Hit: 1d4 + PB force damage."
  "name": "Force Strike"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The homunculus delivers a spell you cast that has a range of touch. The\
    \ homunculus must be within 120 feet of you."
  "name": "Channel Magic"
"source":
- "TCE"
- "ERLW"
name: Homunculus Servant
image: "[[Homunculus Servant.png]]"
---

# Homunculus Servant

```statblock
"name": "Homunculus Servant"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"stats":
- !!int "4"
- !!int "15"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "7"
"speed": "walk 20 ft., fly 30 ft."
"saves":
  "Dexterity": !!int "0"
"skillsaves":
  "Stealth": !!int "0"
  "Perception": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 0"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the homunculus is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, it instead takes no damage if it succeeds\
    \ on the saving throw, and only half damage if it fails. It can't use this trait\
    \ if it's [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Evasion"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: the summoner's spell attack modifier to hit, range\
    \ 30 ft., one target you can see. Hit: 1d4 + PB force damage."
  "name": "Force Strike"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The homunculus delivers a spell you cast that has a range of touch. The\
    \ homunculus must be within 120 feet of you."
  "name": "Channel Magic"
"source":
- "TCE"
- "ERLW"
"image": "[[Homunculus Servant.png]]"
```
^statblock

*Source: Tasha's Cauldron of Everything p. 22, Eberron: Rising from the Last War p. 62*