---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/gargantuan
- monster/type/monstrosity
- monster/environment/mountain
- monster/environment/hill
- monster/environment/desert
- monster/environment/coastal
- monster/environment/arctic
aliases: ["Roc"]
statblock: true
"name": "Roc"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "248"
"hit_dice": "16d20 + 80"
"stats":
- !!int "28"
- !!int "10"
- !!int "20"
- !!int "3"
- !!int "10"
- !!int "9"
"speed": "walk 20 ft., fly 120 ft."
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "9"
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The roc has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The roc makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 27 (4d8\
    \ + 9) piercing damage."
  "name": "Beak"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (4d6\
    \ + 9) slashing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 19). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the roc can't use its talons on another target."
  "name": "Talons"
"source":
- "MM"
- "CoS"
- "SKT"
- "GoS"
- "DC"
- "DIP"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "WBtW"
name: Roc
image: "[[Roc.png]]"
---

# Roc

```statblock
"name": "Roc"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "248"
"hit_dice": "16d20 + 80"
"stats":
- !!int "28"
- !!int "10"
- !!int "20"
- !!int "3"
- !!int "10"
- !!int "9"
"speed": "walk 20 ft., fly 120 ft."
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "9"
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The roc has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The roc makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 27 (4d8\
    \ + 9) piercing damage."
  "name": "Beak"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (4d6\
    \ + 9) slashing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 19). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the roc can't use its talons on another target."
  "name": "Talons"
"source":
- "MM"
- "CoS"
- "SKT"
- "GoS"
- "DC"
- "DIP"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "WBtW"
"image": "[[Roc.png]]"
```
^statblock

*Source: Monster Manual p. 260, Curse of Strahd, Storm King's Thunder, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, The Wild Beyond the Witchlight*

## Description

At first sight, a roc's silhouette looks much like any other bird of prey. As it descends, however, its unearthly size becomes terrifyingly clear. In flight, a roc's wingspan spreads two hundred feet or more. At rest, perched upon the mountain peaks that are its home, this monstrous bird rivals the oldest dragons in size.

**Sky Titans.** In the ancient days when giants battled dragons for control of the world, Annam, the father of the giant gods, created the rocs so that his worshipers might challenge the dragons' dominance of the air.

When the war ended, the rocs were freed from giant domination and spread throughout the world.

Though cloud giants and storm giants sometimes tame these great birds, rocs treat even giants as potential prey. They fly great distances in search of food, soaring high above the clouds to reach their favored hunting grounds. A roc seldom hunts swift or small creatures, and it ignores towns and forests where prey can easily take cover. When it locates a large and slow-moving target such as a giant, a whale, or an elephant, a roc dives down to snatch its prey in its massive talons.

**Remote and Alone.** Rocs are solitary creatures that can live for centuries. They lair in nests made from trees, tents, broken ships, and the remains of caravans they carry off, placing these massive tangles in mountain clefts out of the reach of lesser creatures.

Sometimes a roc's nest contains treasures from the caravans or ships they raid, but these creatures are heedless of such baubles. More rarely, a nest holds eggs that are taller than a human, produced by the rocs' infrequent mating.

## Environment

mountain, hill, desert, coastal, arctic