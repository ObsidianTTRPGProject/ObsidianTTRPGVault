---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/beast
- monster/environment/swamp
- monster/environment/urban
aliases: ["Crocodile"]
statblock: true
"name": "Crocodile"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 20 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "2"
"senses": "passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The crocodile can hold its breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10\
    \ + 2) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 12). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the crocodile can't bite another target"
  "name": "Bite"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "ToA"
- "GoS"
- "DIP"
- "SLW"
- "IMR"
- "EGW"
- "WBtW"
name: Crocodile
image: "[[Crocodile.png]]"
---

# Crocodile

```statblock
"name": "Crocodile"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 20 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "2"
"senses": "passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The crocodile can hold its breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10\
    \ + 2) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 12). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the crocodile can't bite another target"
  "name": "Bite"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "ToA"
- "GoS"
- "DIP"
- "SLW"
- "IMR"
- "EGW"
- "WBtW"
"image": "[[Crocodile.png]]"
```
^statblock

*Source: Monster Manual p. 320, Hoard of the Dragon Queen, Princes of the Apocalypse, Tomb of Annihilation, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Infernal Machine Rebuild, Explorer's Guide to Wildemount, The Wild Beyond the Witchlight*

## Environment

swamp, urban