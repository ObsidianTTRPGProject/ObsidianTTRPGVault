---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/ooze
aliases: ["Plasmoid Warrior"]
statblock: true
"name": "Plasmoid Warrior"
"size": "Medium"
"type": "ooze"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Stealth": !!int "4"
"damage_resistances": "acid, poison"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plasmoid can squeeze through a space as narrow as 1 inch wide, provided\
    \ it is wearing and carrying nothing. It has advantage on ability checks it makes\
    \ to initiate or escape a grapple."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plasmoid can hold its breath for 1 hour."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plasmoid makes three Pseudopod attacks. It can replace one of those\
    \ attacks with a Spear or Pistol attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage."
  "name": "Pseudopod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage\
    \ when used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/90 ft., one target. Hit: 7\
    \ (1d10 + 2) piercing damage."
  "name": "Pistol"
"source":
- "BAM"
name: Plasmoid Warrior
image: "[[Plasmoid Warrior.png]]"
---

# Plasmoid Warrior

```statblock
"name": "Plasmoid Warrior"
"size": "Medium"
"type": "ooze"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Stealth": !!int "4"
"damage_resistances": "acid, poison"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plasmoid can squeeze through a space as narrow as 1 inch wide, provided\
    \ it is wearing and carrying nothing. It has advantage on ability checks it makes\
    \ to initiate or escape a grapple."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plasmoid can hold its breath for 1 hour."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plasmoid makes three Pseudopod attacks. It can replace one of those\
    \ attacks with a Spear or Pistol attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage."
  "name": "Pseudopod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage\
    \ when used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/90 ft., one target. Hit: 7\
    \ (1d10 + 2) piercing damage."
  "name": "Pistol"
"source":
- "BAM"
"image": "[[Plasmoid Warrior.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 43*

## Description

These battle-hardened plasmoids can toughen their outer surfaces, giving themselves protection comparable to light armor.