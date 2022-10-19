---
cssclass: json5e-monster
tags:
- compendium/src/psx
- monster/size/gargantuan
- monster/type/monstrosity
aliases: ["Sunbird"]
statblock: true
"name": "Sunbird"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "279"
"hit_dice": "18d20 + 90"
"stats":
- !!int "28"
- !!int "10"
- !!int "20"
- !!int "13"
- !!int "14"
- !!int "15"
"speed": "walk 20 ft., fly 120 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Constitution": !!int "10"
"skillsaves":
  "Perception": !!int "7"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "fire"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Giant Owl, understands Common but can't speak it"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the sunbird dies, it explodes, and each creature within 30 feet of\
    \ it must make a DC 18 Dexterity saving throw, taking 42 (12d6) fire damage on\
    \ a failed save, or half as much damage on a successful one. The explosion ignites\
    \ flammable objects in that area that aren't being worn or carried. The sunbird's\
    \ body turns to ash, but an egg is left where the sunbird was."
  "name": "Death Throes"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of the sunbird's turns, each creature within 5 feet\
    \ of it takes 11 (2d10) fire damage, and flammable objects in the area that aren't\
    \ being worn or carried ignite. A creature that touches the sunbird or hits it\
    \ with a melee attack while within 5 feet of it takes 11 (2d10) fire damage. The\
    \ aura also sheds bright light in a 60-foot radius and dim light for an additional\
    \ 60 feet."
  "name": "Fire Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sunbird doesn't provoke opportunity attacks when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sunbird has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sunbird makes two talon attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 16 (2d6\
    \ + 9) slashing damage plus 14 (4d6) fire damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 18). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the sunbird can't attack another target with that talon. A [grappled](/rules/conditions.md#grappled)\
    \ creature takes 11 (2d10) fire damage at the start of each of the sunbird's turns."
  "name": "Talon"
"source":
- "PSX"
name: Sunbird
image: "[[Sunbird.png]]"
---

# Sunbird

```statblock
"name": "Sunbird"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "279"
"hit_dice": "18d20 + 90"
"stats":
- !!int "28"
- !!int "10"
- !!int "20"
- !!int "13"
- !!int "14"
- !!int "15"
"speed": "walk 20 ft., fly 120 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Constitution": !!int "10"
"skillsaves":
  "Perception": !!int "7"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "fire"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Giant Owl, understands Common but can't speak it"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the sunbird dies, it explodes, and each creature within 30 feet of\
    \ it must make a DC 18 Dexterity saving throw, taking 42 (12d6) fire damage on\
    \ a failed save, or half as much damage on a successful one. The explosion ignites\
    \ flammable objects in that area that aren't being worn or carried. The sunbird's\
    \ body turns to ash, but an egg is left where the sunbird was."
  "name": "Death Throes"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of the sunbird's turns, each creature within 5 feet\
    \ of it takes 11 (2d10) fire damage, and flammable objects in the area that aren't\
    \ being worn or carried ignite. A creature that touches the sunbird or hits it\
    \ with a melee attack while within 5 feet of it takes 11 (2d10) fire damage. The\
    \ aura also sheds bright light in a 60-foot radius and dim light for an additional\
    \ 60 feet."
  "name": "Fire Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sunbird doesn't provoke opportunity attacks when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sunbird has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sunbird makes two talon attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 16 (2d6\
    \ + 9) slashing damage plus 14 (4d6) fire damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 18). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the sunbird can't attack another target with that talon. A [grappled](/rules/conditions.md#grappled)\
    \ creature takes 11 (2d10) fire damage at the start of each of the sunbird's turns."
  "name": "Talon"
"source":
- "PSX"
"image": "[[Sunbird.png]]"
```
^statblock

*Source: Plane Shift: Ixalan p. 32*