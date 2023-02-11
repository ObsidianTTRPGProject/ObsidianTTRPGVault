---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/monstrosity
- monster/environment/underdark
aliases: ["Behir"]
statblock: true
"name": "Behir"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "168"
"hit_dice": "16d12 + 64"
"stats":
- !!int "23"
- !!int "16"
- !!int "18"
- !!int "7"
- !!int "14"
- !!int "12"
"speed": "walk 50 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "6"
"damage_immunities": "lightning"
"senses": "darkvision 90 ft., passive Perception 16"
"languages": "Draconic"
"cr": "11"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The behir makes two attacks: one with its bite and one to constrict."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10\
    \ + 6) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature.\
    \ Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The\
    \ target is [grappled](/rules/conditions.md#grappled) (escape DC 16) if the behir\
    \ isn't already constricting a creature, and the target is [restrained](/rules/conditions.md#restrained)\
    \ until this grapple ends."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The behir exhales a line of lightning that is 20 feet long and 5 feet wide.\
    \ Each creature in that line must make a DC 16 Dexterity saving throw, taking\
    \ 66 (12d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Breath (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The behir makes one bite attack against a Medium or smaller target it is\
    \ grappling. If the attack hits, the target is also swallowed, and the grapple\
    \ ends. While swallowed, the target is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the behir, and it takes 21 (6d6) acid damage\
    \ at the start of each of the behir's turns. A behir can have only one creature\
    \ swallowed at a time.\n\nIf the behir takes 30 damage or more on a single turn\
    \ from the swallowed creature, the behir must succeed on a DC 14 Constitution\
    \ saving throw at the end of that turn or regurgitate the creature, which falls\
    \ [prone](/rules/conditions.md#prone) in a space within 10 feet of the behir.\
    \ If the behir dies, a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse by using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "MM"
- "TftYP"
- "EGW"
- "CM"
- "JttRC"
name: Behir
image: "[[Behir.png]]"
---

# Behir

```statblock
"name": "Behir"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "168"
"hit_dice": "16d12 + 64"
"stats":
- !!int "23"
- !!int "16"
- !!int "18"
- !!int "7"
- !!int "14"
- !!int "12"
"speed": "walk 50 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "6"
"damage_immunities": "lightning"
"senses": "darkvision 90 ft., passive Perception 16"
"languages": "Draconic"
"cr": "11"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The behir makes two attacks: one with its bite and one to constrict."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10\
    \ + 6) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature.\
    \ Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The\
    \ target is [grappled](/rules/conditions.md#grappled) (escape DC 16) if the behir\
    \ isn't already constricting a creature, and the target is [restrained](/rules/conditions.md#restrained)\
    \ until this grapple ends."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The behir exhales a line of lightning that is 20 feet long and 5 feet wide.\
    \ Each creature in that line must make a DC 16 Dexterity saving throw, taking\
    \ 66 (12d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Breath (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The behir makes one bite attack against a Medium or smaller target it is\
    \ grappling. If the attack hits, the target is also swallowed, and the grapple\
    \ ends. While swallowed, the target is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the behir, and it takes 21 (6d6) acid damage\
    \ at the start of each of the behir's turns. A behir can have only one creature\
    \ swallowed at a time.\n\nIf the behir takes 30 damage or more on a single turn\
    \ from the swallowed creature, the behir must succeed on a DC 14 Constitution\
    \ saving throw at the end of that turn or regurgitate the creature, which falls\
    \ [prone](/rules/conditions.md#prone) in a space within 10 feet of the behir.\
    \ If the behir dies, a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse by using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "MM"
- "TftYP"
- "EGW"
- "CM"
- "JttRC"
"image": "[[Behir.png]]"
```
^statblock

*Source: Monster Manual p. 25, Tales from the Yawning Portal, Explorer's Guide to Wildemount, Candlekeep Mysteries, Journeys through the Radiant Citadel*

## Description

The serpentine behir crawls along floors and clambers up walls to reach its prey. Its lightning breath can incinerate most creatures, even as more powerful foes are constricted in its coils and eaten alive.

A behir's monstrous form resembles a combination of centipede and crocodile. Its scaled hide ranges from ultramarine to deep blue in color, fading to pale blue on its underside.

**Cavern Predators.** Behirs lair in places inaccessible to other creatures, favoring locations where would-be intruders must make a harrowing climb to reach them. Deep pits, high caves in cliff walls, and caverns reached only by narrow, twisting tunnels are prime sites for a behir ambush. A behir's dozen legs allow it to scramble through its lair site with ease. When not climbing, it moves even faster by folding its legs beside its body and slithering like a snake.

Behirs swallow their prey whole, after which they enter a period of dormancy while they digest. While dormant, a behir chooses a hiding place where intruders in its lair might overlook it.

**Foes of the Dragons.** In times long forgotten, giants and dragons engaged in seemingly endless war. Storm giants created the first behirs as weapons against the dragons, and behirs retain a natural hatred for dragonkind.

A behir never makes its lair in an area it knows to be inhabited by a dragon. If a dragon attempts to establish a lair within a few dozen miles of a behir's lair, the behir is compelled to kill the dragon or drive it off. Only if the dragon proves too powerful to fight does a behir back down, seeking out a new lair site a great distance away.

## Environment

underdark