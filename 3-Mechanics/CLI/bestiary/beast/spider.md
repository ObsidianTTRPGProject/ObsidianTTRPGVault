---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Spider"]
---
# [Spider](3-Mechanics\CLI\bestiary\beast/spider.md)
*Source: Monster Manual p. 337. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Spider"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "14"
- !!int "8"
- !!int "1"
- !!int "10"
- !!int "2"
"speed": "20 ft., climb 20 ft."
"skillsaves":
  "Stealth": !!int "4"
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "0"
"traits":
- "desc": "The spider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "While in contact with a web, the spider knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- "desc": "The spider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one creature.\
    \ Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution\
    \ saving throw or take dice:1d4|text(2) (1d4) poison damage."
  "name": "Bite"
"source":
- "MM"
- "PotA"
- "WDMM"
- "PSX"
- "KftGV"
"image": "/3-Mechanics/CLI/bestiary/beast/token/spider.webp"
```
^statblock