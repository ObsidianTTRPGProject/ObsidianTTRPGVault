---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/tiny
- monster/type/fey
- monster/environment/forest
aliases: ["Sprite"]
statblock: true
"name": "Sprite"
"size": "Tiny"
"type": "fey"
"alignment": "Neutral Good"
"ac": !!int "15"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "3"
- !!int "18"
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "11"
"speed": "walk 10 ft., fly 40 ft."
"skillsaves":
  "Stealth": !!int "8"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": "Common, Elvish, Sylvan"
"cr": "1/4"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. Hit: 1\
    \ piercing damage, and the target must succeed on a DC 10 Constitution saving\
    \ throw or become [poisoned](/rules/conditions.md#poisoned) for 1 minute. If its\
    \ saving throw result is 5 or lower, the [poisoned](/rules/conditions.md#poisoned)\
    \ target falls [unconscious](/rules/conditions.md#unconscious) for the same duration,\
    \ or until it takes damage or another creature takes an action to shake it awake."
  "name": "Shortbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sprite touches a creature and magically knows the creature's current\
    \ emotional state. If the target fails a DC 10 Charisma saving throw, the sprite\
    \ also knows the creature's alignment. Celestials, fiends, and undead automatically\
    \ fail the saving throw."
  "name": "Heart Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sprite magically turns [invisible](/rules/conditions.md#invisible)\
    \ until it attacks or casts a spell, or until its concentration ends (as if concentrating\
    \ on a spell). Any equipment the sprite wears or carries is [invisible](/rules/conditions.md#invisible)\
    \ with it."
  "name": "Invisibility"
"source":
- "MM"
- "PotA"
- "SKT"
- "GoS"
- "BGDIA"
- "ERLW"
- "IMR"
- "CM"
- "WBtW"
name: Sprite
image: "[[Sprite.png]]"
---

# Sprite

```statblock
"name": "Sprite"
"size": "Tiny"
"type": "fey"
"alignment": "Neutral Good"
"ac": !!int "15"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "3"
- !!int "18"
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "11"
"speed": "walk 10 ft., fly 40 ft."
"skillsaves":
  "Stealth": !!int "8"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": "Common, Elvish, Sylvan"
"cr": "1/4"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. Hit: 1\
    \ piercing damage, and the target must succeed on a DC 10 Constitution saving\
    \ throw or become [poisoned](/rules/conditions.md#poisoned) for 1 minute. If its\
    \ saving throw result is 5 or lower, the [poisoned](/rules/conditions.md#poisoned)\
    \ target falls [unconscious](/rules/conditions.md#unconscious) for the same duration,\
    \ or until it takes damage or another creature takes an action to shake it awake."
  "name": "Shortbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sprite touches a creature and magically knows the creature's current\
    \ emotional state. If the target fails a DC 10 Charisma saving throw, the sprite\
    \ also knows the creature's alignment. Celestials, fiends, and undead automatically\
    \ fail the saving throw."
  "name": "Heart Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sprite magically turns [invisible](/rules/conditions.md#invisible)\
    \ until it attacks or casts a spell, or until its concentration ends (as if concentrating\
    \ on a spell). Any equipment the sprite wears or carries is [invisible](/rules/conditions.md#invisible)\
    \ with it."
  "name": "Invisibility"
"source":
- "MM"
- "PotA"
- "SKT"
- "GoS"
- "BGDIA"
- "ERLW"
- "IMR"
- "CM"
- "WBtW"
"image": "[[Sprite.png]]"
```
^statblock

*Source: Monster Manual p. 283, Princes of the Apocalypse, Storm King's Thunder, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Infernal Machine Rebuild, Candlekeep Mysteries, The Wild Beyond the Witchlight*

## Description

In secret groves and shaded glens, tiny sprites with dragonfly wings flutter. For all their fey splendor, however, sprites lack warmth and compassion. They are aggressive and hardy warriors, taking severe measures to ward strangers away from their homes. Interlopers that come too close have their moral character judged, then are put to sleep or frightened off.

**Forest Protectors.** Sprites build little villages in the boughs of trees and willing treants, in verdant glades brightened by moss, wild flowers, and toadstools. Wild nature thrives, and the sprites allow no trespassers. When intruders are spotted, the sprites lead them astray with ominous rustling from the bushes and distant snapping twigs. Creatures foolish enough to persist in intruding on a sprite's territory are stung with poisoned arrows and lulled into a senseless sleep. While they slumber, the sprites make good their escape, retreating to an even more secluded area of the forest.

**Heart Seers.** Sprites can sense whether a creature is good or evil by the sound and feeling of its beating heart. Weighing the balance of a creature's past actions, a sprite can tell whether its heart beats rapidly in love or flags in sorrow, or whether it is darkened by hate or greed. The sprite's power to perceive the heart always shows the truth, because the heart can't lie.

**Poison Brewers.** In their forest domains, sprites brew toxins, unguents, antidotes, and poisons, including the sleep poison with which they coat their arrows. They venture far into the woods to harvest rare flowers, mosses, and fungi, sometimes crossing dangerous territory to do so. If desperate, sprites even steal their ingredients from the gardens of hags.

**Good-Hearted.**  Because they are judges of the heart and favor good creatures, sprites oppose the will of evil fey and pledge to thwart evil archfey at every turn. If they encounter adventurers on a quest to rid their forest of an evil fey creature or goblinoid menace, they will pledge their support and even come to their aid when the adventurers least expect it.

Unlike pixies, sprites rarely indulge in frivolous merriment and fun. They are firm warriors, protectors, and judges, and their stern bent causes other fey to consider them overly dour and serious. However, fey that respect the sprites' territory find them staunch allies in times of trouble.

## Environment

forest