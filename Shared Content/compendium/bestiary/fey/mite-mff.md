---
cssclass: json5e-monster
tags:
- compendium/src/mff
- monster/size/small
- monster/type/fey
aliases: ["Mite"]
statblock: true
"name": "Mite"
"size": "Small"
"type": "fey"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "7"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "8"
- !!int "13"
"speed": "walk 30 ft., burrow 10 ft., climb 30 ft."
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "6"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Sylvan, Undercommon"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While within 30 feet of a mite that can see it, a non-fey creature has\
    \ disadvantage on Dexterity checks and Dexterity saving throws."
  "name": "Vexing Presence"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mite places a hex on a creature it can see within 60 feet of it for\
    \ 1 minute. If the mite is hidden, using this ability does not reveal its location.\
    \ While the creature is affected by this hex, whenever it makes an attack roll,\
    \ an ability check, or a saving throw, it must roll a d6 and subtract the number\
    \ rolled from the d20 roll. On any turn in which it suffers the effect of the\
    \ hex, the target can attack an ally as a reaction, ignoring the effect of the\
    \ hex when it does so. It can then ignore the effect of the hex until the end\
    \ of its turn."
  "name": "Blood Boiling Hex (Recharge 6)"
"source":
- "MFF"
name: Mite
image: "[[Mite.png]]"
---

# Mite

```statblock
"name": "Mite"
"size": "Small"
"type": "fey"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "7"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "8"
- !!int "13"
"speed": "walk 30 ft., burrow 10 ft., climb 30 ft."
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "6"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Sylvan, Undercommon"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While within 30 feet of a mite that can see it, a non-fey creature has\
    \ disadvantage on Dexterity checks and Dexterity saving throws."
  "name": "Vexing Presence"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mite places a hex on a creature it can see within 60 feet of it for\
    \ 1 minute. If the mite is hidden, using this ability does not reveal its location.\
    \ While the creature is affected by this hex, whenever it makes an attack roll,\
    \ an ability check, or a saving throw, it must roll a d6 and subtract the number\
    \ rolled from the d20 roll. On any turn in which it suffers the effect of the\
    \ hex, the target can attack an ally as a reaction, ignoring the effect of the\
    \ hex when it does so. It can then ignore the effect of the hex until the end\
    \ of its turn."
  "name": "Blood Boiling Hex (Recharge 6)"
"source":
- "MFF"
"image": "[[Mite.png]]"
```
^statblock

*Source: Mordenkainen's Fiendish Folio p. 14*

## Description

Mites are vexing fey creatures that delight in causing minor havoc and playing irritating pranks, making even the coolest, most experienced adventurers prone to outbursts of destructive frustration. When mites are about, even the simplest task can turn into a disaster, and a mild disagreement can quickly become a brawl.

**Heralds of Frustration.** Mites are natives of the Feywild that arise when a creature becomes so irritated with a situation or event that it lashes out in violence. That creature experiences strange dreams the next time it sleeps, then sleepwalks to the nearest tree or other large plant, digs a small hole, screams into the depression, and refills the hole. When it awakes the next morning, the creature feels strangely refreshed. Then on the night of the next new moon, the dug-up earth stirs and a pack of mites emerges. Born of frustration and anger, these creatures exist only to replicate in others the emotions that created them.

**Nettlesome Pranksters.** Mites prefer to live underground, seeking out dungeons and cave warrens where they dig a network of hidden burrows that wrap around existing passages and chambers. They use these hiding spots to watch the comings and goings of monsters and adventurers, setting traps to vex and annoy whenever possible. A trip wire might be set at the top of a flight of stairs to send creatures crashing down. Locks might be jammed with debris, gems replaced with fakes, and prized treasures stolen away. Mites aim to kill only if threatened with direct violence, content to otherwise take joy in watching mundane or simple tasks become frustrating, painful experiences.

**Fey Influence.** When mites are about, creatures become irritable and easily frustrated to the point of violence. For such creatures, every minor failure feels like gross incompetence. Simple tasks become increasingly difficult. Those who undertake those tasks become overwhelmed with a sense of unresolved anger and frustration that demands an outlet—usually violence and destruction. The mites' influence can thus turn even the most orderly group into a mob of surly brawlers. Within even the most tight-knit adventuring party, morale plummets, arguments boil over into fights, and discipline becomes spotty at best.

**Chaotic Battlegrounds.** Dungeons infested with mites for a long period of time devolve into chaotic battlegrounds. Even under the control of a strong leader, any faction in such a dungeon can see its members turn against each other as their frustration and antipathy build. When adventurers enter the dungeon, the mites go to work to exploit the added chaos. They use their magic to drag visitors into their web of anger and frustration, luring explorers deeper into the site and into situations and locations that promise to yield up the most havoc.