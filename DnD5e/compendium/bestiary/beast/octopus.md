---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/small
- monster/type/beast
aliases: ["Octopus"]
statblock: true
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
"speed": "walk 5 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"senses": "darkvision 30 ft., passive Perception 12"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While out of water, the octopus can hold its breath for 30 minutes."
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
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning\
    \ damage, and the target is [grappled](/rules/conditions.md#grappled) (escape\
    \ DC 10). Until this grapple ends, the octopus can't use its tentacles on another\
    \ target."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater.\
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
name: Octopus
image: "[[Octopus.png]]"
---

# Octopus

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
"speed": "walk 5 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"senses": "darkvision 30 ft., passive Perception 12"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While out of water, the octopus can hold its breath for 30 minutes."
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
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning\
    \ damage, and the target is [grappled](/rules/conditions.md#grappled) (escape\
    \ DC 10). Until this grapple ends, the octopus can't use its tentacles on another\
    \ target."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater.\
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
"image": "[[Octopus.png]]"
```
^statblock

*Source: Monster Manual p. 333, Storm King's Thunder, Ghosts of Saltmarsh, Infernal Machine Rebuild, Icewind Dale: Rime of the Frostmaiden, The Wild Beyond the Witchlight*