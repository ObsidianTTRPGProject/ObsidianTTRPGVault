---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/shapechanger
statblock: inline
aliases: ["Werebear"]
---
# [Werebear](3-Mechanics\CLI\bestiary\humanoid/werebear.md)
*Source: Monster Manual p. 208. Available in the SRD.*  

```statblock
"name": "Werebear"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Neutral Good"
"ac": !!int "10"
"ac_class": "11 from natural armor in bear or hybrid form"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "19"
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "12"
- !!int "12"
"speed": "30 ft. (40 ft., climb 30 ft. in bear or hybrid form)"
"skillsaves":
  "Perception": !!int "7"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "passive Perception 17"
"languages": "Common (can't speak in bear form)"
"cr": "5"
"traits":
- "desc": "The werebear can use its action to polymorph into a Large bear-humanoid\
    \ hybrid or into a Large bear, or back into its true form, which is humanoid.\
    \ Its statistics, other than its size and AC, are the same in each form. Any equipment\
    \ it is wearing or carrying isn't transformed. It reverts to its true form if\
    \ it dies."
  "name": "Shapechanger"
- "desc": "The werebear has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- "desc": "In bear form, the werebear makes two claw attacks. In humanoid form, it\
    \ makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d10 + 4|text(15) (2d10 + 4) piercing damage. If the target\
    \ is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed\
    \ with werebear lycanthropy."
  "name": "Bite (Bear or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 4|text(13) (2d8 + 4) slashing damage."
  "name": "Claw (Bear or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d12 + 4|text(10) (1d12 + 4) slashing damage."
  "name": "Greataxe (Humanoid or Hybrid Form Only)"
"source":
- "MM"
- "GoS"
- "EGW"
- "KftGV"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/werebear.webp"
```
^statblock

## Environment

forest, hill, arctic