---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/aberration
- monster/environment/coastal
- monster/environment/mountain
- monster/environment/underdark
aliases: ["Balhannoth"]
statblock: true
"name": "Balhannoth"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "17"
- !!int "8"
- !!int "18"
- !!int "6"
- !!int "15"
- !!int "8"
"speed": "walk 25 ft., climb 25 ft."
"saves":
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "6"
"condition_immunities": "blinded"
"senses": "blindsight 500 ft. (blind beyond this radius), passive Perception 16"
"languages": "understands Deep Speech, telepathy 1 mile"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the balhannoth fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The balhannoth makes one Bite attack and two Tentacle attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 19 (3d10\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15) and is moved up to 5 feet toward the balhannoth. Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained), and the balhannoth\
    \ can't use this tentacle against other targets. The balhannoth has four tentacles."
  "name": "Tentacle"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The balhannoth makes one Bite attack against one creature it has [grappled](/rules/conditions.md#grappled)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The balhannoth teleports, along with any equipment it is wearing or carrying\
    \ and any creatures it has [grappled](/rules/conditions.md#grappled), up to 60\
    \ feet to an unoccupied space it can see."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The balhannoth magically becomes [invisible](/rules/conditions.md#invisible)\
    \ for up to 10 minutes or until immediately after it makes an attack roll."
  "name": "Vanish"
"source":
- "MPMM"
- "MTF"
name: Balhannoth
image: "[[Balhannoth.png]]"
---

# Balhannoth

```statblock
"name": "Balhannoth"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "17"
- !!int "8"
- !!int "18"
- !!int "6"
- !!int "15"
- !!int "8"
"speed": "walk 25 ft., climb 25 ft."
"saves":
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "6"
"condition_immunities": "blinded"
"senses": "blindsight 500 ft. (blind beyond this radius), passive Perception 16"
"languages": "understands Deep Speech, telepathy 1 mile"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the balhannoth fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The balhannoth makes one Bite attack and two Tentacle attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 19 (3d10\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15) and is moved up to 5 feet toward the balhannoth. Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained), and the balhannoth\
    \ can't use this tentacle against other targets. The balhannoth has four tentacles."
  "name": "Tentacle"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The balhannoth makes one Bite attack against one creature it has [grappled](/rules/conditions.md#grappled)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The balhannoth teleports, along with any equipment it is wearing or carrying\
    \ and any creatures it has [grappled](/rules/conditions.md#grappled), up to 60\
    \ feet to an unoccupied space it can see."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The balhannoth magically becomes [invisible](/rules/conditions.md#invisible)\
    \ for up to 10 minutes or until immediately after it makes an attack roll."
  "name": "Vanish"
"source":
- "MPMM"
- "MTF"
"image": "[[Balhannoth.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 55, Mordenkainen's Tome of Foes p. 119*

## Description

Native to the Shadowfell, the vicious, predatory balhannoth alters reality in its lair to make the place appear inviting to travelers. A limited form of telepathy enables a balhannoth to identify images of places where its prey expects their needs and desires to be met, such as an inn or a temple offering healing. It then warps reality around itself, hiding itself and remaking its environment to resemble such a place. The imitation is imperfect, but it's good enough to fool greedy or desperate creatures. Once its prey enters the trap, it snatches the targets and teleports away to feed on their fear and despair.

Dungeon builders and Underdark tyrants sometimes venture into the Shadowfell to capture balhannoths for use as guardians.

**A Balhannoth's Lair.** In the Shadowfell, balhannoths make their lairs near places inhabited by creatures they hunt. They typically haunt well-traveled roads and paths, snatching people who come along. A balhannoth used as a guardian in the Underdark might lair in caves near Underdark passages and guard the ways in and out of its keepers' enclave.

## Environment

coastal, mountain, underdark