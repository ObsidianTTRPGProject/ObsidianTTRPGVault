---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/humanoid/shifter
aliases: ["Shifter"]
statblock: true
"name": "Shifter"
"size": "Medium"
"type": "humanoid"
"subtype": "shifter"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"stats":
- !!int "12"
- !!int "16"
- !!int "14"
- !!int "11"
- !!int "15"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Nature": !!int "2"
  "Insight": !!int "4"
  "Perception": !!int "4"
  "Acrobatics": !!int "5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the shifter takes on a more bestial form for 1 minute\
    \ or until it dies. The shifter gains 5 temporary hit points. It can make a bite\
    \ attack when it activates this trait and also as a bonus action on each of its\
    \ turns while in its bestial form."
  "name": "Shifting (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) piercing damage."
  "name": "Bite"
"source":
- "ERLW"
name: Shifter
image: "[[Shifter.png]]"
---

# Shifter

```statblock
"name": "Shifter"
"size": "Medium"
"type": "humanoid"
"subtype": "shifter"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"stats":
- !!int "12"
- !!int "16"
- !!int "14"
- !!int "11"
- !!int "15"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Nature": !!int "2"
  "Insight": !!int "4"
  "Perception": !!int "4"
  "Acrobatics": !!int "5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the shifter takes on a more bestial form for 1 minute\
    \ or until it dies. The shifter gains 5 temporary hit points. It can make a bite\
    \ attack when it activates this trait and also as a bonus action on each of its\
    \ turns while in its bestial form."
  "name": "Shifting (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) piercing damage."
  "name": "Bite"
"source":
- "ERLW"
"image": "[[Shifter.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 319*

## Description

Shifters are tied to primal spirits, which most of them refer to as the beast within. They are lithe of form and have bestial features: large eyes, flat noses, pointed ears, and light fur over much of their bodies. When a shifter fully embraces the beast within by "shifting," these features become even more pronounced.