---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/humanoid/sahuagin
- monster/environment/underwater
- monster/environment/coastal
aliases: ["Sahuagin"]
statblock: true
"name": "Sahuagin"
"size": "Medium"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "12"
- !!int "13"
- !!int "9"
"speed": "walk 30 ft., swim 40 ft."
"skillsaves":
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Sahuagin"
"cr": "1/2"
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
  "desc": "The sahuagin makes two melee attacks: one with its bite and one with its\
    \ claws or spear."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "MM"
- "TftYP"
- "GoS"
- "DIP"
- "SDW"
- "BGDIA"
- "EGW"
name: Sahuagin
image: "[[Sahuagin.png]]"
---

# Sahuagin

```statblock
"name": "Sahuagin"
"size": "Medium"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "12"
- !!int "13"
- !!int "9"
"speed": "walk 30 ft., swim 40 ft."
"skillsaves":
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Sahuagin"
"cr": "1/2"
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
  "desc": "The sahuagin makes two melee attacks: one with its bite and one with its\
    \ claws or spear."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "MM"
- "TftYP"
- "GoS"
- "DIP"
- "SDW"
- "BGDIA"
- "EGW"
"image": "[[Sahuagin.png]]"
```
^statblock

*Source: Monster Manual p. 263, Tales from the Yawning Portal, Ghosts of Saltmarsh, Dragon of Icespire Peak, Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount*

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