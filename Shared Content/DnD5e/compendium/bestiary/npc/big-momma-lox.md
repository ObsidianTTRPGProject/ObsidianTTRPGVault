---
cssclass: json5e-monster
tags:
- compendium/src/lox
- monster/size/huge
- monster/type/monstrosity
aliases: ["Big Momma"]
statblock: true
"name": "Big Momma"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "157"
"hit_dice": "15d12 + 60"
"stats":
- !!int "22"
- !!int "16"
- !!int "19"
- !!int "4"
- !!int "13"
- !!int "5"
"speed": "walk 0 ft., fly 40 ft."
"skillsaves":
  "Stealth": !!int "11"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": ""
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Big Momma doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 45 (6d12\
    \ + 6) piercing damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 16 Dexterity saving throw or be swallowed by Big Momma. Big\
    \ Momma can have one creature swallowed at a time.\n\nA swallowed creature is\
    \ [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ has total cover against attacks and other effects outside Big Momma, and takes\
    \ 11 (2d10) acid damage at the start of each of Big Momma's turns from the digestive\
    \ juices in Big Momma's gullet.\n\nIf Big Momma takes 25 damage or more on a single\
    \ turn from a creature inside it, Big Momma must succeed on a DC 20 Constitution\
    \ saving throw at the end of that turn or regurgitate the swallowed creature,\
    \ which falls [prone](/rules/conditions.md#prone) in a space within 10 feet of\
    \ Big Momma. If Big Momma dies, a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse by using 10 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallowing Bite"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Big Momma's eye emits an [invisible](/rules/conditions.md#invisible), magical\
    \ ray that targets one creature Big Momma can see within 60 feet of itself. The\
    \ target must succeed on a DC 16 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ of Big Momma until the start of Big Momma's next turn."
  "name": "Ray of Fear (Recharge 4-6)"
"source":
- "LoX"
name: Big Momma
image: "[[Big Momma.png]]"
---

# Big Momma

```statblock
"name": "Big Momma"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "157"
"hit_dice": "15d12 + 60"
"stats":
- !!int "22"
- !!int "16"
- !!int "19"
- !!int "4"
- !!int "13"
- !!int "5"
"speed": "walk 0 ft., fly 40 ft."
"skillsaves":
  "Stealth": !!int "11"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": ""
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Big Momma doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 45 (6d12\
    \ + 6) piercing damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 16 Dexterity saving throw or be swallowed by Big Momma. Big\
    \ Momma can have one creature swallowed at a time.\n\nA swallowed creature is\
    \ [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ has total cover against attacks and other effects outside Big Momma, and takes\
    \ 11 (2d10) acid damage at the start of each of Big Momma's turns from the digestive\
    \ juices in Big Momma's gullet.\n\nIf Big Momma takes 25 damage or more on a single\
    \ turn from a creature inside it, Big Momma must succeed on a DC 20 Constitution\
    \ saving throw at the end of that turn or regurgitate the swallowed creature,\
    \ which falls [prone](/rules/conditions.md#prone) in a space within 10 feet of\
    \ Big Momma. If Big Momma dies, a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse by using 10 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallowing Bite"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Big Momma's eye emits an [invisible](/rules/conditions.md#invisible), magical\
    \ ray that targets one creature Big Momma can see within 60 feet of itself. The\
    \ target must succeed on a DC 16 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ of Big Momma until the start of Big Momma's next turn."
  "name": "Ray of Fear (Recharge 4-6)"
"source":
- "LoX"
"image": "[[Big Momma.png]]"
```
^statblock

*Source: Light of Xaryxis p. 49*