---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/huge
- monster/type/monstrosity
- monster/environment/arctic
aliases: ["Hellion"]
statblock: true
"name": "Hellion"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "195"
"hit_dice": "17d12 + 85"
"stats":
- !!int "24"
- !!int "13"
- !!int "21"
- !!int "4"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft., burrow 20 ft."
"damage_immunities": "cold, fire"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 10"
"languages": ""
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that touches the hellion or hits it with a melee attack while\
    \ within 5 feet of it takes 10 (3d6) fire damage."
  "name": "Heated Body"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10\
    \ + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature,\
    \ it is [grappled](/rules/conditions.md#grappled) (escape DC 17). Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained), and the hellion\
    \ can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellion makes one bite attack against a Medium or smaller creature\
    \ it is grappling. If the attack hits, that creature takes the bite's damage and\
    \ is swallowed, and the grapple ends. While swallowed, the creature is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the hellion, and it takes 21 (6d6) acid damage\
    \ at the start of each of the hellion's turns.\n\nIf the hellion takes 30 damage\
    \ or more on a single turn from a creature inside it, the hellion must succeed\
    \ on a DC 15 Constitution saving throw at the end of that turn or regurgitate\
    \ all swallowed creatures, which fall [prone](/rules/conditions.md#prone) in a\
    \ space within 10 feet oft he hellion. If the hellion dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "PSZ"
name: Hellion
image: "[[Hellion.png]]"
---

# Hellion

```statblock
"name": "Hellion"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "195"
"hit_dice": "17d12 + 85"
"stats":
- !!int "24"
- !!int "13"
- !!int "21"
- !!int "4"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft., burrow 20 ft."
"damage_immunities": "cold, fire"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 10"
"languages": ""
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that touches the hellion or hits it with a melee attack while\
    \ within 5 feet of it takes 10 (3d6) fire damage."
  "name": "Heated Body"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10\
    \ + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature,\
    \ it is [grappled](/rules/conditions.md#grappled) (escape DC 17). Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained), and the hellion\
    \ can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellion makes one bite attack against a Medium or smaller creature\
    \ it is grappling. If the attack hits, that creature takes the bite's damage and\
    \ is swallowed, and the grapple ends. While swallowed, the creature is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the hellion, and it takes 21 (6d6) acid damage\
    \ at the start of each of the hellion's turns.\n\nIf the hellion takes 30 damage\
    \ or more on a single turn from a creature inside it, the hellion must succeed\
    \ on a DC 15 Constitution saving throw at the end of that turn or regurgitate\
    \ all swallowed creatures, which fall [prone](/rules/conditions.md#prone) in a\
    \ space within 10 feet oft he hellion. If the hellion dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "PSZ"
"image": "[[Hellion.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 32*

## Environment

arctic