---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/undead
- monster/environment/arctic
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
aliases: ["Gnoll Witherling"]
statblock: true
"name": "Gnoll Witherling"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "14"
- !!int "8"
- !!int "12"
- !!int "5"
- !!int "5"
- !!int "5"
"speed": "walk 30 ft."
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 7"
"languages": "understands Gnoll but can't speak"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The witherling doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The witherling makes two Bite or Spiked Club attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Spiked Club"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "After the witherling reduces a creature to 0 hit points with a melee attack\
    \ on its turn, the gnoll moves up to half its speed and makes one Bite attack."
  "name": "Rampage"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to a gnoll being reduced to 0 hit points within 30 feet of\
    \ the witherling, the witherling makes one Bite or Spiked Club attack."
  "name": "Vengeful Strike"
"source":
- "MPMM"
- "VGM"
name: Gnoll Witherling
image: "[[Gnoll Witherling.png]]"
---

# Gnoll Witherling

```statblock
"name": "Gnoll Witherling"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "14"
- !!int "8"
- !!int "12"
- !!int "5"
- !!int "5"
- !!int "5"
"speed": "walk 30 ft."
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 7"
"languages": "understands Gnoll but can't speak"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The witherling doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The witherling makes two Bite or Spiked Club attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Spiked Club"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "After the witherling reduces a creature to 0 hit points with a melee attack\
    \ on its turn, the gnoll moves up to half its speed and makes one Bite attack."
  "name": "Rampage"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to a gnoll being reduced to 0 hit points within 30 feet of\
    \ the witherling, the witherling makes one Bite or Spiked Club attack."
  "name": "Vengeful Strike"
"source":
- "MPMM"
- "VGM"
"image": "[[Gnoll Witherling.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 145, Volo's Guide to Monsters p. 155*

## Description

> [!quote]- A quote from Mordenkainen  
> 
> The life cycle of Yeenoghu's gnolls begins and ends with eating. They eat their enemies, they eat one another, and they're freed from their hunger only in death.

Sometimes the gnolls of Yeenoghu turn against each other, perhaps to determine who rules a war band or because of extreme starvation. Even under ordinary circumstances, gnolls that are deprived of victims for too long struggle to control their hunger and violent urges. Eventually, they fight among themselves.

The survivors devour the flesh of their slain comrades but preserve the bones. Then, by invoking rituals to Yeenoghu they bring the remains back to a semblance of life in the form of a gnoll witherling.

Witherlings travel with their comrades and try to kill anything in their path. They don't eat and aren't motivated by hunger, leaving more flesh for the rest of the war band.

## Environment

arctic, forest, grassland, hill