---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/medium
- monster/type/plant
aliases: ["Swarm of Campestris"]
statblock: true
"name": "Swarm of Campestris"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "3"
- !!int "7"
- !!int "10"
- !!int "4"
- !!int "10"
- !!int "8"
"speed": "walk 5 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "charmed, grappled, paralyzed, petrified, prone, restrained,\
  \ stunned"
"senses": "tremorsense 30 ft., passive Perception 14"
"languages": "understands Common but speaks only through the use of its Mimicry trait"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each campestri in the swarm can mimic any voice or song it has heard, albeit\
    \ in a nasal falsetto."
  "name": "Mimicry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough to accommodate an individual campestri.\
    \ The swarm can't regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 10 (4d4)\
    \ bludgeoning damage, or 5 (2d4) bludgeoning damage if the swarm has half its\
    \ hit points or fewer."
  "name": "Head Butts"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 20-foot radius of spores extends from the swarm. These spores can go\
    \ around corners, and they have no effect on Constructs, Elementals, Plants, or\
    \ Undead. Each other creature in the area must make a DC 10 Wisdom saving throw.\
    \ On a failed save, the creature is [incapacitated](/rules/conditions.md#incapacitated)\
    \ and its speed is halved, both for 1 minute. A creature can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Spores (1/Day)"
"source":
- "WBtW"
name: Swarm of Campestris
image: "[[Swarm of Campestris.png]]"
---

# Swarm of Campestris

```statblock
"name": "Swarm of Campestris"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "3"
- !!int "7"
- !!int "10"
- !!int "4"
- !!int "10"
- !!int "8"
"speed": "walk 5 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "charmed, grappled, paralyzed, petrified, prone, restrained,\
  \ stunned"
"senses": "tremorsense 30 ft., passive Perception 14"
"languages": "understands Common but speaks only through the use of its Mimicry trait"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each campestri in the swarm can mimic any voice or song it has heard, albeit\
    \ in a nasal falsetto."
  "name": "Mimicry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough to accommodate an individual campestri.\
    \ The swarm can't regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 10 (4d4)\
    \ bludgeoning damage, or 5 (2d4) bludgeoning damage if the swarm has half its\
    \ hit points or fewer."
  "name": "Head Butts"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 20-foot radius of spores extends from the swarm. These spores can go\
    \ around corners, and they have no effect on Constructs, Elementals, Plants, or\
    \ Undead. Each other creature in the area must make a DC 10 Wisdom saving throw.\
    \ On a failed save, the creature is [incapacitated](/rules/conditions.md#incapacitated)\
    \ and its speed is halved, both for 1 minute. A creature can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Spores (1/Day)"
"source":
- "WBtW"
"image": "[[Swarm of Campestris.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 232*

## Description

Campestris are happy-go-lucky mushroom-like creatures with few cares or worries. They are captivated by music, though they can't distinguish a well-played performance from a bad one. If anyone plays an instrument or sings in the campestris' vicinity, the little creatures will happily sing along, each in an obnoxiously nasal falsetto, as they dance and caper around whoever is making the music.

Campestris can easily imitate lyrics and music. After a campestri has practiced a song or a piece of music three or four times, the creature remembers it forever.

Campestris vary widely in color, from white to tan to dark brown, but they always have red or purple caps and speckles. A campestri moves by manipulating the mycelium that grows out of the base of its stem and supports it. The mushroom creatures eat salty soil, filter out the salt, and excrete a slippery paste of purified soil (stripped of things nourishing to fungi, of course). Eating salt is also a defense mechanism, because it makes the campestris taste salty and thus unpleasant to most creatures, though bullywugs consider them a delicacy.