---
cssclass: json5e-monster
tags:
- compendium/src/hotdq
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Dragonwing"]
statblock: true
"name": "Dragonwing"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "11"
- !!int "16"
- !!int "13"
- !!int "11"
- !!int "11"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "2"
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "5"
"damage_resistances": "acid, cold, fire, lightning, poison"
"senses": "passive Perception 10"
"languages": "Common, Draconic"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonwing has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened). While the dragonwing can see\
    \ a dragon or higher-ranking Cult of the Dragon cultist friendly to it, the dragonwing\
    \ ignores the effects of being [charmed](/rules/conditions.md#charmed) or [frightened](/rules/conditions.md#frightened)."
  "name": "Dragon Fanatic"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, if the dragonwing makes a weapon attack with advantage on\
    \ the attack roll and hits, the target takes an extra 7 (2d6) damage."
  "name": "Fanatic Advantage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonwing can use a bonus action to gain a flying speed of 30 feet\
    \ until the end of its turn."
  "name": "Limited Flight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonwing has advantage on an attack roll against a creature if at\
    \ least one of the dragonwing's allies is within 5 feet of the creature and the\
    \ ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonwing attacks twice with its scimitar."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage plus 3 (1d6) damage of the type to which the cultist has\
    \ resistance."
  "name": "Scimitar"
"source":
- "HotDQ"
- "RoT"
- "ToD"
name: Dragonwing
image: "[[Dragonwing.png]]"
---

# Dragonwing

```statblock
"name": "Dragonwing"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "11"
- !!int "16"
- !!int "13"
- !!int "11"
- !!int "11"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "2"
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "5"
"damage_resistances": "acid, cold, fire, lightning, poison"
"senses": "passive Perception 10"
"languages": "Common, Draconic"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonwing has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened). While the dragonwing can see\
    \ a dragon or higher-ranking Cult of the Dragon cultist friendly to it, the dragonwing\
    \ ignores the effects of being [charmed](/rules/conditions.md#charmed) or [frightened](/rules/conditions.md#frightened)."
  "name": "Dragon Fanatic"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, if the dragonwing makes a weapon attack with advantage on\
    \ the attack roll and hits, the target takes an extra 7 (2d6) damage."
  "name": "Fanatic Advantage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonwing can use a bonus action to gain a flying speed of 30 feet\
    \ until the end of its turn."
  "name": "Limited Flight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonwing has advantage on an attack roll against a creature if at\
    \ least one of the dragonwing's allies is within 5 feet of the creature and the\
    \ ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonwing attacks twice with its scimitar."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage plus 3 (1d6) damage of the type to which the cultist has\
    \ resistance."
  "name": "Scimitar"
"source":
- "HotDQ"
- "RoT"
- "ToD"
"image": "[[Dragonwing.png]]"
```
^statblock

*Source: Hoard of the Dragon Queen p. 90, The Rise of Tiamat p. 89, Tyranny of Dragons p. 183*