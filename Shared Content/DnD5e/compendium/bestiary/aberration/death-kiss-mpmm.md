---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/aberration/beholder
- monster/environment/underdark
aliases: ["Death Kiss"]
statblock: true
"name": "Death Kiss"
"size": "Large"
"type": "aberration"
"subtype": "beholder"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "walk 0 ft., fly 30 ft. (hover)"
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "5"
"damage_immunities": "lightning"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Deep Speech, Undercommon"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature within 5 feet of the death kiss takes 5 (1d10) lightning damage\
    \ whenever it hits the death kiss with a melee attack that deals piercing or slashing\
    \ damage."
  "name": "Lightning Blood"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The death kiss makes three Tentacle attacks. Up to three of these attacks\
    \ can be replaced by Blood Drain—one replacement per tentacle grappling a creature."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14) if it is a Huge or smaller creature. Until this grapple ends,\
    \ the target is [restrained](/rules/conditions.md#restrained), and the death kiss\
    \ can't use the same tentacle on another target. The death kiss has ten tentacles."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature [grappled](/rules/conditions.md#grappled) by a tentacle of\
    \ the death kiss must make a DC 16 Constitution saving throw. On a failed save,\
    \ the target takes 22 (4d10) lightning damage, and the death kiss regains half\
    \ as many hit points."
  "name": "Blood Drain"
"source":
- "MPMM"
- "VGM"
name: Death Kiss
image: "[[Death Kiss.png]]"
---

# Death Kiss

```statblock
"name": "Death Kiss"
"size": "Large"
"type": "aberration"
"subtype": "beholder"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "walk 0 ft., fly 30 ft. (hover)"
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "5"
"damage_immunities": "lightning"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Deep Speech, Undercommon"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature within 5 feet of the death kiss takes 5 (1d10) lightning damage\
    \ whenever it hits the death kiss with a melee attack that deals piercing or slashing\
    \ damage."
  "name": "Lightning Blood"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The death kiss makes three Tentacle attacks. Up to three of these attacks\
    \ can be replaced by Blood Drain—one replacement per tentacle grappling a creature."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14) if it is a Huge or smaller creature. Until this grapple ends,\
    \ the target is [restrained](/rules/conditions.md#restrained), and the death kiss\
    \ can't use the same tentacle on another target. The death kiss has ten tentacles."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature [grappled](/rules/conditions.md#grappled) by a tentacle of\
    \ the death kiss must make a DC 16 Constitution saving throw. On a failed save,\
    \ the target takes 22 (4d10) lightning damage, and the death kiss regains half\
    \ as many hit points."
  "name": "Blood Drain"
"source":
- "MPMM"
- "VGM"
"image": "[[Death Kiss.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 85, Volo's Guide to Monsters p. 124*

## Description

A death kiss is a lesser beholder that can come into being when a true beholder has a vivid nightmare about losing blood. Its coloration and shape resemble those of the beholder that dreamed it into existence, but its hue is more muted, and instead of magical eye rays, it has ten long tentacles, each ending in a mouth full of teeth. It can speak through any of its tentacle-maws in a high-pitched, nasal voice.

Death kisses fear true beholders, which can easily kill or subdue them. Lacking the egotism of their stronger kin, a death kiss usually submits to the rule of its creator or any other beholder it encounters, but it tries to escape as soon as the beholder is preoccupied.

A death kiss consumes ingested blood, which it also uses to heal and generate electrical energy inside its body. Terrified of dying from starvation, it obsessively drains even little creatures such as rats, leaving behind a trail of bloodless corpses. When underground, it uses its tentacles as feelers, prodding and examining the environment in all directions. Above ground, it usually keeps its tentacles retracted when on the hunt, then lashes out with them to catch opponents off guard.

A death kiss lacks the combat finesse and intelligence of a true beholder. In most cases, it simply latches on to its prey with one or more of its tentacles and drains blood until the prey collapses. If it's in a superior position and its foe poses no threat, it might toy with its food, drawing out its prey's death. A death kiss prefers to hunt alone. If it meets another of its kind, it might fight, flee, or team up, depending on its health and pride.

## Environment

underdark