---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/medium
- monster/type/humanoid
aliases: ["Setessan Hoplite"]
statblock: true
"name": "Setessan Hoplite"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "14"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "16"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "5"
"skillsaves":
  "Perception": !!int "5"
  "Acrobatics": !!int "5"
  "Survival": !!int "5"
"senses": "passive Perception 15"
"languages": "Common"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hoplite has advantage on an attack roll against a creature if at least\
    \ one of the hoplite's allies is within 5 feet of the hoplite and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hoplite makes two scimitar attacks or two longbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage plus 10 (3d6) poison damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit:\
    \ 7 (1d8 + 3) piercing damage plus 10 (3d6) poison damage."
  "name": "Longbow"
"source":
- "MOT"
name: Setessan Hoplite
image: "[[Setessan Hoplite.png]]"
---

# Setessan Hoplite

```statblock
"name": "Setessan Hoplite"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "14"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "16"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "5"
"skillsaves":
  "Perception": !!int "5"
  "Acrobatics": !!int "5"
  "Survival": !!int "5"
"senses": "passive Perception 15"
"languages": "Common"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hoplite has advantage on an attack roll against a creature if at least\
    \ one of the hoplite's allies is within 5 feet of the hoplite and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hoplite makes two scimitar attacks or two longbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage plus 10 (3d6) poison damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit:\
    \ 7 (1d8 + 3) piercing damage plus 10 (3d6) poison damage."
  "name": "Longbow"
"source":
- "MOT"
"image": "[[Setessan Hoplite.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 229*

## Description

Most Setessan hoplites begin their training as hunters, making them skilled in traversing the woods and adept at both guerrilla tactics and archery. Their strategies often emulate the favored servants of Nylea—especially wild beasts like wolves and lynxes. Typically a few soldiers harry an enemy while the rest capitalize on their foe's distraction.

Hoplites are highly trained warriors, versed not only in strategy and tactics but in the glorification of the warrior's spirit, the basis of an ethos that forges an unbreakable bond between members of a military unit. In combat, hoplites typically work in groups and use coordinated tactics to win victories.

The three Hoplite Unit Names tables present the sorts of titles used by hoplite contingents hailing from Theros's great poleis. Consider using these names for military forces characters encounter during their adventures or that they were once a part of.

**Setessan Hoplite Unit Names**

| dice: d8 | Name |
|----------|------|
| 1 | Nylea's Arrows |
| 2 | The Watchers |
| 3 | Fangs of Ophis |
| 4 | The Swiftswords |
| 5 | Karametra's Wolves |
| 6 | Defenders of the Grove |
| 7 | Bronze Blades |
| 8 | The Jackals |
^setessan-hoplite-unit-names