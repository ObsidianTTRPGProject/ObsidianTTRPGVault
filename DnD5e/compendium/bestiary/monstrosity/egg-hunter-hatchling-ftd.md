---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/tiny
- monster/type/monstrosity
aliases: ["Egg Hunter Hatchling"]
statblock: true
"name": "Egg Hunter Hatchling"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "28"
"hit_dice": "8d4 + 8"
"stats":
- !!int "8"
- !!int "17"
- !!int "13"
- !!int "1"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft., burrow 10 ft., climb 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "2"
"condition_immunities": "frightened"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The egg hunter can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The egg hunter makes two Egg Tooth attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage, or 17 (4d6 + 3) piercing damage if the target is an object."
  "name": "Egg Tooth"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The egg hunter takes the Dash or Disengage action."
  "name": "Rapid Movement"
"source":
- "FTD"
name: Egg Hunter Hatchling
image: "[[Egg Hunter Hatchling.png]]"
---

# Egg Hunter Hatchling

```statblock
"name": "Egg Hunter Hatchling"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "28"
"hit_dice": "8d4 + 8"
"stats":
- !!int "8"
- !!int "17"
- !!int "13"
- !!int "1"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft., burrow 10 ft., climb 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "2"
"condition_immunities": "frightened"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The egg hunter can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The egg hunter makes two Egg Tooth attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage, or 17 (4d6 + 3) piercing damage if the target is an object."
  "name": "Egg Tooth"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The egg hunter takes the Dash or Disengage action."
  "name": "Rapid Movement"
"source":
- "FTD"
"image": "[[Egg Hunter Hatchling.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 193*

## Description

A dragon egg drained by an egg hunter is filled with 1d6 new eggs, which hatch inside the dragon egg's shell in 1d6 days. The egg hunter hatchlings burst forth 1d4 days later, using the needlelike egg tooth that extends from their heads. They are voracious, consuming any other dragon eggs in the vicinity if they can. A hatchling matures into an adult about twenty days after breaking free from its dragon egg.

**Egg Hunters.** Egg hunters are parasites that seek out dragon eggs and feed on the contents. They deposit their own eggs into the empty shells, hiding the eggs from unsuspecting dragon parents or guardians.