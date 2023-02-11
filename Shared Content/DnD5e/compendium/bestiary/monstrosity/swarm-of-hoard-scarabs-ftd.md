---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/medium
- monster/type/monstrosity
aliases: ["Swarm of Hoard Scarabs"]
statblock: true
"name": "Swarm of Hoard Scarabs"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "6"
- !!int "16"
- !!int "11"
- !!int "3"
- !!int "8"
- !!int "6"
"speed": "walk 20 ft., burrow 20 ft., fly 20 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "charmed, frightened, grappled, paralyzed, petrified, prone,\
  \ restrained, stunned"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 9"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the swarm is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the swarm move\
    \ or act, that creature must succeed on a DC 18 Intelligence (Investigation) check\
    \ to discern that the swarm is animate."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny scarab. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's\
    \ space. Hit: 13 (3d6 + 3) piercing damage, or 6 (1d6 + 3) piercing damage if\
    \ the swarm is at half of its hit points or fewer, and the target has disadvantage\
    \ on attack rolls until the start of its next turn."
  "name": "Swarm of Bites"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm releases magical glittering dust from its wings. Each creature\
    \ within 10 feet of the swarm must succeed on a DC 13 Dexterity saving throw or\
    \ be outlined in blue light for 10 minutes. While outlined in this way, a creature\
    \ sheds dim light in a 10-foot radius and can't benefit from being [invisible](/rules/conditions.md#invisible).\
    \ In addition, every Dragon within 1 mile of the creature becomes aware of it\
    \ and can unerringly track the creature. Casting [dispel magic](/compendium/spells/dispel-magic.md)\
    \ on the creature ends the effect on it."
  "name": "Scale Dust (1/Day)"
"source":
- "FTD"
name: Swarm of Hoard Scarabs
image: "[[Swarm of Hoard Scarabs.png]]"
---

# Swarm of Hoard Scarabs

```statblock
"name": "Swarm of Hoard Scarabs"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "6"
- !!int "16"
- !!int "11"
- !!int "3"
- !!int "8"
- !!int "6"
"speed": "walk 20 ft., burrow 20 ft., fly 20 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "charmed, frightened, grappled, paralyzed, petrified, prone,\
  \ restrained, stunned"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 9"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the swarm is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the swarm move\
    \ or act, that creature must succeed on a DC 18 Intelligence (Investigation) check\
    \ to discern that the swarm is animate."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny scarab. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's\
    \ space. Hit: 13 (3d6 + 3) piercing damage, or 6 (1d6 + 3) piercing damage if\
    \ the swarm is at half of its hit points or fewer, and the target has disadvantage\
    \ on attack rolls until the start of its next turn."
  "name": "Swarm of Bites"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm releases magical glittering dust from its wings. Each creature\
    \ within 10 feet of the swarm must succeed on a DC 13 Dexterity saving throw or\
    \ be outlined in blue light for 10 minutes. While outlined in this way, a creature\
    \ sheds dim light in a 10-foot radius and can't benefit from being [invisible](/rules/conditions.md#invisible).\
    \ In addition, every Dragon within 1 mile of the creature becomes aware of it\
    \ and can unerringly track the creature. Casting [dispel magic](/compendium/spells/dispel-magic.md)\
    \ on the creature ends the effect on it."
  "name": "Scale Dust (1/Day)"
"source":
- "FTD"
"image": "[[Swarm of Hoard Scarabs.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 205*

## Description

Hoard scarabs are beetle-like creatures that, through some feat of natural adaptation or alchemical ingenuity, blend in perfectly among piles of gold coins. They feed on tiny mites that infest a dragon's scales and lair, and their painful bite can be a strong deterrent to would-be treasure thieves.

Hoard scarabs also produce a glittering metallic dust from their wings that coats intruders who get too close to them. The magic of this dust allows the lair's draconic owner to sense intruders' location as they move about the lair.