---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Galvanic Blastseeker"]
statblock: true
"name": "Galvanic Blastseeker"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "10"
- !!int "17"
- !!int "14"
- !!int "19"
- !!int "10"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
"skillsaves":
  "Perception": !!int "3"
  "Acrobatics": !!int "6"
  "Arcana": !!int "7"
"damage_resistances": "lightning, thunder"
"senses": "passive Perception 13"
"languages": "Common and Primordial, plus any one language"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blastseeker's innate spellcasting ability is Intelligence (spell save\
    \ DC 15, +7 to hit with spell attacks). The blastseeker can innately cast the\
    \ following spells, requiring no components other than its Izzet gear, which doesn't\
    \ function for others:\n\n1/day: [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n3/day each: [levitate](/compendium/spells/levitate.md), [lightning bolt](/compendium/spells/lightning-bolt.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the blastseeker casts [lightning bolt](/compendium/spells/lightning-bolt.md)\
    \ or thunderwave, it can roll a die. On an odd number, the blastseeker takes 9\
    \ (2d8) force damage. On an even number, the spell also deals 9 (2d8) lightning\
    \ damage to each target that fails its saving throw."
  "name": "Galvanic Overcast (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the blastseeker casts [lightning bolt](/compendium/spells/lightning-bolt.md)\
    \ or thunderwave, all other creatures within 10 feet of the blastseeker each take\
    \ 3 lightning damage."
  "name": "Heart of the Storm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blastseeker can use a bonus action to fly up to 10 feet without provoking\
    \ opportunity attacks."
  "name": "Gust-Propelled Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 3 (1d6) piercing damage, or 4 (1d8) piercing damage if\
    \ used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "GGR"
name: Galvanic Blastseeker
image: "[[Galvanic Blastseeker.png]]"
---

# Galvanic Blastseeker

```statblock
"name": "Galvanic Blastseeker"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "10"
- !!int "17"
- !!int "14"
- !!int "19"
- !!int "10"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
"skillsaves":
  "Perception": !!int "3"
  "Acrobatics": !!int "6"
  "Arcana": !!int "7"
"damage_resistances": "lightning, thunder"
"senses": "passive Perception 13"
"languages": "Common and Primordial, plus any one language"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blastseeker's innate spellcasting ability is Intelligence (spell save\
    \ DC 15, +7 to hit with spell attacks). The blastseeker can innately cast the\
    \ following spells, requiring no components other than its Izzet gear, which doesn't\
    \ function for others:\n\n1/day: [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n3/day each: [levitate](/compendium/spells/levitate.md), [lightning bolt](/compendium/spells/lightning-bolt.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the blastseeker casts [lightning bolt](/compendium/spells/lightning-bolt.md)\
    \ or thunderwave, it can roll a die. On an odd number, the blastseeker takes 9\
    \ (2d8) force damage. On an even number, the spell also deals 9 (2d8) lightning\
    \ damage to each target that fails its saving throw."
  "name": "Galvanic Overcast (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the blastseeker casts [lightning bolt](/compendium/spells/lightning-bolt.md)\
    \ or thunderwave, all other creatures within 10 feet of the blastseeker each take\
    \ 3 lightning damage."
  "name": "Heart of the Storm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blastseeker can use a bonus action to fly up to 10 feet without provoking\
    \ opportunity attacks."
  "name": "Gust-Propelled Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 3 (1d6) piercing damage, or 4 (1d8) piercing damage if\
    \ used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "GGR"
"image": "[[Galvanic Blastseeker.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 243*

## Description

While chemisters focus on inventing new tools, weapons, and other devices for the guild to use, the role of a blastseeker is to put those devices to work. Despite the name, not all such devices produce explosions, but all the most interesting ones (from the Izzet perspective) do.