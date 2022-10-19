---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/large
- monster/type/beast
- monster/environment/underwater
- monster/environment/coastal
aliases: ["Shoal Serpent"]
statblock: true
"name": "Shoal Serpent"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 20 ft., swim 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The serpent can hold its breath for 1 hour."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6\
    \ + 4) piercing damage."
  "name": "Bite"
"source":
- "PSZ"
name: Shoal Serpent
image: "[[Shoal Serpent.png]]"
---

# Shoal Serpent

```statblock
"name": "Shoal Serpent"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 20 ft., swim 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The serpent can hold its breath for 1 hour."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6\
    \ + 4) piercing damage."
  "name": "Bite"
"source":
- "PSZ"
"image": "[[Shoal Serpent.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 26*

## Environment

underwater, coastal