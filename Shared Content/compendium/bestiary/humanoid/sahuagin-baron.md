---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/humanoid/sahuagin
- monster/environment/underwater
- monster/environment/coastal
aliases: ["Sahuagin Baron"]
statblock: true
"name": "Sahuagin Baron"
"size": "Large"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
"stats":
- !!int "19"
- !!int "15"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "walk 30 ft., swim 50 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
  "Constitution": !!int "6"
"skillsaves":
  "Perception": !!int "7"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Sahuagin"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sahuagin has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sahuagin can breathe air and water, but it needs to be submerged at\
    \ least once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sahuagin can magically command any shark within 120 feet of it, using\
    \ a limited telepathy."
  "name": "Shark Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sahuagin makes three attacks: one with his bite and two with his claws\
    \ or trident."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Trident"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "JttRC"
name: Sahuagin Baron
image: "[[Sahuagin Baron.png]]"
---

# Sahuagin Baron

```statblock
"name": "Sahuagin Baron"
"size": "Large"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
"stats":
- !!int "19"
- !!int "15"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "walk 30 ft., swim 50 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
  "Constitution": !!int "6"
"skillsaves":
  "Perception": !!int "7"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Sahuagin"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sahuagin has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sahuagin can breathe air and water, but it needs to be submerged at\
    \ least once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sahuagin can magically command any shark within 120 feet of it, using\
    \ a limited telepathy."
  "name": "Shark Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sahuagin makes three attacks: one with his bite and two with his claws\
    \ or trident."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Trident"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "JttRC"
"image": "[[Sahuagin Baron.png]]"
```
^statblock

*Source: Monster Manual p. 264, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Journeys through the Radiant Citadel*

## Description

Across fog-shrouded coasts or endless ocean swells, an ominous drone sounded on a conch shell chills the blood of all who hear it. This is the sound of the sahuagin hunting horn-a call to raid and battle. Coastal settlers refer to sahuagin as "sea devils," for sahuagin have no compassion in them, slaughtering the crews of ships and decimating coastal villages.

**Devils of the Deep.** Sahuagin are a predatory, piscine race that ventures from the ocean's black depths to hunt the creatures of the shallows and shore. Though they dwell in the deepest trenches of the ocean, sahuagin view the entire aquatic realm as their kingdom and the creatures in it as blood sport for their hunting parties.

The self-styled rulers of sahuagin ocean domains are massive mutant males that grow second sets of arms. They are terrible foes in battle, and all sahuagin bow down before these powerful barons.

**Way of the Shark.** Sahuagin worship the shark god Sekolah. Only female sahuagin are deemed worthy of channeling the god's power, and priestesses hold tremendous sway in sahuagin communities.

Sahuagin are driven into a frenzy by the smell of fresh blood. As worshipers of Sekolah, they also have a special kinship with sharks, which they train as attack animals. Even untrained sharks recognize sahuagin as allies and don't prey on them.

**Elven Enmity.** The sahuagin might control the oceans if not for the presence of their mortal enemies, the aquatic elves. Wars between the two races have raged for centuries across the coasts and seas of the world, disrupting maritime trade and drawing other races into the bloody conflict.

So intense is sahuagin hatred for the aquatic elves that the sea devils have adapted to combat their ancient foes. A sahuagin born near enough to an aquatic elf community can enter the world as a malenti-a sahuagin that physically resembles an aquatic elf in every way. Sahuagin are prone to mutation, but whether this rare phenomenon is a result of the wars between the sahuagin and the aquatic elves-or whether it preceded or even began the conflict-none can say.

The sahuagin put the malenti to good use as spies and assassins in aquatic elf cities and the societies of other creatures that pose a threat to sahuagin. The mere shadow of the malenti threat incites paranoia and suspicion among aquatic elves, whose resilience is weakened as the prelude to an actual sahuagin invasion.

## Environment

underwater, coastal