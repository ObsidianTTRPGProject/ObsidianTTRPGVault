---
cssclass: json5e-monster
tags:
- compendium/src/jttrc
- monster/size/large
- monster/type/aberration
aliases: ["Whistler"]
statblock: true
"name": "Whistler"
"size": "Large"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "180"
"hit_dice": "24d10 + 48"
"stats":
- !!int "13"
- !!int "16"
- !!int "14"
- !!int "15"
- !!int "16"
- !!int "18"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "7"
"skillsaves":
  "Stealth": !!int "11"
"damage_resistances": "psychic"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "blindsight 60 ft., passive Perception 13"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Attack rolls against the whistler are made with disadvantage unless the\
    \ whistler is [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Blurred Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The whistler doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The whistler makes three Psychic Swipe attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +8 to hit, reach 10 ft., one creature. Hit: 15 (2d10\
    \ + 4) psychic damage."
  "name": "Psychic Swipe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The whistler telepathically whistles an otherworldly melody into the minds\
    \ of up to two creatures it can see within range of its telepathy. Each target\
    \ must succeed on a DC 16 Wisdom saving throw or take 33 (6d10) psychic damage\
    \ and become [frightened](/rules/conditions.md#frightened) of the whistler for\
    \ 1 minute. A [frightened](/rules/conditions.md#frightened) creature can repeat\
    \ this saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Otherworldly Melody (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The whistler teleports up to 20 feet to an unoccupied space it can see."
  "name": "Surreal Step"
"source":
- "JttRC"
name: Whistler
image: "[[Whistler.png]]"
---

# Whistler

```statblock
"name": "Whistler"
"size": "Large"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "180"
"hit_dice": "24d10 + 48"
"stats":
- !!int "13"
- !!int "16"
- !!int "14"
- !!int "15"
- !!int "16"
- !!int "18"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "7"
"skillsaves":
  "Stealth": !!int "11"
"damage_resistances": "psychic"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "blindsight 60 ft., passive Perception 13"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Attack rolls against the whistler are made with disadvantage unless the\
    \ whistler is [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Blurred Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The whistler doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The whistler makes three Psychic Swipe attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +8 to hit, reach 10 ft., one creature. Hit: 15 (2d10\
    \ + 4) psychic damage."
  "name": "Psychic Swipe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The whistler telepathically whistles an otherworldly melody into the minds\
    \ of up to two creatures it can see within range of its telepathy. Each target\
    \ must succeed on a DC 16 Wisdom saving throw or take 33 (6d10) psychic damage\
    \ and become [frightened](/rules/conditions.md#frightened) of the whistler for\
    \ 1 minute. A [frightened](/rules/conditions.md#frightened) creature can repeat\
    \ this saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Otherworldly Melody (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The whistler teleports up to 20 feet to an unoccupied space it can see."
  "name": "Surreal Step"
"source":
- "JttRC"
"image": "[[Whistler.png]]"
```
^statblock

*Source: Journeys through the Radiant Citadel p. 221*

## Description

Whistlers are inscrutable stalkers hailing from airy, screeching reaches of the Far Realm. They are difficult to see as they're not tethered to one point in space, blurring in a state of perpetual physical uncertainty. A dead whistler appears as a gray, featureless, humanlike biped with long limbs and thin fingers. Those stalked by a whistler can't shut out its soundless, seven-note tune, an otherworldly melody that invades and scourges the mind. Few creatures that encounter a whistler escape; those that do are forever haunted by the stalker's frightful tune.