---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/shapechanger
statblock: inline
aliases: ["Wererat"]
---
# [Wererat](3-Mechanics\CLI\bestiary\humanoid/wererat.md)
*Source: Monster Manual p. 209. Available in the SRD.*  

```statblock
"name": "Wererat"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "10"
- !!int "15"
- !!int "12"
- !!int "11"
- !!int "10"
- !!int "8"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "darkvision 60 ft. (rat form only), passive Perception 12"
"languages": "Common (can't speak in rat form)"
"cr": "2"
"traits":
- "desc": "The wererat can use its action to polymorph into a rat-humanoid hybrid\
    \ or into a giant rat, or back into its true form, which is humanoid. Its statistics,\
    \ other than its size, are the same in each form. Any equipment it is wearing\
    \ or carrying isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- "desc": "The wererat has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- "desc": "The wererat makes two attacks, only one of which can be a bite."
  "name": "Multiattack (Humanoid or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d4 + 2|text(4) (1d4 + 2) piercing damage. If the target is\
    \ a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed\
    \ with wererat lycanthropy."
  "name": "Bite (Rat or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 2|text(5) (1d6 + 2) piercing damage."
  "name": "Shortsword (Humanoid or Hybrid Form Only)"
- "desc": "Ranged Weapon Attack: dice: d20+4 (+4) to hit, range 30/120 ft.,\
    \ one target. Hit: dice:1d6 + 2|text(5) (1d6 + 2) piercing damage."
  "name": "Hand Crossbow (Humanoid or Hybrid Form Only)"
"source":
- "MM"
- "TftYP"
- "WDH"
- "WDMM"
- "GoS"
- "DIP"
- "BGDIA"
- "IMR"
- "EGW"
- "CM"
- "SatO"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/wererat.webp"
```
^statblock

## Environment

forest, urban