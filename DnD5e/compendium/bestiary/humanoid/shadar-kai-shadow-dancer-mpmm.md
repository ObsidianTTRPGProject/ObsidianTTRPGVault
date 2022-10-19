---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/forest
- monster/environment/underdark
- monster/environment/urban
aliases: ["Shadar-kai Shadow Dancer"]
statblock: true
"name": "Shadar-kai Shadow Dancer"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "6"
"skillsaves":
  "Stealth": !!int "6"
"damage_resistances": "necrotic"
"condition_immunities": "charmed, exhaustion"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Elvish"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put it to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai makes three Spiked Chain attacks.\n\nIt can use Shadow Jump\
    \ after one of these attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage. The target must succeed on a DC 14 Dexterity saving throw\
    \ or suffer one of the following effects (choose one or roll a d6):\n\n- 1–\
    2 Decay. The target takes 22 (4d10) necrotic damage.\n- 3–4 Grapple. The\
    \ target is [grappled](/rules/conditions.md#grappled) (escape DC 14) if it is\
    \ a Medium or smaller creature. Until the grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the shadar-kai can't grapple another target.\n- 5–6 Topple. The target\
    \ is knocked [prone](/rules/conditions.md#prone)."
  "name": "Spiked Chain"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai teleports, along with any equipment is it wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see. Both the space it teleports\
    \ from and the space it teleports to must be in dim light or darkness."
  "name": "Shadow Jump"
"source":
- "MPMM"
- "MTF"
name: Shadar-kai Shadow Dancer
image: "[[Shadar-kai Shadow Dancer.png]]"
---

# Shadar-kai Shadow Dancer

```statblock
"name": "Shadar-kai Shadow Dancer"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "6"
"skillsaves":
  "Stealth": !!int "6"
"damage_resistances": "necrotic"
"condition_immunities": "charmed, exhaustion"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Elvish"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put it to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai makes three Spiked Chain attacks.\n\nIt can use Shadow Jump\
    \ after one of these attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage. The target must succeed on a DC 14 Dexterity saving throw\
    \ or suffer one of the following effects (choose one or roll a d6):\n\n- 1–\
    2 Decay. The target takes 22 (4d10) necrotic damage.\n- 3–4 Grapple. The\
    \ target is [grappled](/rules/conditions.md#grappled) (escape DC 14) if it is\
    \ a Medium or smaller creature. Until the grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the shadar-kai can't grapple another target.\n- 5–6 Topple. The target\
    \ is knocked [prone](/rules/conditions.md#prone)."
  "name": "Spiked Chain"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai teleports, along with any equipment is it wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see. Both the space it teleports\
    \ from and the space it teleports to must be in dim light or darkness."
  "name": "Shadow Jump"
"source":
- "MPMM"
- "MTF"
"image": "[[Shadar-kai Shadow Dancer.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 213, Mordenkainen's Tome of Foes p. 225*

## Description

Those who have fought shadow dancers describe the experience as similar to fighting a living darkness. Every dim alcove and darkened nook is a place the lithe and acrobatic shadow dancers can emerge from to ambush their prey. Using this tactic, they attack their enemies from all angles with a flurry of entangling chains that hold fast and corrupt the flesh. When their quarry is helpless, they dispatch it and then loot the corpse for trinkets, particularly anything colorful and lively to gaze at after they return to the gloom of the Shadowfell.

**Shadar-kai.** In the gloom of the Shadowfell live shadar-kai, elves whose ancestors served the Raven Queen, a god of death and memory. They were brought to that realm in ages past, so long ago that they're now adapted to its cheerless environment, both physically and mentally.

Eons of exposure to the influence of the Shadowfell has left shadar-kai often joyless and mournful. In that realm, they have pale hair, wrinkled gray skin, and swollen joints that give them a corpselike aspect. They appear more youthful while on other planes, but their skin always retains a deathly ashen hue. When in the Shadowfell, they detest mirrors and avoid keeping things that remind them of their age.

Shadar-kai of the Raven Queen watch over both the Shadowfell and the Material Plane, scouting out choice souls and tragedies that might please their deity. They are rumored to be able to coax worldly events along tragic paths for her amusement. The Raven Queen is famously cryptic even to her most devoted followers, however; their efforts are rewarded only with vague omens they interpret as best they can.

**Fortress of Memories.** The shadar-kai who are most devoted to the Raven Queen serve her at the Fortress of Memories, her twisted castle in the Shadowfell. The fortress is a mournful place, filled with incessant echoes of the past. Flocks of ravens that act as the Raven Queen's eyes and ears darken the skies around it when they emerge from within, bearing her cryptic messages and omens far and wide across the multiverse.

Within the fortress are items that the Raven Queen finds irresistible: objects invested with deep feelings of sorrow, longing, or remorse. These items are brought to her as gifts from the shadar-kai, and include furniture, clocks, mirrors, jewels, and toys. Ghostly visions of people, places, and pets also appear in the fortress. Any of these things can spontaneously appear about her lair, every object and apparition being a metaphoric representation of some story—great or small—that was saturated with raw emotion.

Shadar-kai encountered outside the Shadowfell are often on quests to find the most sorrow-touched items they can find to bring back to their queen's gloomy castle.

## Environment

forest, underdark, urban