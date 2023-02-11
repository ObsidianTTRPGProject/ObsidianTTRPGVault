---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/medium
- monster/type/humanoid/locathah
aliases: ["Locathah Hunter"]
statblock: true
"name": "Locathah Hunter"
"size": "Medium"
"type": "humanoid"
"subtype": "locathah"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "14"
- !!int "11"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
"skillsaves":
  "Athletics": !!int "3"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Aquan, Common"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter has advantage on saving throws against spells and effects that\
    \ control its actions."
  "name": "Leviathan Will"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter can breathe air and water, but it needs to be submerged at least\
    \ once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter makes two attacks with its envenomed crossbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 11\
    \ (2d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) until the end of\
    \ its next turn."
  "name": "Envenomed Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Club"
"source":
- "GoS"
name: Locathah Hunter
image: "[[Locathah Hunter.png]]"
---

# Locathah Hunter

```statblock
"name": "Locathah Hunter"
"size": "Medium"
"type": "humanoid"
"subtype": "locathah"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "14"
- !!int "11"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
"skillsaves":
  "Athletics": !!int "3"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Aquan, Common"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter has advantage on saving throws against spells and effects that\
    \ control its actions."
  "name": "Leviathan Will"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter can breathe air and water, but it needs to be submerged at least\
    \ once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter makes two attacks with its envenomed crossbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 11\
    \ (2d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) until the end of\
    \ its next turn."
  "name": "Envenomed Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Club"
"source":
- "GoS"
"image": "[[Locathah Hunter.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 243*

## Description

The far-ranging locathah hunter is trained in tracking and stalking prey on land and in water. They often serve as leaders to small bands of locathah or emissaries for their people (such as the hunter found in Danger at Dunwater). Their colorful, [poisoned](/rules/conditions.md#poisoned), and fast-loading crossbows rarely miss a target.