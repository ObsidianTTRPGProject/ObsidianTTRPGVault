---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/monstrosity
- monster/environment/desert
- monster/environment/grassland
aliases: ["Leucrotta"]
statblock: true
"name": "Leucrotta"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "67"
"hit_dice": "9d10 + 18"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "9"
- !!int "12"
- !!int "6"
"speed": "walk 50 ft."
"skillsaves":
  "Deception": !!int "2"
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Abyssal, Gnoll"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leucrotta can mimic Beast sounds and Humanoid voices. A creature that\
    \ hears the sounds can tell they are imitations only with a successful DC 14 Wisdom\
    \ ([Insight](/rules/skills.md#Insight)) check."
  "name": "Mimicry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature other than a leucrotta or gnoll that starts its turn within\
    \ 5 feet of the leucrotta must succeed on a DC 12 Constitution saving throw or\
    \ be [poisoned](/rules/conditions.md#poisoned) until the start of the creature's\
    \ next turn. On a successful saving throw, the creature is immune to the Stench\
    \ of all leucrottas for 1 hour."
  "name": "Stench"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leucrotta makes one Bite attack and one Hooves attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage. If the leucrotta scores a critical hit, it rolls the damage\
    \ dice three times, instead of twice."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Hooves"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Immediately after the leucrotta makes a Hooves attack, it takes the Disengage\
    \ action."
  "name": "Kicking Retreat"
"source":
- "MPMM"
- "VGM"
name: Leucrotta
image: "[[Leucrotta.png]]"
---

# Leucrotta

```statblock
"name": "Leucrotta"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "67"
"hit_dice": "9d10 + 18"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "9"
- !!int "12"
- !!int "6"
"speed": "walk 50 ft."
"skillsaves":
  "Deception": !!int "2"
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Abyssal, Gnoll"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leucrotta can mimic Beast sounds and Humanoid voices. A creature that\
    \ hears the sounds can tell they are imitations only with a successful DC 14 Wisdom\
    \ ([Insight](/rules/skills.md#Insight)) check."
  "name": "Mimicry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature other than a leucrotta or gnoll that starts its turn within\
    \ 5 feet of the leucrotta must succeed on a DC 12 Constitution saving throw or\
    \ be [poisoned](/rules/conditions.md#poisoned) until the start of the creature's\
    \ next turn. On a successful saving throw, the creature is immune to the Stench\
    \ of all leucrottas for 1 hour."
  "name": "Stench"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The leucrotta makes one Bite attack and one Hooves attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage. If the leucrotta scores a critical hit, it rolls the damage\
    \ dice three times, instead of twice."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Hooves"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Immediately after the leucrotta makes a Hooves attack, it takes the Disengage\
    \ action."
  "name": "Kicking Retreat"
"source":
- "MPMM"
- "VGM"
"image": "[[Leucrotta.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 170, Volo's Guide to Monsters p. 169*

## Description

A leucrotta is what you would get if you took the head of a giant badger, the legs of a deer, and the body of a large hyena, then put them together and reanimated them with demon ichor without bothering to cover up the stink of death.

The first leucrottas came into be ing alongside some gnolls during the rampages of Yeenoghu on the Material Plane. While many of the hyenas that ate Yeenoghu's kills transformed into gnolls, others underwent more bizarre changes; leucrottas were the most numerous of these.

As clever as it is cruel, a leucrotta loves to deceive, torture, and kill. Creatures who venerate Yeenoghu—particularly his gnoll followers—view leucrottas with great respect. Although a leucrotta is unlikely to lead a gnoll war band, it can influence the leader and might agree to carry the leader into battle and offer advice during the fight. Followers of Yeenoghu also see leucrottas as a form of entertainment. They enjoy watching a leucrotta work almost as much as they like doing their own killing, since leucrottas are meticulous in their cruelty and able to draw out kills for better and longer sport. And when there are no victims to be had, a leucrotta can mimic the delightful squeals of a suffering victim.

A leucrotta is so loathsome that few outside of its own kind can stand to be around one for long. Its horrific, hodgepodge body oozes a foul stench. This reek is outdone only by the creature's breath, which issues from a maw that drips fluid corrupted with rot and digestive juices. In place of fangs, a leucrotta has bony ridges as hard as steel that can crush bones and lacerate flesh. These plates are so tough that a leucrotta can use them to peel plate armor away from the body of a slain knight.

A leucrotta's stench would normally warn away prey long before the creature could attack. It has two natural capabilities, however, that give it an advantage. First, a leucrotta's tracks are nearly impossible to distinguish from those of common deer. Second, it can duplicate the call or the vocal expressions of just about any creature it has heard. The monster uses its mimicry to lure in potential victims, then attacks while they are confused or unaware of the actual threat.

## Environment

desert, grassland