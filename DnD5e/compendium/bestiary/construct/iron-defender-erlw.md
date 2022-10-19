---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/construct
aliases: ["Iron Defender"]
statblock: true
"name": "Iron Defender"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "8"
- !!int "11"
- !!int "7"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "understands the languages of its creator but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The defender has advantage on Wisdom (Perception) checks."
  "name": "Keen Senses"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the defender is on the same plane of existence as its master, it\
    \ can magically convey what it senses to its master, and the two can communicate\
    \ telepathically."
  "name": "Telepathic Bond"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage. If the target is a creature, it must succeed on a DC 13\
    \ Strength saving throw or take an extra 3 (1d6) piercing damage and be [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13). The defender can have only one creature [grappled](/rules/conditions.md#grappled)\
    \ in this way at a time."
  "name": "Bite"
"source":
- "ERLW"
name: Iron Defender
image: "[[Iron Defender.png]]"
---

# Iron Defender

```statblock
"name": "Iron Defender"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "8"
- !!int "11"
- !!int "7"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "understands the languages of its creator but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The defender has advantage on Wisdom (Perception) checks."
  "name": "Keen Senses"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the defender is on the same plane of existence as its master, it\
    \ can magically convey what it senses to its master, and the two can communicate\
    \ telepathically."
  "name": "Telepathic Bond"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage. If the target is a creature, it must succeed on a DC 13\
    \ Strength saving throw or take an extra 3 (1d6) piercing damage and be [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13). The defender can have only one creature [grappled](/rules/conditions.md#grappled)\
    \ in this way at a time."
  "name": "Bite"
"source":
- "ERLW"
"image": "[[Iron Defender.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 293*

## Description

An iron defender fights for its creator. They come in many shapes and are often crafted in the form of animals. More creative artificers craft iron defenders in the shape of hybrid animals or other fantastical creatures.

**Constructed Nature.** A homunculus doesn't require air, food, drink, or sleep.

A homunculus is a construct servant created for certain tasks. Artificers and wizards are responsible for most of the homunculi in existence.

Each kind of homunculus has a body constructed from different kinds of materials, including clay, iron, and bits of hair and feathers. The process that creates a homunculus sees those materials mixed with the creator's blood and animated through an extended magical ritual.