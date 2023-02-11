---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/fiend/devil
- monster/environment/mountain
- monster/environment/urban
aliases: ["Red Abishai"]
statblock: true
"name": "Red Abishai"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "22"
"hp": !!int "289"
"hit_dice": "34d8 + 136"
"stats":
- !!int "23"
- !!int "16"
- !!int "19"
- !!int "14"
- !!int "15"
- !!int "19"
"speed": "walk 30 ft., fly 50 ft."
"saves":
  "Wisdom": !!int "8"
  "Strength": !!int "12"
  "Constitution": !!int "10"
"skillsaves":
  "Intimidation": !!int "10"
  "Perception": !!int "8"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Draconic, Infernal, telepathy 120 ft."
"cr": "19"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the abishai's [darkvision](/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abishai has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abishai makes one Bite attack and one Claw attack, and it can use Frightful\
    \ Presence or Incite Fanaticism."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 22 (3d10\
    \ + 6) piercing damage plus 38 (7d10) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10\
    \ + 6) force damage plus 11 (2d10) fire damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the abishai's choice that is within 120 feet and aware\
    \ of the abishai must succeed on a DC 18 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ of it for 1 minute. A creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself on a success. If a creature's saving\
    \ throw is successful or the effect ends for it, the creature is immune to the\
    \ abishai's Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abishai chooses up to four other creatures within 60 feet of it that\
    \ can see it. Until the start of the abishai's next turn, each of those creatures\
    \ makes attack rolls with advantage and can't be [frightened](/rules/conditions.md#frightened)."
  "name": "Incite Fanaticism"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abishai targets one Dragon it can see within 120 feet of it. The Dragon\
    \ must make a DC 18 Charisma saving throw. A chromatic dragon makes this save\
    \ with disadvantage. On a successful save, the target is immune to the abishai's\
    \ Power of the Dragon Queen for 1 hour. On a failed save, the target is [charmed](/rules/conditions.md#charmed)\
    \ by the abishai for 1 hour. While [charmed](/rules/conditions.md#charmed) in\
    \ this way, the target regards the abishai as a trusted friend to be heeded and\
    \ protected. This effect ends if the abishai or its companions deal damage to\
    \ the target."
  "name": "Power of the Dragon Queen"
"source":
- "MPMM"
- "MTF"
name: Red Abishai
image: "[[Red Abishai.png]]"
---

# Red Abishai

```statblock
"name": "Red Abishai"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "22"
"hp": !!int "289"
"hit_dice": "34d8 + 136"
"stats":
- !!int "23"
- !!int "16"
- !!int "19"
- !!int "14"
- !!int "15"
- !!int "19"
"speed": "walk 30 ft., fly 50 ft."
"saves":
  "Wisdom": !!int "8"
  "Strength": !!int "12"
  "Constitution": !!int "10"
"skillsaves":
  "Intimidation": !!int "10"
  "Perception": !!int "8"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Draconic, Infernal, telepathy 120 ft."
"cr": "19"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the abishai's [darkvision](/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abishai has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abishai makes one Bite attack and one Claw attack, and it can use Frightful\
    \ Presence or Incite Fanaticism."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 22 (3d10\
    \ + 6) piercing damage plus 38 (7d10) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10\
    \ + 6) force damage plus 11 (2d10) fire damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the abishai's choice that is within 120 feet and aware\
    \ of the abishai must succeed on a DC 18 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ of it for 1 minute. A creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself on a success. If a creature's saving\
    \ throw is successful or the effect ends for it, the creature is immune to the\
    \ abishai's Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abishai chooses up to four other creatures within 60 feet of it that\
    \ can see it. Until the start of the abishai's next turn, each of those creatures\
    \ makes attack rolls with advantage and can't be [frightened](/rules/conditions.md#frightened)."
  "name": "Incite Fanaticism"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abishai targets one Dragon it can see within 120 feet of it. The Dragon\
    \ must make a DC 18 Charisma saving throw. A chromatic dragon makes this save\
    \ with disadvantage. On a successful save, the target is immune to the abishai's\
    \ Power of the Dragon Queen for 1 hour. On a failed save, the target is [charmed](/rules/conditions.md#charmed)\
    \ by the abishai for 1 hour. While [charmed](/rules/conditions.md#charmed) in\
    \ this way, the target regards the abishai as a trusted friend to be heeded and\
    \ protected. This effect ends if the abishai or its companions deal damage to\
    \ the target."
  "name": "Power of the Dragon Queen"
"source":
- "MPMM"
- "MTF"
"image": "[[Red Abishai.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 40, Mordenkainen's Tome of Foes p. 160*

## Description

Red abishais have no equals among the abishais when it comes to leadership ability and raw power. Red abishais lead other devils into battle or take charge of troublesome cults to ensure that they continue to carry out Tiamat's commands. A red abishai cuts a fearsome figure, and that sight can be inspiring to the abishai's allies, filling them with a fanatical willingness to fight.

**Abishais.** Each abishai was once a mortal who somehow won Tiamat's favor before death and, as a reward, found its soul transformed into a draconic devil to serve at her pleasure in the Nine Hells. Each type of abishai is associated with one of Tiamat's five dragon heads: black, blue, green, red, and white.

Tiamat deploys abishais as her agents, sending them forth to represent her interests in the Hells and across the multiverse. Some have simple tasks, such as delivering a message to cultists. Others have greater responsibilities, such as leading large groups, assassinating targets, and serving in armies. In all cases, abishais are fanatically loyal to Tiamat, ready to lay down their lives if needed.

Abishais stand outside the normal hierarchy of the Nine Hells, having their own chain of command and ultimately answering to Tiamat (and Asmodeus, when he chooses to use them). Other archdevils can command abishais to work for them, but most archdevils do so rarely, since it is never clear whether an abishai follows Tiamat's orders or Asmodeus's. There is inherent risk in countermanding an order given by Tiamat, but interfering with Asmodeus's plans invites certain destruction.

## Environment

mountain, urban