---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/large
- monster/type/construct
aliases: ["Ruin Grinder"]
statblock: true
"name": "Ruin Grinder"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "82"
"hit_dice": "11d10 + 22"
"stats":
- !!int "22"
- !!int "13"
- !!int "15"
- !!int "3"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft., burrow 30 ft."
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, exhaustion, frightened, petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the ruin grinder is subjected to fire damage, it regains a number\
    \ of hit points equal to half the fire damage dealt."
  "name": "Fire Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ruin grinder deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ruin grinder can burrow through solid rock at half its burrowing speed\
    \ and leaves a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ruin grinder makes two Excavator attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) force damage. If the target is a Huge or smaller creature, it must succeed\
    \ on a DC 17 Strength saving throw or be pushed up to 10 feet away and knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Excavator"
"source":
- "SCC"
name: Ruin Grinder
image: "[[Ruin Grinder.png]]"
---

# Ruin Grinder

```statblock
"name": "Ruin Grinder"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "82"
"hit_dice": "11d10 + 22"
"stats":
- !!int "22"
- !!int "13"
- !!int "15"
- !!int "3"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft., burrow 30 ft."
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, exhaustion, frightened, petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the ruin grinder is subjected to fire damage, it regains a number\
    \ of hit points equal to half the fire damage dealt."
  "name": "Fire Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ruin grinder deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ruin grinder can burrow through solid rock at half its burrowing speed\
    \ and leaves a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ruin grinder makes two Excavator attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) force damage. If the target is a Huge or smaller creature, it must succeed\
    \ on a DC 17 Strength saving throw or be pushed up to 10 feet away and knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Excavator"
"source":
- "SCC"
"image": "[[Ruin Grinder.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 211*

## Description

Created by the archaeomancers of Lorehold College, ruin grinders are mighty automatons built to excavate ancient ruins and artifacts. The massive toothed shovels attached to a ruin grinder's arms tear through millennia-old bedrock with ease, leading some Lorehold mages to fear that the grinders destroy more history than they unearth.