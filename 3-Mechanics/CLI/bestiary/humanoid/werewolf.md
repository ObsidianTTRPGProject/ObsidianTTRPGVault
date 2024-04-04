---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/shapechanger
statblock: inline
aliases: ["Werewolf"]
---
# [Werewolf](3-Mechanics\CLI\bestiary\humanoid/werewolf.md)
*Source: Monster Manual p. 211. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Werewolf"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"ac_class": "12 from natural armor in wolf or hybrid form"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "15"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "30 ft. (40 ft. in wolf form)"
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "passive Perception 14"
"languages": "Common (can't speak in wolf form)"
"cr": "3"
"traits":
- "desc": "The werewolf can use its action to polymorph into a wolf-humanoid hybrid\
    \ or into a wolf, or back into its true form, which is humanoid. Its statistics,\
    \ other than its AC, are the same in each form. Any equipment it is wearing or\
    \ carrying isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- "desc": "The werewolf has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
"actions":
- "desc": "The werewolf makes two attacks: two with its spear (humanoid form) or one\
    \ with its bite and one with its claws (hybrid form)."
  "name": "Multiattack (Humanoid or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 2|text(6) (1d8 + 2) piercing damage. If the target is\
    \ a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed\
    \ with werewolf lycanthropy."
  "name": "Bite (Wolf or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one creature.\
    \ Hit: dice:2d4 + 2|text(7) (2d4 + 2) slashing damage."
  "name": "Claws (Hybrid Form Only)"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft.\
    \ or range 20/60 ft., one creature. Hit: dice:1d6 + 2|text(5) (1d6 + 2)\
    \ piercing damage, or dice:1d8 + 2|text(6) (1d8 + 2) piercing damage if used\
    \ with two hands to make a melee attack."
  "name": "Spear (Humanoid Form Only)"
"source":
- "MM"
- "CoS"
- "PotA"
- "SKT"
- "WDH"
- "GoS"
- "BGDIA"
- "ERLW"
- "IMR"
- "EGW"
- "IDRotF"
- "CM"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/werewolf.webp"
```
^statblock

## Environment

forest, hill