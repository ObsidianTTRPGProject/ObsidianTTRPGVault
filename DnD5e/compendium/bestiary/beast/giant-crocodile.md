---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/beast
- monster/environment/swamp
aliases: ["Giant Crocodile"]
statblock: true
"name": "Giant Crocodile"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "85"
"hit_dice": "9d12 + 27"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., swim 50 ft."
"skillsaves":
  "Stealth": !!int "5"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The crocodile can hold its breath for 30 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The crocodile makes two attacks: one with its bite and one with its tail."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10\
    \ + 5) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the crocodile can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not [grappled](/rules/conditions.md#grappled)\
    \ by the crocodile. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature,\
    \ it must succeed on a DC 16 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
"source":
- "MM"
- "PotA"
- "ToA"
- "DIP"
- "SLW"
- "JttRC"
name: Giant Crocodile
image: "[[Giant Crocodile.png]]"
---

# Giant Crocodile

```statblock
"name": "Giant Crocodile"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "85"
"hit_dice": "9d12 + 27"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., swim 50 ft."
"skillsaves":
  "Stealth": !!int "5"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The crocodile can hold its breath for 30 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The crocodile makes two attacks: one with its bite and one with its tail."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10\
    \ + 5) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the crocodile can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not [grappled](/rules/conditions.md#grappled)\
    \ by the crocodile. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature,\
    \ it must succeed on a DC 16 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
"source":
- "MM"
- "PotA"
- "ToA"
- "DIP"
- "SLW"
- "JttRC"
"image": "[[Giant Crocodile.png]]"
```
^statblock

*Source: Monster Manual p. 324, Princes of the Apocalypse, Tomb of Annihilation, Dragon of Icespire Peak, Storm Lord's Wrath, Journeys through the Radiant Citadel*

## Environment

swamp