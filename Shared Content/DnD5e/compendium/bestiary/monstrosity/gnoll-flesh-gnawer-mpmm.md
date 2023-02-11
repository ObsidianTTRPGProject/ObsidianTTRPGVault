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
aliases: ["Gnoll Flesh Gnawer"]
statblock: true
"name": "Gnoll Flesh Gnawer"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "8"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Gnoll"
"cr": "1"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gnoll makes one Bite attack and two Shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Until the end of the turn, the gnoll's speed increases by 60 feet and it\
    \ doesn't provoke opportunity attack||opportunity attacks."
  "name": "Sudden Rush"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "After the gnoll reduces a creature to 0 hit points with a melee attack\
    \ on its turn, the gnoll moves up to half its speed and makes a Bite attack."
  "name": "Rampage"
"source":
- "MPMM"
- "VGM"
name: Gnoll Flesh Gnawer
image: "[[Gnoll Flesh Gnawer.png]]"
---

# Gnoll Flesh Gnawer

```statblock
"name": "Gnoll Flesh Gnawer"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "8"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Gnoll"
"cr": "1"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gnoll makes one Bite attack and two Shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Until the end of the turn, the gnoll's speed increases by 60 feet and it\
    \ doesn't provoke opportunity attack||opportunity attacks."
  "name": "Sudden Rush"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "After the gnoll reduces a creature to 0 hit points with a melee attack\
    \ on its turn, the gnoll moves up to half its speed and makes a Bite attack."
  "name": "Rampage"
"source":
- "MPMM"
- "VGM"
"image": "[[Gnoll Flesh Gnawer.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 144, Volo's Guide to Monsters p. 154*

## Description

These gnolls eschew the use of ranged weapons in favor of short blades that they wield with great speed and efficiency. In the thick of a fight, they dash across the battlefield, slashing and snarling as they run down stragglers and finish off wounded foes.

**Gnolls.** The first gnolls were hyenas transformed by magic. Many of them were then corrupted by the demon lord Yeenoghu. Whether in service to Yeenoghu or dedicated to the survival of their kin, gnoll war bands seek to soften up foes with surprise attacks and to leave no survivors alive.

## Environment

arctic, forest, grassland, hill