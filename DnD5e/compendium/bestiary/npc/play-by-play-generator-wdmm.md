---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/construct
aliases: ["Play-by-Play Generator"]
statblock: true
"name": "Play-by-Play Generator"
"size": "Medium"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "walk 30 ft., fly 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "truesight 120 ft., passive Perception 12"
"languages": "Common"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "the generator can't be compelled to act in a manner contrary to its nature\
    \ or its instructions."
  "name": "Axiomatic Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the generator dies, its body disintegrates into dust, leaving behind\
    \ its weapons and anything else it was carrying."
  "name": "Disintegration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The generator makes two fist attacks or four dart attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The generator hurls a magic dart at a target it can see up to 60 feet away\
    \ from it. The dart hits its target automatically (no attack roll required) for\
    \ 5 (2d4) force damage."
  "name": "Magic Dart"
"source":
- "WDMM"
name: Play-by-Play Generator
image: "[[Play-by-Play Generator.png]]"
---

# Play-by-Play Generator

```statblock
"name": "Play-by-Play Generator"
"size": "Medium"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "walk 30 ft., fly 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "truesight 120 ft., passive Perception 12"
"languages": "Common"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "the generator can't be compelled to act in a manner contrary to its nature\
    \ or its instructions."
  "name": "Axiomatic Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the generator dies, its body disintegrates into dust, leaving behind\
    \ its weapons and anything else it was carrying."
  "name": "Disintegration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The generator makes two fist attacks or four dart attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The generator hurls a magic dart at a target it can see up to 60 feet away\
    \ from it. The dart hits its target automatically (no attack roll required) for\
    \ 5 (2d4) force damage."
  "name": "Magic Dart"
"source":
- "WDMM"
"image": "[[Play-by-Play Generator.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 205*