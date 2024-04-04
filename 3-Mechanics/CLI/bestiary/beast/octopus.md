---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Octopus"]
---
# [Octopus](3-Mechanics\CLI\bestiary\beast/octopus.md)
*Source: Monster Manual p. 333. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Octopus"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "3"
"hit_dice": "1d6"
"stats":
- !!int "4"
- !!int "15"
- !!int "11"
- !!int "3"
- !!int "10"
- !!int "4"
"speed": "5 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"senses": "darkvision 30 ft., passive Perception 12"
"languages": ""
"cr": "0"
"traits":
- "desc": "While out of water, the octopus can hold its breath for 30 minutes."
  "name": "Hold Breath"
- "desc": "The octopus has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth))\
    \ checks made while underwater."
  "name": "Underwater Camouflage"
- "desc": "The octopus can breathe only underwater."
  "name": "Water Breathing"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: 1 bludgeoning damage, and the target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 10). Until this grapple ends, the octopus can't use its tentacles\
    \ on another target."
  "name": "Tentacles"
- "desc": "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater.\
    \ The area is heavily obscured for 1 minute, although a significant current can\
    \ disperse the ink. After releasing the ink, the octopus can use the Dash action\
    \ as a bonus action."
  "name": "Ink Cloud (Recharges after a Short or Long Rest)"
"source":
- "MM"
- "SKT"
- "GoS"
- "IMR"
- "IDRotF"
- "WBtW"
"image": "/3-Mechanics/CLI/bestiary/beast/token/octopus.webp"
```
^statblock