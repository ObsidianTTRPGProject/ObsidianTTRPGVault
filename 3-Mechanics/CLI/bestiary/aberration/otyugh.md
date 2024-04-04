---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Otyugh"]
---
# [Otyugh](3-Mechanics\CLI\bestiary\aberration/otyugh.md)
*Source: Monster Manual p. 248. Available in the SRD.*  

```statblock
"name": "Otyugh"
"size": "Large"
"type": "aberration"
"alignment": "Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "16"
- !!int "11"
- !!int "19"
- !!int "6"
- !!int "13"
- !!int "6"
"speed": "30 ft."
"saves":
  "Constitution": !!int "7"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Otyugh"
"cr": "5"
"traits":
- "desc": "The otyugh can magically transmit simple messages and images to any creature\
    \ within 120 feet of it that can understand a language. This form of telepathy\
    \ doesn't allow the receiving creature to telepathically respond."
  "name": "Limited Telepathy"
"actions":
- "desc": "The otyugh makes three attacks: one with its bite and two with its tentacles."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 3|text(12) (2d8 + 3) piercing damage. If the target is\
    \ a creature, it must succeed on a DC 15 Constitution saving throw against disease\
    \ or become [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned) until the\
    \ disease is cured. Every 24 hours that elapse, the target must repeat the saving\
    \ throw, reducing its hit point maximum by dice:1d10|text(5) (1d10) on a failure.\
    \ The disease is cured on a success. The target dies if the disease reduces its\
    \ hit point maximum to 0. This reduction to the target's hit point maximum lasts\
    \ until the disease is cured."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 10 ft., one target.\
    \ Hit: dice:1d8 + 3|text(7) (1d8 + 3) bludgeoning damage plus dice:1d8|text(4)\
    \ (1d8) piercing damage. If the target is Medium or smaller, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 13) and [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ until the grapple ends. The otyugh has two tentacles, each of which can grapple\
    \ one target."
  "name": "Tentacle"
- "desc": "The otyugh slams creatures [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by it into each other or a solid surface. Each creature must succeed on a DC\
    \ 14 Constitution saving throw or take dice:2d6 + 3|text(10) (2d6 + 3) bludgeoning\
    \ damage and be [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned) until\
    \ the end of the otyugh's next turn. On a successful save, the target takes half\
    \ the bludgeoning damage and isn't [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)."
  "name": "Tentacle Slam"
"source":
- "MM"
- "HotDQ"
- "RoT"
- "SKT"
- "TftYP"
- "ToA"
- "WDMM"
- "IMR"
- "JttRC"
- "PaBTSO"
- "ToFW"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/otyugh.webp"
```
^statblock

## Environment

underdark