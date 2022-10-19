---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/large
- monster/type/monstrosity
aliases: ["Monstrous Peryton"]
statblock: true
"name": "Monstrous Peryton"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "144"
"hit_dice": "17d10 + 51"
"stats":
- !!int "19"
- !!int "14"
- !!int "16"
- !!int "9"
- !!int "14"
- !!int "10"
"speed": "walk 20 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "6"
  "Strength": !!int "8"
"skillsaves":
  "Perception": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "understands Common and Elvish but can't speak"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton doesn't provoke opportunity attacks when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton has advantage on Wisdom (Perception) checks that rely on sight\
    \ or smell."
  "name": "Keen Sight and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the peryton fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton makes two attacks: one with its gore and one with its talons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage."
  "name": "Gore"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) slashing damage."
  "name": "Talons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton chooses up to three creatures within 60 feet of it that it\
    \ can see. Each creature must succeed on a DC 14 Wisdom saving throw or become\
    \ cursed. While cursed, whenever the creature makes an attack roll, an ability\
    \ check, or a saving throw, it must roll a d4 and subtract that number from the\
    \ roll. A cursed creature can repeat this saving throw at the end of each of its\
    \ turns, ending the effect on itself with a success. A creature that succeeds\
    \ on this saving throw is immune to this peryton's Warp Shadow for 24 hours."
  "name": "Warp Shadow"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton makes a Wisdom (Perception) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton makes one attack with its talons."
  "name": "Talons Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton moves up to its speed toward one target of its choosing. It\
    \ then makes a gore attack that deals an extra 9 (2d8) piercing damage on a hit."
  "name": "Dive Attack (Costs 2 Actions)"
"source":
- "GoS"
name: Monstrous Peryton
image: "[[Monstrous Peryton.png]]"
---

# Monstrous Peryton

```statblock
"name": "Monstrous Peryton"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "144"
"hit_dice": "17d10 + 51"
"stats":
- !!int "19"
- !!int "14"
- !!int "16"
- !!int "9"
- !!int "14"
- !!int "10"
"speed": "walk 20 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "6"
  "Strength": !!int "8"
"skillsaves":
  "Perception": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "understands Common and Elvish but can't speak"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton doesn't provoke opportunity attacks when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton has advantage on Wisdom (Perception) checks that rely on sight\
    \ or smell."
  "name": "Keen Sight and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the peryton fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton makes two attacks: one with its gore and one with its talons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage."
  "name": "Gore"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) slashing damage."
  "name": "Talons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton chooses up to three creatures within 60 feet of it that it\
    \ can see. Each creature must succeed on a DC 14 Wisdom saving throw or become\
    \ cursed. While cursed, whenever the creature makes an attack roll, an ability\
    \ check, or a saving throw, it must roll a d4 and subtract that number from the\
    \ roll. A cursed creature can repeat this saving throw at the end of each of its\
    \ turns, ending the effect on itself with a success. A creature that succeeds\
    \ on this saving throw is immune to this peryton's Warp Shadow for 24 hours."
  "name": "Warp Shadow"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton makes a Wisdom (Perception) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton makes one attack with its talons."
  "name": "Talons Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton moves up to its speed toward one target of its choosing. It\
    \ then makes a gore attack that deals an extra 9 (2d8) piercing damage on a hit."
  "name": "Dive Attack (Costs 2 Actions)"
"source":
- "GoS"
"image": "[[Monstrous Peryton.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 245*

## Description

The terror of the coast and the recent scourge of Firewatch Island in Tammeraut's Fate, this large peryton preys on ships and coastal communities alike. It has built numerous nests to mark its territory.