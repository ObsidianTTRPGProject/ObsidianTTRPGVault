---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/medium
- monster/type/aberration
aliases: ["Aboleth Spawn"]
statblock: true
"name": "Aboleth Spawn"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"stats":
- !!int "19"
- !!int "11"
- !!int "18"
- !!int "7"
- !!int "12"
- !!int "9"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Common, Deep Speech, telepathy 60 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spawn must obey its aboleth master."
  "name": "Abolethic Vessel"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spawn can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spawn takes 6 (1d12) acid damage every 10 minutes it goes without being\
    \ immersed in water."
  "name": "Water Dependency"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spawn makes one Spear attack, two Tentacle attacks, and one Psychic\
    \ Lash attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage\
    \ when used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: The\
    \ target is [grappled](/rules/conditions.md#grappled) (escape DC 14) and takes\
    \ 9 (2d8) psychic damage at the start of each of its turns until the grapple ends.\
    \ The spawn has four tentacles, each of which can grapple one creature."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one creature. Hit: 18\
    \ (4d8) psychic damage."
  "name": "Psychic Lash"
"source":
- "CRCotN"
name: Aboleth Spawn
image: "[[Aboleth Spawn.png]]"
---

# Aboleth Spawn

```statblock
"name": "Aboleth Spawn"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"stats":
- !!int "19"
- !!int "11"
- !!int "18"
- !!int "7"
- !!int "12"
- !!int "9"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Common, Deep Speech, telepathy 60 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spawn must obey its aboleth master."
  "name": "Abolethic Vessel"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spawn can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spawn takes 6 (1d12) acid damage every 10 minutes it goes without being\
    \ immersed in water."
  "name": "Water Dependency"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spawn makes one Spear attack, two Tentacle attacks, and one Psychic\
    \ Lash attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage\
    \ when used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: The\
    \ target is [grappled](/rules/conditions.md#grappled) (escape DC 14) and takes\
    \ 9 (2d8) psychic damage at the start of each of its turns until the grapple ends.\
    \ The spawn has four tentacles, each of which can grapple one creature."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one creature. Hit: 18\
    \ (4d8) psychic damage."
  "name": "Psychic Lash"
"source":
- "CRCotN"
"image": "[[Aboleth Spawn.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 135*