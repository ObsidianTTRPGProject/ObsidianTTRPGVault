---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/tiny
- monster/type/monstrosity
aliases: ["Hoard Scarab"]
statblock: true
"name": "Hoard Scarab"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "7"
"hit_dice": "3d4"
"stats":
- !!int "4"
- !!int "16"
- !!int "11"
- !!int "3"
- !!int "8"
- !!int "6"
"speed": "walk 20 ft., burrow 20 ft., fly 20 ft."
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 9"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the scarab is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the scarab move\
    \ or act, that creature must succeed on a DC 18 Intelligence (Investigation) check\
    \ to discern that the scarab is animate."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage. If the target is a creature, it has disadvantage on attack\
    \ rolls until the start of its next turn."
  "name": "Bite"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The scarab releases magical glittering dust from its wings. Each creature\
    \ within 5 feet of the scarab must succeed on a DC 13 Dexterity saving throw or\
    \ be outlined in blue light for 10 minutes. While outlined in this way, a creature\
    \ sheds dim light in a 10-foot radius and can't benefit from being [invisible](/rules/conditions.md#invisible).\
    \ In addition, every Dragon within 1 mile of the creature becomes aware of it\
    \ and can unerringly track the creature. Casting [dispel magic](/compendium/spells/dispel-magic.md)\
    \ on the creature ends the effect on it."
  "name": "Scale Dust (1/Day)"
"source":
- "FTD"
name: Hoard Scarab
image: "[[Hoard Scarab.png]]"
---

# Hoard Scarab

```statblock
"name": "Hoard Scarab"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "7"
"hit_dice": "3d4"
"stats":
- !!int "4"
- !!int "16"
- !!int "11"
- !!int "3"
- !!int "8"
- !!int "6"
"speed": "walk 20 ft., burrow 20 ft., fly 20 ft."
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 9"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the scarab is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the scarab move\
    \ or act, that creature must succeed on a DC 18 Intelligence (Investigation) check\
    \ to discern that the scarab is animate."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage. If the target is a creature, it has disadvantage on attack\
    \ rolls until the start of its next turn."
  "name": "Bite"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The scarab releases magical glittering dust from its wings. Each creature\
    \ within 5 feet of the scarab must succeed on a DC 13 Dexterity saving throw or\
    \ be outlined in blue light for 10 minutes. While outlined in this way, a creature\
    \ sheds dim light in a 10-foot radius and can't benefit from being [invisible](/rules/conditions.md#invisible).\
    \ In addition, every Dragon within 1 mile of the creature becomes aware of it\
    \ and can unerringly track the creature. Casting [dispel magic](/compendium/spells/dispel-magic.md)\
    \ on the creature ends the effect on it."
  "name": "Scale Dust (1/Day)"
"source":
- "FTD"
"image": "[[Hoard Scarab.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 205*

## Description

Hoard scarabs are beetle-like creatures that, through some feat of natural adaptation or alchemical ingenuity, blend in perfectly among piles of gold coins. They feed on tiny mites that infest a dragon's scales and lair, and their painful bite can be a strong deterrent to would-be treasure thieves.

Hoard scarabs also produce a glittering metallic dust from their wings that coats intruders who get too close to them. The magic of this dust allows the lair's draconic owner to sense intruders' location as they move about the lair.