---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Razerblast"]
statblock: true
"name": "Razerblast"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "112"
"hit_dice": "15d8 + 75"
"stats":
- !!int "16"
- !!int "11"
- !!int "16"
- !!int "9"
- !!int "10"
- !!int "13"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "4"
  "Perception": !!int "3"
"damage_immunities": "fire"
"senses": "passive Perception 13"
"languages": "Common, Ignan"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The razerblast's armor is hot. Any creature grappling the razerblast or\
    \ [grappled](/rules/conditions.md#grappled) by it takes 5 (1d10) fire damage at\
    \ the end of that creature's turn."
  "name": "Searing Armor"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the razerblast drops to 0 hit points, a flaming orb in its chest explodes,\
    \ destroying the razerblast's body and scattering its armor as shrapnel. Creatures\
    \ within 10 feet of the razerblast when it explodes must succeed on a DC 12 Dexterity\
    \ saving throw, taking 21 (6d6) piercing damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Shrapnel Explosion"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The razerblast makes three melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage\
    \ if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
  "name": "Spear"
"source":
- "PotA"
name: Razerblast
image: "[[Razerblast.png]]"
---

# Razerblast

```statblock
"name": "Razerblast"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "112"
"hit_dice": "15d8 + 75"
"stats":
- !!int "16"
- !!int "11"
- !!int "16"
- !!int "9"
- !!int "10"
- !!int "13"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "4"
  "Perception": !!int "3"
"damage_immunities": "fire"
"senses": "passive Perception 13"
"languages": "Common, Ignan"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The razerblast's armor is hot. Any creature grappling the razerblast or\
    \ [grappled](/rules/conditions.md#grappled) by it takes 5 (1d10) fire damage at\
    \ the end of that creature's turn."
  "name": "Searing Armor"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the razerblast drops to 0 hit points, a flaming orb in its chest explodes,\
    \ destroying the razerblast's body and scattering its armor as shrapnel. Creatures\
    \ within 10 feet of the razerblast when it explodes must succeed on a DC 12 Dexterity\
    \ saving throw, taking 21 (6d6) piercing damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Shrapnel Explosion"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The razerblast makes three melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage\
    \ if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
  "name": "Spear"
"source":
- "PotA"
"image": "[[Razerblast.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 201*

## Description

A razerblast seethes with hate for the enemies of the fire cult. The razerblast's elemental overlords have replaced its heart with a flaming orb that detonates if the razerblast dies.

Razerblasts remember little of their life before they the power of elemental fire transformed them. Now they follow the orders of the flamewraths and the cult leaders without question. Razerblasts fight confidently because they know that even if they lose, they go out in a blaze of glory.