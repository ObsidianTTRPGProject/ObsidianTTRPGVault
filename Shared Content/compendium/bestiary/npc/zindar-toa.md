---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/humanoid/half-dragon
aliases: ["Zindar"]
statblock: true
"name": "Zindar"
"size": "Medium"
"type": "humanoid"
"subtype": "half-dragon"
"alignment": "Lawful Good"
"ac": !!int "13"
"hp": !!int "110"
"hit_dice": "17d8 + 34"
"stats":
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "5"
"skillsaves":
  "Investigation": !!int "9"
  "Insight": !!int "5"
  "History": !!int "9"
  "Arcana": !!int "6"
"damage_resistances": "fire"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 12"
"languages": "Common, Draconic, Dwarvish, Primordial"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zindar is a 14th-level spellcaster. His spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). Zindar knows the following\
    \ sorcerer spells:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [friends](/compendium/spells/friends.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [mending](/compendium/spells/mending.md),\
    \ [message](/compendium/spells/message.md)\n\n1st level (6 1st-level slots):\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md),\
    \ [sleep](/compendium/spells/sleep.md)\n\n2nd level (4 2nd-level slots): [detect\
    \ thoughts](/compendium/spells/detect-thoughts.md), [knock](/compendium/spells/knock.md)\n\
    \n3rd level (3 3rd-level slots): [clairvoyance](/compendium/spells/clairvoyance.md),\
    \ [tongues](/compendium/spells/tongues.md)\n\n4th level (3 4th-level slots):\
    \ [dominate beast](/compendium/spells/dominate-beast.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level (3 5th-level slots): [hold monster](/compendium/spells/hold-monster.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md)\n\n6th level (1 6th-level\
    \ slots): [true seeing](/compendium/spells/true-seeing.md)\n\n7th level (1\
    \ 7th-level slots): [fire storm](/compendium/spells/fire-storm.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action on his turn, Zindar can sprout a pair of dragon wings\
    \ from his back, gaining a flying speed of 30 feet until he dismisses them as\
    \ a bonus action."
  "name": "Dragon Wings"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage when used with two\
    \ hands."
  "name": "Quarterstaff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zindar uses one of the following options:"
  "name": "Breath Weapon (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zindar exhales fire in a 15-foot cone. Each creature in that area must\
    \ make a DC 15 Dexterity saving throw, taking 22 (4d10) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zindar exhales gas in a 15-foot cone. Each creature in that area must succeed\
    \ on a DC 15 Strength saving throw or have disadvantage on Strength-based attack\
    \ rolls, Strength checks, and Strength saving throws for 1 minute. A creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Weakening Breath"
"source":
- "ToA"
name: Zindar
image: "[[Zindar.png]]"
---

# Zindar

```statblock
"name": "Zindar"
"size": "Medium"
"type": "humanoid"
"subtype": "half-dragon"
"alignment": "Lawful Good"
"ac": !!int "13"
"hp": !!int "110"
"hit_dice": "17d8 + 34"
"stats":
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "5"
"skillsaves":
  "Investigation": !!int "9"
  "Insight": !!int "5"
  "History": !!int "9"
  "Arcana": !!int "6"
"damage_resistances": "fire"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 12"
"languages": "Common, Draconic, Dwarvish, Primordial"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zindar is a 14th-level spellcaster. His spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). Zindar knows the following\
    \ sorcerer spells:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [friends](/compendium/spells/friends.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [mending](/compendium/spells/mending.md),\
    \ [message](/compendium/spells/message.md)\n\n1st level (6 1st-level slots):\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md),\
    \ [sleep](/compendium/spells/sleep.md)\n\n2nd level (4 2nd-level slots): [detect\
    \ thoughts](/compendium/spells/detect-thoughts.md), [knock](/compendium/spells/knock.md)\n\
    \n3rd level (3 3rd-level slots): [clairvoyance](/compendium/spells/clairvoyance.md),\
    \ [tongues](/compendium/spells/tongues.md)\n\n4th level (3 4th-level slots):\
    \ [dominate beast](/compendium/spells/dominate-beast.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level (3 5th-level slots): [hold monster](/compendium/spells/hold-monster.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md)\n\n6th level (1 6th-level\
    \ slots): [true seeing](/compendium/spells/true-seeing.md)\n\n7th level (1\
    \ 7th-level slots): [fire storm](/compendium/spells/fire-storm.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action on his turn, Zindar can sprout a pair of dragon wings\
    \ from his back, gaining a flying speed of 30 feet until he dismisses them as\
    \ a bonus action."
  "name": "Dragon Wings"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage when used with two\
    \ hands."
  "name": "Quarterstaff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zindar uses one of the following options:"
  "name": "Breath Weapon (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zindar exhales fire in a 15-foot cone. Each creature in that area must\
    \ make a DC 15 Dexterity saving throw, taking 22 (4d10) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zindar exhales gas in a 15-foot cone. Each creature in that area must succeed\
    \ on a DC 15 Strength saving throw or have disadvantage on Strength-based attack\
    \ rolls, Strength checks, and Strength saving throws for 1 minute. A creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Weakening Breath"
"source":
- "ToA"
"image": "[[Zindar.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 239*

## Description

This half-gold dragon runs Port Nyanzaru's docks and keeps track of ship manifests. A sorcerer of impressive ability, Zindar is well paid by the merchant princes for his work. He is also a key member of the Ytepka Society and a great source of information about the city. Zindar has a soft spot for adventurers, but he knows the dangers of Chult well enough to understand that most of those who embark on expeditions to explore the jungle never return.

Zindar makes extensive use of spells in his day-today work, casting message to deliver missives to dock workers, detect thoughts for reading ship captains' minds, knock for unsealing containers for inspection, clairvoyance for peering into ship holds, dominate beast to pacify nervous animals, and so forth.

**Zindar's Traits.** **Ideal.** "I take pride in my work, and I like to keep all my business dealings honest."

**Bond.** "Port Nyanzaru is my home. I take a dim view of those who would bring harm to the city and its inhabitants."

**Flaw.** "I don't get mad. I get even."