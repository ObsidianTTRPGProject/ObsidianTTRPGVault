---
cssclass: json5e-monster
tags:
- compendium/src/mff
- monster/size/medium
- monster/type/humanoid/dire-corby
aliases: ["Dire Corby"]
statblock: true
"name": "Dire Corby"
"size": "Medium"
"type": "humanoid"
"subtype": "dire corby"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "13"
- !!int "14"
- !!int "13"
- !!int "6"
- !!int "8"
- !!int "7"
"speed": "walk 40 ft., climb 40 ft."
"skillsaves":
  "Perception": !!int "3"
  "Acrobatics": !!int "4"
"damage_vulnerabilities": "thunder"
"condition_immunities": "frightened"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Undercommon"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature other than a dire corby that starts its turn within 60 feet\
    \ of a dire corby and can hear it must make a DC 11 Wisdom saving throw. On a\
    \ failed save, the creature is unable to use the Dash action, cannot climb, or\
    \ cast spells other than cantrips until the start of its next turn."
  "name": "Dire Cacophony"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dire corby has advantage on Wisdom (Perception) checks that rely on\
    \ hearing."
  "name": "Keen Hearing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dire corby makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage."
  "name": "Claw"
"source":
- "MFF"
name: Dire Corby
image: "[[Dire Corby.png]]"
---

# Dire Corby

```statblock
"name": "Dire Corby"
"size": "Medium"
"type": "humanoid"
"subtype": "dire corby"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "13"
- !!int "14"
- !!int "13"
- !!int "6"
- !!int "8"
- !!int "7"
"speed": "walk 40 ft., climb 40 ft."
"skillsaves":
  "Perception": !!int "3"
  "Acrobatics": !!int "4"
"damage_vulnerabilities": "thunder"
"condition_immunities": "frightened"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Undercommon"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature other than a dire corby that starts its turn within 60 feet\
    \ of a dire corby and can hear it must make a DC 11 Wisdom saving throw. On a\
    \ failed save, the creature is unable to use the Dash action, cannot climb, or\
    \ cast spells other than cantrips until the start of its next turn."
  "name": "Dire Cacophony"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dire corby has advantage on Wisdom (Perception) checks that rely on\
    \ hearing."
  "name": "Keen Hearing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dire corby makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage."
  "name": "Claw"
"source":
- "MFF"
"image": "[[Dire Corby.png]]"
```
^statblock

*Source: Mordenkainen's Fiendish Folio p. 7*

## Description

Heralded by the ominous, deep rumbling of their strange song, great packs of dire corbies range across the Underdark, stripping the tunnels and caverns they traverse of all living things. Even the mightiest creatures of the Underdark hide within fortified lairs or step aside from a dire corby flock, knowing of how these creatures' bizarre song disrupts, disorients, and ultimately overwhelms their prey.

**Flocks of Doom.** Dire corbies wander the Underdark in vast flocks, following predictable patterns of movement like migrating birds. They strip a region bare of the lichens, fungus, and vermin that comprise their diet before moving on to a fresh feeding ground. Underdark travelers prize accurate charts illustrating the movements of these flocks, since trailing a day behind them all but guarantees that the dire corbies will have cleared out many monsters and other threats.

Horrid Songs  The denizens of the Underdark hear an approaching flock of dire corbies long before it comes into view. As these creatures travel, they hoot, chirp, and howl in maddening cacophony. Their song has a strange magical current to it, causing those who hear it to suffer a stomach-churning vertigo that makes it impossible to move at speed or climb cave walls. Spellcasters suffer as their minds swim, leaving them unable to use anything but their simplest magic. The dire corbies' disorienting song has left countless Underdark creatures and travelers unable to flee as these monsters fall upon them.

**Strange Escort.** Certain Underdark explorers—judged inventive by some and lunatics by others—have learned to travel among the dire corbies. After blocking their ears to avoid the effect of a flock's song, these travelers attempt to mimic the strange hooting and chirping of a dire corby, with these creatures' simple minds making success surprisingly easy. Accepted as part of the flock, a traveler can range across the Underdark escorted by hundreds of humanoid creatures that the other predators of the depths take pains to avoid.

**Unwitting Explorers.** As old pathways become impassable or a flock sustains heavy losses in a particular area, dire corbies will sometimes chart a new migratory course. Depending on their new route, a mob of these creatures might emerge in a dungeon connecting the Underdark and the surface world. Rampaging through such a dungeon, the flock often forces its monstrous inhabitants to flee for safer lairs. When they inevitably emerge on the surface, the dire corbies' voracious appetites cause them to quickly strip their new environment—including any nearby settlements—of life.