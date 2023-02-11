---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/huge
- monster/type/ooze
- monster/environment/underdark
aliases: ["Huge Ochre Jelly"]
statblock: true
"name": "Huge Ochre Jelly"
"size": "Huge"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "51"
"hit_dice": "6d12 + 12"
"stats":
- !!int "15"
- !!int "6"
- !!int "14"
- !!int "2"
- !!int "6"
- !!int "1"
"speed": "walk 10 ft., climb 10 ft."
"damage_resistances": "acid"
"damage_immunities": "lightning, slashing"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, prone"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jelly can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jelly can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) bludgeoning damage plus 3 (1d6) acid damage."
  "name": "Pseudopod"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a jelly that is Medium or larger is subjected to lightning or slashing\
    \ damage, it splits into two new jellies if it has at least 10 hit points. Each\
    \ new jelly has hit points equal to half the original jelly's, rounded down. New\
    \ jellies are one size smaller than the original jelly."
  "name": "Split"
"source":
- "TftYP"
name: Huge Ochre Jelly
image: "[[Huge Ochre Jelly.png]]"
---

# Huge Ochre Jelly

```statblock
"name": "Huge Ochre Jelly"
"size": "Huge"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "51"
"hit_dice": "6d12 + 12"
"stats":
- !!int "15"
- !!int "6"
- !!int "14"
- !!int "2"
- !!int "6"
- !!int "1"
"speed": "walk 10 ft., climb 10 ft."
"damage_resistances": "acid"
"damage_immunities": "lightning, slashing"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, prone"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jelly can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jelly can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) bludgeoning damage plus 3 (1d6) acid damage."
  "name": "Pseudopod"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a jelly that is Medium or larger is subjected to lightning or slashing\
    \ damage, it splits into two new jellies if it has at least 10 hit points. Each\
    \ new jelly has hit points equal to half the original jelly's, rounded down. New\
    \ jellies are one size smaller than the original jelly."
  "name": "Split"
"source":
- "TftYP"
"image": "[[Huge Ochre Jelly.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 225*

## Environment

underdark