---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/undead
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/mountain
- monster/environment/urban
aliases: ["Eidolon"]
statblock: true
"name": "Eidolon"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "9"
"hp": !!int "63"
"hit_dice": "18d8 - 18"
"stats":
- !!int "7"
- !!int "8"
- !!int "9"
- !!int "14"
- !!int "19"
- !!int "16"
"speed": "walk 0 ft., fly 40 ft. (hover)"
"saves":
  "Wisdom": !!int "8"
"skillsaves":
  "Perception": !!int "8"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "the languages it knew in life"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eidolon can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object other than a [sacred statue](/compendium/bestiary/construct/sacred-statue-mpmm.md)."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the eidolon moves into a space occupied by a [sacred statue](/compendium/bestiary/construct/sacred-statue-mpmm.md),\
    \ the eidolon can disappear, causing the statue to become a creature under the\
    \ eidolon's control. The eidolon uses the [sacred statue's stat block](/compendium/bestiary/construct/sacred-statue-mpmm.md)\
    \ in place of its own."
  "name": "Sacred Animation (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eidolon has advantage on saving throws against any effect that turns\
    \ Undead."
  "name": "Turn Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eidolon doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 60 feet of the eidolon that can see it must succeed\
    \ on a DC 15 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ of it for 1 minute. While [frightened](/rules/conditions.md#frightened) in this\
    \ way, the creature must take the Dash action and move away from the eidolon by\
    \ the safest available route at the start of each of its turns, unless there is\
    \ nowhere for it to move, in which case the creature also becomes [stunned](/rules/conditions.md#stunned)\
    \ until it can move again. A [frightened](/rules/conditions.md#frightened) target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success. If a target's saving throw is successful or the effect\
    \ ends for it, the target is immune to any eidolon's Divine Dread for the next\
    \ 24 hours."
  "name": "Divine Dread"
"source":
- "MPMM"
- "MTF"
name: Eidolon
image: "[[Eidolon.png]]"
---

# Eidolon

```statblock
"name": "Eidolon"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "9"
"hp": !!int "63"
"hit_dice": "18d8 - 18"
"stats":
- !!int "7"
- !!int "8"
- !!int "9"
- !!int "14"
- !!int "19"
- !!int "16"
"speed": "walk 0 ft., fly 40 ft. (hover)"
"saves":
  "Wisdom": !!int "8"
"skillsaves":
  "Perception": !!int "8"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "the languages it knew in life"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eidolon can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object other than a [sacred statue](/compendium/bestiary/construct/sacred-statue-mpmm.md)."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the eidolon moves into a space occupied by a [sacred statue](/compendium/bestiary/construct/sacred-statue-mpmm.md),\
    \ the eidolon can disappear, causing the statue to become a creature under the\
    \ eidolon's control. The eidolon uses the [sacred statue's stat block](/compendium/bestiary/construct/sacred-statue-mpmm.md)\
    \ in place of its own."
  "name": "Sacred Animation (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eidolon has advantage on saving throws against any effect that turns\
    \ Undead."
  "name": "Turn Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eidolon doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 60 feet of the eidolon that can see it must succeed\
    \ on a DC 15 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ of it for 1 minute. While [frightened](/rules/conditions.md#frightened) in this\
    \ way, the creature must take the Dash action and move away from the eidolon by\
    \ the safest available route at the start of each of its turns, unless there is\
    \ nowhere for it to move, in which case the creature also becomes [stunned](/rules/conditions.md#stunned)\
    \ until it can move again. A [frightened](/rules/conditions.md#frightened) target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success. If a target's saving throw is successful or the effect\
    \ ends for it, the target is immune to any eidolon's Divine Dread for the next\
    \ 24 hours."
  "name": "Divine Dread"
"source":
- "MPMM"
- "MTF"
"image": "[[Eidolon.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 114, Mordenkainen's Tome of Foes p. 194*

## Description

To protect sites they deem holy, gods often rely on eidolons, ghostly spirits bound to safeguard a sacred place. Forged from the souls of those with unwavering devotion, eidolons stalk temples and vaults to ensure that no enemy defiles, damages, or plunders these sites. If an enemy sets foot inside a warded location, the [eidolon](/compendium/bestiary/undead/eidolon-mpmm.md) plunges into a [statue](/compendium/bestiary/construct/sacred-statue-mpmm.md) specially prepared to house its soul; it then animates this effigy and uses the statue to drive out the intruders.

## Environment

coastal, desert, forest, grassland, mountain, urban