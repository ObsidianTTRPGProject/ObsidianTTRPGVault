---
cssclass: json5e-monster
tags:
- compendium/src/wdh
- monster/size/medium
- monster/type/humanoid/fire-genasi
- monster/environment/coastal
- monster/environment/hill
- monster/environment/arctic
- monster/environment/urban
- monster/environment/forest
- monster/environment/desert
aliases: ["Embric"]
statblock: true
"name": "Embric"
"size": "Medium"
"type": "humanoid"
"subtype": "Fire genasi"
"alignment": "Neutral Good"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "15"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
  "Strength": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Deception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Primordial"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Embric's spellcasting ability is Constitution (+4 to hit with spell attacks).\
    \ He can innately cast the following spells, requiring no material components:\n\
    \nAt will: [produce flame](/compendium/spells/produce-flame.md)"
  "name": "innate"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Embric makes three melee attacks: two with its scimitar and one with its\
    \ dagger. Or Embric makes two ranged attacks with its daggers."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Embric adds 2 to its AC against one melee attack that would hit it. To\
    \ do so, Embric must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "WDH"
name: Embric
image: "[[Embric.png]]"
---

# Embric

```statblock
"name": "Embric"
"size": "Medium"
"type": "humanoid"
"subtype": "Fire genasi"
"alignment": "Neutral Good"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "15"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
  "Strength": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Deception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Primordial"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Embric's spellcasting ability is Constitution (+4 to hit with spell attacks).\
    \ He can innately cast the following spells, requiring no material components:\n\
    \nAt will: [produce flame](/compendium/spells/produce-flame.md)"
  "name": "innate"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Embric makes three melee attacks: two with its scimitar and one with its\
    \ dagger. Or Embric makes two ranged attacks with its daggers."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Embric adds 2 to its AC against one melee attack that would hit it. To\
    \ do so, Embric must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "WDH"
"image": "[[Embric.png]]"
```
^statblock

*Source: Waterdeep: Dragon Heist p. 32*

## Description

Embric tends the forge in the Steam and Steel shop in Trollskull Alley. He is an expert weaponsmith and claims descent from the efreet of Calimshan and is prone to extreme mood swings. He is married to Avi.

## Environment

coastal, hill, arctic, urban, forest, desert