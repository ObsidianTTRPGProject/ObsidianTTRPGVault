---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/tiny
- monster/type/fey
- monster/environment/forest
aliases: ["Quickling"]
statblock: true
"name": "Quickling"
"size": "Tiny"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"stats":
- !!int "4"
- !!int "23"
- !!int "13"
- !!int "10"
- !!int "12"
- !!int "7"
"speed": "walk 120 ft."
"skillsaves":
  "Sleight of Hand": !!int "8"
  "Stealth": !!int "8"
  "Perception": !!int "5"
  "Acrobatics": !!int "8"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Sylvan"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Attack rolls against the quickling have disadvantage unless it is [incapacitated](/rules/conditions.md#incapacitated)\
    \ or its speed is 0."
  "name": "Blurred Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the quickling is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, it instead takes no damage if it succeeds\
    \ on the saving throw and only half damage if it fails, provided it isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Evasion"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quickling makes three Dagger attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 8 (1d4 + 6) piercing damage."
  "name": "Dagger"
"source":
- "MPMM"
- "VGM"
name: Quickling
image: "[[Quickling.png]]"
---

# Quickling

```statblock
"name": "Quickling"
"size": "Tiny"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"stats":
- !!int "4"
- !!int "23"
- !!int "13"
- !!int "10"
- !!int "12"
- !!int "7"
"speed": "walk 120 ft."
"skillsaves":
  "Sleight of Hand": !!int "8"
  "Stealth": !!int "8"
  "Perception": !!int "5"
  "Acrobatics": !!int "8"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Sylvan"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Attack rolls against the quickling have disadvantage unless it is [incapacitated](/rules/conditions.md#incapacitated)\
    \ or its speed is 0."
  "name": "Blurred Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the quickling is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, it instead takes no damage if it succeeds\
    \ on the saving throw and only half damage if it fails, provided it isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Evasion"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quickling makes three Dagger attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 8 (1d4 + 6) piercing damage."
  "name": "Dagger"
"source":
- "MPMM"
- "VGM"
"image": "[[Quickling.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 207, Volo's Guide to Monsters p. 187*

## Description

Quicklings rocket through twisted forests where the unseelie fey hold sway, both in the Feywild and in the world. These slender Fey resemble miniature elves with feral features and cold eyes that gleam like jewels. Racing faster than the eye can track, they appear as little more than blurry waverings in the air.

Quicklings owe their existence—and their plight—to the Queen of Air and Darkness, the dread ruler of the Gloaming Court. Once a species of lazy and egotistical Fey, quicklings' predecessors were late in answering the queen's summons one time too many. To hasten their pace and teach them to mind her will, the queen sped up their internal clocks and shrank them. Her curse gave quicklings amazing speed but also accelerated their passage through life—no quickling lives longer than fifteen years.

The mortal realm is a ponderous place to a quickling's eye: a hurricane creeps gradually across the sky, a torrent of rain drifts earthward like lazy snowflakes, lightning crawls in a meandering path from cloud to cloud. The slow and boring world seems to be populated by torpid creatures whose deep, mooing speech lacks meaning.

To other creatures, quicklings seem blindingly fast, vanishing into an indistinct blur as they move. Their cruel laughter is a burst of rapid staccato sounds, their speech a shrill squeal. Only when quicklings deliberately slow down, which they prefer not to do, can other beings properly see, hear, and comprehend them. Never truly at rest, "stationary" quicklings constantly pace and shift in place, as though they can't wait to be off again.

Quicklings have a capricious nature that goes well with their energy level: they think as fast as they run, and they are always up to something. They spend most of their time perpetrating acts of mischief on slower creatures. One rarely passes up an opportunity to tie a person's bootlaces together, move the stool a creature is about to sit on, or unbuckle a saddle while no one's looking.

Tricks of that sort are hardly the limit of quicklings' artful malice, however. They don't commit outright murder, but they can ruin lives in plenty of other ways: stealing an important letter, swiping coins collected for the poor, planting a stolen item in someone's bag. Quicklings enjoy causing suffering that transcends mere mischief, especially when the blame for their actions falls on others and creates discord.

## Environment

forest