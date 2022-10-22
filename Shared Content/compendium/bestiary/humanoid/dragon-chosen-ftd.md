---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/medium
- monster/type/humanoid
aliases: ["Dragon Chosen"]
statblock: true
"name": "Dragon Chosen"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"stats":
- !!int "18"
- !!int "18"
- !!int "14"
- !!int "10"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Strength": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "3"
"condition_immunities": "frightened"
"senses": "passive Perception 13"
"languages": "Common, Draconic"
"cr": "3"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chosen makes one Handaxe attack and two Shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) slashing damage. Hit or Miss: The handaxe\
    \ magically returns to the chosen's hand immediately after a ranged attack."
  "name": "Handaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Shortsword"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Immediately after the chosen takes damage from a creature within 5 feet\
    \ of it, it can make a Shortsword attack with advantage against that creature."
  "name": "Biting Rebuke"
"source":
- "FTD"
name: Dragon Chosen
image: "[[Dragon Chosen.png]]"
---

# Dragon Chosen

```statblock
"name": "Dragon Chosen"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"stats":
- !!int "18"
- !!int "18"
- !!int "14"
- !!int "10"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Strength": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "3"
"condition_immunities": "frightened"
"senses": "passive Perception 13"
"languages": "Common, Draconic"
"cr": "3"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chosen makes one Handaxe attack and two Shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) slashing damage. Hit or Miss: The handaxe\
    \ magically returns to the chosen's hand immediately after a ranged attack."
  "name": "Handaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Shortsword"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Immediately after the chosen takes damage from a creature within 5 feet\
    \ of it, it can make a Shortsword attack with advantage against that creature."
  "name": "Biting Rebuke"
"source":
- "FTD"
"image": "[[Dragon Chosen.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 189*

## Description

Dragon chosen are mighty warriors who offer their bodies as vessels for a dragon's might. They serve as enforcers of their masters' will; they often accompany dragon speakers—and are quick to defend them if they sense any ill intent. Dragon chosen are skilled in close combat, using two weapons to tear at their foes.

**Dragon Followers.** Dragons boast many minions, students, employees, acolytes, and thralls. Dragon followers are those servitors whose devotion to a dragon approaches fanatical reverence and who receive magical power from the dragon in return.

Dragon followers might serve and revere any kind of dragon, and their behavior and beliefs reflect the ethos of the dragon they follow. Many dragon followers have personal stories of benevolent dragons sharing great knowledge, protecting their towns, or sparing their lives during some foolhardy adventure. Other followers seek to uncover the mysteries of draconic nature and live a life worthy of their dragon's reward, and they dream of a world where dragons can live among them as their rulers.