---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/monstrosity
- monster/environment/arctic
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
aliases: ["Gnoll Hunter"]
statblock: true
"name": "Gnoll Hunter"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "14"
- !!int "14"
- !!int "12"
- !!int "8"
- !!int "12"
- !!int "8"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Gnoll"
"cr": "1/2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gnoll makes two Bite, Spear, or Longbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage\
    \ when used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage, and the target's speed is reduced by 10 feet until\
    \ the end of its next turn."
  "name": "Longbow"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "After the gnoll reduces a creature to 0 hit points with a melee attack\
    \ on its turn, the gnoll moves up to half its speed and makes a Bite attack."
  "name": "Rampage"
"source":
- "MPMM"
- "VGM"
name: Gnoll Hunter
image: "[[Gnoll Hunter.png]]"
---

# Gnoll Hunter

```statblock
"name": "Gnoll Hunter"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "14"
- !!int "14"
- !!int "12"
- !!int "8"
- !!int "12"
- !!int "8"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Gnoll"
"cr": "1/2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gnoll makes two Bite, Spear, or Longbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage\
    \ when used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage, and the target's speed is reduced by 10 feet until\
    \ the end of its next turn."
  "name": "Longbow"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "After the gnoll reduces a creature to 0 hit points with a melee attack\
    \ on its turn, the gnoll moves up to half its speed and makes a Bite attack."
  "name": "Rampage"
"source":
- "MPMM"
- "VGM"
"image": "[[Gnoll Hunter.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 144, Volo's Guide to Monsters p. 154*

## Description

Hunters are the stealthiest gnolls in a war band. In the vanguard, they creep around, picking off isolated opposition while clearing the way for the rest of the force to advance.

Hunters are particularly skilled with the longbow, and they fire arrows with viciously barbed heads. Even when a hunter doesn't kill their target with their first shot, the arrow strike brings so much pain that the victim is hobbled in its attempt to run away.

**Gnolls.** The first gnolls were hyenas transformed by magic. Many of them were then corrupted by the demon lord Yeenoghu. Whether in service to Yeenoghu or dedicated to the survival of their kin, gnoll war bands seek to soften up foes with surprise attacks and to leave no survivors alive.

## Environment

arctic, forest, grassland, hill