---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/humanoid/warforged
aliases: ["Warforged Soldier"]
statblock: true
"name": "Warforged Soldier"
"size": "Medium"
"type": "humanoid"
"subtype": "warforged"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"stats":
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "4"
"damage_resistances": "poison"
"senses": "passive Perception 14"
"languages": "Common"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warforged has advantage on saving throws against being [poisoned](/rules/conditions.md#poisoned)\
    \ and is immune to disease. Magic can't put it to sleep."
  "name": "Warforged Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warforged makes two armblade attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Armblade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage."
  "name": "Javelin"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When an attacker the warforged can see makes an attack roll against a creature\
    \ within 5 feet of the warforged, the warforged can impose disadvantage on the\
    \ attack roll."
  "name": "Protection"
"source":
- "ERLW"
name: Warforged Soldier
image: "[[Warforged Soldier.png]]"
---

# Warforged Soldier

```statblock
"name": "Warforged Soldier"
"size": "Medium"
"type": "humanoid"
"subtype": "warforged"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"stats":
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "4"
"damage_resistances": "poison"
"senses": "passive Perception 14"
"languages": "Common"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warforged has advantage on saving throws against being [poisoned](/rules/conditions.md#poisoned)\
    \ and is immune to disease. Magic can't put it to sleep."
  "name": "Warforged Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warforged makes two armblade attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Armblade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage."
  "name": "Javelin"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When an attacker the warforged can see makes an attack roll against a creature\
    \ within 5 feet of the warforged, the warforged can impose disadvantage on the\
    \ attack roll."
  "name": "Protection"
"source":
- "ERLW"
"image": "[[Warforged Soldier.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 320*

## Description

Warforged soldiers are humanoids formed from wood and steel, then magically imbued with life and sentience. The warforged were created to fight in the Last War, and in the aftermath of that conflict, they struggle to understand their place in the world.

Most warforged soldiers still serve their former masters, often guarding dragonmarked houses or merchant caravans. Many warforged find it difficult to separate themselves from the soldiers they were made to be, seeking work as bouncers, bailiffs, and bodyguards. Others put their tireless strength to work as laborers, committed to the reconstruction of the towns and cities they defended or destroyed in the war.