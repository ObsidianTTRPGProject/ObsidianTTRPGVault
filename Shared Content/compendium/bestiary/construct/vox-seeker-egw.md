---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/tiny
- monster/type/construct
aliases: ["Vox Seeker"]
statblock: true
"name": "Vox Seeker"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "7"
"hit_dice": "2d4 + 2"
"stats":
- !!int "2"
- !!int "10"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 20 ft., climb 20 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vox seeker must move toward and attack the source of the nearest voice\
    \ within 60 feet of it, to the exclusion of all other targets, for as long as\
    \ it remains operational."
  "name": "Voice Lock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vox seeker can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ piercing damage plus 3 lightning damage."
  "name": "Pincer"
"source":
- "EGW"
name: Vox Seeker
image: "[[Vox Seeker.png]]"
---

# Vox Seeker

```statblock
"name": "Vox Seeker"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "7"
"hit_dice": "2d4 + 2"
"stats":
- !!int "2"
- !!int "10"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 20 ft., climb 20 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vox seeker must move toward and attack the source of the nearest voice\
    \ within 60 feet of it, to the exclusion of all other targets, for as long as\
    \ it remains operational."
  "name": "Voice Lock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vox seeker can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ piercing damage plus 3 lightning damage."
  "name": "Pincer"
"source":
- "EGW"
"image": "[[Vox Seeker.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 270*