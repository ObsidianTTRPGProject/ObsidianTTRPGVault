---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/medium
- monster/type/humanoid/orc
aliases: ["Zarak"]
statblock: true
"name": "Zarak"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "37"
"hit_dice": "5d8 + 15"
"stats":
- !!int "13"
- !!int "16"
- !!int "16"
- !!int "11"
- !!int "15"
- !!int "6"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Intelligence": !!int "2"
"skillsaves":
  "Stealth": !!int "7"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Acrobatics": !!int "7"
"senses": "darkvision 60, passive Perception 16"
"languages": "Common, Orc"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zarak carries a potion of invisibility."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zarak makes two Dagger attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage, plus an extra 5 (2d4) piercing\
    \ damage if the target is a creature and Zarak has at least 18 hit points."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one Humanoid. Hit: 8 (2d4\
    \ + 3) slashing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 11). Until this grapple ends, the target takes 8 (2d4 + 3) slashing\
    \ damage at the start of each of its turns, and Zarak can't grapple another creature\
    \ or use Assassin's Whim."
  "name": "Garrote"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zarak takes the Dash, Disengage, or Hide action."
  "name": "Assassin's Whim"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zarak halves the damage he takes from an attack made against him, provided\
    \ he can see the attacker."
  "name": "Uncanny Dodge"
"source":
- "WBtW"
name: Zarak
image: "[[Zarak.png]]"
---

# Zarak

```statblock
"name": "Zarak"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "37"
"hit_dice": "5d8 + 15"
"stats":
- !!int "13"
- !!int "16"
- !!int "16"
- !!int "11"
- !!int "15"
- !!int "6"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Intelligence": !!int "2"
"skillsaves":
  "Stealth": !!int "7"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Acrobatics": !!int "7"
"senses": "darkvision 60, passive Perception 16"
"languages": "Common, Orc"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zarak carries a potion of invisibility."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zarak makes two Dagger attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage, plus an extra 5 (2d4) piercing\
    \ damage if the target is a creature and Zarak has at least 18 hit points."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one Humanoid. Hit: 8 (2d4\
    \ + 3) slashing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 11). Until this grapple ends, the target takes 8 (2d4 + 3) slashing\
    \ damage at the start of each of its turns, and Zarak can't grapple another creature\
    \ or use Assassin's Whim."
  "name": "Garrote"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zarak takes the Dash, Disengage, or Hide action."
  "name": "Assassin's Whim"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zarak halves the damage he takes from an attack made against him, provided\
    \ he can see the attacker."
  "name": "Uncanny Dodge"
"source":
- "WBtW"
"image": "[[Zarak.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 222*

## Description

Zarak is an assassin without honor or conscience. Unusually short of stature for someone of orcish heritage, he might pass for an ugly, beardless dwarf were it not for his rotting tusks and grayish pallor. The only thing he loves is money, and he wouldn't hesitate to stab allies in the back if they came between him and the riches he covets.