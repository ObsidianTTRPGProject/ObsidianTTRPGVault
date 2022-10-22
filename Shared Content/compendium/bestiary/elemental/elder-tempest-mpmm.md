---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/gargantuan
- monster/type/elemental
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
aliases: ["Elder Tempest"]
statblock: true
"name": "Elder Tempest"
"size": "Gargantuan"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "19"
"hp": !!int "264"
"hit_dice": "16d20 + 96"
"stats":
- !!int "23"
- !!int "28"
- !!int "23"
- !!int "2"
- !!int "21"
- !!int "18"
"speed": "walk 0 ft., fly 120 ft. (hover)"
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "12"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "lightning, poison, thunder"
"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, prone,\
  \ restrained, stunned"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest can enter a hostile creature's space and stop there. It can\
    \ move through a space as narrow as 1 inch wide without squeezing."
  "name": "Air Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest doesn't provoke opportunity attack||opportunity attacks when\
    \ it flies out of an enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the tempest fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest is always at the center of a storm 1d6 + 4 miles in diameter.\
    \ Heavy precipitation in the form of either rain or snow falls there, causing\
    \ the area to be lightly obscured. Heavy rain also extinguishes open flames and\
    \ imposes disadvantage on Wisdom ([Perception](/rules/skills.md#Perception)) checks\
    \ that rely on hearing. In addition, strong winds swirl in the area covered by\
    \ the storm. The winds impose disadvantage on ranged attack rolls. They also extinguish\
    \ open flames and disperse fog."
  "name": "Living Storm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest makes two Thunderous Slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 23 (4d6\
    \ + 9) thunder damage."
  "name": "Thunderous Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 120 feet of the tempest must make a DC 21 Dexterity\
    \ saving throw, taking 27 (6d8) lightning damage on a failed save, or half as\
    \ much damage on a successful one. If a target's saving throw fails by 5 or more,\
    \ the creature is also [stunned](/rules/conditions.md#stunned) until the end of\
    \ its next turn."
  "name": "Lightning Storm (Recharge 6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest moves up to its speed."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest can cause a bolt of lightning to strike a point on the ground\
    \ anywhere under its storm. Each creature within 5 feet of that point must make\
    \ a DC 21 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Lightning Strike (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest releases a blast of thunder and wind in a line that is 300\
    \ feet long and 20 feet wide. Objects in that area take 22 (4d10) thunder damage.\
    \ Each creature there must succeed on a DC 21 Dexterity saving throw or take 22\
    \ (4d10) thunder damage and be flung up to 60 feet in a direction away from the\
    \ line. If a thrown target collides with an immovable object (such as a wall or\
    \ floor) or another creature, the target takes 3 (1d6) bludgeoning damage for\
    \ every 10 feet it was thrown before impact. If the target collides with another\
    \ creature, that other creature must succeed on a DC 19 Dexterity saving throw\
    \ or take the same impact damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Screaming Gale (Costs 3 Actions)"
"source":
- "MPMM"
- "MTF"
name: Elder Tempest
image: "[[Elder Tempest.png]]"
---

# Elder Tempest

```statblock
"name": "Elder Tempest"
"size": "Gargantuan"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "19"
"hp": !!int "264"
"hit_dice": "16d20 + 96"
"stats":
- !!int "23"
- !!int "28"
- !!int "23"
- !!int "2"
- !!int "21"
- !!int "18"
"speed": "walk 0 ft., fly 120 ft. (hover)"
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "12"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "lightning, poison, thunder"
"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, prone,\
  \ restrained, stunned"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest can enter a hostile creature's space and stop there. It can\
    \ move through a space as narrow as 1 inch wide without squeezing."
  "name": "Air Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest doesn't provoke opportunity attack||opportunity attacks when\
    \ it flies out of an enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the tempest fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest is always at the center of a storm 1d6 + 4 miles in diameter.\
    \ Heavy precipitation in the form of either rain or snow falls there, causing\
    \ the area to be lightly obscured. Heavy rain also extinguishes open flames and\
    \ imposes disadvantage on Wisdom ([Perception](/rules/skills.md#Perception)) checks\
    \ that rely on hearing. In addition, strong winds swirl in the area covered by\
    \ the storm. The winds impose disadvantage on ranged attack rolls. They also extinguish\
    \ open flames and disperse fog."
  "name": "Living Storm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest makes two Thunderous Slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 23 (4d6\
    \ + 9) thunder damage."
  "name": "Thunderous Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 120 feet of the tempest must make a DC 21 Dexterity\
    \ saving throw, taking 27 (6d8) lightning damage on a failed save, or half as\
    \ much damage on a successful one. If a target's saving throw fails by 5 or more,\
    \ the creature is also [stunned](/rules/conditions.md#stunned) until the end of\
    \ its next turn."
  "name": "Lightning Storm (Recharge 6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest moves up to its speed."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest can cause a bolt of lightning to strike a point on the ground\
    \ anywhere under its storm. Each creature within 5 feet of that point must make\
    \ a DC 21 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Lightning Strike (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tempest releases a blast of thunder and wind in a line that is 300\
    \ feet long and 20 feet wide. Objects in that area take 22 (4d10) thunder damage.\
    \ Each creature there must succeed on a DC 21 Dexterity saving throw or take 22\
    \ (4d10) thunder damage and be flung up to 60 feet in a direction away from the\
    \ line. If a thrown target collides with an immovable object (such as a wall or\
    \ floor) or another creature, the target takes 3 (1d6) bludgeoning damage for\
    \ every 10 feet it was thrown before impact. If the target collides with another\
    \ creature, that other creature must succeed on a DC 19 Dexterity saving throw\
    \ or take the same impact damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Screaming Gale (Costs 3 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "[[Elder Tempest.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 121, Mordenkainen's Tome of Foes p. 200*

## Description

Terrifying storms manifest in the bodies of elder tempests. Beings carved from clouds, wind, rain, and lightning, elder tempests assume the shape of serpents that slither through the sky. They drown the land beneath them with rain and stab the earth with lances of lightning. Punishing winds scream around them as they fly, feeding the chaos they create.

## Environment

arctic, coastal, grassland, hill, mountain