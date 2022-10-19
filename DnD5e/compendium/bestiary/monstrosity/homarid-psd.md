---
cssclass: json5e-monster
tags:
- compendium/src/psd
- monster/size/medium
- monster/type/monstrosity
aliases: ["Homarid"]
statblock: true
"name": "Homarid"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "13"
- !!int "8"
- !!int "13"
- !!int "9"
- !!int "14"
- !!int "10"
"speed": "walk 20 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Homarid"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The homarid can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The homarid makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 11). The homarid has two claws, each of which can grapple only one\
    \ target."
  "name": "Claw"
"source":
- "PSD"
name: Homarid
image: "[[Homarid.png]]"
---

# Homarid

```statblock
"name": "Homarid"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "13"
- !!int "8"
- !!int "13"
- !!int "9"
- !!int "14"
- !!int "10"
"speed": "walk 20 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Homarid"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The homarid can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The homarid makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 11). The homarid has two claws, each of which can grapple only one\
    \ target."
  "name": "Claw"
"source":
- "PSD"
"image": "[[Homarid.png]]"
```
^statblock

*Source: Plane Shift: Dominaria p. 15*