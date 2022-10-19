---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/small
- monster/type/fey
- monster/environment/forest
- monster/environment/swamp
- monster/environment/urban
aliases: ["Meenlock"]
statblock: true
"name": "Meenlock"
"size": "Small"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "31"
"hit_dice": "7d6 + 7"
"stats":
- !!int "7"
- !!int "15"
- !!int "12"
- !!int "11"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "4"
  "Survival": !!int "2"
"condition_immunities": "frightened"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "telepathy 120 ft."
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any Beast or Humanoid that starts its turn within 10 feet of the meenlock\
    \ must succeed on a DC 11 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ until the start of the creature's next turn."
  "name": "Fear Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in bright light, the meenlock has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Light Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Claw"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The meenlock teleports to an unoccupied space within 30 feet of it, provided\
    \ that both the space it's teleporting from and its destination are in dim light\
    \ or darkness. The destination need not be within line of sight."
  "name": "Shadow Teleport (Recharge 5-6)"
"source":
- "MPMM"
- "VGM"
name: Meenlock
image: "[[Meenlock.png]]"
---

# Meenlock

```statblock
"name": "Meenlock"
"size": "Small"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "31"
"hit_dice": "7d6 + 7"
"stats":
- !!int "7"
- !!int "15"
- !!int "12"
- !!int "11"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "4"
  "Survival": !!int "2"
"condition_immunities": "frightened"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "telepathy 120 ft."
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any Beast or Humanoid that starts its turn within 10 feet of the meenlock\
    \ must succeed on a DC 11 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ until the start of the creature's next turn."
  "name": "Fear Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in bright light, the meenlock has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Light Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Claw"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The meenlock teleports to an unoccupied space within 30 feet of it, provided\
    \ that both the space it's teleporting from and its destination are in dim light\
    \ or darkness. The destination need not be within line of sight."
  "name": "Shadow Teleport (Recharge 5-6)"
"source":
- "MPMM"
- "VGM"
"image": "[[Meenlock.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 178, Volo's Guide to Monsters p. 170*

## Description

Meenlocks are Fey that invoke terror and seek to destroy all that is good, innocent, and beautiful. These bipeds have the heads and claws of crustaceans, and they primarily live in forests, although they adapt well to urban and subterranean settings.

Meenlocks are spawned by fear. When terror overwhelms a creature in the Feywild or another location where the Feywild's influence is strong, one or more meenlocks might spontaneously arise in the shadows or darkness nearby. If more than one meenlock is born, a lair also magically forms. The earth creaks and moans as narrow, twisting tunnels open up within it. One of these passageways serves as the lair's only entrance, and a large central chamber serves as the meenlocks' den. Inside the warren, black moss covers every surface, muffling sound.

A meenlock can supernaturally sense areas of darkness and shadow in its vicinity and can teleport from one darkened space to another—enabling it to sneak up on its prey or run away when outmatched. Meenlocks also project a supernatural aura that instills terror in those nearby.

**Telepathic Torment.** Up to four meenlocks can telepathically torment one [incapacitated](/rules/conditions.md#incapacitated) creature, filling its mind with disturbing sounds and dreadful imagery. Participating meenlocks can't use their telepathy for any other purpose during this time, though they can move about and take actions and reactions as normal. This torment has no effect on a creature that is immune to the [frightened](/rules/conditions.md#frightened) condition. If the creature is susceptible and remains [incapacitated](/rules/conditions.md#incapacitated) for 1 hour, the creature must make a Wisdom saving throw, taking 10 (3d6) psychic damage on a failed save, or half as much damage on a successful one. The save DC is 10 + the number of meenlocks participating in the torment, considering only those that remain within sight of the victim for the entire hour and aren't [incapacitated](/rules/conditions.md#incapacitated) during it. The process can be repeated. A Humanoid that drops to 0 hit points as a result of this damage instantly transforms into a meenlock at full health and under the DM's control. Only a [wish](/compendium/spells/wish.md) spell or divine intervention can restore a transformed creature to its former state.

## Environment

forest, swamp, urban