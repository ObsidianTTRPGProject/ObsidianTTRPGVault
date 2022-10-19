---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/huge
- monster/type/giant
- monster/environment/coastal
- monster/environment/desert
- monster/environment/mountain
- monster/environment/underwater
aliases: ["Storm Giant Quintessent"]
statblock: true
"name": "Storm Giant Quintessent"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Good"
"ac": !!int "12"
"hp": !!int "230"
"hit_dice": "20d12 + 100"
"stats":
- !!int "29"
- !!int "14"
- !!int "20"
- !!int "17"
- !!int "20"
- !!int "19"
"speed": "walk 50 ft., fly 50 ft. (hover), swim 50 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "10"
  "Strength": !!int "14"
  "Constitution": !!int "10"
"skillsaves":
  "Perception": !!int "10"
  "History": !!int "8"
  "Arcana": !!int "8"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "lightning, thunder"
"senses": "truesight 60 ft., passive Perception 20"
"languages": "Common, Giant"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the giant fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two Lightning Sword attacks, or it uses Wind Javelin twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 40 (9d6\
    \ + 9) lightning damage."
  "name": "Lightning Sword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant coalesces wind into a javelin-like form and hurls it at a creature\
    \ it can see within 600 feet of it. The javelin deals 19 (3d6 + 9) force damage\
    \ to the target, striking unerringly. The javelin disappears after it hits."
  "name": "Wind Javelin"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant targets a creature it can see within 60 feet of it and creates\
    \ a magical gust of wind around the target, who must succeed on a DC 18 Strength\
    \ saving throw or be moved up to 20 feet in any horizontal direction the giant\
    \ chooses."
  "name": "Gust"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant hurls a thunderbolt at a creature it can see within 600 feet\
    \ of it. The target must make a DC 18 Dexterity saving throw, taking 22 (4d10)\
    \ thunder damage on a failed save, or half as much damage on a successful one."
  "name": "Thunderbolt (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant vanishes, dispersing itself into the storm surrounding its lair.\
    \ The giant can end this effect at the start of any of its turns, becoming a giant\
    \ once more and appearing in any location it chooses within its lair. While dispersed,\
    \ the giant can't take any actions other than lair actions, and it can't be targeted\
    \ by attacks, spells, or other effects. The giant can't use this ability outside\
    \ its lair, nor can it use this ability if another creature is using a [control\
    \ weather](/compendium/spells/control-weather.md) spell or similar magic to quell\
    \ the storm."
  "name": "One with the Storm (Costs 3 Actions)"
"source":
- "MPMM"
- "VGM"
name: Storm Giant Quintessent
image: "[[Storm Giant Quintessent.png]]"
---

# Storm Giant Quintessent

```statblock
"name": "Storm Giant Quintessent"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Good"
"ac": !!int "12"
"hp": !!int "230"
"hit_dice": "20d12 + 100"
"stats":
- !!int "29"
- !!int "14"
- !!int "20"
- !!int "17"
- !!int "20"
- !!int "19"
"speed": "walk 50 ft., fly 50 ft. (hover), swim 50 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "10"
  "Strength": !!int "14"
  "Constitution": !!int "10"
"skillsaves":
  "Perception": !!int "10"
  "History": !!int "8"
  "Arcana": !!int "8"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "lightning, thunder"
"senses": "truesight 60 ft., passive Perception 20"
"languages": "Common, Giant"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the giant fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two Lightning Sword attacks, or it uses Wind Javelin twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 40 (9d6\
    \ + 9) lightning damage."
  "name": "Lightning Sword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant coalesces wind into a javelin-like form and hurls it at a creature\
    \ it can see within 600 feet of it. The javelin deals 19 (3d6 + 9) force damage\
    \ to the target, striking unerringly. The javelin disappears after it hits."
  "name": "Wind Javelin"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant targets a creature it can see within 60 feet of it and creates\
    \ a magical gust of wind around the target, who must succeed on a DC 18 Strength\
    \ saving throw or be moved up to 20 feet in any horizontal direction the giant\
    \ chooses."
  "name": "Gust"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant hurls a thunderbolt at a creature it can see within 600 feet\
    \ of it. The target must make a DC 18 Dexterity saving throw, taking 22 (4d10)\
    \ thunder damage on a failed save, or half as much damage on a successful one."
  "name": "Thunderbolt (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant vanishes, dispersing itself into the storm surrounding its lair.\
    \ The giant can end this effect at the start of any of its turns, becoming a giant\
    \ once more and appearing in any location it chooses within its lair. While dispersed,\
    \ the giant can't take any actions other than lair actions, and it can't be targeted\
    \ by attacks, spells, or other effects. The giant can't use this ability outside\
    \ its lair, nor can it use this ability if another creature is using a [control\
    \ weather](/compendium/spells/control-weather.md) spell or similar magic to quell\
    \ the storm."
  "name": "One with the Storm (Costs 3 Actions)"
"source":
- "MPMM"
- "VGM"
"image": "[[Storm Giant Quintessent.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 235, Volo's Guide to Monsters p. 151*

## Description

To forestall the inevitable, some storm giants approaching the end of their natural life spans seek an escape from death. They plumb the depths of their powerful connection to the elements and disperse themselves into nature, transforming into semiconscious storms. The blizzard that rages unendingly around a mountain peak, the vortex that swirls around a remote island, or the thunderstorm that howls ceaselessly up and down a rugged coastline could, in fact, be the undying form of a storm giant clinging to existence.

A storm giant quintessent sheds their armor and weapons but gains the power to form makeshift weapons out of thin air. When the giant has no further use of these elemental weapons, or when the giant dies, the weapons disappear.

A storm giant quintessent can revert to their true giant form temporarily and can maintain that form long enough for the giant to communicate with a mortal, carry out a short task, or defend their home against aggressors.

**A Quintessent's Lair.** A storm giant quintessent has no need for castles or dungeon lairs. Their lair is usually a secluded region or prominent geographic feature, such as a mountain peak, a great waterfall, a remote island, a fog-shrouded loch, a beautiful coral reef, or a windswept desert bluff. The storm in which the giant lives could be a blizzard, a typhoon, a thunderstorm, or a sandstorm, as befits the environment.

## Environment

coastal, desert, mountain, underwater