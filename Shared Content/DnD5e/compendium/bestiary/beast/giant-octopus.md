---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/beast
- monster/environment/underwater
aliases: ["Giant Octopus"]
statblock: true
"name": "Giant Octopus"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "52"
"hit_dice": "8d10 + 8"
"stats":
- !!int "17"
- !!int "13"
- !!int "13"
- !!int "4"
- !!int "10"
- !!int "4"
"speed": "walk 10 ft., swim 60 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While out of water, the octopus can hold its breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The octopus has advantage on Dexterity ([Stealth](/rules/skills.md#Stealth))\
    \ checks made while underwater."
  "name": "Underwater Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The octopus can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the octopus can't use its tentacles on another target."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater.\
    \ The area is heavily obscured for 1 minute, although a significant current can\
    \ disperse the ink. After releasing the ink, the octopus can use the Dash action\
    \ as a bonus action."
  "name": "Ink Cloud (Recharges after a Short or Long Rest)"
"source":
- "MM"
- "PotA"
- "RoT"
- "GoS"
- "EGW"
- "MOT"
- "TCE"
- "CRCotN"
name: Giant Octopus
image: "[[Giant Octopus.png]]"
---

# Giant Octopus

```statblock
"name": "Giant Octopus"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "52"
"hit_dice": "8d10 + 8"
"stats":
- !!int "17"
- !!int "13"
- !!int "13"
- !!int "4"
- !!int "10"
- !!int "4"
"speed": "walk 10 ft., swim 60 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While out of water, the octopus can hold its breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The octopus has advantage on Dexterity ([Stealth](/rules/skills.md#Stealth))\
    \ checks made while underwater."
  "name": "Underwater Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The octopus can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the octopus can't use its tentacles on another target."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater.\
    \ The area is heavily obscured for 1 minute, although a significant current can\
    \ disperse the ink. After releasing the ink, the octopus can use the Dash action\
    \ as a bonus action."
  "name": "Ink Cloud (Recharges after a Short or Long Rest)"
"source":
- "MM"
- "PotA"
- "RoT"
- "GoS"
- "EGW"
- "MOT"
- "TCE"
- "CRCotN"
"image": "[[Giant Octopus.png]]"
```
^statblock

*Source: Monster Manual p. 326, Princes of the Apocalypse, The Rise of Tiamat, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Tasha's Cauldron of Everything, Critical Role: Call of the Netherdeep*

## Environment

underwater