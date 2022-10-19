---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/medium
- monster/type/humanoid/dwarf
aliases: ["Deepking Horgar Steelshadow V"]
statblock: true
"name": "Deepking Horgar Steelshadow V"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Evil"
"ac": !!int "20"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "19"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "11"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"senses": "passive Perception 10"
"languages": "Draconic, Giant, Dwarvish"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Horgar has advantage on saving throws against poison, spells, and illusions,\
    \ as well as to resist being [charmed](/rules/conditions.md#charmed) or [paralyzed](/rules/conditions.md#paralyzed)."
  "name": "Duergar Resilience"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Horgar has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Horgar wields [Gauntlets of Ogre Power](/compendium/items/gauntlets-of-ogre-power.md)\
    \ giving him a Strength score of 19 (+4)."
  "name": "Gauntlets of Ogre Power"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Horgar has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, Horgar magically increases in size, along with anything he\
    \ is wearing or carrying. While enlarged, Horgar is Large, doubles his damage\
    \ dice on Strength-based weapon attacks (included in the attacks), and makes Strength\
    \ checks and Strength saving throws with advantage. If Horgar lacks the room to\
    \ become Large, he attains the maximum size possible in the space available."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Horgar magically turns [invisible](/rules/conditions.md#invisible) until\
    \ he attacks, casts a spell, or uses his Enlarge, or until his concentration is\
    \ broken, up to 1 hour (as if concentrating on a spell). Any equipment Horgar\
    \ wears or carries is [invisible](/rules/conditions.md#invisible) with him."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Horgar makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) bludgeoning damage, or 11 (1d10 + 6) bludgeoning damage if used with two\
    \ hands. While Horgar is enlarged, the damage increases to 15 (2d8 + 6) or 17\
    \ (2d10 + 6) bludgeoning damage, respectively."
  "name": "+2 Warhammer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit:\
    \ 5 (1d10) piercing damage."
  "name": "Heavy Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, Horgar can utter a special command or warning whenever a\
    \ nonhostile creature that he can see within 30 feet of Horgar makes an attack\
    \ roll or a saving throw. The creature can add a d4 to its roll provided it can\
    \ hear and understand Horgar. A creature can benefit from only one Leadership\
    \ die at a time. This effect ends if Horgar is [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Leadership (Recharges after a Short or Long Rest)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Horgar adds 2 to its AC against one melee attack that would hit him. To\
    \ do so, Horgar must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "OotA"
name: Deepking Horgar Steelshadow V
image: "[[Deepking Horgar Steelshadow V.png]]"
---

# Deepking Horgar Steelshadow V

```statblock
"name": "Deepking Horgar Steelshadow V"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Evil"
"ac": !!int "20"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "19"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "11"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"senses": "passive Perception 10"
"languages": "Draconic, Giant, Dwarvish"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Horgar has advantage on saving throws against poison, spells, and illusions,\
    \ as well as to resist being [charmed](/rules/conditions.md#charmed) or [paralyzed](/rules/conditions.md#paralyzed)."
  "name": "Duergar Resilience"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Horgar has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Horgar wields [Gauntlets of Ogre Power](/compendium/items/gauntlets-of-ogre-power.md)\
    \ giving him a Strength score of 19 (+4)."
  "name": "Gauntlets of Ogre Power"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Horgar has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, Horgar magically increases in size, along with anything he\
    \ is wearing or carrying. While enlarged, Horgar is Large, doubles his damage\
    \ dice on Strength-based weapon attacks (included in the attacks), and makes Strength\
    \ checks and Strength saving throws with advantage. If Horgar lacks the room to\
    \ become Large, he attains the maximum size possible in the space available."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Horgar magically turns [invisible](/rules/conditions.md#invisible) until\
    \ he attacks, casts a spell, or uses his Enlarge, or until his concentration is\
    \ broken, up to 1 hour (as if concentrating on a spell). Any equipment Horgar\
    \ wears or carries is [invisible](/rules/conditions.md#invisible) with him."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Horgar makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) bludgeoning damage, or 11 (1d10 + 6) bludgeoning damage if used with two\
    \ hands. While Horgar is enlarged, the damage increases to 15 (2d8 + 6) or 17\
    \ (2d10 + 6) bludgeoning damage, respectively."
  "name": "+2 Warhammer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit:\
    \ 5 (1d10) piercing damage."
  "name": "Heavy Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, Horgar can utter a special command or warning whenever a\
    \ nonhostile creature that he can see within 30 feet of Horgar makes an attack\
    \ roll or a saving throw. The creature can add a d4 to its roll provided it can\
    \ hear and understand Horgar. A creature can benefit from only one Leadership\
    \ die at a time. This effect ends if Horgar is [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Leadership (Recharges after a Short or Long Rest)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Horgar adds 2 to its AC against one melee attack that would hit him. To\
    \ do so, Horgar must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "OotA"
"image": "[[Deepking Horgar Steelshadow V.png]]"
```
^statblock

*Source: Out of the Abyss p. 82*

## Description

Deepking Horgar V ascended to the throne in 1372 DR. He is a ruthless and canny ruler who engages in secret meetings with all the city's councils and clans to keep their members guessing what he's up to, hands out favors out of the blue, and lets it be known that he'll use any trick to maintain his hold on power. This includes hiring assassins through third parties to take care of potential troublemakers. This strategy keeps all the city's factions at each other's throats and out of Horgar's way.

Like many other duergar in the city, Horgar Steelshadow V has been touched by the demon lords' madness. Roll on the Indefinite Madness table in "chapter 8" of the _Dungeon Master's Guide_ to determine Horgar's flaw.