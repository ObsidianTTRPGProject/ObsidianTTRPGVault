---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/small
- monster/type/elemental
- monster/environment/swamp
aliases: ["Mud Mephit"]
statblock: true
"name": "Mud Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"stats":
- !!int "8"
- !!int "12"
- !!int "12"
- !!int "9"
- !!int "11"
- !!int "7"
"speed": "walk 20 ft., fly 20 ft., swim 20 ft."
"skillsaves":
  "Stealth": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan, Terran"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mephit dies, it explodes in a burst of sticky mud. Each Medium\
    \ or smaller creature within 5 feet of it must succeed on a DC 11 Dexterity saving\
    \ throw or be [restrained](/rules/conditions.md#restrained) until the end of the\
    \ creature's next turn."
  "name": "Death Burst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the mephit remains motionless, it is indistinguishable from an ordinary\
    \ mound of mud."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Fists"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mephit belches viscid mud onto one creature within 5 feet of it. If\
    \ the target is Medium or smaller, it must succeed on a DC 11 Dexterity saving\
    \ throw or be [restrained](/rules/conditions.md#restrained) for 1 minute. A creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Mud Breath (Recharge 6)"
"source":
- "MM"
- "PotA"
- "ToA"
- "WDMM"
- "GoS"
- "WBtW"
- "JttRC"
name: Mud Mephit
image: "[[Mud Mephit.png]]"
---

# Mud Mephit

```statblock
"name": "Mud Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"stats":
- !!int "8"
- !!int "12"
- !!int "12"
- !!int "9"
- !!int "11"
- !!int "7"
"speed": "walk 20 ft., fly 20 ft., swim 20 ft."
"skillsaves":
  "Stealth": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan, Terran"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mephit dies, it explodes in a burst of sticky mud. Each Medium\
    \ or smaller creature within 5 feet of it must succeed on a DC 11 Dexterity saving\
    \ throw or be [restrained](/rules/conditions.md#restrained) until the end of the\
    \ creature's next turn."
  "name": "Death Burst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the mephit remains motionless, it is indistinguishable from an ordinary\
    \ mound of mud."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Fists"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mephit belches viscid mud onto one creature within 5 feet of it. If\
    \ the target is Medium or smaller, it must succeed on a DC 11 Dexterity saving\
    \ throw or be [restrained](/rules/conditions.md#restrained) for 1 minute. A creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Mud Breath (Recharge 6)"
"source":
- "MM"
- "PotA"
- "ToA"
- "WDMM"
- "GoS"
- "WBtW"
- "JttRC"
"image": "[[Mud Mephit.png]]"
```
^statblock

*Source: Monster Manual p. 216, Princes of the Apocalypse, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, The Wild Beyond the Witchlight, Journeys through the Radiant Citadel*

## Description

**Mephits.** Mephits are capricious, imp-like creatures native to the elemental planes. They come in six varieties, each one representing the mixture of two elements.

Ageless tricksters, mephits gather in large numbers on the Elemental Planes and in the Elemental Chaos. They also find their way to the Material Plane, where they prefer to dwell in places where their base elements are abundant. For example, a magma mephit is composed of earth and fire, and it favors volcanic lairs, while an ice mephit, which is composed of air and water, favors frigid locales.

**Elemental Nature.** A mephit doesn't require food, drink, or sleep.

**Mud Mephit.** Mud mephits are slow, unctuous creatures of earth and water. They drone their complaints to all who will listen, and beg incessantly for attention and treasure.

## Environment

swamp