---
cssclass: json5e-monster
tags:
- compendium/src/aitfr-dn
- monster/size/huge
- monster/type/undead
aliases: ["Giant Zombie Constrictor Snake"]
statblock: true
"name": "Giant Zombie Constrictor Snake"
"size": "Huge"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "187"
"hit_dice": "22d12 + 44"
"stats":
- !!int "19"
- !!int "16"
- !!int "14"
- !!int "1"
- !!int "15"
- !!int "4"
"speed": "walk 30 ft., climb 20 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "5"
"damage_vulnerabilities": "poison"
"senses": "blindsight 15 ft., darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the snake has disadvantage on attack rolls and on Wisdom\
    \ (Perception) checks that rely on sight. When the snake begins its turn in sunlight,\
    \ it immediately suffers 10 radiant damage."
  "name": "Sunlight Vulnerability"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the snake to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the snake drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The snake makes two attacks: one with its bite and one with a constrict\
    \ attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 17 (3d8\
    \ + 4) piercing damage, and the target must make a DC 15 Constitution saving throw,\
    \ taking 17 (5d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 17 (3d8\
    \ + 4) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the creature is [restrained](/rules/conditions.md#restrained)\
    \ and the snake cannot constrict another target."
  "name": "Constrict"
"source":
- "AitFR-DN"
name: Giant Zombie Constrictor Snake
image: "[[Giant Zombie Constrictor Snake.png]]"
---

# Giant Zombie Constrictor Snake

```statblock
"name": "Giant Zombie Constrictor Snake"
"size": "Huge"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "187"
"hit_dice": "22d12 + 44"
"stats":
- !!int "19"
- !!int "16"
- !!int "14"
- !!int "1"
- !!int "15"
- !!int "4"
"speed": "walk 30 ft., climb 20 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "5"
"damage_vulnerabilities": "poison"
"senses": "blindsight 15 ft., darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the snake has disadvantage on attack rolls and on Wisdom\
    \ (Perception) checks that rely on sight. When the snake begins its turn in sunlight,\
    \ it immediately suffers 10 radiant damage."
  "name": "Sunlight Vulnerability"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the snake to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the snake drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The snake makes two attacks: one with its bite and one with a constrict\
    \ attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 17 (3d8\
    \ + 4) piercing damage, and the target must make a DC 15 Constitution saving throw,\
    \ taking 17 (5d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 17 (3d8\
    \ + 4) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the creature is [restrained](/rules/conditions.md#restrained)\
    \ and the snake cannot constrict another target."
  "name": "Constrict"
"source":
- "AitFR-DN"
"image": "[[Giant Zombie Constrictor Snake.png]]"
```
^statblock

*Source: Adventures in the Forgotten Realms: Deepest Night p. 11*

## Description

These enormous, rotten husks were living, Medium-sized constrictors when the yuan-ti brought them to honor and entice Kyrilla to share her knowledge and powers. They grew to their full, Huge size on a diet of supplicants and prisoners, many of whose bones can be found elsewhere in the lair. When the yuan-ti turned against Kyrilla, they fought and slew these snakes—only to find them slithering again through cursed, ambient magic in Kyrilla's lair.

The constrictors die if they leave the lair.