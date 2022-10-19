---
cssclass: json5e-monster
tags:
- compendium/src/rot
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Dragonsoul"]
statblock: true
"name": "Dragonsoul"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "110"
"hit_dice": "17d8 + 34"
"stats":
- !!int "11"
- !!int "18"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "7"
"damage_resistances": "acid, cold, fire, lightning, poison"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Infernal"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonsoul has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened). While the dragonsoul can see\
    \ a dragon or higher-ranking Cult of the Dragon cultist friendly to it, the dragonsoul\
    \ ignores the effects of being [charmed](/rules/conditions.md#charmed) or [frightened](/rules/conditions.md#frightened)."
  "name": "Dragon Fanatic"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, if the dragonsoul makes a weapon attack with advantage on\
    \ the attack roll and hits, the target takes an extra 10 (3d6) damage."
  "name": "Fanatic Advantage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonsoul can use a bonus action to gain a flying speed of 30 feet\
    \ until the end of its turn."
  "name": "Limited Flight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonsoul has advantage on an attack roll against a creature if at\
    \ least one of the dragonsoul's allies is within 5 feet of the creature and the\
    \ ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Dragonsoul attacks twice with its shortsword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage plus 10 (3d6) damage of the type to which the dragonsoul\
    \ has resistance."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 90 ft., one target. Hit: 27 (6d8)\
    \ damage of the type to which the dragonsoul has damage resistance."
  "name": "Orb of Dragon's Breath (3/Day)"
"source":
- "RoT"
- "ToD"
name: Dragonsoul
image: "[[Dragonsoul.png]]"
---

# Dragonsoul

```statblock
"name": "Dragonsoul"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "110"
"hit_dice": "17d8 + 34"
"stats":
- !!int "11"
- !!int "18"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "7"
"damage_resistances": "acid, cold, fire, lightning, poison"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Infernal"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonsoul has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened). While the dragonsoul can see\
    \ a dragon or higher-ranking Cult of the Dragon cultist friendly to it, the dragonsoul\
    \ ignores the effects of being [charmed](/rules/conditions.md#charmed) or [frightened](/rules/conditions.md#frightened)."
  "name": "Dragon Fanatic"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, if the dragonsoul makes a weapon attack with advantage on\
    \ the attack roll and hits, the target takes an extra 10 (3d6) damage."
  "name": "Fanatic Advantage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonsoul can use a bonus action to gain a flying speed of 30 feet\
    \ until the end of its turn."
  "name": "Limited Flight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonsoul has advantage on an attack roll against a creature if at\
    \ least one of the dragonsoul's allies is within 5 feet of the creature and the\
    \ ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Dragonsoul attacks twice with its shortsword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage plus 10 (3d6) damage of the type to which the dragonsoul\
    \ has resistance."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 90 ft., one target. Hit: 27 (6d8)\
    \ damage of the type to which the dragonsoul has damage resistance."
  "name": "Orb of Dragon's Breath (3/Day)"
"source":
- "RoT"
- "ToD"
"image": "[[Dragonsoul.png]]"
```
^statblock

*Source: The Rise of Tiamat p. 89, Tyranny of Dragons p. 183*