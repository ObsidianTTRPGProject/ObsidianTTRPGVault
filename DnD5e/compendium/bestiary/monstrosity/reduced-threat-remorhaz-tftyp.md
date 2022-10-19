---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/monstrosity
- monster/environment/arctic
aliases: ["Reduced-Threat Remorhaz"]
statblock: true
"name": "Reduced-Threat Remorhaz"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "97"
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
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that touches the remorhaz or hits it with a melee attack while\
    \ within 5 feet of it takes 10 (3d6) fire damage."
  "name": "Heated Body"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 40 (6d10\
    \ + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature,\
    \ it is [grappled](/rules/conditions.md#grappled) (escape DC 15). Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained), and the remorhaz\
    \ can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The remorhaz makes one bite attack against a Medium or smaller creature\
    \ it is grappling. If the attack hits, that creature takes the bite's damage and\
    \ is swallowed, and the grapple ends. While swallowed, the creature is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage\
    \ at the start of each of the remorhaz's turns.\n\nIf the remorhaz takes 30 damage\
    \ or more on a single turn from a creature inside it, the remorhaz must succeed\
    \ on a DC 13 Constitution saving throw at the end of that turn or regurgitate\
    \ all swallowed creatures, which fall [prone](/rules/conditions.md#prone) in a\
    \ space within 10 feet oft he remorhaz. If the remorhaz dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "TftYP"
name: Reduced-Threat Remorhaz
image: "[[Reduced-Threat Remorhaz.png]]"
---

# Reduced-Threat Remorhaz

```statblock
"name": "Reduced-Threat Remorhaz"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "97"
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
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that touches the remorhaz or hits it with a melee attack while\
    \ within 5 feet of it takes 10 (3d6) fire damage."
  "name": "Heated Body"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 40 (6d10\
    \ + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature,\
    \ it is [grappled](/rules/conditions.md#grappled) (escape DC 15). Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained), and the remorhaz\
    \ can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The remorhaz makes one bite attack against a Medium or smaller creature\
    \ it is grappling. If the attack hits, that creature takes the bite's damage and\
    \ is swallowed, and the grapple ends. While swallowed, the creature is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage\
    \ at the start of each of the remorhaz's turns.\n\nIf the remorhaz takes 30 damage\
    \ or more on a single turn from a creature inside it, the remorhaz must succeed\
    \ on a DC 13 Constitution saving throw at the end of that turn or regurgitate\
    \ all swallowed creatures, which fall [prone](/rules/conditions.md#prone) in a\
    \ space within 10 feet oft he remorhaz. If the remorhaz dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "TftYP"
"image": "[[Reduced-Threat Remorhaz.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*

## Environment

arctic