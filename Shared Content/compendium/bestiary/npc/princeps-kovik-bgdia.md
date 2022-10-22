---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/medium
- monster/type/fiend/devil
aliases: ["Princeps Kovik"]
statblock: true
"name": "Princeps Kovik"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "85"
"hit_dice": "10d8 + 40"
"stats":
- !!int "18"
- !!int "15"
- !!int "18"
- !!int "11"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "4"
  "Constitution": !!int "7"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Infernal, telepathy 120 ft."
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede Kovik's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kovik has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kovik makes two attacks with its chains."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage. The target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14) if Kovik isn't already grappling a creature. Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained) and takes\
    \ 7 (2d6) piercing damage at the start of each of its turns."
  "name": "Chain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Up to four chains Kovik can see within 60 feet of it magically sprout razor-edged\
    \ barbs and animate under Kovik's control, provided that the chains aren't being\
    \ worn or carried.\n\nEach animated chain is an object with AC 20, 20 hit points,\
    \ resistance to piercing damage, and immunity to psychic and thunder damage. When\
    \ Kovik uses Multiattack on its turn, it can use each animated chain to make one\
    \ additional chain attack. An animated chain can grapple one creature of its own\
    \ but can't make attacks while grappling. An animated chain reverts to its inanimate\
    \ state if reduced to 0 hit points or if Kovik is [incapacitated](/rules/conditions.md#incapacitated)\
    \ or dies."
  "name": "Animate Chains (Recharges after a Short or Long Rest)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature Kovik can see starts its turn within 30 feet of Kovik,\
    \ Kovik can create the illusion that it looks like one of the creature's departed\
    \ loved ones or bitter enemies. If the creature can see Kovik, it must succeed\
    \ on a DC 14 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ until the end of its turn."
  "name": "Unnerving Mask"
"source":
- "BGDIA"
name: Princeps Kovik
image: "[[Princeps Kovik.png]]"
---

# Princeps Kovik

```statblock
"name": "Princeps Kovik"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "85"
"hit_dice": "10d8 + 40"
"stats":
- !!int "18"
- !!int "15"
- !!int "18"
- !!int "11"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "4"
  "Constitution": !!int "7"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Infernal, telepathy 120 ft."
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede Kovik's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kovik has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kovik makes two attacks with its chains."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage. The target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14) if Kovik isn't already grappling a creature. Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained) and takes\
    \ 7 (2d6) piercing damage at the start of each of its turns."
  "name": "Chain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Up to four chains Kovik can see within 60 feet of it magically sprout razor-edged\
    \ barbs and animate under Kovik's control, provided that the chains aren't being\
    \ worn or carried.\n\nEach animated chain is an object with AC 20, 20 hit points,\
    \ resistance to piercing damage, and immunity to psychic and thunder damage. When\
    \ Kovik uses Multiattack on its turn, it can use each animated chain to make one\
    \ additional chain attack. An animated chain can grapple one creature of its own\
    \ but can't make attacks while grappling. An animated chain reverts to its inanimate\
    \ state if reduced to 0 hit points or if Kovik is [incapacitated](/rules/conditions.md#incapacitated)\
    \ or dies."
  "name": "Animate Chains (Recharges after a Short or Long Rest)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature Kovik can see starts its turn within 30 feet of Kovik,\
    \ Kovik can create the illusion that it looks like one of the creature's departed\
    \ loved ones or bitter enemies. If the creature can see Kovik, it must succeed\
    \ on a DC 14 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ until the end of its turn."
  "name": "Unnerving Mask"
"source":
- "BGDIA"
"image": "[[Princeps Kovik.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 91*