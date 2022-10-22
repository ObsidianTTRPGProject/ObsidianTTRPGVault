---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/medium
- monster/type/fey
aliases: ["Sea Fury"]
statblock: true
"name": "Sea Fury"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"stats":
- !!int "19"
- !!int "15"
- !!int "16"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft., swim 50 ft."
"skillsaves":
  "Deception": !!int "8"
  "Stealth": !!int "6"
  "Insight": !!int "5"
  "Perception": !!int "5"
"damage_immunities": "cold; fire; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"condition_immunities": "paralyzed, poisoned"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Aquan, Common, Giant"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury's innate spellcasting ability is Charisma (spell save DC 16,\
    \ +8 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [witch bolt](/compendium/spells/witch-bolt.md)\n\
    \n1/day each: [bestow curse](/compendium/spells/bestow-curse.md), [fear](/compendium/spells/fear.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the sea fury fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury makes two attacks with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury targets one [frightened](/rules/conditions.md#frightened)\
    \ creature it can see within 30 feet of it. The target must succeed on a DC 16\
    \ Wisdom saving throw or drop to 0 hit points."
  "name": "Death Glare"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury transforms into a wave of foaming seawater, along with whatever\
    \ it is wearing or carrying, and moves up to its speed without provoking opportunity\
    \ attacks. While in this form, it can't be [grappled](/rules/conditions.md#grappled)\
    \ or [restrained](/rules/conditions.md#restrained). It reverts to its true form\
    \ at the end of this movement."
  "name": "As Water"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury conjures an apparition of one of its dead sisters, which appears\
    \ in an unoccupied space the sea fury can see within 30 feet of it. Enemies of\
    \ the sea fury that can see the apparition must succeed on a DC 16 Wisdom saving\
    \ throw or be [frightened](/rules/conditions.md#frightened) of it until it vanishes\
    \ at the end of the sea fury's next turn."
  "name": "Fearsome Apparition (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury disgorges a [swarm of poisonous snakes](/compendium/bestiary/beast/swarm-of-poisonous-snakes.md),\
    \ which occupies the same space as the sea fury, acts on its own initiative count,\
    \ and attacks as directed by the sea fury. The sea fury can control up to three\
    \ of these swarms at a time."
  "name": "Conjure Snakes (Costs 3 Actions)"
"source":
- "EGW"
name: Sea Fury
image: "[[Sea Fury.png]]"
---

# Sea Fury

```statblock
"name": "Sea Fury"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"stats":
- !!int "19"
- !!int "15"
- !!int "16"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft., swim 50 ft."
"skillsaves":
  "Deception": !!int "8"
  "Stealth": !!int "6"
  "Insight": !!int "5"
  "Perception": !!int "5"
"damage_immunities": "cold; fire; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"condition_immunities": "paralyzed, poisoned"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Aquan, Common, Giant"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury's innate spellcasting ability is Charisma (spell save DC 16,\
    \ +8 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [witch bolt](/compendium/spells/witch-bolt.md)\n\
    \n1/day each: [bestow curse](/compendium/spells/bestow-curse.md), [fear](/compendium/spells/fear.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the sea fury fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury makes two attacks with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury targets one [frightened](/rules/conditions.md#frightened)\
    \ creature it can see within 30 feet of it. The target must succeed on a DC 16\
    \ Wisdom saving throw or drop to 0 hit points."
  "name": "Death Glare"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury transforms into a wave of foaming seawater, along with whatever\
    \ it is wearing or carrying, and moves up to its speed without provoking opportunity\
    \ attacks. While in this form, it can't be [grappled](/rules/conditions.md#grappled)\
    \ or [restrained](/rules/conditions.md#restrained). It reverts to its true form\
    \ at the end of this movement."
  "name": "As Water"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury conjures an apparition of one of its dead sisters, which appears\
    \ in an unoccupied space the sea fury can see within 30 feet of it. Enemies of\
    \ the sea fury that can see the apparition must succeed on a DC 16 Wisdom saving\
    \ throw or be [frightened](/rules/conditions.md#frightened) of it until it vanishes\
    \ at the end of the sea fury's next turn."
  "name": "Fearsome Apparition (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea fury disgorges a [swarm of poisonous snakes](/compendium/bestiary/beast/swarm-of-poisonous-snakes.md),\
    \ which occupies the same space as the sea fury, acts on its own initiative count,\
    \ and attacks as directed by the sea fury. The sea fury can control up to three\
    \ of these swarms at a time."
  "name": "Conjure Snakes (Costs 3 Actions)"
"source":
- "EGW"
"image": "[[Sea Fury.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 299*

## Description

In times of great danger, sea hags form massive covens to channel powerful magic against outside threats. But when the threat is vanquished, these covens often destroy themselves from within. One sea hag grows more powerful than the others, killing its kin one by one and siphoning their magical power as it does so.

Driven to madness by the power it claims—and by the loneliness that is the cost of its killing spree—the hag becomes a sea fury, which hoards treasure, spreads rumors, and does everything within its power to lure sailors and explorers to its lair. By doing so, it hopes to break its loneliness for a time—and then to destroy its new playthings when they have outlived their usefulness.