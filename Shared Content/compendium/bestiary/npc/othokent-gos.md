---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/medium
- monster/type/humanoid/lizardfolk
- monster/environment/forest
- monster/environment/swamp
aliases: ["Othokent"]
statblock: true
"name": "Othokent"
"size": "Medium"
"type": "humanoid"
"subtype": "lizardfolk"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "17"
- !!int "12"
- !!int "15"
- !!int "11"
- !!int "11"
- !!int "15"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "4"
"condition_immunities": "frightened"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Abyssal, Draconic"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Othokent can hold its breath for 15 minutes."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, when Othokent makes a melee attack with its trident and\
    \ hits, the target takes an extra 10 (3d6) damage, and Othokent gains temporary\
    \ hit points equal to the extra damage dealt."
  "name": "Skewer"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Othokent makes two attacks: one with its bite and one with its claws or\
    \ trident or two melee attacks with its trident."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Trident"
"source":
- "GoS"
name: Othokent
image: "[[Othokent.png]]"
---

# Othokent

```statblock
"name": "Othokent"
"size": "Medium"
"type": "humanoid"
"subtype": "lizardfolk"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "17"
- !!int "12"
- !!int "15"
- !!int "11"
- !!int "11"
- !!int "15"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "4"
"condition_immunities": "frightened"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Abyssal, Draconic"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Othokent can hold its breath for 15 minutes."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, when Othokent makes a melee attack with its trident and\
    \ hits, the target takes an extra 10 (3d6) damage, and Othokent gains temporary\
    \ hit points equal to the extra damage dealt."
  "name": "Skewer"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Othokent makes two attacks: one with its bite and one with its claws or\
    \ trident or two melee attacks with its trident."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Trident"
"source":
- "GoS"
"image": "[[Othokent.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 81*

## Environment

forest, swamp