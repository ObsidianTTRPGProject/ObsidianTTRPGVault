---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/undead
- monster/environment/underdark
aliases: ["Wraith"]
statblock: true
"name": "Wraith"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "6"
- !!int "16"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "15"
"speed": "walk 0 ft., fly 60 ft. (hover)"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks that aren't silvered"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned,\
  \ prone, restrained"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wraith can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the wraith has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8\
    \ + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wraith targets a humanoid within 10 feet of it that has been dead for\
    \ no longer than 1 minute and died violently. The target's spirit rises as a [specter](/compendium/bestiary/undead/specter.md)\
    \ in the space of its corpse or in the nearest unoccupied space. The [specter](/compendium/bestiary/undead/specter.md)\
    \ is under the wraith's control. The wraith can have no more than seven specters\
    \ under its control at one time."
  "name": "Create Specter"
"source":
- "MM"
- "CoS"
- "RoT"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "DC"
- "DIP"
- "SLW"
- "SDW"
- "BGDIA"
- "EGW"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "JttRC"
name: Wraith
image: "[[Wraith.png]]"
---

# Wraith

```statblock
"name": "Wraith"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "6"
- !!int "16"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "15"
"speed": "walk 0 ft., fly 60 ft. (hover)"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks that aren't silvered"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned,\
  \ prone, restrained"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wraith can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the wraith has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8\
    \ + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wraith targets a humanoid within 10 feet of it that has been dead for\
    \ no longer than 1 minute and died violently. The target's spirit rises as a [specter](/compendium/bestiary/undead/specter.md)\
    \ in the space of its corpse or in the nearest unoccupied space. The [specter](/compendium/bestiary/undead/specter.md)\
    \ is under the wraith's control. The wraith can have no more than seven specters\
    \ under its control at one time."
  "name": "Create Specter"
"source":
- "MM"
- "CoS"
- "RoT"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "DC"
- "DIP"
- "SLW"
- "SDW"
- "BGDIA"
- "EGW"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "JttRC"
"image": "[[Wraith.png]]"
```
^statblock

*Source: Monster Manual p. 302, Curse of Strahd, The Rise of Tiamat, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Storm Lord's Wrath, Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, Journeys through the Radiant Citadel*

## Description

A wraith is malice incarnate, concentrated into an incorporeal form that seeks to quench all life. The creature is suffused with negative energy, and its mere passage through the world leaves nearby plants blackened and withered. Animals flee from its presence. Even small fires can be extinguished by the sucking oblivion of the wraith's horrifying existence.

**Vile Oblivion.** When a mortal humanoid lives a debased life or enters into a fiendish pact, it consigns its soul to eternal damnation in the Lower Planes. However, sometimes the soul becomes so suffused with negative energy that it collapses in on itself and ceases to exist the instant before it can shuffle off to some horrible afterlife. When this occurs, the spirit becomes a soulless wraith-a malevolent void trapped on the plane where it died. Almost nothing of the wraith's former existence is preserved; in this new form, it exists only to annihilate other life.

**Bereft of Body.** A wraith can move through solid creatures and objects as easily as a mortal creature moves through fog.

A wraith might retain a few memories of its mortal life as shadowy echoes. However, even the strongest events and emotions become little more than faint impressions, fleeting as half-remembered dreams. A wraith might pause to stare at something that fascinated it in life, or it might curb its wrath in acknowledgment of a past friendship. Such moments come rarely, however, because most wraiths despise what they were as a reminder of what they have become.

**Undead Commanders.** A wraith can make an undead servant from the spirit of a humanoid creature that has recently suffered a violent death. Such a fragment of woe becomes a specter, spiteful of all that lives.

Wraiths sometimes rule the legions of the dead, plotting the doom of living creatures. When they emerge from their tombs to do battle, life and hope shrivel before them. Even if a wraith's armies are forced to retreat, the lands its forces occupied are so blasted and withered that those who live there often starve and die.

**Undead Nature.** A wraith doesn't require air, food, drink, or sleep.

## Environment

underdark