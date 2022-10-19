---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/elemental
aliases: ["Murder Comet"]
statblock: true
"name": "Murder Comet"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "66"
"hit_dice": "7d8 + 35"
"stats":
- !!int "15"
- !!int "15"
- !!int "20"
- !!int "6"
- !!int "10"
- !!int "6"
"speed": "walk 0 ft., fly 120 ft."
"damage_immunities": "fire, poison"
"condition_immunities": "exhaustion, paralyzed, petrified, poisoned, prone, unconscious"
"senses": "darkvision 240 ft., passive Perception 10"
"languages": "Ignan, Terran"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the comet drops to 0 hit points, it explodes in a 20-foot-radius sphere\
    \ centered on itself. Each creature in the sphere must make a DC 16 Dexterity\
    \ saving throw, taking 28 (8d6) fire damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Explode"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The comet doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The comet sheds bright light in a 30-foot radius and dim light for an additional\
    \ 30 feet."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The comet deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The comet doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The comet makes one Slam attack and one Spit Fire attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) bludgeoning damage plus 7 (2d6) fire damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 60 ft., one target. Hit: 13 (2d10\
    \ + 2) fire damage."
  "name": "Spit Fire"
"source":
- "BAM"
name: Murder Comet
image: "[[Murder Comet.png]]"
---

# Murder Comet

```statblock
"name": "Murder Comet"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "66"
"hit_dice": "7d8 + 35"
"stats":
- !!int "15"
- !!int "15"
- !!int "20"
- !!int "6"
- !!int "10"
- !!int "6"
"speed": "walk 0 ft., fly 120 ft."
"damage_immunities": "fire, poison"
"condition_immunities": "exhaustion, paralyzed, petrified, poisoned, prone, unconscious"
"senses": "darkvision 240 ft., passive Perception 10"
"languages": "Ignan, Terran"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the comet drops to 0 hit points, it explodes in a 20-foot-radius sphere\
    \ centered on itself. Each creature in the sphere must make a DC 16 Dexterity\
    \ saving throw, taking 28 (8d6) fire damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Explode"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The comet doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The comet sheds bright light in a 30-foot radius and dim light for an additional\
    \ 30 feet."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The comet deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The comet doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The comet makes one Slam attack and one Spit Fire attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) bludgeoning damage plus 7 (2d6) fire damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 60 ft., one target. Hit: 13 (2d10\
    \ + 2) fire damage."
  "name": "Spit Fire"
"source":
- "BAM"
"image": "[[Murder Comet.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 38*

## Description

Evil spellcasters create murder comets by combining the essence of earth elementals with that of fire elementals. A murder comet looks like a screaming stone head wreathed in flame. It trails fire behind it as it flies through Wildspace, either singly or in a posse with other murder comets, looking for ships, crews, and other unsuspecting targets to destroy.

A murder comet's creator can bind their spirit to the comet. In this form, the comet's creator becomes ageless and immortal, free to race across Wildspace without need for air, sleep, or sustenance. The murder comet's face takes on the appearance of its creator's, and its statistics change as follows:

- Replace the comet's Intelligence, Wisdom, and Charisma scores with those of its creator.
- Replace the comet's alignment and languages with those of its creator.