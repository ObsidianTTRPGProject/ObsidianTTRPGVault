---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/tiny
- monster/type/fey
aliases: ["Valenar Hawk"]
statblock: true
"name": "Valenar Hawk"
"size": "Tiny"
"type": "fey"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "10"
"hit_dice": "4d4"
"stats":
- !!int "8"
- !!int "18"
- !!int "10"
- !!int "9"
- !!int "16"
- !!int "11"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": "understands Common, Elvish, and Sylvan but can't speak"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hawk can magically bond with one creature it can see, immediately after\
    \ spending at least 1 hour observing that creature while within 30 feet of it.\
    \ The bond lasts until the hawk bonds with a different creature or until the bonded\
    \ creature dies. While bonded, the hawk and the bonded creature can communicate\
    \ telepathically with each other at a distance of up to 100 feet."
  "name": "Bonding"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
  "name": "Keen Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d4\
    \ + 4) slashing damage."
  "name": "Talons"
"source":
- "ERLW"
name: Valenar Hawk
image: "[[Valenar Hawk.png]]"
---

# Valenar Hawk

```statblock
"name": "Valenar Hawk"
"size": "Tiny"
"type": "fey"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "10"
"hit_dice": "4d4"
"stats":
- !!int "8"
- !!int "18"
- !!int "10"
- !!int "9"
- !!int "16"
- !!int "11"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": "understands Common, Elvish, and Sylvan but can't speak"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hawk can magically bond with one creature it can see, immediately after\
    \ spending at least 1 hour observing that creature while within 30 feet of it.\
    \ The bond lasts until the hawk bonds with a different creature or until the bonded\
    \ creature dies. While bonded, the hawk and the bonded creature can communicate\
    \ telepathically with each other at a distance of up to 100 feet."
  "name": "Bonding"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
  "name": "Keen Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d4\
    \ + 4) slashing damage."
  "name": "Talons"
"source":
- "ERLW"
"image": "[[Valenar Hawk.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 312*

## Description

The elves of Valenar say that when their ancestors fought the giants of Xen'drik, elf druids took the forms of animals on the battlefield. The cruel and mighty Emperor Cul'sir of the giants laid a curse upon the druids and trapped them in the forms of animals. Just as the ancestors of the Valenar guide their warriors in battle, the spirits of these druids can awaken power in an animal to create a companion worthy of a champion.

Valenar animals are awakened to advanced intelligence and power by the touch of an ancestral spirit. Traditionally, Valenar animals choose Valenar elves as companions, reflecting a bond between the ancestors of elf and animal. To be chosen by a Valenar animal is a great honor, and any such elf is treated with respect and reverence. Still, on the rare occasions when a Valenar animal chooses an adventurer of a different ancestry as a companion, it is universally accepted.

The Valenar animals presented here—hawk, hound, and steed—are but examples, for the ancestral spirits can take on many animal forms.

**Variant Ancestral Traits.** Each Valenar animal can be customized with an ancestral gift, a supernatural trait granted by its ancestral spirit. Choose a trait or roll on the Ancestral Traits table for each Valenar animal.

**Ancestral Traits**

| dice: d8 | Trait |
|----------|-------|
| 1 | Bestow Luck (1/Day). As a bonus action, the animal chooses one creature it can see within 30 feet of it. The next ability check, attack roll, or saving throw the target makes in the next hour has advantage. |
| 2 | Burst of Speed (Recharge 6). The animal can take the Dash action as a bonus action. |
| 3 | Camouflage. The animal has advantage on Dexterity ([Stealth](/rules/skills.md#Stealth)) checks it makes while outdoors. |
| 4 | Lie Detector. The animal knows when a creature within 15 feet of it tells a lie. |
| 5 | Fey Ancestry. The animal has advantage on saving throws against being [charmed](/rules/conditions.md#charmed) or [frightened](/rules/conditions.md#frightened), and magic can't put it to sleep. |
| 6 | Fey Step (1/Day). The animal, along with anything it is wearing or carrying, teleports up to 30 feet to an unoccupied space it can see. |
| 7 | Quickness (Recharge 6). The animal can take the Dodge action as a bonus action. |
| 8 | Shrouded Step. The animal can't be tracked except by magical means, and it leaves behind no tracks or other traces of its passage. |
^ancestral-traits