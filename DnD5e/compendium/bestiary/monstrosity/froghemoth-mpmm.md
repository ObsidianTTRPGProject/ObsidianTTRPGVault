---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/huge
- monster/type/monstrosity
- monster/environment/swamp
- monster/environment/underdark
aliases: ["Froghemoth"]
statblock: true
"name": "Froghemoth"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "161"
"hit_dice": "14d12 + 70"
"stats":
- !!int "23"
- !!int "13"
- !!int "20"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "9"
"damage_resistances": "fire, lightning"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": ""
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The froghemoth can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the froghemoth takes lightning damage, it suffers two effects until\
    \ the end of its next turn: its speed is halved, and it has disadvantage on Dexterity\
    \ saving throws."
  "name": "Shock Susceptibility"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The froghemoth makes one Bite attack and two Tentacle attacks, and it can\
    \ use Tongue."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 22 (3d10\
    \ + 6) piercing damage, and the target is swallowed if it is a Medium or smaller\
    \ creature. A swallowed creature is [blinded](/rules/conditions.md#blinded) and\
    \ [restrained](/rules/conditions.md#restrained), has total cover against attacks\
    \ and other effects outside the froghemoth, and takes 10 (3d6) acid damage at\
    \ the start of each of the froghemoth's turns.\n\nThe froghemoth's gullet can\
    \ hold up to two creatures at a time. If the froghemoth takes 20 damage or more\
    \ on a single turn from a creature inside it, the froghemoth must succeed on a\
    \ DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed\
    \ creatures, each of which falls [prone](/rules/conditions.md#prone) in a space\
    \ within 10 feet of the froghemoth. If the froghemoth dies, any swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse using 10 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 20 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16) if it is a Huge or smaller creature. Until the grapple ends,\
    \ the froghemoth can't use this tentacle on another target. The froghemoth has\
    \ four tentacles."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The froghemoth targets one Medium or smaller creature that it can see within\
    \ 20 feet of it. The target must make a DC 18 Strength saving throw. On a failed\
    \ save, the target is pulled into an unoccupied space within 5 feet of the froghemoth."
  "name": "Tongue"
"source":
- "MPMM"
- "VGM"
name: Froghemoth
image: "[[Froghemoth.png]]"
---

# Froghemoth

```statblock
"name": "Froghemoth"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "161"
"hit_dice": "14d12 + 70"
"stats":
- !!int "23"
- !!int "13"
- !!int "20"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "9"
"damage_resistances": "fire, lightning"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": ""
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The froghemoth can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the froghemoth takes lightning damage, it suffers two effects until\
    \ the end of its next turn: its speed is halved, and it has disadvantage on Dexterity\
    \ saving throws."
  "name": "Shock Susceptibility"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The froghemoth makes one Bite attack and two Tentacle attacks, and it can\
    \ use Tongue."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 22 (3d10\
    \ + 6) piercing damage, and the target is swallowed if it is a Medium or smaller\
    \ creature. A swallowed creature is [blinded](/rules/conditions.md#blinded) and\
    \ [restrained](/rules/conditions.md#restrained), has total cover against attacks\
    \ and other effects outside the froghemoth, and takes 10 (3d6) acid damage at\
    \ the start of each of the froghemoth's turns.\n\nThe froghemoth's gullet can\
    \ hold up to two creatures at a time. If the froghemoth takes 20 damage or more\
    \ on a single turn from a creature inside it, the froghemoth must succeed on a\
    \ DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed\
    \ creatures, each of which falls [prone](/rules/conditions.md#prone) in a space\
    \ within 10 feet of the froghemoth. If the froghemoth dies, any swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse using 10 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 20 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16) if it is a Huge or smaller creature. Until the grapple ends,\
    \ the froghemoth can't use this tentacle on another target. The froghemoth has\
    \ four tentacles."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The froghemoth targets one Medium or smaller creature that it can see within\
    \ 20 feet of it. The target must make a DC 18 Strength saving throw. On a failed\
    \ save, the target is pulled into an unoccupied space within 5 feet of the froghemoth."
  "name": "Tongue"
"source":
- "MPMM"
- "VGM"
"image": "[[Froghemoth.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 130, Volo's Guide to Monsters p. 145*

## Description

A froghemoth is an amphibious predator as big as an elephant. It lairs in swamps and has four tentacles, a thick rubbery hide, a fang-filled maw with a prehensile tongue, and an extendable stalk sporting three bulbous eyes that face in different directions.

Froghemoths are creatures not of this world. A journal purportedly written long ago by the wizard Lum describes strange, cylindrical chambers of metal buried in the ground from which froghemoths emerged, but no reliable reports of the location of such places exist.

Every few years, a froghemoth can lay a fertile egg without mating. The froghemoth cares nothing for its egg and might eat the hatchling. A young froghemoth's survival thus depends on its parent leaving it behind in indifference. A newborn froghemoth grows to full size over a period of months by indiscriminately preying on other creatures in its swampy domain. It learns to hide its enormous body in murky pools, keeping only its eyestalk above water to watch for passing creatures. When food comes within reach, the froghemoth erupts from its pool, tentacles and tongue flailing. It can grab several targets at once; it wraps its tongue around one and pulls it in to be devoured while holding the rest at bay.

If [bullywugs](/compendium/bestiary/humanoid/bullywug.md) come across a froghemoth, the bullywugs may treat the froghemoth as a god and do all they can to coax the monster into their den. A froghemoth can be tamed (after a fashion) by offering it food, and bullywugs can communicate with it on a basic level, so the creature might eat only a few bullywugs before following the rest. The bullywugs gather food as tribute for it, provide it with a comfortable lair, protect it from harm, and try to ensure that any of its offspring reach maturity.

## Environment

swamp, underdark