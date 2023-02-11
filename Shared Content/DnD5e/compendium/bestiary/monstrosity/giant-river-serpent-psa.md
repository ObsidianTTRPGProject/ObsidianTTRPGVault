---
cssclass: json5e-monster
tags:
- compendium/src/psa
- monster/size/huge
- monster/type/monstrosity
- monster/environment/underdark
aliases: ["Giant River Serpent"]
statblock: true
"name": "Giant River Serpent"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "168"
"hit_dice": "16d12 + 64"
"stats":
- !!int "23"
- !!int "16"
- !!int "18"
- !!int "7"
- !!int "14"
- !!int "12"
"speed": "walk 50 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "6"
"senses": "darkvision 90 ft., passive Perception 16"
"languages": "Draconic"
"cr": "11"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The serpent makes two attacks: one with its bite and one to constrict."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10\
    \ + 6) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature.\
    \ Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The\
    \ target is [grappled](/rules/conditions.md#grappled) (escape DC 16) if the serpent\
    \ isn't already constricting a creature, and the target is [restrained](/rules/conditions.md#restrained)\
    \ until this grapple ends."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The serpent makes one bite attack against a Medium or smaller target it\
    \ is grappling. If the attack hits, the target is also swallowed, and the grapple\
    \ ends. While swallowed, the target is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the serpent, and it takes 21 (6d6) acid damage\
    \ at the start of each of the serpent's turns. A serpent can have only one creature\
    \ swallowed at a time.\n\nIf the serpent takes 30 damage or more on a single turn\
    \ from the swallowed creature, the serpent must succeed on a DC 14 Constitution\
    \ saving throw at the end of that turn or regurgitate the creature, which falls\
    \ [prone](/rules/conditions.md#prone) in a space within 10 feet of the serpent.\
    \ If the serpent dies, a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse by using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "PSA"
name: Giant River Serpent
image: "[[Giant River Serpent.png]]"
---

# Giant River Serpent

```statblock
"name": "Giant River Serpent"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "168"
"hit_dice": "16d12 + 64"
"stats":
- !!int "23"
- !!int "16"
- !!int "18"
- !!int "7"
- !!int "14"
- !!int "12"
"speed": "walk 50 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "6"
"senses": "darkvision 90 ft., passive Perception 16"
"languages": "Draconic"
"cr": "11"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The serpent makes two attacks: one with its bite and one to constrict."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10\
    \ + 6) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature.\
    \ Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The\
    \ target is [grappled](/rules/conditions.md#grappled) (escape DC 16) if the serpent\
    \ isn't already constricting a creature, and the target is [restrained](/rules/conditions.md#restrained)\
    \ until this grapple ends."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The serpent makes one bite attack against a Medium or smaller target it\
    \ is grappling. If the attack hits, the target is also swallowed, and the grapple\
    \ ends. While swallowed, the target is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the serpent, and it takes 21 (6d6) acid damage\
    \ at the start of each of the serpent's turns. A serpent can have only one creature\
    \ swallowed at a time.\n\nIf the serpent takes 30 damage or more on a single turn\
    \ from the swallowed creature, the serpent must succeed on a DC 14 Constitution\
    \ saving throw at the end of that turn or regurgitate the creature, which falls\
    \ [prone](/rules/conditions.md#prone) in a space within 10 feet of the serpent.\
    \ If the serpent dies, a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse by using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "PSA"
"image": "[[Giant River Serpent.png]]"
```
^statblock

*Source: Plane Shift: Amonkhet p. 38*

## Description

**The Luxa River.** The Luxa river is an abundant source of life, fertilizing the lush valley around Naktamun and providing water to humanoids and animals alike. It is also a vibrant habitat for countless creatures, including many species of birds, fish, and frogs. [Crocodiles](/compendium/bestiary/beast/crocodile.md) and [hippopotamuses](/compendium/bestiary/beast/hippopotamus-psa.md) can be a danger to boats and barges, but perhaps the most feared denizens of the river are the [giant serpents](/compendium/bestiary/monstrosity/giant-river-serpent-psa.md) known to lurk near its bottom. When roused to anger, they can sink fishing boats by the dozens and flood the shore.

## Environment

underdark