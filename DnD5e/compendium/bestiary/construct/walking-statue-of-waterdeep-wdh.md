---
cssclass: json5e-monster
tags:
- compendium/src/wdh
- monster/size/gargantuan
- monster/type/construct
aliases: ["Walking Statue of Waterdeep"]
statblock: true
"name": "Walking Statue of Waterdeep"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "314"
"hit_dice": "17d20 + 136"
"stats":
- !!int "30"
- !!int "8"
- !!int "27"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 60 ft."
"saves":
  "Constitution": !!int "14"
"damage_immunities": "cold; fire; poison; psychic; bludgeoning, piercing, slashing\
  \ from nonmagical attacks not made with adamantine weapons"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned,\
  \ stunned"
"senses": "truesight 120 ft., passive Perception 10"
"languages": ""
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the statue drops to 0 hit points, it crumbles and is destroyed. Any\
    \ creature on the ground within 30 feet of the crumbling statue must make a DC\
    \ 22 Dexterity saving throw, taking 22 (4d10) bludgeoning damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Crumbling Colossus"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 5 ft., one target. Hit: 29 (3d12\
    \ + 10) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +16 to hit, range 200/800 ft., one target. Hit:\
    \ 43 (6d10 + 10) bludgeoning damage."
  "name": "Hurled Stone"
"source":
- "WDH"
name: Walking Statue of Waterdeep
image: "[[Walking Statue of Waterdeep.png]]"
---

# Walking Statue of Waterdeep

```statblock
"name": "Walking Statue of Waterdeep"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "314"
"hit_dice": "17d20 + 136"
"stats":
- !!int "30"
- !!int "8"
- !!int "27"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 60 ft."
"saves":
  "Constitution": !!int "14"
"damage_immunities": "cold; fire; poison; psychic; bludgeoning, piercing, slashing\
  \ from nonmagical attacks not made with adamantine weapons"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned,\
  \ stunned"
"senses": "truesight 120 ft., passive Perception 10"
"languages": ""
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the statue drops to 0 hit points, it crumbles and is destroyed. Any\
    \ creature on the ground within 30 feet of the crumbling statue must make a DC\
    \ 22 Dexterity saving throw, taking 22 (4d10) bludgeoning damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Crumbling Colossus"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 5 ft., one target. Hit: 29 (3d12\
    \ + 10) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +16 to hit, range 200/800 ft., one target. Hit:\
    \ 43 (6d10 + 10) bludgeoning damage."
  "name": "Hurled Stone"
"source":
- "WDH"
"image": "[[Walking Statue of Waterdeep.png]]"
```
^statblock

*Source: Waterdeep: Dragon Heist p. 219*

## Description

Scattered throughout Waterdeep are eight enormous statues that can defend the city in times of great peril. Because they are so destructive, the walking statues are used only to fend off armies and seemingly insurmountable foes.

Each statue has a name and a unique appearance (see "The Walking Statues"), but in terms of statistics they are similar. The statue known as the Swordmaiden is too broken to be animated, and only the wielder of the Blackstaff (see appendix A) can animate the other seven.

**Landmarks.** Over the years, Waterdavians have built structures around and on top of several of the statues, believing them to be little more than landmarks at this point. In their inanimate state, the statues pose little danger-but any structures attached to a walking statue are destroyed the first time it animates.

**Constructed Nature.** A walking statue doesn't require air, food, drink, or sleep.