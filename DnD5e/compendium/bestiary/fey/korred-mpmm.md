---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/small
- monster/type/fey
- monster/environment/forest
aliases: ["Korred"]
statblock: true
"name": "Korred"
"size": "Small"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"hp": !!int "93"
"hit_dice": "11d6 + 55"
"stats":
- !!int "23"
- !!int "14"
- !!int "20"
- !!int "10"
- !!int "15"
- !!int "9"
"speed": "walk 30 ft., burrow 30 ft."
"skillsaves":
  "Athletics": !!int "9"
  "Stealth": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., tremorsense 120 ft., passive Perception 15"
"languages": "Dwarvish, Gnomish, Sylvan, Terran, Undercommon"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The korred casts one of the following spells, requiring no spell components\
    \ and using Wisdom as the spellcasting ability (spell save DC 13):\n\nAt will:\
    \ [commune with nature](/compendium/spells/commune-with-nature.md) (as an action),\
    \ [meld into stone](/compendium/spells/meld-into-stone.md), [stone shape](/compendium/spells/stone-shape.md)\n\
    \n1/day: [Otto's irresistible dance](/compendium/spells/ottos-irresistible-dance.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The korred has advantage on Dexterity ([Stealth](/rules/skills.md#Stealth))\
    \ checks made to hide in rocky terrain."
  "name": "Stone Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The korred makes two Greatclub or Rock attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) bludgeoning damage, or 19 (3d8 + 6) bludgeoning damage if the korred is\
    \ on the ground."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 60/120 ft., one target. Hit: 10\
    \ (1d8 + 6) bludgeoning damage, or 19 (3d8 + 6) bludgeoning damage if the korred\
    \ is on the ground."
  "name": "Rock"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The korred has at least one 50-foot-long rope woven out of its hair. The\
    \ korred commands one such rope within 30 feet of it to move up to 20 feet and\
    \ entangle a Large or smaller creature that the korred can see. The target must\
    \ succeed on a DC 13 Dexterity saving throw or become [grappled](/rules/conditions.md#grappled)\
    \ by the rope (escape DC 13). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ The korred can use a bonus action to release the target, which is also freed\
    \ if the korred dies or becomes [incapacitated](/rules/conditions.md#incapacitated).\n\
    \nA rope of korred hair has AC 20 and 20 hit points. It regains 1 hit point at\
    \ the start of each of the korred's turns while the rope has at least 1 hit point\
    \ and the korred is alive. If the rope drops to 0 hit points, it is destroyed."
  "name": "Command Hair"
"source":
- "MPMM"
- "VGM"
name: Korred
image: "[[Korred.png]]"
---

# Korred

```statblock
"name": "Korred"
"size": "Small"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"hp": !!int "93"
"hit_dice": "11d6 + 55"
"stats":
- !!int "23"
- !!int "14"
- !!int "20"
- !!int "10"
- !!int "15"
- !!int "9"
"speed": "walk 30 ft., burrow 30 ft."
"skillsaves":
  "Athletics": !!int "9"
  "Stealth": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., tremorsense 120 ft., passive Perception 15"
"languages": "Dwarvish, Gnomish, Sylvan, Terran, Undercommon"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The korred casts one of the following spells, requiring no spell components\
    \ and using Wisdom as the spellcasting ability (spell save DC 13):\n\nAt will:\
    \ [commune with nature](/compendium/spells/commune-with-nature.md) (as an action),\
    \ [meld into stone](/compendium/spells/meld-into-stone.md), [stone shape](/compendium/spells/stone-shape.md)\n\
    \n1/day: [Otto's irresistible dance](/compendium/spells/ottos-irresistible-dance.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The korred has advantage on Dexterity ([Stealth](/rules/skills.md#Stealth))\
    \ checks made to hide in rocky terrain."
  "name": "Stone Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The korred makes two Greatclub or Rock attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) bludgeoning damage, or 19 (3d8 + 6) bludgeoning damage if the korred is\
    \ on the ground."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 60/120 ft., one target. Hit: 10\
    \ (1d8 + 6) bludgeoning damage, or 19 (3d8 + 6) bludgeoning damage if the korred\
    \ is on the ground."
  "name": "Rock"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The korred has at least one 50-foot-long rope woven out of its hair. The\
    \ korred commands one such rope within 30 feet of it to move up to 20 feet and\
    \ entangle a Large or smaller creature that the korred can see. The target must\
    \ succeed on a DC 13 Dexterity saving throw or become [grappled](/rules/conditions.md#grappled)\
    \ by the rope (escape DC 13). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ The korred can use a bonus action to release the target, which is also freed\
    \ if the korred dies or becomes [incapacitated](/rules/conditions.md#incapacitated).\n\
    \nA rope of korred hair has AC 20 and 20 hit points. It regains 1 hit point at\
    \ the start of each of the korred's turns while the rope has at least 1 hit point\
    \ and the korred is alive. If the rope drops to 0 hit points, it is destroyed."
  "name": "Command Hair"
"source":
- "MPMM"
- "VGM"
"image": "[[Korred.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 166, Volo's Guide to Monsters p. 168*

## Description

Korreds are unpredictable, secretive Fey with strong ties to earth and stone. Because of their magical hair and mystical understanding of minerals, they are sought after by treasure-hunting dwarves and others who desire wealth beneath the earth.

Korreds prefer to keep their own company but occasionally consort with creatures of elemental earth such as [galeb duhr](/compendium/bestiary/elemental/galeb-duhr.md). They often gather with other korreds to perform ceremonial dances, beating out rhythms on stone with their hooves and clubs. In the depths of the Material Plane, korreds typically flee from other creatures, but they become aggressive when they feel insulted or are annoyed by the sounds of mining.

Korreds can hurl boulders far larger than it seems they should be able to, shape stone as though it were clay, and swim through rock. They also gain supernatural strength just from standing on the ground.

**Magical Hair.** Korreds have hair all over their bodies, but the hair that grows from their heads is magical. When cut, it transforms into whatever material was used to cut it. Korreds use iron shears to cut lengths of this magical hair, then twist the strands together to create iron ropes that they can manipulate, animating them to bind or snake around creatures and objects. Korreds take great pride in their hair and equally great offense at anyone who attempts to cut it without permission.

## Environment

forest