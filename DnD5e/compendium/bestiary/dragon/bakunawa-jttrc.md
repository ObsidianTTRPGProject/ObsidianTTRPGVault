---
cssclass: json5e-monster
tags:
- compendium/src/jttrc
- monster/size/gargantuan
- monster/type/dragon
aliases: ["Bakunawa"]
statblock: true
"name": "Bakunawa"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "150"
"hit_dice": "12d20 + 24"
"stats":
- !!int "21"
- !!int "12"
- !!int "15"
- !!int "14"
- !!int "17"
- !!int "16"
"speed": "walk 20 ft., fly 60 ft., swim 60 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Constitution": !!int "6"
"damage_resistances": "lightning, thunder"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Celestial, Common, Draconic"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bakunawa can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the bakunawa fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bakunawa makes one Bite attack and one Storm Slam attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage plus 7 (2d6) lightning damage. If the target is a Large\
    \ or smaller creature, it must succeed on a DC 17 Strength saving throw or be\
    \ swallowed by the bakunawa. A swallowed creature is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), and it has total cover against\
    \ attacks and other effects outside the bakunawa. At the start of each of the\
    \ bakunawa's turns, each swallowed creature takes 10 (3d6) lightning damage.\n\
    \nThe bakunawa's gullet can hold up to two creatures at a time. If the bakunawa\
    \ takes 30 damage or more on a single turn from a swallowed creature, the bakunawa\
    \ must succeed on a DC 16 Constitution saving throw at the end of that turn or\
    \ regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 15 feet of the bakunawa. If the bakunawa dies, a swallowed\
    \ creature is no longer [restrained](/rules/conditions.md#restrained) by it and\
    \ can escape from the corpse by using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 9 (1d8\
    \ + 5) bludgeoning damage plus 5 (1d10) thunder damage, and the target is pushed\
    \ up to 10 feet in a horizontal direction away from the bakunawa."
  "name": "Storm Slam"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bakunawa flies or swims up to half its speed. This movement doesn't\
    \ provoke opportunity attacks."
  "name": "Nimble Glide"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bakunawa makes one Storm Slam attack."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bakunawa arcs lightning at up to two creatures it can see within 60\
    \ feet of itself. Each target must succeed on a DC 15 Dexterity saving throw or\
    \ take 22 (4d10) lightning damage."
  "name": "Lightning Strikes (Costs 3 Actions)"
"source":
- "JttRC"
name: Bakunawa
image: "[[Bakunawa.png]]"
---

# Bakunawa

```statblock
"name": "Bakunawa"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "150"
"hit_dice": "12d20 + 24"
"stats":
- !!int "21"
- !!int "12"
- !!int "15"
- !!int "14"
- !!int "17"
- !!int "16"
"speed": "walk 20 ft., fly 60 ft., swim 60 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Constitution": !!int "6"
"damage_resistances": "lightning, thunder"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Celestial, Common, Draconic"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bakunawa can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the bakunawa fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bakunawa makes one Bite attack and one Storm Slam attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage plus 7 (2d6) lightning damage. If the target is a Large\
    \ or smaller creature, it must succeed on a DC 17 Strength saving throw or be\
    \ swallowed by the bakunawa. A swallowed creature is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), and it has total cover against\
    \ attacks and other effects outside the bakunawa. At the start of each of the\
    \ bakunawa's turns, each swallowed creature takes 10 (3d6) lightning damage.\n\
    \nThe bakunawa's gullet can hold up to two creatures at a time. If the bakunawa\
    \ takes 30 damage or more on a single turn from a swallowed creature, the bakunawa\
    \ must succeed on a DC 16 Constitution saving throw at the end of that turn or\
    \ regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 15 feet of the bakunawa. If the bakunawa dies, a swallowed\
    \ creature is no longer [restrained](/rules/conditions.md#restrained) by it and\
    \ can escape from the corpse by using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 9 (1d8\
    \ + 5) bludgeoning damage plus 5 (1d10) thunder damage, and the target is pushed\
    \ up to 10 feet in a horizontal direction away from the bakunawa."
  "name": "Storm Slam"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bakunawa flies or swims up to half its speed. This movement doesn't\
    \ provoke opportunity attacks."
  "name": "Nimble Glide"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bakunawa makes one Storm Slam attack."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bakunawa arcs lightning at up to two creatures it can see within 60\
    \ feet of itself. Each target must succeed on a DC 15 Dexterity saving throw or\
    \ take 22 (4d10) lightning damage."
  "name": "Lightning Strikes (Costs 3 Actions)"
"source":
- "JttRC"
"image": "[[Bakunawa.png]]"
```
^statblock

*Source: Journeys through the Radiant Citadel p. 147*

## Description

Worshiped as draconic avatars of storm and tide, bakunawa soar over the archipelagos they call home. Iridescent scales crackling with lightning cover a bakunawa's fearsome serpentine body, and the sharp movements of its mighty wings echo with thunderous winds. Known for their mercilessness in battle, bakunawa swallow whole any who challenge them.