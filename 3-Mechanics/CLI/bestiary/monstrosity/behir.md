---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Behir"]
---
# [Behir](3-Mechanics\CLI\bestiary\monstrosity/behir.md)
*Source: Monster Manual p. 25. Available in the SRD.*  

```statblock
"name": "Behir"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "168"
"hit_dice": "16d12 + 64"
"stats":
- !!int "23"
- !!int "16"
- !!int "18"
- !!int "7"
- !!int "14"
- !!int "12"
"speed": "50 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "6"
"damage_immunities": "lightning"
"senses": "darkvision 90 ft., passive Perception 16"
"languages": "Draconic"
"cr": "11"
"actions":
- "desc": "The behir makes two attacks: one with its bite and one to constrict."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 10 ft., one\
    \ target. Hit: dice:3d10 + 6|text(22) (3d10 + 6) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 5 ft., one\
    \ Large or smaller creature. Hit: dice:2d10 + 6|text(17) (2d10 + 6) bludgeoning\
    \ damage plus dice:2d10 + 6|text(17) (2d10 + 6) slashing damage. The target\
    \ is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) (escape DC 16)\
    \ if the behir isn't already constricting a creature, and the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ until this grapple ends."
  "name": "Constrict"
- "desc": "The behir exhales a line of lightning that is 20 feet long and 5 feet wide.\
    \ Each creature in that line must make a DC 16 Dexterity saving throw, taking\
    \ dice:12d10|text(66) (12d10) lightning damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Lightning Breath (Recharge 5-6)"
- "desc": "The behir makes one bite attack against a Medium or smaller target it is\
    \ grappling. If the attack hits, the target is also swallowed, and the grapple\
    \ ends. While swallowed, the target is [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ and [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained), it has total\
    \ cover against attacks and other effects outside the behir, and it takes dice:6d6|text(21)\
    \ (6d6) acid damage at the start of each of the behir's turns. A behir can have\
    \ only one creature swallowed at a time.\n\nIf the behir takes 30 damage or more\
    \ on a single turn from the swallowed creature, the behir must succeed on a DC\
    \ 14 Constitution saving throw at the end of that turn or regurgitate the creature,\
    \ which falls [prone](/3-Mechanics/CLI/rules/conditions.md#prone) in a space within\
    \ 10 feet of the behir. If the behir dies, a swallowed creature is no longer [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse by using 15 feet of movement, exiting [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "MM"
- "TftYP"
- "EGW"
- "CM"
- "JttRC"
- "KftGV"
- "PaBTSO"
- "ToFW"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/behir.webp"
```
^statblock

## Environment

underdark