---
cssclass: json5e-monster
tags:
- compendium/src/psi
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/shapechanger
aliases: ["Werewolf (Krallenhorde)"]
statblock: true
"name": "Werewolf (Krallenhorde)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "15"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft. (40 ft. in canid form)"
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks not\
  \ made with silvered weapons"
"senses": "passive Perception 14"
"languages": "Common (can't speak in canid form)"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werewolf polymorphs into a wolf-humanoid canid form, or back into its\
    \ true human form. This change is dictated by the moon, but can also be induced\
    \ by trauma or strong emotion. Its statistics, other than its AC, are the same\
    \ in each form. Any equipment it is wearing or carrying isn't transformed. It\
    \ reverts to its true form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werewolf has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vildin Rampage (Canid Form Only). When the werewolf reduces a creature\
    \ to 0 hit points with a melee attack on its turn, it can take a bonus action\
    \ to move up to half its speed and make a bite attack."
  "name": "Howlpack: Vildin"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werewolf makes two attacks: one with its bite and one with its claws\
    \ or spear."
  "name": "Multiattack (Canid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) piercing damage."
  "name": "Bite (Canid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage."
  "name": "Claws (Canid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Spear (Human Form Only)"
"source":
- "PSI"
name: Werewolf (Krallenhorde)
image: "[[Werewolf (Krallenhorde).png]]"
---

# Werewolf (Krallenhorde)

```statblock
"name": "Werewolf (Krallenhorde)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "15"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft. (40 ft. in canid form)"
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks not\
  \ made with silvered weapons"
"senses": "passive Perception 14"
"languages": "Common (can't speak in canid form)"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werewolf polymorphs into a wolf-humanoid canid form, or back into its\
    \ true human form. This change is dictated by the moon, but can also be induced\
    \ by trauma or strong emotion. Its statistics, other than its AC, are the same\
    \ in each form. Any equipment it is wearing or carrying isn't transformed. It\
    \ reverts to its true form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werewolf has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vildin Rampage (Canid Form Only). When the werewolf reduces a creature\
    \ to 0 hit points with a melee attack on its turn, it can take a bonus action\
    \ to move up to half its speed and make a bite attack."
  "name": "Howlpack: Vildin"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werewolf makes two attacks: one with its bite and one with its claws\
    \ or spear."
  "name": "Multiattack (Canid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) piercing damage."
  "name": "Bite (Canid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage."
  "name": "Claws (Canid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Spear (Human Form Only)"
"source":
- "PSI"
"image": "[[Werewolf (Krallenhorde).png]]"
```
^statblock

*Source: Plane Shift: Innistrad p. 15*