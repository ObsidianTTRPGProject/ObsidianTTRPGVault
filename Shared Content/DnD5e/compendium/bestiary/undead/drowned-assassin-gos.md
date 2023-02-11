---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/medium
- monster/type/undead
aliases: ["Drowned Assassin"]
statblock: true
"name": "Drowned Assassin"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "15"
- !!int "16"
- !!int "16"
- !!int "9"
- !!int "9"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "5"
  "Stealth": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands the languages it knew in life but can't speak"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drowned assassin cannot swim, and it sinks to the bottom of any body\
    \ of water. It takes no penalties to its movement or attacks underwater. It is\
    \ immune to the effects of being underwater at a depth greater than 100 feet."
  "name": "Bottom Treader"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drowned assassin shares its mind with every other drowned one within\
    \ 1 mile of it, and can communicate its thoughts and observations to them instantaneously\
    \ and without limitation."
  "name": "Bound Together"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the drowned assassin to 0 hit points, it must make a\
    \ Constitution saving throw with a DC of 5 + the damage taken, unless the damage\
    \ is radiant or from a critical hit. On a success, the drowned assassin drops\
    \ to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drowned assassin makes two hand crossbow attacks or two dagger attacks.\
    \ It can then take the Dash, Disengage, or Hide action."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 30/120 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage plus 3 (1d6) poison damage, and the target must succeed\
    \ on a DC 12 Constitution saving throw or contract [bluerot](/rules/diseases.md#bluerot)\
    \ (see the \"Bluerot\" in notes)."
  "name": "Hand Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage plus 9 (2d8) poison damage, and the target must succeed\
    \ on a DC 12 Constitution saving throw or contract [bluerot](/rules/diseases.md#bluerot)\
    \ (see the \"Bluerot\" in notes)."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drowned assassin removes its mask, revealing its rotting face. Each\
    \ creature of the assassin's choice within 30 feet of it that can see the assassin\
    \ must succeed on a DC 13 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ until the end of its next turn."
  "name": "Reveal (1/Day)"
"source":
- "GoS"
- "LR"
name: Drowned Assassin
image: "[[Drowned Assassin.png]]"
---

# Drowned Assassin

```statblock
"name": "Drowned Assassin"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "15"
- !!int "16"
- !!int "16"
- !!int "9"
- !!int "9"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "5"
  "Stealth": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands the languages it knew in life but can't speak"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drowned assassin cannot swim, and it sinks to the bottom of any body\
    \ of water. It takes no penalties to its movement or attacks underwater. It is\
    \ immune to the effects of being underwater at a depth greater than 100 feet."
  "name": "Bottom Treader"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drowned assassin shares its mind with every other drowned one within\
    \ 1 mile of it, and can communicate its thoughts and observations to them instantaneously\
    \ and without limitation."
  "name": "Bound Together"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the drowned assassin to 0 hit points, it must make a\
    \ Constitution saving throw with a DC of 5 + the damage taken, unless the damage\
    \ is radiant or from a critical hit. On a success, the drowned assassin drops\
    \ to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drowned assassin makes two hand crossbow attacks or two dagger attacks.\
    \ It can then take the Dash, Disengage, or Hide action."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 30/120 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage plus 3 (1d6) poison damage, and the target must succeed\
    \ on a DC 12 Constitution saving throw or contract [bluerot](/rules/diseases.md#bluerot)\
    \ (see the \"Bluerot\" in notes)."
  "name": "Hand Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage plus 9 (2d8) poison damage, and the target must succeed\
    \ on a DC 12 Constitution saving throw or contract [bluerot](/rules/diseases.md#bluerot)\
    \ (see the \"Bluerot\" in notes)."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drowned assassin removes its mask, revealing its rotting face. Each\
    \ creature of the assassin's choice within 30 feet of it that can see the assassin\
    \ must succeed on a DC 13 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ until the end of its next turn."
  "name": "Reveal (1/Day)"
"source":
- "GoS"
- "LR"
"image": "[[Drowned Assassin.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 234, Locathah Rising*

## Description

The drowned assassin stalks and kills in a grim pantomime of its former occupation. Sneaking from shadow to shadow, and appearing in the undead assault of Tammeraut's Fate, it aims its barnacle-encrusted hand crossbow with deadly precision. Hidden behind a simple driftwood mask, this creature's face causes terror in mortal hearts when exposed.

**Bluerot.** This disease targets humanoids. While afflicted with bluerot, a victim grows grotesque blue boils on their face and back. This disease is carried by undead (including the drowned ones in Tammeraut's Fate), and victims most often acquire it through wounds caused by infected creatures. The disease's boils manifest in 1d4 hours, causing the victim's Constitution and Charisma scores to decrease by 1d4 each, to a minimum of 3. This is quickly followed by a fever and tingling in the extremities. An infected creature is vulnerable to radiant damage and gains the ability to breathe underwater.

At the end of each long rest, an infected creature makes a DC 12 Constitution saving throw. On a success, the victim regains 1 point of Constitution and 1 point of Charisma lost to the disease. If the infected creature regains all the points lost to the disease, it is cured. Other effects that raise the victim's ability scores do not cure the disease. On a failed saving throw, the victim takes 18 (4d8) necrotic damage as the boils burst and spread. A creature reduced to 0 hit points by this damage cannot regain hit points until the disease is cured, though it can be stabilized as normal.