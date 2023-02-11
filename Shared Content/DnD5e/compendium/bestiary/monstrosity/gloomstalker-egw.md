---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/large
- monster/type/monstrosity
aliases: ["Gloomstalker"]
statblock: true
"name": "Gloomstalker"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "22"
- !!int "16"
- !!int "14"
- !!int "5"
- !!int "17"
- !!int "14"
"speed": "walk 40 ft., fly 80 ft."
"saves":
  "Dexterity": !!int "6"
  "Strength": !!int "9"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "9"
  "Stealth": !!int "6"
  "Perception": !!int "6"
"damage_vulnerabilities": "radiant"
"senses": "darkvision 240 ft, passive Perception 16"
"languages": "understands Common but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the gloomstalker can teleport up to 40 feet to an unoccupied\
    \ space it can see."
  "name": "Shadowstep"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the gloomstalker has disadvantage on attack rolls, as\
    \ well as on Wisdom (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gloomstalker makes two attacks: one with its bite and one with its\
    \ claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 15 (2d8\
    \ + 6) piercing damage plus 7 (2d6) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage plus 7 (2d6) necrotic damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one Medium or smaller creature.\
    \ Hit: 13 (2d6 + 6) slashing damage plus 7 (2d6) necrotic damage, and the target\
    \ is [grappled](/rules/conditions.md#grappled) (escape DC 17). While [grappled](/rules/conditions.md#grappled)\
    \ in this way, the target is [restrained](/rules/conditions.md#restrained)."
  "name": "Snatch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gloomstalker emits a terrible shriek. Each enemy within 60 feet of\
    \ the gloomstalker that can hear it must succeed on a DC 13 Constitution saving\
    \ throw or be [paralyzed](/rules/conditions.md#paralyzed) until the end of the\
    \ enemy's next turn."
  "name": "Shriek (Recharge 6)"
"source":
- "EGW"
- "CRCotN"
name: Gloomstalker
image: "[[Gloomstalker.png]]"
---

# Gloomstalker

```statblock
"name": "Gloomstalker"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "22"
- !!int "16"
- !!int "14"
- !!int "5"
- !!int "17"
- !!int "14"
"speed": "walk 40 ft., fly 80 ft."
"saves":
  "Dexterity": !!int "6"
  "Strength": !!int "9"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "9"
  "Stealth": !!int "6"
  "Perception": !!int "6"
"damage_vulnerabilities": "radiant"
"senses": "darkvision 240 ft, passive Perception 16"
"languages": "understands Common but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the gloomstalker can teleport up to 40 feet to an unoccupied\
    \ space it can see."
  "name": "Shadowstep"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the gloomstalker has disadvantage on attack rolls, as\
    \ well as on Wisdom (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gloomstalker makes two attacks: one with its bite and one with its\
    \ claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 15 (2d8\
    \ + 6) piercing damage plus 7 (2d6) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage plus 7 (2d6) necrotic damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one Medium or smaller creature.\
    \ Hit: 13 (2d6 + 6) slashing damage plus 7 (2d6) necrotic damage, and the target\
    \ is [grappled](/rules/conditions.md#grappled) (escape DC 17). While [grappled](/rules/conditions.md#grappled)\
    \ in this way, the target is [restrained](/rules/conditions.md#restrained)."
  "name": "Snatch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gloomstalker emits a terrible shriek. Each enemy within 60 feet of\
    \ the gloomstalker that can hear it must succeed on a DC 13 Constitution saving\
    \ throw or be [paralyzed](/rules/conditions.md#paralyzed) until the end of the\
    \ enemy's next turn."
  "name": "Shriek (Recharge 6)"
"source":
- "EGW"
- "CRCotN"
"image": "[[Gloomstalker.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 291, Critical Role: Call of the Netherdeep p. 291*

## Description

A gloomstalker is a terrifying, winged predator resembling a wyvern composed of twisting shadows, with glowing eyes and dagger-like teeth.