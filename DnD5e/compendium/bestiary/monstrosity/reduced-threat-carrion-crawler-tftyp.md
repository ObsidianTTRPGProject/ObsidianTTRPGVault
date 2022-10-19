---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/monstrosity
- monster/environment/underdark
aliases: ["Reduced-Threat Carrion Crawler"]
statblock: true
"name": "Reduced-Threat Carrion Crawler"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "25"
"hit_dice": "6d10 + 18"
"stats":
- !!int "14"
- !!int "13"
- !!int "16"
- !!int "1"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "1"
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
  "desc": "The carrion crawler has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The carrion crawler can climb difficult surfaces, including upside down\
    \ on ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The carrion crawler makes two attacks: one with its tentacles and one with\
    \ its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 4 (1d4\
    \ + 2) poison damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or be [poisoned](/rules/conditions.md#poisoned) for 1 minute. Until this\
    \ poison ends, the target is [paralyzed](/rules/conditions.md#paralyzed). The\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ poison on itself on a success."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "TftYP"
name: Reduced-Threat Carrion Crawler
image: "[[Reduced-Threat Carrion Crawler.png]]"
---

# Reduced-Threat Carrion Crawler

```statblock
"name": "Reduced-Threat Carrion Crawler"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "25"
"hit_dice": "6d10 + 18"
"stats":
- !!int "14"
- !!int "13"
- !!int "16"
- !!int "1"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "1"
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
  "desc": "The carrion crawler has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The carrion crawler can climb difficult surfaces, including upside down\
    \ on ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The carrion crawler makes two attacks: one with its tentacles and one with\
    \ its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 4 (1d4\
    \ + 2) poison damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or be [poisoned](/rules/conditions.md#poisoned) for 1 minute. Until this\
    \ poison ends, the target is [paralyzed](/rules/conditions.md#paralyzed). The\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ poison on itself on a success."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "TftYP"
"image": "[[Reduced-Threat Carrion Crawler.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*

## Environment

underdark