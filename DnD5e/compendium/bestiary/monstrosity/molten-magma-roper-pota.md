---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/large
- monster/type/monstrosity
- monster/environment/underdark
aliases: ["Molten Magma Roper"]
statblock: true
"name": "Molten Magma Roper"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "20"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "18"
- !!int "8"
- !!int "17"
- !!int "7"
- !!int "16"
- !!int "6"
"speed": "walk 10 ft., climb 10 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "6"
"damage_vulnerabilities": "cold"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the roper remains motionless, it is indistinguishable from a normal\
    \ cave formation, such as a stalagmite."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The roper can have up to six tendrils at a time. Each tendril can be attacked\
    \ (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a\
    \ tendril deals no damage to the roper, which can extrude a replacement tendril\
    \ on its next turn. A tendril can also be broken if a creature takes an action\
    \ and succeeds on a DC 15 Strength check against it."
  "name": "Grasping Tendrils"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The roper can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The roper makes four attacks with its tendrils, uses Reel, and makes one\
    \ attack with its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8\
    \ + 4) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit: 4 (1d8)\
    \ fire damage and the target is [grappled](/rules/conditions.md#grappled) (escape\
    \ DC 15). Until the grapple ends, the target is [restrained](/rules/conditions.md#restrained)\
    \ and has disadvantage on Strength checks and Strength saving throws, and the\
    \ roper can't use the same tendril on another target. A creature takes 4 (1d8)\
    \ fire damage each time it ends its turn grappled by the roper."
  "name": "Tendril"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The roper pulls each creature [grappled](/rules/conditions.md#grappled)\
    \ by it up to 25 feet straight toward it."
  "name": "Reel"
"source":
- "PotA"
name: Molten Magma Roper
image: "[[Molten Magma Roper.png]]"
---

# Molten Magma Roper

```statblock
"name": "Molten Magma Roper"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "20"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "18"
- !!int "8"
- !!int "17"
- !!int "7"
- !!int "16"
- !!int "6"
"speed": "walk 10 ft., climb 10 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "6"
"damage_vulnerabilities": "cold"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the roper remains motionless, it is indistinguishable from a normal\
    \ cave formation, such as a stalagmite."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The roper can have up to six tendrils at a time. Each tendril can be attacked\
    \ (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a\
    \ tendril deals no damage to the roper, which can extrude a replacement tendril\
    \ on its next turn. A tendril can also be broken if a creature takes an action\
    \ and succeeds on a DC 15 Strength check against it."
  "name": "Grasping Tendrils"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The roper can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The roper makes four attacks with its tendrils, uses Reel, and makes one\
    \ attack with its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8\
    \ + 4) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit: 4 (1d8)\
    \ fire damage and the target is [grappled](/rules/conditions.md#grappled) (escape\
    \ DC 15). Until the grapple ends, the target is [restrained](/rules/conditions.md#restrained)\
    \ and has disadvantage on Strength checks and Strength saving throws, and the\
    \ roper can't use the same tendril on another target. A creature takes 4 (1d8)\
    \ fire damage each time it ends its turn grappled by the roper."
  "name": "Tendril"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The roper pulls each creature [grappled](/rules/conditions.md#grappled)\
    \ by it up to 25 feet straight toward it."
  "name": "Reel"
"source":
- "PotA"
"image": "[[Molten Magma Roper.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 143*

## Environment

underdark