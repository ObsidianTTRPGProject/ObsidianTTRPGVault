---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/huge
- monster/type/construct
aliases: ["Tomb Tapper"]
statblock: true
"name": "Tomb Tapper"
"size": "Huge"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "207"
"hit_dice": "18d12 + 90"
"stats":
- !!int "22"
- !!int "10"
- !!int "21"
- !!int "14"
- !!int "14"
- !!int "11"
"speed": "walk 30 ft., burrow 10 ft."
"skillsaves":
  "Perception": !!int "6"
"damage_resistances": "lightning"
"damage_immunities": "cold, fire"
"condition_immunities": "charmed, frightened"
"senses": "blindsight 240 ft. (blind beyond this radius), passive Perception 16"
"languages": "understands Common and Undercommon but doesn't speak, telepathy 60 ft."
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A tomb tapper reduced to 0 hit points turns into a lifeless stone statue.\
    \ Anything it's wearing or carrying is not transformed."
  "name": "Petrified Death"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb tapper senses magic within 30 feet of it and can use an action\
    \ to pinpoint the location of any creature, object, or area in that range that\
    \ bears magic. This sense penetrates barriers but is blocked by a thin sheet of\
    \ lead."
  "name": "Sense Magic"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb tapper can burrow through solid rock at half its burrowing speed\
    \ and leaves a 10-foot-wide, 20-foot-tall tunnel in its wake."
  "name": "Tunneler"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb tapper doesn't require air or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb tapper makes two melee attacks with its sledgehammer or with its\
    \ claws. If it hits the same creature with both claws, it can pull that creature\
    \ within 5 feet of its mouth and make a bite attack against it."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 22 (3d10\
    \ + 6) slashing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 16 (3d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +10 to hit, reach 15 ft. or range 30/120\
    \ ft., one target. Hit: 27 (6d6 + 6) bludgeoning or force damage (tomb tapper's\
    \ choice). If thrown, the hammer returns to the tomb tapper at the end of its\
    \ turn, landing at the tomb tapper's feet if it doesn't have a hand free to catch\
    \ the weapon."
  "name": "Sledgehammer"
"source":
- "IDRotF"
name: Tomb Tapper
image: "[[Tomb Tapper.png]]"
---

# Tomb Tapper

```statblock
"name": "Tomb Tapper"
"size": "Huge"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "207"
"hit_dice": "18d12 + 90"
"stats":
- !!int "22"
- !!int "10"
- !!int "21"
- !!int "14"
- !!int "14"
- !!int "11"
"speed": "walk 30 ft., burrow 10 ft."
"skillsaves":
  "Perception": !!int "6"
"damage_resistances": "lightning"
"damage_immunities": "cold, fire"
"condition_immunities": "charmed, frightened"
"senses": "blindsight 240 ft. (blind beyond this radius), passive Perception 16"
"languages": "understands Common and Undercommon but doesn't speak, telepathy 60 ft."
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A tomb tapper reduced to 0 hit points turns into a lifeless stone statue.\
    \ Anything it's wearing or carrying is not transformed."
  "name": "Petrified Death"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb tapper senses magic within 30 feet of it and can use an action\
    \ to pinpoint the location of any creature, object, or area in that range that\
    \ bears magic. This sense penetrates barriers but is blocked by a thin sheet of\
    \ lead."
  "name": "Sense Magic"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb tapper can burrow through solid rock at half its burrowing speed\
    \ and leaves a 10-foot-wide, 20-foot-tall tunnel in its wake."
  "name": "Tunneler"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb tapper doesn't require air or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tomb tapper makes two melee attacks with its sledgehammer or with its\
    \ claws. If it hits the same creature with both claws, it can pull that creature\
    \ within 5 feet of its mouth and make a bite attack against it."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 22 (3d10\
    \ + 6) slashing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 16 (3d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +10 to hit, reach 15 ft. or range 30/120\
    \ ft., one target. Hit: 27 (6d6 + 6) bludgeoning or force damage (tomb tapper's\
    \ choice). If thrown, the hammer returns to the tomb tapper at the end of its\
    \ turn, landing at the tomb tapper's feet if it doesn't have a hand free to catch\
    \ the weapon."
  "name": "Sledgehammer"
"source":
- "IDRotF"
"image": "[[Tomb Tapper.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 310*

## Description

The Netherese arcanists who created these creatures called them "thaluud," which means "faceless." Wrought from the fusion of magic and elemental earth, each of these sexless, hairless warriors stands 15 to 21 feet tall and possesses a lust for magic, an inherited memory (composed of recollections from the souls sacrificed in their creation), and an insane hatred for nonhuman spellcasting creatures. Tomb tappers can dig through earth and rock with their claws or use their metal sledgehammers to shatter rock when needed. They absorb water through their skin and crush rock with their jaws to extract mineral sustenance. They can also digest iron from blood and marrow, if mineral-rich rock is unavailable.

The Netherese sent the thaluud into the Underdark to exterminate their enemies, most notably the magic-devouring, funnel-shaped creatures known as phaerimm. Other creatures targeted by the thaluud include mind flayers, derro, drow, and duergar. Tomb tappers communicate with one another by means of a humming sound created by skin vibrations.

**Seekers of Magic.** Tomb tappers received their colloquial name from their habit of burrowing into the depths to plunder tombs, temples, and caves in search of magic items, which they bear off. They usually try to seize magic from beings that they encounter.

Magic is sacred to tomb tappers. They don't use any magic items they acquire, instead choosing to protect and venerate such items. Tappers spend their long lives in the search for the source of all magic, which they believe to be hidden deep in the Underdark. They are in awe of earth elementals, believing that they come directly from this source, and are reluctant to attack them.