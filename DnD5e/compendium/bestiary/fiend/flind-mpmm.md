---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/fiend/gnoll
- monster/environment/coastal
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
aliases: ["Flind"]
statblock: true
"name": "Flind"
"size": "Medium"
"type": "fiend"
"subtype": "gnoll"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"stats":
- !!int "20"
- !!int "14"
- !!int "19"
- !!int "11"
- !!int "13"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Intimidation": !!int "5"
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Gnoll, Abyssal"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the flind isn't [incapacitated](/rules/conditions.md#incapacitated),\
    \ any creature with the Rampage trait can make a Bite attack as a bonus action\
    \ while within 10 feet of the flind."
  "name": "Aura of Blood Thirst"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The flind makes one Flail of Chaos attack, one Flail of Pain attack, and\
    \ one Flail of Paralysis attack, or it makes three Longbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 10 (1d10\
    \ + 5) bludgeoning damage, and the target must make a DC 16 Wisdom saving throw.\
    \ On a failed save, the target must use its reaction, if available, to make one\
    \ melee attack against a random creature, other than the flind, within its reach.\
    \ If there's no creature within reach, the target instead moves half its speed\
    \ in a random direction."
  "name": "Flail of Chaos"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 10 (1d10\
    \ + 5) bludgeoning damage plus 16 (3d10) psychic damage."
  "name": "Flail of Pain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 10 (1d10\
    \ + 5) bludgeoning damage, and the target must succeed on a DC 16 Constitution\
    \ saving throw or be [paralyzed](/rules/conditions.md#paralyzed) until the end\
    \ of its next turn."
  "name": "Flail of Paralysis"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "MPMM"
- "VGM"
name: Flind
image: "[[Flind.png]]"
---

# Flind

```statblock
"name": "Flind"
"size": "Medium"
"type": "fiend"
"subtype": "gnoll"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"stats":
- !!int "20"
- !!int "14"
- !!int "19"
- !!int "11"
- !!int "13"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Intimidation": !!int "5"
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Gnoll, Abyssal"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the flind isn't [incapacitated](/rules/conditions.md#incapacitated),\
    \ any creature with the Rampage trait can make a Bite attack as a bonus action\
    \ while within 10 feet of the flind."
  "name": "Aura of Blood Thirst"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The flind makes one Flail of Chaos attack, one Flail of Pain attack, and\
    \ one Flail of Paralysis attack, or it makes three Longbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 10 (1d10\
    \ + 5) bludgeoning damage, and the target must make a DC 16 Wisdom saving throw.\
    \ On a failed save, the target must use its reaction, if available, to make one\
    \ melee attack against a random creature, other than the flind, within its reach.\
    \ If there's no creature within reach, the target instead moves half its speed\
    \ in a random direction."
  "name": "Flail of Chaos"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 10 (1d10\
    \ + 5) bludgeoning damage plus 16 (3d10) psychic damage."
  "name": "Flail of Pain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 10 (1d10\
    \ + 5) bludgeoning damage, and the target must succeed on a DC 16 Constitution\
    \ saving throw or be [paralyzed](/rules/conditions.md#paralyzed) until the end\
    \ of its next turn."
  "name": "Flail of Paralysis"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "MPMM"
- "VGM"
"image": "[[Flind.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 127, Volo's Guide to Monsters p. 153*

## Description

When the demon lord Yeenoghu wants to create a particularly fearsome war band leader, he transforms an excep tionally strong and vicious gnoll into a demonic warrior known as a flind.

A war band of demon-worshiping gnolls typically contains only one flind, and that creature sets the war band's path. Because of its special connection to Yeenoghu, a flind uses demonic insight to guide the gnolls toward weak prey ripe for slaughter.

Unlike other leaders who might skulk behind their minions, a flind leads the charge in battle. Its flail causes wracking pain, paralysis, and disorientation in those it strikes.

## Environment

coastal, forest, grassland, hill