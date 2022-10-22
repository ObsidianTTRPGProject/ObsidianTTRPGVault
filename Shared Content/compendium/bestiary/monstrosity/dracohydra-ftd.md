---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/huge
- monster/type/monstrosity
aliases: ["Dracohydra"]
statblock: true
"name": "Dracohydra"
"size": "Huge"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "218"
"hit_dice": "19d12 + 95"
"stats":
- !!int "20"
- !!int "12"
- !!int "20"
- !!int "6"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft., swim 30 ft., fly 30 ft."
"skillsaves":
  "Perception": !!int "9"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "understands Draconic but can't speak"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracohydra has five heads. While it has more than one head, the dracohydra\
    \ has advantage on saving throws against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ and knocked [unconscious](/rules/conditions.md#unconscious).\n\nWhenever the\
    \ dracohydra takes 30 or more damage in a single turn, one of its heads dies.\
    \ If all its heads die, the dracohydra dies.\n\nAt the end of its turn, the dracohydra\
    \ grows two heads for each of its heads that died since its last turn, unless\
    \ it has taken radiant damage since its last turn. The dracohydra regains 10 hit\
    \ points for each head regrown this way."
  "name": "Multiple Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For each head the dracohydra has beyond one, it gets an extra reaction\
    \ that can be used only for opportunity attacks."
  "name": "Reactive Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the dracohydra sleeps, at least one of its heads is awake."
  "name": "Wakeful"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracohydra makes as many Bite attacks as it has heads."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 10 (1d10\
    \ + 5) damage of a type chosen by the dracohydra: acid, cold, fire, lightning,\
    \ or poison."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracohydra's heads exhale a single breath of multicolored energy in\
    \ a 60-foot cone. Each creature in that area must make a DC 17 Dexterity saving\
    \ throw. On a failed save, the creature takes 33 (6d10) damage of a type chosen\
    \ by the dracohydra: acid, cold, fire, lightning, or poison. On a successful save,\
    \ the creature takes half as much damage."
  "name": "Prismatic Breath (Recharge 4-6)"
"source":
- "FTD"
name: Dracohydra
image: "[[Dracohydra.png]]"
---

# Dracohydra

```statblock
"name": "Dracohydra"
"size": "Huge"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "218"
"hit_dice": "19d12 + 95"
"stats":
- !!int "20"
- !!int "12"
- !!int "20"
- !!int "6"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft., swim 30 ft., fly 30 ft."
"skillsaves":
  "Perception": !!int "9"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "understands Draconic but can't speak"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracohydra has five heads. While it has more than one head, the dracohydra\
    \ has advantage on saving throws against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ and knocked [unconscious](/rules/conditions.md#unconscious).\n\nWhenever the\
    \ dracohydra takes 30 or more damage in a single turn, one of its heads dies.\
    \ If all its heads die, the dracohydra dies.\n\nAt the end of its turn, the dracohydra\
    \ grows two heads for each of its heads that died since its last turn, unless\
    \ it has taken radiant damage since its last turn. The dracohydra regains 10 hit\
    \ points for each head regrown this way."
  "name": "Multiple Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For each head the dracohydra has beyond one, it gets an extra reaction\
    \ that can be used only for opportunity attacks."
  "name": "Reactive Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the dracohydra sleeps, at least one of its heads is awake."
  "name": "Wakeful"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracohydra makes as many Bite attacks as it has heads."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 10 (1d10\
    \ + 5) damage of a type chosen by the dracohydra: acid, cold, fire, lightning,\
    \ or poison."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracohydra's heads exhale a single breath of multicolored energy in\
    \ a 60-foot cone. Each creature in that area must make a DC 17 Dexterity saving\
    \ throw. On a failed save, the creature takes 33 (6d10) damage of a type chosen\
    \ by the dracohydra: acid, cold, fire, lightning, or poison. On a successful save,\
    \ the creature takes half as much damage."
  "name": "Prismatic Breath (Recharge 4-6)"
"source":
- "FTD"
"image": "[[Dracohydra.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 176*

## Description

The dracohydra is the result of arcane experimentation dedicated to recreating Tiamat's power. Amalgamating the magic of chromatic dragons with the blood of a hydra resulted in a many-headed draconic monster with wings and multiple snakelike tails. The dracohydra's breath weapon is a multicolored mass of energy that contains the essence of a chromatic dragon's elemental power.

These gluttonous creatures' appearance heralds disaster for any region they settle in, as they feed relentlessly—with each head demanding a feast of its own. If left alone, they hunt the local fauna almost to extinction, then move on to threatening the folk of nearby settlements.

A dracohydra can sometimes be found in the service of the spellcaster who created it, kept obedient by the rituals of their creation.