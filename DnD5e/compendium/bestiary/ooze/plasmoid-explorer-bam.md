---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/ooze
aliases: ["Plasmoid Explorer"]
statblock: true
"name": "Plasmoid Explorer"
"size": "Medium"
"type": "ooze"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "4"
  "Survival": !!int "4"
"damage_resistances": "acid, poison"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plasmoid can squeeze through a space as narrow as 1 inch wide, provided\
    \ it is wearing and carrying nothing. It has advantage on ability checks it makes\
    \ to initiate or escape a grapple."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plasmoid can hold its breath for 1 hour."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plasmoid makes two Pseudopod attacks. It can replace one of those attacks\
    \ with a Javelin attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Pseudopod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage."
  "name": "Javelin"
"source":
- "BAM"
name: Plasmoid Explorer
image: "[[Plasmoid Explorer.png]]"
---

# Plasmoid Explorer

```statblock
"name": "Plasmoid Explorer"
"size": "Medium"
"type": "ooze"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "4"
  "Survival": !!int "4"
"damage_resistances": "acid, poison"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plasmoid can squeeze through a space as narrow as 1 inch wide, provided\
    \ it is wearing and carrying nothing. It has advantage on ability checks it makes\
    \ to initiate or escape a grapple."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plasmoid can hold its breath for 1 hour."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plasmoid makes two Pseudopod attacks. It can replace one of those attacks\
    \ with a Javelin attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Pseudopod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage."
  "name": "Javelin"
"source":
- "BAM"
"image": "[[Plasmoid Explorer.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 43*

## Description

Wanderlust compels some plasmoids to explore the Astral Plane and visit different worlds of the Material Plane. Such an explorer usually travels light, keeping its possessions in a backpack or similar container.