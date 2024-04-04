---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Rug of Smothering"]
---
# [Rug of Smothering](3-Mechanics\CLI\bestiary\construct/rug-of-smothering.md)
*Source: Monster Manual p. 20. Available in the SRD.*  

```statblock
"name": "Rug of Smothering"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d10"
"stats":
- !!int "17"
- !!int "14"
- !!int "10"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "10 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "2"
"traits":
- "desc": "The rug is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ while in the area of an [antimagic field](/3-Mechanics/CLI/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md), the\
    \ rug must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious) for\
    \ 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "While it is grappling a creature, the rug takes only half the damage dealt\
    \ to it, and the creature [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by the rug takes the other half."
  "name": "Damage Transfer"
- "desc": "While the rug remains motionless, it is indistinguishable from a normal\
    \ rug."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one Medium\
    \ or smaller creature. Hit: The creature is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 13). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded), and at risk of suffocating,\
    \ and the rug can't smother another target. In addition, at the start of each\
    \ of the target's turns, the target takes dice:2d6 + 3|text(10) (2d6 + 3)\
    \ bludgeoning damage."
  "name": "Smother"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "SKT"
- "ToA"
- "WDH"
- "GoS"
- "DIP"
- "SDW"
- "BGDIA"
- "EGW"
- "CM"
- "WBtW"
- "KftGV"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/construct/token/rug-of-smothering.webp"
```
^statblock