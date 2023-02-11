---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/monstrosity
- monster/environment/forest
aliases: ["Reduced-Threat Ettercap"]
statblock: true
"name": "Reduced-Threat Ettercap"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "8d8 + 8"
"stats":
- !!int "14"
- !!int "15"
- !!int "13"
- !!int "7"
- !!int "12"
- !!int "8"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "2"
  "Perception": !!int "1"
  "Survival": !!int "1"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettercap can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in contact with a web, the ettercap knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettercap ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettercap makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 6 (1d8\
    \ + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on\
    \ a DC 9 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. The creature can repeat the saving throw at the end of each of\
    \ its turns, ending the effect on itself on a success."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +2 to hit, range 30/60 ft., one Large or smaller\
    \ creature. Hit: The creature is [restrained](/rules/conditions.md#restrained)\
    \ by webbing. As an action, the [restrained](/rules/conditions.md#restrained)\
    \ creature can make a DC 9 Strength check, escaping from the webbing on a success.\
    \ The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points,\
    \ is vulnerable to fire damage and immune to bludgeoning, poison and psychic damage."
  "name": "Web (Recharge 5-6)"
"source":
- "TftYP"
name: Reduced-Threat Ettercap
image: "[[Reduced-Threat Ettercap.png]]"
---

# Reduced-Threat Ettercap

```statblock
"name": "Reduced-Threat Ettercap"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "8d8 + 8"
"stats":
- !!int "14"
- !!int "15"
- !!int "13"
- !!int "7"
- !!int "12"
- !!int "8"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "2"
  "Perception": !!int "1"
  "Survival": !!int "1"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettercap can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in contact with a web, the ettercap knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettercap ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettercap makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 6 (1d8\
    \ + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on\
    \ a DC 9 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. The creature can repeat the saving throw at the end of each of\
    \ its turns, ending the effect on itself on a success."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +2 to hit, range 30/60 ft., one Large or smaller\
    \ creature. Hit: The creature is [restrained](/rules/conditions.md#restrained)\
    \ by webbing. As an action, the [restrained](/rules/conditions.md#restrained)\
    \ creature can make a DC 9 Strength check, escaping from the webbing on a success.\
    \ The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points,\
    \ is vulnerable to fire damage and immune to bludgeoning, poison and psychic damage."
  "name": "Web (Recharge 5-6)"
"source":
- "TftYP"
"image": "[[Reduced-Threat Ettercap.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*

## Environment

forest