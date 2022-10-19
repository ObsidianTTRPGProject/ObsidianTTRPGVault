---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/aberration
- monster/environment/underdark
aliases: ["Reduced-Threat Otyugh"]
statblock: true
"name": "Reduced-Threat Otyugh"
"size": "Large"
"type": "aberration"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "57"
"hit_dice": "12d10 + 48"
"stats":
- !!int "16"
- !!int "11"
- !!int "19"
- !!int "6"
- !!int "13"
- !!int "6"
"speed": "walk 30 ft."
"saves":
  "Constitution": !!int "5"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Otyugh"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The otyugh can magically transmit simple messages and images to any creature\
    \ within 120 feet of it that can understand a language. This form of telepathy\
    \ doesn't allow the receiving creature to telepathically respond."
  "name": "Limited Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The otyugh makes three attacks: one with its bite and two with its tentacles."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) piercing damage. If the target is a creature, it must succeed on a DC 13\
    \ Constitution saving throw against disease or become [poisoned](/rules/conditions.md#poisoned)\
    \ until the disease is cured. Every 24 hours that elapse, the target must repeat\
    \ the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The\
    \ disease is cured on a success. The target dies if the disease reduces its hit\
    \ point maximum to 0. This reduction to the target's hit point maximum lasts until\
    \ the disease is cured."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d8\
    \ + 3) bludgeoning damage plus 4 (1d8) piercing damage."
  "name": "Tentacle"
"source":
- "TftYP"
name: Reduced-Threat Otyugh
image: "[[Reduced-Threat Otyugh.png]]"
---

# Reduced-Threat Otyugh

```statblock
"name": "Reduced-Threat Otyugh"
"size": "Large"
"type": "aberration"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "57"
"hit_dice": "12d10 + 48"
"stats":
- !!int "16"
- !!int "11"
- !!int "19"
- !!int "6"
- !!int "13"
- !!int "6"
"speed": "walk 30 ft."
"saves":
  "Constitution": !!int "5"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Otyugh"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The otyugh can magically transmit simple messages and images to any creature\
    \ within 120 feet of it that can understand a language. This form of telepathy\
    \ doesn't allow the receiving creature to telepathically respond."
  "name": "Limited Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The otyugh makes three attacks: one with its bite and two with its tentacles."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) piercing damage. If the target is a creature, it must succeed on a DC 13\
    \ Constitution saving throw against disease or become [poisoned](/rules/conditions.md#poisoned)\
    \ until the disease is cured. Every 24 hours that elapse, the target must repeat\
    \ the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The\
    \ disease is cured on a success. The target dies if the disease reduces its hit\
    \ point maximum to 0. This reduction to the target's hit point maximum lasts until\
    \ the disease is cured."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d8\
    \ + 3) bludgeoning damage plus 4 (1d8) piercing damage."
  "name": "Tentacle"
"source":
- "TftYP"
"image": "[[Reduced-Threat Otyugh.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*

## Environment

underdark