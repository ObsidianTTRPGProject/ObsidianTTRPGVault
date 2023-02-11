---
cssclass: json5e-monster
tags:
- compendium/src/rot
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Dragonfang"]
statblock: true
"name": "Dragonfang"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "6"
"damage_resistances": "acid, cold, fire, lightning, poison"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Infernal"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonfang has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened). While the dragonfang can see\
    \ a dragon or higher-ranking Cult of the Dragon cultist friendly to it, the dragonfang\
    \ ignores the effects of being [charmed](/rules/conditions.md#charmed) or [frightened](/rules/conditions.md#frightened)."
  "name": "Dragon Fanatic"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, if the dragonfang makes a weapon attack with advantage on\
    \ the attack roll and hits, the target takes an extra 10 (3d6) damage."
  "name": "Fanatic Advantage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonfang can use a bonus action to gain a flying speed of 30 feet\
    \ until the end of its turn."
  "name": "Limited Flight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonfang has advantage on an attack roll against a creature if at\
    \ least one of the dragonfang's allies is within 5 feet of the creature and the\
    \ ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Dragonfang attacks twice with its shortsword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage plus 7 (2d6) damage of the type to which the dragonfang\
    \ has resistance."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 50 ft., one target. Hit: 22 (5d8)\
    \ damage of the type to which the dragonfang has damage resistance."
  "name": "Orb of Dragon's Breath (2/Day)"
"source":
- "RoT"
- "ToD"
name: Dragonfang
image: "[[Dragonfang.png]]"
---

# Dragonfang

```statblock
"name": "Dragonfang"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "6"
"damage_resistances": "acid, cold, fire, lightning, poison"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Infernal"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonfang has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened). While the dragonfang can see\
    \ a dragon or higher-ranking Cult of the Dragon cultist friendly to it, the dragonfang\
    \ ignores the effects of being [charmed](/rules/conditions.md#charmed) or [frightened](/rules/conditions.md#frightened)."
  "name": "Dragon Fanatic"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, if the dragonfang makes a weapon attack with advantage on\
    \ the attack roll and hits, the target takes an extra 10 (3d6) damage."
  "name": "Fanatic Advantage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonfang can use a bonus action to gain a flying speed of 30 feet\
    \ until the end of its turn."
  "name": "Limited Flight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonfang has advantage on an attack roll against a creature if at\
    \ least one of the dragonfang's allies is within 5 feet of the creature and the\
    \ ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Dragonfang attacks twice with its shortsword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage plus 7 (2d6) damage of the type to which the dragonfang\
    \ has resistance."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 50 ft., one target. Hit: 22 (5d8)\
    \ damage of the type to which the dragonfang has damage resistance."
  "name": "Orb of Dragon's Breath (2/Day)"
"source":
- "RoT"
- "ToD"
"image": "[[Dragonfang.png]]"
```
^statblock

*Source: The Rise of Tiamat p. 89, Tyranny of Dragons p. 182*