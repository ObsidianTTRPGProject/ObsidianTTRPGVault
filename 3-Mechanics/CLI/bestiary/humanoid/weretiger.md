---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/shapechanger
statblock: inline
aliases: ["Weretiger"]
---
# [Weretiger](3-Mechanics\CLI\bestiary\humanoid/weretiger.md)
*Source: Monster Manual p. 210. Available in the SRD.*  

```statblock
"name": "Weretiger"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"stats":
- !!int "17"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "11"
"speed": "30 ft. (40 ft. in tiger form)"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common (can't speak in tiger form)"
"cr": "4"
"traits":
- "desc": "The weretiger can use its action to polymorph into a tiger-humanoid hybrid\
    \ or into a tiger, or back into its true form, which is humanoid. Its statistics,\
    \ other than its size, are the same in each form. Any equipment it is wearing\
    \ or carrying isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- "desc": "The weretiger has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- "desc": "If the weretiger moves at least 15 feet straight toward a creature and\
    \ then hits it with a claw attack on the same turn, that target must succeed on\
    \ a DC 14 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ If the target is [prone](/3-Mechanics/CLI/rules/conditions.md#prone), the weretiger\
    \ can make one bite attack against it as a bonus action."
  "name": "Pounce (Tiger or Hybrid Form Only)"
"actions":
- "desc": "In humanoid form, the weretiger makes two scimitar attacks or two longbow\
    \ attacks. In hybrid form, it can attack like a humanoid or make two claw attacks."
  "name": "Multiattack (Humanoid or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d10 + 3|text(8) (1d10 + 3) piercing damage. If the target is\
    \ a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed\
    \ with weretiger lycanthropy."
  "name": "Bite (Tiger or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 3|text(7) (1d8 + 3) slashing damage."
  "name": "Claw (Tiger or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 3|text(6) (1d6 + 3) slashing damage."
  "name": "Scimitar (Humanoid or Hybrid Form Only)"
- "desc": "Ranged Weapon Attack: dice: d20+4 (+4) to hit, range 150/600 ft.,\
    \ one target. Hit: dice:1d8 + 2|text(6) (1d8 + 2) piercing damage."
  "name": "Longbow (Humanoid or Hybrid Form Only)"
"source":
- "MM"
- "ToA"
- "EGW"
- "JttRC"
- "ToFW"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/weretiger.webp"
```
^statblock

## Environment

grassland, forest, desert