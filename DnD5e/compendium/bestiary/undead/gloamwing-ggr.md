---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/large
- monster/type/undead
aliases: ["Gloamwing"]
statblock: true
"name": "Gloamwing"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "20"
- !!int "16"
- !!int "17"
- !!int "2"
- !!int "11"
- !!int "6"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "6"
  "Strength": !!int "8"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "understands Common"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If its specter rider is reduced to 0 hit points, the gloamwing is destroyed."
  "name": "Death Link"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gloamwing doesn't provoke an opportunity attack when it flies out of\
    \ an enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the gloamwing has disadvantage on attack rolls, as well\
    \ as on Wisdom (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gloamwing makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (3d8\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6\
    \ + 5) slashing damage."
  "name": "Claws"
"source":
- "GGR"
name: Gloamwing
image: "[[Gloamwing.png]]"
---

# Gloamwing

```statblock
"name": "Gloamwing"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "20"
- !!int "16"
- !!int "17"
- !!int "2"
- !!int "11"
- !!int "6"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "6"
  "Strength": !!int "8"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "understands Common"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If its specter rider is reduced to 0 hit points, the gloamwing is destroyed."
  "name": "Death Link"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gloamwing doesn't provoke an opportunity attack when it flies out of\
    \ an enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the gloamwing has disadvantage on attack rolls, as well\
    \ as on Wisdom (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gloamwing makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (3d8\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6\
    \ + 5) slashing damage."
  "name": "Claws"
"source":
- "GGR"
"image": "[[Gloamwing.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 215*

## Description

A gloamwing's head is almost ratlike, with prominent teeth, and its leathery skin is stretched tight over its skull, where its eyes are empty sockets. Its body is mottled with bony plates, and great wings stretch from its shoulders.